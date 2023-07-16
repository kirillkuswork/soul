import { ReactNode } from 'react';

export interface IPromo {
    hide: boolean;
    path: string;
    value: string;
    id: number;
}

export interface IPromos {
    menuItems: IPromo[];
    name: string;
    __v: number;
    _id: string;
}

export interface IStripes {
    backgroundColor: string;
    children: ReactNode;
    index?: number;
    isOpen?: boolean;
}

interface IRoomStatistics {
    price: {
        min: number;
        max: number;
        minMonthFee: number;
        discount: {
            max: number;
        };
        isAdvertising: number;
        isNew: number;
    };
    area: {
        all: {
            min: string;
            max: string;
        };
    };
    count: {
        free: number;
        reserve: number;
        all: number;
    };
    has: {
        booking: number;
        noDownPayment: number;
        specialOffer: number;
        mortgageSixFive: number;
        mortgageEight: number;
        mortgageZero: number;
        waterView: number;
        mortgageSixFiftyFive: number;
        forestView: number;
        parkView: number;
        newPrice: number;
        mortgageSixOne: number;
    };
}

interface IStatistics {
    price: {
        min: number;
        max: number;
        minMonthFee: number;
        discount: {
            max: number;
        };
        isAdvertising: number;
        isNew: number;
    };
    area: {
        all: {
            min: number;
            max: number;
            sum: number;
        };
        living: {
            min: number;
            max: number;
        };
        kitchen: {
            min: number;
            max: number;
        };
    };
    floor: {
        sections: number;
        min: number;
        max: number;
        notFirst: number;
        notLast: number;
    };
    count: {
        free: number;
        reserve: number;
        all: number;
    };
    has: {
        booking: number;
        finish: number;
        whiteBox: number;
        furniture: number;
        apartment: number;
        noDownPayment: number;
        specialOffer: number;
        mortgageSixFive: number;
        mortgageEight: number;
        mortgageZero: number;
        waterView: number;
        mortgageSixFiftyFive: number;
        forestView: number;
        parkView: number;
        newPrice: number;
        mortgageSixOne: number;
        kitchenFurniture: number;
    };
}

interface IBulk extends IBulks {
    number: number;
    parking: boolean;
    roomStatistics: IRoomStatistics[];
    statistics: IStatistics;
    storehouse: any;
}

export interface IBulks {
    building_status: number;
    id: number;
    isKitchenFurniture: number;
    latitude: number;
    longitude: number;
    max_area: number;
    max_price: number;
    min_area: number;
    min_price: number;
    name: string;
    planSvg: string;
    render: any[];
    settlement_quarter: number;
    settlement_date: string;
    settlement_year: number;
    keyDate: string;
    title: string;
    type_id: number;
}

export interface ICurrenBenefit {
    id: number;
    guid: string;
    name: string;
    description: string;
    discountType: string;
    rate: number;
    isMain: boolean;
    stickerId: number;
    stickerSlug: string;
    isReplacingStandardPrice: boolean;
    type: string;
    typeUrl: any;
    mortgage: any;
    isFamily: boolean;
    paymentType: number;
    disable: boolean;
    incorrectInitialPayment: boolean;
    insufficientInitialPayment: boolean;
    incorrectLoanTerm: boolean;
    pricePercent: number;
    byRate: boolean;
    benefitPrice: number;
    priceMeter: number;
    profitability: any;
    profitabilityYear: any;
    maxPrice: any;
    discount: any;
    discountPercent: any;
    group: string;
}

interface IAttributes {
    livingKitchen: boolean;
    dressingRoom: boolean;
    vidNaReku: boolean;
    oknaNa2Storony: boolean;
    finish: boolean;
    whiteBox: boolean;
    unfinished: boolean;
    panoramicGlazing: boolean;
    cornerGlazing: boolean;
    highCeiling: boolean;
    frenchBalcony: boolean;
    masterBedroom: boolean;
    balcony: boolean;
    loggia: boolean;
    bath: boolean;
    laundry: boolean;
}

