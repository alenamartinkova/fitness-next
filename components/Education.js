export const Education = () => {
    return (
        <div className={'block section'} id={'education-section'}>
            <div
                id={'vzdelani'}
                className={
                    'block invisible relative lg:top-[-150px] top-[-140px]'
                }
            />
            <div className={'grid md:grid-cols-2 gap-6'}>
                <div className={'flex md:order-1 order-2 justify-center'}>
                    <div
                        className={
                            'bg-education-klarka max-w-[210px] sm:max-w-none w-full h-[235px] sm:w-[250px] sm:h-[275px] md:w-[329px] md:h-[368px] bg-cover bg-center bg-no-repeat rounded-[33px]'
                        }
                    />
                    <div
                        className={
                            'bg-education-2-klarka max-w-[210px] sm:max-w-none w-full h-[235px] sm:w-[250px] sm:h-[275px] md:w-[329px] md:h-[368px] bg-cover bg-left bg-no-repeat rounded-[33px] mt-[145px] ml-[-50px]'
                        }
                    />
                </div>
                <div className={'flex flex-col gap-6 md:order-2 order-1'}>
                    <h2
                        className={
                            'font-extrabold uppercase text-pink text-3xl italic'
                        }
                    >
                        moje vzdělání
                    </h2>
                    <ul className={'list-disc ml-6'}>
                        <li>
                            <strong>Trenér ﬁtness</strong> - Yoda Institut /
                            2020
                        </li>
                        <li>
                            <strong>Sestavování Fitness tréninků</strong> -
                            Fitness Institut / 2020
                        </li>
                        <li>
                            <strong>Úvod do mobility</strong> - Fitness Institut
                            / 2020
                        </li>
                        <li>
                            <strong>Sestavování jídelníčku</strong> - Fitness
                            Institut / 2020
                        </li>
                        <li>
                            <strong>
                                Mezinárodní konference moderní výživy
                            </strong>{' '}
                            - Institut moderní výživy / 2022
                        </li>
                        <li>
                            <strong>Zdravotně - funkční trenér</strong> - Yoda
                            Institut / 2023
                        </li>
                        <li>
                            <strong>Aktivace CORE (HSSP)</strong> - Yoda
                            Institut / 2023
                        </li>
                        <li>
                            <strong>Mobilita</strong> - Fitness Institut / 2023
                        </li>
                        <li>
                            <strong>Funkční trénink</strong> - Fitness Institut
                            / 2023
                        </li>
                        <li>
                            <strong>Letecká doprava (Ing.)</strong> - VŠB-TU /
                            2023
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Education