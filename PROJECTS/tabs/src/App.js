import './App.css';
import Tabs from './components/Tabs';
import React from 'react'

function App() {
  const tabs = [
    {
      label: "Tab 1",
      content: "Tab 1 content is showing here"
    },
    {
      label: "Tab 2",
      content: "Tab 2 content is showing here"
    },
    {
      label: "Tab 3",
      content: "Tab 3 content is showing here"
    },
    {
      label: "Tab 4",
      content: "Tab 4 content is showing here"
    },
    {
      label: "Tab 5",
      content: "Tab 5 content is showing here"
    }
  ]
  // ============================================================
  return (
    <div className="App">
      <Tabs tabs={tabs}/>
      
    </div>
  );
}

export default App;

// import {useState} from 'react';

// export default function App() {
//   const [isShown, setIsShown] = useState(false);

//   const handleClick = event => {
//     // 👇️ toggle shown state
//     setIsShown(current => !current);

//     // 👇️ or simply set it to true
//     // setIsShown(true);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>

//       {/* 👇️ show elements on click */}
//       {isShown && (
//         <div>
//           <h2>Some content here</h2>
//         </div>
//       )}

//       {/* 👇️ show component on click */}
//       {isShown && <Box />}
//     </div>
//   );
// }

// function Box() {
//   return (
//     <div>
//       <h2>Box</h2>
//     </div>
//   );
// }
