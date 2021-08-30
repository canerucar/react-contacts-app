import {useState, useEffect} from 'react'

const initialFormValues = { fullname: '', phone_number: '' };

function Form({addContact, contacts}) {
  //console.log(addContact)
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(form.fullname === "" && form.phone_number === ""){
      return false
    }

    addContact([...contacts ,form]);
    //console.log(form);
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="please enter fullname"
          onChange={onChangeInput}
          value={form.fullname}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="please enter phone number"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
