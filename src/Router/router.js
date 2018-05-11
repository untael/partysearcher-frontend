import Vue from 'vue'
import Router from 'vue-router'
import VueComponentTree from 'vue-component-tree'

Vue.use(Router)

const router = new Router({
  routes: [
    VueComponentTree(require.context('./..', true, /.demo.vue$/), '/demo'),

    // {
    //   path: '/app',
    //   component: VmLayout,
    //   children: [
    //
    //   ],
    // },

  ],
})

export default router
