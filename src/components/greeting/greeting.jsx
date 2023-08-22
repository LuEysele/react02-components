

/* Functional component

Los componentes funcionales son funciones de Javascript
que devuelven JSX. Estas funciones tienen una sintaxis
más simple y concisa

React Fragment <></> es un componente especial en React que 
permite agrupar múltiples elementos en JSX. React Fragment
no agrega nodos adicionales al DOM, como lo haría si usáramos
una etiqueta como <div>
*/

export default function Greeting(){
    return (<div>
        <h1>Felicidades Generation por su 8vo Aniversario</h1>
        <h2>Pueden llegar a la pachanga</h2>
        </div>);
}