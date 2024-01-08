import { SpecialBlock } from './special/SpecialBlock'

export const Special = ({ texts }) => {
    return (
        <div className={'block section'} id={'special-section'}>
            <div
                id={'sluzby'}
                className={
                    'block invisible relative lg:top-[-150px] top-[-140px]'
                }
            />
            <h2
                className={
                    'uppercase font-extrabold text-4xl text-pink italic max-w-2xl mb-4'
                }
            >
                být fit znamená více než velké svaly a estetiku těla
            </h2>
            <p className={'text-black mb-6'}>
                Specializované přístupy, které využívám:
            </p>

            <div
                className={
                    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                }
            >
                <SpecialBlock
                    svg={'hand.svg'}
                    text={
                        'Posílení hlubokého stabilizačního systému - CORE trénink'
                    }
                />
                <SpecialBlock
                    svg={'heart.svg'}
                    text={'Funkční a kompenzační trénink'}
                />
                <SpecialBlock
                    svg={'muscle.svg'}
                    text={'Trénink s vlastní a volnou vahou'}
                />

                <SpecialBlock
                    svg={'yoga.svg'}
                    text={'Trénink mobility a stability'}
                />
                <SpecialBlock
                    svg={'food.svg'}
                    text={'Vedení ke správnému stravování'}
                />
            </div>
        </div>
    )
}

export default Special