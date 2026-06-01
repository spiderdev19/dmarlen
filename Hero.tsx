import { IconCalendar, IconChevronDown } from "@tabler/icons-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-medium" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-soft-pink/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-20 py-32 flex flex-col md:flex-row items-center gap-12">
        {/* Text side */}
        <div className="flex-1 text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-dmsans font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            Klinik Kecantikan Terpercaya di Bandar Lampung
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100">
            Kulit Sehat, Kamu
            <br />
            <span className="text-gold">Lebih Percaya Diri</span>
          </h1>

          <p className="font-dmsans text-white/80 text-base md:text-lg leading-relaxed max-w-lg mb-8 animate-fade-in-up delay-200">
            Dmarlen hadir dengan dokter berpengalaman dan friendly — perawatan
            kecantikan yang nyaman, aman, dan hasilnya nyata.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
            <a href="#cta" className="btn-primary gap-2 text-sm md:text-base justify-center">
              <IconCalendar size={18} />
              Booking Konsultasi Gratis
            </a>
            <a href="#layanan" className="btn-outline-white text-sm md:text-base justify-center">
              Lihat Layanan Kami
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 justify-center md:justify-start animate-fade-in-up delay-400">
            {[
              { value: "500+", label: "Pelanggan Puas" },
              { value: "3+", label: "Tahun Pengalaman" },
              { value: "100%", label: "Dokter Bersertifikat" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="font-playfair text-2xl font-bold text-gold">{stat.value}</p>
                <p className="font-dmsans text-xs text-white/70 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual side — decorative card */}
        <div className="flex-1 flex justify-center items-center animate-fade-in-up delay-200">
          <div className="relative w-72 md:w-80">
            {/* Main card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-soft-pink rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-3xl">✨</span>
              </div>
              <p className="font-playfair text-white text-xl font-bold mb-1">Konsultasi Gratis</p>
              <p className="font-dmsans text-white/70 text-sm">Untuk pelanggan baru</p>
              <div className="mt-4 pt-4 border-t border-white/20 flex justify-around text-center">
                <div>
                  <p className="font-playfair text-gold font-bold text-lg">Facial</p>
                  <p className="text-white/60 text-xs">Kecantikan</p>
                </div>
                <div className="border-l border-white/20" />
                <div>
                  <p className="font-playfair text-gold font-bold text-lg">Laser</p>
                  <p className="text-white/60 text-xs">Teknologi</p>
                </div>
                <div className="border-l border-white/20" />
                <div>
                  <p className="font-playfair text-gold font-bold text-lg">Kulit</p>
                  <p className="text-white/60 text-xs">Perawatan</p>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-gold text-white text-xs font-dmsans font-bold px-3 py-1.5 rounded-full shadow-lg">
              Diskon 20%
            </div>
            <div className="absolute -bottom-4 -left-4 bg-whatsapp text-white text-xs font-dmsans font-semibold px-3 py-1.5 rounded-full shadow-lg">
              WhatsApp Langsung
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#layanan"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors flex flex-col items-center gap-1"
      >
        <span className="text-xs font-dmsans">Scroll</span>
        <IconChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
