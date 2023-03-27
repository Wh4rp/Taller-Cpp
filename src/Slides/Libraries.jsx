import Slide from "../Components/RevealComponents/Slide";

export default function Libraries (){
    return (
        <Slide>
            <h2>Bibliotecas</h2>
            <p>Para importar librerías en C++ se ocupa la función #include</p>
            <pre>
                <code>
                    #include &lt;library_name&gt;
                </code>
            </pre>
            <p>Por ejemplo, para importar la librería de entrada y salida estándar, se ocupa:</p>
            <pre>
                <code>
                    #include &lt;iostream&gt;
                </code>
            </pre>
            </Slide>
    )
}