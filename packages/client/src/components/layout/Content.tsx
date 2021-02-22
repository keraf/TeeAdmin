import React from 'react';

interface Props {
    children: any; // TMP
}

const Content = ({ children }: Props) => (
    <div className="container">
        { children }
    </div>
);

export default Content;
