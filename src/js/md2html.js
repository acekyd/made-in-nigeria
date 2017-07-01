var md2html = (function (markdownit, $) {

  'use strict';

  var md = markdownit({
    html: true,
    linkify: true,
    typographer: true
  });

  var $shadowDom = $('#shadow-dom').addClass('no-display');
  var $toolsTable = $('#tools-table');

  var init = function () {

    $.get('https://raw.githubusercontent.com/acekyd/made-in-nigeria/master/README.MD', function (mdContent) {

      // Convert markdown file content to html string.
      var htmlStrData = md.render(mdContent);

      // Convert html string data to actual DOM nodes.
      // This will ensure it's accessible by jQuery.
      // NOTE: This operation is performed on an abstract/a shadow DOM
      // node.
      $shadowDom.append($(htmlStrData));

      var $toolsList = $shadowDom.find('ul > li');

      populateToolsTable($toolsList);
    });
  };

  var populateToolsTable = function ($toolsList) {

    var $tableRows = $toolsTable.find('tbody').detach();

    $toolsList.each(function () {

      var $listItem = $(this);

      var $tableRow = $('<tr/>');

      var $toolName = $('<td/>').html($listItem.find('> a:first-child'));
      var $toolDesc = $('<td/>').html(getDescription($listItem));
      var $toolCreator = $('<td/>').html($listItem.find('> strong > a'));

      var $tableRowCells = [$toolName, $toolDesc, $toolCreator];

      $tableRow.html($tableRowCells);
      $tableRows.append($tableRow);
    });

    $tableRows.appendTo($toolsTable);
  };

  var getDescription = function ($listItem) {
    return $listItem
      .clone()
      .children()
      .remove()
      .end()
      .text()
      .replace(/-/, '');
  };

  // Expose Public API.
  return {
    init: init
  };

})(markdownit, $);

// Fire up on document ready.
$(md2html.init);