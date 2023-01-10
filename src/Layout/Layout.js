import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import { Header } from '../components/Header';

function Layout() {
    return (
        <>
            <Header />
            <Container maxWidth="xl">
                <Outlet />
            </Container>
        </>
    );
}

export default Layout;
