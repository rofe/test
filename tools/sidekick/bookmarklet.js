window.hlx = window.hlx || {};
window.hlx.sidekickScript = document.createElement('script');
window.hlx.sidekickScript.id = 'hlx-sk-app';
window.hlx.sidekickScript.src = '/tools/sidekick/app.js';
window.hlx.sidekickAppJS.dataset.repo = JSON.stringify({
  owner: 'rofe',
  repo: 'test',
  ref: 'main'
});
if (document.head.querySelector(`script#${window.hlx.sidekickScript.id}`)) {
  document.head.querySelector(`script#${window.hlx.sidekickScript.id}`)
    .replaceWith(window.hlx.sidekickScript);
} else {
  document.head.append(window.hlx.sidekickScript);
}
