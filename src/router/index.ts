import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Tree3 from '../views/TreeView3.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'TreeView1',
    component: Home
  },
  {
    path: '/tree2',
    name: 'HierarchyList2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TreeView2.vue')
  },
  {
    path: '/tree3',
    name: 'HierarchyList3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Tree3
  },
  {
    path: '/troll',
    name: 'TrollView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TrollView.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
