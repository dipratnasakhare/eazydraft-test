import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { TextItem } from "./Components/TextItems";

function App() {
 
  const object = { name: "Hello", age: 23 };
  const [list, setList] = useState([object]);

  function addItem() {
    const name = Math.random().toString(36).substring(2, 7);
    let age = Math.floor(Math.random() * 100);
    setList([...list, { name, age }]);
  }

  function updateDetails(name, indexOld) {
    //Remove current name and replace with blank

    let New = list.map((item, index) =>
      index !== indexOld ? item : { name: "", age: item.age }
    );
    setList(New)

  }

  //Whenever name is updated, print it
  useEffect(() => {
    console.log(list, "list");
  }, [addItem]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to the EazyDraft test application.</p>
        <div onClick={addItem}>Click to add a field</div>
        {list.map((ele, index) => (
          <TextItem
            names={ele.name}
            ages={ele.age}
            index={index}
            updateDetails={updateDetails}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
