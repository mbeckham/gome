import React from 'react';
import {CardData, CardValue, GenerateDeck, ShuffleDeck} from '../data/CardData';
import { IonContent, IonItem, IonLabel, IonList } from '@ionic/react';


interface listProps {
    cardValues: CardValue[]
}

const DeckList: React.FC<listProps> = ({cardValues}) => {

    const listItems = cardValues.map(card => 
        <IonItem>
            <IonLabel>{card.cardValue}</IonLabel>
            <IonLabel>{card.cardType}</IonLabel>
        </IonItem>
    );
    return (
      <IonList>
        {listItems}
      </IonList>
    );
  };
  
  export default DeckList;
  