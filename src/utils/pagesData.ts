import { Page } from '../../global';

export const pagesData: Array<Page> = [
    {
        pageData: {
            title: "Developer with no focus",
            subTitle: "Projects that grow creativity",
            text: "Check out my projects below.",
        },
        directory: '/',
        directoryTitle: 'Home',
    },
    {
        pageData: {
            title: "About me",
        },
        directoryTitle: 'About',
        directory: '/about',
    },
    {
        pageData: {
            title: "Let's Chat",
        },
        directoryTitle: 'Contact Me',
        directory: '/contact',
    },
    {
        pageData: {
            title: "My various projects",
            subTitle: "Questioning my sanity",
            text: "Projects I've built and have a public Repo for",
        },
        directoryTitle: "My Projects",
        directory: '/projects',
    },
];