import Vue from 'vue';
import Vuex from 'vuex';
import Node from '@/classes/Node';

Vue.use(Vuex);

// let d = {
//   prop: 1
// };
//
// function observe(obj) {
//   let result = {};
//   for (let p in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, p)) {
//       Object.defineProperty(result, p, {
//         get(): any {
//           return obj.p;
//         },
//         set(v: any): void {
//           // notify
//           obj.p = v;
//         }
//       })
//     }
//   }
// }

export interface AppState {
  rootNode: Node | null;
}

export default new Vuex.Store<AppState>({
  state: {
    rootNode: null

  },
  mutations: {
    setRootNode(state, node: Node) {
      state.rootNode = node;
    }
  },
  actions: {
    toggle({commit, state}, node: Node) {

      // calculate new state(completely new!!) from state and the given Node
      // commit new Node to changeRootNode
      // node = node.toggleNodeState();


    },
    initRootNode(context, node: Node) {
      context.commit('setRootNode', node);
      // Vue.set(context.state.rootNode,1,context.state.rootNode);
    }
  },
  modules: {}
});
