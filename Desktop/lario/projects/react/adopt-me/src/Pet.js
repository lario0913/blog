import React from 'react';
export default function Pet (props){
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h1", {}, props.type),
    React.createElement("h1", {}, props.breed)
  ]);
};
