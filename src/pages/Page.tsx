import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../components/Navbar';
import './Page.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

const Page: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenu] = useState(false);

  const { name } = useParams<{ name: string; }>();



  const element = document.querySelector('.ddm-logo');
  const cover = document.querySelector('.ddm-cover');
  if(element && cover){
    element.addEventListener('animationend', () => {
    });
  }



  return (
    <IonPage className="bg-gradient-to-b from-gray-800 to-black select-none md:place-items-start py-10">
      <IonContent fullscreen className=""> 
      <Navbar></Navbar>
        <div className="ddm-cover ease-in-out	duration-500 opacity-30">
      <img className="ddm-logo animate__faster animate__animated select-none h-64 mx-auto m-6 animate__fadeIn animate__delay-1s" src="https://i0.wp.com/digitaldominancemarketing.com/wp-content/uploads/2022/03/Group-10488-1.png?w=634&ssl=1"></img>
        </div>
        <div className="border-t animate__animated animate__fadeInBottomLeft border-r border-b inline-block mt-8 md:mt-16 border-zinc-600 font-thin text-zinc-400 text-xl md:text-2xl px-8 py-2 active:bg-white/30 cursor-pointer active:opacity-20 transition">Click me CTA</div>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://digitaldominancemarketing.com/wp-content/uploads/2022/03/m.shaikh-07.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://digitaldominancemarketing.com/wp-content/uploads/2022/03/m.shaikh-10.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://digitaldominancemarketing.com/wp-content/uploads/2022/03/m.shaikh-07.png" />
        </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Page;
