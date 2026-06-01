import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const infoItems = [
  {
    icon: <IconMapPin size={20} className="text-primary" />,
    label: "Alamat",
    value: "Jl. [Nama Jalan], [Kelurahan], [Kecamatan], Bandar Lampung",
  },
  {
    icon: <IconClock size={20} className="text-primary" />,
    label: "Jam Buka",
    value: "Senin – Sabtu: 09.00 – 20.00 WIB",
  },
  {
    icon: <IconPhone size={20} className="text-primary" />,
    label: "Telepon / WhatsApp",
    value: "+62 [Nomor HP / WhatsApp klinik]",
  },
  {
    icon: <IconMail size={20} className="text-primary" />,
    label: "Email",
    value: "info@dmarlen.com",
  },
];

export default function Location() {
  const waNumber = "6281234567890"; // replace with real number
  const waLink = `https://wa.me/${waNumber}?text=Halo%20Dmarlen%2C%20saya%20ingin%20booking%20konsultasi.`;

  return (
    <section id="lokasi" className="py-20 md:py-28 bg-white">
      <div className="max-w-8xl mx-auto px-5 md:px-20">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="font-dmsans text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Lokasi & Kontak
          </p>
          <h2 className="section-title mb-4">Temukan Kami di Sini</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-soft-pink shadow-lg h-80 md:h-96 bg-light-pink flex items-center justify-center">
            {/* Replace src with real Google Maps embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.06441783!2d105.1831!3d-5.3971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40da8b8ad13b01%3A0x29b9f6bd15e0efb1!2sBandar%20Lampung!5e0!3m2!1sen!2sid!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Dmarlen Klinik Kecantikan"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex gap-4 p-5 bg-light-pink/50 rounded-xl border border-soft-pink hover:bg-light-pink transition-colors"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-dmsans text-xs text-text-gray uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  <p className="font-dmsans font-semibold text-card-title text-sm">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Maps button */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline justify-center"
            >
              <IconMapPin size={18} />
              Buka di Google Maps
            </a>

            {/* WA quick button */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center"
            >
              <IconBrandWhatsapp size={20} />
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
