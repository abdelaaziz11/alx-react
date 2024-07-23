import React from 'react';
import logo from './holberton-logo.jpeg';
import './App.css';

function App() {
    return (
        <>
            <div className="App-header">
                <header>
                    <img src={ logo }></img>
                    <h1>School dashboard</h1>
                </header>
            </div>
            <div className="App-body">
                <header><p>Login to access the full dashboard</p></header>
            </div>
            <div className="App-footer">
                <header><p>Copyright 2020 - holberton School</p></header>
            </div>
        </>
    );
}
export default App;