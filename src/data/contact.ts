
export const contact = {
  whatsappNumber: "77000241856",
  telegramUrl: "https://t.me/arvenyx13",
  linkedinUrl: "https://www.linkedin.com/in/ta1an",
};

export const contactMethods = [
  {
    label: "WhatsApp",
    description: "Для обсуждения проектов и сотрудничества",
    icon: "tabler:brand-whatsapp",
    href: `https://wa.me/${contact.whatsappNumber}`,
  },
  {
    label: "Telegram",
    description: "Для быстрых вопросов и предложений",
    icon: "tabler:brand-telegram",
    href: contact.telegramUrl,
  },
  {
    label: "LinkedIn",
    description: "Профессиональные контакты и предложения",
    icon: "tabler:brand-linkedin",
    href: contact.linkedinUrl,
  },
];
