import { useState } from 'react';

import FormInput from '../Components/Form/FormInput';
import { inputs } from '../Components/Form/FormInputBookTravel';

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

  return (
    <div id='BookTravel'>
      <h1>Boka resa</h1>
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

export default BookTravel;
