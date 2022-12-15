import { useState } from 'react';

function ListBookPickup({ storageItem }) {
  var list = JSON.parse(localStorage.getItem(storageItem));

  const [stateList, setUpdateList] = useState(list);

  const formFields = {
    firstname: 'Förnamn',
    lastname: 'Efternamn',
    phonenr: 'Mobil nummer',
    email: 'E-post adress',
    traveldate: 'Datum för resa',
    allergy: 'Allergier',
    animal: 'Djur med på resa',
    payment: 'Ersättning',
    extradriver: 'Kan du vara chaufför',
    moretravels: 'Upprepande resa',
    moretravelsdatestart: 'Datum för avgång',
    moretravelsdateend: 'Datum för sista resan',
    startcity: 'Utgångs ort',
    endcity: 'Destinations ort',
    misc: 'Övrig information',
  };

  const List = (props) => {
    const RemoveList = (num) => {
      if (window.confirm('Vill du boka ' + (storageItem === 'travel' ? 'Resa ' : 'Upphämtning ') + (num + 1))) {
        stateList.splice(num, 1);
        localStorage.setItem(storageItem, JSON.stringify(stateList));
        setUpdateList(JSON.parse(localStorage.getItem(storageItem)));
      }
    };

    const Div = (props) => {
      if (props.value === true) {
        return (
          <>
            <div>{props.formField}</div>
            <div className='listOrange'>Ja</div>
          </>
        );
      }

      if (props.value === false) {
        return <></>;
      }

      if (props.formField === 'Allergier' && props.value !== '') {
        return (
          <>
            <div>{props.formField}</div>
            <div className='listOrange'>{props.value}</div>
          </>
        );
      }

      if (props.formField === 'Allergier') {
        return <></>;
      }

      return (
        <>
          {props.value !== '' && (
            <>
              <div>{props.formField}</div>
              <div>{props.value}</div>
            </>
          )}
        </>
      );
    };

    return (
      <div>
        <h3>
          {storageItem === 'travel' ? 'Resa ' : 'Upphämtning '} {props.num + 1}
        </h3>
        <div id='listGrid'>
          {Object.keys(props.booking).map((keyValue, index) => {
            return <Div formField={formFields[keyValue]} value={keyValue === 'traveldate' ? props.booking[keyValue].replace('T', ' ') : props.booking[keyValue]} key={Object.keys(props.booking)[index] + props.num} />;
          })}
        </div>
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => {
            RemoveList(props.num);
          }}>
          Boka
        </button>
      </div>
    );
  };

  const Empty = () => {
    return (
      <div id='nolist'>
        <h1>Det finns inga bokade {storageItem === 'travel' ? 'resor' : 'upphämtningar'}...</h1>
      </div>
    );
  };

  return (
    <div id='listing'>
      {JSON.parse(localStorage.getItem(storageItem)) !== null && JSON.parse(localStorage.getItem(storageItem)).length !== 0 ? (
        stateList.map((listItem, index) => {
          return <List booking={listItem} num={index} key={listItem + index} />;
        })
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default ListBookPickup;
