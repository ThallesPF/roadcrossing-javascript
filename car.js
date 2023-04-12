//carro
//variaveis
let xCars = [800, 800, 800, 0, 0, 0];
let yCars = [50, 122, 186, 263, 329, 397];
let largCars = 80;
let altCars = 50;
let speedCars = [-8, -5, -6, +6, +7, +3.5];
//imagem
function drawCar(){
  for (let i = 0; i < imagesCars.length; i++ ){
   image(imagesCars[i], xCars[i], yCars[i], largCars, altCars) 
  }
} 
//movimento
function moveCar(){
  for (let i = 0; i < imagesCars.length; i++){
   xCars[i] += speedCars[i]
  }
}
//looping
function backToBegin(){
 if (xCars[0] < -50){
    xCars[0] = 800
  }
 if (xCars[1] < -50){
    xCars[1] = 800
 }
 if (xCars[2] < -50){
    xCars[2] = 800
 }
 if (xCars[3] > 850){
    xCars[3] = 0
  }
  if (xCars[4] > 850){
    xCars[4] = 0
  }
  if (xCars[5] > 850){
    xCars[5] = 0
  }
}