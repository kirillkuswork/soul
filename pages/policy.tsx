import PrivacyComp from '../src/pages/PrivacyPage/PrivacyComp';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useHeaderHook from '../src/hooks/useHeaderHook';
import ROUTES from '../src/data/routes';

const Policy = () => {
    const router = useRouter();

    useEffect(() => {
        if (router.pathname === ROUTES.privacy) {
            window?.scrollTo(0, 0);
        }
    }, [router.pathname]);

    useHeaderHook({ disappearCoefficient: 0.1 });

    return (
        <article>
            <PrivacyComp />
        </article>
    );
};

export default Policy;
