# NGỌT MEDIA - CLAUDE INSTRUCTIONS

## 1. THÔNG TIN DỰ ÁN

Đây là dự án Frontend website cho studio chụp ảnh:

**Tên thương hiệu:** Ngọt Media

Mục tiêu của website:

- Giới thiệu studio.
- Trưng bày các bộ ảnh/portfolio.
- Giới thiệu dịch vụ.
- Tạo ấn tượng chuyên nghiệp, hiện đại và cao cấp.
- Tăng tỷ lệ khách hàng liên hệ và đặt lịch.
- Ưu tiên trải nghiệm hình ảnh và cảm giác thị giác.
- Responsive tốt trên desktop, tablet và mobile.

Website phải có cảm giác là website của một studio chụp ảnh chuyên nghiệp,
không phải một website bán hàng hoặc template doanh nghiệp thông thường.

---

# 2. CÔNG NGHỆ

Dự án sử dụng:

- Angular
- TypeScript
- HTML
- SCSS
- Tailwind CSS nếu project đã được cấu hình

Không được tự ý chuyển sang:

- React
- Vue
- Next.js
- Nuxt
- hoặc framework khác.

Không tạo project Angular mới nếu project hiện tại đã tồn tại.

Luôn làm việc trực tiếp trên project hiện tại.

---

# 3. NGUYÊN TẮC QUAN TRỌNG

TRƯỚC KHI THỰC HIỆN MỘT TASK LỚN:

1. Đọc file CLAUDE.md này.
2. Kiểm tra cấu trúc project hiện tại.
3. Đọc các component liên quan.
4. Kiểm tra những file đang tồn tại.
5. Xác định những file cần tạo hoặc chỉnh sửa.
6. Đề xuất phương án nếu task có ảnh hưởng lớn đến kiến trúc.
7. Sau đó mới tiến hành code.

Không được tự ý thay đổi kiến trúc project nếu không cần thiết.

Không được tạo file trùng chức năng với file/component đã tồn tại.

---

# 4. CẤU TRÚC COMPONENT

Website phải được chia thành các component rõ ràng.

Các section lớn nên được tách thành component riêng.

Ví dụ:

- thanh-dieu-huong
- trang-chu
- gioi-thieu
- dich-vu
- bo-suu-tap
- quy-trinh
- danh-gia
- lien-he
- chan-trang

Không viết toàn bộ website vào một component duy nhất.

Nếu một component trở nên quá lớn hoặc có quá nhiều trách nhiệm,
hãy chủ động tách thành component nhỏ hơn.

Mỗi component phải có trách nhiệm rõ ràng.

---

# 5. QUY TẮC ĐẶT TÊN

## Component và thư mục

Sử dụng:

- tiếng Việt
- không dấu
- kebab-case

Ví dụ:

- trang-chu
- gioi-thieu
- dich-vu
- bo-suu-tap
- quy-trinh
- danh-gia
- lien-he

Không sử dụng tên tiếng Anh nếu không cần thiết.

có thể viết tiếng anh nếu nó là thông dụng:

- navbar
- services
- footer

nếu component đó do chúng ta tự tạo.

---

# 6. TÊN BIẾN VÀ FUNCTION

Ưu tiên tiếng Việt không dấu khi đặt tên biến/function.

Ví dụ:

- danhSachAnh
- danhSachDichVu
- danhSachDanhGia
- anhDangXem
- moMenu()
- dongMenu()
- chuyenAnh()

Các tên bắt buộc của Angular, TypeScript,
HTML hoặc thư viện bên ngoài phải giữ nguyên.

Ví dụ:

- ngOnInit
- Component
- EventEmitter
- Observable

---

# 7. THIẾT KẾ NGỌT MEDIA

Phong cách tổng thể:

- Hiện đại
- Sang trọng
- Tinh tế
- Trẻ trung
- Nghệ thuật
- Premium
- Có chiều sâu
- Ưu tiên hình ảnh

