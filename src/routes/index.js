import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { Home, About, Profile } from '../Pages';

function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    );
}

export default Router;
