export interface iListItem {
    name: string,
    description: string,
    isFavorite: boolean,
    links: iLink[]
}
export interface iLink {
    name: string,
    href: string
}