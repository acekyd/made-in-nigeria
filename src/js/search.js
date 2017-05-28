var search = (function ($) {

  'use strict';

  var $searchInput = null;

  var init = function () {

    // Do some prep.
    setup();

    $searchInput.on('keyup', function () {

      var searchQuery = $searchInput.val().toLowerCase();
      var $searchDomain = $('#tools-table').find('tbody > tr');

      doSearch(searchQuery, $searchDomain);
    });
  };

  var doSearch = function (searchQuery, $searchDomain) {

    $searchDomain.each(function () {

      var currSearchScope = $(this).text().toLowerCase();

      if (currSearchScope.indexOf(searchQuery) !== -1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  };

  var setup = function () {

    $searchInput = $('#search-input');
  };

  // Expose Public API.
  return {
    init: init
  }

})($);

// Fire up on document ready.
$(search.init);