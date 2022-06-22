import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import VerticalLinearStepper from "./VerticalLinearStepper";

// ...

class App extends React.Component {
  render() {
    console.log("App---->");
    return (
      <StickyContainer>
        {/* Other elements can be in between `StickyContainer` and `Sticky`,
        but certain styles can break the positioning logic used. */}

        <div>I am sticky</div>
        <VerticalLinearStepper />
        {/* ... */}
      </StickyContainer>
    );
  }
}

export default App;
