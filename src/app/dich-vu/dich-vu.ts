import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren, signal } from '@angular/core';

interface GoiDichVu {
  ten: string;
  moTa: string;
  gia: string;
  diemNoiBat: string[];
}

interface CauHoiDap {
  hoi: string;
  dap: string;
}

@Component({
  imports: [],
  selector: 'app-dich-vu',
  styleUrl: './dich-vu.scss',
  templateUrl: './dich-vu.html',
})
export class DichVu implements AfterViewInit {
  protected readonly danhSachDichVu: GoiDichVu[] = [
    {
      ten: 'Chân dung cá nhân',
      moTa: 'Bộ ảnh chân dung studio, tôn dáng và cá tính riêng của bạn.',
      gia: 'Từ 1.500.000đ',
      diemNoiBat: ['60–90 phút chụp', '10 ảnh chỉnh sửa cao cấp', 'Trang điểm cơ bản (tuỳ chọn)'],
    },
    {
      ten: 'Ảnh cưới & couple',
      moTa: 'Lưu giữ khoảnh khắc ngọt ngào của hai người theo phong cách riêng.',
      gia: 'Từ 5.000.000đ',
      diemNoiBat: ['Ê-kíp chụp + hỗ trợ dáng', '2 địa điểm/concept', 'Album ảnh cao cấp'],
    },
    {
      ten: 'Gia đình',
      moTa: 'Bộ ảnh gia đình ấm áp, tự nhiên, lưu giữ khoảnh khắc sum vầy.',
      gia: 'Từ 2.000.000đ',
      diemNoiBat: ['45–60 phút chụp', 'Không giới hạn số thành viên', '15 ảnh chỉnh sửa'],
    },
    {
      ten: 'Sản phẩm & thương hiệu',
      moTa: 'Ảnh sản phẩm chuyên nghiệp, nhất quán bộ nhận diện thương hiệu.',
      gia: 'Liên hệ báo giá',
      diemNoiBat: ['Set-up ánh sáng riêng', 'Chỉnh sửa theo bộ nhận diện', 'Giao file theo lô'],
    },
  ];

  protected readonly danhSachCauHoi: CauHoiDap[] = [
    {
      hoi: 'Tôi cần đặt lịch trước bao lâu?',
      dap: 'Bạn nên đặt lịch trước ít nhất 3–5 ngày để studio sắp xếp ê-kíp và chuẩn bị concept phù hợp nhất.',
    },
    {
      hoi: 'Ảnh sau khi chụp bao lâu thì nhận được?',
      dap: 'Thời gian chỉnh sửa và bàn giao ảnh thường từ 3–7 ngày làm việc, tuỳ theo gói dịch vụ.',
    },
    {
      hoi: 'Giá dịch vụ đã bao gồm trang điểm, trang phục chưa?',
      dap: 'Tuỳ gói dịch vụ, một số gói đã bao gồm trang điểm cơ bản; trang phục và phụ kiện đặc biệt sẽ được báo giá riêng.',
    },
  ];

  protected readonly chiSoFaqDangMo = signal<number | null>(0);

  @ViewChildren('revealEl') private cacPhanTuReveal!: QueryList<ElementRef<HTMLElement>>;

  protected chuyenFaq(chiSo: number): void {
    this.chiSoFaqDangMo.update((hienTai) => (hienTai === chiSo ? null : chiSo));
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
      { threshold: 0.15 },
    );

    this.cacPhanTuReveal.forEach((phanTu) => quanSat.observe(phanTu.nativeElement));
  }
}
