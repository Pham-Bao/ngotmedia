import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';
import { AnhBoSuuTap, danhSachAnh, nhanNhom } from '../du-lieu-anh';
import { BoTrangPhuc, danhSachTrangPhuc } from '../du-lieu-trang-phuc';
import {
  KHOA_ANH_DA_LUU,
  KHOA_TRANG_PHUC_DA_CHON,
  docTapHopDaLuu,
  ghiTapHopDaLuu,
} from '../luu-tru';

const EMAILJS_SERVICE_ID = 'service_jnrwo6r';
const EMAILJS_TEMPLATE_ID = 'template_pnkyz9m';
const EMAILJS_PUBLIC_KEY = 'EB18jDATYi_vKrG9S';

type Buoc = 1 | 2 | 3 | 4;

interface ThongTinKhach {
  truong: string;
  lop: string;
  siSo: string;
  hoTen: string;
  soDienThoai: string;
  ngayChup: string;
  ghiChu: string;
}

const CAC_BUOC: { so: Buoc; nhan: string }[] = [
  { so: 1, nhan: 'Ảnh yêu thích' },
  { so: 2, nhan: 'Trang phục' },
  { so: 3, nhan: 'Thông tin lớp' },
  { so: 4, nhan: 'Kiểm tra lại' },
];

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-dat-lich',
  styleUrl: './dat-lich.scss',
  templateUrl: './dat-lich.html',
})
export class DatLich {
  protected readonly nhanNhom = nhanNhom;
  protected readonly cacBuoc = CAC_BUOC;

  protected readonly anhDaLuuIds = signal<Set<string>>(docTapHopDaLuu(KHOA_ANH_DA_LUU));
  protected readonly trangPhucDaChonIds = signal<Set<string>>(
    docTapHopDaLuu(KHOA_TRANG_PHUC_DA_CHON),
  );

  protected readonly anhDaLuu = computed<AnhBoSuuTap[]>(() => {
    const ids = this.anhDaLuuIds();
    return danhSachAnh.filter((anh) => ids.has(anh.id));
  });

  protected readonly trangPhucDaChon = computed<BoTrangPhuc[]>(() => {
    const ids = this.trangPhucDaChonIds();
    return danhSachTrangPhuc.filter((bo) => ids.has(bo.id));
  });

  protected readonly tenTrangPhucDaChon = computed(() =>
    this.trangPhucDaChon()
      .map((bo) => bo.ten)
      .join(', '),
  );

  protected readonly thongTin: ThongTinKhach = {
    truong: '',
    lop: '',
    siSo: '',
    hoTen: '',
    soDienThoai: '',
    ngayChup: '',
    ghiChu: '',
  };

  protected readonly buocHienTai = signal<Buoc>(1);
  protected readonly buocToiDa = signal<Buoc>(1);
  protected readonly daCoGangXacNhanBuoc3 = signal(false);
  protected readonly dangGui = signal(false);
  protected readonly loiGui = signal(false);
  protected readonly daGui = signal(false);

  protected readonly loiTruong = computed(
    () => this.daCoGangXacNhanBuoc3() && this.thongTin.truong.trim().length === 0,
  );
  protected readonly loiLop = computed(
    () => this.daCoGangXacNhanBuoc3() && this.thongTin.lop.trim().length === 0,
  );
  protected readonly loiHoTen = computed(
    () => this.daCoGangXacNhanBuoc3() && this.thongTin.hoTen.trim().length === 0,
  );
  protected readonly loiSoDienThoai = computed(
    () => this.daCoGangXacNhanBuoc3() && this.thongTin.soDienThoai.trim().length === 0,
  );

  constructor() {
    effect(() => ghiTapHopDaLuu(KHOA_ANH_DA_LUU, this.anhDaLuuIds()));
    effect(() => ghiTapHopDaLuu(KHOA_TRANG_PHUC_DA_CHON, this.trangPhucDaChonIds()));
  }

  protected boAnh(id: string): void {
    this.anhDaLuuIds.update((hienTai) => {
      const moi = new Set(hienTai);
      moi.delete(id);
      return moi;
    });
  }

  protected boTrangPhuc(id: string): void {
    this.trangPhucDaChonIds.update((hienTai) => {
      const moi = new Set(hienTai);
      moi.delete(id);
      return moi;
    });
  }

  protected diToiBuoc(so: Buoc): void {
    if (so <= this.buocToiDa()) {
      this.buocHienTai.set(so);
    }
  }

  protected quayLai(): void {
    this.buocHienTai.update((hienTai) => Math.max(1, hienTai - 1) as Buoc);
  }

  protected tiepTuc(): void {
    const buoc = this.buocHienTai();

    if (buoc === 3) {
      this.daCoGangXacNhanBuoc3.set(true);
      if (this.loiTruong() || this.loiLop() || this.loiHoTen() || this.loiSoDienThoai()) {
        return;
      }
    }

    const buocKe = Math.min(4, buoc + 1) as Buoc;
    this.buocHienTai.set(buocKe);
    this.buocToiDa.update((toiDa) => Math.max(toiDa, buocKe) as Buoc);
  }

  protected async guiYeuCau(): Promise<void> {
    this.dangGui.set(true);
    this.loiGui.set(false);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          truong: this.thongTin.truong,
          lop: this.thongTin.lop,
          si_so: this.thongTin.siSo || 'Chưa rõ',
          ngay_chup: this.thongTin.ngayChup || 'Chưa rõ',
          ho_ten: this.thongTin.hoTen,
          so_dien_thoai: this.thongTin.soDienThoai,
          trang_phuc: this.tenTrangPhucDaChon() || 'Chưa chọn',
          so_anh: this.anhDaLuu().length,
          ghi_chu: this.thongTin.ghiChu || 'Không có',
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      this.daGui.set(true);
    } catch {
      this.loiGui.set(true);
    } finally {
      this.dangGui.set(false);
    }
  }

  protected suaLai(): void {
    this.daGui.set(false);
    this.buocHienTai.set(3);
  }
}
