export interface BoTrangPhuc {
  id: string;
  ten: string;
  moTa: string;
  file: string;
}

export const danhSachTrangPhuc: BoTrangPhuc[] = [
  {
    id: 'ao-dai',
    ten: 'Áo dài',
    moTa: 'Áo dài truyền thống, nhẹ nhàng và duyên dáng.',
    file: '/trang-phuc/ao-dai.avif',
  },
  {
    id: 'dong-phuc',
    ten: 'Đồng phục',
    moTa: 'Đồng phục học sinh, gợi nhớ thanh xuân áo trắng.',
    file: '/trang-phuc/dong-phuc.avif',
  },
  {
    id: 'vest',
    ten: 'Vest',
    moTa: 'Vest lịch lãm, phù hợp concept văn phòng — trường học nghiêm túc.',
    file: '/trang-phuc/vets.webp',
  },
  {
    id: 'cu-nhan',
    ten: 'Cử nhân',
    moTa: 'Áo cử nhân, đánh dấu cột mốc tốt nghiệp.',
    file: '/trang-phuc/cua-nhan.webp',
  },
  {
    id: 'truyen-thong',
    ten: 'Truyền thống',
    moTa: 'Áo tốt nghiệp cùng hoa tươi giữa thiên nhiên.',
    file: '/trang-phuc/truyen-thong.webp',
  },
  {
    id: 'tong-dai',
    ten: 'Tổng đài',
    moTa: 'Concept hoài cổ văn phòng — trường học thập niên cũ.',
    file: '/trang-phuc/tong-dai.jpg',
  },
  {
    id: 'khac',
    ten: 'Khác',
    moTa: 'Phong cách tự do, cá tính riêng không theo khuôn mẫu.',
    file: '/trang-phuc/khac.webp',
  },
];
