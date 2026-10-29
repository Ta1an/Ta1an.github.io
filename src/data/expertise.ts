
export type ExpertiseCapability = {
  number: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
};

export type SkillGroup = {
  number: string;
  title: string;
  description: string;
  skills: {
    name: string;
    icon: string;
  }[];
};

export const expertiseCapabilities: ExpertiseCapability[] = [
  {
    number: "01",
    icon: "tabler:layout",
    title: "Интерфейсы",
    description:
      "Создаю адаптивные и визуально продуманные интерфейсы с вниманием к типографике, композиции и удобству использования.",
    tags: ["Responsive Design", "UI", "Accessibility"],
  },
  {
    number: "02",
    icon: "tabler:code",
    title: "Frontend-разработка",
    description:
      "Разрабатываю компонентные веб-приложения с понятной архитектурой, типизацией и переиспользуемыми решениями.",
    tags: ["Vue", "Nuxt", "TypeScript"],
  },
  {
    number: "03",
    icon: "tabler:bolt",
    title: "Оптимизация",
    description:
      "Уделяю внимание скорости загрузки, корректной работе интерфейсов и технической организации проектов.",
    tags: ["Performance", "SEO", "Optimization"],
  },
  {
    number: "04",
    icon: "tabler:activity",
    title: "Интерактивность",
    description:
      "Создаю плавные анимации, переходы между страницами и микровзаимодействия, которые дополняют пользовательский опыт.",
    tags: ["Motion", "Animation", "UX"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Основные технологии, с которыми я создаю пользовательские интерфейсы.",
    skills: [
      { name: "HTML5", icon: "simple-icons:html5" },
      { name: "CSS3", icon: "simple-icons:css" },
      { name: "JavaScript", icon: "simple-icons:javascript" },
      { name: "TypeScript", icon: "simple-icons:typescript" },
      { name: "Vue.js", icon: "simple-icons:vuedotjs" },
      { name: "Nuxt", icon: "simple-icons:nuxt" },
    ],
  },
  {
    number: "02",
    title: "Styling & Motion",
    description:
      "Инструменты для создания адаптивных и интерактивных интерфейсов.",
    skills: [
      { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
      { name: "Motion", icon: "tabler:activity" },
      { name: "Lenis", icon: "tabler:caret-up-down" },
      { name: "Responsive Design", icon: "tabler:devices" },
    ],
  },
  {
    number: "03",
    title: "Tools & Workflow",
    description:
      "Инструменты разработки, управления кодом и публикации проектов.",
    skills: [
      { name: "Git", icon: "simple-icons:git" },
      { name: "GitHub", icon: "simple-icons:github" },
      { name: "Vite", icon: "simple-icons:vite" },
      { name: "VS Code", icon: "simple-icons:visualstudiocode" },
    ],
  },
];
