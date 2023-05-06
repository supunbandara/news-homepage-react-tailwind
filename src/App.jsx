import Navbar from "./components/Navbar";
import Main from "./components/Main";

import "./App.css";

function App() {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-0">
        <Navbar />
        <Main />
      </div>
    </>
  );
}

export default App;
