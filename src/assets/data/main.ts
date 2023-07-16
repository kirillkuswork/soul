//SliderFlats
import img11 from '../images/landing/flats/slider/11.webp';
import img22 from '../images/landing/flats/slider/22.webp';
import img33 from '../images/landing/flats/slider/33.webp';
import img44 from '../images/landing/flats/slider/44.webp';
import img55 from '../images/landing/flats/slider/55.webp';

//Inner
import svg1 from '../images/landing/inner/CardList/1.svg';
import svg2 from '../images/landing/inner/CardList/2.svg';
import svg3 from '../images/landing/inner/CardList/3.svg';
import svg4 from '../images/landing/inner/CardList/4.svg';

//Team
import logo1 from '../images/landing/team/icons/1.svg';
import logo2 from '../images/landing/team/icons/2.svg';
import logo3 from '../images/landing/team/icons/3.svg';
import logo4 from '../images/landing/team/icons/4.svg';
import logo5 from '../images/landing/team/icons/5.svg';
import logo6 from '../images/landing/team/icons/6.svg';
import bg1 from '../images/landing/team/cards/1.webp';
import bg2 from '../images/landing/team/cards/2.webp';
import bg3 from '../images/landing/team/cards/3.webp';
import bg4 from '../images/landing/team/cards/4.webp';
import bg5 from '../images/landing/team/cards/5.webp';
import bg6 from '../images/landing/team/cards/6.webp';

export const sliderFlats = [
    {
        title: 'Ванные с&nbsp;окном',
        img: img11.src,
        text: 'Наблюдение за&nbsp;городом из&nbsp;теплой ванной',
        value: 'oknoVVannoj',
    },
    {
        title: 'Кухни-гостиные с&nbsp;3&nbsp;и&nbsp;4&nbsp;окнами',
        img: img22.src,
        text: 'Для встреч семьей и&nbsp;приема гостей',
        value: 'livingKitchen',
    },
    {
        title: 'Мастер-спальни с&nbsp;2&nbsp;окнами',
        img: img33.src,
        text: 'Захватывающие виды на&nbsp;ночной город',
        value: 'masterBedroom',
    },
    {
        title: 'Пентхаусы',
        img: img44.src,
        text: 'Роскошные квартиры с&nbsp;дровяными каминами',
    },
    {
        title: 'Детские комнаты',
        img: img55.src,
        text: 'Просторные помещения с&nbsp;двумя окнами',
        value: '2,3',
        id: 'rooms'
    },
];

export const sliderArtFactory = [
    {
        title: '01&nbsp;/ Рестораны',
        text: 'Устраивайте деловые встречи или дружеские праздники прямо возле дома',
    },
    {
        title: '02&nbsp;/ Уютные кафе',
        text: 'Встретьтесь утром с&nbsp;друзьями за&nbsp;чашечкой вкусного кофе',
    },
    {
        title: '03&nbsp;/ Мастерские для взрослых',
        text: 'Найдите свое новое хобби',
    },
    {
        title: '04&nbsp;/ Образовательный центр',
        text: 'Современные программы обучения и&nbsp;квалифицированные специалисты',
    },
    {
        title: '05&nbsp;/ Мастерские изофабрики',
        text: 'Увлекайте детей интересными занятиями в&nbsp;мастерских Изофабрики',
    },
];

export const blockList = [
    {
        title: 'Общественное пространство',
        img: svg1.src,
        text: 'Изофабрика&nbsp;&mdash; место для занятий творчеством и&nbsp;приятного отдыха',
    },
    {
        title: 'Детские сады',
        img: svg2.src,
        text: 'На&nbsp;территории SOUL два детских садика на&nbsp;100 и&nbsp;200 мест',
    },
    {
        title: 'Паркинг',
        img: svg3.src,
        text: 'Подземный паркинг с&nbsp;доступом на&nbsp;лифте и&nbsp;кладовыми помещениями',
    },
    {
        title: 'Супермаркет, рестораны и&nbsp;услуги сервиса',
        img: svg4.src,
        text: 'Расположены на&nbsp;первых этажах домов для удобства жителей',
    },
];

export const cardList = [
    {
        text: 'Девелопер проектов премиум- и&nbsp;бизнес-класса',
        icon: logo1.src,
        img: bg1.src,
        link: '/#team',
    },
    {
        text: 'Архитектура',
        icon: logo2.src,
        img: bg2.src,
        link: '/#team',
    },
    {
        text: 'Благоустройство',
        icon: logo3.src,
        img: bg3.src,
        link: '/#team',
    },
    // {
    //     text: 'Идеология объекта культурного наследия',
    //     icon: logo4.src,
    //     img: bg4.src,
    //     link: '/#team',
    // },
    // {
    //     text: 'Адаптация концепции объекта культурного наследия',
    //     icon: logo5.src,
    //     img: bg5.src,
    //     link: '/#team',
    // },
    {
        text: 'Дизайн лобби и&nbsp;общественных пространств',
        icon: logo6.src,
        img: bg6.src,
        link: '/#team',
    },
];

export const tooltips = [
    {
        id: 0,
        title: 'Сокол',
        svgId: 'metro',
    },
    {
        id: 1,
        title: 'Аэропорт',
        svgId: 'metro',
    },
    {
        id: 2,
        title: 'Покровское-Стрешнево',
        svgId: 'tooltip-4000',
        distance: '4000 м, 7 мин на авто',
        active: false,
    },
    {
        id: 3,
        title: 'Тимирязевский парк',
        svgId: 'tooltip-1500',
        distance: '1500 м, 25 мин пешком',
        active: false,
    },
    {
        id: 4,
        title: 'Soul',
        svgId: 'soul',
        active: false,
    },
];

