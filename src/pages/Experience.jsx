import React from "react";

const workExperience = [
  {
    year: "1998–2012",
    title: "<strong>преподаватель,</strong>",
    description: "кафедра онкологии, ММА им. И. М. Сеченова",
  },
  {
    year: "1998–2012",
    title: "<strong>преподаватель,</strong>",
    description:
      "кафедра онкологии ФДПО, Московский государственный медико-стоматологический университет",
  },
  {
    year: "1998–2012",
    title: "<strong>преподаватель,</strong>",
    description: "РОНЦ им. Н. Н. Блохина РАМН",
  },
  {
    year: "2008–2009",
    title: "<strong>старший научный сотрудник</strong>",
    description:
      "отделения опухолей головы и шеи и отделения биотерапии опухолей НИИ клинической онкологии «РОНЦ им. Н. Н. Блохина» РАМН",
  },
  {
    year: "2009",
    title: "<strong>Приглашенный профессор,</strong>",
    description: "Институт медицинских наук им. Амриты, Кочи, Индия",
  },
  {
    year: "2012",
    title: "<strong>Приглашенный профессор,</strong>",
    description:
      "Казахский национальный медицинский университет им. С. Д. Асфендиярова, Алматы, Казахстан",
  },
  {
    year: "2010–2012",
    title: "<strong>старший научный сотрудник</strong>",
    description:
      "отделения биотерапии опухолей (ныне онкодерматологии) НИИ клинической онкологии «РОНЦ им. Н. Н. Блохина» РАМН (ныне НМИЦ онкологии им. Н. Н. Блохина)",
  },
  {
    year: "2005–2012",
    title:
      "<strong> ответственный по изданию журнала, член редколлегии </strong>",
    description:
      "«Вестник Российского онкологического научного центра имени Н. Н. Блохина» Российской академии медицинских наук»",
  },
  {
    year: "2012 – настоящее время",
    title: "<strong> Основатель и директор</strong>",
    description:
      "Автономной некоммерческой организации <strong>«Научно-образовательный центр «Евразийская онкологическая программа» ЕАФО»</strong>, Москва, РФ",
  },
  {
    year: "2012 – настоящее время",
    title: "<strong>Основатель и директор</strong>",
    description:
      "Евразийской федерации онкологии <strong>(EAFO)</strong>, Шотландия, Соединенное Королевство Великобритании и Северной Ирландии",
  },
  {
    year: "2012–2018",
    title: "<strong>хирург-онколог, </strong>",
    description:
      "Дивеевская центральная районная больница им. Академика Н. Н. Блохина, село Дивеево, Нижегородская область",
  },
  {
    year: "2012–2014",
    title:
      "<strong>Старший научный сотрудник, хирург-онколог</strong>  (голова-шея, меланома) –",
    description:
      "по совместительству <b>Федеральный научно-клинический центр оториноларингологии ФМБА, Москва, РФ</b>",
  },
  {
    year: "2017–2020",
    title: "<strong>Руководитель научных проектов и хирург-онколог, </strong>",
    description:
      "Республиканский онкологический клинический диспансер, г. Чебоксары, Чувашская республика",
  },
  {
    year: "2017 – настоящее время",
    title: "<strong>Основатель и председатель Совета директоров </strong>",
    description:
      "Евразийский совет по онкологическим исследованиям <b>(ECRC)</b>, Мумбаи, Индия",
  },
  {
    year: "2015–настоящее время",
    title: "<strong>Консультант хирург-онколог, </strong>",
    description:
      "Клиника <b>«МедикаМенте», г. Королев,</b> Московская область, РФ",
  },
  {
    year: "2017 – настоящее время",
    title:
      "<strong> Консультант хирург-онколог, Многопрофильная клиника «СОЮЗ», </strong>",
    description: "Москва, РФ",
  },
  {
    year: "2019 (январь – ноябрь)",
    title:
      "<strong> Главный консультант по онкологии и пластический хирург, МЕДИНЦЕНТР</strong>",
    description:
      " Главного управления по обслуживанию дипломатического корпуса <b>Министерства иностранных дел РФ</b> (ГлавУпДК МИД РФ) ",
  },
];

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
    year: "2021 – настоящее время",
    description:
      " Со-основатель и член совета директоров, <b>Противораковый фонд «Ребенок может»,</b> Горахпур, Индия",
  },
  {
    year: "2018 – настоящее время",
    description:
      " <b>Член совета экспертов</b> Глобального фонда <b>«eCancer Global Foundation»</b>",
  },
  {
    year: "2018 – настоящее время",
    description:
      " <b>Основатель и председатель совета директоров, Евразийский совет по онкологическим исследованиям (ECRC)</b>",
  },
  {
    year: "2016 – настоящее время",
    description:
      " <b>Основатель и председатель Президиума, Евразийский противораковый фонд (EACF)</b>",
  },
  {
    year: "2015 – настоящее время",
    description: " <b>Член Российского экспертного совета SCOPUS</b>",
  },
  {
    year: "2014 – настоящее время",
    description: " <b>Член правления, Всемирное общество по меланоме</b>",
  },
  {
    year: "2012 – настоящее время",
    description:
      " <b>Член рабочей группы</b> по борьбе с табаком, <b>Общественная палата РФ</b>",
  },
  {
    year: "2012 – настоящее время",
    description:
      " <b>Член президентского совета, Глобальная ассоциация врачей индийского происхождения (GAPIO)</b>",
  },
  {
    year: "2012 – настоящее время",
    description:
      " <b>Почетный профессор,</b> Казахский национальный медицинский университет им. С. Д. Асфендиярова, Алматы, Казахстан",
  },
  {
    year: "2010 – настоящее время",
    description:
      " <b>Основатель и директор, Евразийская федерация онкологии (EAFO)</b>",
  },
  {
    year: "2009 – настоящее время",
    description:
      " <b>Основатель и генеральный секретарь, Евразийское общество специалистов по онкологии головы и шеи (EASHNO)</b>",
  },
  {
    year: "2009 – 2012",
    description:
      "<b> Сопредседатель комитета по Центральной и Восточной Европе, Глобальный экспертный совет по меланоме (GMTF RMN)</b>",
  },
  {
    year: "2009 – настоящее время",
    description:
      " <b>Основатель и член, Российский экспертный совет по онкологии головы и шеи при EASHNO</b>",
  },
  {
    year: "2009 – настоящее время",
    description:
      " <b>Почетный профессор,</b> Институт медицинских наук им. Амрита, Кочи, Индия",
  },
  {
    year: "2008 – настоящее время",
    description: " Член, Глобальный экспертный совет по меланоме (GMTF)",
  },
  {
    year: "2008 – 2010",
    description:
      "<b>Основатель и исполнительный директор,</b> Региональная общественная организация <b>«Здоровое общество»,</b> Москва, РФ",
  },
  {
    year: "2007 – 2010",
    description:
      "<b>Член экспертного совета</b> по борьбе с табаком, </b>Государственная Дума Федерального Собрания Российской Федерации</b>",
  },
  {
    year: "2007 – 2012",
    description: "Член, Российский экспертный совет по меланоме",
  },
  {
    year: "2007 – 2009",
    description:
      "<b>Координатор программ – Директор Европейской школы онкологии (Россия и СНГ)</b>",
  },

  {
    year: "2007 – 2010",
    description:
      "<b>Член экзаменационной комиссии по хирургической онкологии,</b> Экзамен Европейского совета по хирургии (EBS/UEMS)",
  },
  {
    year: "2006 – 2012",
    description:
      "<b>Член исполнительного совета</b> (Совета директоров), Европейское общество по хирургической онкологии (ESSO)",
  },
  {
    year: "2003 – 2010",
    description:
      "<b>Официальный представитель</b> Российского онкологического научного центра им. Н. Н. Блохина РАМН, Организация Европейских онкологических институтов (OECI)",
  },
  {
    year: "2003 – 2007",
    description:
      "<b>Сопредседатель,</b> Совет молодых ученых, Российский онкологический научный центр им. Н. Н. Блохина РАМН, Москва, РФ",
  },
  {
    year: "2007 – 2012",
    description:
      "<b>Председатель,</b> Совет молодых ученых, Российский онкологический научный центр им. Н. Н. Блохина РАМН, Москва, РФ",
  },
  {
    year: "2002 – 2011",
    description:
      "<b>Официальный представитель</b> Российского онкологического научного центра им. Н. Н. Блохина РАМН, Международный противораковый союз (UICC)",
  },
  {
    year: "1998 – 2007",
    description:
      "<b>Помощник директора</b> – Координатор программ Европейская школа онкологии, Московский офис",
  },
  {
    year: "1989 – 1990",
    description:
      "<b>Президент,</b> Лео клуб; Старшая школа (T. V. S. Higher Secondary School), Мадурай, Индия",
  },
];