interface IBlock {
    location_id: number;
    location_parent_id: number;
    url: string;
    path: string;
    metro: string;
    id: number;
    timeOnFoot: number;
    timeOnTransport: number;
    name: string;
    longitude: number;
    latitude: number;
    isPremium: boolean;
    metroStations: any[];
}

interface IBenefit {
    id: number;
    guid: string;
    name: string;
    description: string;
    discountType: 'percent' | 'amount';
    rate: number;
    isMain: boolean;
    isReplacingStandardPrice: boolean;
    mortgage: any;
    benefitPrice: number;
}

export interface IFlat {
    address: string;
    apartmentNumber: string;
    area: number;
    areaKitchen: number;
    areaLiving: number;
    area_bti: number;
    area_project: number;
    attributes: IAttributes;
    benefit: IBenefit[];
    benefit_price: number;
    benefits: {
        mortgage: any[];
        cash: any[];
        installment?: {
            id: number;
            guid: string;
            name: string;
            group: string;
            isMain: false;
            maxPrice: number;
            mortgage: any;
            redPrice: boolean;
            description: string;
            installment: boolean;
            benefitPrice: number;
            discountType: string;
            installmentPayment: {
                percent: string;
                description: string;
            }[];
        }[];
    };
    block: IBlock;
    block_id: number;
    booking: {
        cost: number;
        status: string;
        period: number;
    };
    bookingStatus: string;
    booking_cost: number;
    bulk: IBulk;
    bulk_id: number;
    callback: boolean;
    currentPrice: number;
    ceilingHeight: number;
    compass_angle: number;
    currentBenefit: ICurrenBenefit;
    current_price: number;
    discount: number;
    electricalPower: number;
    equalizerBenefit: {
        minFirstPayment: number | null;
        maxFirstPayment: number | null;
        minPeriod: number | null;
        maxPeriod: number | null;
        maxPrice: number | null;
        minPrice: number | null;
    };
    finish: {
        isFinish: boolean;
        whiteBox: boolean;
    };
    floor: number;
    floorPlan: {
        id: number;
        sectionId: number;
        floor: number;
        png: string;
        svg?: string;
        areaSvg?: string;
        flats: {
            id: number;
            number: number;
            area: number;
            status: string;
        }[];
        updated_at: string;
    };
    furniture: boolean;
    guid: string;
    hasForestView: boolean;
    hasKlaus: boolean;
    hasMortgageEight: boolean;
    hasMortgageSixFiftyFive: boolean;
    hasMortgageSixFive: boolean;
    hasMortgageSixOne: boolean;
    hasMortgageZero: boolean;
    hasNewPrice: boolean;
    hasNoDownPayment: boolean;
    hasParkView: boolean;
    hasSpecialOffer: boolean;
    hasWaterView: boolean;
    has_advertising_price: number;
    id: number;
    isAuction: boolean;
    isMain: boolean;
    isPreSale: boolean;
    isResell: boolean;
    is_penthouse: number;
    is_settlement: number;
    is_studio: number;
    kitchenFurniture: boolean;
    layout: {
        name: string;
        id: number;
        flat_plan_png: string;
        flat_plan_svg: any;
        flat_plan_render: any;
    };
    layout_id: number;
    locationId: number;
    locationParentId: number;
    mainBenefit: {
        benefitPrice?: number;
        id: number;
        guid: string;
        name: string;
        group: string;
        description: string;
        discountType: string;
    };
    meterPrice: number;
    meter_price: number;
    mortgage: {
        id: number;
        bankLogo: string;
        minMonthFeeRatio: number;
        minMonthSum: number;
        interestRateFrom: number;
    };
    name: string;
    notFirstFloor: boolean;
    notLastFloor: boolean;
    number: string;
    number_bti: string;
    number_stage: number;
    pdf: string;
    price: number;
    real_price: number;
    redPrice: boolean;
    rentAgreementTypeLesseeId: number;
    rentPayback: number;
    rentPercentageTurnover: number;
    rentTermLeaseAgreement: number;
    rentTotal: number;
    rentTotalMeter: number;
    rentTradeNameLesseeId: number;

