import { useContext } from 'react';
import { UserContext } from '../context/userContext';

function Profile() {
    const userData = useContext(UserContext);
    return (
        <div>
            <h1>Profile</h1>
            {JSON.stringify(userData)}
        </div>
    );
}

export default Profile;
