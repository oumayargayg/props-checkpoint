
import './App.css';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">
      <Profile fullName = 'Oumaya Rgayg' Bio= 'red hair' Profession = 'Web Developper'>
        <img src='https://i.pinimg.com/originals/ea/d3/3e/ead33ede093dbb16e1810105261a36fd.png' alt='me'/>
      </Profile>

    </div>
  );
}

export default App;
