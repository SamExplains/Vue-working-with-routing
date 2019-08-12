import User from './components/user/User.vue'
import Home from './components/Home.vue'

export const routes = [
  { path: '', component: Home }, // default home route
  { path: '/user', component: User },
];