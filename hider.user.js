// ==UserScript==
// @name         AtCoder Scroll Page Top Hider
// @namespace    https://twitter.com/gmm_tea_cpg
// @version      1.0.1
// @description  AtCoder のページ内にて「↑ページトップ」リンクを非表示にします
// @author       gmmtea
// @match        https://atcoder.jp/*
// @grant        none
// @run-at       document-idle
// @license      MIT
// ==/UserScript==

(function() {
  'use strict';
  document.getElementById('scroll-page-top')?.remove();
})();
