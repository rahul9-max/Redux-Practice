import React from 'react';
import Form from './components/Form';
import Logout from './components/Logout';
import  selectHello  from './components/Userslice';
import { useSelector } from 'react-redux';

function App() {
  const good=useSelector((state)=>state.user.hello)
  // const good=useSelector(selectHello)
  return (
    <>
{good ? <Logout/> : <Form/>}
{/* <Form/> */}
    </>
  );
}

export default App;
