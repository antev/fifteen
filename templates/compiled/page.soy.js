// This file was automatically generated from page.soy.
// Please don't edit this file by hand.

goog.provide('fifteen.templates.page');

goog.require('soy');
goog.require('soy.StringBuilder');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string}
 * @notypecheck
 */
fifteen.templates.page.content = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t');
  fifteen.templates.page.field(opt_data, output);
  output.append('\t<div id="toolbar"><div id="shuffle" class="toolbar-button"></div><div id="play_stop" class="toolbar-button play"></div><div id="counter" class="toolbar-button">0</div></div>');
  return opt_sb ? '' : output.toString();
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string}
 * @notypecheck
 */
fifteen.templates.page.field = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div id="field">');
  var hexElementList10 = opt_data.hexElements;
  var hexElementListLen10 = hexElementList10.length;
  for (var hexElementIndex10 = 0; hexElementIndex10 < hexElementListLen10; hexElementIndex10++) {
    var hexElementData10 = hexElementList10[hexElementIndex10];
    output.append((opt_data.elements[hexElementIndex10]) ? '<div id="element_' + soy.$$escapeHtml(hexElementData10) + '" class="field-element" data-hex="' + soy.$$escapeHtml(hexElementData10) + '">' + soy.$$escapeHtml(opt_data.elements[hexElementIndex10]) + '</div>' : '');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {soy.StringBuilder=} opt_sb
 * @return {string}
 * @notypecheck
 */
fifteen.templates.page.toolbar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div id="toolbar"><div id="shuffle" class="toolbar-button"></div><div id="play_stop" class="toolbar-button play"></div><div id="counter" class="toolbar-button">0</div></div>');
  return opt_sb ? '' : output.toString();
};
