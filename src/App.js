import React from ' react ';
import { render } from ' react-dom ';
import Pet from './Pet';

const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Modi",
//       animal: "Dog",
//       breed: "Chow Chow"
//     }),
//     React.createElement(Pet, {
//       name: "Roscoe",
//       animal: "Dog",
//       breed: "Mix"
//     }),
//     React.createElement(Pet, {
//       name: "Amber",
//       animal: "Dog",
//       breed: "Chihuahua"
//     })
//   ]);
// };

return (
  <div>
    <h1 id="something-important">Adopt Me!</h1>
    <Pet name = "Modi" animal = "dog" breed "Chow" />
    <Pet name = "Roscoe" animal = "dog" breed "Mix" />
    <Pet name = "Amber" animal = "dog" breed "Chihuahua" />
  </div>

)
};

render(<App />, document.getElementById("root"));