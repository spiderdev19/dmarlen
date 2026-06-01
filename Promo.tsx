"use client";

import { useEffect, useState } from "react";
import { IconCalendar } from "@tabler/icons-react";

function getEndOfMonth() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Promo() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = getEndOfMonth();
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="promo" className="py-20 md:py-28 bg-white">
      <div className="max-w-8xl mx-auto px-5 md:px-20">
        <div className="promo-shine rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

          {/* Badge */}
          <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-dmsans font-semibold px-4 py-1.5 rounded-full mb-5">
            🎉 Promo Spesial Bulan Ini
          </span>

          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4 leading-tight relative z-10">
            Konsultasi Gratis +{" "}
            <span className="text-gold">Diskon 20%</span>{" "}
            Perawatan Pertama
          </h2>

          <p className="font-dmsans text-white/80 text-base md:text-lg max-w-lg mx-auto mb-8 relative z-10">
            Khusus untuk pelanggan baru. Berlaku hingga akhir bulan. Jangan
            sampai terlewat!
          </p>

          {/* Countdown */}
          <div className="flex justify-center gap-4 md:gap-6 mb-10 relative z-10">
            {[
              { value: timeLeft.days, label: "Hari" },
              { value: timeLeft.hours, label: "Jam" },
              { value: timeLeft.minutes, label: "Menit" },
              { value: timeLeft.seconds, label: "Detik" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl w-16 md:w-20 h-16 md:h-20 flex items-center justify-center mb-1 shadow-inner">
                  <span className="font-playfair font-bold text-white text-2xl md:text-3xl tabular-nums">
                    {pad(value)}
                  </span>
                </div>
                <span className="font-dmsans text-white/70 text-xs">{label}</span>
              </div>
            ))}
          </div>

          <a href="#cta" className="relative z-10 inline-flex items-center gap-2 bg-white text-primary font-dmsans font-bold px-8 py-4 rounded-xl shadow-xl hover:bg-light-pink transition-colors text-sm md:text-base">
            <IconCalendar size={20} />
            Ambil Promo Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
