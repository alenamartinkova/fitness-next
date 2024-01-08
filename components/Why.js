export const Why = ({ texts }) => {
    return (
        <div className={'block'}>
            <h3
                className={
                    'text-pink uppercase text-2xl font-extrabold italic mb-6'
                }
            >
                proč funkční trénink?
            </h3>
            <div className={'grid md:grid-cols-2 gap-6'}>
                <div className={'flex flex-col gap-4'}>
                    <p>
                        Co se ti vybaví, když se řekne
                        <strong>“funkční trénink”</strong>? Já ti ráda trošku
                        napovím. Slovo “funkce” totiž nabývá mnoho významů. Když
                        zkombinujeme funkci kondiční, která je v zájmu většiny
                        cvičenců, s funkcí stabilizační, posturální, estetickou
                        a koordinační, tak suma sumárum dojdeme k
                        <strong>funkčnímu tréninku</strong>. Ten propojuje
                        všechny výše zmíněné funkce v jeden celek a vede tak k
                        <strong>trvale udržitelnému zdraví</strong>.
                    </p>
                    <p>
                        Ačkoliv se funkční trénink jeví jako hit moderní doby,
                        ani zdaleka tomu tak není. Svou podstatou existuje už
                        stovky let. Cílem tohoto tréninku je vykonávat nejen
                        sportovní, ale také denní úkony správně a především
                        ekonomičtěji. Efektivního cvičení tím pádem docílíme
                        jednoduše tak, že přirozeným způsobem zapojíme co
                        nejvíce svalových skupin tak, aby maximálně odpovídaly
                        potřebám daného jedince. Pro každého tak bude funkční
                        trénink odlišný. Sekretářka, dělník a vrcholový
                        sportovec budou mít zcela jistě na své tělo naprosto
                        odlišné nároky.
                    </p>
                </div>

                <div className={'flex flex-col gap-4'}>
                    <p>
                        Proč jít cestou <strong>funkčního pohybu</strong>?
                    </p>
                    <ul className={'list-disc ml-6'}>
                        <li>
                            vhodný pro všechny věkové kategorie i tělesné
                            kondice
                        </li>
                        <li>přirozený pohyb s vlastní nebo volnou vahou</li>
                        <li>
                            správné dýchání a držení těla (posturální funkce)
                        </li>
                        <li>zlepšení posturálního svalstva (HSSP)</li>
                        <li>rozvoj pevnosti, síly a pružnosti</li>
                        <li>
                            zapojení více svalových skupin najednou (komplexnost
                            - ne izolace)
                        </li>
                        <li>
                            zlepšení kardiovaskulární kondice - spalování
                            kalorií → hubnutí
                        </li>
                        <li>
                            vyrovnání svalových dysbalancí (pourázové
                            rehabilitace)
                        </li>
                        <li>
                            propojení nervového a svalového systémů (mind and
                            muscle connection)
                        </li>
                        <li>zpevnění a stabilizace kloubů</li>
                    </ul>
                    <p>
                        Závěrem by bylo vhodné zmínit, že náš mozek, který
                        zodpovídá za svalovou činnost, nevnímá pohyb pouze jako
                        individuální činnost konkrétního svalu nebo svalové
                        skupiny, ale vnímá jej jako komplex aktivit, včetně výše
                        zmíněného důležitého dýchání.
                        <strong>SVALOVÝ ŘETĚZEC</strong>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Why