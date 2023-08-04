import './styles/index.scss';
import Button from './components/Button.vue';
import Navbar from './components/Navbar.vue';

export default {
  install(app: any) {
    app.component('button-el', Button);
    app.component('navbar-el', Navbar);
  },
};
