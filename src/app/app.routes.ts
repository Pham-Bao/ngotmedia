import { Routes } from '@angular/router';
import { DatLich } from './dat-lich/dat-lich';
import { DichVu } from './dich-vu/dich-vu';
import { ThuVien } from './thu-vien/thu-vien';
import { TrangChu } from './trang-chu/trang-chu';
import { TrangPhuc } from './trang-phuc/trang-phuc';

export const routes: Routes = [
  { path: '', component: TrangChu },
  { path: 'thu-vien', component: ThuVien },
  { path: 'dich-vu', component: DichVu },
  { path: 'gioi-thieu', component: TrangPhuc },
  { path: 'dat-lich', component: DatLich },
  { path: '**', redirectTo: '' },
];
