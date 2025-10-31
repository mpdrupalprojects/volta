// /**
//  * @file
//  * voltahall behaviors.
//  */
// (function (Drupal) {

//   'use strict';

//   Drupal.behaviors.voltahall = {
//     attach (context, settings) {

//       console.log('It works!');

//     }
//   };

// } (Drupal));

document.addEventListener('DOMContentLoaded', function () {
    var collapseEl = document.getElementById('part-two');
    var triggerEl = document.querySelector('.show-more-less');

    collapseEl.addEventListener('show.bs.collapse', function () {
      triggerEl.textContent = 'Show less';
    });

    collapseEl.addEventListener('hide.bs.collapse', function () {
      triggerEl.textContent = 'Show more';
    });
  });
