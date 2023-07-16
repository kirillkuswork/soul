import React from 'react';
import InfoBlock from '../../../shared/Terms/InfoBlock/InfoBlock';
import img from '../../../assets/images/terms/full/full.webp';

const TermsFullPayment = ({cash}) => {
    const {title, item} = cash.description[0];

    return <InfoBlock title={title} item={item} img={img.src}/>;
};

export default TermsFullPayment;
