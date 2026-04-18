import { Routes, Route, Link } from 'react-router';
import Displaydata from './Displaydata';
import AddNewdata from './AddNewdata';
import Editdata from './Editdata';

function App() {
  return (
    <>
      <div className='container text-center'>
        <Link className="btn btn-primary" to="/">Display Data</Link>
        <br /><br />
        <Link className="btn btn-primary" to="/add">Add New Data</Link>
      </div>

      <Routes>
        <Route path="/" element={<Displaydata />} />
        <Route path="/add" element={<AddNewdata />} />
        <Route path="/edit/:id" element={<Editdata />} />
      </Routes>
    </>
  );
}

export default App;