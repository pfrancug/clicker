/*
 *  Clicker
 *  https://github.com/pfrancug/clicker
 *  Copyright (c) 2016 Piotr Francug
 *  Released under the MIT license
 */
 
var money = 0;
var One = 0;
var Two = 0;
var Three = 0;
var Four = 0;
var Five = 0;
var Six = 0;
var upOne = 0;
var upTwo = 0;
var upThree = 0;

function hackClick(number) {
	money = money + number;
	$('#money').text("$" + nFormatter(money, 1));
};

$('.collect').click(function() {
	hackClick(1);
	if (upOne == 1) {
		hackClick(1);
	};
	if (upTwo == 1) {
		hackClick(2);
	};
	if (upThree == 1) {
		hackClick(4);
	};
});

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
		};
	});
	if ($.cookie(lit[1]) > 0) {
		$('.miner:nth-child(2)').show();
	};
	if ($.cookie(lit[2]) > 0) {
		$('.miner:nth-child(2), .miner:nth-child(3)').show();
	};
	if ($.cookie(lit[3]) > 0) {
		$('.miner:nth-child(3), .miner:nth-child(4)').show();
	};
	if ($.cookie(lit[4]) > 0) {
		$('.miner:nth-child(4), .miner:nth-child(5)').show();
	};
	if ($.cookie(lit[5]) > 0) {
		$('.miner:nth-child(5), .miner:nth-child(6)').show();
	};
	if ($.cookie(lit[6]) > 0) {
		$('.miner:nth-child(6)').show();
	};
	if ($.cookie('upOne') == 1) {
		upOne = 1;
		$('#upOne').addClass('upactive');
	};
	if ($.cookie('upTwo') == 1) {
		upTwo = 1;
		$('#upTwo').addClass('upactive');
	};
	if ($.cookie('upThree') == 1) {
		upThree = 1;
		$('#upThree').addClass('upactive');
	};
});

function saveToCookies() {
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
	$.cookie('upOne', upOne, {
		expires: 31
	});
	$.cookie('upTwo', upTwo, {
		expires: 31
	});
	$.cookie('upThree', upThree, {
		expires: 31
	});
};

$('.money').click(function() {
	console.log('Money: ' + $.cookie('money'));
	console.log('One: ' + $.cookie('One'));
	console.log('Two: ' + $.cookie('Two'));
	console.log('Three: ' + $.cookie('Three'));
	console.log('Four: ' + $.cookie('Four'));
	console.log('Five: ' + $.cookie('Five'));
	console.log('Six: ' + $.cookie('Six'));
	console.log('upOne: ' + $.cookie('upOne'));
	console.log('upTwo: ' + $.cookie('upTwo'));
	console.log('upThree: ' + $.cookie('upThree'));
});

$('.reset').click(function() {
	money = 0;
	One = 0;
	Two = 0;
	Three = 0;
	Four = 0;
	Five = 0;
	Six = 0;
	upOne = 0;
	upTwo = 0;
	upThree = 0;
	$('.upgrade').removeClass('upactive');
	$('.miner:nth-child(2), .miner:nth-child(3), .miner:nth-child(4), .miner:nth-child(5), .miner:nth-child(6)').hide();
	$('.buildings').removeClass('buildingsactive');
});

function available() {
	if (Math.floor(15 * Math.pow(1.15, One)) > money) {
		$('.miner:nth-child(1)').addClass('unavailable');
	};
	if (Math.floor(15 * Math.pow(1.15, One)) <= money) {
		$('.miner:nth-child(1)').removeClass('unavailable');
	};
	if (Math.floor(100 * Math.pow(1.15, Two)) > money) {
		$('.miner:nth-child(2)').addClass('unavailable');
	};
	if (Math.floor(100 * Math.pow(1.15, Two)) <= money) {
		$('.miner:nth-child(2)').removeClass('unavailable');
	};
	if (Math.floor(1100 * Math.pow(1.15, Three)) > money) {
		$('.miner:nth-child(3)').addClass('unavailable');
	};
	if (Math.floor(1100 * Math.pow(1.15, Three)) <= money) {
		$('.miner:nth-child(3)').removeClass('unavailable');
	};
	if (Math.floor(12000 * Math.pow(1.15, Four)) > money) {
		$('.miner:nth-child(4)').addClass('unavailable');
	};
	if (Math.floor(12000 * Math.pow(1.15, Four)) <= money) {
		$('.miner:nth-child(4)').removeClass('unavailable');
	};
	if (Math.floor(130000 * Math.pow(1.15, Five)) > money) {
		$('.miner:nth-child(5)').addClass('unavailable');
	};
	if (Math.floor(130000 * Math.pow(1.15, Five)) <= money) {
		$('.miner:nth-child(5)').removeClass('unavailable');
	};
	if (Math.floor(1400000 * Math.pow(1.15, Six)) > money) {
		$('.miner:nth-child(6)').addClass('unavailable');
	};
	if (Math.floor(1400000 * Math.pow(1.15, Six)) <= money) {
		$('.miner:nth-child(6)').removeClass('unavailable');
	};
};

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
	$('#costOne').text("$" + nFormatter(nextCost, 1));
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
	$('#costTwo').text("$" + nFormatter(nextCost, 1));
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
	$('#costThree').text("$" + nFormatter(nextCost, 1));
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
	$('#costFour').text("$" + nFormatter(nextCost, 1));
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
	$('#costFive').text("$" + nFormatter(nextCost, 1));
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
	$('#costSix').text("$" + nFormatter(nextCost, 1));
});

$('#upOne').click(function() {
	if (money >= 100) {
		upOne = 1;
		$(this).addClass('upactive');
	};
});

$('#upTwo').click(function() {
	if (money >= 500) {
		upTwo = 1;
		$(this).addClass('upactive');
	};
});

$('#upThree').click(function() {
	if (money >= 10000) {
		upThree = 1;
		$(this).addClass('upactive');
	};
});

$('.buildings').click(function() {
	$(this).addClass('buildingsactive');
	$('.miner').show();
});

$('.hack').click(function() {
	hackClick(10000000);
});

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
		};
	};
	return parseFloat(num).toFixed(digits).replace(rx, "$1");
};

window.setInterval(function() {
	hackClick((One * 0.01) + (Two * 0.1) + (Three * 0.8) + (Four * 4.7) + (Five * 26) + (Six * 140));
	$('.sec').text("$" + nFormatter((One * 0.1) + (Two * 1) + (Three * 8) + (Four * 47) + (Five * 260) + (Six * 1400), 1) + "/s");
	document.title = "Clicker - $" + nFormatter(money, 1);
	available();
	saveToCookies();
	$('#quantityOne').text(One);
	$('#quantityTwo').text(Two);
	$('#quantityThree').text(Three);
	$('#quantityFour').text(Four);
	$('#quantityFive').text(Five);
	$('#quantitySix').text(Six);
	$('#costOne').text("$" + nFormatter(Math.floor(15 * Math.pow(1.15, One)), 1));
	$('#costTwo').text("$" + nFormatter(Math.floor(100 * Math.pow(1.15, Two)), 1));
	$('#costThree').text("$" + nFormatter(Math.floor(1100 * Math.pow(1.15, Three)), 1));
	$('#costFour').text("$" + nFormatter(Math.floor(12000 * Math.pow(1.15, Four)), 1));
	$('#costFive').text("$" + nFormatter(Math.floor(130000 * Math.pow(1.15, Five)), 1));
	$('#costSix').text("$" + nFormatter(Math.floor(1400000 * Math.pow(1.15, Six)), 1));
}, 100);
