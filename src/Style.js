import { getBorderCSS, getMultiShadowCSS } from "../../Components/utils/getCSS";

const Style = ({ attributes, clientId }) => {
    const { height, border, shadow } = attributes;

 

    return <style dangerouslySetInnerHTML={{
        __html: `
        #mapFrame{
            height: ${height};
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