import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { danhSachAnh } from '../du-lieu-anh';

interface DichVuNoiBat {
  ten: string;
  moTa: string;
}

const SO_COT_TUONG = 5;

function chiaCotTuongAnh(): string[][] {
  const anhChoTuong = danhSachAnh.filter((_, i) => i % 5 === 0).slice(0, 30);
  const cot: string[][] = Array.from({ length: SO_COT_TUONG }, () => []);
  anhChoTuong.forEach((anh, i) => cot[i % SO_COT_TUONG].push(anh.file));
  return cot;
}

function lamMuot(a: number, b: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

// Hằng số trôi (px/khung hình) và độ nhạy với tốc độ cuộn của từng cột —
// dấu xen kẽ để các cột trôi ngược hướng nhau, giống hiệu ứng bức tường ảnh.
const TROI_COT = [0.1, -0.07, 0.13, -0.09, 0.08];
const NHAY_CUON_COT = [0.55, -0.4, 0.7, -0.5, 0.45];

@Component({
  imports: [RouterLink],
  selector: 'app-trang-chu',
  styleUrl: './trang-chu.scss',
  templateUrl: './trang-chu.html',
})
export class TrangChu implements AfterViewInit, OnDestroy {
  protected readonly cotTuongAnh = chiaCotTuongAnh();
  protected readonly tongSoAnh = danhSachAnh.length;

  protected readonly anhNoiBat = danhSachAnh.filter((_, i) => i % 19 === 3).slice(0, 8);

  protected readonly dichVuNoiBat: DichVuNoiBat[] = [
    { ten: 'Chân dung cá nhân', moTa: 'Tôn dáng và cá tính riêng của bạn.' },
    { ten: 'Ảnh cưới & couple', moTa: 'Lưu giữ khoảnh khắc ngọt ngào của hai người.' },
    { ten: 'Gia đình', moTa: 'Bộ ảnh ấm áp, tự nhiên, lưu giữ sum vầy.' },
    { ten: 'Sản phẩm & thương hiệu', moTa: 'Ảnh chuyên nghiệp cho thương hiệu của bạn.' },
  ];

  protected readonly cacBuocQuyTrinh = [
    { so: '01', ten: 'Đặt lịch', moTa: 'Nhắn Zalo hoặc điền form để chọn gói và thời gian chụp.' },
    { so: '02', ten: 'Chụp hình', moTa: 'Ê-kíp Ngọt Media đồng hành, hỗ trợ dáng và concept.' },
    { so: '03', ten: 'Nhận ảnh', moTa: 'Nhận bộ ảnh đã chỉnh sửa trong 3–7 ngày làm việc.' },
  ];

  @ViewChildren('revealEl') private cacPhanTuReveal!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('tuongKhung') private tuongKhungRef!: ElementRef<HTMLElement>;
  @ViewChild('tuongPlate') private tuongPlateRef!: ElementRef<HTMLElement>;
  @ViewChildren('cotTrack') private cacTrackRef!: QueryList<ElementRef<HTMLElement>>;

  private quanSatReveal?: IntersectionObserver;
  private caoTrack: number[] = [];
  private offsetCot: number[] = [];
  private scrollTruoc = 0;
  private van = 0;
  private dangChay = false;
  private idKhungHinh = 0;

  ngAfterViewInit(): void {
    this.quanSatReveal = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('hien-ra');
            this.quanSatReveal?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );
    this.cacPhanTuReveal.forEach((phanTu) => this.quanSatReveal?.observe(phanTu.nativeElement));

    this.offsetCot = this.cotTuongAnh.map(() => 0);
    this.caoTrack = this.cotTuongAnh.map(() => 0);
    this.scrollTruoc = window.scrollY;
    this.dangChay = true;
    this.idKhungHinh = requestAnimationFrame(this.chayKhungHinh);
  }

  private readonly chayKhungHinh = (): void => {
    if (!this.dangChay) {
      return;
    }

    const y = window.scrollY;
    const doLech = Math.max(-80, Math.min(80, y - this.scrollTruoc));
    this.scrollTruoc = y;
    this.van += (doLech - this.van) * 0.12;
    if (Math.abs(this.van) < 0.01) {
      this.van = 0;
    }

    const giamChuyenDong = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!giamChuyenDong) {
      this.cacTrackRef.forEach((track, i) => {
        const el = track.nativeElement;
        if (!this.caoTrack[i]) {
          this.caoTrack[i] = el.scrollHeight / 2 || 1;
        }
        const cao = this.caoTrack[i];
        this.offsetCot[i] +=
          TROI_COT[i % TROI_COT.length] - this.van * NHAY_CUON_COT[i % NHAY_CUON_COT.length];

        let t = this.offsetCot[i] % cao;
        if (t > 0) {
          t -= cao;
        } else if (t < -cao) {
          t += cao;
        }
        el.style.transform = `translate3d(0, ${t.toFixed(2)}px, 0)`;
      });
    }

    const khung = this.tuongKhungRef.nativeElement;
    const tongQuangDuong = khung.offsetHeight - window.innerHeight;
    const rect = khung.getBoundingClientRect();
    const tienDo = Math.max(0, Math.min(1, -rect.top / (tongQuangDuong || 1)));
    const doHien = 1 - lamMuot(0.45, 0.85, tienDo);
    const plate = this.tuongPlateRef.nativeElement;
    plate.style.opacity = doHien.toFixed(3);
    plate.style.transform = `translateY(${((1 - doHien) * -28).toFixed(1)}px)`;

    this.idKhungHinh = requestAnimationFrame(this.chayKhungHinh);
  };

  ngOnDestroy(): void {
    this.dangChay = false;
    cancelAnimationFrame(this.idKhungHinh);
    this.quanSatReveal?.disconnect();
  }
}
