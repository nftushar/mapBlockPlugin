import { getBorderCSS, getMultiShadowCSS } from "../../Components/utils/getCSS";

const Style = ({ attributes, clientId }) => {
  const { height, border, shadow, filters } = attributes;
  const { blur, brightness, contrast, saturate, hue } = filters;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        #bBlocks-map-block-${clientId} .mapContainer .custom-embed {
            height: ${height}; 
            filter: blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) hue-rotate(${hue}deg);
        }
        
        

        #bBlocks-map-block-${clientId} .bBlocks-map-block {
            ${getBorderCSS(border)}; 
            box-shadow: ${getMultiShadowCSS(shadow)};
        }
    `,
      }}
    />
  );
};

export default Style;
