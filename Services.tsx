import {
  IconSparkles,
  IconHeart,
  IconBolt,
  IconArrowRight,
} from "@tabler/icons-react";

const services = [
  {
    icon: <IconSparkles size={22} className="text-primary" />,
    name: "Facial",
    description:
      "Perawatan wajah intensif untuk kulit lebih bersih, cerah, dan lembap. Cocok untuk semua jenis kulit.",
    badge: "Terlaris",
    badgeStyle: "bg-primary text-light-pink",
  },
  {
    icon: <IconHeart size={22} className="text-primary" />,
    name: "Perawatan Kulit",
    description:
      "Solusi efektif untuk jerawat, flek hitam, dan kulit kusam. Hasil terlihat dalam beberapa sesi.",
    badge: "Populer",
    badgeStyle: "bg-light-pink text-primary",
  },
  {
    icon: <IconBolt size={22} className="text-primary" />,
    name: "Laser",
    description:
      "Teknologi laser terkini untuk hasil yang lebih optimal, cepat, dan minim efek samping.",
    badge: "Premium",
    badgeStyle: "bg-gold/20 text-yellow-800",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-20 md:py-28 bg-white">
      <div className="max-w-8xl mx-auto px-5 md:px-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-dmsans text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Layanan Kami
          </p>
          <h2 className="section-title mb-4">
            Layanan Kecantikan Terbaik untuk Kamu
          </h2>
          <p className="section-sub">
            Pilih perawatan yang sesuai kebutuhanmu, ditangani langsung oleh
            dokter berpengalaman.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div key={service.name} className="service-card group relative">
              {/* Badge */}
              <span
                className={`absolute top-5 right-5 text-xs font-dmsans font-semibold px-3 py-1 rounded-full ${service.badgeStyle}`}
              >
                {service.badge}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 bg-light-pink rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="group-hover:[&>svg]:text-white transition-colors">
                  {service.icon}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-dmsans font-bold text-card-title text-lg mb-2">
                  {service.name}
                </h3>
                <p className="font-dmsans text-text-gray text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* CTA */}
              <a
                href="#cta"
                className="inline-flex items-center gap-1.5 text-primary font-dmsans font-semibold text-sm mt-auto group-hover:gap-3 transition-all duration-200"
              >
                Lihat Detail
                <IconArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
