import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, ArrowRight, Hammer, PaintRoller, Wrench, Ruler, ShieldCheck, Sparkles, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/filbud-logo.png";
import hero from "@/assets/hero-interior.jpg";
import workBathroom from "@/assets/work-bathroom.jpg";
import workKitchen from "@/assets/work-kitchen.jpg";
import workBedroom from "@/assets/work-bedroom.jpg";
import workCraft from "@/assets/work-craft.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FilBud — Wykończenia Wnętrz | Remonty Koszyce Małe, Tarnów" },
      { name: "description", content: "FilBud — profesjonalne wykończenia wnętrz i usługi remontowo-budowlane w Koszycach Małych i okolicach Tarnowa. Ocena 4,6/5. Bezpłatna wycena." },
    ],
  }),
});

const services = [
  { icon: PaintRoller, title: "Wykończenia wnętrz", desc: "Gładzie, malowanie, tapetowanie, dekoracyjne tynki i mikrocement." },
  { icon: Hammer, title: "Remonty kompleksowe", desc: "Mieszkania, domy, lokale — od projektu po ostatni detal." },
  { icon: Ruler, title: "Łazienki i kuchnie", desc: "Glazura, hydraulika, zabudowy, oświetlenie. Pod klucz." },
  { icon: Wrench, title: "Instalacje", desc: "Elektryka, hydraulika, ogrzewanie — sprawdzeni specjaliści." },
  { icon: ShieldCheck, title: "Gwarancja jakości", desc: "Pisemna umowa, terminy, materiały najwyższej klasy." },
  { icon: Sparkles, title: "Wykończenia premium", desc: "Detal, precyzja, nietuzinkowe rozwiązania designerskie." },
];

