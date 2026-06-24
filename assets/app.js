/* scroll reveals + reading progress + dawn-arc driver */
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window) || reduce){
    els.forEach(function(e){ e.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin:'0px 0px -8% 0px', threshold:.08 });
    els.forEach(function(e){ io.observe(e); });
  }

  var bar = document.querySelector('.ch-progress');
  var sky = document.querySelector('.read-sky');

  function tick(){
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
    if(bar) bar.style.width = (pct*100) + '%';
    // dawn arc: background warms as you descend. ease so most warming
    // happens in the back third (Aubade), matching the story's first light.
    if(sky){
      var d = Math.pow(pct, 1.5);
      sky.style.setProperty('--dawn', d.toFixed(3));
    }
  }
  if(bar || sky){
    document.addEventListener('scroll', tick, { passive:true });
    window.addEventListener('resize', tick);
    tick();
  }
})();
