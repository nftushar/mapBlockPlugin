import { getBorderCSS, getMultiShadowCSS } from "../../Components/utils/getCSS";
import { getBoxValue } from './utils/functions';

const Style = ({ attributes, clientId }) => {
  const { height, border, shadow, filters, hoverFilters, padding } = attributes;


  const { blur, brightness, contrast, saturate, hue } = filters;


  const mapAN = `#bBlocks-map-block-${clientId} .mapContainer .custom-embed`;
  const mapSl = `${mapAN} #mapFrame`;

  // #bBlocks-map-block-4904bc78-bb73-4cca-a9ef-89b06bc6b742 .mapContainer .custom-embed 

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `      
        @keyframes floatingAnimation {
          0% {
            transform: translateX(0) translateY(0) rotateX(0) rotateY(0) rotateZ(0) scaleX(1) scaleY(1);
          }
          100% {
            transform: translateX(15.8239px) translateY(1.08383px) rotateX(-21.5199deg) rotateY(9.75444deg) rotateZ(-36.4564deg) scaleX(0.803472) scaleY(1.04335);
          }
        } 

        ${mapSl} {
          padding: ${getBoxValue(padding)};
        }
        
        #bBlocks-map-block-${clientId} .mapContainer .custom-embed {
            height: ${height}; 
            filter: blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) hue-rotate(${hue}deg);
            animation: floatingAnimation 3s infinite alternate ease-in-out
        } 

        #bBlocks-map-block-${clientId} .mapContainer .custom-embed:hover { 
          filter: blur(${hoverFilters.blur}px) brightness(${hoverFilters.brightness}%) contrast(${hoverFilters.contrast}%) saturate(${hoverFilters.saturate}%) hue-rotate(${hoverFilters.hue}deg);
          transition: 0.3s;
        } 
        #bBlocks-map-block-${clientId} .bBlocks-map-block {
            ${getBorderCSS(border)}; 
            box-shadow: ${getMultiShadowCSS(shadow)};
        } `,
      }}
    />
  );
};

export default Style;
