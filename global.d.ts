export interface Props {
    title?: string,
    theme?: string,
    brand: string,
    pages: Pages,
}

export interface Pages extends Array<Page>{}

export interface Page {
    data: Data,
    dir: string,
    title: string,
    component: any
}

export interface Data {
    title: string,
    subTitle?: string,
    text?: string,
}
