---
extend: '@vue/cli-service/generator/router.js'
replace:
  - !!js/regexp /import Vue from 'vue'/
  - !!js/regexp /import Router from 'vue-router'/
  - !!js/regexp /import Home from '\./views/Home.vue'/
  - !!js/regexp /Vue.use\(Router\)/

  - !!js/regexp /\(\) => import(.*)\.\/views\/About\.vue'\)/
  - !!js/regexp /const router = new VueRouter\(\{/
  - !!js/regexp /\}\)/
  - !!js/regexp /export default router/
---

<%# REPLACE %>
import Vue from 'vue';
<%# END_REPLACE %>

<%# REPLACE %>
import Router from 'vue-router';
<%# END_REPLACE %>

<%# REPLACE %>
import Home from '~/views/Home.vue';
import About from '~/views/About.vue';
<%# END_REPLACE %>

<%# REPLACE %>
Vue.use(Router);
<%# END_REPLACE %>

<%# REPLACE %>
About
<%# END_REPLACE %>

<%# REPLACE %>
export const options = {
<%# END_REPLACE %>

<%# REPLACE %>
};
export default new Router(options);
<%# END_REPLACE %>

<%# REPLACE %>
<%# END_REPLACE %>
