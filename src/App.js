import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contact 
          avatar = 'https://avatars.githubusercontent.com/nemkanta09'
          name ='Nem'
          isOnline = {true} />
      </header>
    </div>
  );
}

export default App;
