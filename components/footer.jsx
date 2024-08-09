"use client"

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { call, chevronForward, location } from 'ionicons/icons'

export default function Footer() {
  const links = ['Home', 'Services', 'Portfolio', 'Blogs', 'About Us', 'Contact'];
  const path = ['/', '/services', '/portfolio', '/blogs', '/about', '/contact'];
  const index = [0, 1, 2, 3, 4, 5];
  const quikLinks = ['Lorem1', 'Lorem2', 'Lorem3', 'Lorem4', 'Lorem5',]
  const pathName = usePathname()



  const handleMail = () => {
    window.open('mailto:info@aldortech.com')
  }

  useEffect(() => {
    let activeTab = pathName
    const navItem = document.querySelectorAll('.navLink')
    const theme = document.documentElement.classList.contains('dark-theme');
    navItem.forEach(ele => {
      ele.style.color = !theme ? 'black' : 'white';
      ele.style.fontWeight = 'normal'
      if (ele.dataset.value === activeTab) {
        ele.style.color = '#1679AB'
        ele.style.fontWeight = 'bold'
      }
    })
  }, [pathName])

  return (
    <>
      <div className="footerCont">
        <div className="container">
          <div className="brandLogo">
            <h2>Aldor Technologies</h2>
            <div className="email">
              <h1 onClick={() => handleMail()}><FontAwesomeIcon icon={faEnvelope} /> info@aldortech.com</h1>
              <a href="tel:+923228090884"><IonIcon icon={call} />+1(12)34567890</a>
            </div>
          </div>
          <div className="navigation">
            <h2>Navigation</h2>
            <ul>
              {
                index.map(i => <Link href={path[i]} className="navLink" key={i} data-value={path[i]}><li><IonIcon icon={chevronForward} />{links[i]}</li></Link>)
              }
            </ul>
          </div>
          <div className="quiklinks">
            <h2>Quik Links</h2>
            <ul>
              {
                quikLinks.map(link => <li key={link}>{link}</li>)
              }
            </ul>
          </div>
          <div className="address">
            <h2>Address</h2>
            <address>
              <IonIcon icon={location} />USA: Country Office: 220 orient ave, Boston MA 02128
            </address>
            <address>
              <IonIcon icon={location} />USA: Country Office: 220 orient ave, Boston MA 02128
            </address>
          </div>
        </div>
        <div className="copyright">
          Copyright <strong>&copy;</strong> 2024 Aldor Technologies Ltd. All Rights Reserved.
        </div>
      </div>
    </>
  );
}
