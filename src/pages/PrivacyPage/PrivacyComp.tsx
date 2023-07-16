import style from './Privacy.module.scss';
import { policyData, policyList } from '../../assets/data/policy';

const PrivacyComp = () => {
    return (
        <>
            <div className={style.privacyContainerHeader}></div>
            <div className={style.privacyContainer}>
                <h1
                    style={{
                        visibility: 'hidden',
                        height: '0px',
                        margin: '0px',
                        padding: '0px',
                    }}
                    dangerouslySetInnerHTML={{ __html: policyData[0].title }}
                ></h1>
                <div className={style.privacyTitle}>
                    <p dangerouslySetInnerHTML={{ __html: policyData[0].subtitle }}></p>
                </div>
                <div className={style.privacySubBlock}>
                    <div className={style.privacySubText} dangerouslySetInnerHTML={{ __html: policyData[0].text }}></div>
                </div>
                <div className={style.privacyTextContainer}>
                    {policyList.map((item, index) => (
                        <div key={index}>
                            <div className={style.privacyTextContainerItem}>
                                <h2 className={style.privacyTextTitle} dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                                <div className={style.privacyTextContent} dangerouslySetInnerHTML={{ __html: item.text }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PrivacyComp;
