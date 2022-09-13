
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}
      >
        <Link to="/invoices">Invoices</Link> | {""}
        <Link to="/expenses">Expenses</Link>
         <h1>Bookkeeper</h1> 
         </nav>
          </div>
  );
}

export default App;
