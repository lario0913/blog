const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h1", {}, props.type),
        React.createElement("h1", {}, props.breed)
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        { id: "something-important"},
    [React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, {name:"Luna", type: "dog",  breed: "Havanese"}),
    React.createElement(Pet,  {name:"Scape", type: "mouse",  breed:"Mixed"}),
    React.createElement(Pet,  {name:"Doint",  type: "cat", breed: "Longtail"})
    ]
    );
};


ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);