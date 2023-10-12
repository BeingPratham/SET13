import './App.css';
import Armstrong from './components/Armstrong';
import Login from './components/Login';

function App() {
  return (
    <>
    <div className='login'>
    <Login title="Login Form" submitButtonText="Login"></Login>
    </div>
    <div className='armstrong'>
    <Armstrong></Armstrong>
    </div>

    </>
  );
}

export default App;
