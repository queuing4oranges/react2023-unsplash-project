import ThemeToggle from "./ThemeToggle";
import SimpleSearchForm from "./SimpleSearchForm";
import Gallery from "./Gallery";


const App = () => {

  return (
    <main className="container-md d-flex flex-column">
      <ThemeToggle/>
      <div className="header d-flex justify-content-center mt-3">
        <SimpleSearchForm />
      </div>
      <Gallery />
    </main>
    )
};
export default App;
