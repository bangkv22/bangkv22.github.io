---
title: "Làm chủ Git & GitHub: Cẩm nang quản lý mã nguồn cho Developer"
description: "Hướng dẫn thực chiến các câu lệnh Git thiết yếu, mô hình phân nhánh và quy trình đẩy code lên GitHub an toàn."
pubDate: 2026-10-25
category: "Programming"
tags: ["Git", "GitHub", "DevOps", "Workflow"]
featured: true
draft: false
---

# Làm chủ Git & GitHub: Cẩm nang quản lý mã nguồn

Git là hệ thống quản lý phiên bản phân tán (*Distributed Version Control System*) không thể thiếu đối với bất kỳ lập trình viên nào. Cho dù bạn làm việc độc lập hay tham gia vào các dự án mã nguồn mở quy mô lớn, Git giúp bạn bảo vệ lịch sử thay đổi và làm việc nhóm hiệu quả.

## 1. Vòng đời tập tin trong Git

Trong Git, một tập tin có thể nằm ở một trong ba trạng thái chính:
- **Modified (Đã chỉnh sửa):** Bạn đã sửa đổi tập tin nhưng chưa lưu vào cơ sở dữ liệu.
- **Staged (Đã chuẩn bị):** Bạn đã đánh dấu một tập tin đã sửa đổi ở phiên bản hiện tại để chuẩn bị commit.
- **Committed (Đã lưu trữ):** Dữ liệu đã được lưu an toàn trong cơ sở dữ liệu nội bộ của bạn.

## 2. Các câu lệnh thiết yếu hàng ngày

```bash
# Kiểm tra trạng thái hiện tại của repository
git status

# Đưa tất cả thay đổi vào vùng chuẩn bị
git add .

# Ghi lại bản chụp các thay đổi với thông điệp rõ ràng
git commit -m "feat: triển khai hiệu ứng neon glassmorphism"

# Đẩy code lên nhánh chính của remote repository
git push origin main
```

## 3. Chiến lược phân nhánh (Branching Strategy)

Đừng bao giờ commit trực tiếp các tính năng thử nghiệm lên nhánh `main` khi làm việc theo nhóm! Hãy tạo một nhánh riêng biệt:

```bash
# Tạo và chuyển sang nhánh mới
git checkout -b feature/neon-ocean-animation

# Sau khi hoàn thiện, chuyển về main và gộp nhánh
git checkout main
git merge feature/neon-ocean-animation
```

## 4. Tự động hóa Deploy với GitHub Actions

Với GitHub Actions, mỗi khi bạn chạy lệnh `git push origin main`, hệ thống CI/CD sẽ tự động kích hoạt workflow kiểm thử, build Astro site và deploy thẳng lên GitHub Pages hoàn toàn miễn phí.
