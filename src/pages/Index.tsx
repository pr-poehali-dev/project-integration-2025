import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function GeoCalcLandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  const marqueeRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const desireRef = useRef<HTMLElement>(null)
  const instigateRef = useRef<HTMLElement>(null)
  const whyRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const duration = 3000
    const interval = 30
    const steps = duration / interval
    const increment = 100 / steps
    let currentProgress = 0

    const timer = setInterval(() => {
      currentProgress += increment
      if (currentProgress >= 100) {
        currentProgress = 100
        clearInterval(timer)
        setTimeout(() => {
          setIsLoading(false)
        }, 200)
      }
      setProgress(currentProgress)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isLoading) return

    const ctx = gsap.context(() => {
      if (marqueeRef.current) {
        const marqueeContent = marqueeRef.current.querySelector(".marquee-content")
        if (marqueeContent) {
          const marqueeWidth = marqueeContent.scrollWidth / 2

          gsap.to(marqueeContent, {
            x: -marqueeWidth,
            duration: 20,
            ease: "none",
            repeat: -1,
          })
        }
      }

      gsap.from(heroRef.current?.querySelector(".hero-content"), {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
      })

      gsap.from(heroRef.current?.querySelector(".hero-image"), {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      })

      gsap.from(benefitsRef.current?.querySelector(".benefits-title"), {
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(benefitsRef.current?.querySelectorAll(".benefit-card"), {
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(aboutRef.current?.querySelector(".about-image"), {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(aboutRef.current?.querySelector(".about-content"), {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(desireRef.current?.querySelector("h2"), {
        scrollTrigger: {
          trigger: desireRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(desireRef.current?.querySelectorAll(".desire-image"), {
        scrollTrigger: {
          trigger: desireRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(instigateRef.current?.querySelector(".instigate-content"), {
        scrollTrigger: {
          trigger: instigateRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(instigateRef.current?.querySelector(".instigate-image"), {
        scrollTrigger: {
          trigger: instigateRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(whyRef.current?.querySelector(".why-content"), {
        scrollTrigger: {
          trigger: whyRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(whyRef.current?.querySelector(".why-image"), {
        scrollTrigger: {
          trigger: whyRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(pricingRef.current?.querySelectorAll(".pricing-card"), {
        scrollTrigger: {
          trigger: pricingRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(ctaRef.current?.querySelector(".cta-box"), {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      })
    })

    return () => ctx.revert()
  }, [isLoading])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#0A1628]">
          <div className="flex flex-col items-center gap-8 px-6">
            <h1 className="font-serif text-4xl tracking-tight text-white md:text-5xl lg:text-6xl">
              ГЕО
              <span className="block text-[#2D7DD2]">CALC</span>
            </h1>
            <div className="w-full max-w-md">
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#1a2a45]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#1a4a8a] to-[#2D7DD2] transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-4 text-center text-sm text-[#CCCCCC]">{Math.round(progress)}%</p>
            </div>
          </div>
        </div>
      )}

      <main className="w-full overflow-x-hidden bg-[#0A1628]">
        {/* Marquee */}
        <div ref={marqueeRef} className="w-full overflow-hidden bg-[#1a4a8a] py-4">
          <div className="marquee-content flex items-center gap-4 whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              i % 2 === 0 ? (
                <div key={i} className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
                  <span className="font-serif text-xs font-normal text-[#0A1628] md:text-sm">ТОЧНОСТЬ ДО 0.001 М</span>
                </div>
              ) : (
                <div key={i} className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
                  <span className="font-serif text-xs font-normal text-white md:text-sm">
                    АВТОМАТИЧЕСКИЙ РАСЧЁТ ТЕОДОЛИТНОГО ХОДА
                  </span>
                </div>
              )
            ))}
            {[...Array(6)].map((_, i) => (
              i % 2 === 0 ? (
                <div key={`d-${i}`} className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
                  <span className="font-serif text-xs font-normal text-[#0A1628] md:text-sm">ТОЧНОСТЬ ДО 0.001 М</span>
                </div>
              ) : (
                <div key={`d-${i}`} className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
                  <span className="font-serif text-xs font-normal text-white md:text-sm">
                    АВТОМАТИЧЕСКИЙ РАСЧЁТ ТЕОДОЛИТНОГО ХОДА
                  </span>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Hero */}
        <section
          ref={heroRef}
          className="relative flex min-h-[600px] w-full items-center justify-center px-6 py-16 md:min-h-[800px] md:px-20 md:py-24 lg:min-h-[1030px] lg:px-80"
          style={{
            backgroundImage: `radial-gradient(74.86% 63.04% at 50% 71.13%, rgba(10, 22, 40, 0) 0%, #0A1628 100%), linear-gradient(190.21deg, rgba(10, 22, 40, 0) 48.79%, #0A1628 91.19%), url(/images/design-mode/hero-image.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex w-full max-w-7xl flex-col items-center gap-8 md:gap-12 lg:gap-14">
            <div className="hero-content flex flex-col items-center gap-5 text-center">
              <h1 className="text-balance font-serif text-3xl leading-tight tracking-tight text-white md:text-5xl lg:text-[56px]">
                Расчёт координат участка по теодолитной съёмке
              </h1>
              <p className="max-w-4xl text-pretty text-base leading-relaxed tracking-tight text-[#CCCCCC] md:text-lg">
                Профессиональный инструмент для геодезистов — вводите измерения, получайте точные координаты, ведомости и площади участков за секунды.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <Button className="h-12 rounded-xl bg-white px-4 font-serif text-base text-[#0A1628] hover:bg-white/90 md:text-lg">
                  Начать расчёт
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-xl border-[#CCCCCC] bg-transparent font-serif text-base text-white hover:bg-white/10 md:text-lg"
                >
                  Смотреть пример
                </Button>
              </div>
            </div>
            <div className="hero-image relative h-[300px] w-full max-w-2xl md:h-[400px] lg:h-[583px] lg:max-w-[884px]">
              {/* Схема теодолитного хода */}
              <svg viewBox="0 0 884 583" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="gridGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#2D7DD2" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0A1628" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="884" height="583" fill="url(#gridGlow)" rx="16" />
                {/* Сетка */}
                {[...Array(12)].map((_, i) => (
                  <line key={`v${i}`} x1={73 * (i + 1)} y1="0" x2={73 * (i + 1)} y2="583" stroke="#2D7DD2" strokeOpacity="0.1" strokeWidth="1" />
                ))}
                {[...Array(8)].map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={72 * (i + 1)} x2="884" y2={72 * (i + 1)} stroke="#2D7DD2" strokeOpacity="0.1" strokeWidth="1" />
                ))}
                {/* Теодолитный ход — замкнутый полигон */}
                <polygon
                  points="200,100 650,80 780,300 680,490 200,460 100,280"
                  fill="none"
                  stroke="#2D7DD2"
                  strokeWidth="2.5"
                  strokeDasharray="8,4"
                  strokeOpacity="0.7"
                />
                {/* Точки хода */}
                {[
                  { x: 200, y: 100, label: "T1", dx: -30, dy: -12 },
                  { x: 650, y: 80, label: "T2", dx: 12, dy: -12 },
                  { x: 780, y: 300, label: "T3", dx: 16, dy: 0 },
                  { x: 680, y: 490, label: "T4", dx: 12, dy: 16 },
                  { x: 200, y: 460, label: "T5", dx: -32, dy: 16 },
                  { x: 100, y: 280, label: "T6", dx: -32, dy: 0 },
                ].map((pt) => (
                  <g key={pt.label}>
                    <circle cx={pt.x} cy={pt.y} r="10" fill="#2D7DD2" fillOpacity="0.25" />
                    <circle cx={pt.x} cy={pt.y} r="5" fill="#2D7DD2" />
                    <text x={pt.x + pt.dx} y={pt.y + pt.dy} fill="#7EC8F4" fontSize="13" fontFamily="monospace">{pt.label}</text>
                  </g>
                ))}
                {/* Координаты */}
                {[
                  { x: 220, y: 125, text: "X: 1024.35" },
                  { x: 670, y: 105, text: "X: 1156.82" },
                  { x: 690, y: 330, text: "Y: 584.91" },
                ].map((t, i) => (
                  <text key={i} x={t.x} y={t.y} fill="#2D7DD2" fillOpacity="0.6" fontSize="11" fontFamily="monospace">{t.text}</text>
                ))}
                {/* Центральная подпись */}
                <text x="442" y="285" textAnchor="middle" fill="#2D7DD2" fillOpacity="0.3" fontSize="14" fontFamily="monospace">
                  S = 42 816 м²
                </text>
              </svg>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefitsRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 lg:flex-row lg:gap-12">
            <div className="benefits-title flex flex-col gap-6 lg:flex-1">
              <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Профессиональная точность без ошибок ручного счёта
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-white md:text-lg">
                Программа автоматически обрабатывает результаты теодолитной съёмки, вычисляет невязки, распределяет поправки и выдаёт готовую ведомость координат.
              </p>
            </div>
            <div className="flex flex-col gap-2 lg:flex-1">
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#1a4a8a] to-[#0A1628] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-4xl">Замкнутый ход</h3>
                <p className="text-sm leading-relaxed tracking-tight text-white md:text-base">
                  Автоматическое вычисление угловой и линейной невязки, распределение поправок по Боуничу.
                </p>
              </div>
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#1a4a8a] to-[#0A1628] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-4xl">
                  Разомкнутый ход
                </h3>
                <p className="text-sm leading-relaxed tracking-tight text-white md:text-base">
                  Расчёт от исходных пунктов с контролем по конечным дирекционным углам и координатам.
                </p>
              </div>
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#1a4a8a] to-[#0A1628] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-4xl">
                  Площадь участка
                </h3>
                <p className="text-sm leading-relaxed tracking-tight text-white md:text-base">
                  Автоматическое вычисление площади по формуле Гаусса с выводом в м² и га.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section ref={aboutRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-12">
            <div className="about-image w-full lg:flex-1">
              <div className="flex items-center justify-center rounded-2xl bg-[#0d1f3c] p-8">
                <svg viewBox="0 0 500 360" className="w-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Ведомость вычисления координат */}
                  <rect width="500" height="360" fill="#0d1f3c" rx="12" />
                  <text x="250" y="32" textAnchor="middle" fill="#7EC8F4" fontSize="14" fontFamily="monospace" fontWeight="bold">ВЕДОМОСТЬ ВЫЧИСЛЕНИЯ КООРДИНАТ</text>
                  {/* Шапка таблицы */}
                  {["№", "α°", "d, м", "Δx", "Δy", "X", "Y"].map((h, i) => (
                    <text key={h} x={30 + i * 68} y={60} fill="#2D7DD2" fontSize="12" fontFamily="monospace">{h}</text>
                  ))}
                  <line x1="20" y1="66" x2="480" y2="66" stroke="#2D7DD2" strokeOpacity="0.4" strokeWidth="1" />
                  {/* Строки */}
                  {[
                    ["T1", "47°12′", "84.30", "+57.42", "+61.95", "1024.35", "2148.60"],
                    ["T2", "115°38′", "96.15", "-41.82", "+87.03", "1081.77", "2210.55"],
                    ["T3", "198°05′", "71.40", "-67.89", "-22.41", "1039.95", "2297.58"],
                    ["T4", "271°44′", "88.60", "+2.54", "-88.56", "972.06", "2275.17"],
                    ["T5", "343°22′", "102.70", "+98.37", "-29.82", "974.60", "2186.61"],
                    ["T6→T1", "25°50′", "91.50", "+49.83", "+39.84", "1072.97", "2157.06"],
                  ].map((row, ri) => (
                    <g key={ri}>
                      <rect x="20" y={72 + ri * 38} width="460" height="36" fill={ri % 2 === 0 ? "#ffffff08" : "transparent"} rx="4" />
                      {row.map((cell, ci) => (
                        <text key={ci} x={30 + ci * 68} y={95 + ri * 38} fill={ci >= 5 ? "#4ade80" : "#CCCCCC"} fontSize="11" fontFamily="monospace">{cell}</text>
                      ))}
                    </g>
                  ))}
                  <line x1="20" y1="302" x2="480" y2="302" stroke="#2D7DD2" strokeOpacity="0.4" strokeWidth="1" />
                  <text x="30" y="328" fill="#2D7DD2" fontSize="12" fontFamily="monospace">fβ = +24″  fd = 0.08 м  1:T = 1:5700</text>
                  <text x="30" y="348" fill="#4ade80" fontSize="12" fontFamily="monospace">✓ Допуск соблюдён</text>
                </svg>
              </div>
            </div>
            <div className="about-content flex flex-col gap-6 lg:flex-1">
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Как работает программа
              </h2>
              <p className="text-base leading-relaxed tracking-tight text-white/80 md:text-lg">
                Вы вводите полевые данные: горизонтальные углы, расстояния и координаты исходных пунктов. Программа выполняет полный цикл камеральной обработки — от увязки угловой невязки до вычисления площади участка.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Ввод горизонтальных углов и горизонтальных проложений",
                  "Вычисление дирекционных углов с поправками",
                  "Расчёт приращений координат ΔX и ΔY",
                  "Распределение невязки и вычисление координат",
                  "Расчёт площади по формуле Гаусса",
                  "Экспорт ведомости в таблицу",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70 md:text-base">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#2D7DD2]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Desire — примеры расчётов */}
        <section ref={desireRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col gap-8">
            <h2 className="text-balance text-center font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Что получает геодезист на выходе
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  title: "Ведомость координат",
                  desc: "Полная таблица с дирекционными углами, приращениями и исправленными координатами всех точек хода.",
                  icon: "📋",
                },
                {
                  title: "Контроль невязки",
                  desc: "Угловая невязка fβ, линейная невязка fd, относительная невязка 1:T с оценкой допуска.",
                  icon: "✅",
                },
                {
                  title: "Площадь участка",
                  desc: "Площадь по формуле Гаусса в м² и га. Наглядный план участка с нумерованными точками.",
                  icon: "📐",
                },
              ].map((item, i) => (
                <div key={i} className="desire-image flex flex-col gap-4 rounded-[20px] bg-[#0d1f3c] p-6 md:p-8">
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="font-serif text-xl font-semibold text-white md:text-2xl">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60 md:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instigate — пример ввода данных */}
        <section ref={instigateRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row-reverse lg:gap-12">
            <div className="instigate-image w-full lg:flex-1">
              <div className="rounded-2xl bg-[#0d1f3c] p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#2D7DD2]">Форма ввода данных</p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Количество точек хода", value: "6" },
                    { label: "X начальной точки T1, м", value: "1024.350" },
                    { label: "Y начальной точки T1, м", value: "2148.600" },
                    { label: "Исходный дирекционный угол α₀", value: "47°12′00″" },
                    { label: "Угол β₁ (T1)", value: "163°45′30″" },
                    { label: "Расстояние d₁, м", value: "84.30" },
                  ].map((field, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                      <span className="text-xs text-white/50 md:text-sm">{field.label}</span>
                      <span className="font-mono text-sm font-semibold text-[#7EC8F4] md:text-base">{field.value}</span>
                    </div>
                  ))}
                  <button className="mt-2 w-full rounded-xl bg-[#2D7DD2] py-3 text-sm font-semibold text-white">
                    Рассчитать →
                  </button>
                </div>
              </div>
            </div>
            <div className="instigate-content flex flex-col gap-6 lg:flex-1">
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Простой ввод полевых данных
              </h2>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                Интуитивная форма ввода — задаёте координаты исходной точки, дирекционный угол, затем построчно вводите горизонтальные углы и расстояния. Программа сразу проверяет данные на корректность.
              </p>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                Поддерживаются форматы ввода углов в градусах-минутах-секундах и в десятичных градусах. Все вычисления — по формулам ГОСТ и учебных программ геодезии.
              </p>
            </div>
          </div>
        </section>

        {/* Why — точность и надёжность */}
        <section ref={whyRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-12">
            <div className="why-content flex flex-col gap-6 lg:flex-1">
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Почему геодезисты доверяют нашим расчётам
              </h2>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                Алгоритмы основаны на классических формулах геодезии — метод Боуниха для распределения невязок, формула Гаусса для площади. Каждый шаг вычисления прозрачен и проверяем.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "0.001 м", label: "Точность координат" },
                  { val: "1:5000+", label: "Допустимая невязка" },
                  { val: "∞", label: "Точек в ходе" },
                  { val: "PDF", label: "Экспорт ведомости" },
                ].map((stat, i) => (
                  <div key={i} className="rounded-xl bg-[#0d1f3c] p-4 text-center">
                    <p className="font-serif text-2xl font-bold text-[#2D7DD2] md:text-3xl">{stat.val}</p>
                    <p className="mt-1 text-xs text-white/50 md:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="why-image w-full lg:flex-1">
              <div className="flex items-center justify-center rounded-2xl bg-[#0d1f3c] p-8">
                <svg viewBox="0 0 400 300" className="w-full" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="300" fill="#0d1f3c" rx="12" />
                  {/* Полигон участка */}
                  <polygon
                    points="80,60 300,50 350,150 290,240 100,230 50,140"
                    fill="#2D7DD2"
                    fillOpacity="0.1"
                    stroke="#2D7DD2"
                    strokeWidth="2"
                  />
                  {[
                    { x: 80, y: 60, n: "1" },
                    { x: 300, y: 50, n: "2" },
                    { x: 350, y: 150, n: "3" },
                    { x: 290, y: 240, n: "4" },
                    { x: 100, y: 230, n: "5" },
                    { x: 50, y: 140, n: "6" },
                  ].map((p) => (
                    <g key={p.n}>
                      <circle cx={p.x} cy={p.y} r="7" fill="#2D7DD2" />
                      <text x={p.x + 10} y={p.y - 8} fill="#7EC8F4" fontSize="12" fontFamily="monospace">{p.n}</text>
                    </g>
                  ))}
                  <text x="200" y="155" textAnchor="middle" fill="#2D7DD2" fillOpacity="0.5" fontSize="18" fontFamily="monospace" fontWeight="bold">S = 3.84 га</text>
                  <text x="200" y="180" textAnchor="middle" fill="#2D7DD2" fillOpacity="0.3" fontSize="12" fontFamily="monospace">38 400 м²</text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing — тарифы / режимы */}
        <section ref={pricingRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <Card className="pricing-card flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a3a6e] to-[#0A1628] p-6 shadow-lg md:p-8">
              <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-[20px] bg-[#0d1f3c]">
                <svg viewBox="0 0 200 200" className="h-3/4 w-3/4" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="none" stroke="#2D7DD2" strokeWidth="2.5" strokeDasharray="6,3" />
                  {[{x:100,y:20},{x:170,y:60},{x:170,y:140},{x:100,y:180},{x:30,y:140},{x:30,y:60}].map((p,i)=>(
                    <circle key={i} cx={p.x} cy={p.y} r="5" fill="#2D7DD2" />
                  ))}
                  <text x="100" y="105" textAnchor="middle" fill="#2D7DD2" fontSize="11" fontFamily="monospace">Замкнутый</text>
                  <text x="100" y="120" textAnchor="middle" fill="#2D7DD2" fontSize="11" fontFamily="monospace">ход</text>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">Замкнутый теодолитный ход</h3>
                <p className="text-sm text-white/55 md:text-base">Контроль угловой и линейной невязки</p>
              </div>
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">Бесплатно</p>
              <p className="text-xs tracking-tight text-white md:text-sm">До 20 точек хода</p>
              <Button className="h-12 w-full rounded-xl bg-[#2D7DD2] text-base font-medium text-white hover:bg-[#2D7DD2]/90 md:text-lg">
                ОТКРЫТЬ
              </Button>
            </Card>

            <Card className="pricing-card flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a3a6e] to-[#0A1628] p-6 shadow-lg md:p-8">
              <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-[20px] bg-[#0d1f3c]">
                <svg viewBox="0 0 200 200" className="h-3/4 w-3/4" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20,150 60,60 120,100 160,40 180,80" fill="none" stroke="#2D7DD2" strokeWidth="2.5" strokeDasharray="6,3" />
                  {[{x:20,y:150},{x:60,y:60},{x:120,y:100},{x:160,y:40},{x:180,y:80}].map((p,i)=>(
                    <circle key={i} cx={p.x} cy={p.y} r="5" fill="#2D7DD2" />
                  ))}
                  <text x="100" y="175" textAnchor="middle" fill="#2D7DD2" fontSize="11" fontFamily="monospace">Разомкнутый</text>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">Разомкнутый теодолитный ход</h3>
                <p className="text-sm text-white/55 md:text-base">Привязка к исходным пунктам</p>
              </div>
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">Бесплатно</p>
              <p className="text-xs tracking-tight text-white md:text-sm">До 20 точек хода</p>
              <Button className="h-12 w-full rounded-xl bg-[#2D7DD2] text-base font-medium text-white hover:bg-[#2D7DD2]/90 md:text-lg">
                ОТКРЫТЬ
              </Button>
            </Card>

            <Card className="pricing-card flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a3a6e] to-[#0A1628] p-6 shadow-lg md:p-8">
              <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-[20px] bg-[#0d1f3c]">
                <svg viewBox="0 0 200 200" className="h-3/4 w-3/4" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="100,30 150,80 130,150 70,150 50,80" fill="#2D7DD2" fillOpacity="0.12" stroke="#2D7DD2" strokeWidth="2" />
                  <text x="100" y="108" textAnchor="middle" fill="#4ade80" fontSize="22" fontFamily="monospace" fontWeight="bold">S</text>
                  <text x="100" y="128" textAnchor="middle" fill="#2D7DD2" fontSize="10" fontFamily="monospace">Гаусс</text>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">Площадь участка</h3>
                <p className="text-sm text-white/55 md:text-base">Формула Гаусса, м² и га</p>
              </div>
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">Авто</p>
              <p className="text-xs tracking-tight text-white md:text-sm">Рассчитывается вместе с ходом</p>
              <Button className="h-12 w-full rounded-xl bg-[#2D7DD2] text-base font-medium text-white hover:bg-[#2D7DD2]/90 md:text-lg">
                ОТКРЫТЬ
              </Button>
            </Card>

            <Card className="pricing-card flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a3a6e] to-[#0A1628] p-6 shadow-lg md:p-8">
              <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-[20px] bg-[#0d1f3c]">
                <svg viewBox="0 0 200 200" className="h-3/4 w-3/4" xmlns="http://www.w3.org/2000/svg">
                  {[0,1,2,3,4].map(i=>(
                    <rect key={i} x="20" y={30+i*28} width={80+i*15} height="18" rx="4" fill="#2D7DD2" fillOpacity={0.15+i*0.05} />
                  ))}
                  {[0,1,2,3,4].map(i=>(
                    <text key={i} x="28" y={44+i*28} fill="#7EC8F4" fontSize="10" fontFamily="monospace">T{i+1}  X: {(1024+i*57).toFixed(2)}</text>
                  ))}
                  <text x="100" y="178" textAnchor="middle" fill="#4ade80" fontSize="11" fontFamily="monospace">↓ Экспорт PDF</text>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">Экспорт ведомости</h3>
                <p className="text-sm text-white/55 md:text-base">Готовая таблица для отчёта</p>
              </div>
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">PDF</p>
              <p className="text-xs tracking-tight text-white md:text-sm">Формат для сдачи в архив</p>
              <Button className="h-12 w-full rounded-xl bg-[#2D7DD2] text-base font-medium text-white hover:bg-[#2D7DD2]/90 md:text-lg">
                СКАЧАТЬ ПРИМЕР
              </Button>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="cta-box flex flex-col items-center gap-6 rounded-[20px] bg-gradient-to-r from-[#1a4a8a] to-[#2D7DD2] p-6 md:flex-row md:gap-8 md:p-12 lg:p-16">
              <p className="flex-1 text-balance text-center font-semibold leading-tight tracking-tight text-white md:text-left md:text-2xl lg:text-[26px]">
                Начните расчёт теодолитного хода прямо сейчас — это бесплатно!
              </p>
              <Button className="h-12 w-full rounded-xl bg-[#0A1628] text-base text-white hover:bg-[#0A1628]/90 md:w-auto md:px-8 md:text-lg">
                Начать расчёт
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-[#1a3a6e] px-6 py-12 md:px-20 lg:px-[420px]">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6">
            <h2 className="font-serif text-2xl tracking-tight text-white md:text-3xl">
              ГЕО<span className="text-[#2D7DD2]">CALC</span>
            </h2>
            <p className="text-center text-sm leading-relaxed tracking-tight text-white/55 md:text-base">
              2026 — GeoCalc. Расчёт координат по теодолитной съёмке.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
