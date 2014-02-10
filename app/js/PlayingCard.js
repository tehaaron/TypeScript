var PlayingCard = (function () {
    function PlayingCard(cardName, cardValue, imageLocation, cardSuit, cardSound) {
        this.Suit = cardSuit;
        this.CardName = cardName;
        this.CardValue = cardValue;
        this.CardImageLocation = imageLocation;
        this.CardSoundLocation = cardSound;
    }
    return PlayingCard;
})();
exports.PlayingCard = PlayingCard;
//# sourceMappingURL=app/js/PlayingCard.js.map
