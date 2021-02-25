import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const counter = useRef(1);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const notification = new Notification(`Hello World! ${counter.current}`);

    //         setTimeout(() => {
    //             counter.current++;
    //             notification.close();
    //         }, 2000);
    //     }, 3000);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
