import { useEffect, useState } from 'react'
import '../App.css'
import EquipmentCard from '../components/EquipmentCard';
import { useNavigate } from 'react-router-dom';
// import { useJwt } from "react-jwt";
import { jwtDecode } from "jwt-decode";


const Home = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState('');
    //const {decodedToken, isExpired} = useJwt(localStorage.getItem('hdev-mt-auth-token'));
    // console.log(decodedToken)

    useEffect( () => {
        
        try {
            const decodedToken = jwtDecode(localStorage.getItem('hdev-mt-auth-token'));    
        } catch (error) {
            console.log(error, 'no valid token');
            navigate('/login');
        }
        // if(!decodedToken){
        // }
    });

    const logout = () => {
        localStorage.removeItem('hdev-mt-auth-token');
        alert('Logged out');
        navigate(0);
    }

    const mockInventory = [
        "laptop",
        "monitor",
        "mouse",
        "printer",
        "keyboard",
        "laptop charger",
        "hdmi cable",
        "stationary"
    ];

    return (
        <>
            <nav>
                {/* <h3>Hi {decodedToken.name} -</h3>  */}
                <button onClick={logout}>Logout</button>
            </nav>
            <h1>Home</h1>
            <hr />
            <h2>All Inventory:</h2>
            <ul className='inventory-list'>
                {
                    mockInventory.map( (inventoryItem, i) => {
                        return (
                        <li key={i} className='equipment-card'>
                            <EquipmentCard inventoryItem={inventoryItem}/>
                        </li>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default Home;