const professionalExperience = [
  {
    year: "1993 – по настоящее время",
    description: " Организация научных и образовательных мероприятий",
  },
  {
    year: "1994 – по настоящее время",
    description: " Инициативы в области здравоохранения",
  },
  {
    year: "1995 – по настоящее время",
    description: " Исследовательские инициативы",
  },
  {
    year: "1997 – по настоящее время",
    description: " Клиническая работа",
  },
  {
    year: "1998 – по настоящее время",
    description: " Хирургический опыт",
  },
  {
    year: "1998 – по настоящее время",
    description: " Преподавание и участие в систематической подготовке кадров",
  },
];

const researchData = [
  {
    title: "Научные интересы",
    items: [
      "Опухолевые заболевания головы и шеи",
      "Рак щитовидной железы",
      "Опухолевые заболевания слюнных желез",
      "Рак молочной железы",
      "Меланома и опухоли кожи",
      "Онкопластическая хирургия",
      "Робот-ассистированная хирургия",
      "Радиационные и атомные (ядерные) медицинские технологии",
      "Биопсия сторожевого лимфатического узла",
      "Трансплантология",
    ],
  },
  {
    title: "Опыт проведения клинических исследований",
    items: [
      "Меланома",
      "Рак головы и шеи",
      "Рак молочной железы",
      "Рак легкого",
      "Рак поджелудочной железы",
      "Рак пищевода и гастроэзофагального соустья",
      "Колоректальный рак",
    ],
  },
  {
    title: "Другие исследовательские проекты",
    items: [
      "Биоповеденческие исследования среди курильщиков – онкологических пациентов и онкологов: при поддержке грантов от Национального института рака США",
      "Оценка состояния морфологических (цито- и гистологических) диагностики рака легкого в онкологических учреждениях РФ",
    ],
  },
  {
    title: "Планируемые исследовательские проекты",
    items: [
      "Международное многоцентровое исследование: Сравнительный анализ УЗИ, автоматизированного УЗИ (ABUS) и маммографии",
      "Международное многоцентровое исследование: КТ Скрининг рака легкого",
    ],
  },
];

