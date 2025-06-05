let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let raqueteComprimento = 10;
let raqueteAltura = 100;

let xMinhaRaquete = 1;
let yMinhaRaquete = 150

 function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(33);
  actorBolinha();
  minhaRaquete();
  colisaoMinhaRaquete();
} 

function actorBolinha()
{
  circle(xBolinha, yBolinha, diametro);
  
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
  if(xBolinha > width || xBolinha < 0)
    {
      velocidadeXBolinha *= -1;
    }
  
  if(yBolinha > height || yBolinha < 0)
    {
       velocidadeYBolinha *= -1;
    }
  
}


function minhaRaquete()
{
  rect(xMinhaRaquete,yMinhaRaquete,raqueteComprimento,raqueteAltura);
  
  if(keyIsDown(UP_ARROW) && yMinhaRaquete > 0) 
    {
      yMinhaRaquete -= 5;
    }
  
  if(keyIsDown(DOWN_ARROW) && yMinhaRaquete < height - raqueteAltura) 
    {
      yMinhaRaquete += 5;
    }
}

function colisaoMinhaRaquete()
{
  let colidiu = collideRectCircle(xMinhaRaquete,yMinhaRaquete,raqueteComprimento,raqueteAltura, xBolinha, yBolinha, diametro);
  
  if(colidiu)
    {
      velocidadeXBolinha *= -1;
    }
}







