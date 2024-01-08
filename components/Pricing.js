import { PricingBlock } from './pricing/PricingBlock'

export const Pricing = ({ texts }) => {
    return (
        <div className={'block section'} id={'pricing-section'}>
            <div
                id={'cenik'}
                className={
                    'block invisible relative lg:top-[-150px] top-[-140px]'
                }
            />
            <h2
                className={
                    'font-extrabold uppercase text-pink text-3xl italic mb-6'
                }
            >
                ceník a služby
            </h2>
            <p className={'text-center mb-4'}>
                Individuální trénink nebo konzultace na konkrétní téma s
                využitím fyzio přístupů - 999 Kč
            </p>
            <div className={'grid md:grid-cols-2 gap-6 mb-6'}>
                <PricingBlock
                    text={
                        'Úvodní svalový rozbor, sestavení a průběžné přizpůsobování tréninků (plánu), individuální trénink s využitím fyzio přístupů'
                    }
                    title={'Dlouhodobé vedení'}
                    price={'999 Kč'}
                    accordion={'Minimálně 5 lekcí za měsíc'}
                />
                <PricingBlock
                    text={
                        'Úvodní svalový rozbor, sestavení a průběžné přizpůsobování tréninků (plánu), individuální trénink s využitím fyzio přístupů'
                    }
                    title={'Dlouhodobé vedení'}
                    price={'999 Kč'}
                    accordion={'Minimálně 10 lekcí za měsíc'}
                />
            </div>
            <p className={'mb-4'}>Ostatní služby:</p>
            <div className={'grid md:grid-cols-2 gap-6'}>
                <PricingBlock
                    text={
                        'Individuální trénink nebo konzultace na konkrétní téma s využitím fyzio přístupů.'
                    }
                    title={'Jednorázový trénink s konzultací'}
                    price={'999 Kč'}
                    accordion={'(30-60 minut)'}
                    bgClass={'bg-grey'}
                />
                <PricingBlock
                    text={'Mobilitu, strečink, kompenzační cvičení'}
                    title={'Rehabilitační cvičení'}
                    price={'999 Kč'}
                    accordion={'(40-60 minut)'}
                    bgClass={'bg-grey'}
                />
                <PricingBlock
                    text={
                        'Úvodní svalový rozbor, sestavení a průběžné přizpůsobování tréninků (plánu), individuální trénink s využitím fyzio přístupů'
                    }
                    title={'Sestavení jídelního plánu na míru'}
                    price={'999 Kč'}
                    bgClass={'bg-grey'}
                />
            </div>
        </div>
    )
}

export default Pricing
