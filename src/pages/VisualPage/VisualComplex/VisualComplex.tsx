import React, { useEffect, useRef, useState } from 'react';
import SVG from 'react-inlinesvg';
import styles from './VisualComplex.module.scss';
import genPlan from '../../../../public/plans/genplan.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';
import { filterBySection } from '../../../entities/catalogSlice';
import { IFlat, ISectionsParams } from '../../../assets/data/interfaces';
import { useRouter } from 'next/router';
import VisualModal from '../VisualModal/VisualModal';
import { selectorsFiltered, selectorsFlats, selectorsSection } from '../../../entities/selectors/selectorsCatalog';
import Form from '../../../features/Form/Form';
import { disableBodyScroll, enableBodyScroll } from '../../../utils/body-scroll-lock';
import MainPageSvg from '../../../shared/svgs/MainPageSvg';

const VisualComplex = () => {
    const flats = useAppSelector(selectorsFlats);
    const arrSection = useAppSelector(selectorsSection);
    const filtered = useAppSelector(selectorsFiltered);

    const wrapper = useRef(null);
    const [isForm, setIsForm] = useState(false);
    const [formName, setFormName] = useState('');
    const [section, setSection] = useState<string>('');
    const [hint, setHint] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [position, setPosition] = useState<{ left: number; top: number }>({
        left: 0,
        top: 0,
    });

    const router = useRouter();

    const dispatch = useAppDispatch();

    const showModalWindow = (id: string, rect: DOMRect, building: boolean) => {
        if (!building) {
            dispatch(filterBySection(id));
            setPosition({
                left: rect.left + rect?.width - 20,
                top: rect.top / 2,
            });
            setSection(id);
            setHint('section');
            setShowModal(true);
        } else {
            dispatch(filterBySection(id));
            setPosition({
                left: rect.left - 20,
                top: rect.top - 55,
            });
            setHint('building');
            setShowModal(true);
        }
    };

    const hideModalWindow = () => {
        setShowModal(false);
        setSection('');
        setHint('');
    };

    const beforeSvgInjection = () => {
        if (document.getElementById(`genplan`)) {
            const genplanElements = Array.from(document.getElementById(`genplan`)?.childNodes);
            genplanElements.forEach((item: HTMLElement) => {
                if (item.id.includes('mask')) {
                    const id = item.id.replace('mask', '');
                    const rect = item.getBoundingClientRect();
                    if (flats.length !== 0) {
                        const filteredByFloor = flats.filter((item: IFlat) => item.bulk.number === +id);
                        //Не активные секции
                        if (filteredByFloor.length === 0) {
                            item.addEventListener('mouseenter', () => showModalWindow(id, rect, false));
                            item.addEventListener('mouseleave', () => hideModalWindow());
                        } else {
                            item.classList.add(styles.visualcomplex__visible);
                            item.addEventListener('mouseenter', () => showModalWindow(id, rect, false));
                            item.addEventListener('mouseleave', () => hideModalWindow());
                            item.addEventListener('click', () => {
                                router.push(`/visual/${id}`);
                            });
                        }
                    }
                }
                if (item.id.includes('building')) {
                    const id = item.id.replace('building', '');
                    const rect = item.getBoundingClientRect();
                    item.classList.add(styles.visualcomplex__building);
                    item.addEventListener('mouseenter', () => showModalWindow(id, rect, true));
                    item.addEventListener('mouseleave', () => hideModalWindow());
                    item.addEventListener('click', () => {
                        // id[2] - 1,2,3, svg зданий называются building111, building112, building113
                        setFormName(`${id[2]}MidRiseBuildingsForm`);
                        setIsForm(true);
                    });
                }
            });
        }
    };

    useEffect(() => {
        beforeSvgInjection();
        // eslint-disable-next-line
    }, [flats.length]);

    useEffect(() => {
        isForm ? disableBodyScroll() : enableBodyScroll();
    }, [isForm]);

    const handleClose = (e) => {
        e.stopPropagation();
        if (!(wrapper.current && wrapper.current.contains(e.target))) setIsForm(false);
    };

    return (
        <>
            <div className={styles.visualcomplex}>
                <div className={styles.visualcomplex__container}>
                    <SVG src={genPlan.src} className={styles.visualcomplex__genplan} onLoad={() => beforeSvgInjection()} id={'genplan'} />
                    {arrSection.map((el: ISectionsParams, i: number) => {
                        return (
                            <div
                                key={i}
                                className={
                                    showModal && +el.id === filtered[0]?.bulk.number
                                        ? `${styles.visualcomplex__numbers} ${styles.visualcomplex__showed}`
                                        : el.visible
                                        ? styles.visualcomplex__numbers
                                        : `${styles.visualcomplex__numbers} ${styles.visualcomplex__numbers__hidden}`
                                }
                            >
                                {el.id}
                                {!el.visible && section === el.id && <div className={styles.visualcomplex__soonSell}>Cкоро в продаже</div>}
                            </div>
                        );
                    })}
                </div>
            </div>
            {showModal && !!filtered.length && hint === 'section' && <VisualModal filtered={filtered} position={position} />}
            {hint === 'building' && (
                <div className={styles.visualcomplex__soonSell} style={{ left: `${position.left}px`, top: `${position.top}px` }}>
                    <p>Оставить заявку</p>

                    <MainPageSvg id={'arrow'} addClass={styles.visualcomplex__icon} />
                </div>
            )}
            {isForm && (
                <div onClick={(e) => handleClose(e)} className={styles.formwrapper}>
                    <div ref={wrapper} className={styles.formwrapper__inner}>
                        <Form formNameData={formName} setIsForm={setIsForm} modalForm={true} />
                    </div>
                </div>
            )}
        </>
    );
};

export default VisualComplex;
