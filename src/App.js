import React from "react";
import "./App.css";
import { Card } from "./components/UI/Card/Card";
import { Section } from "./components/UI/Section/Section";
import { SectionWithoutBorder } from "./components/UI/SectionWithoutBorder/SectionWithoutBorder";
import { ApprovedImages } from "./components/ApprovedImages/ApprovedImages";
import { ACTIONS } from "./store/Actions";
import { CurrentImage } from "./components/CurrentImage/CurrentImage";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const resetHandler = () => {
    localStorage.removeItem("persist:photo-store");
    dispatch({
      type: ACTIONS.RESET,
    });
  };

  return (
    <div className="App">
      <Card>
        <Section>
          <h4 className="heading">
            IMAGE APPROVAL APPLICATION{" "}
            <span
              style={{ float: "right", cursor: "pointer" }}
              onClick={resetHandler}
            >
              Reset
            </span>
          </h4>
        </Section>
        <SectionWithoutBorder>
          <ApprovedImages />
        </SectionWithoutBorder>
        <SectionWithoutBorder>
          <CurrentImage />
        </SectionWithoutBorder>
      </Card>
    </div>
  );
}

export default App;
