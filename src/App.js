import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './components/Shared/MenuBar/MenuBar';
import Banner from './components/Shared/Banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';
import Services from './components/Services/Services';
import WorkProcess from './components/WorkProcess/WorkProcess';
import Events from './components/Events/Events';

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Services></Services>
      <WorkProcess></WorkProcess>
      <Events></Events>
    </div>
  );
}

export default App;
