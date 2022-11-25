const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  return (
    <>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <input {...inputProps} onChange={onChange} />
      </div>
    </>
  );
};

export default FormInput;
