/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from 'axios';
import Logo from "./logo.jsx";
import styles from "./Home.module.css";
import Botao01 from "./botao01.jsx";
import Sociais from "./sociais.jsx";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  const getPodts = async () => {

    try {
      
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
        );

      const data = response.data;
      
      setPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPodts();
  }, []);

  return (
    <div>
      <div className={styles.homeContainer}>
        <Logo />
        <div>
          <h1 className={styles.ibage}>teste</h1>
        </div>
        <Link to="logincliente">
          <Botao01 name="Cliente" />
        </Link>
        <Link to="logincolab">
          <Botao01 name="Colaborador" />
        </Link>

        <Sociais />
      </div>
    </div>
  );
}

export default Home;
