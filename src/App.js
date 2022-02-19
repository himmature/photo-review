import React, { useEffect } from "react";
import "./App.css";
import { Card } from "./components/UI/Card/Card";
import { Section } from "./components/UI/Section/Section";
import { ApprovedImages } from "./components/ApprovedImages/ApprovedImages";

const URL = "";

function App() {
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="App">
      <Card>
        <Section>
          <h4>IMAGE APPROVAL APPLICATION</h4>
        </Section>
        <Section>
          <ApprovedImages />
        </Section>
        <Section>
          <Card>current image</Card>
        </Section>
      </Card>
    </div>
  );
}

export default App;
