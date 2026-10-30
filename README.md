# AQUA PRISM — Neon Ocean Portfolio 🌊💎

> **“Exploring the Ocean of Code.”**  
> Website portfolio cá nhân phong cách thủy cung neon tương lai dành cho sinh viên và kỹ sư phần mềm IT. Được xây dựng trên nền tảng **Astro v5**, kết hợp hiệu ứng **Glassmorphism**, hoạt họa **SVG/CSS**, và quản lý nội dung bài viết kỹ thuật linh hoạt với **Markdown Content Collections**.

---

## 🌟 Tính năng nổi bật

- **Giao diện Thủy cung Tương lai (Futuristic Underwater Theme):** Tông màu xanh biển sâu (`#031321`), neon cyan (`#00F5FF`), tím lăng kính (`#9B5CFF`) và hồng san hô (`#FF5DB1`).
- **Hiệu ứng Đồ họa Động Mượt mà:** Đàn cá neon bơi nhiều tầng lớp, bọt khí nổi tự nhiên, sứa phát quang, rạn san hô đung đưa và nhân vật hộ vệ Mermaid với lăng kính Aqua Prism.
- **Tương tác Chuột & Lăng kính (Prism Glow):** Con trỏ vệt sáng trên Desktop, các thẻ kính mờ (glassmorphism) phản chiếu ánh sáng khi rê chuột.
- **Đầy đủ 8 khu vực nội dung:**
  1. `Home (/)`: Hero thủy cung, chỉ số năng lực, triết lý lập trình, dự án và bài viết nổi bật.
  2. `About (/about)`: Chân dung lập trình viên, câu chuyện học IT, mục tiêu nghề nghiệp và dòng thời gian học vấn.
  3. `Skills (/skills)`: Phân loại Frontend, Backend, Database, Ngôn ngữ cốt lõi, Công cụ DevOps và Kỹ năng mềm với thanh mức độ trực quan.
  4. `Projects (/projects)`: Bộ lọc dự án tức thì (All, Frontend, Backend, Database, Fullstack, Other) không cần tải lại trang.
  5. `Blog (/blog)`: Hệ thống tìm kiếm bài viết thời gian thực, bộ lọc danh mục/tag, trang đọc bài Markdown chi tiết với mục lục tự động (TOC), tính toán thời gian đọc và nút Copy code nhanh.
  6. `Certificates (/certificates)`: Minh chứng chứng chỉ học thuật với trạng thái rõ ràng (Hoàn thành / Đang cập nhật).
  7. `Experience (/experience)`: Ghi nhận vai trò điều phối đồ án nhóm, hoạt động câu lạc bộ và dự án nghiên cứu.
  8. `Contact (/contact)`: Kênh kết nối, mạng xã hội và biểu mẫu gửi email `mailto:` tiện lợi và an toàn.
  9. `404 (/404)`: Trang lỗi mang phong cách lạc vào vực thẳm đại dương.
- **Tối ưu hóa tối đa:** 100% Responsive trên Mobile/Tablet/Desktop, hỗ trợ `prefers-reduced-motion` và chuẩn SEO/OpenGraph.

---

## 🚀 Hướng dẫn Cài đặt & Chạy trên máy cục bộ (Local)

### Yêu cầu môi trường
- **Node.js**: Phiên bản 18+ hoặc 20+ (Khuyên dùng v20 hoặc v22).
- **Trình quản lý gói**: `npm` (đi kèm Node.js).

### Các bước thực hiện

```bash
# 1. Clone repository về máy tính
git clone https://github.com/bangkv22/bangkv22.github.io.git
cd bangkv22.github.io

# 2. Cài đặt các gói phụ thuộc
npm install

# 3. Khởi động môi trường phát triển (Dev Server)
npm run dev
```

Mở trình duyệt và truy cập `http://localhost:4321` để xem trang web chạy trực tiếp với tính năng Hot Module Reload (HMR).

---

## 📝 Hướng dẫn Đăng bài Blog mới bằng Markdown & Git

Bạn **không cần** cơ sở dữ liệu hay trang quản trị phức tạp. Để đăng bài viết mới:

### Bước 1: Tạo tập tin Markdown
Tạo một file `.md` mới trong thư mục `src/content/blog/`, ví dụ `src/content/blog/bai-viet-moi.md`.

### Bước 2: Khai báo Frontmatter ở đầu file
```markdown
---
title: "Tiêu đề bài viết của bạn"
description: "Mô tả tóm tắt nội dung bài viết phục vụ SEO và hiển thị danh sách."
pubDate: 2026-10-30
category: "Web Development"
tags: ["Astro", "JavaScript", "Frontend"]
featured: true
draft: false
---

# Tiêu đề bài viết

Nội dung bài viết viết bằng định dạng chuẩn **Markdown**...

## 1. Mục lục con thứ nhất
Bạn có thể chèn code thoải mái:

```javascript
console.log("Hello Aqua Prism!");
```
```

