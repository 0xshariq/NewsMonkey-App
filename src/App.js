import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React , {useState} from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import LoadingBar from "react-top-loading-bar";

function App(){
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  
    return (
      <div>
        <Router>
          <Navbar />
          {/* top loading bar */}
          <LoadingBar
            color="#f11946"
            progress={progress}
            height={3}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/home"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/general"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/buisness"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  key="buisness"
                  pageSize={pageSize}
                  country="in"
                  category="buisness"
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            />

            <Route
              exact
              path="/science"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News setProgress={setProgress} apiKey={apiKey} 
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
}

export default App;