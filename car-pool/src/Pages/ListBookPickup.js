import { json } from "react-router-dom"

function ListBookPickup() 
{

    const list = eval(localStorage.getItem("travel"))

    //console.log(list)

    const List = (props) => 
    {

        const Li = (props) => 
        {
            return <li>{props.item.toString()}</li>
        }


        console.log()

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

    return (
        <div>
            {list.map((listItem) => {return <List booking={listItem}/>})}
        </div>
    )
}

export default ListBookPickup