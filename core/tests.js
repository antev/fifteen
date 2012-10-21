/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.tests');


fifteen.tests.list = ['1304A2685E7B9DFC', '36A870FD4915E2CB', '26341E085D7C9BAF', 'A73654298CBFDE01'];

fifteen.tests.run = function() {
	this.list.forEach(function(test) {
		fifteen.astar.resolve(test);
	});
	fifteen.log.add('All tests completed');
}
