import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./pages/Login";
import Nav from "./components/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Axios from 'axios';

function App() {

    // const [joke, setJoke] = useState("")

    // const getJoke =() => {
    //     Axios.get("https://official-joke-api.appspot.com/random_joke").then(
    //         (response) => {
    //             console.log(response);
    //             setJoke(response.data.setup + "..." + response .data.punchline)

    //     })
    // }
    const [name, setName] = useState('');

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/user', {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                });

                const content = await response.json();

                setName(content.name);
            }
        )();
    });


    return (
        <div className="App">
            {/* <button onClick = {getJoke}>Get Joke right now</button>
            {joke} */}
            <BrowserRouter>
                <Nav name={name} setName={setName}/>

                <main className="form-signin">
                    <Route path="/" exact component={() => <Home name={name}/>}/>
                    <Route path="/login" component={() => <Login setName={setName}/>}/>
                    <Route path="/register" component={Register}/>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
