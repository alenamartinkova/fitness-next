export const Footer = () => {
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
                        >
                            pojď si se mnou zacvičit
                        </h1>

                        <div className={'flex flex-col'}>
                            <strong className={'uppercase italic text-lg'}>
                                respect club
                            </strong>
                            <strong className={'uppercase italic text-lg'}>
                                alžírská 1539/18
                            </strong>
                            <strong className={'uppercase italic text-lg'}>
                                ostrava-poruba, 708 00
                            </strong>
                        </div>

                        <div className={'flex flex-col'}>
                            <p>Klára Zagorová</p>
                            <a href={'callto:'}>+123 456 789</a>
                            <a href={'mailto:'}>email@seznam.cz</a>
                            <p>IČO: 123456789</p>
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