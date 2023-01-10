import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';

export default function Filter() {
    return (
        <>
            <FormControl sx={{ margin: '0 0 10px' }}>
                <FormLabel id="demo-radio-buttons-group-label">
                    Status
                </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel
                        value="label"
                        control={<Radio />}
                        label="Label"
                    />
                    <FormControlLabel
                        value="opened"
                        control={<Radio />}
                        label="Opened"
                    />
                    <FormControlLabel
                        value="archive"
                        control={<Radio />}
                        label="Archive"
                    />
                </RadioGroup>
            </FormControl>
            <FormGroup sx={{ margin: '0 0 10px' }}>
                <FormLabel id="checkbox-label">Type</FormLabel>
                <FormControlLabel control={<Checkbox />} label="Freelance" />
                <FormControlLabel control={<Checkbox />} label="Fullstack" />
                <FormControlLabel control={<Checkbox />} label="Internship" />
                <FormControlLabel control={<Checkbox />} label="Part-time" />
            </FormGroup>
            <FormGroup>
                <FormLabel id="checkbox-label-2">Level</FormLabel>
                <FormControlLabel control={<Checkbox />} label="Freelance" />
                <FormControlLabel control={<Checkbox />} label="Fullstack" />
                <FormControlLabel control={<Checkbox />} label="Internship" />
                <FormControlLabel control={<Checkbox />} label="Part-time" />
                <Link href="#/">Show more</Link>
            </FormGroup>
        </>
    );
}
