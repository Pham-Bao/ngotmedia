// Tiện ích đọc/ghi các tập lựa chọn của khách (ảnh đã lưu, trang phục đã chọn...) vào
// localStorage — dùng chung giữa các trang để trang đặt lịch có thể đọc lại đúng lựa chọn.
export const KHOA_ANH_DA_LUU = 'ngot-media-anh-da-luu';
export const KHOA_TRANG_PHUC_DA_CHON = 'ngot-media-trang-phuc-da-chon';

export function docTapHopDaLuu(khoa: string): Set<string> {
  try {
    const raw = localStorage.getItem(khoa);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

export function ghiTapHopDaLuu(khoa: string, ds: Set<string>): void {
  try {
    localStorage.setItem(khoa, JSON.stringify([...ds]));
  } catch {
    // Trình duyệt chặn localStorage (chế độ ẩn danh...) — bỏ qua, không chặn trải nghiệm.
  }
}
