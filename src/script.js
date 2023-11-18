import React from 'react';
import { createRoot } from 'react-dom';
import "./style.scss";
import Style from "./Style";
import Map from './components/Map';

document.addEventListener("DOMContentLoaded", () => {
    const mapEls = document.querySelectorAll(".wp-block-b-blocks-map");
    mapEls.forEach((mapEl) => {
        const attributes = JSON.parse(mapEl.dataset.attributes);
        const { cId } = attributes;

        const root = document.getElementById('root');
        const rootInstance = createRoot(root);

        rootInstance.render(
            <>
                <Style attributes={attributes} clientId={cId} />
                <Map attributes={attributes} clientId={cId} />
            </>
        );

        mapEl?.removeAttribute("data-attributes");
    });
});
