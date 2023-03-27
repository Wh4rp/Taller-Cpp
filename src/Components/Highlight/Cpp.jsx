import React from 'react';
import BaseHighlight from './BaseHighlight';

export default function Cpp({ code }) {
    return (
        <BaseHighlight language="cpp" code={code} />
    );
};