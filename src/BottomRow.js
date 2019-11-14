import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {

  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(1)

  const changeDown = e => {
    if (down < 4) {
      setDown(down + 1)
    } else {
      setDown(1)
    }
  }

  const changeQuarter = e => {
    if (quarter < 4) {
      setQuarter(quarter + 1)
    } else {
      setQuarter(1);
    }
  }

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
          <div className="down__value">{down}</div>
        <div>
          <button className="down_button" onClick={changeDown}>Change down</button>
        </div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <div>
        <button  className="quarter_button" onClick={changeQuarter}>Change quarter</button>
        </div>
      </div>

    </div>
  );
};

export default BottomRow;
