import React, { FC } from 'react'

interface IProps {
    text: string,
    count: number,
    aumentar: Function,
    disminuir: Function
}

export const Count: FC<IProps > = ({text, count, aumentar, disminuir}) => {
    // const {text, count} = props;

    // const text = props.text;
    // const count = props.count;
    // props = { text, count}

  return (
    <>
         <h1 className={count <=5 ? 'fondo1' : 'fondo2' }> {text} : {count}</h1>
         <button onClick={()=>aumentar()}> + </button>
         <button onClick={()=>disminuir()}> - </button>
    </>
  )
}
