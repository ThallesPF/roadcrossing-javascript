//personagem
//variaveis
let xCaracter = 150;
let yCaracter = 465;
let colision = false;
let score = 0;
//imagem
function drawCaracter(){
  image(imageCaracter, xCaracter, yCaracter, 38, 28)
}
//movimento
function moveCaracter(){
  if (keyIsDown(87)){
    yCaracter -= 3.5;
  } 
  if (keyIsDown(83)){
    if (moveCallow()){
    yCaracter += 3.5;
    }
  }
  if (yCaracter < 0){
    yCaracter = 465;
  }
}
function moveCallow(){
  return yCaracter < 465
}
//função colisão
function verifeColision(){
  for (let i = 0; i < imagesCars.length; i++){
    colision = collideRectCircle(xCars[i],yCars[i], largCars, altCars, xCaracter, yCaracter, 15)
    if (colision){
      yCaracter = 465;
      if (score > 0){
      score -= 1;
      }
    }
  }
}
//pontos
function showPoints(){
  textAlign(CENTER)
  textSize(25)
  text(score, width /5, 33)
}
function addPoints(){
  if (yCaracter < 3.1){
    score += 1;
  }
}
