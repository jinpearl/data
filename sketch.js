var url = "https://api.nasa.gov/planetary/apod?api_key=";
var apikey = "IjPEwaBLdaQFTUJooK8D74lmgr1PgMnIA8RebzbQ";
var y = 2017;
var m = 04;
var d = 16;

var gotData;

var request = url + apikey + "&date=" + y + "-" + m + "-" + d;

function preload() {
	loadJSON(request, gotData);


}

function setup() {
	createCanvas(800, 600);
	console.log(request);
}

function gotData(data) {
	//console.log(data);
	picture = data;
	//loadimage(picture.url);
}

function draw() {

	background(220);
	textSize(40);
	text(picture.date, 20, 20);
	text(picture.title, 20, 75);
	//loadImage(picture.url, 20, 40);
	textSize(20);
	text(picture.explanation, 20, 100, 600, 600);


}