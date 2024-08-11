import { CSSProperties, useCallback } from 'react';
import Logo from '@/assets/svgs/logo.svg?react';
import ChatBubble from '@/assets/svgs/chat-bubble.svg?react';
import DotsHorizontal from '@/assets/svgs/dots-horizontal.svg?react';

export type SvgIconTypes = keyof typeof svgIconRegistry

export interface SvgIconsProps {
    icon: SvgIconTypes
    height?: number | string | "auto" | "100%"
    width?: number | string | "auto" | "100%"
    color?: string
    bgColor?: string
    style?: CSSProperties
    iconClick?: () => void
    className?: string
}

export const SvgIcons = ({ icon, width, height, color, bgColor, style, className, iconClick }: SvgIconsProps) => {
    const handleClick = useCallback(() => {
        if (iconClick) {
            iconClick()
        }
    }, [iconClick])

    return (
        <span
            className={`inline-flex items-center shrink-0 ${className}`}
            style={{
                fill: color ?? "inherit",
                color: color ?? "inherit",
                backgroundColor: bgColor ?? "inherit",
                cursor: iconClick ? "pointer" : "inherit",
                width: width ?? "1em",
                height: height ?? width,
                ...style,
            }}
            onClick={handleClick}
        >
            {svgIconRegistry[icon]}
        </span>
    )
}


export const svgIconRegistry = {
    ChatBubble: <ChatBubble />,
    DotsHorizontal: <DotsHorizontal />,
    Logo: <Logo />,
    // Add more icons here
}