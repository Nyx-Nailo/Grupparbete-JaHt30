import { useState } from 'react';

import FormInput from '../Components/Form/FormInput';
import { inputs } from '../Components/Form/FormInputBookPickup';

const BookPickup = () => {
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

    if (localStorage.getItem('pickups')?.length) {
      const oldValues = JSON.parse(localStorage.getItem('pickups'));
      const newValues = [...oldValues, values];
      localStorage.setItem('pickups', JSON.stringify(newValues));
    } else {
      localStorage.setItem('pickups', JSON.stringify([values]));
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

  return (
    <div id='BookTravel'>
      <h1>Boka upphämtning</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gridColumnGap: '15px', gridRowGap: '5px' }}>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))}
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

export default BookPickup;
