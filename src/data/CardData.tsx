import { CardTypes } from "./CardTypes"

export interface CardData {
    cardType: CardTypes,
    cardImage: string
}



const CardValues: CardData[] = [{
    cardType: CardTypes.grass,
    cardImage: "gome/assets/grass.png"
},
{
    cardType: CardTypes.sand,
    cardImage: "gome/assets/sand.png"

},
{
    cardType: CardTypes.mountain,
    cardImage: "gome/assets/mountain.png"

},
{
    cardType: CardTypes.water,
    cardImage: "gome/assets/water.png"

},
{
    cardType: CardTypes.twoadj,
    cardImage: "gome/assets/twoadj.png"

},
{
    cardType: CardTypes.powerOne,
    cardImage: "gome/assets/one.png"

},
{
    cardType: CardTypes.powerTwo,
    cardImage: "gome/assets/two.png"

},
{
    cardType: CardTypes.powerThree,
    cardImage: "gome/assets/three.png"

}, {


}];

export const getQuestion = () => {
    var question: CardData = {
        cardType: CardTypes.question,
        cardImage: "gome/assets/question.png"
    };

    return [question];

}

export const getCardData = () => CardValues;

export const GenerateDeck = () => {
    var counter = 0;
    //var data = getCardData();
    var newDeck = getCardData();
    // data.forEach(element => {
    //     var currentType = element.cardType;
    //     var currentImage = element.cardImage;
    //     element.cardValues.forEach(value => {
    //         newDeck.push({
    //             cardType: currentType,
    //             cardValue: value,
    //             cardImage: currentImage,
    //             key: counter++
    //         })
    //     });
    // });
    //newDeck = ShuffleDeck(newDeck, 3);
    return newDeck;

}
export const ShuffleDeck = (deck: CardData[], permutations: number, round: number) => {
    var limit = deck.length - 1;
    for (var y = 0; y < permutations; y++) {
        for (var i = 4 + round; i > 0; i--) {
            var shuffle = getRandomIntInclusive(0, i);
            if (shuffle != i) {
                var x = deck[shuffle];
                deck[shuffle] = deck[i];
                deck[i] = x;
            }
        }
    }

    return deck;
}

export const getCardValue = (card: CardData, rowPosition: string) => {
    if (rowPosition == "top") {
        return card.cardImage;
        //+ " (" + card.cardValue + ")";
    } else {
        return card.cardType;
        //+ " (" + card.cardType + ")";
    }
}
// function ShuffleDeck(deck, permutations) {
//     var limit = deck.length -1;
//     for(var y = 0; y < permutations; y++) {
//         for(var i = deck.length -1; i > 0; i--) {
//             var shuffle = getRandomIntInclusive(0, i);
//             if(shuffle != i) {
//                 var x = deck[shuffle];
//                 deck[shuffle] = deck[i];
//                 deck[i] = x;
//             }
//         }
//     }

//     return deck;
// }

function getRandomIntInclusive(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}


/**
On the board there are nine pools and there are nine cards with pools on them:
3, 4, 6, 7, 8, 9, 10, 12, 13
On the board there are eleven construction sites to mark off, however, there are only nine construction site cards (means you can only hit all eleven if you re-shuffle). The numers are:
3, 4, 6, 7, 8, 9, 10, 12, 13
There are nine BIS actions on the board and there are nine cards with BIS on the back, those number are:
3, 4, 6, 7, 8, 9, 10, 12, 13
There are thirty potential fence locations, there are eighteen fence cards, their numbers are:
1, 2, 3, 5, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 13, 14, 15
There are twelve parks you can fill in, there are eighteen cards with parks on them, their numbers are:
1, 2, 4, 5, 5, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 14, 15
There are eighteen real estate spots to mark on the board, there are eighteen real estate cards, their numbers are:
1, 2, 4, 5, 5, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 14, 15
 */