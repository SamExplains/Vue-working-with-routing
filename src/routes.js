import UserStart from './components/user/UserStart.vue'
import UserEdit from './components/user/UserEdit.vue'
import UserDetail from './components/user/UserDetail.vue'
import Home from './components/Home.vue'
import Header from "./components/Header/Header.vue";

/* Lazy load example */
const User = resolve => {
  require.resolve(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'));
  })
};

export const routes = [
  { path: '', components: {
      default: Home,
      'header-top': Header,
    } }, // default home route
  { path: '/user', components: {
      default: User,
      'header-bottom': Header,
    }, children: [
      { path: '', component: UserStart},
      { path: ':id', component: UserDetail},
      { path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ] }, //using routes without parameters
  // { path: '/user/:name', component: User }, //using routes with parameters
    { path: '/redirect', redirect: '/user' },
    { path: '*', redirect: '/' }, //Catch-all route
];