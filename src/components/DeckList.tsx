import React from 'react';
import {CardData, CardValue, GenerateDeck, ShuffleDeck} from '../data/CardData';
import { IonContent, IonItem, IonLabel, IonList } from '@ionic/react';
import { IonAccordion, IonAccordionGroup } from '@ionic/react';


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
    return (<>
        <IonAccordionGroup>
      <IonAccordion>
        <IonItem slot="header">
          <IonLabel>Decklist</IonLabel>
        </IonItem>
        <IonList inset={true} slot="content">
        {listItems}
      </IonList>
      </IonAccordion>
    </IonAccordionGroup>
      
      </>
    );
  };
  
  export default DeckList;
  