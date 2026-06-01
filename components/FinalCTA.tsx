import {
  IconBrandWhatsapp,
  IconPhone,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons-react";

export default function FinalCTA() {
  const waNumber = "6281234567890";
  const waLink = `https://wa.me/${waNumber}?text=Halo%20Dmarlen%2C%20saya%20ingin%20booking%20konsultasi%20gratis.`;

  return (
    <section id="cta" className="py-20 md:py-28 bg-light-pink/40">
      <div className="max-w-8xl mx-auto px-5 md:px-20 text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className="text-3xl">✨</span>
        </div>

        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-card-title mb-4 leading-tight">
          Siap Mulai{" "}
          <span className="text-primary">Perjalanan Cantikmu?</span>
        </h2>
        <p className="font-dmsans text-text-gray text-base md:text-lg max-w-lg mx-auto mb-10">
          Konsultasikan kulitmu dengan dokter Dmarlen sekarang. Gratis, tanpa
          perlu khawatir.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base px-8 py-4 justify-center"
          >
            <IconBrandWhatsapp size={22} />
            Booking via WhatsApp
          </a>
          <a href="tel:+6281234567890" className="btn-outline text-base px-8 py-4 justify-center">
            <IconPhone size={20} />
            Hubungi Kami
          </a>
        </div>

        {/* Social Media */}
        <div className="flex items-center justify-center gap-3">
          <span className="font-dmsans text-text-gray text-sm">Ikuti kami:</span>
          <a
            href="https://instagram.com/dmarlen"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white border border-soft-pink rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm"
            aria-label="Instagram Dmarlen"
          >
            <IconBrandInstagram size={20} />
          </a>
          <a
            href="https://tiktok.com/@dmarlen"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white border border-soft-pink rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm"
            aria-label="TikTok Dmarlen"
          >
            <IconBrandTiktok size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
