var res;
function main( resultfun)
{
var dice1 = Math.floor(Math.random() * 6) + 1;
document.getElementById('dice1').style.display = 'block';
document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
return dice1;
}
res=res+main();
document.getElementById('current').textContent = res;
