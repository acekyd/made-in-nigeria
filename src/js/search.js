var search = (function ($) {

  'use strict';

  var $searchInput = $('#search-input');

  var init = function () {

    $searchInput.on('keyup', handleKeyUpEvent);
  };

  var handleKeyUpEvent = function () {

    var searchQuery = $searchInput.val().toLowerCase();
    var $searchDomain = $('#tools-table').find('tbody > tr');

    doSearch(searchQuery, $searchDomain);
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

  // Expose Public API.
  return {
    init: init
  }

})($);

// Fire up on document ready.
$(search.init);