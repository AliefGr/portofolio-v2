import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/utils.css';
import '../styles/components/hero.css';
import '../styles/components/header.css';
import '../styles/components/about.css';
import '../styles/components/mobile-nav.css';
import '../styles/components/portofolio.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';

import navbar from './utlis/mobile-nav.js';
import darkMode from './utlis/dark-mode.js';
import animateLoading from './utlis/lazy-loading.js';

navbar();
darkMode();
animateLoading();