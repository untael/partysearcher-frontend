import Vue from 'vue'
import Router from 'vue-router'
import VueComponentTree from 'vue-component-tree'
import VmLayout from '../components/Universal/Layout.vue'
import VmGameCreateForm from '../components/Game/GameCreateForm.vue'
import VmGameListExplorer from '../components/Game/GameListExplorer.vue'
import VmGameList from '../components/Game/GameList.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    VueComponentTree(require.context('./..', true, /.demo.vue$/), '/demo'),
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
        }
      ],
      },
  ],
})

export default router
