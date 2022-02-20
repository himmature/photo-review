import React from "react";
import "./App.css";
import { Card } from "./components/UI/Card/Card";
import { Section } from "./components/UI/Section/Section";
import { SectionWithoutBorder } from "./components/UI/SectionWithoutBorder/SectionWithoutBorder";
import { ApprovedImages } from "./components/ApprovedImages/ApprovedImages";
import { CurrentImage } from "./components/CurrentImage/CurrentImage";

function App() {

  return (
    <div className="App">
      <Card>
        <Section>
          <h4 className='heading'>IMAGE APPROVAL APPLICATION</h4>
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
