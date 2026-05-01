import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function YerbaVerdeLandingPage() {
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
    // Animate progress bar from 0 to 100 over 3 seconds
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
        // Wait a bit before hiding preloader
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

      // Hero animation
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

      // Benefits section
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

      // About section
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

      // Desire section
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

      // Instigate section
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

      // Why section
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

      // Pricing cards
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

      // CTA section
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
        <div className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#0E0E0E]">
          <div className="flex flex-col items-center gap-8 px-6">
            {/* Logo or brand name */}
            <h1 className="font-serif text-4xl tracking-tight text-white md:text-5xl lg:text-6xl">
              YERBA
              <span className="block text-[#B59F26]">VERDE</span>
            </h1>

            {/* Progress bar container */}
            <div className="w-full max-w-md">
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#1E1E1E]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#6B5C08] to-[#B59F26] transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-4 text-center text-sm text-[#CCCCCC]">{Math.round(progress)}%</p>
            </div>
          </div>
        </div>
      )}

      <main className="w-full overflow-x-hidden bg-[#0E0E0E]">
        {/* Marquee */}
        <div ref={marqueeRef} className="w-full overflow-hidden bg-[#6B5C08] py-4">
          <div className="marquee-content flex items-center gap-4 whitespace-nowrap">
            {/* First set of items */}
            <div className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
              <span className="font-serif text-xs font-normal text-black md:text-sm">ПРОМОКОД: ПЕРВЫЙ10</span>
            </div>
            <div className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
              <span className="font-serif text-xs font-normal text-white md:text-sm">
                СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ
              </span>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
              <span className="font-serif text-xs font-normal text-black md:text-sm">ПРОМОКОД: ПЕРВЫЙ10</span>
            </div>
            <div className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
              <span className="font-serif text-xs font-normal text-white md:text-sm">
                СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ
              </span>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
              <span className="font-serif text-xs font-normal text-black md:text-sm">ПРОМОКОД: ПЕРВЫЙ10</span>
            </div>
            <div className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
              <span className="font-serif text-xs font-normal text-white md:text-sm">
                СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ
              </span>
            </div>

            {/* Duplicated set for seamless loop */}
            <div className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
              <span className="font-serif text-xs font-normal text-black md:text-sm">ПРОМОКОД: ПЕРВЫЙ10</span>
            </div>
            <div className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
              <span className="font-serif text-xs font-normal text-white md:text-sm">
                СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ
              </span>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
              <span className="font-serif text-xs font-normal text-black md:text-sm">ПРОМОКОД: ПЕРВЫЙ10</span>
            </div>
            <div className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
              <span className="font-serif text-xs font-normal text-white md:text-sm">
                СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ
              </span>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-white px-6 py-1.5 md:px-8">
              <span className="font-serif text-xs font-normal text-black md:text-sm">ПРОМОКОД: ПЕРВЫЙ10</span>
            </div>
            <div className="flex items-center justify-center rounded-xl px-4 py-1.5 md:px-6">
              <span className="font-serif text-xs font-normal text-white md:text-sm">
                СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ
              </span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section
          ref={heroRef}
          className="relative flex min-h-[600px] w-full items-center justify-center px-6 py-16 md:min-h-[800px] md:px-20 md:py-24 lg:min-h-[1030px] lg:px-80"
          style={{
            backgroundImage: `radial-gradient(74.86% 63.04% at 50% 71.13%, rgba(14, 14, 14, 0) 0%, #0E0E0E 100%), linear-gradient(190.21deg, rgba(14, 14, 14, 0) 48.79%, #0E0E0E 91.19%), url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-background-QatnDXVXAGi0F0KCe4tuAQxe2m4T4E.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex w-full max-w-7xl flex-col items-center gap-8 md:gap-12 lg:gap-14">
            <div className="hero-content flex flex-col items-center gap-5 text-center">
              <h1 className="text-balance font-serif text-3xl leading-tight tracking-tight text-white md:text-5xl lg:text-[56px]">
                Откройте настоящий вкус чая мате
              </h1>
              <p className="max-w-4xl text-pretty text-base leading-relaxed tracking-tight text-[#CCCCCC] md:text-lg">
                Уникальный опыт, который превращает каждую чашку в особенный момент.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <Button className="h-12 rounded-xl bg-white px-4 font-serif text-base text-[#0E0E0E] hover:bg-white/90 md:text-lg">
                  Купить сейчас
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-xl border-[#CCCCCC] bg-transparent font-serif text-base text-white hover:bg-white/10 md:text-lg"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="hero-image relative h-[300px] w-full max-w-2xl md:h-[400px] lg:h-[583px] lg:max-w-[884px]">
              <img
                src="/images/design-mode/hero-image.png"
                alt="Yerba Verde - премиальный чай мате"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section ref={benefitsRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 lg:flex-row lg:gap-12">
            <div className="benefits-title flex flex-col gap-6 lg:flex-1">
              <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Непревзойденный вкус и качество
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-white md:text-lg">
                Натуральный чай мате высшего качества, сбалансированный и ароматный, без добавления сахара, для
                настоящих ценителей традиционного напитка.
              </p>
            </div>
            <div className="flex flex-col gap-2 lg:flex-1">
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#6B5C08] to-[#0E0E0E] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-4xl">100% Натуральный</h3>
                <p className="text-sm leading-relaxed tracking-tight text-white md:text-base">
                  Чай мате из лучших плантаций Южной Америки, более 3000 листьев на килограмм.
                </p>
              </div>
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#6B5C08] to-[#0E0E0E] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-4xl">
                  Мягкий и насыщенный вкус
                </h3>
                <p className="text-sm leading-relaxed tracking-tight text-white md:text-base">
                  Идеальный баланс аромата и вкуса, без необходимости добавления сахара.
                </p>
              </div>
              <div className="benefit-card flex flex-col gap-2 rounded-[20px] bg-gradient-to-r from-[#6B5C08] to-[#0E0E0E] p-6 md:p-8">
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-white md:text-4xl">
                  Выращен в горах
                </h3>
                <p className="text-sm leading-relaxed tracking-tight text-white md:text-base">
                  Растет на высоте более 1200 метров в идеальных климатических условиях, что обеспечивает
                  уникальный и стойкий вкус.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section ref={aboutRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-12">
            <div className="about-image w-full lg:flex-1">
              <img
                src="/images/design-mode/about-image.png"
                alt="Карта происхождения чая мате"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
            <div className="about-content flex flex-col gap-6 lg:flex-1">
              <h2 className="font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Происхождение вкуса
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-white md:text-lg">
                В одной из самых высокогорных точек Южной Америки рождается чай мате, который выделяется
                своим несравненным качеством. На высоте более 1200 метров идеальный климат и плодородная
                почва создают условия для выращивания мате с уникальным ароматом и вкусом. Каждый лист
                тщательно собирается, гарантируя сбалансированный и стойкий вкус, который делает каждую
                чашку особенной. От горных плантаций до вашей чашки — испытайте настоящую сущность
                натурального чая мате.
              </p>
              <Button className="h-12 w-full rounded-[20px] bg-gradient-to-r from-[#6B5C08] to-[#B59F26] font-serif text-lg text-white hover:opacity-90 md:text-xl">
                Купить сейчас
              </Button>
            </div>
          </div>
        </section>

        {/* Desire */}
        <section ref={desireRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-80 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[40px] border-2 border-[#1E1E1E] bg-[#0E0E0E] px-6 py-12 md:px-12 md:py-16 lg:px-24">
              <h2 className="mb-8 text-balance text-center font-serif text-3xl leading-tight tracking-tight text-white md:mb-12 md:text-4xl lg:text-[56px]">
                Откройте для себя настоящий вкус традиции в любой момент
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                <div className="desire-image overflow-hidden rounded-2xl rounded-b-none">
                  <img
                    src="/images/design-mode/desire-image-01.png"
                    alt="Yerba Verde - упаковка"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="desire-image overflow-hidden rounded-2xl rounded-b-none">
                  <img
                    src="/images/design-mode/desire-image-02.png"
                    alt="Yerba Verde - упаковка"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="desire-image overflow-hidden rounded-2xl">
                  <img
                    src="/images/design-mode/desire-image-03.png"
                    alt="Yerba Verde - упаковка"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instigate */}
        <section ref={instigateRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:gap-12">
            <div className="instigate-content flex flex-col gap-6 text-center">
              <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-[56px]">
                Чего вы ждете?
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-[#CCCCCC] md:text-lg">
                Жизнь состоит из моментов, и хороший мате превращает простое в особенное. Не соглашайтесь на
                меньшее — выбирайте настоящую эссенцию вкуса и наслаждайтесь каждым глотком.
              </p>
            </div>
            <div
              className="instigate-image relative flex min-h-[400px] w-full items-end justify-center rounded-[40px] p-6 md:min-h-[600px] md:p-10 lg:min-h-[850px]"
              style={{
                backgroundImage:
                  "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/box-image-f1qFMJiDw7Rhdpat9cdzPtUdrGnBUq.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Button className="h-16 w-full max-w-md rounded-[20px] bg-gradient-to-r from-[#6B5C08] to-[#B59F26] font-serif text-xl text-white hover:opacity-90 md:h-24 md:text-3xl lg:text-[32px]">
                Купить сейчас
              </Button>
            </div>
          </div>
        </section>

        {/* Why */}
        <section ref={whyRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:gap-12">
            <div className="why-content flex flex-col gap-6 text-center">
              <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight text-white md:text-4xl lg:text-[56px]">
                Почему выбирают Yerba Verde?
              </h2>
              <p className="text-pretty text-base leading-relaxed tracking-tight text-[#CCCCCC] md:text-lg">
                Жизнь состоит из моментов, и хороший мате превращает простое в особенное. Не соглашайтесь на
                меньшее — выбирайте настоящую эссенцию вкуса и наслаждайтесь каждым глотком.
              </p>
            </div>
            <div className="why-image w-full">
              <img
                src="/images/design-mode/why-image.png"
                alt="Почему выбирают Yerba Verde"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section ref={pricingRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {/* Card 1 */}
            <Card className="pricing-card flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#333333] to-[#0E0E0E] p-6 shadow-lg md:p-8">
              <div className="aspect-square w-full overflow-hidden rounded-[20px] bg-[#6B5C08]">
                <img
                  src="/images/design-mode/image-card-01.png"
                  alt="Чай мате Yerba Verde - 1 кг"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                  Чай мате Yerba Verde
                </h3>
                <p className="text-sm text-white/55 md:text-base">1 кг</p>
              </div>
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">2 500 р.</p>
              <p className="text-xs tracking-tight text-white md:text-sm">Рассрочка до 3 месяцев</p>
              <Button className="h-12 w-full rounded-xl bg-[#B59F26] text-base font-medium text-white hover:bg-[#B59F26]/90 md:text-lg">
                КУПИТЬ
              </Button>
            </Card>

            {/* Card 2 */}
            <Card className="pricing-card flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#333333] to-[#0E0E0E] p-6 shadow-lg md:p-8">
              <div className="aspect-square w-full overflow-hidden rounded-[20px] bg-[#6B5C08]">
                <img
                  src="/images/design-mode/image-card-02.png"
                  alt="Набор для мате Yerba Verde"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                  Набор для мате Yerba Verde
                </h3>
                <p className="text-sm text-white/55 md:text-base">Мате + Калабас + Бомбилья</p>
              </div>
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">7 500 р.</p>
              <p className="text-xs tracking-tight text-white md:text-sm">Рассрочка до 4 месяцев</p>
              <Button className="h-12 w-full rounded-xl bg-[#B59F26] text-base font-medium text-white hover:bg-[#B59F26]/90 md:text-lg">
                КУПИТЬ
              </Button>
            </Card>

            {/* Card 3 */}
            <Card className="pricing-card flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#333333] to-[#0E0E0E] p-6 shadow-lg md:p-8">
              <div className="aspect-square w-full overflow-hidden rounded-[20px] bg-[#6B5C08]">
                <img
                  src="/images/design-mode/image-card-03.png"
                  alt="Набор 3 упаковки чая мате Yerba Verde"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                  Набор 3 упаковки Yerba Verde
                </h3>
                <p className="text-sm text-white/55 md:text-base">3 кг</p>
              </div>
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">6 900 р.</p>
              <p className="text-xs tracking-tight text-white md:text-sm">Рассрочка до 3 месяцев</p>
              <Button className="h-12 w-full rounded-xl bg-[#B59F26] text-base font-medium text-white hover:bg-[#B59F26]/90 md:text-lg">
                КУПИТЬ
              </Button>
            </Card>

            {/* Card 4 */}
            <Card className="pricing-card flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#333333] to-[#0E0E0E] p-6 shadow-lg md:p-8">
              <div className="aspect-square w-full overflow-hidden rounded-[20px] bg-[#6B5C08]">
                <img
                  src="/images/design-mode/image-card-04.png"
                  alt="Набор 10 упаковок чая мате Yerba Verde"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                  Набор 10 упаковок Yerba Verde
                </h3>
                <p className="text-sm text-white/55 md:text-base">10 кг</p>
              </div>
              <p className="text-4xl font-bold tracking-tight text-white md:text-5xl">19 900 р.</p>
              <p className="text-xs tracking-tight text-white md:text-sm">Рассрочка до 4 месяцев</p>
              <Button className="h-12 w-full rounded-xl bg-[#B59F26] text-base font-medium text-white hover:bg-[#B59F26]/90 md:text-lg">
                КУПИТЬ
              </Button>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section ref={ctaRef} className="w-full px-6 py-16 md:px-20 md:py-24 lg:px-[420px] lg:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="cta-box flex flex-col items-center gap-6 rounded-[20px] bg-gradient-to-r from-[#6B5C08] to-[#B59F26] p-6 md:flex-row md:gap-8 md:p-12 lg:p-16">
              <p className="flex-1 text-balance text-center font-semibold leading-tight tracking-tight text-white md:text-left md:text-2xl lg:text-[26px]">
                Свяжитесь с нами прямо сейчас и узнайте больше о Yerba Verde!
              </p>
              <Button className="h-12 w-full rounded-xl bg-[#0E0E0E] text-base text-white hover:bg-[#0E0E0E]/90 md:w-auto md:px-8 md:text-lg">
                Связаться с нами
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-[#333333] px-6 py-12 md:px-20 lg:px-[420px]">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6">
            <h2 className="font-serif text-2xl tracking-tight text-white md:text-3xl">
              YERBA <span className="text-[#B59F26]">VERDE</span>
            </h2>
            <p className="text-center text-sm leading-relaxed tracking-tight text-white/55 md:text-base">
              2025 - Yerba Verde. Все права защищены.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
