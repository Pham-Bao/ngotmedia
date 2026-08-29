import { Routes } from '@angular/router';
import { DichVu } from './dich-vu/dich-vu';
import { ThuVien } from './thu-vien/thu-vien';
import { TrangChu } from './trang-chu/trang-chu';

export const routes: Routes = [
  { path: '', component: TrangChu },
  { path: 'thu-vien', component: ThuVien },
  { path: 'dich-vu', component: DichVu },
  { path: '**', redirectTo: '' },
];
