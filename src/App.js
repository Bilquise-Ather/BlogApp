
import Home from './pages/Home';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Create from './pages/Create';
import BaseLayout from './layouts/baseLayout';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';
import UserRegistration from './pages/UserRegistration';
import Login from './pages/Login';
import Logout from './pages/Logout';
import './index.css';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<BaseLayout Children={Home} />} />

        <Route exact path="/create" element={<BaseLayout Children={Create} />} />

        <Route exact path="/getBlogs/:_id" element={<BaseLayout Children={BlogDetails} />} />

        <Route exact path="/user-reg" element={<BaseLayout Children={UserRegistration} />} />

        <Route exact path="/login" element={<BaseLayout Children={Login} />} />

        <Route exact path="/logout" element={<BaseLayout Children={Logout} />} />


        <Route exact path="*" element={<BaseLayout Children={NotFound} />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
