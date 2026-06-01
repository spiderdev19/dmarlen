const testimonials = [
  {
    name: "Rina Anggraini",
    initials: "RA",
    rating: 5,
    quote:
      "Dokternya sangat ramah dan sabar menjelaskan kondisi kulit saya. Setelah 3 sesi facial, kulit saya jauh lebih cerah dan bersih. Sangat rekomendasikan!",
    service: "Facial",
    color: "from-primary to-primary-medium",
  },
  {
    name: "Dewi Rahayu",
    initials: "DR",
    rating: 5,
    quote:
      "Saya sudah coba beberapa klinik, tapi Dmarlen yang paling nyaman. Dokternya nggak buru-buru, mau dengerin keluhan saya, dan hasilnya memuaskan!",
    service: "Perawatan Kulit",
    color: "from-primary-medium to-soft-pink",
  },
  {
    name: "Sari Putri",
    initials: "SP",
    rating: 5,
    quote:
      "Laser di Dmarlen beneran efektif! Flek hitam yang udah lama ganggu akhirnya berkurang drastis. Dokternya profesional banget.",
    service: "Laser",
    color: "from-gold to-yellow-400",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-20 md:py-28 bg-light-pink/30">
      <div className="max-w-8xl mx-auto px-5 md:px-20">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="font-dmsans text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Testimoni
          </p>
          <h2 className="section-title mb-4">Apa Kata Pelanggan Kami?</h2>
          <p className="section-sub">
            Lebih dari{" "}
            <span className="text-primary font-semibold">500 pelanggan</span>{" "}
            sudah merasakan manfaatnya.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 border border-soft-pink shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-dmsans text-text-gray text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-soft-pink">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center shadow-md flex-shrink-0`}
                >
                  <span className="font-dmsans font-bold text-white text-sm">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-dmsans font-bold text-card-title text-sm">
                    {t.name}
                  </p>
                  <p className="font-dmsans text-text-gray text-xs">{t.service}</p>
                </div>
                <span className="ml-auto text-xs bg-light-pink text-primary font-dmsans font-semibold px-2 py-1 rounded-full">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { icon: "⭐", value: "5.0", label: "Rating Google" },
            { icon: "👥", value: "500+", label: "Pelanggan Puas" },
            { icon: "💬", value: "100+", label: "Ulasan Positif" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl mb-1">{item.icon}</div>
              <p className="font-playfair font-bold text-primary text-2xl">{item.value}</p>
              <p className="font-dmsans text-text-gray text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
