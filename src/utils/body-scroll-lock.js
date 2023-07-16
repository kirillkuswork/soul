const disableBodyScrollHeader = () => {
    setTimeout(function () {
        document.body.style.overflow = 'hidden';
        document.body.style.width = '100%';
    }, 15);
};

const enableBodyScrollHeader = () => {
    document.body.style.overflow = '';
    document.body.style.width = '';
};

const disableBodyScroll = () => {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.body.setAttribute('data-body-scroll-fix', scrollPosition);
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + scrollPosition + 'px';
    document.body.style.width = '100%';
};

const enableBodyScroll = () => {
    let scrollPosition = document.body.getAttribute('data-body-scroll-fix');
    document.body.removeAttribute('data-body-scroll-fix');
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scroll(0, scrollPosition);
};

export { disableBodyScroll, enableBodyScroll, disableBodyScrollHeader, enableBodyScrollHeader };
