import { ReactNode, useRef, useEffect } from "react";

interface Props {
    children: ReactNode;
    color: string;
    className?: string;
}

export function TalkBalloon({ children, color, className }: Props) {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        // Function to dynamically adjust the SVG size based on text content
        const adjustSvgSize = () => {
            if (svgRef.current) {
                const textElement = svgRef.current.querySelector('text');
                if (textElement) {
                    const bbox = textElement.getBBox();
                    const newWidth = bbox.width + 20; // Add some padding
                    const newHeight = bbox.height + 20; // Add some padding
                    svgRef.current.setAttribute('width', `${newWidth}px`);
                    svgRef.current.setAttribute('height', `${newHeight}px`);
                }
            }
        };

        // Call the adjustSvgSize function when the component mounts
        adjustSvgSize();
    }, [children]);

    return (
        <div style={{ position: "relative", width: "100%", height: "auto" }} className={className}>
            <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1013 812"
                fill={color}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <path
                    d="M5.99963 -2.00195C3.21963 -2.00195 0.969631 0.258047 0.979631 3.03805C0.979631 3.03805 -2.83037 199.588 4.56963 395.658C12.0596 594.258 5.93963 734.918 5.93963 734.918C5.94963 737.998 8.45963 740.498 11.5496 740.498C25.3596 740.498 32.4396 738.738 56.0896 738.838C90.4196 738.978 116.27 740.498 116.27 740.498C119.44 740.498 122.04 743.028 122.12 746.198C122.12 746.198 122.6 753.598 122.31 771.358C121.96 793.058 123.86 807.058 123.86 807.058C123.97 811.288 127.53 812.798 130.29 809.598C130.29 809.598 147.12 789.528 160.45 774.078C172.86 759.708 183.5 748.328 183.5 748.328C188.85 742.738 193.79 740.478 202.07 740.478C248.19 740.478 423.98 732.918 601.47 737.478C778.96 742.038 958.32 739.278 1005.44 739.448C1009.59 739.458 1012.95 736.108 1012.95 731.958V-2.00195H5.99963Z"
                />
                <text x="10" y="20" fill="#000">
                    {children}
                </text>
            </svg>
        </div>
    );
}
