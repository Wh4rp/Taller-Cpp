import Slide from "../Components/RevealComponents/Slide";

export default function IntMainandStd() {
    return (
        <Slide>
            <h2>namespace std, int main() y return 0</h2>
            <p>
                La palabra <code>std</code> es un <i>namespace</i> que contiene todas las funciones y objetos de la librería estándar de C++.
            </p>
            <p>
                La función <code>main()</code> es la función principal de un programa en C++.
            </p>
            <p>
                Al final de la función main() se debe colocar un return 0 para indicar que el programa terminó correctamente.
            </p>
            <p>
                El código base para C++ estaría quedando tal que así:
            </p>
            <pre>
                <code>
                    #include &lt;iostream&gt;
                    using namespace std;
                    int main() &#123;
                    // Código
                    return 0;
                    &#125;
                </code>
            </pre>
        </Slide>
    )
}
