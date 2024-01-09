import {createMarkup} from "../../lib/helper";

export const PricingBlock = ({
    title,
    accordion,
    text,
    price,
    bgClass = 'bg-pink',
}) => {
    return (
        <div
            className={`flex flex-col ${bgClass} rounded-[33px] justify-center items-center px-6 py-8 text-center`}
        >
            <h3 className={'italic font-bold text-2xl mb-6'} dangerouslySetInnerHTML={createMarkup(title)} />
            {accordion && <strong className={'mb-2'} dangerouslySetInnerHTML={createMarkup(accordion)} />}
            <p className={'mb-6'} dangerouslySetInnerHTML={createMarkup(text)} />
            <strong className={'text-2xl italic'} dangerouslySetInnerHTML={createMarkup(price)} />
        </div>
    )
}
