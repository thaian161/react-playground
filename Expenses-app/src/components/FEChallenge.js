import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [enteredFirstName, setEnteredFirstName]= useState('')
  const [enteredLastName, setEnteredLastName]= useState('')
  const [enteredPhoneNum, setEnteredPhoneNum,]= useState('')

  const firstNameChangeHandler = (event) =>{
    setEnteredFirstName(event.target.value);
  }
  const lastNameChangeHandler = (event) =>{
    setEnteredLastName(event.target.value);
  }
  const phoneNumChangeHandler = (event) =>{
    setEnteredPhoneNum(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      phoneNumber: enteredPhoneNum,
    }

    console.log("User Data Obj",userData)

    addEntryToPhoneBook(userData);

    setEnteredFirstName('');
    setEnteredLastName('');
    setEnteredPhoneNum('');
  }

  return (
    <form 
      onSubmit={submitHandler} 
      style={style.form.container}
    >
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        onChange={firstNameChangeHandler}
        value={enteredFirstName}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
        onChange={lastNameChangeHandler}
        value={enteredLastName}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
        onChange={phoneNumChangeHandler}
        value={enteredPhoneNum}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable({ userData }) {
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 

      <tbody>
      {userData.map((data, index)=>(
        <tr key={index}>
          <td  style={style.tableCell}>{data.firstName}</td>
          <td  style={style.tableCell}>{data.lastName}</td>
          <td  style={style.tableCell}>{data.phoneNumber}</td>
        </tr>
      ))}
      </tbody>

    </table>
  );
}

function Application(props) {
  const [userData, setUserData]= useState([]);

  const addEntryToPhoneBook = (data) => {
    setUserData([...userData, data]);
  }
  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook}/>
      <InformationTable userData={userData}/>
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);