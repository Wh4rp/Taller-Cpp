import Slide from "../Components/RevealComponents/Slide";
import Cpp from "../Components/Highlight/Cpp";

const ioSampleCode = `
#include <iostream>

using namespace std;

int main() {

    int a, b;
    cin >> a >> b;
    cout << a + b << endl;
    
    return 0;
}
`;


export default function IOstream() {
    return (
        <Slide>
            <h3>cin y cout</h3>
            <Cpp code={ioSampleCode} />
        </Slide>
    )
}