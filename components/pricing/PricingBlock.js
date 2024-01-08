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
            <h3 className={'italic font-bold text-2xl mb-6'}>{title}</h3>
            {accordion && <strong className={'mb-2'}>{accordion}</strong>}
            <p className={'mb-6'}>{text}</p>
            <strong className={'text-2xl italic'}>{price}</strong>
        </div>
    )
}
