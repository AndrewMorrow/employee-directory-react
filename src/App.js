import "./App.css";
import Home from "./components/pages/Home";
import EmployeeState from "./context/employee/EmployeeState";

function App() {
    return (
        <EmployeeState>
            <div className="container">
                <Home />
            </div>
        </EmployeeState>
    );
}

export default App;