const reviews = [
  { name: "Ilona Chyzhyk", text: "Wielkie podziękowania dla pana Sebastiana i jego zespołu. Praca wykonana z najwyższą starannością — polecam każdemu.", rating: 5 },
  { name: "Dominika Siwiec", text: "Wspaniała ekipa godna polecenia z czystym sumieniem. Staranność, dokładność i punktualność. Błyskawiczna wycena, stały kontakt.", rating: 5 },
  { name: "Marek Senior", text: "Bardzo profesjonalna firma. Zlecone prace wykonane bez zastrzeżeń. Wysoka kultura osobista. Szczerze polecam każdemu, kto ceni sobie porządnie wykonaną robotę. Panu Sebastianowi bardzo dziękujemy i życzymy samych sukcesów.", rating: 5 },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="FilBud — wykończenia wnętrz" className="h-10 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide uppercase">
            <a href="#uslugi" className="hover:text-accent transition-colors">Usługi</a>
            <a href="#realizacje" className="hover:text-accent transition-colors">Realizacje</a>
            <a href="#opinie" className="hover:text-accent transition-colors">Opinie</a>
            <a href="#kontakt" className="hover:text-accent transition-colors">Kontakt</a>
          </nav>
          <a href="tel:888901181" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-accent transition-colors">
            <Phone className="h-4 w-4" /> 888 901 181
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-end pt-20">
        <img src={hero} alt="Eleganckie wnętrze wykończone przez FilBud" className="absolute inset-0 w-full h-full object-cover" width={1600} height={1100} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 md:pb-32 w-full">
          <div className="max-w-3xl text-primary-foreground">
            <div className="flex items-center gap-3 mb-8 text-xs tracking-[0.3em] uppercase opacity-80">
              <span className="h-px w-10 bg-primary-foreground" />
              Koszyce Małe · Tarnów · od 2014
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05]">
              Wnętrza<br />
              <span className="italic text-accent">wykończone</span> z pasją.
            </h1>
            <p className="mt-8 text-lg max-w-xl opacity-90 leading-relaxed md:text-xl">
              FilBud to zespół rzemieślników, który traktuje Twój dom jak swój własny.
              Remonty, wykończenia i detale, które robią różnicę.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a href="#kontakt" className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground hover:bg-primary-foreground hover:text-primary transition-colors group">
                Bezpłatna wycena
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#realizacje" className="inline-flex items-center gap-3 px-8 py-4 border border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary transition-colors">
                Zobacz realizacje
              </a>
            </div>
            <div className="mt-16 flex items-center gap-8 text-sm">
              <div>
                <div className="flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-2 opacity-80"><span className="font-semibold">4,6/5</span> · Google · 19 opinii</p>
              </div>
              <div className="h-10 w-px bg-primary-foreground/20" />
              <div className="opacity-80">
                <p className="font-semibold text-primary-foreground">10+ lat</p>
                <p>doświadczenia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="uslugi" className="py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-5">
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">— Co robimy</p>
              <h2 className="text-4xl md:text-6xl leading-tight">Pełen zakres usług remontowo-budowlanych.</h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex items-end">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Od koncepcji po klucz w drzwiach. Pracujemy w mieszkaniach, domach jednorodzinnych i lokalach
                użytkowych w Tarnowie i całej Małopolsce. Zawsze z dbałością o detal.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s) => (
              <div key={s.title} className="bg-background p-10 group hover:bg-card transition-colors">
                <s.icon className="h-8 w-8 text-accent mb-8 group-hover:scale-110 transition-transform" strokeWidth={1.25} />
                <h3 className="text-2xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="realizacje" className="py-28 md:py-40 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">— Realizacje</p>
              <h2 className="text-4xl md:text-6xl">Nasze ostatnie prace.</h2>
            </div>
            <a href="#kontakt" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider hover:text-accent transition-colors">
              Zapytaj o swoją <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <figure className="col-span-12 md:col-span-7 group overflow-hidden">
              <img src={workKitchen} alt="Realizacja kuchni" loading="lazy" width={1200} height={900} className="w-full h-[420px] md:h-[560px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <figcaption className="mt-4 flex justify-between text-sm"><span className="uppercase tracking-wider">Kuchnia · Tarnów</span><span className="text-muted-foreground">2024</span></figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-5 group overflow-hidden">
              <img src={workBathroom} alt="Realizacja łazienki" loading="lazy" width={1000} height={1200} className="w-full h-[420px] md:h-[560px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <figcaption className="mt-4 flex justify-between text-sm"><span className="uppercase tracking-wider">Łazienka · Koszyce</span><span className="text-muted-foreground">2024</span></figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-5 group overflow-hidden">
              <img src={workBedroom} alt="Realizacja sypialni" loading="lazy" width={1000} height={1200} className="w-full h-[420px] md:h-[560px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <figcaption className="mt-4 flex justify-between text-sm"><span className="uppercase tracking-wider">Sypialnia · Tarnów</span><span className="text-muted-foreground">2023</span></figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-7 group overflow-hidden">
              <img src={workCraft} alt="Praca rzemieślnicza FilBud" loading="lazy" width={1200} height={900} className="w-full h-[420px] md:h-[560px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <figcaption className="mt-4 flex justify-between text-sm"><span className="uppercase tracking-wider">Wykończenia · detale</span><span className="text-muted-foreground">2024</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">— Jak pracujemy</p>
          <h2 className="text-4xl md:text-6xl mb-20 max-w-3xl">Cztery kroki do gotowego wnętrza.</h2>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { n: "01", t: "Spotkanie", d: "Przyjeżdżamy, słuchamy, mierzymy. Bezpłatnie." },
              { n: "02", t: "Wycena", d: "Konkretna, transparentna wycena w 48 godzin." },
              { n: "03", t: "Realizacja", d: "Pracujemy zgodnie z harmonogramem i umową." },
              { n: "04", t: "Odbiór", d: "Sprzątamy, oddajemy klucz. Gwarancja na pracę." },
            ].map((step) => (
              <div key={step.n} className="border-t border-foreground pt-6">
                <div className="text-xs tracking-[0.3em] text-accent mb-6">{step.n}</div>
                <h3 className="text-2xl mb-3">{step.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="opinie" className="py-28 md:py-40 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">— Opinie klientów</p>
              <h2 className="text-4xl md:text-6xl">Zaufanie zbudowane projekt po projekcie.</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-6xl font-light">4,6</div>
              <div>
                <div className="flex text-accent">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="text-sm opacity-80 mt-1">19 opinii Google</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/10">
            {reviews.map((r) => (
              <article key={r.name} className="bg-primary p-10">
                <div className="flex text-accent mb-6">{[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="text-lg leading-relaxed mb-8 opacity-90">„{r.text}"</p>
                <p className="text-sm uppercase tracking-wider">{r.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="kontakt" className="py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">— Kontakt</p>
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">Porozmawiajmy o Twoim wnętrzu.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-md">
              Zadzwoń lub przyjedź do nas. Wycena bezpłatna, bez zobowiązań.
              Zwykle odpowiadamy tego samego dnia.
            </p>

            <div className="space-y-8">
              <a href="tel:888901181" className="flex items-start gap-5 group">
                <Phone className="h-6 w-6 mt-1 text-accent" strokeWidth={1.25} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Telefon</p>
                  <p className="text-2xl group-hover:text-accent transition-colors">888 901 181</p>
                </div>
              </a>
              <div className="flex items-start gap-5">
                <MapPin className="h-6 w-6 mt-1 text-accent" strokeWidth={1.25} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Adres</p>
                  <p className="text-lg">Spacerowa 12A, 33-111 Koszyce Małe</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <Clock className="h-6 w-6 mt-1 text-accent" strokeWidth={1.25} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Godziny</p>
                  <p className="text-lg">Pon–Pt · 07:00 – 16:00</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-10 md:p-14 border border-border flex flex-col justify-center"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-6">— Bezpłatna wycena</p>
            <h3 className="text-3xl md:text-4xl mb-4 leading-tight">Napisz lub zadzwoń jednym kliknięciem.</h3>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Najszybciej odpowiadamy na WhatsAppie. Opisz krótko czego potrzebujesz —
              oddzwonimy z bezpłatną wyceną tego samego dnia.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:prygakacper449@gmail.com?subject=Bezp%C5%82atna%20wycena%20%E2%80%94%20FilBud&body=Dzie%C5%84%20dobry%2C%0A%0Achcia%C5%82bym%20otrzyma%C4%87%20bezp%C5%82atn%C4%85%20wycen%C4%99.%0A%0AOpis%20projektu%3A%0A%0AImi%C4%99%20i%20nazwisko%3A%0ATelefon%3A"
                className="w-full px-8 py-5 bg-accent text-accent-foreground hover:opacity-90 transition-opacity inline-flex items-center justify-between gap-3 group"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-5 w-5" strokeWidth={1.5} />
                  Napisz e-mail
                </span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:888901181"
                className="w-full px-8 py-5 bg-primary text-primary-foreground hover:bg-accent transition-colors inline-flex items-center justify-between gap-3 group"
              >
                <span className="flex items-center gap-3">
                  <Phone className="h-5 w-5" strokeWidth={1.5} />
                  Zadzwoń: 888 901 181
                </span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="sms:888901181"
                className="w-full px-8 py-5 border border-border hover:bg-secondary transition-colors inline-flex items-center justify-between gap-3 group"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  Wyślij SMS
                </span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <p className="text-xs text-muted-foreground mt-8 text-center">
              Wycena zawsze bezpłatna · bez zobowiązań
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
          <img src={logo} alt="FilBud" className="h-9 w-auto opacity-80" />
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} FilBud — Wykończenia Wnętrz. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}
