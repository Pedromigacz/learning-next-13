import { FormEventHandler } from 'react';

const Form = (): JSX.Element => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='title'>title</label>
      <input type='text' id='title' />
    </form>
  );
};

export default Form;
