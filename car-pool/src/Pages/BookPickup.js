const sendData = () => {
  alert('aa');
};

const DivInput = (props) => {
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
    <div id='BookTravel'>
      <h1>Boka upphämtning</h1>
      <div style={{ width: '400px', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <DivInput forField='firstName' textField='Förnamn:' typeField='text' />
        <DivInput forField='lastName' textField='Efternamn:' typeField='text' />
        <DivInput forField='phoneNr' textField='Telefon nummer:' typeField='tel' />
        <DivInput forField='email' textField='E-post adress:' typeField='email' />
        <DivInput forField='pickupCity' textField='Upphämtnings ort:' typeField='text' />
        <div>
          <label htmlFor='travelDate'>Datum: </label>
        </div>
        <div>
          <input type='date' name='travelDate' />
          <input type='time' name='travelTime' />
        </div>
        <DivInput forField='allergy' textField='Allergier:' typeField='text' />
        <DivInput forField='animals' textField='Djur:' typeField='text' />
        <DivInput forField='payment' textField='Ersättning:' typeField='checkbox' />
        <DivInput forField='extraDriver' textField='Villig att köra en sträcka:' typeField='checkbox' />
        <DivInput forField='moreTravels' textField='Upprepande resa:' typeField='checkbox' />
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
