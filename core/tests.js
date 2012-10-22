/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.tests');

fifteen.tests.list = ['79C30AFEBD165248', '36A870FD4915E2CB', 'A73654298CBFDE01',
                      '1FA754D3B68CE092', '3507194C8EB6FAD2', 'A36297C1EFB4508D',
                      '137582CD4AB90FE6', '054E83D72BA6F1C9', 'CE8514D02F976A3B'];

fifteen.tests.run = function() {
	var steps = 0;
	var generated = 0;
	fifteen.tests.list.forEach(function(test) {
		steps += fifteen.astar.resolve(test).getStepCount();
		generated += fifteen.astar.nodesGenerated;
	});
	fifteen.log.add('All tests completed. Total generated: ' + Math.round(generated / 1000) + '. Steps: ' + steps);
}
goog.exportSymbol('fifteen.tests.run', fifteen.tests.run);

