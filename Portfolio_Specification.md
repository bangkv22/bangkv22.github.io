# AQUA PRISM — Neon Ocean Portfolio

> **Ý tưởng:** Một website portfolio cá nhân dành cho sinh viên/lập trình viên IT, được thiết kế như một thủy cung tương lai dưới đại dương. Không gian có hiệu ứng lăng kính, ánh sáng neon, cá bơi, nàng tiên cá, san hô phát sáng và chuyển động mượt mà.  
> **Phong cách:** Premium • Futuristic • Underwater • Glassmorphism • Neon • Interactive

---

## 1. Mục tiêu dự án

Xây dựng một portfolio cá nhân thật nổi bật, không giống mẫu portfolio công nghệ thông thường. Website vừa giới thiệu bản thân, kỹ năng, dự án, thành tựu và bài viết kỹ thuật; vừa tạo trải nghiệm khám phá như đang bước vào một thủy cung kỹ thuật số.

Website cần:

- Có giao diện chuyên nghiệp, hiện đại, cao cấp và có dấu ấn riêng.
- Thể hiện rõ năng lực của một sinh viên/lập trình viên ngành Công nghệ thông tin.
- Có nhiều trang hoặc các khu vực điều hướng rõ ràng.
- Hiển thị tốt trên máy tính, tablet và điện thoại.
- Có thể đăng bài viết mới bằng cách tạo/sửa file Markdown rồi commit và push lên Git.
- Có mã nguồn dễ đọc, dễ mở rộng và dễ bảo trì.
- Có hướng dẫn chạy dự án và triển khai miễn phí bằng GitHub Pages hoặc nền tảng hosting tương thích.

## 2. Ý tưởng giao diện tổng thể

### Tên thương hiệu

**AQUA PRISM**  
Tagline: **“Exploring the Ocean of Code.”**  
Thông điệp: *Mỗi dòng code là một tia sáng, mỗi dự án là một thế giới mới dưới đại dương.*

### Bảng màu đề xuất

| Vai trò | Màu sắc |
|---|---|
| Nền chính | Deep Ocean `#031321` |
| Nền phụ | Midnight Blue `#071E35` |
| Neon Cyan | `#00F5FF` |
| Aqua | `#20E3D2` |
| Prism Purple | `#9B5CFF` |
| Coral Pink | `#FF5DB1` |
| Text chính | `#EAFBFF` |
| Text phụ | `#9AB8C8` |

Dùng gradient xanh biển – cyan – tím – hồng san hô. Neon chỉ làm điểm nhấn, tránh lạm dụng khiến chữ khó đọc.

### Hình ảnh và hiệu ứng chủ đạo

- Đại dương sâu với nhiều lớp nền tạo cảm giác có chiều sâu.
- Tia sáng xuyên qua mặt nước, bụi sáng và bong bóng chuyển động chậm.
- Cá nhỏ và đàn cá bơi ngang màn hình theo nhiều hướng, tốc độ khác nhau.
- Nàng tiên cá xuất hiện như nhân vật trang trí ở một khu vực nổi bật; chuyển động đuôi nhẹ nhàng, không che nội dung.
- San hô, sứa, rong biển và sinh vật phát sáng ở hai bên hoặc góc màn hình.
- Hiệu ứng lăng kính (prism), khúc xạ ánh sáng, viền neon và phản chiếu kính.
- Các thẻ nội dung dùng glassmorphism: nền kính mờ, viền sáng mảnh, đổ bóng mềm.
- Con trỏ có hiệu ứng ánh sáng nhẹ trên desktop; không làm ảnh hưởng thao tác trên mobile.
- Chuyển cảnh mượt khi cuộn trang và khi chuyển tab/trang.

**Lưu ý hiệu năng:** Ưu tiên CSS animation, SVG, ảnh WebP/AVIF và Canvas nhẹ khi cần. Không tạo quá nhiều vật thể chuyển động cùng lúc. Tôn trọng `prefers-reduced-motion`; trên điện thoại giảm hiệu ứng nặng và không để animation làm giảm khả năng đọc.

---

## 3. Cấu trúc website và các trang cần có

### 3.1. Trang chủ — Home

Mục tiêu: gây ấn tượng ngay trong 5 giây đầu tiên.

Nội dung:

