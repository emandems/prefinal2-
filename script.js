//alert ('Hello')

var tweetList=[
	"@CNN just doesn't get it, and that's why their ratings are so low- and getting worse. Boring anit-Trump panelists, mostly losers in life!",
	"Will be joining @jimmyfallon on @FallonTonight at 11:35pmE tonight. Enjoy!",
	"hello",
	"I am Trump",
]

var tweet= 0;


function pickTweet(myArray) {
	var myTweet = myArray [Math.floor(Math.random()*myArray.length)];
	return myTweet
};


function Tweet() {

	//var theTweet= document.getElementsByTagName('tweet')[tweet];

	words = pickTweet(tweetList);

	$('div#content').html(words);

	$('.tweet').hide();
	$('.tweet').show (300);
};

$('.button1').click(Tweet);

$('.tweet').hide();



	$(document).ready(function CNNclick(){
		$(".button2").on({
			click:function(){
				$("#p1").hide(200);
				$('.emotions').hide();
				$(".emotions").fadeIn(300);
				$(".tweet").hide();
				$('.happy').click(happyCNN);
				$('.neutral').click(neuCNN);
				$('.mad').click(madCNN);
				$('.angry').click(angryCNN);
				
				
			},
		});
	});

$(document).ready(function NYTclick(){
	$(".button3").on({
		click:function(){
			$("#p1").hide(200);
				$('.emotions').hide();
				$(".emotions").fadeIn(300);
				$(".tweet").hide();
				$('.happy').click(happyNYT);
				$('.neutral').click(neuNYT);
				$('.mad').click(madNYT);
				$('.angry').click(angryNYT);
		},
	});
});

$(document).ready(function FOXclick(){
	$(".button4").on({
		click:function(){
			$("#p1").hide(200);
				$('.emotions').hide();
				$(".emotions").fadeIn(300);
				$(".tweet").hide();
				$('.happy').click(happyFOX);
				$('.neutral').click(neuFOX);
				$('.mad').click(madFOX);
				$('.angry').click(angryFOX);
		},
	});
});

$(document).ready(function FORDclick(){
	$(".button5").on({
		click:function(){
			$("#p1").hide(200);
				$('.emotions').hide();
				$(".emotions").fadeIn(300);
				$(".tweet").hide();
				$('.happy').click(happyFORD);
				$('.neutral').click(neuFORD);
				$('.mad').click(madFORD);
				$('.angry').click(angryFORD);
		},
	});
});

$(document).ready(function BOEclick(){
	$(".button6").on({
		click:function(){
			$("#p1").hide(200);
				$('.emotions').hide();
				$(".emotions").fadeIn(300);
				$(".tweet").hide();
				$('.happy').click(happyBOE);
				$('.neutral').click(neuBOE);
				$('.mad').click(madBOE);
				$('.angry').click(angryBOE);
		},
	});
});

$(document).ready(function(){
	$(".emotions").on({
		click: function(){
			$("#pe").hide(200);

		},
	});
});



	//$(".button2").on({
	//	mouseenter: function(){
	//		$(this).css("background-color" , "e60000")
	//	},
	//	click: function(){
	//		$(this).css("background-color" , "e60000");
	//	},
	//	blur: function(){
	//		$(this).css("background-color", "#b62f2f");
	//	},
	//	mouseleave: function(){
	//		$(this).css("background-color" , "b62f2f");
	//	},
	//});



function happyCNN (){

	newTweet= document.write(cnnData[0].HAPPY);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};



//$('.tweet').hide();

//function tweetValue(string, number){
//	this.string= string; 
//	this.number= number;
//}

//tweetValue.prototype.amount = 0.05;

//var fred= new tweetValue("Fred", 1970);
//document.getElementById("demo")= fred.salary;

//	document.getElementById("demo").innerHTML= neutralCNN.ar;

//document.getElementById("#meter").innerHTML= neutralCNN.ar;

function neuCNN () {
	newTweet= document.write(cnnData[0].NEUTRAL);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
	//meter = setInputValue("#meter", 0.05);
	//$('#meter').appendTo($("0.05").parent());
	//$('#meter').val($('#test').val());
};

//$('.neutral').click(neuCNN);



function madCNN () {	
	var newTweet= document.write(cnnData[0].MAD);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

function angryCNN() {
	var newTweet= document.write(cnnData[0].ANGRY);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};


function happyNYT(){
	var newTweet= document.write(nytData[0].HAPPY);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

function neuNYT () {
	newTweet= document.write(nytData[0].NEUTRAL);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

function madNYT () {
	newTweet= document.write(nytData[0].MAD);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

function angryNYT () {
	newTweet= document.write(nytData[0].ANGRY);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

function happyFOX () {
	newTweet= document.write(foxData[0].HAPPY);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

function neuFOX () {
	newTweet= document.write(foxData[0].NEUTRAL);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

function madFOX () {
	newTweet= document.write(foxData[0].MAD);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

function angryFOX () {
	newTweet= document.write(foxData[0].ANGRY);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

function happyFORD () {
	newTweet= document.write(fordData[0].HAPPY);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

function neuFORD () {
	newTweet= document.write(fordData[0].NEUTRAL);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

function madFORD () {
	newTweet= document.write(fordData[0].MAD);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

function angryFORD () {
	newTweet= document.write(fordData[0].ANGRY);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

function happyBOE () {
	newTweet= document.write(boeingData[0].HAPPY);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

function neuBOE () {
	newTweet= document.write(boeingData[0].NEUTRAL);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

function madBOE () {
	newTweet= document.write(boeingData[0].MAD);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

function angryBOE () {
	newTweet= document.write(boeingData[0].ANGRY);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

//$('.mad').click(madCNN);

//function madCNNbutton () {
//	if ($('.button2').click ()) {
//		$('.mad').click(madCNN);

//	},
//};

//function meter{

//	var input= document.getElementById("#meter");

//}
//function setInputValue(input_id, val) {
//    document.getElementById(input_id).setAttribute('value', val);
//}

//var numbers = [
//	"0.05",
//	]
