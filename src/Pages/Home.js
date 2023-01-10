import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { Content } from '../components/Content';
import { Sidebar } from '../components/Sidebar';
import { Toolbar } from '../components/Toolbar';

function Home() {
    return (
        <Container maxWidth="lg" sx={{ margin: '20px auto 50px' }}>
            <Toolbar />
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={9}>
                    <Content />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;
