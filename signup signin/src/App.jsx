import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="toggle">
          <button className={isLogin ? "active" : ""} onClick={handleToggle}>Login</button>
          <button className={!isLogin ? "active" : ""} onClick={handleToggle}>Signup</button>
        </div>
        {isLogin ? (
          <div className="form">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="John Doe" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
            <img className='img15' src="https://themicrolearningacademy.com/bookbuilder/public/assets/images/login_img.jpg" alt="Login" />
            <a href="">I am already member</a>
          </div>
        ) : (
          <div className="form">
            <h2>Signup</h2>
            <div className='sinupimg'>
              <img className='img12' src="https://www.megatradersplc.com/images/others/signup.png" alt="Signup" />
            </div>
            <form>
            <i class="fa-sharp fa-solid fa-user">
              <input type="text" placeholder="Name" required /></i>
              <i class="fa-solid fa-user"></i> <input type="email" placeholder="Email" required />
              <i class="fa-solid fa-lock"></i><input type="password" placeholder="Password" required />
              <input type="text" placeholder="Repeat Password" required />
              <button type="submit">Signup</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;