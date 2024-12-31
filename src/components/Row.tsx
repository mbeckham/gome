import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import Card from '../components/Card';
import { CardData, getCardValue } from '../data/CardData';
//export default function Row({cardSets, rowPosition, deckPos}) {

interface RowProps { cardSets: CardData[], deckPos: number };

const Row: React.FC<RowProps> = ({ cardSets, deckPos }: RowProps) => {
  var cards = [];
  for (let i = 0; i <= deckPos; i++) {
    cards.push(cardSets[i]);
  }
  return (
    <IonRow>
      {cards.map(card => (
        <IonCol>
          <Card currentCard={card} key={card.cardType}/>
        </IonCol>))
      }
    </IonRow>
  );
};

export default Row;
