import { useEffect, useState } from "react";
import Overview from "./Overview.jsx";
import Chatbot from "./Chatbot.jsx";
import icon from "/MW_icon.png";

const App = () => {
    const [data, setData] = useState(null);
  useEffect(() => {
    fetch("./MC1_graph_artworks.json")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div>
      {/* Icon and text container */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute', top: 0, left: 0, margin: '1rem' }}>
        <img src={icon} alt="Melody Way Icon" style={{ width: 48, height: 48, background: 'none' }} />
        <span style={{ color: '#ccc', fontSize: '1rem', marginTop: '0.2rem', fontStyle: "italic", fontWeight: 700 }}>Melody Way</span>
        <h1 className="sr-only">VAST 2025 MC1</h1>
      </div>
      <style>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
      <div className="vis-container">
        {data ? <Overview data={data}/> : <div>Loading...</div>}
      </div>
      <Chatbot />
    </div>
  );
}
export default App;