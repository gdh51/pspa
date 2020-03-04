const Index = () => import('../components/childrens/index.vue');
const AboutMe = () => import('../components/childrens/about-me/index.vue');
const Archives = () => import('../components/childrens/archives.vue');
const Article = () => import('../components/childrens/article/index.vue');
const Categories = () => import('../components/childrens/categories/index.vue');
const Tags = () => import('../components/childrens/tags/index.vue')

const routes = [{
        path: '/about',
        name: 'about',
        component: AboutMe
    },
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/archives',
        name: 'archives',
        component: Archives
    },
    {
        path: '/categories',
        name: 'categories',
        component: Categories
    },
    {
        path: '/tags',
        name: 'tag',
        component: Tags
    },
    {
        path: '/articles',
        name: 'articles',
        component: Article
    },
    {
        path: '*',
        component: Index
    }
];

export default routes;