import logo from './logo.svg';
import './components/styles/App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import UserListPage from './pages/UserListPage/UserListPage';
import UserDetailsPage from './pages/UserDetailsPage/UserDetailsPage';
import CreateUserPage from './pages/CreateUserPage/CreateUserPage';
import { Routes, Route } from 'react-router';

function App() {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
  };

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<LandingPage />} />
        <Route path={'/LoginPage'} element={<LoginPage />} />
        <Route path={'/UserListPage'} element={<UserListPage />} />
        <Route path={'/UserDetailsPage'} element={<UserDetailsPage user={user} />} />
        <Route path={"/CreateUserPage"} element={<CreateUserPage />} />
      </Routes>
    </div>
  );
}

export default App;
