import Panel from "./components/Panel";
import LogTable from "./components/LogTable";

function App() {
  return (
    <div>
      <div>
        <p>Governance /</p>
        <h3>Audit Logs</h3>
      </div>
      <hr />
      <Panel />
      <hr />
      <LogTable />
    </div>
  );
}

export default App;
