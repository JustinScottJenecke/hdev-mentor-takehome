
const EquipmentCard = (props) => {
    return (
        <div className="">
            <h3 className="">
                {props.inventoryItem}
            </h3>
            <input type="number" placeholder="0"/>
            <br/>
            <button>Checkout</button>
        </div>
    )
}

export default EquipmentCard;