import {IonImg, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Card.css';

interface CardProps {
    value:string|number
 }

 function isNumber(value:string|number) {
  return typeof value === 'number';
}

const Card: React.FC<CardProps> = ({value}) => {

  var element;
  if(isNumber(value)) {
    element = <div id="card">{value}</div>;
  } else {
    element = <IonImg src={value}></IonImg>
  }

  return (
    <IonCard color="primary" className="ion-text-center">
        {element}
      </IonCard>
  );
};

export default Card;
