import List from "./components/List";

const animals = [
    { type: "turtle", icon: "🐢" },
    { type: "octopus", icon: "🐙" },
    { type: "fish", icon: "🐠" },
    { type: "flamingo", icon: "🦩" },
    { type: "penguin", icon: "🐧" }
];

function App() {
    return (
        <List propAnimals={animals} />
    );
}

export default App
