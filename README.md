# 20-10-1
# 🌸 NGÂN HÀ TRI ÂN — BÙI THỊ HƯƠNG GIANG | 20.10
> Dành tặng cô bạn **Bùi Thị Hương Giang** — Biệt danh: **Dân dất ( Boo Cute )** ✨

Website chúc mừng Ngày Phụ Nữ Việt Nam 20/10 theo concept **3D Celestial Galaxy (Ngân Hà Tri Ân)**, xây dựng hoàn toàn bằng **HTML, CSS và JavaScript thuần** (100% Client-side).

---

## 🌟 ĐIỂM NỔI BẬT

1. **100% Thuần HTML/CSS/JS (Không cần Node.js, không cần Backend):**
   - Mở trực tiếp bằng cách **double-click vào file `index.html`** trên mọi trình duyệt (Chrome, Edge, Safari, Firefox).
   - Có thể nén ZIP gửi tặng trực tiếp, hoặc upload lên GitHub Pages, Vercel, Netlify miễn phí trong 5 giây.

2. **3 Phân Cảnh Trải Nghiệm Kỳ Ảo:**
   - **Stage 1 — Quả Cầu Pha Lê Ngân Hà:** Quả cầu 3D phát sáng giữa vũ trụ bao la. Khi chạm vào sẽ kích hoạt âm thanh du dương và đánh thức dải ngân hà.
   - **Stage 2 — 5 Tiểu Hành Tinh Kỷ Niệm:** 5 thẻ hình ảnh tinh tú của Hương Giang (`huong-giang-1.jpg` đến `huong-giang-5.jpg`) với hiệu ứng lượn 3D và Lightbox phóng to sắc nét.
   - **Stage 3 — Chòm Sao Trái Tim & Bức Thư Tri Ân:**
     * Trái tim phát sáng ngân hà với 5 bức ảnh đặt khớp hoàn hảo trên từng nhánh tim.
     * Vòng hoa hồng dây leo nghệ thuật điểm xuyết ở đỉnh tim và gốc tim.
     * Huy hiệu trung tâm **Bùi Thị Hương Giang — Dân dất ( Boo Cute )** (bấm vào để mở Easter Egg thông điệp bí mật).
     * Bức thiệp kính pha lê kèm **Đóa hoa hồng tương tác**: khi chạm vào sẽ bung nở pháo hoa cánh hoa rực rỡ và hé lộ lời chúc 20/10 đặc biệt.

3. **Hiệu ứng đồ họa sống động:**
   - Cánh hoa hồng & hoa anh đào (`#canvas-petals`) bay bồng bềnh theo làn gió vũ trụ.
   - Bầu trời sao lấp lánh & sao băng rơi liên tục (`#canvas-stars`).
   - Dải bụi tiên lấp lánh theo ngón tay / con trỏ chuột (`#canvas-trail`).
   - Pháo hoa cánh hoa ngân hà bùng nổ khi chạm mở quà (`#canvas-burst`).
   - Widget phát nhạc đĩa than xoay tròn cổ điển ở góc trên bên phải.

---

## 📁 CẤU TRÚC DỰ ÁN

```text
website-20-11-huong-giang/
├── index.html               # Trang web chính (chạy trực tiếp)
├── css/
│   └── galaxy.css           # Toàn bộ hiệu ứng CSS 3D, neon glow, hoa và bố cục
├── js/
│   └── galaxy-app.js        # Controller xử lý canvas sao, cánh hoa, lightbox & tương tác
├── assets/
│   ├── audio/
│   │   └── soundtrack.mp3   # Nhạc nền du dương
│   └── images/
│       └── photos/          # 5 bức ảnh của Bùi Thị Hương Giang
├── favicon.svg              # Biểu tượng tab trình duyệt
└── README.md
```

---

## 🚀 CÁCH SỬ DỤNG

### Cách 1: Mở trực tiếp (Nhanh nhất)
Chỉ cần nhấp đúp vào file **`index.html`** để mở trên trình duyệt bất kỳ.

### Cách 2: Chạy với Live Server hoặc npx serve (Tùy chọn)
Nếu bạn có Node.js hoặc VS Code:
```powershell
npx serve
```
Hoặc dùng extension **Live Server** trong VS Code để xem trực tiếp tại `http://localhost:5500`.
