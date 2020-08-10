import React from 'react';

interface Props {
    title: string,
    theme: string,
    brand: string,
    pages: Pages,
}

interface Pages extends Array<Page>{};

interface Page {
    pageData: PageData,
    directory: string,
    directoryTitle: string,

}

interface PageData {
    title: string,
    subTitle?: string,
    text?: string,
}


export type { Props, Pages, Page, PageData };