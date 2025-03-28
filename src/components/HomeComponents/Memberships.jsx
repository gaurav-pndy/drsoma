const professionalMemberships = [
  "Американское общество онкологов головы и шеи (AHNS)",
  "Евразийское общество по онкологии головы и шеи (EASHNO)",
  "Фонд онкологии головы и шеи (FHNO)",
  "Европейское общество по хирургической онкологии (ESSO)",
  "Европейское общество по медицинской онкологии (ESMO)",
  "Европейская ассоциация исследования рака (EACR)",
  "Американская ассоциация исследования рака (AACR)",
  "Американское общество по клинической онкологии (ASCO)",

  "Московское онкологическое общество ",

  "Студенческое научное общество Московского государственного медико-стоматологического университета",
  "Всемирная ассоциация врачей индийского происхождения (GAPIO)",
  "Пироговское общество хирургов",
  "Почетный член Тайваньского общества онкогинекологов",
];

const publicPositions = [
  {
    year: "2021 –",
    description:
      "настоящее время: Со-основатель и член совета директоров, <b>Противораковый фонд «Ребенок может»,</b> Горахпур, Индия",
  },
  {
    year: "2018 –",
    description:
      "настоящее время: <b>Член совета экспертов</b> Глобального фонда <b>«eCancer Global Foundation»</b>",
  },
  {
    year: "2018 –",
    description:
      "настоящее время: <b>Основатель и председатель совета директоров, Евразийский совет по онкологическим исследованиям (ECRC)</b>",
  },
  {
    year: "2016 –",
    description:
      "настоящее время: <b>Основатель и председатель Президиума, Евразийский противораковый фонд (EACF)</b>",
  },
  {
    year: "2015 –",
    description:
      "настоящее время: <b>Член Российского экспертного совета SCOPUS</b>",
  },
  {
    year: "2014 –",
    description:
      "настоящее время: <b>Член правления, Всемирное общество по меланоме</b>",
  },
  {
    year: "2012 –",
    description:
      "настоящее время: <b>Член рабочей группы</b> по борьбе с табаком, <b>Общественная палата РФ</b>",
  },
  {
    year: "2012 –",
    description:
      "настоящее время: <b>Член президентского совета, Глобальная ассоциация врачей индийского происхождения (GAPIO)</b>",
  },
  {
    year: "2012 –",
    description:
      "настоящее время: <b>Почетный профессор,</b> Казахский национальный медицинский университет им. С. Д. Асфендиярова, Алматы, Казахстан",
  },
  {
    year: "2010 –",
    description:
      "настоящее время: <b>Основатель и директор, Евразийская федерация онкологии (EAFO)</b>",
  },
  {
    year: "2009 –",
    description:
      "настоящее время: <b>Основатель и генеральный секретарь, Евразийское общество специалистов по онкологии головы и шеи (EASHNO)</b>",
  },
  {
    year: "2009 –",
    description:
      "<b>2012: Сопредседатель комитета по Центральной и Восточной Европе, Глобальный экспертный совет по меланоме (GMTF RMN)</b>",
  },
  {
    year: "2009 –",
    description:
      "настоящее время: <b>Основатель и член, Российский экспертный совет по онкологии головы и шеи при EASHNO</b>",
  },
  {
    year: "2009 –",
    description:
      "настоящее время: <b>Почетный профессор,</b> Институт медицинских наук им. Амрита, Кочи, Индия",
  },
  {
    year: "2008 –",
    description:
      "настоящее время: Член, Глобальный экспертный совет по меланоме (GMTF)",
  },
  {
    year: "2008-2010 –",
    description:
      "<b>Основатель и исполнительный директор,</b> Региональная общественная организация <b>«Здоровое общество»,</b> Москва, РФ",
  },
  {
    year: "2007-2010 –",
    description:
      "<b>Член экспертного совета</b> по борьбе с табаком, </b>Государственная Дума Федерального Собрания Российской Федерации</b>",
  },
  {
    year: "2007-2012 –",
    description: "Член, Российский экспертный совет по меланоме",
  },
  {
    year: "2007-2009 –",
    description:
      "<b>Координатор программ – Директор Европейской школы онкологии (Россия и СНГ)</b>",
  },
  {
    year: "2007-2010 –",
    description: "",
  },
  {
    year: "2007-2010 –",
    description:
      "<b>Член экзаменационной комиссии по хирургической онкологии,</b> Экзамен Европейского совета по хирургии (EBS/UEMS)",
  },
  {
    year: "2006-2012 –",
    description:
      "<b>Член исполнительного совета</b> (Совета директоров), Европейское общество по хирургической онкологии (ESSO)",
  },
  {
    year: "2003-2010 –",
    description:
      "<b>Официальный представитель</b> Российского онкологического научного центра им. Н. Н. Блохина РАМН, Организация Европейских онкологических институтов (OECI)",
  },
  {
    year: "2003-2007 –",
    description:
      "<b>Сопредседатель,</b> Совет молодых ученых, Российский онкологический научный центр им. Н. Н. Блохина РАМН, Москва, РФ",
  },
  {
    year: "2007-2012 –",
    description:
      "<b>Председатель,</b> Совет молодых ученых, Российский онкологический научный центр им. Н. Н. Блохина РАМН, Москва, РФ",
  },
  {
    year: "2002-2011 –",
    description:
      "<b>Официальный представитель</b> Российского онкологического научного центра им. Н. Н. Блохина РАМН, Международный противораковый союз (UICC)",
  },
  {
    year: "1998-2007 –",
    description:
      "<b>Помощник директора</b> – Координатор программ Европейская школа онкологии, Московский офис",
  },
  {
    year: "1989-1990 –",
    description:
      "<b>Президент,</b> Лео клуб; Старшая школа (T. V. S. Higher Secondary School), Мадурай, Индия",
  },
];

