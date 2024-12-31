import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { useState } from "react"
import {CardData, GenerateDeck, getCardData, getQuestion, ShuffleDeck} from '../data/CardData';

import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Card from '../components/Card';
import Row from '../components/Row';
import DeckList from '../components/DeckList'
import IconKey from '../components/IconKey'

const Home: React.FC = () => {

  var populatedDeck = GenerateDeck();

  const [era, setEra] = useState(0);
  var shuffledDeck = getQuestion();


  const [deckPosition, setDeckPosition] = useState(0);
  const [deck, setDeck] = useState<CardData[]>(shuffledDeck);



  function nextRound() {
      if(deckPosition < 4 + era) {
          var x = deckPosition + 1;
          setDeckPosition(x);
      }
  }

  function nextEra() {
    if(era < 4) {
      setDeckPosition(0);
      var x = era + 1;
      setEra(x);
      setDeck(ShuffleDeck(populatedDeck, 5, x));
    }
    
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>guild of merchant explorers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader> 
      <IonGrid>
        <IonRow>
          <IonCol>
            <h1 className="roundCounter">Era: {era}</h1>
          </IonCol>
        </IonRow>
        <Row cardSets={deck} deckPos={deckPosition}/>
        <IonRow>
          <IonCol>
          <IonButton expand='block' onClick={nextEra}>Next Era</IonButton>
          </IonCol>
          <IonCol>
          <IonButton expand='block' onClick={nextRound}>Next Card</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
      {/* <DeckList cardSets={cardSets}></DeckList> */}
      </IonContent>
    </IonPage>
  );
};


export default Home;
