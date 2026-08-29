// Quét thư mục public/anh/<nhom>/ và sinh ra src/app/du-lieu-anh.ts
// Chạy lại lệnh `npm run tao:anh` mỗi khi thêm/xoá ảnh trong public/anh/.
//
// Vì nhiều ảnh được lưu trùng ở nhiều độ phân giải hoặc tải về nhiều lần
// (vd: "05-640.webp", "05-1600.webp", "05-640 (1).webp" đều là 1 ảnh),
// script sẽ gom các file có cùng "khoá gốc" trong 1 thư mục và chỉ giữ lại
// bản có độ phân giải cao nhất.

import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const goc = fileURLToPath(new URL('..', import.meta.url));
const thuMucAnh = join(goc, 'public', 'anh');
const duoiHopLe = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

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

const dsThuMucNhom = readdirSync(thuMucAnh).filter((ten) =>
  statSync(join(thuMucAnh, ten)).isDirectory(),
);

const danhSachAnh = [];

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

  const dsFileDaLoc = [...theoKhoa.values()].sort((a, b) => a.localeCompare(b));

  dsFileDaLoc.forEach((file, i) => {
    danhSachAnh.push({
      id: `${nhom}-${i + 1}`,
      file: `/anh/${nhom}/${encodeURIComponent(file)}`,
      nhom,
    });
  });

  console.log(`${nhom}: ${files.length} file -> ${dsFileDaLoc.length} ảnh (đã lọc trùng)`);
}

const noiDung = `// File này được sinh tự động bởi scripts/tao-du-lieu-anh.mjs — KHÔNG sửa tay.
// Muốn cập nhật: thêm/xoá ảnh trong public/anh/<nhom>/ rồi chạy \`npm run tao:anh\`.

export type NhomAnh = ${Object.keys(nhanNhom)
    .map((k) => `'${k}'`)
    .join(' | ')};

export const nhanNhom: Record<NhomAnh, string> = ${JSON.stringify(nhanNhom, null, 2)};

export interface AnhBoSuuTap {
  id: string;
  file: string;
  nhom: NhomAnh;
}

export const danhSachAnh: AnhBoSuuTap[] = ${JSON.stringify(danhSachAnh, null, 2)};
`;

writeFileSync(join(goc, 'src', 'app', 'du-lieu-anh.ts'), noiDung, 'utf-8');
console.log(`\nĐã ghi ${danhSachAnh.length} ảnh vào src/app/du-lieu-anh.ts`);
