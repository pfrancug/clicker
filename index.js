/*
Copyright (C) 2016, Piotr Francug
This file is licensed under the GNU General Public License v3.0
A copy of this license may be found at https://www.gnu.org/licenses/gpl-3.0.txt
*/

/************ vars ***********/

var money = 0;
var One = 0;
var Two = 0;
var Three = 0;
var Four = 0;
var Five = 0;
var Six = 0;

/************ refresher ***********/

function hackClick(number) {
	money = money + number;
	$('#money').text("$" + nFormatter(money, 1));
};

/************ options and cookies***********/

$('.options').click(function() {
	$('.optionspanel').toggle();
});

var lis = [money, One, Two, Three, Four, Five, Six];
var lit = ['money', 'One', 'Two', 'Three', 'Four', 'Five', 'Six'];

$(document).ready(function() {
	lit.forEach(function(entry) {
		if ($.cookie(entry) >= 0) {
			money = parseFloat($.cookie('money'));
			One = parseFloat($.cookie('One'));
			Two = parseFloat($.cookie('Two'));
			Three = parseFloat($.cookie('Three'));
			Four = parseFloat($.cookie('Four'));
			Five = parseFloat($.cookie('Five'));
			Six = parseFloat($.cookie('Six'));
		} else {
			$.cookie('money', money, {
				expires: 31
			});
			$.cookie('One', One, {
				expires: 31
			});
			$.cookie('Two', Two, {
				expires: 31
			});
			$.cookie('Three', Three, {
				expires: 31
			});
			$.cookie('Four', Four, {
				expires: 31
			});
			$.cookie('Five', Five, {
				expires: 31
			});
			$.cookie('Six', Six, {
				expires: 31
			});
		}
	});

	if ($.cookie(lit[2]) > 0) {
		$('.miner:nth-child(2)').fadeIn();
	};
	if ($.cookie(lit[3]) > 0) {
		$('.miner:nth-child(3)').fadeIn();
	};
	if ($.cookie(lit[4]) > 0) {
		$('.miner:nth-child(4)').fadeIn();
	};
	if ($.cookie(lit[5]) > 0) {
		$('.miner:nth-child(5)').fadeIn();
	};
	if ($.cookie(lit[6]) > 0) {
		$('.miner:nth-child(6)').fadeIn();
	};
});

$('.save').click(function() {
	$.cookie('money', money, {
		expires: 31
	});
	$.cookie('One', One, {
		expires: 31
	});
	$.cookie('Two', Two, {
		expires: 31
	});
	$.cookie('Three', Three, {
		expires: 31
	});
	$.cookie('Four', Four, {
		expires: 31
	});
	$.cookie('Five', Five, {
		expires: 31
	});
	$.cookie('Six', Six, {
		expires: 31
	});
});

$('.load').click(function() {
	money = parseFloat($.cookie('money'));
	One = parseFloat($.cookie('One'));
	Two = parseFloat($.cookie('Two'));
	Three = parseFloat($.cookie('Three'));
	Four = parseFloat($.cookie('Four'));
	Five = parseFloat($.cookie('Five'));
	Six = parseFloat($.cookie('Six'));
});

$('.money').click(function() {
	console.log('Money: ' + $.cookie('money'));
	console.log('One: ' + $.cookie('One'));
	console.log('Two: ' + $.cookie('Two'));
	console.log('Three: ' + $.cookie('Three'));
	console.log('Four: ' + $.cookie('Four'));
	console.log('Five: ' + $.cookie('Five'));
	console.log('Six: ' + $.cookie('Six'));
});

$('.reset').click(function() {
	money = 0;
	One = 0;
	Two = 0;
	Three = 0;
	Four = 0;
	Five = 0;
	Six = 0;
});

/************ miners ***********/

$('.miner:nth-child(1)').click(function() {
	var costOne = Math.floor(15 * Math.pow(1.15, One));
	if (money >= costOne) {
		One = One + 1;
		money = money - costOne;
		$('#quantityOne').text(One);
		$('#money').text("$" + nFormatter(money, 1));
		$('.miner:nth-child(2)').fadeIn(800);
	};
	var nextCost = Math.floor(15 * Math.pow(1.15, One));
	$('#costOne').text("$" + nextCost);
});

$('.miner:nth-child(2)').click(function() {
	var costTwo = Math.floor(100 * Math.pow(1.15, Two));
	if (money >= costTwo) {
		Two = Two + 1;
		money = money - costTwo;
		$('#quantityTwo').text(Two);
		$('#money').text("$" + nFormatter(money, 1));
		$('.miner:nth-child(3)').fadeIn(800);
	};
	var nextCost = Math.floor(100 * Math.pow(1.15, Two));
	$('#costTwo').text("$" + nextCost);
});

