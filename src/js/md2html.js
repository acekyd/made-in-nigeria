var md2html = (function (markdownit, $) {

  'use strict';

  var md = markdownit({
    html: true,
    linkify: true,
    typographer: true
  });

  var $shadowDom = null;
  var $toolsTable = null;

  var init = function () {

    // Do some prep.
    setup();

    $.get('../README.MD', function (mdContent) {

      // Convert markdown file content to html string.
      var htmlStrData = md.render(mdContent);

      // Convert html string data to actual DOM nodes.
      // This will ensure it's accessible by jQuery.
      // NOTE: This operation is performed on an abstract/a shadow DOM
      // node.
      $shadowDom.append($(htmlStrData));

      var toolsList = $shadowDom.find('ul > li');

      populateToolsTable(toolsList);
    });
  };

  var populateToolsTable = function (toolsList) {

    var tableRows = $toolsTable.find('tbody');

    toolsList.each(function () {

      var listItem = $(this);

      var tableRow = $('<tr/>');

      var cell1 = $('<td/>').html(listItem.find('> a:first-child'));
      var cell2 = $('<td/>').html(getDescription(listItem));
      var cell3 = $('<td/>').html(listItem.find('> strong > a'));

      var cells = [cell1, cell2, cell3];

      tableRow.html(cells);

      tableRows.append(tableRow);
    });
  };

  var getDescription = function (elem) {
    return $(elem)
      .clone()
      .children()
      .remove()
      .end()
      .text()
      .replace(/-/, '');
  };

  var setup = function () {

    $shadowDom = $('#shadow-dom').addClass('no-display');
    $toolsTable = $('#tools-table');
  };

  // Expose Public API.
  return {
    init: init
  };

})(markdownit, $);

// Fire up on document ready.
$(md2html.init);