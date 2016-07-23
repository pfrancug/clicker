


var money = 0;
var beginner = 0;
var intermediate = 0;
var advanced = 0;
var legendary = 0;

function hackClick(number) {
	money = money + number;
	document.getElementById("money").innerHTML = money;
};

function buyBeginner() {
	var beginnerCost = Math.floor(15 * Math.pow(1.2, beginner));
	if (money >= beginnerCost) {
		beginner = beginner + 1;
		money = money - beginnerCost;
		document.getElementById('beginner').innerHTML = beginner;
		document.getElementById('money').innerHTML = money;
	};
	var nextCost = Math.floor(15 * Math.pow(1.2, beginner));
	document.getElementById('beginnerCost').innerHTML = nextCost;
};

function buyIntermediate() {
	var intermediateCost = Math.floor(100 * Math.pow(1.4, intermediate));
	if (money >= intermediateCost) {
		intermediate = intermediate + 1;
		money = money - intermediateCost;
		document.getElementById('intermediate').innerHTML = intermediate;
		document.getElementById('money').innerHTML = money;
	};
	var nextCost = Math.floor(100 * Math.pow(1.4, intermediate));
	document.getElementById('intermediateCost').innerHTML = nextCost;
};

function buyAdvanced() {
	var advancedCost = Math.floor(1100 * Math.pow(1.6, advanced));
	if (money >= advancedCost) {
		advanced = advanced + 1;
		money = money - advancedCost;
		document.getElementById('advanced').innerHTML = advanced;
		document.getElementById('money').innerHTML = money;
	};
	var nextCost = Math.floor(1100 * Math.pow(1.6, advanced));
	document.getElementById('advancedCost').innerHTML = nextCost;
};
function buyLegendary() {
	var legendaryCost = Math.floor(11000 * Math.pow(1.8, legendary));
	if (money >= legendaryCost) {
		legendary = legendary + 1;
		money = money - legendaryCost;
		document.getElementById('legendary').innerHTML = legendary;
		document.getElementById('money').innerHTML = money;
	};
	var nextCost = Math.floor(11000 * Math.pow(1.8, legendary));
	document.getElementById('legendaryCost').innerHTML = nextCost;
};

function set_cookie ( cookie_name, cookie_value, lifespan_in_days, valid_domain )
{
  var domain_string = valid_domain ? ("; domain=" + valid_domain) : '' ;
  document.cookie = cookie_name + "=" + encodeURIComponent( cookie_value ) +
      "; max-age=" + 60 * 60 * 24 * lifespan_in_days +
      "; path=/" + domain_string ;
}

window.setInterval(function() {
	hackClick(beginner);
	hackClick(intermediate * 1);
	hackClick(advanced * 15);
	hackClick(legendary * 50);
	document.title = "Money: " + money;

}, 1000);