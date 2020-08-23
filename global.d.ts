export interface AppProps {
    title: string,
    theme: string,
    brand: string,
    pages: Pages,
}

interface FooterProps {
    brand: string;
}

export interface Pages extends Array<Page>{}

export interface Page {
    pageData: PageData,
    directory: string,
    directoryTitle: string,
    pageComponent: any
}

export interface PageData {
    title: string,
    subTitle?: string,
    text?: string,
}