- Logo AQUA PRISM.
- Thanh điều hướng: Home, About, Skills, Projects, Blog, Certificates, Contact.
- Hero section toàn màn hình với nền thủy cung neon.
- Tiêu đề lớn: **“Hi, I'm [Tên của bạn]”**.
- Dòng giới thiệu: **“IT Student | Web Developer | Creative Problem Solver”**.
- Một câu mô tả ngắn về định hướng nghề nghiệp.
- Hai nút CTA: `Explore My Work` và `Contact Me`.
- Cá bơi, bong bóng, tia sáng và nàng tiên cá ở vị trí trang trí.
- Chỉ số nhanh: số dự án, công nghệ đang học, bài viết hoặc chứng chỉ.
- Khu vực giới thiệu ngắn và dự án nổi bật.
- Nút cuộn xuống có hiệu ứng ánh sáng.

### 3.2. About Me — Giới thiệu

Nội dung:

- Ảnh đại diện hoặc ảnh chân dung.
- Họ tên, vị trí hiện tại, chuyên ngành và trường học (có thể chỉnh sửa).
- Câu chuyện bắt đầu học lập trình.
- Mục tiêu ngắn hạn và dài hạn.
- Điểm mạnh, phong cách làm việc và sở thích công nghệ.
- Timeline học tập/phát triển bản thân.
- Nút tải CV dạng PDF (chỉ hiển thị khi đã có file CV thật).

### 3.3. Skills — Kỹ năng

Chia thành nhóm rõ ràng:

- **Frontend:** HTML, CSS, JavaScript, Bootstrap, React (nếu đã học).
- **Backend:** PHP, Node.js, ASP.NET hoặc công nghệ thực tế đã sử dụng.
- **Database:** MySQL, SQL Server.
- **Programming:** C++, C#, Java hoặc ngôn ngữ đã học.
- **Tools:** Git, GitHub, VS Code, XAMPP, Figma.
- **Soft Skills:** teamwork, problem solving, communication, time management.

Trình bày bằng thẻ kỹ năng, icon và thanh mức độ. Mức độ chỉ là tự đánh giá, không tự nhận chuyên gia nếu chưa có kinh nghiệm thực tế.

### 3.4. Projects — Dự án

Mỗi dự án là một thẻ có:

- Ảnh chụp giao diện hoặc ảnh minh họa.
- Tên dự án và mô tả ngắn.
- Vấn đề dự án giải quyết.
- Công nghệ sử dụng.
- Vai trò cá nhân và chức năng đã thực hiện.
- Những gì đã học được.
- Link GitHub và link Demo (nếu có).

Có bộ lọc theo công nghệ: All, Frontend, Backend, Database, Other.

Có thể bổ sung trang chi tiết dự án với ảnh, tính năng, sơ đồ hệ thống và các bước triển khai.

### 3.5. Blog — Bài viết

Đây là khu vực chia sẻ kiến thức và kinh nghiệm học IT.

Danh mục gợi ý:

- Web Development
- Programming
- Database
- Artificial Intelligence
- Learning Journey
- Project Experience
- Tips & Tutorials

Mỗi bài viết có tiêu đề, ảnh bìa, mô tả, ngày đăng, danh mục, thời gian đọc và nội dung Markdown.

Tính năng:

- Tìm kiếm bài viết.
- Lọc theo danh mục và tag.
- Bài viết mới nhất và bài viết nổi bật.
- Trang đọc bài viết riêng.
- Mục lục tự động từ các heading.
- Nút sao chép code, hỗ trợ syntax highlighting.
- Chia sẻ liên kết bài viết.
- Bài viết liên quan.
- Hiển thị thời gian đọc ước tính.

### 3.6. Certificates — Chứng chỉ và thành tựu

- Danh sách chứng chỉ khóa học.
- Tên chứng chỉ, đơn vị cấp, ngày hoàn thành.
- Ảnh chứng chỉ hoặc link xác minh.
- Thành tích học tập, cuộc thi, hoạt động câu lạc bộ (nếu có).

Không tạo chứng chỉ hoặc thành tích giả. Nếu chưa có dữ liệu, hiển thị trạng thái “Đang cập nhật”.

### 3.7. Experience — Kinh nghiệm và hoạt động

Dành cho thực tập, đồ án, hoạt động nhóm, câu lạc bộ và hoạt động học thuật.

Mỗi mục gồm thời gian, vai trò, nhiệm vụ, công nghệ và kết quả đạt được. Nếu chưa có kinh nghiệm làm việc, đổi tiêu đề thành “Learning & Activities”.

### 3.8. Contact — Liên hệ

