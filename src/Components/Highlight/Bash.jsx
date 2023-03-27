import React from 'react';
import BaseHighlight from './BaseHighlight';

export default function Bash({ code }) {
    return (
        <BaseHighlight language="bash" code={code} />
    );
};