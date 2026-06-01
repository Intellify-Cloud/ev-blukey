import 'expose-loader?exposes[]=$&exposes[]=jQuery!jquery';
import 'expose-loader?exposes[]=Popper!popper.js';
import 'jquery.easing';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';

// Central stylesheet entrypoint. HTML should link to the compiled
// /assets/bundle.css file, not individual SCSS/CSS source files.
import './site.scss';
import './site';
