import Slide from "../Components/RevealComponents/Slide";
import Bash from "../Components/Highlight/Bash";

const compilationCommand = `
g++ -std=c++17 -Wall hello.cpp -o hello
`;

const executableRun = `
./hello
`;

export default function RunAndCompile() {
    return (
        <Slide>
            <h3>Compilación y ejecución</h3>
            <Bash code={compilationCommand} />
            <Bash code={executableRun} />
        </Slide>
    )
}