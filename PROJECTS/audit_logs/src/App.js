import Panel from "./components/Panel";
import LogTable from "./components/LogTable";
import Pagination from "./components/Pagination";
import myStyle from './components/Main.module.css';

function App() {
  return (
    <div className={myStyle.parentContainer}>
      <div className={myStyle.header}>
        <p>Governance /</p>
        <h3>Audit Logs</h3>
        <Panel />
      </div>

      <div className={myStyle.mainContent}>
        <LogTable />
      </div>
      
      <div className={myStyle.footer}>
        <Pagination />
      </div>


      
    </div>
  );
}

export default App;
