import { useState } from 'react';

const BookTravel = () => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    phonenr: '',
    email: '',
    pickupcity: '',
    traveldate: '',
    allergy: '',
    animal: '',
    payment: '',
    extradriver: '',
    moretravels: '',
    moretravelsdatestart: '',
    moretravelsdateend: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (localStorage.getItem('travel')?.length) {
      const oldValues = JSON.parse(localStorage.getItem('travel'));
      const newValues = [...oldValues, values];
      localStorage.setItem('travel', JSON.stringify(newValues));
    } else {
      localStorage.setItem('travel', JSON.stringify([values]));
    }
    window.location = '/';
  };

  const onChange = (e) => {
    if (e.target.type === 'checkbox') {
      setValues({ ...values, [e.target.name]: e.target.checked });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  let currentDate = new Date().toJSON().slice(0, 16);

  let divHide = {
    display: 'none',
  };

  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => {
      setToggleValue(!toggleValue);
    };

    return [toggleValue, toggler];
  };

  const [toggle, setToggle] = useToggle();

  if (toggle) {
    divHide = {};
  }

  return (
    <div id='BookTravel'>
      <h1>Boka resa</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gridColumnGap: '15px', gridRowGap: '5px' }}>
          <div>
            <label htmlFor='firstname'>Förnamn</label>
          </div>
          <div>
            <input type='text' placeholder='Förnamn' name='firstname' pattern='^[A-ZÅÄÖa-zåäö]+' required onChange={onChange} />
          </div>
          <div>
            <label htmlFor='lastname'>Efternamn</label>
          </div>
          <div>
            <input type='text' placeholder='Efternamn' name='lastname' pattern='^[A-ZÅÄÖa-zåäö]+' required onChange={onChange} />
          </div>
          <div>
            <label htmlFor='phonenr'>Mobil nummer</label>
          </div>
          <div>
            <input type='tel' placeholder='070-1234567' name='phonenr' pattern='[0-9]{3}-[0-9]{7}' required onChange={onChange} />
          </div>
          <div>
            <label htmlFor='email'>E-post adress</label>
          </div>
          <div>
            <input type='email' placeholder='email@domän.se' name='email' pattern='[A-ZÅÄÖa-zåäö0-9._%+-]+@[A-ZÅÄÖa-zåäö0-9.-]+.[A-ZÅÄÖa-zåäö]{2,}$' required onChange={onChange} />
          </div>
          <div>
            <label htmlFor='startcity'>Utgångs ort</label>
          </div>
          <div>
            <input type='text' placeholder='Utgångs ort' name='startcity' pattern='^[A-ZÅÄÖa-zåäö]+' required onChange={onChange} />
          </div>
          <div>
            <label htmlFor='endcity'>Ankomst ort</label>
          </div>
          <div>
            <input type='text' placeholder='Ankomst ort' name='endcity' pattern='^[A-ZÅÄÖa-zåäö]+' required onChange={onChange} />
          </div>
          <div>
            <label htmlFor='traveldate'>Datum för resa</label>
          </div>
          <div>
            <input type='datetime-local' name='traveldate' min={currentDate} required onChange={onChange} />
          </div>
          <div>
            <label htmlFor='allergy'>Allergier?</label>
          </div>
          <div>
            <input type='text' placeholder='Allergier?' name='allergy' onChange={onChange} />
          </div>
          <div>
            <label htmlFor='animal'>Djur med på resa?</label>
          </div>
          <div>
            <input type='checkbox' name='animal' onChange={onChange} />
          </div>
          <div>
            <label htmlFor='payment'>Ersättning?</label>
          </div>
          <div>
            <input type='checkbox' name='payment' onChange={onChange} />
          </div>
          <div>
            <label htmlFor='extradriver'>Kan du vara chaufför?</label>
          </div>
          <div>
            <input type='checkbox' name='extradriver' onChange={onChange} />
          </div>
          <div>
            <label htmlFor='moretravels'>Upprepande resa?</label>
          </div>
          <div>
            <input type='checkbox' name='moretravels' onChange={onChange} onClick={setToggle} />
          </div>
          <div style={divHide}>
            <label htmlFor='moretravelsdatestart'>Datum för avgång</label>
          </div>
          <div style={divHide}>
            <input type='datetime-local' name='moretravelsdatestart' min={currentDate} required onChange={onChange} />
          </div>
          <div style={divHide}>
            <label htmlFor='moretravelsdateend'>Datum för sista dagen</label>
          </div>
          <div style={divHide}>
            <input type='date' name='moretravelsdateend' min={currentDate.slice(0, 10)} required onChange={onChange} />
          </div>
          <div>
            <label>Övrig information</label>
          </div>
          <div>
            <textarea name='misc' rows='5' placeholder='Pauser, åksjuk etc...'></textarea>
          </div>
          <div>
            <button>Boka</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookTravel;
