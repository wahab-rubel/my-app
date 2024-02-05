import React from 'react'
import '../components/style/footer.css'
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div  className="footer coll_footer footer-padding">
        <div  className="footer-links">
          <div className="footerlinksdiv">
              <h4>Social</h4>
              <a  href="https://www.upwork.com/freelancers/~015375355dbdd43d8a"> <p>Upwork</p></a>
              <a  href="https://www.facebook.com/MAWRUBEL"> <p>Facebook</p></a>
              <a  href="https://www.fiverr.com/wahabrubel?up_rollout=true"> <p>Fiverr</p></a>
          </div>
          <div className="footerlinksdiv">
              <h4>Resources</h4>
              <a  href="/resources"><p>01710498381</p> </a>
              <a  href="/resources"><p>01518424335</p> </a>
              <a  href="/resources"> <p>Eable What'sapp</p></a>
          </div>
          <div className="footerlinksdiv">
              <h4>Partners</h4>
              <a  href="/employer"> <p>Swing Tech</p> </a>
          </div>

          <div className="footerlinksdiv">
              <h4>Company</h4>
              <a  href="/aboxx"><div><p>About</p></div></a>
              <a  href="/press"><div><p>Press</p></div></a>
              <a  href="/resources"><div><p>Career</p></div></a>
              <a  href="/contact"> <div><p>Contact</p></div> </a>
          </div>

          <div className="footerlinksdiv">
              <h4>Follow us</h4>
              <div className="socialmedia">
                  <FaFacebook size={30} color='#0f4b9b' />
                  <FaTwitter  size={30} color='#0f4b9b'  style={{ marginLeft: 10 }}/>
                  <FaLinkedin  size={30} color='#0f4b9b'  style={{ marginLeft: 10 }}/>
                  <FaInstagram size={30} color='#0f4b9b' style={{ marginLeft: 10 }} />
              </div>
          </div>
        </div>
        <hr />

{/** Em  {(new Date().getFullYear())}   (Ano Capturado dinâmicamente ) */}

      <div className="footer-below">
        <div className="footer-copyright">
          <p>
              {(new Date().getFullYear())} All right reserved ---&gt; (developer-name). 
          </p>
        </div>
      <div className="footer-below-links">
          <a href="/terms"><div><p>Terms & Conditions</p></div></a>
          <a href="/privacy"><div><p>Privacy</p></div></a>
          <a href="/security"><div><p>security</p></div></a>
          <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Footer