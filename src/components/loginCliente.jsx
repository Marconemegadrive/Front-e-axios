/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from "./logo.jsx";
import styles from "./loginCliente.module.css";
import Sociais from "./sociais.jsx";
import Form from "./formLogin.jsx";


function Login() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.post(
        'http://localhost:3333//usuario/autenticacao'
      );
      try {
        const data = response.data;
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);


  return (
    <div>
      <div className={styles.loginWrapper}>
        <Logo />
        <div className={styles.loginConteiner}>
          <h1>Login</h1>
          {posts.map((user, index) => (
          <p key={index}>{user.name}</p>
          ))}
          <Form />
        </div>
      </div>
      <Sociais />
    </div>
  );
}

export default Login;