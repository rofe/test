let appJS = document.head.querySelector('script#hlx-sk-app');
console.log(!!appJS);
if (!appJS) {
  appJS =  document.createElement('script');
  appJS.id = 'hlx-sk-app';
  appJS.dataset.repo = JSON.stringify({
    owner: 'rofe',
    repo: 'test',
    ref: 'main'
  });
  document.head.append(appJS);
}
appJS.src = '/tools/sidekick/app.js';
