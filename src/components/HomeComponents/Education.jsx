export default function Education() {
  const education = [
    "<b>1997: с отличием окончил лечебный факультет</b> Московского медицинского стоматологического института (ныне Московский государственный медико-стоматологический университет им. А. И. Евдокимова), Москва, РФ",
    "<b>1997–1998: ротационная интернатура (по международному образцу, без привязки к специальности)</b> в Московском медицинском стоматологическом институте (ныне Московский государственный медико-стоматологический университет им. А. И. Евдокимова), Москва, РФ",

    "<b>1998–2007:</b> ординатуры по трем специальностям <b>«онкология», «хирургия», «челюстно-лицевая хирургия»</b> в Московской медицинской академии им. И. М. Сеченова [ныне Первый Московский государственный медицинский университет им. И. М. Сеченова (Сеченовский Университет)], Москва, РФ",

    "<b>2003: НМО</b> «Современные концепции в хирургии и онкологии головы и шеи»,  <b>Мемориальный онкологический центр им. Слоуна-Кеттеринга, Нью-Йорк, США</b>",

    "<b>2007:</b> краткосрочное повышение квалификации <b> «Диагностика и лечение злокачественных опухолей головы и шеи»</b> на базе Российской медицинской академии последипломного образования, Москва, РФ",

    "<b>2010–2011:</b> интернатура по специальности <b> «оториноларингология» </b> в Российском университете дружбы народов, Москва, РФ",

    "<b>2011:</b> Европейский квалификационный экзамен по специальности <b>«хирургическая онкология»</b> – Европейский совет по хирургии (EBS), Европейский союз медицинских специализации (UEMS)",

    "<b>2013:</b> профессиональная переподготовка по специальности <b>«организация здравоохранения и общественное здоровье»</b> в Московском медицинском стоматологическом институте (ныне Московский государственный медико–стоматологический университет им. А. И. Евдокимова), Москва, РФ",

    "<b>2015:</b> профессиональная переподготовка по специальности <b>«пластическая хирургия»</b> в Московском областном научно–исследовательском клиническом институте им. М. Ф. Владимирского, Москва, РФ",

    "<b>2017:</b> переподтверждение по специальности <b>«Онкология»</b>",
    "<b>2018:</b> переподтверждение по специальности <b>«Организация здравоохранения и общественное здоровье»</b>",

    "<b>2019:</b> переподтверждение по специальности <b>«Хирургия»</b>",
    "<b>2020:</b> переподтверждение по специальности <b>«Пластическая хирургия»</b>",
  ];

  return (
    <section id="education" className="max-w-5xl mx-auto  pt-22 leading-6.5">
      <h2 className="text-4xl font-semibold text-[#420075]">Образование</h2>
      <ul className="mt-4 pl-4 md:pl-28 space-y-2 list-disc list-outside ">
        {education.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </section>
  );
}
