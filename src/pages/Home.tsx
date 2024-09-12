import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { useState } from "react"
import {CardData, CardValue, GenerateDeck, ShuffleDeck} from '../data/CardData';

import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Card from '../components/Card';
import Row from '../components/Row';
import DeckList from '../components/DeckList'

const Home: React.FC = () => {

  var populatedDeck = GenerateDeck();

  const [deckPosition, setDeckPosition] = useState(1);
  const [deck, setDeck] = useState<CardValue[]>(populatedDeck);
  const cardSetOne = deck.slice(0, 27);
  const CardSetTwo = deck.slice(27,54);
  const CardSetThree = deck.slice(54,81);

  const cardSets = [cardSetOne, CardSetTwo, CardSetThree]

  function nextRound() {
      if(deckPosition < 26) {
          var x = deckPosition + 1;
          setDeckPosition(x);
      }
  }

  function previousRound() {
    if(deckPosition >1) {
      var x = deckPosition -1;
      setDeckPosition(x);
    }
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome To...</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader> 
      <h1 className="roundCounter">Round: {deckPosition}</h1>
      <IonGrid>
        <Row cardSets={cardSets} rowPosition='top' deckPos={deckPosition}/>
        <Row cardSets={cardSets} rowPosition='bottom' deckPos={deckPosition-1}/>
        <IonRow>
          <IonCol>
          <IonButton expand='block' onClick={previousRound}>Previous Round</IonButton>
          </IonCol>
          <IonCol>
          <IonButton expand='block' onClick={nextRound}>Next Round</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
      <DeckList cardValues={deck}></DeckList>
      </IonContent>
    </IonPage>
  );
};


export default Home;
