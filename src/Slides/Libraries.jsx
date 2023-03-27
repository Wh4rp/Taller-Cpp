import Slide from "../Components/RevealComponents/Slide";
import Cpp from "../Components/Highlight/Cpp";

const importLibrary = `
#include <library_name>
`;

const importIOstream = `
#include <iostream>
`;

export default function Libraries() {
    return (
        <Slide>
            <h2>Bibliotecas</h2>
            <Cpp code={importLibrary}/>
            <Cpp code={importIOstream}/>
        </Slide>
    )
}