import React from "react";
import "./Card.css";
function Card() {
  return (
    <>
      <div id="parent">
        {/* front of CARD */}
        <div id="front" className="cards">
         <div id="logos">
            <div id="d1"></div>
            <div id="d2"></div>
         </div>
         <div id="details">
               <h1>0000 0000 0000 0000</h1>
            <div id="data">
                  <h3>JANE APPLESEED</h3>
                  <h3>00 / 00</h3>
            </div>
         </div>
        </div>
        {/* back of CARD */}
        <div id="rear" className="cards">
         <div id="label"></div>
         <div id="cvc-block">
            <h3>000</h3>
         </div>
         <div id="third">
            <h3>------- ------ ----------------- ---------- ---------- ----------- -------- -------- -- ------- --</h3>
         </div>
        </div>
      </div>
    </>
  );
}
export default Card;
