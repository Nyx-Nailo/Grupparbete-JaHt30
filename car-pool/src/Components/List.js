
import { useState } from "react"

function ListBookPickup({storageItem}) 
{

    var list = JSON.parse(localStorage.getItem(storageItem))

    const [stateList, setUpdateList] = useState(list)

    const formFields = {"firstname":"Förnamn","lastname":"Efternamn","phonenr":"Mobil nummer","email":"E-post adress","traveldate":"Datum för resa","allergy":"Allergier","animal":"Djur med på resa","payment":"Ersättning","extradriver":"Kan du vara chaufför","moretravels":"Upprepande resa","moretravelsdatestart":"Datum för avgång","moretravelsdateend":"Datum för sista dagen","startcity":"Utgångs ort","endcity":"Ankomst ort","pickupcity":"Upphämtnings ort","misc":"Övrig information"}

    const List = (props) => 
    {

        const RemoveList = (num) => 
    {

        
        if (window.confirm("Vill du boka " + (storageItem === "travel" ? "Resa " : "Upphämtning ") + (num + 1)))
        {
            stateList.splice(num,1)
            localStorage.setItem(storageItem,JSON.stringify(stateList))
            setUpdateList(JSON.parse(localStorage.getItem(storageItem)))
        }
    }

        const Li = (props) => 
        {
            return <>{props.value !== "" && <li>{props.formField + ": " + props.value}</li> }</>
        }

        return (
        <div>
            <h3>{storageItem === "travel" ? "Resa " : "Upphämtning "} {props.num + 1}</h3>
            <ul>
                {Object.keys(props.booking).map((keyValue,index) => {return <Li formField={formFields[keyValue]} value={keyValue === "moretravelsdatestart" || keyValue === "traveldate" ? props.booking[keyValue].replace("T"," ") : props.booking[keyValue].toString()} key={Object.keys(props.booking)[index] + props.num}/>})} 
            </ul>
            <a style={{cursor: "pointer"}} onClick={() => {RemoveList(props.num)}} >Boka</a>
        </div>
        )
    }

    const Empty = () =>  
    {
        return <h1>Det finns inga bokade {storageItem === "travel" ? "resor" : "uphämtningar" }</h1>
    }

  return (<div>{localStorage.getItem(storageItem) !== null ? (stateList.map((listItem, index) => {return <List booking={listItem} num={index} key={listItem + index} />;})) : (<Empty />)}</div>);
}

export default ListBookPickup
