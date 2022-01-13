import React from 'react';

type TypeButton = {
    name: string
    onHendler: () => void;
}
export const Button: React.FC<TypeButton> = ({onHendler, name}) => {
    return <button onClick = {onHendler}><span>{name}</span></button>

}