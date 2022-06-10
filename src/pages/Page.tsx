import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../components/Navbar';
import './Page.css';

const Page: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenu] = useState(false);

  const { name } = useParams<{ name: string; }>();






  return (
    <IonPage className="bg-gradient-to-b from-gray-800 to-black select-none md:place-items-start py-10">
      <IonContent fullscreen className=""> 
      <Navbar></Navbar>
        <div className="">
      <img className="animate__animated opacity-50 h-64 mx-auto m-6 animate__fadeIn animate__delay-1s" src="https://i0.wp.com/digitaldominancemarketing.com/wp-content/uploads/2022/03/Group-10488-1.png?w=634&ssl=1"></img>
        </div>
        <div className="border-t border-r border-b inline-block mt-8 md:mt-16 border-zinc-600 font-thin text-zinc-400 text-xl md:text-2xl px-8 py-2 active:bg-white/30 cursor-pointer active:opacity-20 transition">CTA</div>

      </IonContent>
    </IonPage>
  );
};

export default Page;
