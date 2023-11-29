/* eslint-disable no-undef */
// import { useState } from 'react';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TabPanel, TextControl, RangeControl, __experimentalUnitControl as UnitControl, __experimentalBoxControl as BoxControl, ToggleControl } from "@wordpress/components";

import { Background, BorderControl, BtnGroup } from "../../Components";
import { produce } from 'immer';

const mapAlignments = [
	{ label: __('left', 'map-block'), value: 'left', icon: 'editor-alignleft' },
	{ label: __('center', 'map-block'), value: 'center', icon: 'editor-aligncenter' },
	{ label: __('right', 'map-block'), value: 'right', icon: 'editor-alignright' }
];

const Settings = ({ attributes, setAttributes }) => {
	const { background, filters, hovFilters, padding, location, zoom, height, width, floating, border, alignment } = attributes;
	const { translate, rotate, scale, enabled: floatingEnabled } = floating;
	const { translateX, translateY, duration, delay } = translate;
	const { rotateX, rotateY, rotateZ, rotateDuration, rotateDelay } = rotate;
	const { scaleX, scaleY } = scale;

	// console.log(scaleY);

	const updateObj = (attr, key, val, nestKey = false) => {
		const newObj = produce(attributes[attr], draft => {
			if (false !== nestKey) {
				draft[key][nestKey] = val;
			} else {
				draft[key] = val;
			}
		});
		setAttributes({ [attr]: newObj })
	}

	// const updateObj = (attr, key, val, nestKey = false) => {
	// 	const newObj = produce(attributes[attr] || {}, (draft) => {
	// 		if (false !== nestKey) {
	// 			if (!draft[key]) {
	// 				draft[key] = {};
	// 			}
	// 			draft[key][nestKey] = val;
	// 		} else {
	// 			draft[key] = val;
	// 		}
	// 	});

	// 	setAttributes({ [attr]: newObj });
	// };


	return (
		<InspectorControls>
			<TabPanel
				className="bPlTabPanel"
				tabs={[
					{ name: "general", title: __("General") },
					{ name: "style", title: __("Style") }
				]}
			>
				{(tab) => <>
					{tab.name === "general" && <PanelBody
						className="bPlPanelBody"
						title={__("Map", "map-block")} 	>
						<TextControl
							label={__("Location", "map-block")}
							value={location}
							onChange={(val) => setAttributes({ location: val })}
						/>
						<RangeControl
							className="mt20"
							label={__("Zoom", "map-block")}
							value={zoom}
							onChange={(val) => setAttributes({ zoom: val })}
							min={0}
							max={20}
							step={1}
						/>
					</PanelBody>}


					{tab.name === "style" && <>
						<PanelBody
							className="bPlPanelBody"
							title={__("Map", "map-block")}>
							<UnitControl
								label={__("Width", "map-block")}
								labelPosition="left"
								value={width}
								onChange={(val) => setAttributes({ width: val })}
							/>
							<UnitControl
								className='mt20'
								label={__("Height", "map-block")}
								labelPosition="left"
								value={height}
								onChange={(val) => setAttributes({ height: val })}
							/>

							<BtnGroup
								className="mt20"
								label={__("Alignment", "map-block")}
								value={alignment}
								onChange={val => setAttributes({ alignment: val })}
								options={mapAlignments} isIcon={true} />

							<Background
								className='mt20 mb20'
								label={__('Background', 'map-block')}
								value={background}
								onChange={(val) => setAttributes({ background: val })}
								defaults={{ color: '#000' }}
							/>

							<BoxControl
								label={__("Padding", "map-block")}
								values={padding}
								resetValues={{
									"top": "0px",
									"right": "0px",
									"bottom": "0px",
									"left": "0px"
								}}
								onChange={(value) => setAttributes({ padding: value })}
							/>

							<BorderControl label={__('Border:', 'map-block')}
								value={border} onChange={val => setAttributes({ border: val })}
								defaults={{ radius: '5px' }} />
						</PanelBody>


						<PanelBody className="bPlPanelBody" title={__("Filter", "map-block")} initialOpen={false}>
							<TabPanel className="bPlTabPanel"
								tabs={[
									{ name: "normal", title: __("Normal") },
									{ name: "hover", title: __("Hover") },
								]} >

								{(tab) => <>
									{tab.name === "normal" && <PanelBody className="bPlPanelBody" > 
										<RangeControl
											label={__("Blur", "map-block")}
											value={filters.blur}
											onChange={(val) => updateObj('filters', 'blur', val)}
											min={0}
											max={10}
											step={0.1}
											allowReset={true}
											resetFallbackValue={0}
										/>
										<RangeControl
											label={__("Brightness", "map-block")}
											value={filters.brightness}
											onChange={(val) => updateObj('filters', 'brightness', val)}
											min={0}
											max={200}
											step={1}
											allowReset={true}
											resetFallbackValue={100}
										/>
										<RangeControl
											label={__("Contrast", "map-block")}
											value={filters.contrast}
											onChange={(val) => updateObj('filters', 'contrast', val)}
											min={0}
											max={200}
											step={1}
											allowReset={true}
											resetFallbackValue={100}
										/>
										<RangeControl
											label={__("Saturate", "map-block")}
											value={filters.saturate}
											onChange={(val) => updateObj('filters', 'saturate', val)}
											min={0}
											max={200}
											step={1}
											allowReset={true}
											resetFallbackValue={100}
										/>
										<RangeControl
											label={__("Hue", "map-block")}
											value={filters.hue}
											onChange={(val) => updateObj('filters', 'hue', val)}
											min={0}
											max={360}
											step={1}
											allowReset={true}
											resetFallbackValue={1}
										/>
									</PanelBody>}


									{tab.name === "hover" && <PanelBody className="bPlPanelBody"> 

										<RangeControl
											label={__("Blur", "map-block")}
											value={hovFilters.blur}
											onChange={(val) => updateObj('hovFilters', 'blur', val)}
											min={0}
											max={10}
											step={0.1}
											allowReset={true}
											resetFallbackValue={0}
										/>

										<RangeControl
											label={__("Brightness", "map-block")}
											value={hovFilters.brightness}
											onChange={(val) => updateObj('hovFilters', 'brightness', val)}
											min={0}
											max={200}
											step={1}
											allowReset={true}
											resetFallbackValue={60}
										/>
										<RangeControl
											label={__("Contrast", "map-block")}
											value={hovFilters.contrast}
											onChange={(val) => updateObj('hovFilters', 'contrast', val)}
											min={0}
											max={200}
											step={1}
											allowReset={true}
											resetFallbackValue={150}
										/>
										<RangeControl
											label={__("Saturate", "map-block")}
											value={hovFilters.saturate}
											onChange={(val) => updateObj('hovFilters', 'saturate', val)}
											min={0}
											max={200}
											step={1}
											allowReset={true}
											resetFallbackValue={200}
										/>
										<RangeControl
											label={__("Hue", "map-block")}
											value={hovFilters.hue}
											onChange={(val) => updateObj('hovFilters', 'hue', val)}
											min={0}
											max={360}
											step={1}
											allowReset={true}
											resetFallbackValue={10}
										/>
									</PanelBody>}
								</>}
							</TabPanel>
						</PanelBody>


						<PanelBody className="bPlPanelBody" title={__("Floating", "map-block")} initialOpen={false}>
							<ToggleControl
								label={__("Enable", "map-block")}
								value={floatingEnabled}
								checked={floatingEnabled}
								onChange={(val) => updateObj('floating', 'enabled', val)}
							/>

							{floatingEnabled && <>
								<PanelBody
									initialOpen={false}
									className="bPlPanelBody mt20"
									title={__("Translate", "map-block")}>

									<RangeControl
										label={__("translate-X", "map-block")}
										value={translateX}
										onChange={(val) => updateObj('floating', 'translate', val, 'translateX')}
										// onChange={(val) => setAttributes({ floating: { ...floating, translate: { ...floating.translate, translateY: val } } })}
										min={0}
										max={100}
										step={1}
										allowReset={true}
										resetFallbackValue={15.8239}
									/>

									<RangeControl
										label={__("translate-Y", "map-block")}
										value={translateY}
										onChange={(val) => updateObj('floating', 'translate', val, 'translateY')}
										min={0}
										max={100}
										step={1}
										allowReset={true}
										resetFallbackValue={1.08383}
									/>
									<RangeControl
										label={__("duration", "map-block")}
										value={duration}
										onChange={(val) => updateObj('floating', 'translate', val, 'duration')}
										min={0}
										max={100}
										step={1}
										allowReset={true}
										resetFallbackValue={1000}
									/>
									<RangeControl
										label={__("delay", "map-block")}
										value={delay}
										onChange={(val) => updateObj('floating', 'translate', val, 'delay')}
										min={0}
										max={10}
										step={1}
										allowReset={true}
										resetFallbackValue={0}
									/>
								</PanelBody>

								<PanelBody
									className="bPlPanelBody"
									initialOpen={false}
									title={__("Rotate", "map-block")}
								>
									<RangeControl
										label={__("Rotate-X", "map-block")}
										value={rotateX}
										onChange={(val) => updateObj('floating', 'rotate', val, 'rotateX')}
										min={0}
										max={180}
										step={1}
										allowReset={true}
										resetFallbackValue={-21.5199}
									/>
									<RangeControl
										label={__("Rotate-Y", "map-block")}
										value={rotateY}
										onChange={(val) => updateObj('floating', 'rotate', val, 'rotateY')}
										min={0}
										max={180}
										step={1}
										allowReset={true}
										resetFallbackValue={9.75444}
									/>
									<RangeControl
										label={__("Rotate-Z", "map-block")}
										value={rotateZ}
										onChange={(val) => updateObj('floating', 'rotate', val, 'rotateZ')}
										min={0}
										max={180}
										step={1}
										allowReset={true}
										resetFallbackValue={-36.4564}
									/>
									<RangeControl
										label={__("duration", "map-block")}
										value={rotateDuration}
										onChange={(val) => updateObj('floating', 'rotate', val, 'rotateDuration')}
										min={0}
										max={10000}
										step={1}
										allowReset={true}
										resetFallbackValue={1000}
									/>
									<RangeControl
										label={__("delay", "map-block")}
										value={rotateDelay}
										onChange={(val) => updateObj('floating', 'rotate', val, 'rotateDelay')}
										min={0}
										max={5000}
										step={1}
										allowReset={true}
										resetFallbackValue={0}
									/>
								</PanelBody>

								<PanelBody
									className="bPlPanelBody"
									initialOpen={false}
									title={__("Scale", "map-block")}
								>
									<RangeControl
										label={__("scale-X", "map-block")}
										value={scaleX}
										onChange={(val) => updateObj('floating', 'scale', val, 'scaleX')}
										min={0}
										max={5}
										step={1}
										allowReset={true}
										resetFallbackValue={0.803472}
									/>
									<RangeControl
										label={__("scale-Y", "map-block")}
										value={scaleY}
										onChange={(val) => updateObj('floating', 'scale', val, 'scaleY')}
										min={0}
										max={5}
										step={1}
										allowReset={true}
										resetFallbackValue={1.04335}
									/>
								</PanelBody>
							</>}
						</PanelBody>
					</>}
				</>}
			</TabPanel>
		</InspectorControls>
	);
};

export default Settings;