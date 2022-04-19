import Header from "./components/header/js/header";
import Sidebar from "./components/sidebar/js/sidebar";
import Content from "./components/content/js/content";


function App() {
  return (
    <div className="App">
      <div className="profile_ui">
        <Header />
        <div className="page-main">
          <Sidebar />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
