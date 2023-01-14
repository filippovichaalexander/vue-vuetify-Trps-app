
import Vue from 'vue';
import Vuetify from 'vuetify/lib';


Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
  breakpoint: {
    lg: {
      xs: 340,
      sm: 540,
      md: 800,
      lg: 1280,
      xl: 1904
    },
    sm: {
      xs: 170,
      sm: 270,
      md: 400,
      lg: 620,
      xl: 952
    },
  }
});