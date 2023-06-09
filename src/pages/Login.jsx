import styled from "styled-components";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import supabaselogo from "../assets/supabaselogo.png";
import googlelogo from "../assets/logogoogle.png";

import React from 'react'

const Login = () => {
  
  const handleClick = () =>{
    
  }
  
  return (
    <div className="App">
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />

        <img src={reactLogo} className="logo react" alt="React logo" />

        <img src={supabaselogo} className="logo supabase" alt="Vite logo" />
      </div>
      
      <h1>Vite + React + Supabase</h1>
      
      <img src={googlelogo} className="logo google" alt="React logo" />
      
      <div className="card">
        <button >Iniciar con Google</button>
        <p>codigo369.com</p>
      </div>
      
      <p className="read-the-docs">
        Supabase implementa todo el poder de PostgreSQL
      </p>
    </div>
  );
}

const Container = styled.div``;

export default Login