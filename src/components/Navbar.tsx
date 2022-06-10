import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenu] = useState(false);

  return (
      <div className={isMobileMenuOpen ? "nav-container active ":"nav-container "}>
        <nav>
            <ul className="mobile-nav">
                <li className="flex items-center justify-between w-full">
                    <div className="menu-icon-container animate__animated animate__slideInDown animate__slow" onClick={() => setMobileMenu(!isMobileMenuOpen)} >
                        <div className="menu-icon">
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                        </div>
                    </div>
                    <div className="items-center text-white flex justify-center items-baseline animate__animated animate__backInRight">Digital Dominance Marketing</div>
                </li>

            </ul>

            <ul className="desktop-nav">
                <li>
                <div className="text-white hidden md:block ">Digital Dominance Marketing</div>
                </li>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>About Us</a>
                </li>
                <li>
                    <a>Services</a>
                </li>
                <li>
                    <a>Case Studies</a>
                </li>
                <li>
                    <a>Blogs</a>
                </li>
                <li>
                    <a>Contact Us</a>
                </li>
                <li>
                    <a className="link-bag"></a>
                </li>
            </ul>
        </nav>
  </div>
  );
};

export default Navbar;
