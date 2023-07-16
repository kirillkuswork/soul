import CardSlider from '../../../features/Sliders/CardSlider/CardSlider';
import { cardList, teamSectionText } from '../../../assets/data/main';
import styles from './Team.module.scss';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { handleAnchor } from '../../../entities/mainSlice';
import { Anchor } from '../../../assets/data/enums';
import LinkArrowButton from '../../../shared/LinkArrowButton/LinkArrowButton';
import ROUTES from '../../../data/routes';

const Team = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (!inView) return;

        dispatch(handleAnchor({ currentAnchor: Anchor.TEAM, value: Anchor.TEAM }));
    }, [inView, dispatch]);

    return (
        <div className={styles.container} ref={ref}>
            <div className={styles.info}>
                <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: teamSectionText[0].title }}></h2>
                <LinkArrowButton route={ROUTES.team} text={'Команда проекта'} />
            </div>
            <CardSlider text={teamSectionText[0].cardSliderText} links arr={cardList} />
        </div>
    );
};

export default Team;
