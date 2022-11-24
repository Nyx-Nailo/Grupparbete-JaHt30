import FormInput from '../Components/Form/FormInput';
import { inputs } from '../Components/Form/FormInputBookPickup';

const BookPickup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id='BookTravel'>
      <h1>Boka upphämtning</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gridColumnGap: '15px', gridRowGap: '5px' }}>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} />
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
