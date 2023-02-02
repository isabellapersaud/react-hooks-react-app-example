import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <h1>{format(new Date(), "MMMM do yyyy, h:mm:ss a")}</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
    </div>
  );
}

export default App;

import React from "react";

// no need to modify anything in here. The final test is looking for the returned JSX from this component
function TestComponent() {
  return (
    <div className="video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5TbUxGZtwGI"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        title="time video"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default TestComponent;
