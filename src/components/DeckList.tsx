import React from 'react';
import { CardData, GenerateDeck, ShuffleDeck } from '../data/CardData';
import { IonCol, IonContent, IonGrid, IonItem, IonLabel, IonList, IonRow, IonImg } from '@ionic/react';
import { IonAccordion, IonAccordionGroup } from '@ionic/react';


// interface listProps {
//     cardSets: CardValue[][]
// }

// function buildColumn(cardSet: CardValue[]) {
//     return cardSet.map(card =>
//         <IonItem key={card.key}>
//             <IonLabel key={card.key + card.cardValue}>{card.cardValue}</IonLabel>
//             <IonImg  key={card.key+card.cardType} src={card.cardImage}></IonImg>

//         </IonItem>
//     );


// }
// const DeckList: React.FC<listProps> = ({ cardSets }) => {

//     const columnOne = buildColumn(cardSets[0]);
//     const columnTwo = buildColumn(cardSets[1]);
//     const columnThree = buildColumn(cardSets[2]);
//     return (<>
//         <IonAccordionGroup>
//             <IonAccordion>
//                 <IonItem slot="header">
//                     <IonLabel>Decklist</IonLabel>
//                 </IonItem>
//                 <IonGrid  slot="content">
//                     <IonRow>
//                         <IonCol>
//                             <IonList >
//                                 {columnOne}
//                             </IonList>
//                         </IonCol>
//                         <IonCol>
//                             <IonList >
//                                 {columnTwo}
//                             </IonList>
//                         </IonCol>
//                         <IonCol>
//                             <IonList >
//                                 {columnThree}
//                             </IonList>
//                         </IonCol>
//                     </IonRow>
//                 </IonGrid>
//             </IonAccordion>
//         </IonAccordionGroup>

//     </>
//     );
// };

// export default DeckList;
