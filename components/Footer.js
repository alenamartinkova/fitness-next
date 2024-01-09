import {createMarkup, filterArrayByKey} from "../lib/helper";

export const Footer = ({ texts }) => {
    return (
        <>
            <div
                className={
                    'block bg-pink rounded-[33px] py-8 md:px-[96px] px-6'
                }
                id={'kontakt'}
            >
                <div
                    className={
                        'flex justify-between md:flex-row flex-col items-center text-center md:text-left gap-6'
                    }
                >
                    <div className={'flex flex-col gap-6'}>
                        <h1
                            className={
                                'font-extrabold text-3xl italic uppercase'
                            }
                            dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_42'))}
                        />

                        <div className={'flex flex-col'}>
                            <strong className={'uppercase italic text-lg'} dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_43'))} />
                            <strong className={'uppercase italic text-lg'} dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_44'))} />
                            <strong className={'uppercase italic text-lg'} dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_45'))} />
                        </div>

                        <div className={'flex flex-col'}>
                            <p dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_46'))} />
                            <a href={`callto:${filterArrayByKey(texts, 'text_47')}`} dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_47'))} />
                            <a href={`mailto:${filterArrayByKey(texts, 'text_48')}`} dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_48'))} />
                            <p dangerouslySetInnerHTML={createMarkup(filterArrayByKey(texts, 'text_49'))} />
                        </div>
                    </div>

                    <div className={'flex flex-col gap-6'}>
                        <div
                            className={
                                'rounded-[144px] w-[242px] h-[243px] bg-footer-klarka bg-cover'
                            }
                        />
                        <div className={'flex gap-6 justify-center'}>
                            <a href="/public">
                                <img src={'fb.svg'} alt="facebook" />
                            </a>
                            <a href="/public">
                                <img src={'linkedin.svg'} alt="linkedin" />
                            </a>
                            <a href="/public">
                                <img src={'insta.svg'} alt="instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex justify-center mb-[60px]'}>
                <a href="#top" className={'cursor-pointer'}>
                    <img src={'logo.svg'} alt="logo" />
                </a>
            </div>
        </>
    )
}

export default Footer