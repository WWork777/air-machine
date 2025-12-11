import Hero from "./components/mainPage/Hero/Hero";
import About from "./components/mainPage/About/About";
import Products from "./components/mainPage/Products/Products";
import Services from "./components/mainPage/Services/Services";
import Contacts from "./components/mainPage/Contacts/Contacts";
import type { Metadata } from "next";

const canonical = process.env.NEXT_PUBLIC_SITE_LINK;

export const metadata: Metadata = {
  title: "Air-Machine — Производство промышленных беспилотников и БПЛА | Россия",
  description:
    "Проектирование и серийное производство промышленных беспилотных летательных аппаратов (БПЛА). Решения для аэрофотосъемки, мониторинга, доставки и инспекций. Опытные конструкторы, собственное производство.",
  keywords: [
    "производство беспилотников",
    "промышленные БПЛА",
    "российские дроны",
    "заказ БПЛА",
    "беспилотные летательные аппараты",
    "разработка дронов",
    "аэрофотосъемка оборудование",
    "мониторинг с воздуха",
    "дроны для сельского хозяйства",
    "инспекционные БПЛА",
  ],
  openGraph: {
    title: "Air-Machine — Производство промышленных БПЛА в России",
    description:
      "Современные беспилотные решения для бизнеса и государства. Полный цикл: от проектирования до сервисного обслуживания.",
    url: `${canonical}`,
    siteName: "Air-Machine",
    images: [
      {
        url: `${canonical}/images/hero.png`, // Рекомендуется разместить качественное фото вашего дрона/производства
        width: 1200,
        height: 630,
        alt: "Air-Machine — промышленный БПЛА",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  alternates: {
    canonical: `${canonical}`,
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Products/>
      <Services/>
      <Contacts/>
    </>
  );
}
