import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  QueryList,
  ViewChildren,
  computed,
  effect,
  signal,
} from '@angular/core';
import { NhomAnh, danhSachAnh, nhanNhom } from '../du-lieu-anh';

type BoLoc = 'tat-ca' | 'da-luu' | NhomAnh;

const KHOA_LUU_TRU = 'ngot-media-anh-da-luu';

function docAnhDaLuu(): Set<string> {
  try {
    const raw = localStorage.getItem(KHOA_LUU_TRU);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

function ghiAnhDaLuu(ds: Set<string>): void {
  try {
    localStorage.setItem(KHOA_LUU_TRU, JSON.stringify([...ds]));
  } catch {
    // Trình duyệt chặn localStorage (chế độ ẩn danh...) — bỏ qua, không chặn trải nghiệm.
  }
}

// Đồng bộ ảnh đang xem lên URL (?anh=id) để có thể copy/chia sẻ link thẳng tới 1 ảnh.
function capNhatUrlAnh(id: string | null): void {
  const url = new URL(window.location.href);
  if (id) {
    url.searchParams.set('anh', id);
  } else {
    url.searchParams.delete('anh');
  }
  window.history.replaceState(null, '', url.pathname + url.search);
}

@Component({
  imports: [],
  selector: 'app-thu-vien',
  styleUrl: './thu-vien.scss',
  templateUrl: './thu-vien.html',
})
export class ThuVien implements AfterViewInit, OnDestroy {
  protected readonly nhanNhom = nhanNhom;
  protected readonly tongSoAnh = danhSachAnh.length;
  protected readonly danhSachNhom = Object.keys(nhanNhom) as NhomAnh[];

  protected readonly boLocDangChon = signal<BoLoc>('tat-ca');
  protected readonly anhDaLuuIds = signal<Set<string>>(docAnhDaLuu());
  protected readonly soAnhDaLuu = computed(() => this.anhDaLuuIds().size);

  protected readonly anhDaLoc = computed(() => {
    const boLoc = this.boLocDangChon();
    if (boLoc === 'tat-ca') {
      return danhSachAnh;
    }
    if (boLoc === 'da-luu') {
      const daLuu = this.anhDaLuuIds();
      return danhSachAnh.filter((anh) => daLuu.has(anh.id));
    }
    return danhSachAnh.filter((anh) => anh.nhom === boLoc);
  });

  protected readonly chiSoDangXem = signal<number | null>(null);

  protected readonly anhXemHienTai = computed(() => {
    const chiSo = this.chiSoDangXem();
    const ds = this.anhDaLoc();
    return chiSo !== null && chiSo < ds.length ? ds[chiSo] : null;
  });

  protected readonly anhLienQuan = computed(() => {
    const anh = this.anhXemHienTai();
    if (!anh) {
      return [];
    }
    return danhSachAnh.filter((a) => a.nhom === anh.nhom && a.id !== anh.id).slice(0, 10);
  });

  protected readonly menuMoRong = signal(false);
  protected readonly daSaoChepLienKet = signal(false);

  @ViewChildren('revealEl') private cacPhanTuReveal!: QueryList<ElementRef<HTMLElement>>;
  private quanSatReveal?: IntersectionObserver;

  constructor() {
    effect(() => {
      document.body.style.overflow = this.chiSoDangXem() !== null ? 'hidden' : '';
    });

    effect(() => ghiAnhDaLuu(this.anhDaLuuIds()));

    effect(() => {
      const anh = this.anhXemHienTai();
      capNhatUrlAnh(anh ? anh.id : null);
    });

    this.moAnhTuUrl();
  }

  // Nếu truy cập bằng link ?anh=<id>, mở thẳng vào đúng ảnh đó.
  private moAnhTuUrl(): void {
    const idAnh = new URLSearchParams(window.location.search).get('anh');
    if (idAnh) {
      this.moAnhTheoId(idAnh);
    }
  }

  // Mở 1 ảnh bất kỳ theo id — dùng cho link sâu và khi bấm vào "ảnh liên quan".
  protected moAnhTheoId(id: string): void {
    const anh = danhSachAnh.find((a) => a.id === id);
    if (!anh) {
      return;
    }
    this.menuMoRong.set(false);
    this.boLocDangChon.set(anh.nhom);
    const chiSo = this.anhDaLoc().findIndex((a) => a.id === id);
    if (chiSo >= 0) {
      this.chiSoDangXem.set(chiSo);
    }
  }

  protected chonBoLoc(boLoc: BoLoc): void {
    this.boLocDangChon.set(boLoc);
  }

  protected laDaLuu(id: string): boolean {
    return this.anhDaLuuIds().has(id);
  }

  protected chuyenLuu(id: string, su: Event): void {
    su.stopPropagation();
    this.anhDaLuuIds.update((hienTai) => {
      const moi = new Set(hienTai);
      moi.has(id) ? moi.delete(id) : moi.add(id);
      return moi;
    });
  }

  protected moAnh(chiSo: number): void {
    this.chiSoDangXem.set(chiSo);
  }

  protected dongAnh(): void {
    this.chiSoDangXem.set(null);
    this.menuMoRong.set(false);
  }

  protected chuyenAnh(buoc: number): void {
    const ds = this.anhDaLoc();
    const hienTai = this.chiSoDangXem();
    if (hienTai === null || ds.length === 0) {
      return;
    }
    this.chiSoDangXem.set((hienTai + buoc + ds.length) % ds.length);
    this.menuMoRong.set(false);
  }

  protected chuyenMenu(): void {
    this.menuMoRong.update((hienTai) => !hienTai);
  }

  protected dongMenu(): void {
    this.menuMoRong.set(false);
  }

  protected async saoChepLienKet(): Promise<void> {
    try {
      await navigator.clipboard.writeText(window.location.href);
      this.daSaoChepLienKet.set(true);
      setTimeout(() => this.daSaoChepLienKet.set(false), 1600);
    } catch {
      // Trình duyệt chặn clipboard — bỏ qua, không chặn trải nghiệm.
    }
    this.menuMoRong.set(false);
  }

  @HostListener('window:keydown', ['$event'])
  protected xuLyPhim(su: KeyboardEvent): void {
    if (this.chiSoDangXem() === null) {
      return;
    }
    if (su.key === 'Escape') {
      this.menuMoRong() ? this.dongMenu() : this.dongAnh();
    } else if (su.key === 'ArrowRight') {
      this.chuyenAnh(1);
    } else if (su.key === 'ArrowLeft') {
      this.chuyenAnh(-1);
    }
  }

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

    this.quanSatCacPhanTu();
    this.cacPhanTuReveal.changes.subscribe(() => this.quanSatCacPhanTu());
  }

  private quanSatCacPhanTu(): void {
    this.cacPhanTuReveal.forEach((phanTu) => this.quanSatReveal?.observe(phanTu.nativeElement));
  }

  ngOnDestroy(): void {
    this.quanSatReveal?.disconnect();
    document.body.style.overflow = '';
  }
}
