import { Button, ButtonGroup, Typography } from '@mui/material';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { styled } from '@mui/material/styles';
import { useState } from 'react';

const Wrapper = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const RightContent = styled('div')(() => ({
    display: 'flex',
    alignItems: 'flex-start',
}));

const IconButton = styled(Button)(({ theme }) => ({
    borderColor: theme.palette.common.gray,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    '& .MuiButton-startIcon': {
        margin: '0',
    },
    '&:hover': {
        borderRadius: '0',
    },
}));

const UserSelect = styled(Select)(({ theme }) => ({
    marginLeft: '10px',
    borderColor: theme.palette.common.gray,
    padding: '0',
    width: '100px',
    minHeight: '30px',
    '& .MuiOutlinedInput-input': {
        padding: '9px',
    },
    '& label': {
        bottom: '-20px',
        display: 'none',
    },
}));

function Toolbar() {
    const [sort, setSort] = useState('');

    const handleChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <Wrapper>
            <Typography
                variant="h2"
                component="h2"
                sx={{
                    display: 'flex',
                    fontSize: '24px',
                    lineHeight: '150%',
                    letterSpacing: '0.15px',
                    margin: '0 0 30px',
                }}
            >
                Latest job
            </Typography>
            <RightContent>
                <ButtonGroup>
                    <IconButton
                        ize="small"
                        color="secondary"
                        startIcon={<ViewModuleIcon />}
                    />
                    <IconButton
                        ize="small"
                        color="secondary"
                        startIcon={<ViewModuleIcon />}
                    />
                </ButtonGroup>
                <FormControl>
                    <InputLabel className="select-label">Sort</InputLabel>
                    <UserSelect
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Latest</MenuItem>
                        <MenuItem value={20}>Abc</MenuItem>
                        <MenuItem value={30}>Custom</MenuItem>
                    </UserSelect>
                </FormControl>
            </RightContent>
        </Wrapper>
    );
}

export default Toolbar;
