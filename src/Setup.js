import React from 'react'
import "./First.scss";



const Setup = () => {
    return (
        <div className="first">
           <div className="Second">
               <div className="Picture1">
               </div>

               <div className="Picture2">
               </div>
           </div>
            <div className="third">
         <div className="Loginbox">
               <div className="AB">Welcome to Post Publisher</div>
               <div className="AC">Let's get your account set up</div>
               <div className="AD">

                                   <div className="AD1">Already member? </div>
                                   <div className="AD2"> Sign in</div></div>
               <div className="AE">
                       
                       <div>Email</div>
                       <div><img src="Icons.png" alt="mail"></img></div>
                  </div>

               <div className="AE">
                 <div>6+ Character & 1 Capital letter</div>
                 <div><img src="Icon.png" alt="lock"></img></div>
               
               </div>
               <div className="AE">
                 <div>Confirm password</div>
                 <div><img src="Icon.png" alt="lock"></img></div>
                </div>
                 <div><span>By clicking'</span>
                 <span className="orange">create account</span>
                 <span>',i agree to post publisher</span>
                 <span className="underline"> terms of use </span>
                 and
                 <span className="underline"> privacy policy</span></div>
               <div className="AF">Create account</div>
         </div>
         <div className="Picture3">
            
          </div>
     
      </div> 
        </div>
    )
}

export default Setup
