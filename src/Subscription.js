import React, { useState } from "react";
import "./Subscription.scss";
import Switch from "react-switch";
function Subscription() {
  const [click, setClick] = useState("");
  const handleChange = (checked) => {
    setClick(checked);
    console.log(checked);
  };
  return (
    <div className="first">
      <div className="second">
        <div className="second_one">
          <img src="coolicon.png" alt="back_icon" />
        </div>
        <div className="second_two">Choose the right plan for you</div>
      </div>
      <div className="third">
        <div className="third_one">
          We have several powerful plans to showcase your buisness and get
          discovered as a
        </div>
        <div>creative enterpreneurs.everything you need.</div>
      </div>
      <div className="four">
        <div className="month">Monthly plans</div>
        <div className="four_start">
          <div className="four_one">
            <Switch
              className="react-switch"
              //    onChange={handleChange()}
              //    checked={click}
              handleDiameter={28}
              offColor="08f"
              onColor="0ff"
              offHandleColor="#FCFCFC"
              onHandleColor="#FCFCFC"
              height={40}
              width={70}
            />
          </div>
        </div>
        <div className="annual">Annual plans</div>
      </div>
      <div className="five">
        <div className="five_border">
          <div className="five_one">
          <div className="five_one1">Basic</div>
            <div className="five_one1">$5</div>
          </div>
          <div>
            <div className="five_two">
              <div >
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply text ok</div>
            </div>
            <div className="five_two">
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply dummy text</div>
            </div>
            <div className="five_two">
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply dummy text</div>
            </div>
            <div className="five_two">
              
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply text</div>
            </div>
            <div className="five_two">
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply dummy text  </div>
            </div>
            <div className="five_two">
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply dummy text</div>
            </div>
            <div className="five_two">
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply dummy </div>
            </div>
            <div className="AF">Choose</div>
          </div>
        </div>

        <div className="five_border">
          <div className="five_one">
          <div className="five_one1">Standard</div>
            <div className="five_one1">$15</div>
          </div>
          <div>
            <div className="five_two">
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply text ok</div>
            </div>
            <div className="five_two">
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply dummy text</div>
            </div>
            <div className="five_two">
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply dummy text</div>
            </div>
            <div className="five_two">
              
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply text</div>
            </div>
            <div className="five_two">
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply dummy text  </div>
            </div>
            <div className="five_two">
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply dummy text</div>
            </div>
            <div className="five_two">
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply dummy </div>
            </div>
            <div className="AF">Choose</div>
          </div>
        </div>
        <div className="five_border">
          <div className="five_one">
          <div className="five_one1">Professional</div>
            <div className="five_one1">$25</div>
          </div>
          <div>
            <div className="five_two">
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply text ok</div>
            </div>
            <div className="five_two">
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply dummy text</div>
            </div>
            <div className="five_two">
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply dummy text</div>
            </div>
            <div className="five_two">
              
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply text</div>
            </div>
            <div className="five_two">
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply dummy text </div>
            </div>
            <div className="five_two">
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply dummy text</div>
            </div>
            <div className="five_two">
              <div>
                <img src="tick.png" alt="tick" />
              </div>
              <div className="margin-left">Lorem Ipsum is simply dummy </div>
            </div>
            <div className="AF">Choose</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
