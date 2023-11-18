import { getBorderCSS, getMultiShadowCSS } from "../../Components/utils/getCSS";

const Style = ({ attributes, clientId }) => {
    const { height, border, shadow, filters } = attributes;
    const { blur, brightness, contrast, saturate, hue } = filters;


    return <style dangerouslySetInnerHTML={{
        __html: `
        #mapFrame{
            height: ${height};
            filter: blur(${blur}) brightness(${brightness}) contrast(${contrast}) saturate(${saturate}) hue-rotate(${hue});
        }
        #bBlocks-map-block-${clientId} .bBlocks-map-block{
            .custom-embed {
                height: ${height};
                } 

            ${getBorderCSS(border)}; 
            box-shadow: ${getMultiShadowCSS(shadow)}
        }
    `}}
    />
}
export default Style;