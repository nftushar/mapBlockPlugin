/* eslint-disable no-undef */
import { useState } from 'react';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TabPanel, TextControl, RangeControl, __experimentalUnitControl as UnitControl, __experimentalBoxControl as BoxControl, PanelRow, ToggleControl } from "@wordpress/components";

import { BtnGroup, ColorControl, Background } from "../../Components";
import { solidStar, outlineStar } from './utils/icons';

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
	const { background, filters, hoverFilters, padding, mapLocation, apiKey, zoom, height, floating } = attributes;
	const { translate, rotate, scale, floatingCon } = floating;
	const { translateX, translateY, duration, delay } = translate;
	const { rotateX, rotateY, rotateZ, rotateDuration, rotateDelay } = rotate;
	const { scaleX, scaleY } = scale;

 
	return (
		<InspectorControls>
			<TabPanel
				className="bPlTabPanel"
				tabs={[
					{ name: "general", title: __("General") },
					{ name: "style", title: __("Style") },
					{ name: "advance", title: __("Advance") },
				]}
			>
				{(tab) => (
					<>
						{tab.name === "general" && (
							<PanelBody
								className="bPlPanelBody"
								title={__("Settings", "map-block")}
							>
								<UnitControl
									className="mt20"
									label={__("Height", "info-cards")}
									labelPosition="left"
									value={height}
									onChange={(val) => setAttributes({ height: val })}
								/>

								<Background
									label={__('Background', 'map-block')}
									value={background}
									onChange={(val) => setAttributes({ background: val })}
									defaults={{ color: '#000' }}
								/>

								<TextControl
									className="mt20"
									label={__("Location", "map-block")}
									value={mapLocation}
									onChange={(val) => setAttributes({ mapLocation: val })}
								/>

								<TextControl
									className="mt20"
									label={__("API Key", "map-block")}
									value={apiKey}
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
							</PanelBody>
						)}

						{tab.name === "style" && (
							<PanelBody
								className="bPlPanelBody"
								title={__("Title", "map-block")}
							>

								<TabPanel className="bPlTabPanel"
									tabs={[
										{ name: "normal", title: __("Normal") },
										{ name: "hover", title: __("Hover") },
									]} >

									{(tab) => (
										<>
											{tab.name === "normal" && (
												<PanelBody
													className="bPlPanelBody" >

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
											)}
											{tab.name === "hover" && (
												<PanelBody
													className="bPlPanelBody" >

													<RangeControl
														label={__("Blur", "map-block")}
														value={hoverFilters.blur}
														onChange={(val) => setAttributes({ hoverFilters: { ...hoverFilters, blur: val } })}
														min={0}
														max={10}
														step={0.1}
													/>
													<RangeControl
														label={__("Brightness", "map-block")}
														value={hoverFilters.brightness}
														onChange={(val) => setAttributes({ hoverFilters: { ...hoverFilters, brightness: val } })}
														min={0}
														max={200}
														step={1}
													/>
													<RangeControl
														label={__("Contrast", "map-block")}
														value={hoverFilters.contrast}
														onChange={(val) => setAttributes({ hoverFilters: { ...hoverFilters, contrast: val } })}
														min={0}
														max={200}
														step={1}
													/>
													<RangeControl
														label={__("Saturate", "map-block")}
														value={hoverFilters.saturate}
														onChange={(val) => setAttributes({ hoverFilters: { ...hoverFilters, saturate: val } })}
														min={0}
														max={200}
														step={1}
													/>
													<RangeControl
														label={__("Hue", "map-block")}
														value={hoverFilters.hue}
														onChange={(val) => setAttributes({ hoverFilters: { ...hoverFilters, hue: val } })}
														min={0}
														max={360}
														step={1}
													/>
												</PanelBody>
											)}
										</>
									)}

								</TabPanel>
							</PanelBody>
						)}
						{tab.name === "advance" && (
							<>
								<PanelBody
									className="bPlPanelBody"
									title={__("Advance", "map-block")} >
									<BoxControl
										label={__("Padding", "tcb")}
										values={padding}
										resetValues={{
											"top": "0px",
											"right": "0px",
											"bottom": "0px",
											"left": "0px"
										}}
										onChange={(value) => setAttributes({ padding: value })}
									/>


									<PanelBody
										initialOpen={false}
										className="bPlPanelBody"
										title={__("Floating", "map-block")}>
										<PanelBody>
											<ToggleControl
												label={__("Enable", "map-block")}
												value={floatingCon}
												checked={floatingCon}
												onChange={(val) => setAttributes({ floating: { ...floating, floatingCon: val } })}
											/>

										</PanelBody>
										{floatingCon && (
											<>
												<PanelBody
													initialOpen={false}
													className="bPlPanelBody"
													title={__("Translate", "map-block")}
												>
													<RangeControl
														label={__("translate-X", "map-block")}
														value={translateX}
														onChange={(val) => setAttributes({ floating: { ...floating, translate: { ...floating.translate, translateX: val } } })}
														min={0}
														max={100}
														step={1}
													/>
													<RangeControl
														label={__("translate-Y", "map-block")}
														value={translateY}
														onChange={(val) => setAttributes({ floating: { ...floating, translate: { ...floating.translate, translateY: val } } })}
														min={0}
														max={100}
														step={1}
													/>
													<RangeControl
														label={__("duration", "map-block")}
														value={duration}
														onChange={(val) => setAttributes({ floating: { ...floating, translate: { ...floating.translate, duration: val } } })}
														min={0}
														max={100}
														step={1}
													/>
													<RangeControl
														label={__("delay", "map-block")}
														value={delay}
														onChange={(val) => setAttributes({ floating: { ...floating, translate: { ...floating.translate, delay: val } } })}
														min={0}
														max={10}
														step={1}
													/>
												</PanelBody>
												<PanelBody
													initialOpen={false} 
													title={__("Rotate", "map-block")}
												>
													<RangeControl
														label={__("Rotate-X", "map-block")}
														value={rotateX}
														onChange={(val) => setAttributes({ floating: { ...floating, rotate: { ...floating.rotate, rotateX: val } } })}
														min={0}
														max={180}
														step={1}
													/>
													<RangeControl
														label={__("Rotate-Y", "map-block")}
														value={rotateY}
														onChange={(val) => setAttributes({ floating: { ...floating, rotate: { ...floating.rotate, rotateY: val } } })}
														min={0}
														max={180}
														step={1}
													/>
													<RangeControl
														label={__("Rotate-Z", "map-block")}
														value={rotateZ}
														onChange={(val) => setAttributes({ floating: { ...floating, rotate: { ...floating.rotate, rotateZ: val } } })}
														min={0}
														max={180}
														step={1}
													/>
													<RangeControl
														label={__("duration", "map-block")}
														value={rotateDuration}
														onChange={(val) => setAttributes({ floating: { ...floating, rotate: { ...floating.rotate, rotateDuration: val } } })}
														min={0}
														max={10000}
														step={1}
													/>
													<RangeControl
														label={__("delay", "map-block")}
														value={rotateDelay}
														onChange={(val) => setAttributes({ floating: { ...floating, rotate: { ...floating.rotate, rotateDelay: val } } })}
														min={0}
														max={5000}
														step={1}
													/>
												</PanelBody>

												<PanelBody
													initialOpen={false} 
													title={__("Scale", "map-block")}
												>
													<RangeControl
														label={__("scale-X", "map-block")}
														value={scaleX}
														onChange={(val) => setAttributes({ floating: { ...floating, scale: { ...floating.scale, scaleX: val } } })}
														min={0}
														max={5}
														step={0.1}
													/>
													<RangeControl
														label={__("scale-Y", "map-block")}
														value={scaleY}
														onChange={(val) => setAttributes({ floating: { ...floating, scale: { ...floating.scale, scaleY: val } } })}
														min={0}
														max={5}
														step={1}
													/>
												</PanelBody>
											</>)},
									</PanelBody>
								</PanelBody>

							</>
						)}

					</>
				)}
			</TabPanel>
		</InspectorControls>
	);
};

export default Settings;
