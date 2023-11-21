import { getBackgroundCSS, getBorderCSS, getMultiShadowCSS } from "../../Components/utils/getCSS";
import { getBoxValue } from './utils/functions';

const Style = ({ attributes, clientId }) => {
  const { height, border, shadow, filters, hoverFilters, padding, floating, background } = attributes;
  console.log(background);

  const { blur, brightness, contrast, saturate, hue } = filters;
  const { translate, rotate, scale } = floating;
  const { translateX, translateY, duration, delay } = translate;
  const { rotateX, rotateY, rotateZ, rotateDuration, rotateDelay } = rotate;
  const { scaleX, scaleY } = scale

  // console.log(translateX);
  const mapMain = `#bBlocks-map-block-${clientId}`;
  const mapAN = `${mapMain} .mapContainer .custom-embed`;
  const mapSl = `${mapAN} #mapFrame`;


  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `      
        @keyframes floatingAnimation {
          0% {
            transform: translateX(0) translateY(0) rotateX(0) rotateY(0) rotateZ(0) scaleX(1) scaleY(1);
          }
          100% {
            transform: translateX(${translateX}px) translateY(${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scaleX(${scaleX}) scaleY(${scaleY});
          }
        }   
        
        ${mapAN}:hover { 
          filter: blur(${hoverFilters.blur}px) brightness(${hoverFilters.brightness}%) contrast(${hoverFilters.contrast}%) saturate(${hoverFilters.saturate}%) hue-rotate(${hoverFilters.hue}deg);
          transition: 0.3s;
        } 
        
        ${mapMain}{
          ${getBackgroundCSS(background)}
        }

        ${mapSl} {
          padding: ${getBoxValue(padding)};
          height: ${height}; 
          width: 100%;
        }
        
        ${mapAN} {
          height: ${height}; 
          filter: blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) hue-rotate(${hue}deg);
          animation: floatingAnimation ${duration}s infinite alternate ease-in-out ${delay}s;
        } 
        ${mapAN}:hover { 
          filter: blur(${hoverFilters.blur}px) brightness(${hoverFilters.brightness}%) contrast(${hoverFilters.contrast}%) saturate(${hoverFilters.saturate}%) hue-rotate(${hoverFilters.hue}deg);
          transition: all 0.3s ease-in-out;
        }
        
        ${mapAN}.custom-animation-class {
          animation-duration: 5s;
          animation-delay: 2s;
        }
        #bBlocks-map-block-${clientId} .bBlocks-map-block {
            ${getBorderCSS(border)}; 
            box-shadow:${getMultiShadowCSS(shadow)};
        }`,
      }}
    />
  );
};

export default Style;
