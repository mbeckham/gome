import { CardTypes } from "../data/CardTypes";
import React from 'react';
import { IonCol, IonContent, IonGrid, IonItem, IonLabel, IonList, IonRow, IonImg } from '@ionic/react';
import { IonAccordion, IonAccordionGroup } from '@ionic/react';
const IconKey: React.FC = () => {
    return (<>
        <IonAccordionGroup>
            <IonAccordion>
                <IonItem slot="header">
                    <IonLabel>IconKey</IonLabel>
                </IonItem>
                <IonGrid slot="content">
                    <IonRow>
                        <IonCol>
                            <IonList >
                                <IonItem key="BIS">
                                    <IonImg  key="BISimg" slot="start" src={"Welcome-To...React/assets/bis.png"}></IonImg>
                                    <IonLabel key="BISLabel" >{CardTypes.BIS}</IonLabel>
                                </IonItem>
                                <IonItem key="construction">
                                    <IonImg key="constructionImg" slot="start" src={"Welcome-To...React/assets/construction.png"}></IonImg>
                                    <IonLabel key="constructionLabel" >{CardTypes.construction}</IonLabel>
                                </IonItem>
                                <IonItem key={CardTypes.fence}>
                                    <IonImg key="fenceImg" slot="start" src={"Welcome-To...React/assets/fence.png"}></IonImg>
                                    <IonLabel key="fenceLabel" >{CardTypes.fence}</IonLabel>
                                </IonItem>
                            </IonList>
                        </IonCol>
                        <IonCol>
                            <IonList >
                                <IonItem key="park">
                                    <IonImg  key="parkImg" slot="start" src={"Welcome-To...React/assets/park.png"}></IonImg>
                                    <IonLabel key="parkLabel" >{CardTypes.park}</IonLabel>
                                </IonItem>
                                <IonItem key="pool">
                                    <IonImg  key="poolImg" slot="start" src={"Welcome-To...React/assets/pool.png"}></IonImg>
                                    <IonLabel key="poolLabel" >{CardTypes.pool}</IonLabel>
                                </IonItem>
                                <IonItem key="realEstate">
                                    <IonImg key="realEstateImg" slot="start" src={"Welcome-To...React/assets/realEstate.png"}></IonImg>
                                    <IonLabel key="realEstateLabel" >{CardTypes.realEstate}</IonLabel>
                                </IonItem>
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonAccordion>
        </IonAccordionGroup>

    </>
    );
};

export default IconKey;