- Email.
- GitHub.
- LinkedIn (nếu có).
- Facebook hoặc kênh liên hệ chuyên nghiệp khác (tùy chọn).
- Form liên hệ gồm tên, email, chủ đề và nội dung.
- Kiểm tra dữ liệu nhập và thông báo lỗi/thành công rõ ràng.

**Lưu ý:** Form chỉ gửi được email khi tích hợp dịch vụ backend hoặc dịch vụ form bên ngoài. Nếu chưa tích hợp, cung cấp nút gửi email bằng `mailto:` và ghi rõ giới hạn; không giả lập thông báo gửi thành công.

### 3.9. 404 — Trang không tìm thấy

Thiết kế như một khu vực đại dương bị lạc, có thông báo thân thiện và nút quay về trang chủ.

---

## 4. Tương tác và hiệu ứng cần triển khai

| Thành phần | Hành vi mong muốn |
|---|---|
| Navbar | Cố định hoặc đổi nền khi cuộn; đánh dấu mục đang xem |
| Hero | Tia sáng, bong bóng, cá bơi, chữ xuất hiện mượt |
| Prism cards | Nghiêng nhẹ theo chuột trên desktop, viền đổi màu |
| Fish animation | Cá bơi theo nhiều lớp chiều sâu |
| Mermaid | Chuyển động nhẹ, không che chữ hoặc nút |
| Coral & seaweed | Đung đưa chậm theo chuyển động nước |
| Glass cards | Kính mờ, viền neon và hover tinh tế |
| Scroll reveal | Nội dung xuất hiện khi đi vào vùng nhìn |
| Project filter | Lọc dự án không tải lại trang |
| Blog search | Tìm theo tiêu đề, mô tả, tag |
| Back to top | Nút quay lại đầu trang |
| Theme | Có thể bổ sung chế độ giảm hiệu ứng; không bắt buộc thêm light mode |
| Mobile menu | Menu gọn, dễ bấm, đóng sau khi chọn trang |

Không dùng hiệu ứng gây chóng mặt, nhấp nháy nhanh hoặc làm mất khả năng truy cập. Tất cả chức năng quan trọng phải dùng được bằng bàn phím.

---

## 5. Công nghệ đề xuất

Ưu tiên một stack gọn, dễ triển khai trên GitHub:

- **Astro:** xây dựng website tĩnh nhanh, phù hợp portfolio và blog Markdown.
- **HTML/CSS/JavaScript:** cấu trúc, giao diện và tương tác.
- **Markdown:** viết bài blog.
- **CSS Variables:** quản lý màu sắc, khoảng cách và hiệu ứng.
- **SVG:** icon, cá, san hô và họa tiết vector.
- **Git/GitHub:** quản lý mã nguồn và đăng bài.
- **GitHub Pages:** triển khai website tĩnh miễn phí.

Có thể dùng React cho những component tương tác thực sự cần thiết, nhưng không thêm thư viện nặng nếu CSS/JavaScript thuần đã đáp ứng được.

---

## 6. Đăng bài Blog bằng Git và Markdown

### Nguyên tắc

Không cần tạo trang quản trị hoặc database chỉ để đăng bài. Bài viết được lưu thành file `.md` trong thư mục nội dung. Khi commit và push lên GitHub, hệ thống build lại website và hiển thị bài viết mới.

### Cấu trúc nội dung đề xuất

```text
src/
  content/
    blog/
      hello-world.md
      hanh-trinh-hoc-web.md
      git-co-ban.md
```

### Mẫu một bài viết Markdown

Tạo file `src/content/blog/hanh-trinh-hoc-web.md`:

```md
---
title: "Hành trình bắt đầu học Web Development"
description: "Những kiến thức đầu tiên khi xây dựng một website."
pubDate: 2026-10-30
category: "Learning Journey"
tags: ["HTML", "CSS", "JavaScript"]
cover: "/images/blog/web-learning.webp"
featured: true
draft: false
---

# Hành trình bắt đầu học Web Development

Đây là bài viết đầu tiên trên portfolio của mình.

## 1. Bắt đầu từ HTML

HTML giúp xây dựng cấu trúc cho trang web.

## 2. Tạo giao diện với CSS

CSS giúp website có màu sắc, bố cục và hiệu ứng đẹp hơn.

## 3. Thêm tương tác bằng JavaScript

JavaScript giúp website phản hồi với hành động của người dùng.

## Kết luận

Mình sẽ tiếp tục học hỏi và cập nhật những kiến thức mới.
```

### Quy trình đăng bài

