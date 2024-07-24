import logo from './holberton-logo.jpeg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
    return (
        <div className="App">
                <div className="App-header">
                    <img src={ logo } alt="logo"></img>
                    <h1>School dashboard</h1>
                </div>
                <hr/>
                <div className="App-body"><p>Login to access the full dashboard</p></div>

                <div className="App-footer"><hr/><p>Copyright {getFullYear()} - {getFooterCopy(true)}</p></div>
        </div>
    );
}
export default App;