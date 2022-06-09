import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";
import React, { useRef } from "react";
//import "../App.css";

interface InternalValues {
  file: any;
}

const Home: React.FC = () => {
  const values = useRef<InternalValues>({ file: false });

  const onFileChange = (fileChangeEvent: any) => {
    values.current.file = fileChangeEvent.target.files[0];
  };

  const submitForm = async () => {
    if (!values.current.file) {
      return false;
    }

    let formData = new FormData();

    formData.append("photo", values.current.file, values.current.file.name);

    try {
      const response = await fetch("http://localhost:4000/employees/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Image Upload</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <input type="file" onChange={(ev) => onFileChange(ev)}></input>
        </IonItem>
        <IonButton color="primary" expand="full" onClick={() => submitForm()}>
          Upload
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
