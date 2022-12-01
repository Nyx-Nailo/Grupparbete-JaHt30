import { json } from "react-router-dom"

function ListBookPickup({storageItem}) 
{

    const list = eval(localStorage.getItem(storageItem))

    const List = (props) => 
    {

        const Li = (props) => 
        {
            return <li>{props.item.toString()}</li>
        }

        return (
        <>
            <br></br>
            <br></br>
            <h3>hej</h3>
            <ul>
                {Object.values(props.booking).map((item) => {return <Li item={item}/>})} 
            </ul>
        </>
        )
    }

    const Empty = () =>  
    {
        return <h1>Det finns inga bokade {storageItem === "travel" ? "resor" : "uphämtningar" }</h1>
    }

    return (
        <div>
            {localStorage.getItem(storageItem) !== null ? list.map((listItem) => {return <List booking={listItem}/>}) : <Empty/>}
        </div>
    )
}

export default ListBookPickup