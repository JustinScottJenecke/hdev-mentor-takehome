import { useState } from 'react'
import '../App.css'
import EquipmentCard from '../components/EquipmentCard';

const Home = () => {

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