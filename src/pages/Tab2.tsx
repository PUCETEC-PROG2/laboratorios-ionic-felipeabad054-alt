import React from 'react';

import { 
IonButton,
IonContent,
IonHeader,
IonInput,
IonPage,
IonTextarea,
IonTitle,
IonToolbar,
IonText
} from '@ionic/react';


import './Tab2.css';

import { createRepository } from '../services/GithubService';



const Tab2: React.FC = () => {


const [name,setName] = React.useState("");

const [description,setDescription] = React.useState("");

const [message,setMessage] = React.useState("");

const [error,setError] = React.useState("");

const [loading,setLoading] = React.useState(false);





const saveRepository = async()=>{


setMessage("");

setError("");



if(name.trim()===""){


setError(
"El nombre del repositorio es obligatorio"
);


return;


}



try{


setLoading(true);



await createRepository({

name,

description

});



setMessage(
"Repositorio creado correctamente"
);



setName("");

setDescription("");



}catch(error){


setError(
(error as Error).message
);



}finally{


setLoading(false);


}



}





return (


<IonPage>


<IonHeader>


<IonToolbar>


<IonTitle>
Crear Repositorio
</IonTitle>


</IonToolbar>


</IonHeader>




<IonContent fullscreen>



<div className="form-container">



<IonInput


label="Nombre del Repositorio"


labelPlacement="floating"


value={name}


onIonInput={
(e)=>setName(
e.detail.value ?? ""
)
}



/>



<IonTextarea


label="Descripción"


labelPlacement="floating"


value={description}



onIonInput={
(e)=>setDescription(
e.detail.value ?? ""
)
}


/>



<IonButton


expand="block"


onClick={saveRepository}


disabled={loading}



>


{
loading
?
"Creando..."
:
"Guardar"
}


</IonButton>




{

message &&


<IonText color="success">


<p>{message}</p>


</IonText>


}




{

error &&


<IonText color="danger">


<p>{error}</p>


</IonText>


}



</div>



</IonContent>



</IonPage>



);


};



export default Tab2;