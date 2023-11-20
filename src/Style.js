import { getBorderCSS, getMultiShadowCSS } from "../../Components/utils/getCSS";
import { getBoxValue } from './utils/functions';

const Style = ({ attributes, clientId }) => {
  const { height, border, shadow, filters, hoverFilters, padding } = attributes;
//  console.log(padding);


  const { blur, brightness, contrast, saturate, hue } = filters;


  const mapSl = `bBlocks-map-block-${clientId} .mapContainer .custom-embed #mapFrame`;
  const mapAN = `bBlocks-map-block-${clientId} .mapContainer .custom-embed`;
   
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
    
        ${mapAN} {
          width: 100px;
          height: 100px;
          background-color: lightblue;
          margin: 20px;
          animation: floatingAnimation 3s infinite alternate ease-in-out;
        }


        ${mapSl} {
          padding: ${getBoxValue(padding)};
        }

        #bBlocks-map-block-${clientId} .mapContainer .custom-embed {
            height: ${height}; 
            filter: blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) hue-rotate(${hue}deg);
        }

        #bBlocks-map-block-${clientId} .mapContainer .custom-embed:hover { 
          filter: blur(${hoverFilters.blur}px) brightness(${hoverFilters.brightness}%) contrast(${hoverFilters.contrast}%) saturate(${hoverFilters.saturate}%) hue-rotate(${hoverFilters.hue}deg);
          transition: 0.3s;
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
