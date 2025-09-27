import Header from "./components/Header";
import Find from "./components/Find";
import Torts from "./components/Torts";
import Capkeyk from "./components/Capkeyk" 
import Register from "./components/Register"
import Conditers from "./components/Conditers"
import Articles from "./components/Articles"
import Footer from "./components/Footer"
function App() {
  return  (
    <div className='App'>
      <Header />
      <main>
        <Find />
        <Torts />
        <Capkeyk />
        <Register />
        <Conditers />
        <Articles />
      </main>
      <Footer />
    </div>

  );
}

export default App; 