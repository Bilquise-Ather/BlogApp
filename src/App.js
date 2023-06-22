
import Home from './pages/Home';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Create from './pages/Create';
import BaseLayout from './layouts/baseLayout';
import NotFound from './pages/NotFound';
import UserRegistration from './pages/UserRegistration';
import Login from './pages/Login';
import Profile from './pages/Profile';
import './index.css';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<BaseLayout Children={Home} />} />

        <Route exact path="/create" element={<BaseLayout Children={Create} />} />

        <Route exact path="/getBlogs/:_id" element={<BaseLayout Children={Create} />} />

        <Route exact path="/user-reg" element={<BaseLayout Children={UserRegistration} />} />

        <Route exact path="/login" element={<BaseLayout Children={Login} />} />

        <Route exact path="/profile" element={<BaseLayout Children={Profile} />} />

        <Route exact path="*" element={<BaseLayout Children={NotFound} />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
