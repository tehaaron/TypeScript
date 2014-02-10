	import CardSuit = require('../app/PlayingCardDeck');
	export class CardManager {

		display() {
			var currentDeck = new PlayingCardDeck();
			currentDeck.Shuffle(1);
			var cards = currentDeck.getCard(Math.ceil(Math.random()*20));

			if (cards !== null && cards.length > 0) {
				var cardContainer = "<div style='float:left;'>";
				var marginLeft = 0;
				var marginTop = 0;
				for (var index = 0; index < cards.length; index++) {
					if (cards[index] && cards[index].CardImageLocation) {
						cardContainer = cardContainer + "<div style='float:left;margin-left:" + marginLeft + "px;margin-top:" + marginTop + "px;'><img width='100px' src='" + cards[index].CardImageLocation + "' alt='' />";
						marginLeft = marginLeft - 10;
						marginTop = marginTop + 30;
					}

					cardContainer = cardContainer + "</div>";
				}
				//alert(cardContainer);
				document.body.innerHTML = cardContainer;
				window.setInterval(this.display, 5000);
			}
		}
	}


document.onclick = () => {
	var imageDisplayer = new CardManager();
	imageDisplayer.display();
}