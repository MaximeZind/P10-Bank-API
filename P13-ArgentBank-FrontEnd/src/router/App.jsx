import '../styles/App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import BaseLayout from './BaseLayout';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import UserPage from '../pages/UserPage';
import Error from '../pages/Error';
import SignUp from '../pages/SignUp';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BaseLayout />} >
                    <Route index element={<Home />} />
                    <Route path='/signin' element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path='/userpage' element={<UserPage />} />
                    <Route path="/404" element={<Error />} />
                    <Route path="*" element={<Navigate to={'/404'} />} />
                </ Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
