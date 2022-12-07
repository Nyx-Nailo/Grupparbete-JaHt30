import { useState } from 'react';

function ListBookPickup({ storageItem }) {
  var list = JSON.parse(localStorage.getItem(storageItem));

  const [stateList, setUpdateList] = useState(list);

  const List = (props) => {
    const RemoveList = (num) => {
      if (window.confirm('Vill du boka ' + (storageItem === 'travel' ? 'Resa ' : 'Upphämtning ') + (num + 1))) {
        stateList.splice(num, 1);
        localStorage.setItem(storageItem, JSON.stringify(stateList));
        setUpdateList(JSON.parse(localStorage.getItem(storageItem)));
      }
    };

    const Li = (props) => {
      return <li>{props.item.toString()}</li>;
    };

    return (
      <div>
        <h3>
          {storageItem === 'travel' ? 'Resa ' : 'Upphämtning '} {props.num + 1}
        </h3>
        <ul>
          {Object.values(props.booking).map((item, index) => {
            return <Li item={item} key={Object.keys(props.booking)[index] + props.num} />;
          })}
        </ul>
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
    return <h1>Det finns inga bokade {storageItem === 'travel' ? 'resor' : 'uphämtningar'}</h1>;
  };

  return (
    <div>
      {localStorage.getItem(storageItem) !== null ? (
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
