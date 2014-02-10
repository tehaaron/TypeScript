var CardSuit = require('../app/PlayingCard');
var PlayingCardDeck = (function () {
    function PlayingCardDeck() {
        this.Cards = null;
        this.Cards = [];

        this.addCard(new CardGame.PlayingCard("Two", "2", "images/diamonds_2.png", CardSuit.Diamond));
        this.addCard(new CardGame.PlayingCard("Three", "3", "images/diamonds_3.png", CardSuit.Diamond));
        this.addCard(new CardGame.PlayingCard("Four", "4", "images/diamonds_4.png", CardSuit.Diamond));

        this.addCard(new CardGame.PlayingCard("Two", "2", "images/hearts_2.png", CardSuit.Heart));
        this.addCard(new CardGame.PlayingCard("Three", "3", "images/hearts_3.png", CardSuit.Heart));
        this.addCard(new CardGame.PlayingCard("Four", "4", "images/hearts_4.png", CardSuit.Heart));

        this.addCard(new CardGame.PlayingCard("Two", "2", "images/clubs_2.png", CardSuit.Club));
        this.addCard(new CardGame.PlayingCard("Three", "3", "images/clubs_3.png", CardSuit.Club));
        this.addCard(new CardGame.PlayingCard("Four", "4", "images/clubs_4.png", CardSuit.Club));

        this.addCard(new CardGame.PlayingCard("Two", "2", "images/spades_2.png", CardSuit.Spade));
        this.addCard(new CardGame.PlayingCard("Three", "3", "images/spades_3.png", CardSuit.Spade));
        this.addCard(new CardGame.PlayingCard("Two", "4", "images/spades_4.png", CardSuit.Spade));
    }
    PlayingCardDeck.prototype.addCard = function (Card) {
        this.Cards.push(Card);
    };

    PlayingCardDeck.prototype.getCard = function (count) {
        var cardList = [];
        for (var index = 0; index < count; index++) {
            cardList.push(this.Cards[Math.floor(Math.random() * this.Cards.length - 1)]);
        }
        return cardList;
    };

    PlayingCardDeck.prototype.Shuffle = function (n) {
        var i, j, k;
        var temp;
        for (i = 0; i < n; i++)
            for (j = 0; j < this.Cards.length; j++) {
                k = Math.floor(Math.random() * this.Cards.length);
                temp = this.Cards[j];
                this.Cards[j] = this.Cards[k];
                this.Cards[k] = temp;
            }
    };
    return PlayingCardDeck;
})();
exports.PlayingCardDeck = PlayingCardDeck;
//# sourceMappingURL=app/js/PlayingCardDeck.js.map
