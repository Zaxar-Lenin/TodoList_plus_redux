import React from 'react';
import { isPropertySignature } from 'typescript';

type TypeHeader = {
    title: string
}
export const Header = (props: TypeHeader) => {
    return <h2>{props.title}</h2>
}