```bash
# 1. Lấy phiên bản mới nhất
git pull

# 2. Tạo file Markdown mới trong src/content/blog/

# 3. Kiểm tra website tại máy tính
npm run dev

# 4. Build thử để kiểm tra lỗi
npm run build

# 5. Lưu thay đổi
git add .

# 6. Commit
git commit -m "Add new blog post"

# 7. Đẩy lên GitHub
git push origin main
```

Sau khi GitHub Actions build và deploy thành công, bài viết sẽ xuất hiện trên website. Nếu dùng nhánh khác `main`, thay tên nhánh trong lệnh cho phù hợp.

### Quy tắc nội dung blog

- `title`: tiêu đề bài viết.
- `description`: mô tả ngắn dùng cho danh sách bài và SEO.
- `pubDate`: ngày đăng theo định dạng `YYYY-MM-DD`.
- `category`: danh mục.
- `tags`: danh sách từ khóa.
- `cover`: đường dẫn ảnh bìa; có thể bỏ nếu không có ảnh.
- `featured`: `true` nếu muốn làm nổi bật.
- `draft`: `true` nếu chưa muốn xuất bản.

Bài có `draft: true` không được hiển thị ở trang Blog công khai. Kiểm tra dữ liệu frontmatter để tránh lỗi build.

---

## 7. Cấu trúc thư mục dự án đề xuất

```text
aqua-prism-portfolio/
├── public/
│   ├── images/
│   │   ├── avatar.webp
│   │   ├── mermaid.webp
│   │   ├── fish/
│   │   ├── coral/
│   │   └── projects/
│   ├── icons/
│   └── cv.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── FishBackground.astro
│   │   ├── MermaidScene.astro
│   │   ├── PrismCard.astro
│   │   ├── ProjectCard.astro
│   │   └── BlogCard.astro
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── skills.astro
│   │   ├── projects.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── certificates.astro
│   │   ├── experience.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   ├── styles/
│   │   ├── global.css
│   │   ├── animations.css
│   │   └── components.css
│   └── content.config.ts
├── astro.config.mjs
├── package.json
├── README.md
└── .gitignore
```

Đây là cấu trúc định hướng; khi triển khai có thể điều chỉnh theo phiên bản Astro và cách tổ chức route thực tế.

---

## 8. SEO, bảo mật và khả năng truy cập

- Mỗi trang có title, meta description và URL rõ ràng.
- Có Open Graph để hiển thị đẹp khi chia sẻ liên kết.
- Dùng heading đúng thứ tự H1, H2, H3.
- Ảnh có `alt` mô tả; dùng lazy loading cho ảnh ngoài màn hình đầu.
- Tối ưu kích thước ảnh, font và CSS.
- Không đưa API key, mật khẩu hoặc thông tin riêng tư lên GitHub.
- Không đưa dữ liệu cá nhân nhạy cảm vào bài viết công khai.
- Form liên hệ cần chống spam nếu có backend.
- Màu chữ đủ tương phản với nền.
- Có focus state rõ ràng cho thao tác bàn phím.
- Hỗ trợ `prefers-reduced-motion`.
- Không để animation trang trí chặn click hoặc che nội dung.

---

## 9. Yêu cầu responsive

### Desktop

- Hero rộng, có nhiều lớp cảnh thủy cung.
- Các thẻ dự án hiển thị dạng lưới.
- Animation đầy đủ nhưng vẫn mượt.

### Tablet

- Giảm số lượng cá và hiệu ứng nền.
- Các lưới tự chuyển sang 2 cột.
- Navbar điều chỉnh khoảng cách.

### Mobile

- Menu dạng hamburger.
- Nội dung một cột, chữ dễ đọc.
- Nút bấm đủ lớn.
- Giảm hoặc tắt các hiệu ứng nặng.
- Không xuất hiện thanh cuộn ngang.
- Không để nàng tiên cá, cá hoặc san hô che nội dung.

---

## 10. Checklist nghiệm thu

### Giao diện

- [ ] Có phong cách thủy cung neon nhất quán.
- [ ] Có hiệu ứng lăng kính và glassmorphism.
- [ ] Có cá bơi, san hô, bong bóng và nàng tiên cá.
- [ ] Màu sắc đẹp nhưng nội dung dễ đọc.
- [ ] Chuyển động mượt, không giật lag.

### Nội dung

- [ ] Có Home, About, Skills, Projects, Blog, Certificates, Experience, Contact.
- [ ] Có thông tin cá nhân thật và có thể chỉnh sửa.
- [ ] Có dự án, kỹ năng và liên kết GitHub.
- [ ] Có bài viết mẫu Markdown.
- [ ] Không có thông tin, chứng chỉ hoặc số liệu bịa đặt.

