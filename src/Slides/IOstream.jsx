import Slide from "../Components/RevealComponents/Slide";

export default function IOstream() {
    return (
        <Slide>
            <h2>Entrada y Salida con IOstream</h2>
            <p>Librería estándar para el manejo de entrada y salida en C++</p>
            <pre>
                <code>
                    #include &lt;iostream&gt;
                    namespace std;

                    int main() &#123;
                        cout &lt;&lt; "Hello World!" &lt;&lt; endl;
                        return 0;
                    &#125;
                </code>
            </pre>
        </Slide>
    )
}