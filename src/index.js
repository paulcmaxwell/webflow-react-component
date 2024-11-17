import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <>
        <Search />
      </>
    );
  }
}

console.log(document.getElementById("react-target"));
console.log(document.getElementById("test"));

ReactDOM.render(
  React.createElement(App, {}, null),
  document.getElementById("react-target")
);

function Search() {
  const [state, setState] = useState("");

  function handleChange(e) {
    console.log(e);
    console.log(state);
    setState(e);
  }
  return (
    <>
      <input
        id="search-bar-container"
        value={state}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
      <div>This is a React component inside of Webflow!!!</div>
    </>
  );
}

// ENV VARS
// const token =
//   "e01619fae88650b1d9ba4865950d783705bf88dcf302f59a2841ae89588ce721";
// const siteId = "667ee17a7660980d2aed2ea9";
// const baseUrl = "https://api.webflow.com/v2";
// const GETHeaders = {
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${token}`,
// };

// FUNCTION DEFINITIONS
async function getCollections() {
  const res = await fetch(
    `https://wsx3bm4qimksqlmq6tmzihrlum0cqmpx.lambda-url.us-east-2.on.aws/ `,
    {
      method: "GET",
    }
  );
  const body = await res.json();
  return body;
}

// getCollections();
// getCollections();
console.log("test");

const services = await getCollections();
// const services = "xyz";
console.log(services);
