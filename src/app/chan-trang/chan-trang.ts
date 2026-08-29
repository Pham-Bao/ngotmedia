import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MucChanTrang {
  nhan: string;
  duongDan: string;
}

@Component({
  imports: [RouterLink],
  selector: 'app-chan-trang',
  styleUrl: './chan-trang.scss',
  templateUrl: './chan-trang.html',
})
export class ChanTrang {
  protected readonly namHienTai = new Date().getFullYear();

  protected readonly lienKetNhanh: MucChanTrang[] = [
    { nhan: 'Trang chủ', duongDan: '/' },
    { nhan: 'Thư viện', duongDan: '/thu-vien' },
    { nhan: 'Dịch vụ', duongDan: '/dich-vu' },
    { nhan: 'Giới thiệu', duongDan: '/gioi-thieu' },
    { nhan: 'Liên hệ', duongDan: '/lien-he' },
  ];

  protected readonly mangXaHoi: MucChanTrang[] = [
    { nhan: 'Facebook', duongDan: '#' },
    { nhan: 'Instagram', duongDan: '#' },
    { nhan: 'Zalo', duongDan: '#' },
  ];
}
