import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="card-container">
          <IonCard className="card">
            <img src="https://avatars.githubusercontent.com/u/259987936?v=4" alt="Avatar"/>
            <IonHeader>
              <IonCardTitle>Felipe Daniel Abad</IonCardTitle>
              <IonCardSubtitle>felipeabadizurieta</IonCardSubtitle>
              <IonCardContent>Desarrollador de Sowftware en aplicaciones Web .Apasionado por la tecnologia,el aprendizaje y un poco el trago</IonCardContent>
            </IonHeader>
          </IonCard>
        </div>


       
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
