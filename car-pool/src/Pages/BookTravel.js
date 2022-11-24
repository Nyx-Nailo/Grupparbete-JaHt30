const sendData = () => {
  alert('aa');
};

const TrInput = (props) => {
  return (
    <>
      <div>
        <label htmlFor={props.forField}>{props.textField} </label>
      </div>
      <div>
        <input type={props.typeField} name={props.forField} />
      </div>
    </>
  );
};

const BookTravel = () => {
  return (
    <div id="BookTravel">
      <h1>Boka resa</h1>
      <div style={{ width: '400px', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <TrInput forField='firstName' textField='Förnamn:' typeField='text' />
        <TrInput forField='lastName' textField='Efternamn:' typeField='text' />
        <TrInput forField='phoneNr' textField='Telefon nummer:' typeField='tel' />
        <TrInput forField='email' textField='E-post adress:' typeField='email' />
        <TrInput forField='startCity' textField='Start ort:' typeField='text' />
        <TrInput forField='endCity' textField='Slut ort:' typeField='text' />
        <div>
          <label htmlFor='travelDate'>Datum: </label>
        </div>
        <div>
          <input type='date' name='travelDate' />
          <input type='time' name='travelTime' />
        </div>
        <TrInput forField='allergy' textField='Allergier:' typeField='text' />
        <TrInput forField='animals' textField='Djur:' typeField='text' />
        <TrInput forField='payment' textField='Ersättning:' typeField='checkbox' />
        <TrInput forField='extraDriver' textField='Villig att köra en sträcka:' typeField='checkbox' />
        <TrInput forField='moreTravels' textField='Upprepande resa:' typeField='checkbox' />
        <div>
          <label htmlFor='moreTimeStart'>Datum från: </label>
        </div>
        <div>
          <input type='date' name='moreDateStart' />
          <input type='time' name='moreTimeStart' />
        </div>
        <div>
          <label htmlFor='moreTimeEnd'>Datum till: </label>
        </div>
        <div>
          <input type='date' name='moreDateEnd' /> <input type='time' name='moreTimeEnd' />
        </div>
        <div>
          <label htmlFor='misc'>Övrig information: </label>
        </div>
        <div>
          <textarea name='misc' rows='6'></textarea>
        </div>
        <div>
          <button onClick={sendData}>Boka</button>
        </div>
      </div>
    </div>
  );
};

export default BookTravel;
