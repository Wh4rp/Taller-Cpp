import Slide from "../Components/RevealComponents/Slide";
import CommandLine from "../Components/CommandLine";

export default function Compilation() {
    return (
        <Slide>
            <h2>Compilación</h2>
            <p>
                Vamos a ocupar el compilador g++ para compilar nuestros programas en C++. Si queremos compilar hello.cpp, ejecutamos el siguiente comando:
            </p>
            <CommandLine>
                g++ -std=c++17 -Wall hello.cpp -o hello
            </CommandLine>
            <p>
                Esto creará un ejecutable con el nombre hello. Para correrlo, ejecutamos:
            </p>
            <CommandLine>
                ./hello
            </CommandLine>
        </Slide>
    )
}