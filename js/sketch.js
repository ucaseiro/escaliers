let myFont;
let img=[];
let carte;
let proba;
let cse
let saute
function preload() {
myFont = loadFont("font/gamay.otf");
for(i=35; i<37; i++){
	img[i-35] = loadImage('img/Cartes/carte'+i+'.png');
}
}

function setup() {

textFont(myFont);
createCanvas(windowWidth,windowHeight);
background(0)
carte = loadImage('img/Cartes/Fond-cartes.png')
proba = int(random(0,100))
fill(255)
textSize(50)
text(proba,110,110)
cse =int(random(0,58))
saute = int(random(-1,4))


}

function draw() {
    background(0)
image(carte, windowWidth/2-carte.width/4,windowHeight/2-carte.height/4,carte.width/2,carte.height/2);

if(proba <= 60){

    image (img[0],windowWidth/2-img[0].width/4,windowHeight/2-img[0].height/4,img[0].width/2,img[0].height/2)
}

else {
   
    image (img[1],windowWidth/2-img[1].width/4,windowHeight/2-img[1].height/4,img[1].width/2,img[1].height/2)
    textSize(17)
    text(saute,windowWidth/2.01+img[1].width/800, windowHeight/2+img[1].height/10)
}
}
