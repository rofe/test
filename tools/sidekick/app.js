/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

'use strict';

(() => {
  class Sidekick {
    constructor(cfg) {
      console.log('init', cfg);
      this.loadContext(cfg);
    }

    lodContext(cfg) {
      console.log('loadContext', cfg);
      return this;
    }

    toggle() {
      console.log('toggle');
      return this;
    }
  }

  const initSidekick = (cfg) => {
    window.hlx = window.hlx || {};
    if (!window.hlx.sidekick) {
      window.hlx.sidekick = new Sidekick(cfg);
    } else {
      window.hlx.test.loadContext(cfg).toggle();
    }  
  }
  
  let appJS = document.querySelector('script#hlx-sk-app');
  const ghDetails = appJS && appJS.dataset.repo && JSON.parse(appJS.dataset.repo);
  if (!ghDetails) {
    console.error('error loading sidekick');
  }
  const { owner, repo, ref } = ghDetails;
  let cfgJS = document.querySelector('script#hlx-sk-config');
  if (!cfgJS) {
    cfgJS =  document.createElement('script');
    cfgJS.id = 'hlx-sk-config';
    document.head.append(cfgJS);
  }
  // load project config, call initSidekick()
  cfgJS.src = `https://${ref}--${repo}--${owner}.hlx.page/tools/sidekick/config.jsonp`;

})();
