if (!document.head.querySelector('script#hlx-sk-app')) {
  const appJS =  document.createElement('script');
  appJS.id = 'hlx-sk-app';
  appJS.dataset.repo = JSON.stringify({
    owner: 'rofe',
    repo: 'test',
    ref: 'main'
  });
  appJS.src = '/tools/sidekick/app.js';
} else {
  window.hlx && window.hlx.test && window.hlx.sidekick.loadContext().toggle();
}
