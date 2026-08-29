import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';

interface MucDieuHuong {
  nhan: string;
  duongDan: string;
}

// Các trang có ảnh nền tối tràn viền ngay đầu trang — header sẽ trong suốt ở đây
// cho tới khi người dùng cuộn xuống, tránh cảm giác thanh header "cắt ngang" thô.
const TRANG_CO_NEN_TOI = ['/', '/dich-vu'];

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-thanh-dieu-huong',
  styleUrl: './thanh-dieu-huong.scss',
  templateUrl: './thanh-dieu-huong.html',
})
export class ThanhDieuHuong {
  private readonly router = inject(Router);

  protected readonly danhSachMuc: MucDieuHuong[] = [
    { nhan: 'Trang chủ', duongDan: '/' },
    { nhan: 'Thư viện', duongDan: '/thu-vien' },
    { nhan: 'Dịch vụ', duongDan: '/dich-vu' },
    { nhan: 'Giới thiệu', duongDan: '/gioi-thieu' },
    { nhan: 'Liên hệ', duongDan: '/lien-he' },
  ];

  protected readonly menuDangMo = signal(false);

  protected readonly duongDanHienTai = signal(this.router.url.split('?')[0]);
  protected readonly daCuonTrang = signal(window.scrollY > 40);

  protected readonly coTheTrongSuot = computed(() =>
    TRANG_CO_NEN_TOI.includes(this.duongDanHienTai()),
  );

  protected readonly trongSuot = computed(() => this.coTheTrongSuot() && !this.daCuonTrang());

  constructor() {
    this.router.events
      .pipe(filter((su): su is NavigationEnd => su instanceof NavigationEnd))
      .subscribe((su) => {
        this.duongDanHienTai.set(su.urlAfterRedirects.split('?')[0]);
        this.daCuonTrang.set(window.scrollY > 40);
      });
  }

  @HostListener('window:scroll')
  protected xuLyCuonTrang(): void {
    this.daCuonTrang.set(window.scrollY > 40);
  }

  protected moMenu(): void {
    this.menuDangMo.set(true);
  }

  protected dongMenu(): void {
    this.menuDangMo.set(false);
  }
}
