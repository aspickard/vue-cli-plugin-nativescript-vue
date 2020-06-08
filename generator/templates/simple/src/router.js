---
extend: '@vue/cli-service/generator/router.js'
replace:
  - !!js/regexp /import Home from '\./views/Home.vue'/
  - !!js/regexp /\(\) => import(.*)\.\/views\/About\.vue'\)/
---

<%# REPLACE %>
import Home from '~/views/Home.vue';
import About from '~/views/About.vue';
<%# END_REPLACE %>

<%# REPLACE %>
About
<%# END_REPLACE %>
