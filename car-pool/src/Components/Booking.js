import { useState } from 'react';

const Booking = (props) => {
  const bookType = props.storageItem;

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    phonenr: '',
    email: '',
    startcity: '',
    endcity: '',
    traveldate: '',
    allergy: '',
    animal: '',
    payment: '',
    extradriver: '',
    moretravels: '',
    moretravelsdateend: '',
    misc: '',
  });

  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (localStorage.getItem(bookType)?.length) {
      const oldValues = JSON.parse(localStorage.getItem(bookType));
      const newValues = [...oldValues, values];
      localStorage.setItem(bookType, JSON.stringify(newValues));
    } else {
      localStorage.setItem(bookType, JSON.stringify([values]));
    }
    window.location = bookType === 'pickups' ? '/lista-upphamtningar' : '/lista-resor';
  };

  const onChange = (e) => {
    if (e.target.type === 'checkbox') {
      setValues({ ...values, [e.target.name]: e.target.checked });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }

    if (e.target.name === 'traveldate') {
      values.moretravelsdateend = e.target.value.slice(0, 10);
    }
  };

  let currentDate = new Date().toJSON().slice(0, 16);

  if (values.traveldate === '') {
    values.traveldate = currentDate;
  }

  return (
    <div id='BookTravel'>
      <h1>Boka {bookType === 'pickups' ? 'upphämtning' : 'resa'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor='firstname'>Förnamn</label>
          </div>
          <div>
            <input
              type='text'
              placeholder='Förnamn'
              name='firstname'
              pattern="\b([A-ÖÀ-ÿ][-,a-ö. ']+[ ]*)"
              required
              minlength='3'
              onChange={onChange}
            />
            {values.firstname.length < 3 && values.firstname.length > 0 ? (
              <div className='error'>Förnamn måste vara minst 3 bokstäver!</div>
            ) : (
              ''
            )}
          </div>
          <div>
            <label htmlFor='lastname'>Efternamn</label>
          </div>
          <div>
            <input
              type='text'
              placeholder='Efternamn'
              name='lastname'
              pattern="\b([A-ÖÀ-ÿ][-,a-ö. ']+[ ]*)"
              required
              minlength='3'
              onChange={onChange}
            />
            {values.lastname.length < 3 && values.lastname.length > 0 ? (
              <div className='error'>Efternamn måste vara minst 3 bokstäver!</div>
            ) : (
              ''
            )}
          </div>
          <div>
            <label htmlFor='phonenr'>Mobil nummer</label>
          </div>
          <div>
            <input
              type='tel'
              placeholder='070-1234567'
              name='phonenr'
              pattern='[0-9]{3}-[0-9]{7}'
              title='070-1234567'
              maxLength='11'
              required
              onChange={onChange}
            />
            {values.phonenr.length < 11 && values.phonenr.length > 0 ? (
              <div className='error'>Mobil nummer måste vara 8 tecken! (070-1234567)</div>
            ) : (
              ''
            )}
          </div>
          <div>
            <label htmlFor='email'>E-post adress</label>
          </div>
          <div>
            <input
              type='email'
              placeholder='email@domän.se'
              name='email'
              pattern='[A-ZÅÄÖa-zåäö0-9._%+-]+@[A-ZÅÄÖa-zåäö0-9.-]+.[A-ZÅÄÖa-zåäö]{2,}$'
              required
              onChange={onChange}
            />
            {!values.email.includes('@') && values.email.length > 0 ? (
              <div className='error'>E-post adressen måste innehålla ett @</div>
            ) : (
              ''
            )}
          </div>
          <div>
            <label htmlFor='startcity'>Utgångs ort</label>
          </div>
          <div>
            <input
              type='text'
              placeholder='Utgångs ort'
              name='startcity'
              pattern='^[A-ZÅÄÖa-zåäö]+'
              minlength='3'
              required
              onChange={onChange}
            />
            {values.startcity.length < 3 && values.startcity.length > 0 ? (
              <div className='error'>Utgångs ort måste vara minst 3 bokstäver!</div>
            ) : (
              ''
            )}
          </div>
          <div>
            <label htmlFor='endcity'>Destinations ort</label>
          </div>
          <div>
            <input
              type='text'
              placeholder='Destinations ort'
              name='endcity'
              pattern='^[A-ZÅÄÖa-zåäö]+'
              minlength='3'
              required
              onChange={onChange}
            />
            {values.endcity.length < 3 && values.endcity.length > 0 ? (
              <div className='error'>Destinations ort måste vara minst 3 bokstäver!</div>
            ) : (
              ''
            )}
          </div>
          <div>
            <label htmlFor='traveldate'>Datum för resa</label>
          </div>
          <div>
            <input
              type='datetime-local'
              name='traveldate'
              value={values.traveldate ? values.traveldate : currentDate}
              min={currentDate}
              required
              onChange={onChange}
            />
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
            <input
              type='checkbox'
              name='moretravels'
              onChange={onChange}
              onClick={() => setShow(!show)}
            />
          </div>
          {show && (
            <>
              <div>
                <label htmlFor='moretravelsdateend'>Datum för sista dagen</label>
              </div>
              <div>
                <input
                  type='date'
                  name='moretravelsdateend'
                  value={
                    values.moretravelsdateend > values.traveldate
                      ? values.moretravelsdateend
                      : values.traveldate.slice(0, 10)
                  }
                  min={values.traveldate.slice(0, 10)}
                  required
                  onChange={onChange}
                />
              </div>
            </>
          )}
          <div>
            <label>Övrig information</label>
          </div>
          <div>
            <textarea
              name='misc'
              rows='5'
              placeholder='Pauser, åksjuk etc...'
              onChange={onChange}></textarea>
          </div>
          <div>
            <button>Boka</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Booking;
