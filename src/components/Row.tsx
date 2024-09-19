import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import Card from '../components/Card';
import { CardValue, getCardValue } from '../data/CardData';
//export default function Row({cardSets, rowPosition, deckPos}) {

interface RowProps {cardSets:CardValue[][], rowPosition: string, deckPos: number };

const Row: React.FC<RowProps> = ({cardSets, rowPosition, deckPos}: RowProps) => {
  return (
    <IonRow>
          <IonCol>
            <Card currentCard={cardSets[0][deckPos]} rowPosition={rowPosition} />
          </IonCol>
          <IonCol>
            <Card currentCard={cardSets[1][deckPos]} rowPosition={rowPosition} />
          </IonCol>
          <IonCol>
            <Card currentCard={cardSets[2][deckPos]} rowPosition={rowPosition} />
          </IonCol>
        </IonRow>
  );
};

export default Row;
