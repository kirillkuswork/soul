const ROUTES = {
    root: '/',
    privacy: '/policy',
    gallery: '/gallery',
    location: '/location',
    visual: '/visual',
    favorites: {
        root: '/favorites',
    },
    flats: {
        list: '/list',
        apartment: '/list/:apartmentNumber',
    },
    contacts: '/contacts',
    team: '/team',
    documents: '/documents',
    architecture: '/architecture',
    isofactory: '/isofactory',
    whitebox: '/white-box',
    purchaseTerms: {
        root: '/purchase-terms/',
        plainRoot: '/purchase-terms',
        fullPayment: 'full',
        tradeIn: 'trade-in',
        installmentPlan: 'installment',
        mortgage: 'mortgage',
        cashBack: 'cashback',
        onlinePurchase: 'online',
    },
    news: {
        root: '/news/',
        slug: '/news/:slug',
    },
    progress: {
        root: '/progress/',
    },
    promo: {
        root: '/promo',
        slug: '/promo/:slug',
    },
    menuList: [
        {
            name: 'Документы',
            route: '/documents',
        },
        {
            name: 'Динамика строительства',
            route: '/progress',
        },
        {
            name: 'Контакты',
            route: '/contacts',
        },
        {
            name: 'Команда проекта',
            route: '/team',
        },
        {
            name: 'Новости',
            route: '/news',
        },
        {
            name: 'Акции',
            route: '/promo',
        },
        {
            name: 'Условия покупки',
            route: '/purchase-Terms/mortgage',
        },
    ],
};

export default ROUTES;
