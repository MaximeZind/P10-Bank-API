import '../styles/App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BaseLayout from './BaseLayout';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import UserPage from '../pages/UserPage';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BaseLayout />} >
                    <Route index element={<Home />} />
                    <Route path='/signin' element={<SignIn />} />
                    <Route path='/userpage' element={<UserPage />} />
                    {/* <Route path="*" element={<Error />} /> */}
                </ Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App
