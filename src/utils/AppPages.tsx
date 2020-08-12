import {Pages, Page} from '../../global';

import React from 'react';

const HomePage = React.lazy(() => import('../Pages/HomePage'));
const AboutPage = React.lazy(() => import('../Pages/AboutPage'));
const ContactPage = React.lazy(() => import('../Pages/ContactPage'));
const ProjectsPage = React.lazy(() => import('../Pages/ProjectsPage'));

//Values
var home: Page = {
    data: {
        title: "Developer with no focus",
        subTitle: "Projects that grow creativity",
        text: "Check out my projects below.",
    },
    dir: '/',
    title: 'Home',
    component: HomePage
};

let about: Page = {
    data: {
        title: "About me",
    },
    title: 'About',
    dir: '/about',
    component: AboutPage
};

let contact: Page = {
    data: {
        title: "Let's Chat",
    },
    dir: 'Contact Me',
    title: '/contact',
    component: ContactPage
};

let projects: Page = {
    data: {
        title: "My various projects",
        subTitle: "Questioning my sanity",
        text: "Projects I've built and have a public Repo for",
    },
    dir: "My Projects",
    title: '/projects',
    component: ProjectsPage
}

export const AppPages: Pages = [
    home,
    about,
    contact,
    projects
]