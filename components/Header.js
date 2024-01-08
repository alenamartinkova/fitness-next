export const Header = ({ texts }) => {
    return (
        <div className={'block mt-[150px]'}>
            <div
                className={
                    'flex justify-end relative items-center md:flex-row flex-col'
                }
            >
                <div
                    className={
                        'flex flex-col gap-10 md:max-w-[600px] lg:max-w-[800px] md:absolute justify-center left-0'
                    }
                >
                    <h1
                        className={'italic font-extrabold text-5xl lg:text-7xl'}
                    >
                        Pohyb není povinnost, pohyb je radost!
                    </h1>
                    <p className={'lg:max-w-[575px] md:max-w-[400px]'}>
                        Ahoj! Jsem Klárka, osobní trenérka a milovnice pohybu.
                        Ráda Ti pomůžu po estetické stránce, ať už s redukcí
                        tuků nebo nabíráním svalové hmoty. Nicméně mnohem raději
                        Ti pomůžu k tomu, cítit se lépe ve svém těle, a to
                        hlavně po stránce zdravotní.
                    </p>
                    <strong className={'mb-4'}>RESPECT club Ostrava</strong>
                </div>
                <div
                    className={
                        'rounded-[33px] bg-grey md:max-w-[400px] lg:max-w-none'
                    }
                >
                    <img src={'header-klarka.png'} alt={'klarka'} />
                </div>
            </div>
        </div>
    )
}

export default Header