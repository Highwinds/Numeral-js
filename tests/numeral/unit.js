var numeral = require('../../numeral');

exports.unit = {
	getUnit: function(test) {
        var tests = [
                [100,'0b',0,'B'],
                [Math.pow(1024,1)+1,'0b',1,'KB'],
                [Math.pow(1024,2)+1,'0b',2,'MB'],
                [Math.pow(1024,3)+1,'0b',3,'GB'],
                [Math.pow(1024,4)+1,'0b',4,'TB'],
                [Math.pow(1024,5)+1,'0b',5,'PB'],
                [Math.pow(1024,6)+1,'0b',6,'EB'],
                [Math.pow(1024,7)+1,'0b',7,'ZB'],
                [Math.pow(1024,8)+1,'0b',8,'YB'],
                [100,'0a',0,''],
                [1001,'0a',1,'k'],
                [1000001,'0a',2,'m'],
                [1000000001,'0a',3,'b'],
                [1000000000001,'0a',4,'t'],
                [1000000,'0.00',0,'']
            ],
            i,
            unitActual;

        test.expect(tests.length * 2);

        for (i = 0; i < tests.length; i++) {
        	unitActual = numeral(tests[i][0]).unit(tests[i][1]);
            test.strictEqual(unitActual.multiplier, tests[i][2], tests[i][0] + ' multiplier');
            test.strictEqual(unitActual.suffix, tests[i][3], tests[i][0] + ' suffix');
        }

        test.done();
	}
};