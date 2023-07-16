import AnimatedScreen from '../AnimatedScreen/AnimatedScreen';
import Form from '../../features/Form/Form';
import Footer from '../Footer/Footer';
import React from 'react';

const BottomScreen = ({ formNameData, imgArray, width }) => {
    return (
        <>
            <section style={{ position: 'relative' }}>
                <AnimatedScreen
                    title={'&laquo;Подходящего&raquo; времени нет. Есть просто время. И&nbsp;вы&nbsp;решаете, что с&nbsp;ним делать.'}
                    imgArray={imgArray}
                    headerColor={'header-white'}
                    childClass={'form'}
                    width={width}
                >
                    <Form formNameData={formNameData} />
                </AnimatedScreen>
            </section>
            <Footer />
        </>
    );
};

export default BottomScreen;
