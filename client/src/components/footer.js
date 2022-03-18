import React from "react";
import "../App.css";

const Footer = () => {
  return (
      <div className="container_footer">
          <div className="footer footer_left">
              <div className="footer_info">
                  <h2 className="footer_title">Naviguation</h2>
                  <a className="footer_link" href="./">Accueil</a>
                  <a className="footer_link">Toutes les missions</a>
                  <a className="footer_link">Les associations</a>
              </div>
              <div className="footer_info">
                  <h2 className="footer_title">À propos</h2>
                  <a className="footer_link">Notre cause</a>
                  <a className="footer_link">Comment ça fonctionne ?</a>
                  <a className="footer_link">Termes et conditions</a>
              </div>
          </div>
          <div className="footer footer_center"></div>
          <div className="footer footer_right">
              <a className="footer_icon instagram"></a>
              <a className="footer_icon twitter" href="https://www.facebook.com/Amimaide" target="_blank"></a>
              <a className="footer_icon facebook" href="" target="_blank"></a>
              <a className="footer_icon mail"></a>
          </div>
      </div>
  );
}

export default Footer;