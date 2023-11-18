/* eslint-disable no-undef */
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { solidStar, outlineStar } from './utils/icons';
import { PanelBody, TabPanel, TextControl, RangeControl, __experimentalUnitControl as UnitControl, } from "@wordpress/components";

import { BtnGroup, ColorControl, Background } from "../../Components"

const iconOptions = [
	{ label: __('Solid', 'map-block'), value: 'solid', icon: solidStar },
	{ label: __('Outline', 'map-block'), value: 'outline', icon: outlineStar }
];
const iconAlignments = [
	{ label: __('left', 'map-block'), value: 'left', icon: 'editor-alignleft' },
	{ label: __('center', 'map-block'), value: 'center', icon: 'editor-aligncenter' },
	{ label: __('right', 'map-block'), value: 'right', icon: 'editor-alignright' }
];



const Settings = ({ attributes, setAttributes }) => {
	const {background, filters, mapLocation, apiKey, zoom } = attributes;
	
	// console.log(filters.blur);




	return (
		<InspectorControls>
			<TabPanel
				className="bPlTabPanel"
				tabs={[
					{ name: "general", title: __("General") },
					{ name: "style", title: __("Style") },
				]}
			>
				{(tab) => (
					<>
						{tab.name === "general" && (
							<PanelBody
								className="bPlPanelBody"
								title={__("Settings", "map-block")}
							>
								<Background
									label={__('Background', 'map-block')}
									value={background}
									onChange={(val) => setAttributes({ background: val })}
									defaults={{ color: '#000' }}
								/>


								<PanelBody
									className="bPlPanelBody"
									title={__("Filters", "map-block")}
								>
									<RangeControl
										label={__("Blur", "map-block")}
										value={filters.blur}
										onChange={(val) => setAttributes({ filters: { ...filters, blur: val } })}
										min={0}
										max={10}
										step={0.1}
									/>
									<RangeControl
										label={__("Brightness", "map-block")}
										value={filters.brightness}
										onChange={(val) => setAttributes({ filters: { ...filters, brightness: val } })}
										min={0}
										max={200}
										step={1}
									/>
									<RangeControl
										label={__("Contrast", "map-block")}
										value={filters.contrast}
										onChange={(val) => setAttributes({ filters: { ...filters, contrast: val } })}
										min={0}
										max={200}
										step={1}
									/>
									<RangeControl
										label={__("Saturate", "map-block")}
										value={filters.saturate}
										onChange={(val) => setAttributes({ filters: { ...filters, saturate: val } })}
										min={0}
										max={200}
										step={1}
									/>
									<RangeControl
										label={__("Hue", "map-block")}
										value={filters.hue}
										onChange={(val) => setAttributes({ filters: { ...filters, hue: val } })}
										min={0}
										max={360}
										step={1}
									/>
								</PanelBody>



								<TextControl
									className="mt20"
									label={__("Location", "map-block")}
									value={mapLocation}
									onChange={(val) => setAttributes({ mapLocation: val })}
								/>

								<TextControl
									className="mt20"
									label={__("API Key", "map-block")}
									value={apiKey}  // Use default API key if not provided
									onChange={(val) => setAttributes({ apiKey: val })}
								/>
								<RangeControl
									className="mt20"
									label={__("Zoom", "map-block")}
									labelPosition="left"
									value={zoom}
									onChange={(val) => setAttributes({ zoom: val })}
									min={0}
									max={20}
									step={1}
								/> 

								{/* <BtnGroup
									className="mt20"
									label={__("Icon Style", "map-block")}
									value={iconStyle}
									onChange={val => setAttributes({ iconStyle: val })}
									options={iconOptions} isIcon={true} /> */}

								{/* <BtnGroup
									className="mt20"
									label={__("Alignment", "map-block")}
									value={alignment}
									onChange={val => setAttributes({ alignment: val })}
									options={iconAlignments} isIcon={true} /> */}
							</PanelBody>
						)}

						{tab.name === "style" && (
							<PanelBody
								className="bPlPanelBody"
								title={__("Title", "map-block")}
							>
								{/* ... (other style controls) */}
							</PanelBody>
						)}
					</>
				)}
			</TabPanel>
		</InspectorControls>
	);
};

export default Settings;
