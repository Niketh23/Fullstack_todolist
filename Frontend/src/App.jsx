import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import Display from './components/Display'

function App() {

  return (
    <>
      <h1 className='container'>TodoList Application</h1>
      <Display/>
    </>
  )
}

export default App
