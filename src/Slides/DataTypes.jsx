import Slide from "../Components/RevealComponents/Slide";
import Cpp from "../Components/Highlight/Cpp";

const intLonglong = `
int a = 2147483647;
long long b = 9223372036854775807;
`;

export default function DataTypes() {
    return (
        <Slide>
            <Slide>
                <h2>Tipos de datos</h2>
            </Slide>
            <Slide>
                <h3>Int y Long</h3>
                <ul>
                    <li>Int: 4 bytes, osea de -2147483648 a 2147483647</li>
                    <li>Long long: 8 bytes, osea de -(2^63) a (2^63)-1</li>
                </ul>
                <Cpp code={intLonglong}/>
            </Slide>
            <Slide>
                <h3>Float y Double</h3>
            </Slide>
        </Slide>
    )
}