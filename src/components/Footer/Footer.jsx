import React from "react";
import Badge from "react-bootstrap/Badge";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <h2 className=" text-center">
        <Badge bg="danger">Contact Us</Badge>
      </h2>

      <div className="row">
        <div className="col-md-6 sm-12">
          <div id="mc_embed_signup" style={{ width: "100%" }}>
            <form
              action="mailto:gyamfiagyemang999@gmail.com"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
            >
              <div id="mc_embed_signup_scroll">
                <h2>CONTACT FORM</h2>
                <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="text-dark required email"
                    id="mce-EMAIL"
                    required
                    placeholder="johndoe@gmail.com"
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-FNAME"> Name </label>
                  <input
                    type="text"
                    name="Name"
                    className="text-dark text"
                    id="mce-FNAME"
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-PHONE">Phone Number </label>
                  <input
                    type="text"
                    name="PHONE"
                    className="text-dark REQ_CSS"
                    id="mce-PHONE"
                    required
                    placeholder="+0000000000"
                  />
                </div>
                <div className="mc-field-group">
  <label htmlFor="mce-MESSAGE">Message</label>
  <textarea
    name="MESSAGE"
    className="text-dark REQ_CSS "
    id="mce-MESSAGE"
    placeholder="Enter your message here"
  ></textarea>
</div>
              </div>
              <div id="mce-responses" className="clear foot">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div className="clear">
                <input
                  type="submit"
                  value="Send"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-6 sm-12">
                <h2 className="font-bold text-[23px] pt-2 pl-3">CONTACT DETAILS</h2>
                <div className="d-flex align-items-start mb-3 lg:mt-[100px] ml-5">
                <TfiEmail  size={30}/>
                <p className="pl-3">nathanielcaresfoundation@gmail.com</p>
              </div>
                <div className="d-flex align-items-start mb-3 ml-5">
                <FaLocationDot  size={30}/>
                <p className="pl-3">Abuakwa-Housing, Kegyase SHC-F18, AH-1256-3999, Kumasi, Ghana. </p>
              </div>
                <div className="d-flex align-items-start mb-3 ml-5">
                <FaPhone  size={30}/>
                <p className="pl-3">Nathaniel Afriyie: 0531641706 </p>
              </div>
                <div className="d-flex align-items-start mb-3 ml-5">
                <FaPhone  size={30}/>
                <p className="pl-3">Sita Ama Ampong : 0503941360 </p>
              </div>
              
        </div>
      </div>

      <div className="text-center">
        <h2 className="font-bold text-3xl text-decoration-underline">HOW TO VOLUNTEER</h2>

        <p className="font-textFonts text-center">
        1.	Every weekday at any time and on weekends, you can come to Abuakwa-Housing to distribute foodstuffs. <br /> Timing for Saturday and Sunday are 10 a.m - 4 p.m and 1 p.m - 7 p.m <br /><br/>
2.	You can donate Food, Money or needy things like Clothes, Blankets, <br /> Books for Children, Materials for Children's School Uniforms, and other Stationery. <br /><br />
3.	If you have surplus food which is good to eat, then just call us. <br /> We will come to pick and distribute them to various orphanage homes. 

        </p>
      </div>
    </div>
  );
};

export default Footer;
