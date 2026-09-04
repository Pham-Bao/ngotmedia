import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  computed,
  effect,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { danhSachTrangPhuc } from '../du-lieu-trang-phuc';
import { KHOA_TRANG_PHUC_DA_CHON, docTapHopDaLuu, ghiTapHopDaLuu } from '../luu-tru';

interface CauHoiDap {
  hoi: string;
  dap: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-trang-phuc',
  styleUrl: './trang-phuc.scss',
  templateUrl: './trang-phuc.html',
})
export class TrangPhuc implements AfterViewInit {
  protected readonly danhSachTrangPhuc = danhSachTrangPhuc;

  protected readonly idDaChon = signal<Set<string>>(docTapHopDaLuu(KHOA_TRANG_PHUC_DA_CHON));
  protected readonly soLuongDaChon = computed(() => this.idDaChon().size);

  protected readonly boDaChon = computed(() => {
    const daChon = this.idDaChon();
    return danhSachTrangPhuc.filter((bo) => daChon.has(bo.id));
  });

  protected readonly danhSachCauHoi: CauHoiDap[] = [
    {
      hoi: 'Size chốt khi nào?',
      dap: 'Bạn chỉ cần chốt kiểu trang phục hôm nay; số lượng từng size sẽ gửi sau, muộn nhất 1 tuần trước ngày chụp.',
    },
    {
      hoi: 'Lớp phải trả thêm tiền không?',
      dap: 'Không, trừ khi lớp chọn thêm bộ ngoài danh sách như cổ phục hay đồ thanh xuân riêng.',
    },
    {
      hoi: 'Cả lớp phải chọn giống nhau không?',
      dap: 'Không bắt buộc — lớp có thể chia theo nhóm hoặc theo từng buổi chụp.',
    },
    {
      hoi: 'Sau khi chốt đồ thì sao?',
      dap: 'Danh sách sẽ được xác nhận lại một lần trong bước đặt lịch (khoảng 10 phút, chưa cần thanh toán ngay).',
    },
  ];

  protected readonly chiSoFaqDangMo = signal<number | null>(0);
  protected readonly daSaoChep = signal(false);

  @ViewChildren('revealEl') private cacPhanTuReveal!: QueryList<ElementRef<HTMLElement>>;

  constructor() {
    effect(() => ghiTapHopDaLuu(KHOA_TRANG_PHUC_DA_CHON, this.idDaChon()));
  }

  protected laDaChon(id: string): boolean {
    return this.idDaChon().has(id);
  }

  protected chuyenChon(id: string): void {
    this.idDaChon.update((hienTai) => {
      const moi = new Set(hienTai);
      moi.has(id) ? moi.delete(id) : moi.add(id);
      return moi;
    });
  }

  protected boChon(id: string): void {
    this.idDaChon.update((hienTai) => {
      const moi = new Set(hienTai);
      moi.delete(id);
      return moi;
    });
  }

  protected chuyenFaq(chiSo: number): void {
    this.chiSoFaqDangMo.update((hienTai) => (hienTai === chiSo ? null : chiSo));
  }

  protected async saoChepDanhSach(): Promise<void> {
    const ds = this.boDaChon();
    if (ds.length === 0) {
      return;
    }
    const noiDung = ['Danh sách trang phục đã chọn — Ngọt Media:', ...ds.map((bo) => `- ${bo.ten}`)].join(
      '\n',
    );
    try {
      await navigator.clipboard.writeText(noiDung);
      this.daSaoChep.set(true);
      setTimeout(() => this.daSaoChep.set(false), 1600);
    } catch {
      // Trình duyệt chặn clipboard — bỏ qua, không chặn trải nghiệm.
    }
  }

  ngAfterViewInit(): void {
    const quanSat = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('hien-ra');
            quanSat.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );

    this.cacPhanTuReveal.forEach((phanTu) => quanSat.observe(phanTu.nativeElement));
  }
}
