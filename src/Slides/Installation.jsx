import Slide from "../Components/RevealComponents/Slide";
import Bash from "../Components/Highlight/Bash";

const installCommand = `
sudo apt update && sudo apt install build-essential
`;

export default function Installation() {
    return (
        <Slide>
            <Slide>
                <h2>Instalación</h2>
                <p>Vamos a ocupar el compilador <a href="https://www.gnu.org/software/gcc/" target="_blank">g++</a></p>
            </Slide>
            <Slide>
                <h3>Ubuntu</h3>
                <p>Lo más probable es que ya esté instalado, pero de todos modos </p>
                <Bash code={installCommand} />
            </Slide>
            <Slide>
                <h3>Windows</h3>
                <p>Puedes seguir esta <a href="https://code.visualstudio.com/docs/cpp/config-mingw" target="_blank">guía</a></p>
            </Slide>
        </Slide>
    );
}