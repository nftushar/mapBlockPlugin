import { getBackgroundCSS, getBorderCSS, getMultiShadowCSS } from "../../Components/utils/getCSS";
import { getBoxValue } from './utils/functions';


const Style = ({ attributes, clientId }) => {
  const { height, width, border, shadow, filters, hovFilters, padding, floating, background, alignment } = attributes;

  const { blur, brightness, contrast, saturate, hue } = filters;
  const { translate, rotate, scale, enabled: floatingEnabled } = floating;
  const { translateX, translateY, duration, delay } = translate;
  const { rotateX, rotateY, rotateZ, rotateDuration, rotateDelay } = rotate;
  const { scaleX, scaleY } = scale;

  const MainDiv = `#block-${clientId}`
  const mainSl = `#bBlocks-map-block-${clientId}`;
  const containerSl = `${mainSl} .mapContainer`
  const customEmbedSl = `${containerSl}  .custom-embed`;
  const frameSl = `${customEmbedSl} #mapFrame`;

  return (
    <style dangerouslySetInnerHTML={{
      __html: `      
        @keyframes floatingAnimation${clientId} {
          0% {
            transform: translateX(0) translateY(0) rotateX(0) rotateY(0) rotateZ(0) scaleX(1) scaleY(1);
          }
          100% {
            transform: translateX(${translateX}px) translateY(${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scaleX(${scaleX}) scaleY(${scaleY});
          }
        }   

        
         ${MainDiv} {
          display: flex;
          justify-content: ${alignment};
        }

        ${mainSl} .bBlocks-map-block {
         
          ${getBorderCSS(border)}; 
          box-shadow:${getMultiShadowCSS(shadow)};
        }

          ${containerSl}{
            width: ${width}; 
            ${getBackgroundCSS(background)}
          }

          #bBlocks-map-block-d9655bfb-ea6b-4a4c-b7bd-802d0f274d17 {
            
          }

        ${customEmbedSl} { 
          filter: blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) hue-rotate(${hue}deg);
          
          ${floatingEnabled ? `
            animation: floatingAnimation${clientId} ${duration}s infinite alternate ease-in-out ${delay}s;
          ` : ''}
        } 

        ${customEmbedSl}:hover { 
          filter: blur(${hovFilters.blur}px) brightness(${hovFilters.brightness}%) contrast(${hovFilters.contrast}%) saturate(${hovFilters.saturate}%) hue-rotate(${hovFilters.hue}deg);
          transition: all 0.3s ease-in-out;
        } 
         

        ${frameSl} {
          padding: ${getBoxValue(padding)};
          ${getBorderCSS(border)}
          height: ${height}; 
          width: 100%;
        }
        
      
        
        ${customEmbedSl}.custom-animation-class {
          animation-duration: ${rotateDuration}s;
          animation-delay: ${rotateDelay}s;
        }`,
    }}
    />
  );
};

export default Style;
