import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => After rendering => HTMLElement(render)

// const Title = () =>  (
//     <h1 className="head" tabIndex="5">
//         Title
//     </h1>
// );

// // Componenet Composistion
// const HeadingComponent = () => (
//     <div id="container">
//         <Title />
//         <h1 className="heading">Namaste React using JSX</h1>
//     </div>
// );

const number = 1000;

const elem = <span> React Element</span>


const Title =  (
    <h1 className="head" tabIndex="5">
        Title {elem}
    </h1>
);


const HeadingComponent = () => (
    <div id="container">
        {Title}
        <h1 className="heading">Namaste React using JSX</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />)

