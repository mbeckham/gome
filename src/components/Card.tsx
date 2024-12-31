import {IonImg, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Card.css';
import { CardData } from '../data/CardData';

interface CardProps {
    currentCard: CardData
 }

const Card: React.FC<CardProps> = ({ currentCard}) => {

  var element;
 
    element = <IonImg src={currentCard.cardImage} ></IonImg>
  
  // if(isNumber(value)) {
  //   element = <div id="card">{value}</div>;
  // } else {
  //   element = <IonImg src={value}></IonImg>
  // }

  return (
    <IonCard color="primary" className="ion-text-center" >
        {element}
      </IonCard >
  );
};

export default Card;


/**
 * 
 export const getCardValue = (card: CardValue, rowPosition: string) => {
    if(rowPosition == "bottom") {
        return card.cardImage;
        //+ " (" + card.cardValue + ")";
    } else {
        return card.cardValue;
        //+ " (" + card.cardType + ")";
    }
}
 */