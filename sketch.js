var canvas,gameState,contestantCount,database,quiz,question,contestant;

gameState=0;

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
  quiz= new Quiz();
  quiz.getState();
  quiz.start();
  

}


function draw(){
  background("pink");

  
}
