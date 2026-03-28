import type { Metadata } from "next";
import Hero from "@/app/components/ursaPage/Hero/Hero";
import Characteristics from "@/app/components/ursaPage/Characteristics/Characteristics";
import Contacts from "@/app/components/mainPage/Contacts/Contacts";
import VideoShowcase from "@/app/components/ursaPage/VIdeo/Video";

const canonical = process.env.NEXT_PUBLIC_SITE_LINK;

export const metadata: Metadata = {
  title: "АМ-1 «Урса» — Многоцелевой БПЛА самолетного типа | Air-Machine",
  description:
    "Промышленный беспилотник АМ-1 «Урса»: дальность до 100 км, время полета 120 мин, нагрузка до 5 кг. Ударопрочные полимеры, работа при -40°C и быстрый ремонт в полевых условиях. Серийное производство в РФ.",
  keywords: [
    "АМ-1 Урса",
    "БПЛА самолетного типа",
    "многоцелевой беспилотник",
    "дальнолет БПЛА",
    "производство дронов РФ",
    "беспилотник для мониторинга",
    "промышленный дрон 100 км",
    "БПЛА из низкотемпературных полимеров",
    "купить БПЛА оптом",
    "Air-Machine Урса"
  ],
  openGraph: {
    title: "БПЛА АМ-1 «Урса» — надежное решение для полевых условий",
    description:
      "Грузоподъемность до 5 кг, запуск с руки и высокая живучесть. Производим до 5000 единиц в месяц. Адаптация частот под ТЗ заказчика.",
    url: `${canonical}/products/ursa-am1`,
    siteName: "Air-Machine",
    images: [
      {
        url: `${canonical}/images/ursa-am1-preview.png`,
        width: 1200,
        height: 630,
        alt: "Многоцелевой БПЛА АМ-1 Урса",
      },
    ],
    locale: "ru_RU",
    type: "article",
  },
  alternates: {
    canonical: `${canonical}/images/hero.png`,
  },
};


export default function Ursa() {
    return(
        <section>
            <Hero/>
            <Characteristics/>
            <VideoShowcase/>
            <Contacts/>
            

        </section>
    );
}