export const onSwiperInit = (prevRef, nextRef, params, navigation) => {
    if (!prevRef || !nextRef || !navigation || !params) return;
    const nav = params.navigation;

    setTimeout(() => {
        if (nav === true || nav === false) return;

        nav.prevEl = prevRef.current;
        nav.nextEl = nextRef.current;

        navigation.destroy();
        navigation.init();
        navigation.update();
    });
};

type slidesPerView = number | 'auto';

export const swiperDefaultProps = (nextRef, prevRef) => {
    return {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 900,
        slidesPerView: 'auto' as slidesPerView,
        resistance: true,
        resistanceRatio: 0,
        preventClicks: true,
        preventClicksPropagation: true,
        navigation: { nextEl: nextRef.current, prevEl: prevRef.current },
        onSwiper: (swiper) => onSwiperInit(prevRef, nextRef, swiper.params, swiper.navigation),
    };
};

export const narrowBreakpoints = {
    320: {
        spaceBetween: 10,
    },
    375: {
        spaceBetween: 10,
    },
    540: {
        spaceBetween: 10,
    },
    768: {
        spaceBetween: 12,
    },
    1200: {
        spaceBetween: 20,
    },
    1600: {
        spaceBetween: 20,
    },
};

export const wideBreakpoints = {
    340: {
        spaceBetween: 20,
    },
    375: {
        spaceBetween: 20,
    },
    540: {
        spaceBetween: 20,
    },
    768: {
        spaceBetween: 80,
    },
    1600: {
        spaceBetween: 80,
    },
};

export const widePlusScrollbar = (width) => {
    return {
        320: {
            scrollbar: {
                dragSize: (200 / 375) * width,
            },
            spaceBetween: 30,
        },
        375: {
            scrollbar: {
                dragSize: (250 / 375) * width,
            },
            spaceBetween: 30,
        },
        540: {
            scrollbar: {
                dragSize: (250 / 540) * width,
            },
            spaceBetween: 30,
        },
        768: {
            scrollbar: {
                dragSize: (300 / 768) * width,
            },
            spaceBetween: 60,
        },
        1200: {
            scrollbar: {
                dragSize: (300 / 1200) * width,
            },
            spaceBetween: 113,
        },
        1600: {
            scrollbar: {
                dragSize: (442 / 1600) * width,
            },
            spaceBetween: 113,
        },
    };
};

export const scrollbar = (width) => {
    return {
        320: {
            scrollbar: {
                dragSize: (200 / 375) * width,
            },
        },
        375: {
            scrollbar: {
                dragSize: (250 / 375) * width,
            },
        },
        540: {
            scrollbar: {
                dragSize: (250 / 540) * width,
            },
        },
        768: {
            scrollbar: {
                dragSize: (300 / 768) * width,
            },
        },
        1200: {
            scrollbar: {
                dragSize: (300 / 1200) * width,
            },
        },
        1600: {
            scrollbar: {
                dragSize: (442 / 1600) * width,
            },
        },
    };
};
