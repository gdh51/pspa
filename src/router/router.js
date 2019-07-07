import index from '../components/childrens/index.vue';
import aboutMe from '../components/childrens/aboutMe.vue';
import archives from '../components/childrens/archives.vue';
import arTemp from '../components/childrens/arTemp.vue';
import categories from '../components/childrens/categories.vue';
import tags from '../components/childrens/tags.vue';
import specific from '../components/childrens/specific.vue';

const route = [{
    path: '/about',
    name: 'about',
    component: aboutMe
  },
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/archives',
    name: 'archives',
    component: archives
  },
  {
    path: '/categories',
    name: 'categories',
    component: categories
  },
  {
    path: '/tags',
    name: 'tag',
    component: tags,
  },
  {
    path: '/article',
    component: arTemp
  },
  {
    path:'/:tag/:name',
    name: 'specific',
    component: specific,
  },
  {
    path:'*',
    component:index
  }
];

export default route;
