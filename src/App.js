
import './App.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';
function App() {
  return (
    <div className="App">
      <section>
        <div className="form-box">
            <div className="form-value">
            <form action="">
               <h2>Login</h2>
               <div className="inputbox">
                    <EmailOutlinedIcon className="email-icon"/>
                   <input type="email" required></input>
                   <label for="">Email</label>
                </div>

                    <div className="inputbox">
                    <LockOutlinedIcon className="lock-icon"/>
                      <input type="password" required></input>
                      <label for="">Password</label>
                   </div>

                <div className="forget">
                  
                <label for=""><input type="checkbox"></input> Remember me <a href="#">Forgot Password.</a></label>
       
               </div>
          
              <button>Log in</button>
              <div className="registercd">
                <p>Don't have a account <a href="#">Register.</a></p>
              </div>
          </form>
        
         </div>
         </div>
         </section>
         </div>
  
  );
}

export default App;