const projects = [
  {
    title: "Недели ранней диагностики рака/заболеваний ",
    description:
      "(Индия, Абхазия, Москва, Королев (МО), Одинцово (МО), Чебоксары, Черкесск), 2013 – по настоящее время",
  },
  {
    title: "Проект «ГистоЛогика» ",
    description:
      "по улучшению качества морфологической диагностики рака легкого в РФ",
  },
  {
    title:
      "Разработка и утверждение первых в истории РФ коллегиально подготовленных клинических рекомендаций по диагностике и лечению рака: ",
    description:
      "Рак щитовидной железы (2007 г. Российский онкологический конгресс)",
  },
  {
    title:
      "Компиляция и издание Статистики онкологической заболеваемости и смертности ",
    description: "в РФ – СНГ (2005-2011)",
  },
  {
    title:
      "<a href='http://www.pathologica.ru' class='underline target='_blank'>www.pathologica.ru</a> ",
    description:
      "проект по улучшению (цито-, гистологической и молекулярно-генетической) диагностики онкологических заболеваний в РФ",
  },
  {
    title: "",
    description:
      "Инициатива по созданию Научно-практического центра диагностики и лечения опухолей кожи при Приволжском федеральном медицинском исследовательском центре (ныне Приволжский исследовательский медицинский университет) <a href='http://digital.pimunn.ru/onkodermatologia' class='underline' target='_blank'>http://digital.pimunn.ru/onkodermatologia</a>",
  },
  {
    title: "Противотабачная борьба: ",
    description:
      "Член ключевой команды противотабачных деятелей, работа которых привела к присоединению РФ к рамочной конвенция ВОЗ по борьбе с табаком (Федеральный закон №51-ФЗ от 24.04.2008 г.)",
  },
  {
    title: "Образовательные проекты: ",
    items: [
      "Базовые курсы по онкологии",
      "Базовые курсы по онкопатологии",
      "Семинары по онкологии для врачей неонкологических специальностей",
      "Семинары по противораковой борьбе для пациентов, общественных деятелей, политиков и чиновников",
      "Проект по интенсивной подготовке экспертов-онкопатологов",
      "Онкохирургические мастер-классы (Онкология головы и шеи, онкогинекология, онкоурология): Алматы, Астана (Нур-Султан), Архангельск, Будапешт, Гонконг, Гуанчжоу (Китай), Москва, Нижний Новгород, Самара, Томск, Чебоксары, Ченнай (Индия), Черкесск",
    ],
  },
];

