import React from 'react'
import "./Landingpage.scss";

function Landingpage() {
    return (
        <div className="firstdiv">
            <div className="pic"><img src="picture1.png" alt="pic"/></div>
           <div className="navbar">
              

               <div className="Price">Pricing</div>
               <div className="Feature">Features</div>
               <div className="blog">Blog</div>
               <div className="support">Support</div>
               <div className="flex"><div className="signin1">
                   <div className="signin2">Sign In</div>
               </div>
               <div className="signup1">
                   <div className="signup2">Sign Up</div>
               </div>
               <div className="post"><img src="Post Publisher.png" alt="img"/></div>
               {/* <div className="publish">Publisher</div> */}
               </div>
               </div> 
               
             <div className="bestway">The best way to manage social media account</div>  
             <div className="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </div>
             <button className="btn3"><span className="btnin">Get Started</span></button>
             <div className="plans">

                 
             </div>
             <div className="choose">
                 Choose the best plan that fit best for you
                 </div>
                 <div className="chooset">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
        </div>
               
    )
}

export default Landingpage
