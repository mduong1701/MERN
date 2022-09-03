import mystyles from './components/myStyle.module.css';
import './App.css';

function App() {
  return (
    <div className={mystyles.frame}>
        <div className={mystyles.top}></div>
        <div className={mystyles.bottom}>
          <div className={mystyles.left}></div>
          <div className={mystyles.right}>
            <div className={mystyles.bottomTop}>
              <div className={mystyles.inside}></div>
              <div className={mystyles.inside}></div>
              <div className={mystyles.inside}></div>
            </div>
            <div className={mystyles.bottomBottom}></div>
          </div>
        </div>
    </div>
  );
}

export default App;
