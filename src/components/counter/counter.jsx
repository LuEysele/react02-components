import { useState, useEffect } from "react";
import { MyButton } from "../button/my-button";

let maxValue = 0;

export const Counter = () =>{
    console.log("Estoy dentro del componente counter");

    // hook useState
    // useState permite a los componentes gestionar su propio estado.
    // const [value, setValue] = useState( initialValue)

    const [counterValue, setCounter ] = useState(100);
    
    const handleIncrement = (event) => {
        //console.log(event);
        console.log("Estoy en fnc increment");
        setCounter( counterValue + 1)
        console.log("Contador: " + counterValue)
    }
    const handleDecrement = (e) => {
        //console.log(e);
        console.log("Estoy en fnc decrement");
        setCounter( counterValue - 1)
        console.log("Contador: " + counterValue)
    }

    if ( counterValue === 90 )
    maxValue = 90;


  useEffect(() => {
    console.log(`Estoy dentro del useEffect de button`);
    console.log("Has llegado al máximo valor");
  }, [maxValue] );


    return(
        <>
        <p>Contador: {counterValue}</p>
        <MyButton onClick={handleDecrement}>Decremento</MyButton>
        <MyButton onClick={(event)=> setCounter(100)}>Reset</MyButton>
        <MyButton onClick={handleIncrement}>Incremento</MyButton>
       {/*  <button onClick={handleDecrement}>Decrementar</button>
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={(event)=> setCounter(100)}>Reset</button> */}
        {/* Agregar el botón reset */}
        </>
    )
}