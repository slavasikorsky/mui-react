import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import Filter from '../Filter';

function Sidebar() {
    const IconStyles = {
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        zIndex: '-1',
    };

    const Form = styled('div')(() => ({
        display: 'flex',
        flexFlow: 'column',
        margin: '0 0 20px',
    }));

    const InputWrapper = styled('div')(() => ({
        position: 'relative',
        margin: '0 0 10px',
    }));

    const Input = styled(TextField)(() => ({
        width: '100%',
        '& input': {
            height: '40px',
            padding: '5px 40px',
        },
        '& label': {
            padding: '0 20px',
            '&.Mui-focused': {
                padding: '0',
            },
        },
    }));

    const IconSearch = styled(SearchIcon)(() => IconStyles);
    const IconPlace = styled(PlaceIcon)(() => IconStyles);

    return (
        <>
            <Form className="search-form">
                <InputWrapper>
                    <Input
                        id="search-basic"
                        label="Search"
                        variant="outlined"
                    />
                    <IconSearch />
                </InputWrapper>
                <InputWrapper>
                    <Input
                        id="location-basic"
                        label="Location"
                        variant="outlined"
                    />
                    <IconPlace />
                </InputWrapper>
                <Button variant="contained">ACTION</Button>
            </Form>
            <Filter />
        </>
    );
}

export default Sidebar;
