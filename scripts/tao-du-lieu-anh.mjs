// Quét thư mục public/anh/<nhom>/ và sinh ra src/app/du-lieu-anh.ts
// Chạy lại lệnh `npm run tao:anh` mỗi khi thêm/xoá ảnh trong public/anh/.
//
// Vì nhiều ảnh được lưu trùng ở nhiều độ phân giải hoặc tải về nhiều lần
// (vd: "05-640.webp", "05-1600.webp", "05-640 (1).webp" đều là 1 ảnh),
// script sẽ gom các file có cùng "khoá gốc" trong 1 thư mục và chỉ giữ lại
// bản có độ phân giải cao nhất.
//
// Ảnh gốc từ máy ảnh rất nặng (vài MB/ảnh) nên script còn tạo thêm 2 bản WebP nhẹ:
//   - public/anh-nho/<nhom>/  — ảnh thu nhỏ cho lưới thư viện, tường ảnh trang chủ.
//   - public/anh-vua/<nhom>/  — ảnh cỡ vừa cho màn xem chi tiết.
// Đồng thời ghi lại kích thước thật của ảnh để giao diện giữ sẵn chỗ, tránh nhảy bố cục.
// Ảnh gốc vẫn được giữ nguyên cho nút "Tải ảnh này".

import { existsSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const goc = fileURLToPath(new URL('..', import.meta.url));
const thuMucAnh = join(goc, 'public', 'anh');
const duoiHopLe = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

// Cạnh dài tối đa (px) và chất lượng WebP của từng bản thu nhỏ.
const cacBanNho = [
  { thuMuc: 'anh-nho', canh: 720, chatLuong: 72 },
  { thuMuc: 'anh-vua', canh: 1800, chatLuong: 80 },
];

const nhanNhom = {
  'ca-nhan': 'Cá nhân',
  couple: 'Couple',
  'nhom-tap-the': 'Nhóm & tập thể',
  'thanh-xuan': 'Thanh xuân',
  'truyen-thong': 'Truyền thống',
};

function layKhoaGoc(tenFile) {
  const khongDuoi = tenFile.slice(0, -extname(tenFile).length);
  const boTrungLap = khongDuoi.replace(/\s*\(\d+\)$/, '');
  return boTrungLap.replace(/-\d{3,4}$/, '');
}

function layDoPhanGiai(tenFile) {
  const khop = tenFile.match(/-(\d{3,4})(?:\s*\(\d+\))?\./);
  return khop ? Number(khop[1]) : 0;
}

// Chỉ tạo lại bản thu nhỏ khi chưa có hoặc ảnh gốc mới hơn.
async function taoBanNho(nguon, dich, canh, chatLuong) {
  if (existsSync(dich) && statSync(dich).mtimeMs >= statSync(nguon).mtimeMs) {
    return;
  }
  await sharp(nguon)
    .rotate()
    .resize({ width: canh, height: canh, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: chatLuong })
    .toFile(dich);
}

// Xoá bản thu nhỏ của những ảnh gốc đã bị xoá.
function donBanNhoCu(thuMuc, tenGiuLai) {
  if (!existsSync(thuMuc)) {
    return;
  }
  for (const nhom of readdirSync(thuMuc)) {
    const thuMucNhom = join(thuMuc, nhom);
    for (const file of readdirSync(thuMucNhom)) {
      if (!tenGiuLai.has(`${nhom}/${file}`)) {
        rmSync(join(thuMucNhom, file));
      }
    }
  }
}

const dsThuMucNhom = readdirSync(thuMucAnh).filter((ten) =>
  statSync(join(thuMucAnh, ten)).isDirectory(),
);

const danhSachAnh = [];
const tenBanNho = new Set();

for (const nhom of dsThuMucNhom) {
  const thuMucCon = join(thuMucAnh, nhom);
  const files = readdirSync(thuMucCon).filter((ten) => duoiHopLe.has(extname(ten).toLowerCase()));

  const theoKhoa = new Map();
  for (const file of files) {
    const khoa = layKhoaGoc(file);
    const hienTai = theoKhoa.get(khoa);
    if (!hienTai || layDoPhanGiai(file) > layDoPhanGiai(hienTai)) {
      theoKhoa.set(khoa, file);
    }
  }

  const dsDaLoc = [...theoKhoa.entries()].sort(([, a], [, b]) => a.localeCompare(b));

  for (const ban of cacBanNho) {
    mkdirSync(join(goc, 'public', ban.thuMuc, nhom), { recursive: true });
  }

  for (const [i, [khoa, file]] of dsDaLoc.entries()) {
    const nguon = join(thuMucCon, file);
    const tenWebp = `${khoa}.webp`;
    tenBanNho.add(`${nhom}/${tenWebp}`);

    for (const ban of cacBanNho) {
      await taoBanNho(nguon, join(goc, 'public', ban.thuMuc, nhom, tenWebp), ban.canh, ban.chatLuong);
    }

    const { width: rong, height: cao } = await sharp(
      join(goc, 'public', 'anh-nho', nhom, tenWebp),
    ).metadata();

    danhSachAnh.push({
      id: `${nhom}-${i + 1}`,
      file: `/anh/${nhom}/${encodeURIComponent(file)}`,
      nho: `/anh-nho/${nhom}/${encodeURIComponent(tenWebp)}`,
      vua: `/anh-vua/${nhom}/${encodeURIComponent(tenWebp)}`,
      rong,
      cao,
      nhom,
    });
  }

  console.log(`${nhom}: ${files.length} file -> ${dsDaLoc.length} ảnh (đã lọc trùng)`);
}

for (const ban of cacBanNho) {
  donBanNhoCu(join(goc, 'public', ban.thuMuc), tenBanNho);
}

const noiDung = `// File này được sinh tự động bởi scripts/tao-du-lieu-anh.mjs — KHÔNG sửa tay.
// Muốn cập nhật: thêm/xoá ảnh trong public/anh/<nhom>/ rồi chạy \`npm run tao:anh\`.

export type NhomAnh = ${Object.keys(nhanNhom)
  .map((k) => `'${k}'`)
  .join(' | ')};

export const nhanNhom: Record<NhomAnh, string> = ${JSON.stringify(nhanNhom, null, 2)};

export interface AnhBoSuuTap {
  id: string;
  /** Ảnh gốc — chỉ dùng cho nút tải về. */
  file: string;
  /** Bản WebP thu nhỏ cho lưới ảnh. */
  nho: string;
  /** Bản WebP cỡ vừa cho màn xem chi tiết. */
  vua: string;
  rong: number;
  cao: number;
  nhom: NhomAnh;
}

export const danhSachAnh: AnhBoSuuTap[] = ${JSON.stringify(danhSachAnh, null, 2)};
`;

writeFileSync(join(goc, 'src', 'app', 'du-lieu-anh.ts'), noiDung, 'utf-8');
console.log(`\nĐã ghi ${danhSachAnh.length} ảnh vào src/app/du-lieu-anh.ts`);
