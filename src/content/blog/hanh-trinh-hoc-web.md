---
title: "Hành trình bắt đầu học Web Development & Khám phá Thế giới Lập trình"
description: "Những kiến thức nền tảng đầu tiên, tư duy xây dựng giao diện và kinh nghiệm tự học Web Frontend cho sinh viên IT."
pubDate: 2026-10-30
category: "Learning Journey"
tags: ["HTML", "CSS", "JavaScript", "Frontend"]
featured: true
draft: false
---

# Hành trình bắt đầu học Web Development

Chào mừng bạn đến với blog kỹ thuật của mình tại **AQUA PRISM**. Mỗi dòng code như một tia sáng chiếu qua lòng đại dương sâu thẳm, và bài viết này ghi lại những bước chân đầu tiên trong hành trình theo đuổi ngành Công nghệ Thông tin.

## 1. Bắt đầu từ HTML: Cốt lõi của mọi website

HTML (*HyperText Markup Language*) không phải là ngôn ngữ lập trình, nhưng là bộ khung xương cốt lõi định hình mọi thực thể trên Internet. Khi mới bắt đầu, việc hiểu rõ các thẻ semantic như `<header>`, `<main>`, `<article>`, `<section>`, và `<footer>` đã giúp mình nhận ra tầm quan trọng của tính chuẩn hóa (Accessibility & SEO).

```html
<!-- Cấu trúc Semantic cơ bản -->
<header>
  <nav>
    <a href="/">Trang chủ</a>
  </nav>
</header>
<main>
  <article>
    <h1>Chào thế giới mã nguồn!</h1>
    <p>Nơi kiến thức được sẻ chia.</p>
  </article>
</main>
```

## 2. Tạo giao diện và chiều sâu với CSS

Nếu HTML là khung nhà thì CSS là linh hồn thẩm mỹ. Để tạo nên phong cách **Futuristic Ocean Glassmorphism**, mình đã vận dụng:

- **CSS Variables:** Quản lý bảng màu tập trung (`--neon-cyan`, `--prism-purple`).
- **Backdrop-filter:** Tạo hiệu ứng kính mờ (frosted glass) chân thực.
- **CSS Grid & Flexbox:** Xây dựng bố cục responsive co giãn mượt mà trên mọi kích cỡ màn hình.

```css
.glass-aquarium {
  background: rgba(7, 30, 53, 0.65);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(0, 245, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
```

## 3. Thổi hồn tương tác bằng JavaScript

JavaScript đem lại sức sống cho trang web thông qua:
1. Thao tác DOM theo thời gian thực.
2. Xử lý các sự kiện chuột (như ánh sáng cursor di chuyển).
3. Xử lý dữ liệu bất đồng bộ với `async / await` và `fetch API`.

```javascript
// Theo dõi vị trí chuột để tạo vệt sáng neon
window.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  glowEffect.style.transform = `translate(${clientX}px, ${clientY}px)`;
});
```

## Kết luận & Định hướng tiếp theo

Hành trình lập trình là một biển cả vô tận. Trong các bài viết tiếp theo, mình sẽ chia sẻ sâu hơn về tư duy cấu trúc dữ liệu, cách tối ưu hiệu năng website và kinh nghiệm làm việc nhóm với Git.
