import React from 'react'
import {render} from 'react-dom'
import  Pet  from './Pet';

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, { name: "Luna", type: "dog", breed: "Havanese" }),
    React.createElement(Pet, { name: "Scape", type: "mouse", breed: "Mixed" }),
    React.createElement(Pet, { name: "Doint", type: "cat", breed: "Longtail" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