Không làm giao diện:

- quá nhiều màu
- quá nhiều gradient
- quá nhiều shadow
- quá nhiều border
- giống template miễn phí
- quá nhiều animation gây rối mắt

Thiết kế phải có khoảng trắng hợp lý.

màu chủ đạo xanh rêu đệm #264653 và hồng đất #f4acb7

Typography phải rõ ràng và có tính thẩm mỹ.

Hình ảnh phải là một trong những yếu tố chính của giao diện.

---

# 8. WEBSITE THAM KHẢO

Khi tôi cung cấp một website tham khảo bằng URL: https://2007st.com/thu-vien.html, https://2007st.com/

1. Phải phân tích website trước khi code.
2. Không được code ngay nếu tôi chưa yêu cầu.
3. Phân tích các yếu tố:

- Layout
- Header
- Hero
- Typography
- Màu sắc
- Spacing
- Button
- Gallery
- Hình ảnh
- Animation
- Hover effect
- Scroll effect
- Responsive
- Mobile layout
- UX
- CTA

Sau khi phân tích:

- Đề xuất cách áp dụng vào Ngọt Media.
- Giữ tinh thần và chất lượng thiết kế.
- Không sao chép nguyên văn nội dung.
- Không sao chép logo.
- Không sử dụng tài sản thương hiệu của website tham khảo.
- Không sao chép nguyên trạng toàn bộ website nếu website không thuộc Ngọt Media.

Mục tiêu là tạo một website riêng cho Ngọt Media dựa trên cảm hứng
và các nguyên tắc thiết kế tốt từ website tham khảo.

---

# 9. HÌNH ẢNH

Ngọt Media là studio chụp ảnh.

Vì vậy hình ảnh là yếu tố cực kỳ quan trọng.

Không được làm hình ảnh quá nhỏ nếu không có lý do.

Ưu tiên:

- Hero image lớn
- Portfolio
- Gallery
- Masonry
- Grid
- Slider
- Image reveal
- Lightbox khi phù hợp

Hình ảnh phải được trình bày đẹp trên cả desktop và mobile.

Không kéo méo hình ảnh.

Sử dụng object-fit phù hợp.

---

# 10. ANIMATION

Animation là một phần quan trọng của website.

Ưu tiên animation:

- Fade in
- Fade up
- Fade down
- Scale
- Image reveal
- Stagger
- Hover
- Parallax nhẹ
- Smooth scrolling
- Section transition

Animation phải:

- Mượt
- Tinh tế
- Có chủ đích
- Không gây chóng mặt
- Không ảnh hưởng UX
- Không làm website chậm

Ưu tiên animation khoảng:

300ms - 800ms

Không lạm dụng animation.

Không làm tất cả element chuyển động cùng lúc.

Animation nên có thứ tự và độ trễ hợp lý.

---

# 11. SCROLL EXPERIENCE

Website nên có trải nghiệm cuộn trang mượt.

Khi người dùng scroll:

- Section xuất hiện tự nhiên.
- Hình ảnh có thể reveal nhẹ.
- Text có thể fade/slide nhẹ.
- Gallery có thể có hiệu ứng phù hợp.
- Các section chuyển tiếp mềm mại.

Không sử dụng hiệu ứng scroll quá mạnh.

---

# 12. HEADER

Header phải:

- Đẹp
- Gọn
- Dễ sử dụng
- Responsive.

Desktop:

- Logo Ngọt Media
- Menu
- CTA đặt lịch/liên hệ

Mobile:

- Logo
- Menu button
- Menu mobile animation mượt.

Nếu sử dụng header cố định:

- Không được che nội dung.
- Có transition khi scroll.
- Có thể thay đổi background khi người dùng scroll nếu phù hợp.

---

# 13. HERO

Hero là section quan trọng nhất.

Hero phải tạo ấn tượng ngay khi người dùng truy cập website.

Ưu tiên:

