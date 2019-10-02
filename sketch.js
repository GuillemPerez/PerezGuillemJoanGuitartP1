let colors= [];  //Es declaren les variables 
let bg;
let n = 0;
let control = 0;
let alpha = 0;
let comptador = 0;
let comptador1 = 50;
let comptador2 = 0;
let comptador3 = 50;
let c1,c2,c3;

function setup() {
  
  colors = [color(255,0,0),color(0,0,235),color(255,255,255),color(255,237,40)]; //Es fiquen quatre colors dins de l'array 
  var x = 300;  //Es declaren més variables
  var y = 40;
  var cn = createCanvas(900,900); //Es crea el canvas de 900 X 900 px
  
  cn.position(x,y); //I la seva posició dins de la pagína web
  


  R1 = new Rect(50,0,20,0,0,350);  // Aquí declares les rectes grogues que creixen
  R2 = new Rect(80,0,20,0,0,0);    // i ja els hi doncs els seus atributs com posició i gruix
  R3 = new Rect(150,0,20,0,0,0);
  R4 = new Rect(250,0,20,0,0,0);
  R5 = new Rect(400,0,20,0,0,0);
  R6 = new Rect(450,0,20,0,0,0);
  R7 = new Rect(765,0,20,0,0,0);
  R8 = new Rect(800,0,20,0,0,450);
  R9 = new Rect(835,0,20,0,0,600);
  R10 = new Rect(870,0,20,0,0,0);
  R11 = new Rect(0,30,20,20,0,0);
  R12 = new Rect(0,150,20,20,0,0);
  R13 = new Rect(0,300,20,20,0,0);
  R14 = new Rect(0,450,20,20,0,0);
  R15 = new Rect(0,500,20,20,0,700);
  R16 = new Rect(0,540,20,20,0,0);
  R17 = new Rect(0,600,20,20,0,600);
  R18 = new Rect(0,780,20,20,0,0);
  R19 = new Rect(0,850,20,20,0,0);
   
  for(let i = 0; i<=15; i++){
    c1 = color(13,89,255,i);  // Aquí es canvia la opacitat dels quadrats per què apareixin
    c2 = color(255,0,0,i);
    c3 = color(255,237,40,i);
    c4 = color(220,0,0,i);
  }
  

  
}