const philanthropy = [
  "<b>Три стипендии</b> (долгосрочные и краткосрочные: максимум 3 года) в честь знаменитых Российских экспертов по онкологии головы и шеи (профессоров Вячеслава ЛЮБАЕВА, Александра ПАЧЕСА, Владимира ОЛЬШАНСКОГО) <br/> Выдается выдающимся молодым врачам на конкурсной основе для освоения дополнительной специализации с целью подготовки высококлассных специалистов по онкологии головы и шеи.",
  "<b>Стипендия</b> для подготовки в смежных неонкологических специальностях (лучевая диагностика, патология и др.)",
  "<b>Краткосрочныe стажировки</b> (клиническая медицина, лучевая и лабораторная диагностика и фундаментальные исследования) в ведущих зарубежных и российских университетах, госпиталях или лабораториях – для победителей Всероссийских и других конкурсов молодых ученых, проведенных Евразийской федерации онкологии (EAFO) и партнерскими организациями.",
];

const Experience = () => {
  return (
    <div className="px-4  pt-20 pb-10 max-w-6xl  mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 mb-10">
        <h2 className="md:w-[35%] text-[2rem] md:text-[2.5rem] font-semibold text-[rgb(15,58,97)]  leading-7">
          Опыт работы
        </h2>
        <ul className="space-y-6  md:space-y-12 md:w-[65%] list-disc  md:px-6  md:leading-8">
          {workExperience.map((job, index) => (
            <li
              key={index}
              className="text-[rgb(59,59,59)] flex justify-between"
            >
              <span className="w-[18%] md:text-lg font-questrial font-bold">
                {job.year}
              </span>{" "}
              <p className="w-[75%] md:w-[80%] leading-7">
                <span
                  className="font-questrial"
                  dangerouslySetInnerHTML={{ __html: job.title }}
                />{" "}
                <span
                  className="font-questrial"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-[0.05rem] w-[90%] mx-auto bg-[rgb(15,58,97)]/50"></div>
      <div className="flex mt-12 mb-10 flex-col md:flex-row gap-8 md:gap-0">
        <div className="md:w-[40%]">
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-[rgb(15,58,97)]  leading-13">
            {" "}
            Профессиональный опыт
          </h2>
        </div>
        <ul className="space-y-6 md:space-y-12 md:w-[60%] list-disc  md:px-6  leading-8">
          {professionalExperience.map((job, index) => (
            <li
              key={index}
              className="text-[rgb(59,59,59)] flex justify-between"
            >
              <span className="w-[18%] text-lg font-questrial font-bold">
                {job.year}
              </span>{" "}
              <p
                className="w-[67%] md:w-[75%] leading-7 font-questrial"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="h-[0.05rem] w-[90%] mx-auto bg-[rgb(15,58,97)]/50"></div>
      <div className="flex mt-12 mb-10 flex-col md:flex-row gap-8 md:gap-0">
        <div className="md:w-[42%]">
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-[rgb(15,58,97)]  leading-13">
            {" "}
            Членство в профессиональных организациях
          </h2>
        </div>
        <ul className="space-y-5 md:w-[58%] list-disc px-4 md:px-6  leading-8">
          {professionalMemberships.map((membership, index) => (
            <li key={index} className="text-[rgb(59,59,59)] ">
              <p
                className=" leading-7 font-questrial"
                dangerouslySetInnerHTML={{ __html: membership }}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="h-[0.05rem] w-[90%] mx-auto bg-[rgb(15,58,97)]/50"></div>
      <div className="flex mt-12 mb-10 flex-col md:flex-row gap-8 md:gap-0">
        <div className="md:w-[35%]">
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-[rgb(15,58,97)]  leading-13">
            {" "}
            Общественные позиции
          </h2>
        </div>
        <ul className="space-y-6 md:space-y-12  md:w-[65%] list-disc    leading-8">
          {publicPositions.map((position, index) => (
            <li
              key={index}
              className="text-[rgb(59,59,59)] flex justify-between"
            >
              <span className="w-[18%] text-lg font-questrial font-bold">
                {position.year}
              </span>{" "}
              <p
                className="w-[67%] md:w-[78%] leading-7 font-questrial"
                dangerouslySetInnerHTML={{ __html: position.description }}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="h-[0.05rem] w-[90%] mx-auto bg-[rgb(15,58,97)]/50"></div>
      <div className="flex mt-12 mb-10 flex-col md:flex-row gap-8 md:gap-0">
        <div className="md:w-[40%]">
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-[rgb(15,58,97)]  leading-13">
            {" "}
            Членство в профессиональных организациях
          </h2>
        </div>
        <div className="md:w-[60%] flex flex-col gap-8 text-[rgb(59,59,59)]">
          {researchData.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-semibold ">{section.title}</h3>
              <ul className="list-disc list-outside pl-4 md:pl-8">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[0.05rem] w-[90%] mx-auto bg-[rgb(15,58,97)]/50"></div>
      <div className="flex mt-12 mb-10 flex-col md:flex-row gap-8 md:gap-0">
        <div className="md:w-[40%]">
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-[rgb(15,58,97)]  leading-13">
            {" "}
            Успешные проекты
          </h2>
        </div>
        <ul className=" md:w-[60%]  text-[rgb(59,59,59)] leading-7.5  space-y-10">
          {projects.map((project, index) => (
            <li key={index}>
              <strong dangerouslySetInnerHTML={{ __html: project.title }} />
              {project.description && (
                <span
                  dangerouslySetInnerHTML={{
                    __html: project.description,
                  }}
                />
              )}

              {project.items && (
                <ul className="list-disc pl-8 mt-2 space-y-2 leading-7">
                  {project.items.map((item, subIndex) => (
                    <li key={subIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-[0.05rem] w-[90%] mx-auto bg-[rgb(15,58,97)]/50"></div>
      <div className="flex mt-12 mb-10 flex-col md:flex-row gap-8 md:gap-0">
        <div className="md:w-[40%]">
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-[rgb(15,58,97)]  leading-13">
            {" "}
            Успешные проекты
          </h2>
        </div>
        <div className="md:w-[60%] text-[rgb(59,59,59)]">
          <strong className="text-lg">
            Учрежденные стипендии (основатель и спонсор):
          </strong>
          <ul className="list-disc  list-outside pl-4 md:pl-8 leading-7 space-y-6">
            {philanthropy.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
          </ul>{" "}
        </div>
      </div>
    </div>
  );
};

export default Experience;
