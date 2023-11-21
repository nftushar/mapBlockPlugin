import { useEffect } from "react";
import Settings from "./Settings";
import Map from "./components/Map";
import Style from "./Style";


const Edit = (props) => {
  const { className, attributes, setAttributes, clientId, isSelected } = props;
 
  console.log(className);

  useEffect(() => {
    clientId && setAttributes({ cId: clientId });
  }, [clientId]);

  return <>
    <Settings attributes={attributes} setAttributes={setAttributes} />

    <div className={className} id={`bBlocks-map-block-${clientId}`}>
      {!isSelected && <div className="mouse"></div>}
      <Style attributes={attributes} clientId={clientId} />
      <Map attributes={attributes} clientId={clientId} />
    </div>
  </>
};
export default Edit;