- Hình ảnh lớn hoặc video.
- Typography nổi bật.
- CTA rõ ràng.
- Animation tinh tế.

Hero phải truyền tải được:

"Đây là một studio chụp ảnh chuyên nghiệp."

Không nhồi quá nhiều text.

---

# 14. RESPONSIVE

Website bắt buộc responsive.

Phải kiểm tra:

- Desktop
- Laptop
- Tablet
- Mobile

Không chỉ thu nhỏ desktop xuống mobile.

Mobile phải được thiết kế hợp lý.

Đặc biệt kiểm tra:

- Header
- Hero
- Gallery
- Typography
- Button
- Form
- Hình ảnh
- Khoảng cách
- Animation

Không để:

- text tràn màn hình
- ảnh bị méo
- button quá nhỏ
- menu bị vỡ
- horizontal scroll ngoài ý muốn.

---

# 15. UX / CTA

Người dùng phải dễ dàng:

- Xem portfolio
- Xem dịch vụ
- Xem thông tin studio
- Xem đánh giá
- Liên hệ
- Đặt lịch

CTA có thể sử dụng:

- Đặt lịch chụp
- Xem bộ sưu tập
- Xem dịch vụ
- Liên hệ Ngọt Media

CTA phải dễ nhận biết nhưng không phá vỡ thiết kế.

---

# 16. CODE QUALITY

Code phải:

- Dễ đọc
- Dễ hiểu
- Dễ bảo trì
- Có cấu trúc
- Không lặp code không cần thiết.

Không tạo code phức tạp nếu có giải pháp đơn giản.

Không tạo component khổng lồ.

Không copy cùng một đoạn HTML/CSS nhiều lần nếu có thể tái sử dụng.

---

# 17. KHÔNG TỰ Ý CÀI PACKAGE

Không tự ý cài thêm npm package.

Nếu cần package mới:

1. Giải thích package dùng để làm gì.
2. Nói rõ tại sao cần nó.
3. Chờ tôi đồng ý trước khi cài.

Ưu tiên sử dụng Angular/CSS/SCSS/Tailwind
trước khi thêm thư viện bên ngoài.

---

# 18. KHÔNG PHÁ CODE ĐANG HOẠT ĐỘNG

Không được:

- Xóa code đang hoạt động nếu không cần thiết.
- Rewrite toàn bộ project chỉ để sửa một vấn đề nhỏ.
- Thay đổi framework.
- Thay đổi cấu trúc lớn mà không có lý do.
- Sửa những file không liên quan đến task.

Khi sửa một tính năng:

Chỉ thay đổi những phần cần thiết.

---

# 19. KIỂM TRA SAU KHI CODE

Sau mỗi thay đổi lớn:

1. Kiểm tra TypeScript.
2. Kiểm tra Angular build.
3. Kiểm tra console error.
4. Kiểm tra responsive.
5. Kiểm tra animation.
6. Kiểm tra các component liên quan.

Nếu phát hiện lỗi:

- Phân tích nguyên nhân.
- Sửa lỗi.
- Kiểm tra lại.

Không bỏ qua lỗi build hoặc lỗi console quan trọng.

---

# 20. PHONG CÁCH LÀM VIỆC

Không chỉ làm cho website "chạy được".

Mục tiêu là:

**Một website studio chụp ảnh đẹp, chuyên nghiệp, hiện đại,
có trải nghiệm hình ảnh tốt và tạo cảm giác premium.**

Mỗi section phải được suy nghĩ về:

- Visual
- UX
- Typography
- Spacing
- Animation
- Responsive
- Performance

Khi có nhiều phương án:

Ưu tiên phương án có:

1. UX tốt.
2. Giao diện đẹp.
3. Animation mượt.
4. Code dễ bảo trì.
5. Performance tốt.
6. dễ dàng mở rộng.

Không ưu tiên code nhanh nhưng làm giao diện xấu hoặc khó bảo trì.