    roomArea: {
        r1: number;
        r2: number;
        c1: number;
        h1: number;
        s1: number;
    };
    rooms: number | string;
    rooms_fact: number;
    saleSchemeId: number;
    section: {
        floorsCount: number;
        number: number;
        quantity: number;
        id: number;
        compass: string;
        compass_plan: string;
    };
    section_id: number;
    status: string;
    type_id: number;
    windowView: any;
}

export interface IFlats {
    area: {
        min: number;
        max: number;
    };
    block: {
        location_id: number;
        location_parent_id: number;
        url: string;
        path: string;
        metro: string;
    };
    bulks: IBulks[];
    count: number;
    flats: IFlat[];
    price: {
        min: number;
        max: number;
    };
    rooms: Array<any>;
    settlement: Array<number>;
}

interface IItems {
    _id: string;
    title: string;
    mortgage_type: {
        _id: string;
        mortgage_type_name: string;
        __v: number;
    };
    mortgage_an_initial_fee: string;
    mortgage_rate: string;
    mortgage_time: string;
    mortgage_max_sum: string;
    mortgage_year_offset: string;
    mortgage_minus_one_year: boolean;
    mortgage_activation_date: string;
    mortgage_disable: boolean;
    __v: number;
}

export interface IBank {
    id: string;
    image: string;
    items: IItems[];
    title: string;
}

export interface ISortColumnsTypes {
    number: 'Номер';
    rooms: 'Cпальни';
    area: 'Площадь';
    number_stage: 'Корпус';
    floor: 'Этаж';
    advantages: 'Характеристики';
    real_price: 'Стоимость';
}

interface IGetResidential {
    url: string;
    initial: boolean | string;
    status: null | string | boolean;
    error: null | string | boolean;
}

export interface IFeature {
    name: string;
    value: boolean | string;
    active: boolean;
    disabled?: boolean;
}

export interface IFeatureFlat {
    name: string;
    value: string;
    active: boolean;
    disabled: boolean;
}

export interface IFilterRooms extends IFeatureFlat {
    array: string;
}

interface ISelectedParams {
    advantages: string[];
    redPrice: string;
    rooms: string;
    sections: string;
}

export interface ISectionsParams {
    id: string;
    visible: boolean;
}

export interface IActiveFloors {
    id: number;
    disabled: boolean;
}

export interface ICatalogState {
    urls: {
        getResidential: IGetResidential;
    };
    sections: ISectionsParams[];
    filterParameters: {
        byCheckbox: {
            redPrice: IFeature[];
            rooms: IFeatureFlat[];
            sections: IFeatureFlat[];
            advantages: IFeature[];
        };
        redFlats: boolean;
        selectedParams: ISelectedParams | any;
        advantagesSvgIcons: string[];
        slidersValues: {
            area: string[] | number[];
            price: string[] | number[];
            floor: string[] | number[];
        };
        slidersExtremeValues: {
            area: string[] | number[];
            price: string[] | number[];
            floor: string[] | number[];
        };
        inputsValues: {
            area: string[] | number[];
            price: string[] | number[];
            floor: string[] | number[];
        };
        params: string[];
        inactiveSliders: {
            area: boolean;
            price: boolean;
            floor: boolean;
        };
        initialValues: {
            area: number[],
            price: number[],
            floor: number[],
        };
        interactedParams: {
            [key: string]: {
                min: boolean
                max: boolean
            }
        }
    };
    sortColumns: ISortColumnsTypes;
    selectedCategories: string | string[] | any;
    sortParameters: {
        value: string;
        direction: string;
    };
    inTableHead: string;
    inForm: string;
    flatInfo: any;
    flats: [] | IFlat[];
    allFlats: [] | IFlat[];
    similarFlats: [] | IFlat[];
    filteredByCheckboxFlats: [] | IFlat[];
    isFiltered: boolean;
    currentFlat: IFlat | '';
    apartmentNumber: string | number;
    flatStatus: {
        free: string;
        reserve: string;
    };
    benefits: [] | string[] | IFeature[] | any;
    //Активное спец.условие
    activeBenefit: [] | IFeature[] | any;
    filtersSelect: {
        selectAmountRoom: string;
        selectFrame: string;
        selectRent: string;
        selectRoom: string;
    };

