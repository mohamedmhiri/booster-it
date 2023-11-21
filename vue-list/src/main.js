// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;
// Gestion des Erreurs Globales avec "Vue.config.errorHandler" :
Vue.config.errorHandler = function (err, vm, info) {
  console.error('Une erreur est survenue :', err, info);
  // Actions supplémentaires, comme journalisation ou notification
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
