// ==UserScript==
// @name         AtCoder Scroll Page Top Hider
// @namespace    https://twitter.com/gmm_tea_cpg
// @version      1.0.0
// @description  AtCoder のページ内にて「↑ページトップ」リンクを非表示にします
// @author       gmmtea
// @match        https://atcoder.jp/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
  'use strict';
  document.getElementById('scroll-page-top')?.remove();
})();