    sectionsPage: {
        activeSectionId: null | string;
        filteredBySection: IFlat[];
        studiosArray: IFlat[];
        room1Array: IFlat[];
        room2Array: IFlat[];
        room3Array: IFlat[];
        room4Array: IFlat[];
        room5Array: IFlat[];
        minPrice: {
            studiosArray: null | number;
            room1Array: null | number;
            room2Array: null | number;
            room3Array: null | number;
            room4Array: null | number;
            room5Array: null | number;
        };
    };

    floorsPage: {
        activeFloorId: null | string;
        filteredByFloor: IFlat[];
        filteredByRooms: IFlat[];
        penthouseArray: IFlat[];
        arrays: {
            studiosArray: IFlat[];
            room1Array: IFlat[];
            room2Array: IFlat[];
            room3Array: IFlat[];
            room4Array: IFlat[];
            room5Array: IFlat[];
        };
        minPrice: {
            studiosArray: null | string;
            room1Array: null | string;
            room2Array: null | string;
            room3Array: null | string;
            room4Array: null | string;
            room5Array: null | string;
        };
    };
    filterRooms: IFilterRooms[];

    floorPage: {
        filteredByFloor: IFlat[];
    };
    activeFloors: IActiveFloors[];
    activeFlat: null | string | number;
}

interface IItems {
    _id: string;
    title: string;
    mortgage_type: {
        _id: string;
        mortgage_type_name: string;
        __v: number;
    };
    mortgage_an_initial_fee: string;
    mortgage_rate: string;
    mortgage_time: string;
    mortgage_max_sum: string;
    mortgage_year_offset: string;
    mortgage_minus_one_year: boolean;
    mortgage_activation_date: string;
    mortgage_disable: boolean;
    __v: number;
}

export interface IBank {
    id: string;
    image: string;
    items: IItems[];
    title: string;
}

//TERMS PAGE
export interface ICalcData {
    _id: string;
    title: string;
    bank: {
        _id: string;
        title: string;
        __v: number;
        imgUrl: string;
        mimeType: string;
    };
    mortgage_type: {
        _id: string;
        mortgage_type_name: string;
        __v: number;
    };
    mortgage_an_initial_fee: string;
    mortgage_rate: string;
    mortgage_time: string;
    mortgage_max_sum: string;
    mortgage_year_offset: string;
    mortgage_minus_one_year: boolean;
    mortgage_activation_date: string;
    mortgage_disable: boolean;
    __v: number;
}

export interface IQA {
    _id?: string;
    name?: string;
    qa_html_quest: string;
    qa_category?: {
        _id: string;
        qa_category_name: string;
        qa_category_html_name: string;
        __v: number;
    };
    qa_html_answer: string;
    is_faq?: boolean;
    __v?: number;
}

export interface IQASection {
    qa: IQA[];
    categories: {
        category: string;
        text: string;
    }[];
    width?: number;
    isCashBack?: boolean;
}

export interface ICredit {
    title?: string;
    text?: string;
    item: string;
}

export interface ITermsPageData {
    description: ICredit[];
    nameItem: string;
    title: string;
    __v: number;
    _id: string;
}

export interface IMenuItem {
    hide: boolean;
    path: string;
    value: string;
    id: number;
}

export interface INavList {
    _id: string;
    name: string;
    __v: number;
    menuItems: IMenuItem[];
}

export interface IGallery {
    title: string;
    fileUrl: string[];
    absolutePath: string[];
    mimeType: string[];
    priority: number;
    _id: string;
    __v: number;
}

export interface IArchSlider {
    key: string[];
    absolutePath: string[];
    bucket: string[];
    descriptions: [];
    fullUrl: string;
    size: number[];
    mime: string[];
    title: string;
    slug: string;
    _id: string;
    __v: number;
}

export interface ISlider {
    key: string[];
    absolutePath: string[];
    bucket: string[];
    descriptions: [];
    fullUrl: string;
    size: number[];
    mime: string[];
    title: string;
    slug: string;
    _id: string;
    __v: number;
}
