import React, { useState } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Profile from './Profile';
import AuthRoute from './AuthRoute';

import NotFound from './NotFound';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';


const users = [
  { email: '123@test.com', password: '123', name: 'kim' },
  { email: 'abc@test.com', password: 'abc', name: 'Ahn' },
  { email: 'qwe@test.com', password: 'qwe', name: 'Lee' },
];

/* 예시용 인증 모듈 */
function signIn({ email, password }) {
  const user = users.find((user) => user.email === email && user.password === password);
  if(user === undefined) throw new Error();
  return user;
}

function App() {

  /* 로그인, 로그아웃 구현 : state 로 로그인 상태관리 */
  const [user, setUser] = useState(null);
  const authenticated = user != null;   // user 가 null 이 아니면 true, null 이면 false

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  // console.log('authenticated', authenticated);

  return (
    <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>

        {
          authenticated ? (
            <LogoutButton logout={logout} />
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )
        }
      </header>
      <hr />
      <main>
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/about" component={ About } />
          {/* 인증 필요한 페이지 */}
          <AuthRoute
            authenticated={ authenticated }
            path="/profile"
            render={props => (
              <Profile user={user} {...props} />
            )}
          />
          {/* 로그인 페이지 */}
          <Route 
            path="/login"
            render={props => (
              <LoginForm 
                authenticated={ authenticated }
                login={ login }
                {...props}
              /> 
            )}
          />
          <Route component={ NotFound } />
        </Switch>
      </main>
    </Router>
  )
}

export default App;
