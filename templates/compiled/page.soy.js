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
  output.append('\t<div id="field"></div><div id="toolbar"></div>');
  return opt_sb ? '' : output.toString();
};
