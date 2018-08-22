import Vue from 'vue'
import Router from 'vue-router'
import VmLayout from '../components/Universal/Layout.vue'
import VmGameCreateForm from '../components/Game/GameCreateForm.vue'
import VmGameListExplorer from '../components/Game/GameListExplorer.vue'
import VmGameRoomCreateForm from '../components/GameRoom/GameRoomCreateForm.vue'
import VmGameRoomListExplorer from '../components/GameRoom/GameRoomListExplorer.vue'
import VmSignUpForm from '../components/User/SignUp.vue'
import VmLoginForm from '../components/User/LoginForm.vue'
import { createRoute } from 'vue-book'
Vue.use(Router)

const router = new Router({
  routes: [
    createRoute({
      requireContext: require.context('./..', true, /.demo.vue$/),
      path: '/demo',
    }),
    {
      path: '/',
      component: VmLayout,
      children: [
        {
          name: 'creategame',
          path: '/game',
          component: VmGameCreateForm,
        },
        {
          name: 'gamelist',
          path: '/gamelist',
          component: VmGameListExplorer,
        },
        {
          name: 'gamecreateroom',
          path: '/createroom',
          component: VmGameRoomCreateForm,
        },
        {
          name: 'gameroomlist',
          path: '/gameroomlist',
          component: VmGameRoomListExplorer,
        },
        {
          name: 'signupform',
          path: '/signup',
          component: VmSignUpForm,
        },
        {
          name: 'loginform',
          path: '/login',
          component: VmLoginForm,
        }
      ],
      },
  ],
})

export default router
