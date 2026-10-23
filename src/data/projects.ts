export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  status: "Готов" | "В разработке";
  domain: string;
}

export const projects: Project[] = [
  {
    slug: "tanais",
    title: "TANAIS",
    category: "Корпоративный сайт",
    year: "2026",
    description:
      "Сайт центра психологической помощи с продуманной структурой, удобной навигацией и адаптивным интерфейсом.",
    image: "/portfolio/tanais-hero.png",
    tags: ["Корпоративный сайт", "Адаптивный дизайн", "Nuxt"],
    status: "Готов",
    domain: "tanais.kz",
  },

  {
    slug: "autorent",
    title: "AutoRent",
    category: "Веб-приложение",
    year: "2026",
    description:
      "Платформа аренды автомобилей с интерфейсом для клиентов и инструментами управления для партнёров.",
    image: "/portfolio/autorent-dashboard.png",
    tags: ["Веб-приложение", "Vue", "TypeScript"],
    status: "В разработке",
    domain: "autorent.dev",
  },
];
