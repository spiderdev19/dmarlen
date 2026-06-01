import { IconCircleCheck } from "@tabler/icons-react";

const points = [
  {
    title: "Dokter Berpengalaman & Bersertifikat",
    desc: "Setiap perawatan ditangani dokter yang sudah terlatih dan berpengalaman di bidangnya.",
  },
  {
    title: "Dokter yang Friendly & Komunikatif",
    desc: "Kami percaya perawatan terbaik dimulai dari kenyamanan dan kepercayaan pasien.",
  },
  {
    title: "Teknologi Perawatan Terkini",
    desc: "Menggunakan alat dan metode yang terus diperbarui untuk hasil terbaik.",
  },
  {
    title: "Harga Transparan, Tanpa Biaya Tersembunyi",
    desc: "Konsultasi gratis, harga jelas sebelum perawatan dimulai.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-light-pink/40">
      <div className="max-w-8xl mx-auto px-5 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left — text */}
          <div className="flex-1">
            <p className="font-dmsans text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Keunggulan Kami
            </p>
            <h2 className="section-title mb-6">
              Mengapa Ribuan Pelanggan Mempercayai Dmarlen?
            </h2>

            <div className="flex flex-col gap-5">
              {points.map((point) => (
                <div key={point.title} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-0.5">
                    <IconCircleCheck
                      size={24}
                      className="text-primary group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div>
                    <p className="font-dmsans font-bold text-card-title text-base mb-1">
                      {point.title}
                    </p>
                    <p className="font-dmsans text-text-gray text-sm leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="#cta" className="btn-primary">
                Mulai Konsultasi Gratis
              </a>
            </div>
          </div>

          {/* Right — decorative doctor visual */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Main card */}
              <div className="w-72 md:w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border border-soft-pink">
                {/* Header color band */}
                <div className="h-40 bg-gradient-to-br from-primary via-primary-medium to-soft-pink flex items-end justify-center pb-4 relative">
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-4xl">👩‍⚕️</span>
                  </div>
                </div>
                {/* Body */}
                <div className="p-6 text-center">
                  <p className="font-playfair text-card-title font-bold text-xl mb-1">
                    dr. Marlen, Sp.KK
                  </p>
                  <p className="font-dmsans text-text-gray text-sm mb-4">
                    Dokter Spesialis Kulit & Kecantikan
                  </p>
                  <div className="flex justify-around py-4 border-t border-soft-pink">
                    <div className="text-center">
                      <p className="font-playfair font-bold text-primary text-xl">5+</p>
                      <p className="font-dmsans text-text-gray text-xs">Tahun Pengalaman</p>
                    </div>
                    <div className="border-l border-soft-pink" />
                    <div className="text-center">
                      <p className="font-playfair font-bold text-primary text-xl">500+</p>
                      <p className="font-dmsans text-text-gray text-xs">Pasien Berhasil</p>
                    </div>
                  </div>
                  <span className="inline-block bg-light-pink text-primary text-xs font-dmsans font-semibold px-3 py-1.5 rounded-full mt-2">
                    ✓ Bersertifikat IDI
                  </span>
                </div>
              </div>

              {/* Floating rating badge */}
              <div className="absolute -top-4 -right-4 bg-white border border-soft-pink rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2">
                <span className="text-yellow-400 text-base">★</span>
                <div>
                  <p className="font-dmsans font-bold text-card-title text-xs leading-none">5.0</p>
                  <p className="font-dmsans text-text-gray text-[10px]">Rating</p>
                </div>
              </div>

              {/* Floating bottom badge */}
              <div className="absolute -bottom-4 -left-4 bg-primary text-white rounded-2xl shadow-lg px-4 py-2">
                <p className="font-dmsans text-xs font-bold">Konsultasi Gratis 🎉</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
