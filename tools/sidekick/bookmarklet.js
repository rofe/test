import { initSidekick } from 'http://localhost:3000/tools/sidekick/app.js'; 
if (!document.head.querySelector('script#hlx-sk-config')) {
  const script = document.createElement("script");
  script.id = 'hlx-sk-config';
  script.src = 'http://localhost:3000/tools/sidekick/config.jsonp';
  document.head.appendChild(script);
} else {
  window.hlx.sidekick.loadContext().toggle();
}