function draw() {
  
  background(255); //Se li dóna color al fons 
  
  if(comptador<=50){
    fill(c1);   //Es fica delay per què no es canvii molt ràpid el color dels quadrats

  } else {
    c1 = RandColor(); //Es canvia el color dels quadrats
    fill(c1);
    comptador = 0;
  }
  
 rect(100,180,70,70); //Es creen uns dels quadrats 
 rect(530,170,120,130);
 rect(270,670,60,60);
 rect(540,380,180,30);
 

 if(comptador1<=50){ //Aquí es fa el mateix peró els quadrats començen amb un altre color 
  fill(c2);
  

} else {
  c2 = RandColor();
  fill(c2);
  comptador1 = 0;
}
 rect(280,50,80,80);
 rect(170,470,80,30);
 rect(530,200,120,70);
 rect(600,470,70,120);
comptador1+=1;

if(comptador2<=50){  //Aquí es fa el mateix peró els quadrats començen amb un altre color 
  fill(c3);


} else {
  c3 = RandColor();
  fill(c3);
  comptador2 = 0;
}
 rect(170,225,80,65);
 rect(190,300,40,170);
 rect(300,470,50,20);
 rect(550,220,80,40);
comptador2+=1;


if(comptador3<=50){  //Aquí es fa el mateix peró els quadrats començen amb un altre color 
  fill(c1);

} else {
  c4 = RandColor();
  fill(c4);
  comptador3 = 0;
}
 rect(280,130,80,20);
 rect(300,70,40,40);
 rect(190,241,40,32);
 rect(200,350,20,40);
 rect(630,380,40,30);
comptador3+=1;

// Aquí els comentari es repeteix 19 cops ja que el codi és el mateix a tots els casos.


  //R1

  R1.display();  //Es crida la funció display, s'explica més tard el seu funcionament
  R1.moveY();    //Es crida la funció moveY, S'explica més tard el seu funcionament
  
  if(n % 15 && R1.numSquares<=10) { //Es fa un for per crear quatre quadrats de diferent color dins de la línea
    var S = new squares(R1.x, random(R1.y, 300));// Es fa un random de la posicio del quadrat a la línea, per què cada cop que es reiniciï canviin de lloc i color
    R1.sq.push(S); //Es fican els quadrats dins l'array sq
    R1.numSquares+=1; //suma 1 a numSquares
    
  }

  R1.updatesq(); //Es crida la funció updatesq, s'explica més tard
  
//R2

  R2.display();  // Es repateix per R2
  R2.moveY();
  if(n % 15 && R2.numSquares<=10) {
    var S = new squares(R2.x, random(R2.y, 900));
    R2.sq.push(S);
    R2.numSquares+=1;
    
}

R2.updatesq();


//R3

R3.display(); // Es repateix per R3
R3.moveY();
if(n % 15 && R3.numSquares<=10) {
var S = new squares(R3.x, random(R3.y, 900));
R3.sq.push(S);
R3.numSquares+=1;

}

R3.updatesq();

//R4

R4.display(); // Es repateix per R4
R4.moveY();
if(n % 15 && R4.numSquares<=10) {
var S = new squares(R4.x, random(R4.y, 900));
R4.sq.push(S);
R4.numSquares+=1;

}

R4.updatesq();
n +=1; 


//R5

R5.display();  // Es repateix per R5
R5.moveY();
if(n % 15 && R5.numSquares<=10) {
var S = new squares(R3.x, random(R4.y, 900));
R5.sq.push(S);
R5.numSquares+=1;

}

R5.updatesq();
n +=1; 

//R6

R6.display();  // Es repateix per R6
R6.moveY();
if(n % 15 && R6.numSquares<=10) {
var S = new squares(R6.x, random(R6.y, 900));
R6.sq.push(S);
R6.numSquares+=1;

}

R6.updatesq();
n +=1; 
//R7

R7.display();  // Es repateix per R7
R7.moveY();
if(n % 15 && R7.numSquares<=10) {
var S = new squares(R7.x, random(R7.y, 900));
R7.sq.push(S);
R7.numSquares+=1;

}

R7.updatesq();
n +=1; 
//R8

R8.display();  // Es repateix per R8
R8.moveY();
if(n % 15 && R8.numSquares<=10) {
var S = new squares(R8.x, random(R8.y, 450));
R8.sq.push(S);
R8.numSquares+=1;

}

R8.updatesq();
n +=1;
//R9

R9.display(); // Es repateix per R9
R9.moveY();
if(n % 15 && R9.numSquares<=10) {
var S = new squares(R9.x, random(R9.y, 600));
R9.sq.push(S);
R9.numSquares+=1;

}

R9.updatesq();
n +=1; 
//R10

R10.display(); // Es repateix per R10
R10.moveY();
if(n % 15 && R10.numSquares<=10) {
var S = new squares(R10.x, random(R10.y, 900));
R10.sq.push(S);
R10.numSquares+=1;

}

R10.updatesq();
n +=1; 

//R11

R11.display(); // Es repateix per R11
R11.moveX();
if(n % 15 && R11.numSquares<=10) {
var S = new squares(random(R11.x, 900),R11.y );
R11.sq.push(S);
R11.numSquares+=1;

}

R11.updatesq();
n +=1; 
//R12

R12.display();  // Es repateix per R12
R12.moveX();
if(n % 15 && R12.numSquares<=10) {
var S = new squares(random(R12.x, 900),R12.y );
R12.sq.push(S);
R12.numSquares+=1;

}

R12.updatesq();
n +=1; 
//R13

R13.display(); // Es repateix per R13
R13.moveX();
if(n % 15 && R13.numSquares<=10) {
var S = new squares(random(R13.x, 900),R13.y );
R13.sq.push(S);
R13.numSquares+=1;

}

R13.updatesq();
n +=1;
//R14

R14.display(); // Es repateix per R14
R14.moveX();
if(n % 15 && R14.numSquares<=10) {
var S = new squares(random(R14.x, 900),R14.y );
R14.sq.push(S);
R14.numSquares+=1;

}

R14.updatesq();
n +=1; 
//R15

R15.display(); // Es repateix per R15
R15.moveX();
if(n % 15 && R15.numSquares<=10) {
var S = new squares(random(R15.x, 700),R15.y );
R15.sq.push(S);
R15.numSquares+=1;

}

R15.updatesq();
n +=1; 

//R16

R16.display();  // Es repateix per R16
R16.moveX();
if(n % 15 && R16.numSquares<=10) {
var S = new squares(random(R16.x, 900),R16.y );
R16.sq.push(S);
R16.numSquares+=1;

}

R16.updatesq();
n +=1; 

//R17

R17.display();  // Es repateix per R17
R17.moveX();
if(n % 15 && R17.numSquares<=10) {
var S = new squares(random(R17.x, 600),R17.y );
R17.sq.push(S);
R17.numSquares+=1;

}

R17.updatesq();
n +=1; 
//R18

R18.display(); // Es repateix per R18
R18.moveX();
if(n % 15 && R18.numSquares<=10) {
var S = new squares(random(R18.x, 900),R18.y );
R18.sq.push(S);
R18.numSquares+=1;

}

R18.updatesq();
n +=1; 
//R19
 
R19.display();  // Es repateix per R19
R19.moveX();
if(n % 15 && R19.numSquares<=10) {
var S = new squares(random(R19.x, 900),R19.y );
R19.sq.push(S);
R19.numSquares+=1;

}

R19.updatesq();
n +=1; 
comptador+=1;

fill(0);
rect(0,0,20,1000)
rect(0,0,1000,20)
rect(0,880,1000,20)
rect(880,0,20,1000)


}

