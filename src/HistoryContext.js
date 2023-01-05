import { createContext, useState, useEffect } from "react";

const HistoryContext = createContext();

export function HistoryProvider({ children }) {
  const [history, setHistory] = useState([]);

useEffect (()=> {
    const existenData = localStorage.getItem("HISTORY_LIST");
    console.log(existenData);
    if(existenData != null) {
        setHistory(...history, JSON.parse(existenData)); // if there was data saved on local storage from previous session
        console.log("existed data was updated");
    }
},[]); // Using this useEffect only in the first time the component rendered

useEffect (()=> {
    if(history.length){
        localStorage.setItem("HISTORY_LIST", JSON.stringify(history));
        console.log("history was updated");
    }
}, [history]); // useEffect will be triggered each time that we updated our history , would re-write history state to the local storage.

  const saveToHistory = (whoWon, date) => {
    setHistory((prevHistoryData) => [...prevHistoryData, { whoWon, date }]);
    console.log(history);
  };

  return (
    <HistoryContext.Provider value={{ history, saveToHistory }}>
      {children}
    </HistoryContext.Provider>
  );
}

export default HistoryContext;

