export const TimestampStyles = {
    ShortTime: "t",
    LongTime: "T",
    ShortDate: "d",
    LongDate: "D",
    ShortDateTime: "f",
    LongDateTime: "F",
    RelativeTime: "R",
}

export function toCode(content: string): string {
    return `\`${content}\``
}

export function toCodeBlock(content: string, lang?: string): string {
    return `\`\`\`${lang ?? ""}\n${content}\n\`\`\``
}

export function toBold(content: string): string {
    return `**${content}**`
}

export function toItalic(content: string): string {
    return `*${content}*`
}

export function toUnderline(content: string): string {
    return `__${content}__`
}

export function toStrikethrough(content: string): string {
    return `~~${content}~~`
}

export function buildTimestamp(date: Date, style: typeof TimestampStyles[keyof typeof TimestampStyles] = TimestampStyles.ShortDateTime): string {
    return `<t:${Math.round(date.getTime() / 1000)}:${style}>`
}
