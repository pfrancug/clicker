/************ vars ***********/

var money = 0;
var One = 0;
var Two = 0;
var Three = 0;
var Four = 0;
var Five = 0;
var Six = 0;

/************ money ***********/

function hackClick(number) {
	money = money + number;
	$('#money').text("$" + parseFloat(Math.round(money * 100) / 100).toFixed(1));
};

/************ miners ***********/

$('.miner:nth-child(1)').click(function() {
	var costOne = Math.floor(15 * Math.pow(1.15, One));
	if (money >= costOne) {
		One = One + 1;
		money = money - costOne;
		$('#quantityOne').text(One);
		$('#money').text("$" + parseFloat(Math.round(money * 100) / 100).toFixed(1));
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
		$('#money').text("$" + parseFloat(Math.round(money * 100) / 100).toFixed(1));
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
		$('#money').text("$" + parseFloat(Math.round(money * 100) / 100).toFixed(1));
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
		$('#money').text("$" + parseFloat(Math.round(money * 100) / 100).toFixed(1));
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
		$('#money').text("$" + parseFloat(Math.round(money * 100) / 100).toFixed(1));
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
		$('#money').text("$" + parseFloat(Math.round(money * 100) / 100).toFixed(1));
		$('.miner:nth-child(7)').fadeIn(800);
	};
	var nextCost = Math.floor(1400000 * Math.pow(1.15, Six));
	$('#costSix').text("$" + nextCost);
});

/************ admin ***********/

$('.admin').click(function() {
	$('.adminpanel').toggle();
	nFormatter(tests);
});

$('.buildings').click(function() {
	$(this).addClass('buildingsactive');
	$('.miner').show();
});

/************ formatter ***********/

function nFormatter(num, digits) {
  var si = [
    { value: 1E18, symbol: "E" },
    { value: 1E15, symbol: "P" },
    { value: 1E12, symbol: "T" },
    { value: 1E9,  symbol: "G" },
    { value: 1E6,  symbol: "M" },
    { value: 1E3,  symbol: "k" }
  ], rx = /\.0+$|(\.[0-9]*[1-9])0+$/, i;
  for (i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
    }
  }
  return parseFloat(num).toFixed(digits).replace(rx, "$1");
}

var tests = [
  { num: 1234, digits: 1 },
  { num: 100000000, digits: 1 }, 
  { num: 299792458, digits: 1 },
  { num: 759878, digits: 1 },
  { num: 759878, digits: 0 },
  { num: 123, digits: 1 },
  { num: 123.456, digits: 1 },
  { num: 123.456, digits: 2 },
  { num: 123.456, digits: 4 }
], i;
for (i = 0; i < tests.length; i++) {
  console.log("nFormatter(" + tests[i].num + ", " + tests[i].digits + ") = " + nFormatter(tests[i].num, tests[i].digits));
}

/************ timer ***********/

window.setInterval(function() {
	hackClick((One * 0.01) + (Two * 0.1) + (Three * 0.8) + (Four * 4.7) + (Five * 26) + (Six * 140));
	$('.sec').text("$" + parseFloat(Math.round(((One * 0.1) + (Two * 1) + (Three * 8) + (Four * 47) + (Five * 260) + (Six * 1400)) * 100) / 100).toFixed(1) + "/s");	
	document.title = "Clicker - $" + parseFloat(Math.round(money * 100) / 100).toFixed(1);
;
}, 100);