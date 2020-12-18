import './App.css';
import { Sidebar } from "./components/Sidebar";
import { Chat } from "./components/Chat";

function App() {
  return (
    <div className="app">
      <h1>Hello Whatsapp</h1>
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
