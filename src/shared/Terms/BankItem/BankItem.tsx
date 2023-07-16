import styles from './BankItem.module.scss';
import Image from 'next/image';
import { IBank } from '../../../assets/data/interfaces';

interface IBankItem {
    bank: IBank;
    onClick: (bank) => any;
}

const BankItem = ({ bank, onClick }: IBankItem) => {
    const { title, image, items } = bank;

    if (!items.length) {
        return null;
    }

    const percent = (() => {
        return String(
            Math.min.apply(
                Math,
                items.map((o) => o.mortgage_rate.replace(',', '.')),
            ),
        ).replace('.', ',');
    })();

    return (
        <div onClick={onClick} className={styles.container}>
            <div className={styles.image}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    unoptimized
                    sizes='(max-width: 540px) 60vw, (max-width: 768px) 80vw, (min-width: 769px) 100vw'                />
            </div>
            <div className={styles.percent}>от {percent}%</div>
        </div>
    );
};

export default BankItem;
