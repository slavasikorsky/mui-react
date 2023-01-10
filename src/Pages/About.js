import { useContext } from 'react';
import { UserContext } from '../context/userContext';

function About() {
    const userData = useContext(UserContext);
    return (
        <div>
            <h1>About</h1>
            {JSON.stringify(userData)}
        </div>
    );
}

export default About;
