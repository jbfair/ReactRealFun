import React from 'react';
import './App.css';
import teams_json from './CollegeBasketballTeams.json';

const teamInfo = teams_json["teams"]

function Header(){
  return(
      <div>
          <h1>Welome to March Madness!</h1>
          <h2>Look below for team info</h2>
      </div>
  )
}


class Team extends React.Component <{school:string; name:string; city:string; state:string;}> {
  render() {
  
      const oneTeam = this.props
  
  
  return(
      <div>
          <h1>{oneTeam.school}</h1>
          <h2>Mascot: {oneTeam.name}</h2>
          <h2>Location: {oneTeam.city}, {oneTeam.state}</h2>
          <br/>
          <p>------------------------------------------------</p>
      </div>
  );

  }
}

function TeamList() {
  return(
      <div>
          {teamInfo.map(oneTeam => <Team {...oneTeam}/>)}
      </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Header/>

        </div>
      </header>
      <div>
        <TeamList/>
      </div>
    </div>
  );
}

export default App;
