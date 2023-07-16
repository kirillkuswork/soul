import Image from 'next/image';

export default function Picture({ imgArray, alt, addClass }) {
    return (
        <div className={addClass}>
            <picture className={'picture'}>
                <source media='(max-width: 540px)' srcSet={imgArray[0]} />
                <source media='(max-width: 1024px) and (orientation:portrait)' srcSet={imgArray[1]} />
                <source media='(min-width: 1025px) and (orientation:landscape)' srcSet={imgArray[2]} />
                <Image
                    priority
                    alt={alt}
                    src={imgArray[2]}
                    fill
                    sizes='(max-width: 540px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, (max-width: 1600px) 100vw, 400px'
                />
            </picture>
        </div>
    );
}
