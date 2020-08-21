import React from 'react';

import { AppProps, Pages }from '../../global';


const HomePage = React.lazy(() => import('../Pages/HomePage'));
const AboutPage = React.lazy(() => import('../Pages/AboutPage'));
const ContactPage = React.lazy(() => import('../Pages/ContactPage'));
const ProjectsPage = React.lazy(() => import('../Pages/ProjectsPage'));

const pagesRouteData: Pages = [
    {
        pageComponent: HomePage,
        pageData: {
            title: "Developer with no focus",
            subTitle: "Projects that grow creativity",
            text: "Check out my projects below.",
        },
        directory: '/',
        directoryTitle: 'Home',
    },
    {
        pageComponent: AboutPage,
        pageData: {
            title: "About me",
        },
        directoryTitle: 'About',
        directory: '/about',
    },
    {
        pageComponent: ContactPage,
        pageData: {
            title: "Let's Chat",
        },
        directoryTitle: 'Contact Me',
        directory: '/contact',
    },
    {
        pageComponent: ProjectsPage,
        pageData: {
            title: "My various projects",
            subTitle: "Questioning my sanity",
            text: "Projects I've built and have a public Repo for",
        },
        directoryTitle: "My Projects",
        directory: '/projects',
    },
];

export const AppProperties: AppProps = {
    title: "",
    theme: "dark",
    brand: "Döt Matrix",
    pages: pagesRouteData,
}