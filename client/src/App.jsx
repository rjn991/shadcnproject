import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
function App() {
  return (
    <>
      <div className="flex font-noto">
        <div>
          <Sidebar></Sidebar>
        </div>
        <div className="bg-slate-100 w-full">
          <div>
            <Navbar></Navbar>
          </div>
          <div>
            <Main></Main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
