interface SVGProps {
    className: string;
}

export default function ArrowDown({ className }: SVGProps) {
    return (
        <svg width="auto" height="auto" viewBox="0 0 21 20" fill="none" className={className}>
        <path d="M0.111328 1.74219H20.1113" stroke="white" stroke-width="3"/>
        <path d="M0.111328 10.0752H20.1113" stroke="white" stroke-width="3"/>
        <path d="M0.111328 18.2578H20.1113" stroke="white" stroke-width="3"/>
        </svg>
        
    );
}