export const isoArticle =
    '            <p>Легкая аркада на&nbsp;восьмигранных колоннах и&nbsp;круглые окна, расписные деревянные карнизы и&nbsp;подкрашенная умброй штукатурка делали здание Изофабрики одновременно гармоничным и&nbsp;экзотичным для окружения.</p>\n' +
    '                            <p>Почти сто лет эксплуатации изменили творение Гольца до&nbsp;неузнаваемости. Но&nbsp;SOUL возвращает Изофабрике первозданность.</p>\n' +
    '                            <p>Скоро Изофабрика предстанет перед Москвой в&nbsp;изначальном облике. А&nbsp;жители SOUL вдохнут в&nbsp;здание новую жизнь, наполненную творчеством, самопознанием и&nbsp;дружбой, детским смехом и&nbsp;звоном бокалов.</p>';

export const advantagesArticle =
    '<p>Фокусируя внимание людей на&nbsp;главном в&nbsp;их&nbsp;жизни, SOUL активно убирает из&nbsp;неё второстепенное. В&nbsp;планировках его квартир нет малофункциональных коридоров, малоиспользуемых квадратных метров и&nbsp;темных углов.</p> <p> Его квартиры предельно рациональны, но&nbsp;не&nbsp;лишены эмоциональных ценностей: не&nbsp;размениваться на&nbsp;компромиссы, наполнять красотой повседневность, жить с&nbsp;достоинством. И&nbsp;для этого SOUL использует множество инструментов.</p>';

export const aboutText = [
    {
        title: 'Дом&nbsp;&mdash; это не&nbsp;место, а&nbsp;ощущение',
        text: 'В&nbsp;SOUL живут искренними чувствами и&nbsp;яркими впечатлениями.',
    },
];

export const aboutData = [
    'Здесь взрослые вновь становятся собой, а&nbsp;дети даже не&nbsp;перестают ими быть. Здесь время с&nbsp;семьей проводят, а&nbsp;не&nbsp;изыскивают. Считают объятия важной формой диалога. Обретают новых друзей, научаясь видеть душу, а&nbsp;не&nbsp;статус.',
    'SOUL не&nbsp;загадывает на&nbsp;завтра и&nbsp;черпает вдохновение в&nbsp;каждой минуте. Ведь даже в&nbsp;сегодняшнем дне достаточно причин для счастья.',
];

export const architectureSection = [
    {
        title: 'Проектируя свою жизнь, как здание, вдохновляйтесь зданиями, в&nbsp;которых эта жизнь проходит',
        text: 'Подробнее про архитектуру',
        sliderText: '5&nbsp;преимуществ архитектуры SOUL',
    },
];

export const artFactorySectionText = [
    {
        title: '5&nbsp;причин полюбить Изофабрику',
        text: 'Арендаторы Изофабрики&nbsp;&mdash; частный детский сад, мастерские для взрослых и&nbsp;малышей, рестораны и&nbsp;кафе,&nbsp;&mdash; помогают жителям и&nbsp;гостям SOUL развиваться и&nbsp;раскрываться, получать чувственные удовольствия и&nbsp;наслаждаться жизнью.',
    },
];

export const flatsSectionText = [
    {
        title: 'Сделайте свой дом маленьким раем',
        subtitle:
            'Для этого у&nbsp;SOUL есть несколько секретных ингредиентов: разнообразные планировки от&nbsp;студий до&nbsp;больших квартир с&nbsp;тремя спальнями и&nbsp;редкие опции, например, сразу четыре окна в&nbsp;кухне-гостиной.',
        cardSliderText: '5&nbsp;нетипичных планировок квартир',
        contentTitle: 'Квартиры с&nbsp;отделкой<br />White Box Max',
        bottomContentText: [
            'Жители смогут пропустить этап черновых работ во&nbsp;время ремонта. И, тем самым, значительно приблизят свой переезд в&nbsp;новую квартиру.',
            'В&nbsp;SOUL позаботились о&nbsp;многих деталях для того, чтобы преобразования в&nbsp;вашей квартире прошли быстрее.',
        ],
    },
];

export const mapSectionText = [
    {
        title: 'Обретите свободу<br /> в&nbsp;самодостаточности',
        text: 'Бессветофорный Ленинградский проспект и&nbsp;ТТК, улицы Алабяна и&nbsp;Большая Академическая помогают жителям Аэропорта и&nbsp;Сокола погрузиться в&nbsp;насыщенную московскую жизнь. Этой умной и&nbsp;наполненной событиями реальности не&nbsp;хватало лишь SOUL&nbsp;&mdash; места, где можно жить увлекательно в&nbsp;окружении необходимого. И&nbsp;даже не&nbsp;выезжать на&nbsp;Ленинградку.'
    }
]

export const teamSectionText = [
    {
        title: 'В&nbsp;надёжных руках',
        cardSliderText: '5&nbsp;мастеров архитектуры, дизайна и&nbsp;девелопмента'
    }
]

export const topSectionTitle = 'Вы&nbsp;художник своей жизни.<br />Не&nbsp;отдавайте кисти другим'