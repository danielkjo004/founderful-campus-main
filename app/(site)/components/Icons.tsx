interface Props {
    color: string;
    className?: string;
}

export function ArrowRight({ color, className }: Props) {
    return (
        <svg width="27" height="24" viewBox="0 0 27 24" fill="none" className={`arrow-right ${className}`}>
            <path d="M14.8093 23.2203L12.9118 21.3336L20.9558 13.3767H-1.90735e-06V10.5467H20.9146L12.8705 2.63082L14.7681 0.703125L26.1123 11.9822L14.8093 23.2203Z" fill={color} />
        </svg>
    );
}

export function ArrowLeft({ color, className }: Props) {
    return (
        <svg width="27" height="24" viewBox="0 0 33 29" fill="none" className={`arrow-left ${className}`}>
            < path d="M14.1411 0.646329L16.4528 2.9448L6.65302 12.6384L32.1828 12.6384L32.1828 16.0861L6.70327 16.0861L16.5031 25.7297L14.1913 28.0781L0.371095 14.3372L14.1411 0.646329Z" fill={color} />
        </svg >

    );
}