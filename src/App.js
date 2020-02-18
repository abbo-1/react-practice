const Pet = ({ name, animal, breed}) => {
    return React.createElement("div", {},  [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ]);
};

const App = () => {
    return React.createElement ("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet,{ 
            name: "Modi",
            animal: "Dog",
            breed: "Chow Chow"
        }),
        React.createElement(Pet,{ 
            name: "Roscoe",
            animal: "Dog",
            breed: "Mix"
        }),
        React.createElement(Pet,{ 
            name: "Amber",
            animal: "Dog",
            breed: "Chihuahua"
        })
        ]);
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);