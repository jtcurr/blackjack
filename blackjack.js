//create an object for possible card combinations
const numbers = {
	Ace : 1,
	2 : 2,
	3 : 3,
	4 : 4,
	5 : 5,
	6 : 6,
	7 : 7,
	8 : 8,
	9 : 9,
	10 : 10,
	King : 10,
	Queen : 10,
	Jack : 10
}
//create an array to hold all the suits
let suits = ['spades', 'diamonds', 'hearts', 'clubs'];
//create a function that selects a random card from cards
let randomCard = (obj) => {
	  let card = {};
    let keys = Object.keys(obj)
    let number = keys[ keys.length * Math.random() << 0];
    let suit = suits[ suits.length * Math.random() << 0];
    card['suit'] = suit;
    card['card'] = number
    return card;
}
//create a variable to hold dealer score
let userScore = 0;
//create a variable to hold user score
let dealerScore = 0;
//create a flag to see if user has already clicked stay
let flag = false;
//create an array to hold values of ace as 1 and ace as 11;
let userResults = [];
//create an element to hold hit click
let hit = document.getElementById('hit');
//create an element to hold stay click
const stay = document.getElementById('stay');
//create a function that listens for 'hit me'clicks
hit.addEventListener('click', () => {
	if (flag === true ) {
		return;
	}
  //generate a card from card object
  let newCard = randomCard(numbers)
  //append the card to the dom
  $('#userCards').append(newCard.card + ' of ' + newCard.suit)
  $('#userCards').append('<br>')
  //check to see if ace will bring up to 21
  if (newCard.card === 'Ace') {
  	userScore += 11;
  	if(userScore === 21) {
  		$('#result').text('USER WINS')
  		return
  	} else {
  		userScore -= 11;
  	}
  }
  //add the card score to the user score
  userScore += numbers[newCard.card]
	$('#userScore').text(JSON.stringify(userScore))
	//if the users score goes over twenty one append 'BUST' to dom
	if(userScore > 21 ) {
		$('#result').text('BUST')
	  //return function
	  return
	}
	if(userScore === 21 ) {
		$('#result').text('USER WINS')
	  //return function
	  return
	}
})
//create a function that listens for 'stay'
stay.addEventListener('click', () => {
	//if user has already busted, do not run function
	if(userScore >= 21 ) {
	  return
	}
  //set flag equal to true
	flag = true;
  //while dealers score is less than 21
	while (dealerScore <= 21 ) {
    //generate a new card
		let dealerCard = randomCard(numbers);
    //append the card to dom
    $('#dealerCards').append(dealerCard.card + ' of ' + dealerCard.suit)
    $('#dealerCards').append('<br>')
    dealerScore += numbers[dealerCard.card];
    $('#dealerScore').text(JSON.stringify(dealerScore))
    //if the dealers score becomes higher than the users
    if (dealerScore > userScore && dealerScore < 21) {
      //append 'dealer wins' to dom
    	$('#result').text('Dealer wins')
      //return function
      return
    }
    //if score becomes higher than 21 append 'user wins to dom'
    if (dealerScore > 21) {
    	$('#result').text('User wins');
    	return
    }
  }
});