### Chức năng

- [ ] Điều hướng hoạt động.
- [ ] Lọc dự án hoạt động.
- [ ] Tìm kiếm và lọc bài viết hoạt động.
- [ ] Trang chi tiết bài viết hiển thị đúng.
- [ ] Bài `draft: true` không xuất hiện công khai.
- [ ] Form liên hệ phản hồi đúng với khả năng tích hợp thực tế.
- [ ] Website hiển thị tốt trên mobile.

### Git và triển khai

- [ ] Có README hướng dẫn cài đặt.
- [ ] `npm run build` chạy thành công.
- [ ] Đăng bài mới chỉ cần thêm file Markdown và push Git.
- [ ] GitHub Actions deploy thành công.
- [ ] Các đường dẫn ảnh và route hoạt động sau khi deploy.

---

## 11. Nội dung cá nhân cần thay thế

Trước khi công khai website, thay các nội dung mẫu sau bằng thông tin thật:

- `[Tên của bạn]`
- `[Ảnh đại diện]`
- `[Ngành học / Trường học]`
- `[Email liên hệ]`
- `[GitHub URL]`
- `[LinkedIn URL]`
- `[Mô tả bản thân]`
- `[Kỹ năng thực tế]`
- `[Dự án thực tế]`
- `[Chứng chỉ / thành tích]`
- `[CV PDF]`

Không bắt buộc phải có tất cả ngay từ đầu. Có thể ẩn những mục chưa có dữ liệu và cập nhật dần.

---

## 12. Prompt triển khai dành cho AI lập trình

Hãy đóng vai một **Senior Frontend Developer, UI/UX Designer và Creative Developer**. Dựa trên tài liệu này, hãy xây dựng hoàn chỉnh dự án **AQUA PRISM — Neon Ocean Portfolio**.

Yêu cầu bắt buộc:

1. Tạo website chạy được thực tế, không chỉ dựng hình minh họa hoặc viết giao diện tĩnh.
2. Dùng Astro và Markdown content để quản lý blog; bảo đảm có thể thêm bài mới bằng cách tạo file `.md`, commit và push Git.
3. Hoàn thiện các trang Home, About, Skills, Projects, Blog, Blog Detail, Certificates, Experience, Contact và 404.
4. Tạo phong cách thủy cung tương lai cao cấp: đại dương sâu, neon cyan/tím/hồng, lăng kính, kính mờ, cá bơi, san hô, bong bóng, rong biển và nàng tiên cá.
5. Ưu tiên animation CSS/SVG nhẹ, có chiều sâu và chuyển động tự nhiên. Nếu dùng ảnh minh họa, đặt ảnh trong thư mục `public` và ghi rõ tên file cần chuẩn bị; không tham chiếu ảnh không tồn tại.
6. Thiết kế responsive đầy đủ cho desktop, tablet và mobile.
7. Blog phải đọc Markdown, hiển thị danh sách và trang chi tiết, có tìm kiếm, danh mục, tag, mục lục, thời gian đọc và bài liên quan.
8. Dùng dữ liệu mẫu có đánh dấu rõ để người dùng thay thế; không tự bịa chứng chỉ, thành tích hoặc kinh nghiệm.
9. Tạo component dùng lại, CSS có tổ chức, đặt tên dễ hiểu, không nhồi toàn bộ dự án vào một file.
10. Có hướng dẫn cài đặt, chạy local, build, push Git và deploy GitHub Pages.
11. Kiểm tra lỗi route, ảnh, font, đường dẫn khi deploy dưới GitHub Pages (bao gồm `base` nếu repository không deploy ở root domain).
12. Không để nút giả hoặc chức năng chỉ có giao diện. Nếu một chức năng cần dịch vụ ngoài, ghi rõ cách cấu hình và giới hạn.
13. Tối ưu hiệu năng, SEO, accessibility và `prefers-reduced-motion`.
14. Hoàn thành từng phần có thể chạy được; sau mỗi giai đoạn kiểm tra build và sửa lỗi trước khi tiếp tục.

**Kết quả mong muốn:** Một portfolio IT có bản sắc riêng, nhìn như một thủy cung kỹ thuật số cao cấp, nhưng vẫn chuyên nghiệp, dễ đọc, dễ cập nhật và đủ chất lượng để đưa vào CV/GitHub cá nhân.
