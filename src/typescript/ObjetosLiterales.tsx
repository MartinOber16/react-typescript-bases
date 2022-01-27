
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNro: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Martin',
        edad: 34,
        direccion: {
            pais: 'Argentina',
            casaNro: 550
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    { JSON.stringify( persona, null, 2) }
                </pre>
            </code>
        </>
    )
};
