import {
  IconSparkles,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const footerLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Promo", href: "#promo" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "Kebijakan Privasi", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-8xl mx-auto px-5 md:px-20 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <IconSparkles size={18} className="text-white" />
              </div>
              <span className="font-playfair font-bold text-xl text-white">
                Dmarlen
              </span>
            </div>
            <p className="font-dmsans text-white/70 text-sm leading-relaxed mb-1">
              Dmarlen Klinik Kecantikan
            </p>
            <p className="font-dmsans text-white/60 text-sm italic">
              Cantik Alami, Percaya Diri Setiap Hari
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="font-dmsans font-bold text-white/90 text-sm mb-4 uppercase tracking-wide">
              Menu
            </p>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-dmsans text-white/70 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-dmsans font-bold text-white/90 text-sm mb-4 uppercase tracking-wide">
              Ikuti Kami
            </p>
            <div className="flex gap-3">
              {[
                { Icon: IconBrandInstagram, label: "Instagram", href: "https://instagram.com/dmarlen" },
                { Icon: IconBrandTiktok, label: "TikTok", href: "https://tiktok.com/@dmarlen" },
                { Icon: IconBrandWhatsapp, label: "WhatsApp", href: "https://wa.me/6281234567890" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-white/15 hover:bg-white/30 border border-white/20 rounded-xl flex items-center justify-center transition-colors"
                >
                  <Icon size={20} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/20 text-center">
          <p className="font-dmsans text-white/50 text-sm">
            © 2025 Dmarlen. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
