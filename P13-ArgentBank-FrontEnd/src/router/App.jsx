import '../styles/App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BaseLayout from './BaseLayout';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<BaseLayout />} >
                {/* <Route index element={<Home />} /> */}
                {/* <Route path="*" element={<Error />} /> */}
            </ Route>
        </Routes>
    </BrowserRouter>
);
}

export default App
