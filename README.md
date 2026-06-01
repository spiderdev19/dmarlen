# Dmarlen — Landing Page Klinik Kecantikan

Website landing page untuk **Dmarlen Klinik Kecantikan** di Bandar Lampung.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS 3**
- **@tabler/icons-react** — Ikon outline (sesuai Style Guide)
- **Google Fonts** — Playfair Display + DM Sans

---

## Folder Structure

```
dmarlen/
├── app/
│   ├── layout.tsx        ← Root layout, metadata SEO, font imports
│   ├── page.tsx          ← Halaman utama (assembles all sections)
│   └── globals.css       ← Tailwind directives + custom classes
├── components/
│   ├── Navbar.tsx        ← Sticky navbar dengan mobile menu
│   ├── Hero.tsx          ← Hero section dengan headline + CTA
│   ├── Services.tsx      ← 3 kartu layanan: Facial, Kulit, Laser
│   ├── WhyUs.tsx         ← Keunggulan Dmarlen (4 poin + dokter card)
│   ├── Promo.tsx         ← Banner promo + countdown timer
│   ├── Testimonials.tsx  ← 3 kartu testimoni pelanggan
│   ├── Location.tsx      ← Google Maps embed + info kontak
│   ├── FinalCTA.tsx      ← CTA akhir + tombol WhatsApp
│   └── Footer.tsx        ← Footer dengan link & sosmed
├── public/               ← Static assets (gambar, favicon, dll)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── postcss.config.js
```

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev
# → Buka http://localhost:3000

# 3. Build untuk production
npm run build
npm run start
```

---

## Kustomisasi Wajib Sebelum Launch

### 1. Nomor WhatsApp
Cari `6281234567890` di file `components/Location.tsx` dan `components/FinalCTA.tsx`,  
ganti dengan nomor WhatsApp asli klinik.

### 2. Alamat Klinik
Di `components/Location.tsx`, ganti:
```
Jl. [Nama Jalan], [Kelurahan], [Kecamatan], Bandar Lampung
```
dengan alamat lengkap klinik.

### 3. Google Maps Embed
Di `components/Location.tsx`, ganti `src` iframe dengan embed URL Google Maps yang akurat:
- Buka Google Maps → Cari lokasi klinik → Share → Embed a map → Copy HTML

### 4. Link Sosial Media
Ganti URL Instagram dan TikTok di `components/Footer.tsx` dan `components/FinalCTA.tsx`.

### 5. Meta SEO
Di `app/layout.tsx`, sesuaikan `metadata.description` jika alamat sudah pasti.

---

## Warna Brand (Tailwind Classes)

| Token | Hex | Penggunaan |
|---|---|---|
| `bg-primary` | #8B2252 | Tombol utama, heading |
| `bg-light-pink` | #FBEAF0 | Background seksi |
| `bg-soft-pink` | #F4C0D1 | Border kartu |
| `text-gold` / `bg-gold` | #C9A96E | Aksen premium |
| `bg-whatsapp` | #25D366 | Tombol WhatsApp |

## Font
- **Playfair Display** → `font-playfair` — Headline, judul seksi
- **DM Sans** → `font-dmsans` — Body, tombol, label
