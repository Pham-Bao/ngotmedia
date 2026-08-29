import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChanTrang } from './chan-trang/chan-trang';
import { ThanhDieuHuong } from './thanh-dieu-huong/thanh-dieu-huong';

@Component({
  imports: [RouterOutlet, ThanhDieuHuong, ChanTrang],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
