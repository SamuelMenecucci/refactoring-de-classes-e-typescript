import { BrowserRouter as Router } from "react-router-dom"; // yarn add @types/react-router-dom -D

import Routes from "./routes";

import GlobalStyle from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

// const App = () => (
//   <>
//     <GlobalStyle />
//     <Router>
//       <Routes />
//     </Router>
//   </>
// );

// export default App;
