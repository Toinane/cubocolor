$(function(){

var map = {

	    0: "M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M:\
			M. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .M:\
			M. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .M:\
			M. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .M:\
			M. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .M:\
			M. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .M:\
			M. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .M:\
			M. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .M:\
			M. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .M:\
			M. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .M:\
			M. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .M:\
			M. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .M:\
			M. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .M:\
			M. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .M:\
			M. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .M:\
			M. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .M:\
			M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M:\
			",

	  	1: "W.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M:\
			W. . . . . . . . . . . . . . . . . . . . . . . . . .W:\
			W. . . . . . . . . . . . . . . . . . . . . . . . . .W:\
			W. . . . . . . . . . . . . . . . . . . . . . . . . .W:\
			W. . . . . . . . . . . . . . . . . . . . . . . . . .W:\
			W. . . . . . . . . . . . . . . . . . . . . . . . . .W:\
			W. . . . . .1. . . . . . . . . . . . . .2. . . . . .W:\
			W. . . . . . . . . . . . . . . . . . . . . . . . . .W:\
			W. . . . . . . . . . . . . . . . . . . . . . . . . .W:\
			W. . . . . . . . . . . . . . . . . . . . . . . . . .W:\
			W. . . . . . . . . . . . . . . . . . . . . . . . . .W:\
			W. . . . . . . . . . . . . . . . . . . . . . . . . .W:\
			W. . . . . . . . . . . . . . . . . . . . . . . . . .W:\
			M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M:\
			",

		2: "W.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M:\
			W.O.O.O.O.O.O.O.O.O.O.O.O.O.B.B.B.B.B.B.B.B.B.B.B.B.W:\
			W.O.O.O.O.O.O.O.O.O.O.O.O.B.B.B.B.B.B.B.B.B.B.B.B.B.W:\
			W.O.O.O.O.O.O.O.O.O.O.O.O.O.B.B.B.B.B.B.B.B.B.B.B.B.W:\
			W.O.O.O.O.O.O.O.O.O.O.O.O.B.B.B.B.B.B.B.B.B.B.B.B.B.W:\
			W.O.O.O.O.O.O.O.O.O.O.O.O.O.B.B.B.B.B.B.B.B.B.B.B.B.W:\
			W.O.O.O.O.O.1.O.O.O.O.O.O.B.B.B.B.B.B.B.2.B.B.B.B.B.W:\
			W.O.O.O.O.O.O.O.O.O.O.O.O.O.B.B.B.B.B.B.B.B.B.B.B.B.W:\
			W.O.O.O.O.O.O.O.O.O.O.O.O.B.B.B.B.B.B.B.B.B.B.B.B.B.W:\
			W.O.O.O.O.O.O.O.O.O.O.O.O.O.B.B.B.B.B.B.B.B.B.B.B.B.W:\
			W.O.O.O.O.O.O.O.O.O.O.O.O.B.B.B.B.B.B.B.B.B.B.B.B.B.W:\
			W.O.O.O.O.O.O.O.O.O.O.O.O.O.B.B.B.B.B.B.B.B.B.B.B.B.W:\
			W.O.O.O.O.O.O.O.O.O.O.O.O.B.B.B.B.B.B.B.B.B.B.B.B.B.W:\
			M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M.M:\
			"
	},
	game = {
		'width': 0,
		'height': 0,
		'toX': 0,
		'toY': 0
	},
	entity = {
		'player1': {
			'x': 0,
			'y': 0,
			'score': 0
		},
		'player2': {
			'x': 0,
			'y': 0,
			'score': 0
		}
	}

/////////////////////////
//  FUNCTIONS UTILITY  //
/////////////////////////
$.fn.hasAttr = function(name){  
   return (typeof this.attr(name) !== 'undefined' && this.attr(name) !== false);
};


//////////////////////////
//  FUNCTION STARTGAME  //
//////////////////////////
// DESC: charge le jeu  //
// INPUT: aucun         //
// OUTPUT: aucun        //
//////////////////////////
function startGame(){
	loaderLevel(1);
	timer(30);
	updateScore();
	$(document).keydown(keyboardEvent);
}


function timer(time){
	var counter=setInterval(timerCount, 1000), count = time;

	function timerCount(){
	 	count=count-1;
	  	if(count <= 0){
	     	clearInterval(counter);
	     	alert("stop !");
	     	return;
	  	}
	  	$('.timer').html(count);
	}
}


function loaderLevel(level){
	var i = 0, levelMap = '<tr>', xMap = 0, yMap = 0;

	level = String(map[level]);
	while(i < level.length){
		if(level.charAt(i) == '#'){
			levelMap += '<td id="'+xMap+'-'+yMap+'" class="black"></td>';
			++yMap;
		}
		if(level.charAt(i) == ' '){
			levelMap += '<td id="'+xMap+'-'+yMap+'"></td>';
			++yMap;
		}
		if(level.charAt(i) == '1'){
			levelMap += '<td id="'+xMap+'-'+yMap+'" class="player1 player1stone"></td>';
			entity.player1.x = xMap;
			entity.player1.y = yMap;
			++yMap;
			++entity.player1.score;
		}
		if(level.charAt(i) == '2'){
			levelMap += '<td id="'+xMap+'-'+yMap+'" class="player2 player2stone"></td>';
			entity.player2.x = xMap;
			entity.player2.y = yMap;
			++yMap;
			++entity.player2.score;
		}
		if(level.charAt(i) == 'O'){
			levelMap += '<td id="'+xMap+'-'+yMap+'" class="player1stone"></td>';
			++yMap;
			++entity.player1.score;
		}
		if(level.charAt(i) == 'B'){
			levelMap += '<td id="'+xMap+'-'+yMap+'" class="player2stone"></td>';
			++yMap;
			++entity.player2.score;
		}
		if(level.charAt(i) == 'M'){
			levelMap += '<td id="'+xMap+'-'+yMap+'" class="wall"></td>';
			++yMap;
		}
		if(level.charAt(i) == 'W'){
			levelMap += '<td id="'+xMap+'-'+yMap+'" class="walltop"></td>';
			++yMap;
		}
		if(level.charAt(i) == ':'){
			levelMap += '</tr><tr>';
			++xMap;
			game.toY = yMap;
			yMap = 0;
		}
		++i
	}
	game.toX = xMap;
	$("table").html(levelMap);
	console.log(game.toY);
}


///////////////////////////////
//  FUNCTION KEYBOARDEVENT   //
///////////////////////////////
// DESC: gestion colision et //
//       deplacement joueur  //
// INPUT: touche du clavier  //
// OUTPUT: aucun             //
///////////////////////////////
function keyboardEvent(key){
	if(key.which == 38){
		movePlayer('player2', 'player1', 'up');
	}
	else if(key.which == 90){
		movePlayer('player1', 'player2', 'up');
	}
	else if(key.which == 40){
		movePlayer('player2', 'player1', 'down');
	}
	else if(key.which == 83){
		movePlayer('player1', 'player2', 'down');
	}
	else if(key.which == 37){
		movePlayer('player2', 'player1', 'left');
	}
	else if(key.which == 81){
		movePlayer('player1', 'player2', 'left');
	}
	else if(key.which == 39){
		movePlayer('player2', 'player1', 'right');
	}
	else if(key.which == 68){
		movePlayer('player1', 'player2', 'right');
	}
	updateScore();
}


///////////////////////////////
//  FUNCTION MOVEPLAYER      //
///////////////////////////////
// DESC: deplacement joueur  //
// INPUT: direction          //
// OUTPUT: aucun             //
///////////////////////////////
function movePlayer(pl, pl2, way){
	x = entity[pl]['x'], y = entity[pl]['y'];
	switch(way){

		case 'up':
			if(x > 0){
				if(hit(pl, 'up', x, y)){
					$('#'+entity[pl]['x']+'-'+entity[pl]['y']).removeClass(pl);
					--entity[pl]['x'];
					$('#'+entity[pl]['x']+'-'+entity[pl]['y']).removeClass(pl2+'stone').addClass(pl).addClass(pl+'stone');
				}
			}
		break;
		case 'down':
			if(x < game.toX-1){
				if(hit(pl, 'down', x, y)){
					$('#'+entity[pl]['x']+'-'+entity[pl]['y']).removeClass(pl);
					++entity[pl]['x'];
					$('#'+entity[pl]['x']+'-'+entity[pl]['y']).removeClass(pl2+'stone').addClass(pl).addClass(pl+'stone');
				}
			}
		break;
		case 'left':
			if(y > 0){
				if(hit(pl, 'left', x, y)){
					$('#'+entity[pl]['x']+'-'+entity[pl]['y']).removeClass(pl);
					--entity[pl]['y'];
					$('#'+entity[pl]['x']+'-'+entity[pl]['y']).removeClass(pl2+'stone').addClass(pl).addClass(pl+'stone');
				}
			}
		break;
		case 'right':
			if(y < game.toY-1){
				if(hit(pl, 'right', x, y)){
					$('#'+entity[pl]['x']+'-'+entity[pl]['y']).removeClass(pl);
					++entity[pl]['y'];
					$('#'+entity[pl]['x']+'-'+entity[pl]['y']).removeClass(pl2+'stone').addClass(pl).addClass(pl+'stone');
				}
			}
		break;
	}
}


///////////////////////////////
//         FUNCTION HIT      //
///////////////////////////////
// DESC: gestion collision   //
// INPUT: direction, x, y    //
// OUTPUT: true ou false     //
///////////////////////////////
function hit(type, way, x, y, i = 0){
	var location;
	if(way == 'up'){
		--x;	
	}
	else if(way == 'down'){
		++x;
	}
	else if(way == 'left'){
		--y;
	}
	else if(way == 'right'){
		++y;
	}
	location = $('#'+x+'-'+y);

	if(location.hasClass('wall') || location.hasClass('walltop')){
		return false;
	}
	else if(location.hasClass('player1stone')){
		if(type == "player2"){
			++entity.player2.score;
			--entity.player1.score;
		}
		return true;
	}
	else if(location.hasClass('player2stone')){
		if(type == "player1"){
			++entity.player1.score;
			--entity.player2.score;
		}
		return true;
	}
	else{
		if(type == "player1"){
			++entity.player1.score;
		}
		else if(type == "player2"){
			++entity.player2.score;
		}
		return true;
	}
}

function updateScore(){
	$('.player1-score').html(entity.player1.score);
	$('.player2-score').html(entity.player2.score);
}
//#//#//#//#//#//#//#//
///////////////////////
// START SCRIPT HERE //
///////////////////////
startGame();

});