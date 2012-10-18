/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.require('fifteen.templates.page');
goog.provide('fifteen.page');


fifteen.page.target = fifteen.config.pageTarget;

fifteen.page.init = function(target) {
	if (typeof(target) == 'string' && target) {
		this.target = target;
	}
	
	$('#' + this.target).html(fifteen.templates.page.content());
}
