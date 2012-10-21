/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.tests');


fifteen.tests.list = ['79C30AFEBD165248', '36A870FD4915E2CB', 'A73654298CBFDE01', '1FA754D3B68CE092', '3507194C8EB6FAD2', 'A36297C1EFB4508D'];

fifteen.tests.run = function() {
	this.list.forEach(function(test) {
		fifteen.astar.resolve(test);
	});
	fifteen.log.add('All tests completed');
}
