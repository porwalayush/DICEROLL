
var c=0;
function main(resultfun)
{
var dice1 = Math.floor(Math.random() * 6) + 1;
document.getElementById('dice1').style.display = 'block';
document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
c=c+dice1;
document.getElementById('current').textContent ="SCORE"+" "+c;
}
function start(){
	c=0;
var timeleft = 20;
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "GAME OVER"
    document.getElementById("btnPlaceOrder").disabled = true; 
  }
}, 1000);
}