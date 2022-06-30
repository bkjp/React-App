import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyle/globalStyle";
import HomeScreen from "./pages/HomeScreen";
import ErrorScreen from "./pages/ErrorScreen";

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Hello world !</h1>
      <div>Sidebar</div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </>
  );
}

export default App;
