export const TiposBasicos = () => {

    const nombre: string = 'Martin';
    const edad: number = 34;
    const estaActivo: boolean = true;
    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua' ];

    return (
        <>
            <h3>Tipos basicos</h3>
            { nombre }, { edad }, { (estaActivo) ? 'activo' : 'no activo' }
            <br />
            { poderes.join(', ') }
        </>
    )
};
