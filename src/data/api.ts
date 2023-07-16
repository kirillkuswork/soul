const isDev = process.env.NODE_ENV === 'development';

const dbHost = isDev ? process.env.DEV_DB_HOST : process.env.PROD_DB_HOST;
console.log(`Using ${dbHost} as DB host for ${isDev ? 'development' : 'production'} environment`);

const api = {
    urlMain: dbHost,
    urlFlats: 'https://manager.forma.ru/api/v2/flat/?blockId=1246',

    urlNavList: '/api/menu/purchase',
    urlTradeIn: '/api/special_program/trade-in',
    urlQa: '/api/qa',
    urlSpecialMortgages: '/api/special_program/mortgage',
    urlMortgages: '/api/special_program/mortgage-standard',
    urlCalcData: '/api/mortgages',
    urlInstallments: '/api/special_program/installment',
    urlSpecialInstallments: '/api/special_program/installment-main',
    urlCash: '/api/special_program/cash',

    // Страница "Документы"
    urlDocuments: '/api/documents',

    // Страница "Галерея"
    urlGallery: '/api/gallery',
    urlArchSlider: '/api/slider/architecture',
    urlSecondArchSlider: '/api/slider/architecture2',

    // Страница "Новости"
    urlNews: '/api/news',

    // Страница "Ход строительства"
    urlProgress: '/api/progress',

    // Промо материалы для главной для мобильников
    urlPromo: '/api/menu/promo',

    urlMenuHeader: '/api/menu/header',
    urlMenuBurgerTopLeft: '/api/menu/burger-top-left',
    urlMenuBurgerTopRight: '/api/menu/burger-top-right',
    urlMenuBurgerBottomLeft: '/api/menu/burger-bottom-left',
    urlMenuBurgerBottomRight: '/api/menu/burger-bottom-right',
    urlMenuFooterLeft: '/api/menu/footer-left',
    urlMenuFooterRight: '/api/menu/footer-right',

    urlIsoFactoryFirstSlider: '/api/slider/isofactory1',
    urlIsoFactorySecondSlider: '/api/slider/isofactory2',
    urlIsoFactoryLastSlider: '/api/slider/isofactory3',
    urlAdvantagesSlider: '/api/slider/advantages',
    urlFirstLandscapingSlider: '/api/slider/landscaping1',
    urlLastLandscapingSlider: '/api/slider/landscaping2',
    urlLocationSlider: '/api/slider/location',
    urlInfrastructureFirstSlider: '/api/slider/infrastructure1',
    urlInfrastructureSecondSlider: '/api/slider/infrastructure2',
    urlHistoryFirstSlider: '/api/slider/history1',
    urlHistorySecondSlider: '/api/slider/history2',
    urlMainSlider: '/api/slider/mainpage',
    urlContactsSlider: '/api/slider/contacts',
};

export default api;
