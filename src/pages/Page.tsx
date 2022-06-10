import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Navbar from '../components/Navbar';
import './Page.css';

const Page: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenu] = useState(false);

  const { name } = useParams<{ name: string; }>();






  return (
    <IonPage>
      <IonContent fullscreen>
      <Navbar></Navbar>
      </IonContent>
    </IonPage>
  );
};

export default Page;
