// this line of code sets up your canvas
var r = new Rune({
  container: "body",
  width: '100%',
  height: '100%'
});
// write your own code below this line

//r.line(50, 100, 1000, 1000);
//r.rect(12, 100, 100, 50);
//r.triangle(0, 0, 100, 0, 100, 100);
//r.circle(150 ,200, 75);
//r.ellipse(50, 60, 70, 100);
//r.polygon(100, 300)

//var potato = r.group(100,500);
//r.rect(100, 100, 100, 100, potato)
//	.rotate(30, 150, 150);


r.image('hi.gif', -160, 0, 0, 0)
.width(1600, true)
.height(1000, true);

r.image('telepo.png', -500, 80, 0, 0)
.width(2200, true)
.height(1600, true);

var writing = r.text("Six Six Six", 580, 225)
	.fontSize("100")
	.fontFamily("sans-serif")
	.fontWeight("bold")
	.textDecoration("none")
	.scale(0, 100, true);


r.on('update', function(){});

var telly = r.image('teletrump.png',0 ,-5000, 0, 0)
.width(980, true)
.height(900, true);

r.on('update', function(){
	telly.move(0,5,true);
});


var telly2 = r.image('telebum.png',6000 ,550, 0, 0)
.width(180, true)
.height(100, true);

r.on('update', function(){
	telly2.move(-5,0,true);
});



var telly3 = r.image('telebum.png',-1000 ,50, 0, 0)
.width(780, true)
.height(700, true);

r.on('update', function(){
	telly3.move(5,0,true);
});


var telly4 = r.image('teletrump.png',900 ,300, 0, 0)
.width(580, true)
.height(500, true);

r.on('update', function(){
	telly4.move(-7,-3,true);
});


var telly5 = r.image('teletrump.png',-5000 ,50, 0, 0)
.width(780, true)
.height(700, true);

r.on('update', function(){
	telly5.move(5,0,true);
});


var telly6 = r.image('telebum.png',-800 ,-500, 0, 0)
.width(480, true)
.height(480, true);

r.on('update', function(){
	telly6.move(8,5,true);
});

var telly7 = r.image('teletrump.png',-4000 ,20, 0, 0)
.width(680, true)
.height(600, true);

r.on('update', function(){
	telly7.move(5,0,true);
});

var telly8 = r.image('telebum.png',4000 ,50, 0, 0)
.width(980, true)
.height(900, true);

r.on('update', function(){
	telly8.move(-5,0,true);
});


var telly9 = r.image('teletrump.png',-3000 ,100, 0, 0)
.width(380, true)
.height(300, true);

r.on('update', function(){
	telly9.move(5,0.25,true);
});


var telly10 = r.image('teletrump.png',0 ,2000, 0, 0)
.width(980, true)
.height(900, true);

r.on('update', function(){
	telly10.move(0,-5,true);
});

//hi

var telly11 = r.image('telebum.png',0 ,-7000, 0, 0)
.width(980, true)
.height(900, true);

r.on('update', function(){
	telly11.move(0,5,true);
});


var telly12 = r.image('telebum.png',8000 ,550, 0, 0)
.width(180, true)
.height(100, true);

r.on('update', function(){
	telly12.move(-5,0,true);
});


var telly13 = r.image('teletrump.png',-9000 ,700, 0, 0)
.width(780, true)
.height(700, true);

r.on('update', function(){
	telly13.move(5,0,true);
});


var telly14 = r.image('teletrump.png',10000 ,-444, 0, 0)
.width(880, true)
.height(800, true);

r.on('update', function(){
	telly14.move(-5, -1,true);
});


var telly15 = r.image('telebum.png',-11000 ,50, 0, 0)
.width(780, true)
.height(700, true);

r.on('update', function(){
	telly15.move(5,0,true);
});


var telly16 = r.image('teletrump.png',-12000 ,-750, 0, 0)
.width(480, true)
.height(480, true);

r.on('update', function(){
	telly16.move(8,5,true);
});

var telly17 = r.image('telebum.png',-13000 ,20, 0, 0)
.width(680, true)
.height(600, true);

r.on('update', function(){
	telly17.move(5,0,true);
});

var telly18 = r.image('teletrump.png',14000 ,50, 0, 0)
.width(980, true)
.height(900, true);

r.on('update', function(){
	telly18.move(-5,0,true);
});


var telly19 = r.image('teletrump.png',-15000 ,500, 0, 0)
.width(380, true)
.height(300, true);

r.on('update', function(){
	telly19.move(5,0.25,true);
});


var telly20 = r.image('teletrump.png',0 ,16000, 0, 0)
.width(980, true)
.height(900, true);

r.on('update', function(){
	telly20.move(0,-5,true);
});

r.play()

r.play();


// r.rect(100, 100, 100, 100)
// 	.rotate(45, 150, 150)
// 	.move(100, 100)
// 	.move(20, 20, true);
// 	r.play



// and ab;ove this line
// this line of code draws your shapes
r.draw();
