interface SVGProps {
    className: string;
}

export default function BlockView({ className }: SVGProps) {
    return (
        <svg width="auto" height="auto" viewBox="0 0 20 20" fill="none" className={className}>
        <rect x="-0.000976562" width="8.57136" height="8.57136" fill="white"/>
        <rect x="11.4272" width="8.57136" height="8.57136" fill="white"/>
        <rect x="11.4272" y="11.4287" width="8.57136" height="8.57136" fill="white"/>
        <rect x="-0.000976562" y="11.4287" width="8.57136" height="8.57136" fill="white"/>
        </svg>
    );
}