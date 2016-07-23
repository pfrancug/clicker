var money = 0;
var One = 0;
var Two = 0;
var Three = 0;
var Four = 0;
var Five = 0;
var Six = 0;

function hackClick(number) {
	money = money + number;
	$('#money').text("$" + Math.round(money));
};

$('.miner:nth-child(1)').click(function() {
	var costOne = Math.floor(15 * Math.pow(1.15, One));
	if (money >= costOne) {
		One = One + 1;
		money = money - costOne;
		$('#quantityOne').text(One);
		$('#money').text("$" + Math.round(money));
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
		$('#money').text("$" + Math.round(money));
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
		$('#money').text("$" + Math.round(money));
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
		$('#money').text("$" + Math.round(money));
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
		$('#money').text("$" + Math.round(money));
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
		$('#money').text("$" + Math.round(money));
		$('.miner:nth-child(7)').fadeIn(800);
	};
	var nextCost = Math.floor(1400000 * Math.pow(1.15, Six));
	$('#costSix').text("$" + nextCost);
});

$('.info').click(function() {
	$('.info, .buildings, .hack').hide();
});

$('.buildings').click(function() {
	$('.miner').show();
});

window.setInterval(function() {
	hackClick(One * 0.1);
	hackClick(Two * 0.2);
	hackClick(Three * 0.8);
	hackClick(Four * 4.7);
	hackClick(Five * 26);
	hackClick(Six * 140);
	$('#money').text("$" + Math.round(money));
}, 100);