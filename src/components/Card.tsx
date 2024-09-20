import {IonImg, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Card.css';
import { CardValue } from '../data/CardData';

interface CardProps {
    currentCard: CardValue
    rowPosition: string
 }

const Card: React.FC<CardProps> = ({ currentCard, rowPosition}) => {

  var element;
  if(rowPosition == "top") {
    element = (<>
    <div id="card">{currentCard.cardValue}</div>
      <IonImg src={currentCard.cardImage} id="topRow"></IonImg>
    </>
    );
  } else {
    element = <IonImg src={currentCard.cardImage} id="bottomRow"></IonImg>
  }
  // if(isNumber(value)) {
  //   element = <div id="card">{value}</div>;
  // } else {
  //   element = <IonImg src={value}></IonImg>
  // }

  return (
    <IonCard color="primary" className="ion-text-center">
        {element}
      </IonCard>
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