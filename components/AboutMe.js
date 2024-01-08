export const AboutMe = ({ texts }) => {
    return (
        <div className={'block section'} id={'about-me-section'}>
            <div
                id={'o_me'}
                className={
                    'block invisible relative lg:top-[-150px] top-[-140px]'
                }
            />
            <div className={'grid md:grid-cols-2 gap-6'}>
                <div className={'flex flex-col gap-4'}>
                    <h2
                        className={
                            'font-extrabold uppercase text-pink text-3xl italic'
                        }
                    >
                        pár slov o mě
                    </h2>
                    <strong>
                        Motivace k tomu vypadat dobře je dle mého názoru
                        pomíjivá, ale mít své tělo jako užitečný nástroj, který
                        poslouží tobě samému nebo tvým blízkým, je k
                        nezaplacení!
                    </strong>
                    <p>
                        Ahoj! Jsem Klárka, vášnivý blázen do letadel, výborného
                        jídla, ale především osobní trenérka a milovnice pohybu.
                        Ráda Ti pomůžu po estetické stránce, ať už s redukcí
                        tuků nebo nabíráním svalové hmoty. Nicméně mnohem raději
                        Ti pomůžu k tomu, cítit se lépe ve svém těle, a to
                        hlavně po stránce zdravotní.
                    </p>
                    <p>
                        Motivace k tomu vypadat dobře je dle mého názoru
                        pomíjivá, ale mít své tělo jako užitečný nástroj, který
                        poslouží tobě samému nebo tvým blízkým, je k
                        nezaplacení! Proto se zaměřuji především na funkční
                        trénink, který zahrnuje prvky mobility, stability,
                        koordinace, tréninku HSSP, funkční síly a rozvoje
                        kondice.
                    </p>
                    <p>
                        Konec konců, když své tělo naučíš správnému a
                        bezbolestnému pohybu, je to výhra, a to pro každodenní
                        život! Tak pojďme spolu posílit svaly způsobem, jakým
                        jsou zatěžovány v běžném životě!
                    </p>
                </div>

                <div
                    className={
                        'rounded-[33px] sm:h-[659px] h-[420px] bg-about-me-klarka bg-cover bg-center bg-no-repeat'
                    }
                ></div>
            </div>
        </div>
    )
}

export default AboutMe