import { useState } from 'react';
import PropTypes from 'prop-types';

const NewStudentForm = (props) => {
    const [formFields, setFormFields] = useState({
      name: '',
      email: '',
    });
    // const handleNameChange = (event) => {
    //   setFormFields({
    //     ...formFields,
    //     name: event.target.value,
    //   });
    // };
    // const handleEmailChange = (event) => {
    //   setFormFields({
    //     ...formFields,
    //     email: event.target.value,
    //   });
    // };
    const handleChange = (event) => {
      setFormFields({ ...formFields, [event.target.name]: event.target.value});
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      props.onStudentAdd({
        name: formFields.name,
        email: formFields.email,
      });
      setFormFields({
          name: '',
          email: '',
      });
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                  id="name" 
                  name="name"
                  value={formFields.name}
                  onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                  id="email" 
                  name="email"
                  value={formFields.email}
                  onChange={handleChange} />
            </div>
            <input
                type="submit"
                value="Add Student" />
        </form>
    );
};

NewStudentForm.propTypes = {
  onStudentAdd: PropTypes.func.isRequired,
};
export default NewStudentForm;