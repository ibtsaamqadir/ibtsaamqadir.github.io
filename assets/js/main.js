/* Highlights the nav link for whichever section is currently on screen. */
(function () {
  'use strict';

  var links = {};
  document.querySelectorAll('.site-nav a[href^="#"]').forEach(function (a) {
    links[a.getAttribute('href').slice(1)] = a;
  });

  var sections = Object.keys(links)
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  if (!sections.length || !('IntersectionObserver' in window)) return;

  var visible = {};

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting ? e.intersectionRatio : 0; });

    var best = null, bestRatio = 0;
    sections.forEach(function (s) {
      if ((visible[s.id] || 0) > bestRatio) { bestRatio = visible[s.id]; best = s.id; }
    });

    Object.keys(links).forEach(function (id) { links[id].classList.toggle('active', id === best); });
  }, { rootMargin: '-64px 0px -55% 0px', threshold: [0, 0.15, 0.4, 0.75, 1] });

  sections.forEach(function (s) { observer.observe(s); });
})();