function RandColor() {
var c = colors[Math.floor(Math.random() * colors.length)]; //Es crea una funció que serveix per què et doni un color random de l'array colors
return c;
}

function mouseClicked() {
  R1.resetX();
  R2.resetX();
  R3.resetX();
  R4.resetX();
  R5.resetX();
  R6.resetX();
  R7.resetX();
  R8.resetX();
  R9.resetX();
  R10.resetX();
  R11.resetY();
  R12.resetY();
  R13.resetY();
  R14.resetY();
  R15.resetY();
  R16.resetY();
  R17.resetY();
  R18.resetY();
  R19.resetY();

}


class Rect { 
constructor(x,y,a,b,numS,t) { //Aquí es crea la classe amb els atributs que ja ens donen al principi 
  this.x = x;
  this.y = y;
  this.a = a;
  this.b = b;
  this.sq = [];
  this.numSquares = numS;
  this.tope=t;
}

moveX() {
  if(this.tope == 0 || this.a < this.tope){
    this.a += 10;    //Funció que fa que les lineas grogues horitzontals creixin cap a la dreta
  } 
  
}

moveY() {
  if(this.tope == 0 || this.b < this.tope){
    this.b += 10;   // Funció que fa que les lineas verticals grogues creixin cap a dalt
  } 
}

resetX(){
  this.b = 20;
}

resetY(){
  this.a = 20;
}

display() {

  stroke(200,100,23, 0) // Se li atribueix un color de línea i de dins
  fill(255, 242, 44);
  rect(this.x,this.y, this.a, this.b); //Es dibuixa la recta o quadrat
  
}

updatesq() {
  for (let i = 0; i<this.sq.length; i++) {
    this.sq[i].display();  //Funció que recorra l'array sq i els printa
  }
}



  
}

class squares {
  constructor(x,y) { //Aquí es crea la classe amb els atributs que ja ens donen al principi
    this.x = x;
    this.y = y;
    this.a = 20;
    this.b = random(0,5);
    this.Color = RandColor();
  }

  display() {
    
    fill(this.Color); //Funció que dibuixa els quadrats 
    rect(this.x,this.y, 20, 20);
  }







}