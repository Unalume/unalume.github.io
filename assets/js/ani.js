const anime = require('assets/lib/anime.js');

const path = anime.path("svg path");
const tl = anime.timeline({
  loop: true,
  easing: "linear",
  duration: 3000
});

tl
.add({
    targets: "svg #logo",
    strokeDashoffset: [
      anime.setDashoffset, 0
    ],
  offset: 0 })
;
