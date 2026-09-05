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
    { nhan: 'Chọn trang phục', duongDan: '/gioi-thieu' },
  ];

  protected readonly mangXaHoi: MucChanTrang[] = [
    {
      nhan: 'Facebook',
      duongDan:
        'https://www.facebook.com/p/Ng%E1%BB%8Dt-Media-Ch%E1%BB%A5p-%E1%BA%A2nh-K%E1%BB%B7-Y%E1%BA%BFu-100092593457089/',
    },
    { nhan: 'TikTok', duongDan: 'https://www.tiktok.com/@ngotmedia' },
    { nhan: 'Zalo', duongDan: 'https://zalo.me/0912513288' },
  ];
}
