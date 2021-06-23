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

    loadContext(cfg) {
      console.log('loadContext', cfg);
      return this;
    }

    toggle() {
      console.log('toggle');
      return this;
    }
  }

  window.hlx = window.hlx || {};
  
  /**
   * Initializes the sidekick and stores it in {@link window.hlx.sidekick}.
   * @param {Object} cfg The sidekick configuration (extends {@code window.hlx.sidekickConfig})
   */
  window.hlx.initSidekick = (cfg = {}) => {
    window.hlx.sidekickConfig = { cfg, ...window.hlx.sidekickConfig };
    if (!window.hlx.sidekick) {
      window.hlx.sidekick = new Sidekick(cfg).show();
    } else {
      window.hlx.sidekick.loadContext(cfg).toggle();
    }  
  }
  
  if (window.hlx.sidekickConfig) {
    // backward compatibility mode
    window.hlx.initSidekick();
  } else {
    // get base config from script tag
    window.hlx.sidekickConfig = window.hlx.sidekickScript
      && window.hlx.sidekickScript.dataset.config
      && JSON.parse(window.hlx.sidekickScript.dataset.config);
    if (typeof window.hlx.sidekickConfig !== 'object') {
      console.error('error loading sidekick: project data missing');
    } else {
      const { owner, repo, ref } = window.hlx.sidekickConfig;
      if (!owner || !repo || !ref) {
        console.error('error loading sidekick: project data invalid');
      }
      // look for extended config in project
      window.hlx.configScript =  document.createElement('script');
      window.hlx.configScript.id = 'hlx-sk-config';
      window.hlx.configScript.src = `https://${ref}--${repo}--${owner}.hlx.page/tools/sidekick/config.js`;
      window.hlx.configScript.referrerpolicy = 'no-referrer';
      window.hlx.configScript.addEventListener('error', (e) => {
        // init sidekick without extended config
        console.log(`no sidekick config found at ${window.hlx.configScript.src} (${e.message})`);
        window.hlx.initSidekick();
      })
      if (document.head.querySelector(`script#${window.hlx.configScript.id}`)) {
        document.head.querySelector(`script#${window.hlx.configScript.id}`)
          .replaceWith(window.hlx.configScript);
      } else {
        document.head.append(window.hlx.configScript);
      }
    }
  }
})();
