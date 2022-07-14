import React from 'react';
import { IconView } from '../../svg';
import './viewGroup.scss';
export default function ViewGroup({ content }) {
    return (
        <>
            <div className="view-group">
                <IconView />
                <p>{content}</p>
            </div>
        </>
    );
}
