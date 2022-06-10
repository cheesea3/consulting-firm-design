import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenu] = useState(false);

  const { name } = useParams<{ name: string; }>();

  const searchButton = document.querySelector("nav .desktop-nav .link-search");
  const closeButton = document.querySelector(".search-container .link-close");
  const desktopNav = document.querySelector(".desktop-nav");
  const searchContainer = document.querySelector(".search-container");
  const overlay = document.querySelector(".overlay");

  
  if(searchButton && desktopNav && searchContainer && overlay){
    searchButton.addEventListener("click", () => {
      desktopNav.classList.add("hide");
      searchContainer.classList.remove("hide");
      overlay.classList.add("show");
  })
  }

  if(desktopNav && closeButton && searchContainer && overlay){
  closeButton.addEventListener("click", () => {
      desktopNav.classList.remove("hide");
      searchContainer.classList.add("hide");
      overlay.classList.remove("show");
  })
}
if(desktopNav && closeButton && searchContainer && overlay){

  overlay.addEventListener("click", () => {
      desktopNav.classList.remove("hide");
      searchContainer.classList.add("hide");
      overlay.classList.remove("show");
  })
}
  
  // Mobile Version
  
  const menuIconContainer = document.querySelector("nav .menu-icon-container");
  const navContainer = document.querySelector(".nav-container");
if(navContainer && menuIconContainer ){
  menuIconContainer.addEventListener("click", () => {
      navContainer.classList.toggle("active");
  })
}
  
  const searchBar = document.querySelector(".mobile-search-container .search-bar");
  const nav = document.querySelector(".nav-container nav");
  const searchInput = document.querySelector(".mobile-search-container input");
  const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");
if(searchInput && searchBar && nav && desktopNav){
  searchInput.addEventListener("click", () => {
      searchBar.classList.add("active");
      nav.classList.add("move-up");
      desktopNav.classList.add("move-down");
  })
}
if(cancelBtn && searchBar && nav && desktopNav){
  cancelBtn.addEventListener("click", () => {
      searchBar.classList.remove("active");
      nav.classList.remove("move-up");
      desktopNav.classList.remove("move-down");
  })
}




  return (
      <div className={isMobileMenuOpen ? "nav-container active ":"nav-container "}>
        <nav>
            <ul className="mobile-nav">
                <li className="flex items-center justify-between w-full">
                    <div className="menu-icon-container" onClick={() => setMobileMenu(!isMobileMenuOpen)} >
                        <div className="menu-icon">
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                        </div>
                    </div>
                    <div className="items-center text-white flex justify-center items-baseline">Digital Dominance Marketing</div>
                </li>

            </ul>

            <ul className="desktop-nav">
                <li>
                <div className="text-white hidden md:block">Digital Dominance Marketing</div>
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