$('.miner:nth-child(3)').click(function() {
	var costThree = Math.floor(1100 * Math.pow(1.15, Three));
	if (money >= costThree) {
		Three = Three + 1;
		money = money - costThree;
		$('#quantityThree').text(Three);
		$('#money').text("$" + nFormatter(money, 1));
		$('.miner:nth-child(4)').fadeIn(800);
	};
	var nextCost = Math.floor(1100 * Math.pow(1.15, Three));
	$('#costThree').text("$" + nextCost);
});

$('.miner:nth-child(4)').click(function() {
	var costFour = Math.floor(12000 * Math.pow(1.15, Four));
	if (money >= costFour) {
		Four = Four + 1;
		money = money - costFour;
		$('#quantityFour').text(Four);
		$('#money').text("$" + nFormatter(money, 1));
		$('.miner:nth-child(5)').fadeIn(800);
	};
	var nextCost = Math.floor(12000 * Math.pow(1.15, Four));
	$('#costFour').text("$" + nextCost);
});

$('.miner:nth-child(5)').click(function() {
	var costFive = Math.floor(130000 * Math.pow(1.15, Five));
	if (money >= costFive) {
		Five = Five + 1;
		money = money - costFive;
		$('#quantityFive').text(Five);
		$('#money').text("$" + nFormatter(money, 1));
		$('.miner:nth-child(6)').fadeIn(800);
	};
	var nextCost = Math.floor(130000 * Math.pow(1.15, Five));
	$('#costFive').text("$" + nextCost);
});

$('.miner:nth-child(6)').click(function() {
	var costSix = Math.floor(1400000 * Math.pow(1.15, Six));
	if (money >= costSix) {
		Six = Six + 1;
		money = money - costSix;
		$('#quantitySix').text(Six);
		$('#money').text("$" + nFormatter(money, 1));
		$('.miner:nth-child(7)').fadeIn(800);
	};
	var nextCost = Math.floor(1400000 * Math.pow(1.15, Six));
	$('#costSix').text("$" + nextCost);
});

/************ upgrades ***********/

$('.upgrade').click(function() {
	$(this).addClass('upactive');
});

/************ admin ***********/

$(document).ready(function() {
	$.getJSON("http://jsonip.com/?callback=?", function(data) {
		console.log(data.ip);
		if (data.ip == '91.229.22.18') {
			$('.admin').removeClass('hidden');
			console.log('Admin Granted');
		};
	});
});

$('.admin').click(function() {
	$('.adminpanel').toggle();
});

$('.buildings').click(function() {
	$(this).addClass('buildingsactive');
	$('.miner').show();
});

/************ formatter ***********/

function nFormatter(num, digits) {
	var si = [{
			value: 1E18,
			symbol: "E"
		}, {
			value: 1E15,
			symbol: "P"
		}, {
			value: 1E12,
			symbol: "T"
		}, {
			value: 1E9,
			symbol: "G"
		}, {
			value: 1E6,
			symbol: "M"
		}, {
			value: 1E3,
			symbol: "k"
		}],
		rx = /\.0+$|(\.[0-9]*[1-9])0+$/,
		i;
	for (i = 0; i < si.length; i++) {
		if (num >= si[i].value) {
			return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
		}
	}
	return parseFloat(num).toFixed(digits).replace(rx, "$1");
}

/************ timer ***********/

window.setInterval(function() {
	hackClick((One * 0.01) + (Two * 0.1) + (Three * 0.8) + (Four * 4.7) + (Five * 26) + (Six * 140));
	$('.sec').text("$" + nFormatter((One * 0.1) + (Two * 1) + (Three * 8) + (Four * 47) + (Five * 260) + (Six * 1400), 1) + "/s");
	document.title = "Clicker - $" + parseFloat(Math.round(money * 100) / 100).toFixed(1);
	$('#quantityOne').text(One);
	$('#quantityTwo').text(Two);
	$('#quantityThree').text(Three);
	$('#quantityFour').text(Four);
	$('#quantityFive').text(Five);
	$('#quantitySix').text(Six);
	$('#costOne').text("$" + Math.floor(15 * Math.pow(1.15, One)));
	$('#costTwo').text("$" + Math.floor(100 * Math.pow(1.15, Two)));
	$('#costThree').text("$" + Math.floor(1100 * Math.pow(1.15, Three)));
	$('#costFour').text("$" + Math.floor(12000 * Math.pow(1.15, Four)));
	$('#costFive').text("$" + Math.floor(130000 * Math.pow(1.15, Five)));
	$('#costSix').text("$" + Math.floor(1400000 * Math.pow(1.15, Six)));

}, 100);