> **Lưu ý:** Nếu đặt `draft: true`, bài viết sẽ ở chế độ nháp và không xuất hiện trên website công khai.

### Bước 3: Kiểm tra và Đẩy lên GitHub
```bash
# Kiểm tra build xem có lỗi cú pháp không
npm run build

# Lưu thay đổi và đẩy lên Git
git add .
git commit -m "feat: Đăng bài viết mới về Web Development"
git push origin main
```

Sau khi lệnh `git push` thành công, **GitHub Actions** sẽ tự động build và xuất bản bài viết lên tên miền `https://bangkv22.github.io` sau khoảng 1-2 phút!

---

## ✏️ Tùy biến Thông tin Cá nhân

Trước khi chia sẻ portfolio rộng rãi, bạn có thể chỉnh sửa các file sau để cập nhật thông tin chính chủ:

| Nội dung cần thay | Vị trí tập tin | Ghi chú |
|---|---|---|
| Tên, Tagline, Bio Hero | `src/pages/index.astro` | Thay đổi tên hiển thị `Bang K.V.` và dòng giới thiệu |
| Câu chuyện, Trường học, CV | `src/pages/about.astro` | Cập nhật trường đại học, mục tiêu và liên kết file CV PDF |
| Danh sách kỹ năng | `src/pages/skills.astro` | Điều chỉnh tỉ lệ % và các công nghệ thực tế bạn sử dụng |
| Dự án thực tế | `src/pages/projects.astro` | Thêm ảnh demo, link GitHub repo thật của bạn |
| Thông tin liên hệ, Email | `src/pages/contact.astro` & `src/components/Footer.astro` | Cập nhật email cá nhân và link LinkedIn/Facebook |

---

## 🚢 Triển khai lên GitHub Pages (GitHub Pages Deployment)

Dự án đã được tích hợp sẵn tệp cấu hình `.github/workflows/deploy.yml`.

Để kích hoạt GitHub Pages trong kho lưu trữ của bạn:
1. Vào repository trên GitHub: `https://github.com/bangkv22/bangkv22.github.io`
2. Chọn tab **Settings** -> **Pages**.
3. Tại mục **Build and deployment** -> **Source**, chọn: **GitHub Actions**.
4. Mỗi lần bạn `git push origin main`, website sẽ tự động build và cập nhật tại:  
   👉 **https://bangkv22.github.io**

---

## 🛠️ Cấu trúc Thư mục

```text
bangkv22.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Kịch bản tự động hóa build & deploy GitHub Pages
├── public/                     # Thư mục chứa tài nguyên tĩnh (ảnh, favicon, cv.pdf)
├── src/
│   ├── components/             # Các khối giao diện tái sử dụng
│   │   ├── Navbar.astro        # Thanh điều hướng với hiệu ứng cuộn & menu mobile
│   │   ├── Footer.astro        # Chân trang đại dương
│   │   ├── FishBackground.astro# Hệ thống cá bơi đa tầng, tia sáng & bọt khí
│   │   ├── MermaidScene.astro  # Tranh vector nàng tiên cá hộ vệ Aqua Prism
│   │   ├── PrismCard.astro     # Thẻ lăng kính kính mờ (Glassmorphism)
│   │   ├── ProjectCard.astro   # Thẻ hiển thị dự án
│   │   └── BlogCard.astro      # Thẻ bài viết kỹ thuật
│   ├── content/
│   │   └── blog/               # Nơi lưu trữ bài viết Markdown (.md)
│   ├── layouts/
│   │   └── MainLayout.astro    # Bố cục chuẩn SEO, OpenGraph & vệt sáng chuột
│   ├── pages/                  # Các trang trong website
│   │   ├── index.astro         # Trang chủ
│   │   ├── about.astro         # Trang giới thiệu
│   │   ├── skills.astro        # Trang kỹ năng
│   │   ├── projects.astro      # Trang dự án & bộ lọc
│   │   ├── blog/
│   │   │   ├── index.astro     # Danh mục bài viết & tìm kiếm
│   │   │   └── [...slug].astro # Chi tiết bài viết Markdown
│   │   ├── certificates.astro  # Chứng chỉ & thành tựu
│   │   ├── experience.astro    # Kinh nghiệm & hoạt động
│   │   ├── contact.astro       # Biểu mẫu & thông tin liên hệ
│   │   └── 404.astro           # Trang thông báo lạc đường đại dương
│   ├── styles/
│   │   ├── global.css          # Bảng màu neon, typography & reset
│   │   ├── animations.css      # Chuyển động cá, sứa, bọt nước, ánh sáng
│   │   └── components.css      # Định dạng thanh menu, thẻ, footer
│   └── content.config.ts       # Cấu hình kiểm tra schema Markdown của Astro
├── astro.config.mjs            # Cấu hình máy chủ Astro & GitHub Pages base
├── package.json
└── README.md
```

---

*Thiết kế và phát triển với niềm đam mê khám phá công nghệ dưới lòng đại dương sâu thẳm.*
