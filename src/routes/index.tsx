import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import a286 from "@/assets/a_286.jpg.asset.json";
import a291 from "@/assets/a_291.jpg.asset.json";
import a296 from "@/assets/a_296.jpg.asset.json";
import a317 from "@/assets/a_317.jpg.asset.json";
import a318 from "@/assets/a_318.jpg.asset.json";
import aud from "@/assets/img-20260824-wa0084.jpg.asset.json";
import freelance from "@/assets/quality_restoration_20260824105900666.jpg.asset.json";
import couple from "@/assets/quality_restoration_20260824103403767.jpg.asset.json";
import solo from "@/assets/meitu_20260824_101837418.jpg.asset.json";
import family from "@/assets/quality_restoration_20260823104847633.jpg.asset.json";
import friends from "@/assets/img-20260822-wa0226.jpg.asset.json";
import vid from "@/assets/vid_20260822_063622_857.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Selamat Wisuda, Sayang — Scrapbook Kelulusan" },
      {
        name: "description",
        content:
          "Scrapbook ucapan selamat wisuda: kumpulan foto, video, dan kata-kata manis untuk merayakan gelar yang akhirnya kamu raih.",
      },
      { property: "og:title", content: "Selamat Wisuda, Sayang — Scrapbook Kelulusan" },
      {
        property: "og:description",
        content:
          "Perjalanan panjang itu akhirnya bernama gelar. Sebuah scrapbook kecil penuh foto, video, dan kata-kata untukmu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setShown(true);
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-shown={shown} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

type Entry = {
  src: string;
  alt: string;
  chapter: string;
  title: string;
  note: string;
  caption: string;
  tilt: string;
  ratio?: string;
};

const entries: Entry[] = [
  {
    src: freelance.url,
    alt: "Bekerja freelance di depan laptop saat masih kuliah",
    chapter: "Bab nol",
    title: "Sebelum toga, ada layar dan tenggat",
    note: "Sambil kuliah kamu freelance — cari pengalaman, cari jam terbang, cari versi dirimu yang lebih siap. Ruangan sepi, dua laptop menyala, dan kamu yang tetap fokus walau lelah. Dari sinilah semuanya pelan-pelan dibangun.",
    caption: "kerja sambil kuliah, diam-diam menempa diri",
    tilt: "1.5deg",
  },
  {
    src: a318.url,
    alt: "Berdiri di podium sidang senat terbuka wisuda",
    chapter: "Bab satu",
    title: "Berdiri di depan semua orang",
    note: "Kamu yang dulu latihan bicara sendirian di kamar, hari ini suaramu memenuhi seluruh ruangan. Aku menonton dari kursi penonton, dan aku tidak bisa berhenti tersenyum.",
    caption: "podium, dan segala gugup yang kamu sembunyikan",
    tilt: "-2.2deg",
  },
  {
    src: a317.url,
    alt: "Wisudawan berpidato memegang mikrofon dengan selempang cumlaude",
    chapter: "Bab dua",
    title: "Setiap kata yang kamu ucapkan",
    note: "Di balik toga itu ada malam-malam tanpa tidur, revisi yang tidak habis-habis, dan kata 'nanti dulu' yang sering kamu ucapkan ke dirimu sendiri. Semuanya berubah jadi satu kalimat: aku berhasil.",
    caption: "cum laude bukan keberuntungan, itu keringatmu",
    tilt: "1.8deg",
  },
  {
    src: a286.url,
    alt: "Prosesi pemindahan tali toga oleh pimpinan kampus",
    chapter: "Bab tiga",
    title: "Tali toga itu berpindah",
    note: "Beberapa detik yang kelihatannya sederhana, padahal itu penutup dari bertahun-tahun perjuanganmu. Aku ikut menahan napas waktu tanganmu turun lagi ke samping.",
    caption: "detik paling pendek, arti paling panjang",
    tilt: "-1.4deg",
  },
  {
    src: a291.url,
    alt: "Menerima plakat dan piagam penghargaan lulusan terbaik",
    chapter: "Bab empat",
    title: "Namamu dipanggil sebagai yang terbaik",
    note: "Waktu namamu disebut, dadaku yang berdegup. Kamu selalu bilang 'biasa aja', tapi tidak ada yang biasa dari orang yang tidak pernah berhenti walau lelah.",
    caption: "piagam itu cuma kertas — yang hebat orangnya",
    tilt: "2.4deg",
  },
  {
    src: a296.url,
    alt: "Foto bersama jajaran pimpinan kampus dan Bapak di atas panggung",
    chapter: "Bab lima",
    title: "Berdiri sejajar, dengan Bapakmu di sampingmu",
    note: "Lihat barisan itu. Bapakmu berdiri tegak di sampingmu, bukan cuma sebagai orang tua, tapi saksi dari segala kerja kerasmu. Dalam satu frame, kalian berdua sama-sama ada di panggung kebanggaan.",
    caption: "Bapakmu ada, dan matanya berkata 'itulah anakku'",
    tilt: "-2deg",
  },
  {
    src: aud.url,
    alt: "Para orang tua dan tamu undangan menyaksikan prosesi wisuda",
    chapter: "Bab enam",
    title: "Mereka yang datang untukmu",
    note: "Di kursi-kursi itu duduk doa yang tidak pernah putus. Gelarmu bukan cuma milikmu — itu milik semua yang menunggumu sampai hari ini.",
    caption: "ruangan penuh orang yang bangga padamu",
    tilt: "1.6deg",
  },
  {
    src: solo.url,
    alt: "Berpose mengenakan jas almamater dengan selempang cumlaude",
    chapter: "Bab tujuh",
    title: "Selempang itu, dan senyum yang kamu tahan",
    note: "Sarjana Teknik Informatika, cum laude. Tapi yang paling aku suka bukan tulisan emas di selempangnya — melainkan raut lega di wajahmu, seperti akhirnya boleh bernapas panjang.",
    caption: "cum laude, dan senyum yang paling kutunggu",
    tilt: "-1.8deg",
    ratio: "3/4",
  },
  {
    src: family.url,
    alt: "Foto bersama orang tua dan keluarga di depan backdrop wisuda",
    chapter: "Bab delapan",
    title: "Orang tuamu datang, dan itu segalanya",
    note: "Mereka yang paling lama menunggu hari ini akhirnya berdiri di sampingmu. Piagam itu dipegang bapakmu, ibumu di sisimu — semua doa yang dulu diam-diam dipanjatkan, hari ini terjawab di satu foto.",
    caption: "orang tua yang hadir, kebanggaan yang penuh",
    tilt: "2deg",
    ratio: "3/4",
  },
  {
    src: friends.url,
    alt: "Foto bersama teman-teman seangkatan mengenakan toga",
    chapter: "Bab sembilan",
    title: "Teman seperjuangan sampai garis akhir",
    note: "Kalian pernah saling menyemangati waktu semuanya terasa berat. Hari ini berdiri sebaris dengan toga yang sama — bukti bahwa perjuangan itu memang tidak pernah kamu jalani sendirian.",
    caption: "satu angkatan, satu perjuangan",
    tilt: "-1.5deg",
  },
  {
    src: couple.url,
    alt: "Berfoto berdua membawa buket bunga di hari wisuda",
    chapter: "Bab sepuluh",
    title: "Dan aku, berdiri di sebelahmu",
    note: "Aku bawakan bunga, kamu bawakan kabar baik. Dari semua foto hari itu, ini yang paling sering aku buka — karena di sini aku bukan cuma penonton, tapi bagian dari ceritamu.",
    caption: "hari besarmu, dan aku di sampingmu",
    tilt: "1.9deg",
    ratio: "3/4",
  },
];

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
        <Reveal>
          <p className="font-hand text-2xl text-muted-foreground">untukmu, yang akhirnya sampai</p>
        </Reveal>
        <Reveal>
          <h1 className="mt-4 font-display text-6xl leading-[0.95] font-light tracking-tight text-navy-deep sm:text-8xl">
            Selamat
            <span className="mt-1 block italic">Wisuda</span>
          </h1>
        </Reveal>
        <Reveal>
          <div className="mt-8 h-px w-24 bg-ink/30" />
        </Reveal>
        <Reveal>
          <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-muted-foreground">
            Hari ini gelar itu resmi jadi milikmu. Tapi jauh sebelum toga dan panggung, aku sudah
            melihat semua yang kamu lewati untuk sampai ke sini. Halaman-halaman di bawah ini aku
            susun pelan-pelan — seperti scrapbook, seperti ingatan.
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-10 font-hand text-3xl text-navy-deep">terima kasih sudah tidak menyerah</p>
        </Reveal>
        <Reveal>
          <div className="mt-14 flex flex-col items-center gap-2">
            <span className="font-body text-[0.7rem] tracking-[0.35em] text-muted-foreground uppercase">
              geser ke bawah
            </span>
            <span className="block h-14 w-px animate-pulse bg-ink/30" />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
        <div className="flex flex-col gap-28 sm:gap-36">
          {entries.map((e, i) => (
            <Reveal key={e.src}>
              <article
                className={`flex flex-col items-center gap-10 sm:gap-14 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="scene w-full md:w-[55%]">
                  <div
                    className={`paper-card tape-corner card-3d p-3 pb-16 sm:p-4 sm:pb-20 ${
                      i % 2 === 0 ? "lean-left" : "lean-right"
                    }`}
                    style={{ ["--tilt" as string]: e.tilt }}
                  >
                    <img
                      src={e.src}
                      alt={e.alt}
                      loading="lazy"
                      className="w-full object-cover"
                      style={{ aspectRatio: e.ratio ?? "4/3" }}
                    />
                    <p className="absolute right-0 bottom-5 left-0 px-4 text-center font-hand text-xl text-muted-foreground sm:text-2xl">
                      {e.caption}
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-[45%]">
                  <span className="font-body text-[0.7rem] tracking-[0.3em] text-muted-foreground uppercase">
                    {e.chapter}
                  </span>
                  <h2 className="mt-3 font-display text-3xl leading-tight font-light text-navy-deep sm:text-4xl">
                    {e.title}
                  </h2>
                  <div className="mt-5 h-px w-14 bg-ink/25" />
                  <p className="mt-5 font-body text-[0.95rem] leading-relaxed text-muted-foreground">
                    {e.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-28 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="font-body text-[0.7rem] tracking-[0.3em] text-muted-foreground uppercase">
              Bab terakhir
            </span>
            <h2 className="mt-3 font-display text-4xl font-light text-navy-deep sm:text-5xl">
              Momen yang bergerak
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-body text-sm leading-relaxed text-muted-foreground">
              Foto menyimpan wajahmu, tapi video ini menyimpan suasananya. Aku putar berkali-kali,
              dan tetap saja rasanya seperti pertama kali.
            </p>
          </div>
        </Reveal>
        <Reveal className="mt-12">
          <div className="paper-card tape p-3 sm:p-4">
            <video
              src={vid.url}
              controls
              playsInline
              preload="metadata"
              className="w-full bg-ink"
            />
            <p className="py-4 text-center font-hand text-2xl text-muted-foreground">
              rekaman kecil dari hari besarmu
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-32 text-center">
        <Reveal>
          <div className="paper-card px-7 py-14 sm:px-14 sm:py-20">
            <p className="font-hand text-3xl text-navy-deep sm:text-4xl">
              Dari aku, yang selalu ada di barisan penontonmu
            </p>
            <div className="mx-auto mt-8 h-px w-16 bg-ink/25" />
            <p className="mt-8 font-body text-[0.95rem] leading-relaxed text-muted-foreground">
              Selamat atas gelarmu, sayang. Aku bangga bukan karena kamu lulus dengan nilai baik,
              tapi karena aku tahu betul betapa berat jalan yang kamu tempuh diam-diam. Kamu pernah
              lelah, pernah ragu, pernah ingin berhenti — dan kamu tetap jalan.
            </p>
            <p className="mt-5 font-body text-[0.95rem] leading-relaxed text-muted-foreground">
              Hari ini satu bab selesai. Bab berikutnya pasti punya tantangannya sendiri, dan aku
              tidak akan ke mana-mana. Ayo rayakan pelan-pelan, lalu lanjut lagi bersama.
            </p>
            <p className="mt-10 font-display text-2xl italic text-navy-deep">
              “Semua yang kamu perjuangkan diam-diam, hari ini pulang membawa nama.”
            </p>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-ink/10 py-10 text-center">
        <p className="font-hand text-xl text-muted-foreground">
          dibuat dengan sayang, untuk hari kelulusanmu
        </p>
      </footer>
    </main>
  );
}
