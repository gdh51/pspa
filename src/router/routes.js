const Index = () => import('../components/childrens/index.vue');
const AboutMe = () => import('../components/childrens/about-me/index.vue');
const Archives = () => import('../components/childrens/archives/index.vue');
const Article = () => import('../components/childrens/article/index.vue');
const Categories = () => import('../components/childrens/categories/index.vue');
const Tags = () => import('../components/childrens/tags/index.vue');
const Specific = () => import('../components/childrens/specific/index.vue');

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
        path: '/(tags|categories)/:title',
        name: 'Specific',
        component: Specific

    },

    // 这里通过查询字符串来查询文章  /articles?title=()
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