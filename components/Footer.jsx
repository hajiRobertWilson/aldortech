"use client"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const links = ['Home', 'Services', 'Portfolio', 'Blogs', 'About Us', 'Contact'];
  const quikLinks = ['Lorem1', 'Lorem2', 'Lorem3', 'Lorem4', 'Lorem5', 'Lorem6', 'Lorem7',]
  const handleMail = () => {
    window.open('mailto:info@aldortech.com')
  }
  return (
    <>
      <div className="footerCont">
        <div className="container">
          <div className="brandLogo">
            <h1>Aldor Technologies</h1>
            <div className="socialLinks">
            </div>
            <div className="email">
              <h1 onClick={() => handleMail()}><FontAwesomeIcon icon={faEnvelope} /> info@aldortech.com</h1>
            </div>
          </div>
          <div className="navigation">
            <ul>
              {
                links.map(link => <li key={link}>{link}</li>)
              }
            </ul>
          </div>
          <div className="quiklinks">
            <ul>
              {
                quikLinks.map(link => <li key={link}>{link}</li>)
              }
            </ul>
          </div>
        </div>
        <div className="copyright">
          Copyright <strong>&copy;</strong> 2024 Aldor Technologies Pvt,Ltd. All Rights Reserved.
        </div>
      </div>
    </>
  );
}
