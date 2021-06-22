import { initSidekick } from 'http://localhost:3000/tools/sidekick/app.js';
import { configureSidekick }  from 'http://localhost:3000/tools/sidekick/config.js';
const config = Object.assign({ owner, repo, ref }, (configureSidekick && configureSidekick()) || {});
initSidekick(config);
