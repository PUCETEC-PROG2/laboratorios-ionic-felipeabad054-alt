import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';

import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulario de repositoriio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Formulario de repositoriio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="form-container">
          <IonInput
          className="from-field"
          label="Nombre del Repositorio"
          labelPlacement="floating"
          placeholder="Ingrese el nombre del Repsositorio"
          />
          <IonTextarea
          className="from-field"
          label="Descripcion"
          labelPlacement="floating"
          placeholder="Ingrese la descripcion del Repsositorio"
          rows={6}
          />
          <IonButton
          className= "from-field"
          expand="block"
          color="primary"
          
          >
            Guardar
            
          </IonButton>
        </div>
      
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
