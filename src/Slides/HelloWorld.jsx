import Slide from "../Components/RevealComponents/Slide";
import Cpp from "../Components/Highlight/Cpp";

const helloWorld = `
#include <iostream>

using namespace std;

int main() {
    
    cout << "Hello World!" << endl;
    
    return 0;
}
`;

export default function HelloWorld() {
    return (
        <Slide>
            <h2>helloWorld.cpp</h2>
            <Cpp code={helloWorld} />
        </Slide>
    )
}