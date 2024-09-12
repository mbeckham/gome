import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface CardProps {
    value:string|number
 }

const Card: React.FC<CardProps> = ({value}) => {
  return (
    <IonCard color="primary" className="ion-text-center">
        <IonCardContent>{value}</IonCardContent>
      </IonCard>
  );
};

export default Card;
