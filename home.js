/* Scott Shots Photography homepage content for scottshotsphoto.com (PhotoShelter Promenade).
   Loaded from PhotoShelter Website > General Settings > Footer Code.
   To remove from the site: clear the Footer Code box in PhotoShelter and save. */
(function(){
  if (document.getElementById('ssp-home-css')) return;
  var st = document.createElement('style'); st.id = 'ssp-home-css';
  st.textContent = "#ssp-home{--ssp-maroon:#5b1f16;--ssp-gold:#e3a93b;--ssp-ink:#2b2b2b;--ssp-soft:#6a6a6a;--ssp-paper:#faf8f4;font-family:\"Open Sans\",Helvetica,Arial,sans-serif;color:var(--ssp-ink);position:relative;z-index:2;width:100%;line-height:1.6;-webkit-font-smoothing:antialiased}\n#ssp-home *{box-sizing:border-box}\n#ssp-home a{text-decoration:none}\n#ssp-home .ssp-hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;text-align:center;padding:0 16px 13vh;pointer-events:none}\n#ssp-home .ssp-hero-box{pointer-events:auto;max-width:760px;background:rgba(20,20,20,.42);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);border-radius:14px;padding:22px 28px 24px;color:#fff}\n#ssp-home .ssp-hero h1{font-size:30px!important;line-height:1.2!important;margin:0 0 8px!important;font-weight:700!important;letter-spacing:.3px!important;color:#fff!important;text-transform:none!important;font-family:inherit!important}\n#ssp-home .ssp-hero p{margin:0 0 18px;font-size:16px;color:rgba(255,255,255,.92)}\n#ssp-home .ssp-btns{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}\n#ssp-home .ssp-btn{display:inline-block;padding:11px 20px;border-radius:999px;font-weight:700;font-size:14px;letter-spacing:.4px;transition:transform .15s,background .15s}\n#ssp-home .ssp-btn:hover{transform:translateY(-1px)}\n#ssp-home .ssp-btn-gold{background:var(--ssp-gold);color:#2b1a05}\n#ssp-home .ssp-btn-gold:hover{background:#f0b94c}\n#ssp-home .ssp-btn-line{border:2px solid rgba(255,255,255,.85);color:#fff}\n#ssp-home .ssp-btn-line:hover{background:rgba(255,255,255,.12)}\n#ssp-home .ssp-btn-maroon{background:var(--ssp-maroon);color:#fff}\n#ssp-home .ssp-btn-maroon:hover{background:#74291d}\n#ssp-home .ssp-cue{display:block;margin-top:14px;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.8)}\n#ssp-home .ssp-sec{background:var(--ssp-paper);padding:64px 16px}\n#ssp-home .ssp-sec.ssp-alt{background:#fff}\n#ssp-home .ssp-wrap{max-width:1080px;margin:0 auto}\n#ssp-home h2{font-size:26px!important;line-height:1.25!important;margin:0 0 14px!important;color:var(--ssp-maroon)!important;font-weight:700!important;text-transform:none!important;letter-spacing:0!important;font-family:inherit!important}\n#ssp-home h3{font-size:18px!important;margin:0 0 6px;color:var(--ssp-ink)!important;font-weight:700!important;text-transform:none!important;letter-spacing:0!important;font-family:inherit!important}\n#ssp-home p{font-size:16px;margin:0 0 12px;font-family:inherit}\n#ssp-home .ssp-lede{font-size:18px;color:#3a3a3a;max-width:780px}\n#ssp-home .ssp-two{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:28px}\n#ssp-home .ssp-panel{background:#fff;border:1px solid #e8e2d6;border-radius:14px;padding:26px}\n#ssp-home .ssp-panel .ssp-eyebrow{font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--ssp-soft);font-weight:700;margin-bottom:6px;display:block}\n#ssp-home .ssp-panel ul{margin:10px 0 18px;padding-left:18px}\n#ssp-home .ssp-panel li{margin:4px 0;font-size:15px}\n#ssp-home .ssp-panel li a{color:var(--ssp-ink);border-bottom:1px solid var(--ssp-gold)}\n#ssp-home .ssp-panel li a:hover{color:var(--ssp-maroon)}\n#ssp-home .ssp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:24px}\n#ssp-home .ssp-card{display:block;background:var(--ssp-paper);border:1px solid #ece6da;border-radius:12px;padding:20px;color:var(--ssp-ink);transition:border-color .15s,transform .15s}\n#ssp-home .ssp-card:hover{border-color:var(--ssp-gold);transform:translateY(-2px)}\n#ssp-home .ssp-card p{font-size:14.5px;color:#4a4a4a;margin:0 0 10px}\n#ssp-home .ssp-more{font-size:13px;font-weight:700;color:var(--ssp-maroon);letter-spacing:.3px}\n#ssp-home .ssp-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:22px;text-align:center}\n#ssp-home .ssp-stat b{display:block;font-size:26px;color:var(--ssp-maroon);line-height:1.2}\n#ssp-home .ssp-stat span{font-size:13px;color:var(--ssp-soft)}\n#ssp-home .ssp-areas{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px;padding:0;list-style:none}\n#ssp-home .ssp-areas li{background:#fff;border:1px solid #e8e2d6;border-radius:999px;padding:5px 12px;font-size:14px}\n#ssp-home .ssp-cta{background:var(--ssp-maroon);color:#fff;text-align:center;padding:60px 16px}\n#ssp-home .ssp-cta h2{color:#fff!important}\n#ssp-home .ssp-cta p{color:rgba(255,255,255,.9)}\n#ssp-home .ssp-cta a.ssp-tel{color:var(--ssp-gold);font-weight:700}\n@media (max-width:820px){\n #ssp-home .ssp-two{grid-template-columns:1fr}\n #ssp-home .ssp-grid{grid-template-columns:1fr 1fr}\n #ssp-home .ssp-stats{grid-template-columns:1fr 1fr}\n}\n@media (max-width:560px){\n #ssp-home .ssp-hero{padding-bottom:9vh}\n #ssp-home .ssp-hero-box{padding:18px 16px 20px}\n #ssp-home .ssp-hero h1{font-size:23px!important}\n #ssp-home .ssp-hero p{font-size:15px}\n #ssp-home .ssp-grid{grid-template-columns:1fr}\n #ssp-home .ssp-sec{padding:44px 16px}\n #ssp-home h2{font-size:22px!important}\n}\n";
  (document.head || document.documentElement).appendChild(st);
})();
(function(){
  var HTML = ''
  + '<section class="ssp-hero">'
  +  '<div class="ssp-hero-box">'
  +   '<h1>Truckee &amp; Lake Tahoe Photographer</h1>'
  +   '<p>Real estate, commercial, drone and fine art photography by Scott Thompson, shooting the Sierra since 2002.</p>'
  +   '<div class="ssp-btns">'
  +    '<a class="ssp-btn ssp-btn-gold" href="/contact">Book a Shoot</a>'
  +    '<a class="ssp-btn ssp-btn-line" href="https://www.truckeetahoephotos.com/" target="_blank" rel="noopener">Shop Fine Art Prints</a>'
  +   '</div>'
  +   '<span class="ssp-cue">Scroll to explore &darr;</span>'
  +  '</div>'
  + '</section>'

  + '<section class="ssp-sec"><div class="ssp-wrap">'
  +  '<h2>Local photography for Truckee and North Lake Tahoe</h2>'
  +  '<p class="ssp-lede">Hi, I&rsquo;m Scott. I&rsquo;ve been a commercial photographer since 1998 and have called Truckee home since 2002. I photograph homes for local realtors, people and businesses at work, and the lakes and peaks I never get tired of. Whether you need listing photos by Friday or a big print for over the fireplace, you&rsquo;re working directly with me.</p>'
  +  '<div class="ssp-two">'
  +   '<div class="ssp-panel">'
  +    '<span class="ssp-eyebrow">For realtors &amp; businesses</span>'
  +    '<h3>Commercial photography services</h3>'
  +    '<p>Clean, bright images that help listings and local businesses stand out.</p>'
  +    '<ul>'
  +     '<li><a href="/p/virtual-tours">Real estate photography &amp; virtual tours</a></li>'
  +     '<li><a href="/p/photo-services">Commercial, headshot &amp; on-the-job portraits</a></li>'
  +     '<li><a href="/p/photo-services">Drone aerial photography (FAA Part 107)</a></li>'
  +     '<li><a href="/p/adventure-photograph">Adventure &amp; outdoor lifestyle</a></li>'
  +    '</ul>'
  +    '<a class="ssp-btn ssp-btn-maroon" href="/p/photo-services">See Services &amp; Rates</a>'
  +   '</div>'
  +   '<div class="ssp-panel">'
  +    '<span class="ssp-eyebrow">For your walls</span>'
  +    '<h3>Lake Tahoe fine art prints</h3>'
  +    '<p>Award-winning Tahoe and Truckee landscapes, printed large on metal and more, ready to hang.</p>'
  +    '<ul>'
  +     '<li><a href="https://www.truckeetahoephotos.com/" target="_blank" rel="noopener">Shop prints at TruckeeTahoePhotos.com</a></li>'
  +     '<li><a href="/archive">Browse the photo collection</a></li>'
  +     '<li><a href="/p/docks-of-donner-lake">The book: <em>Docks of Donner Lake</em></a></li>'
  +     '<li><a href="/p/photo-download-info">Licensing &amp; image downloads</a></li>'
  +    '</ul>'
  +    '<a class="ssp-btn ssp-btn-maroon" href="https://www.truckeetahoephotos.com/" target="_blank" rel="noopener">Shop Fine Art Prints</a>'
  +   '</div>'
  +  '</div>'
  + '</div></section>'

  + '<section class="ssp-sec ssp-alt"><div class="ssp-wrap">'
  +  '<h2>What I shoot</h2>'
  +  '<div class="ssp-grid">'
  +   '<a class="ssp-card" href="/p/virtual-tours"><h3>Real estate &amp; virtual tours</h3><p>Listing photos, twilight shots and interactive virtual tours for homes from Tahoe Donner to the West Shore.</p><span class="ssp-more">Learn more &rarr;</span></a>'
  +   '<a class="ssp-card" href="/p/photo-services"><h3>Drone aerials</h3><p>FAA Part 107 certified aerial photography for properties, lots, resorts and events.</p><span class="ssp-more">Learn more &rarr;</span></a>'
  +   '<a class="ssp-card" href="/p/photo-services"><h3>Commercial &amp; portraits</h3><p>Headshots, team photos and on-the-job portraits of the tradespeople and businesses that keep Tahoe running.</p><span class="ssp-more">Learn more &rarr;</span></a>'
  +   '<a class="ssp-card" href="/p/adventure-photograph"><h3>Adventure &amp; lifestyle</h3><p>Skiing, biking, paddling and the mountain lifestyle, shot where it happens.</p><span class="ssp-more">Learn more &rarr;</span></a>'
  +   '<a class="ssp-card" href="https://www.truckeetahoephotos.com/" target="_blank" rel="noopener"><h3>Fine art landscapes</h3><p>Lake Tahoe, Donner Lake and Sierra landscapes available as large prints on metal and more.</p><span class="ssp-more">Shop prints &rarr;</span></a>'
  +   '<a class="ssp-card" href="/p/docks-of-donner-lake"><h3>Books &amp; publishing</h3><p>Published work and the photo book <em>Docks of Donner Lake</em>.</p><span class="ssp-more">See the book &rarr;</span></a>'
  +  '</div>'
  + '</div></section>'

  + '<section class="ssp-sec"><div class="ssp-wrap">'
  +  '<h2>Why work with Scott Shots</h2>'
  +  '<p>You get one experienced local photographer from start to finish: no franchise, no rotating crew. My work has appeared in the Wall Street Journal, the Robb Report and on 20+ magazine covers, including Tahoe Quarterly&rsquo;s Best of Tahoe 2026 issue, and I was named the Sierra Sun&rsquo;s Best Local Artist in 2020.</p>'
  +  '<div class="ssp-stats">'
  +   '<div class="ssp-stat"><b>1998</b><span>Shooting professionally since</span></div>'
  +   '<div class="ssp-stat"><b>2002</b><span>Based in Truckee since</span></div>'
  +   '<div class="ssp-stat"><b>20+</b><span>Magazine covers</span></div>'
  +   '<div class="ssp-stat"><b>Part 107</b><span>FAA-certified drone pilot</span></div>'
  +  '</div>'
  +  '<h3 style="margin-top:34px">Areas I serve</h3>'
  +  '<ul class="ssp-areas"><li>Truckee</li><li>Tahoe Donner</li><li>Donner Lake</li><li>Northstar</li><li>Martis Camp</li><li>Lahontan</li><li>Olympic Valley / Palisades</li><li>Tahoe City</li><li>West Shore</li><li>Kings Beach</li><li>Incline Village</li><li>Lake Tahoe &amp; the Sierra</li></ul>'
  + '</div></section>'

  + '<section class="ssp-cta"><div class="ssp-wrap">'
  +  '<h2>Let&rsquo;s plan your shoot</h2>'
  +  '<p>Tell me about the property, project or print you have in mind. Call or text <a class="ssp-tel" href="tel:+15302777890">(530) 277-7890</a>, or send a note.</p>'
  +  '<div class="ssp-btns"><a class="ssp-btn ssp-btn-gold" href="/contact">Contact Scott</a></div>'
  + '</div></section>';

  function isHome(){ var p = location.pathname.replace(/\/+$/,''); return p === '' || p === '/index'; }
  function mount(){
    var mode = document.getElementById('mode-index');
    if (!mode || !isHome()) return;
    var wrap = mode.querySelector('.wrapper') || mode;
    if (wrap.querySelector('#ssp-home')) return;
    var el = document.createElement('div');
    el.id = 'ssp-home';
    el.innerHTML = HTML;
    wrap.appendChild(el);
  }
  function start(){
    mount();
    var root = document.getElementById('c2content') || document.body;
    new MutationObserver(function(){ mount(); }).observe(root, {childList:true, subtree:true});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
