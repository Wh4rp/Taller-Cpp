import Highlight, { defaultProps } from 'prism-react-renderer';
import React from 'react';
import theme from 'prism-react-renderer/themes/nightOwl';

export default function BaseHighlight({ code = '', language }) {
    return (
        <Highlight {...defaultProps} language={language} code={code} theme={theme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })} data-line-numbers>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
}