
import "./App.css";
import Header from "./ui/header";
import Footer from "./ui/footer";
import Main from "./ui/main"

function App() {


  return (
    <div className="min-h-screen flex flex-col border-t-red-300">
      <Header />
    
      <div className="flex flex-1 border-b-red-300">
        <main className="flex-1 bg-white p-6 overflow-y-auto border-b border-red-300">
          <Main />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