const professionalExperience = [
  "<b>1993</b> – по настоящее время – Организация научных и образовательных мероприятий",
  "<b>1994</b> – по настоящее время – Инициативы в области здравоохранения",
  "<b>1995</b> – по настоящее время – Исследовательские инициативы",
  "<b>1997</b> – по настоящее время – Клиническая работа",
  "<b>1998</b> – по настоящее время – Хирургический опыт",
  "<b>1998</b> – по настоящее время – Преподавание и участие в систематической подготовке кадров",
];

const philanthropy = [
  "<b>Три стипендии</b> (долгосрочные и краткосрочные: максимум 3 года) в честь знаменитых Российских экспертов по онкологии головы и шеи (профессоров Вячеслава ЛЮБАЕВА, Александра ПАЧЕСА, Владимира ОЛЬШАНСКОГО) <br/> Выдается выдающимся молодым врачам на конкурсной основе для освоения дополнительной специализации с целью подготовки высококлассных специалистов по онкологии головы и шеи.",
  "<b>Стипендия</b> для подготовки в смежных неонкологических специальностях (лучевая диагностика, патология и др.)",
  "<b>Краткосрочныe стажировки</b> (клиническая медицина, лучевая и лабораторная диагностика и фундаментальные исследования) в ведущих зарубежных и российских университетах, госпиталях или лабораториях – для победителей Всероссийских и других конкурсов молодых ученых, проведенных Евразийской федерации онкологии (EAFO) и партнерскими организациями.",
];

export default function Memberships() {
  return (
    <section id="memberships" className="max-w-5xl mx-auto pt-22 space-y-6">
      {/* Memberships */}
      <div className="space-y-6">
        <h2 className="text-4xl font-semibold text-[#420075]">
          Членство в профессиональных организациях
        </h2>
        <ul className="list-disc list-outside pl-4 md:pl-28 space-y-2">
          {professionalMemberships.map((membership, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: membership }}
            ></li>
          ))}
        </ul>
      </div>

      {/* Public Positions */}
      <div className="space-y-6 pt-22">
        <h2 className="text-4xl font-semibold text-[#420075]">
          Общественные позиции
        </h2>
        <ul className="list-disc list-outside pl-4 md:pl-28 space-y-2">
          {publicPositions.map((position, index) => (
            <li key={index}>
              <b> {position.year} </b>
              <span
                dangerouslySetInnerHTML={{ __html: position.description }}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Professional Experience */}
      <div className="space-y-6 pt-22">
        <h2 className="text-4xl font-semibold text-[#420075]">
          Профессиональный опыт
        </h2>
        <ul className="list-disc list-outside pl-4 md:pl-28 space-y-2">
          {professionalExperience.map((experience, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: experience }}
            ></li>
          ))}
        </ul>
      </div>

      {/* Philanthropy */}
      <div className="space-y-6 pt-22">
        <h2 className="text-4xl font-semibold text-[#420075]">Филантропия</h2>
        <div className="pl-4 md:pl-24">
          <strong className="text-lg">
            Учрежденные стипендии (основатель и спонсор):
          </strong>
          <ul className="list-disc mt-2 list-outside md:pl-4 leading-7 space-y-2">
            {philanthropy.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
          </ul>{" "}
        </div>
      </div>
    </section>
  );
}
