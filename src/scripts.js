const cards = document.querySelectorAll('.flip-card');

let hasFlippedCard = false;
let lockBoard = false;

setPos();

function flipCard() {
  if (lockBoard) return;
  var x = this.getAttribute('data-x');
  var y = this.getAttribute('data-y');
  flip(this);
  flipNeighbours(x,y);

}

function flip(card)
{
	if (card == null) {
		return;
	}
	card.classList.toggle('flip');
	if (!hasFlippedCard) {
    hasFlippedCard = true;

    return;
  }
}

function flipNeighbours(x,y)
{
	x = parseInt(x);
	y = parseInt(y);
	
	var newx = x;
	var newy = y;
	
	// Left card
	newx = x;
	newx--;
	
	var card = document.querySelector('[data-x="' + newx + '"][data-y="' + newy + '"] ');
	flip(card);

	// Right card
	newx = x+1;
	var card = document.querySelector('[data-x="' + newx + '"][data-y="' + newy + '"] ');
	flip(card);
	
	// Top card
	newx = x;
	newy = y-1;
	var card = document.querySelector('[data-x="' + newx + '"][data-y="' + newy + '"] ');
	flip(card);
	
	// Bottom card
	newx = x;
	newy = y+1;
	var card = document.querySelector('[data-x="' + newx + '"][data-y="' + newy + '"] ');
	flip(card);
}
  
function setPos() {
	
	cards.forEach(function(card, index){
		var pos = getMatrix(index);
		
		card.setAttribute('data-x', pos[0]);
		card.setAttribute('data-y', pos[1]);
	});
	
}

function getMatrix(pos)
{
	var x = ((pos) % 4) + 1;
	var y = Math.ceil((pos + 1) / 4);
	return [x, y];
}
  
cards.forEach(card => card.addEventListener('click', flipCard));

cards.forEach(card => card.addEventListener('click', flipCard));