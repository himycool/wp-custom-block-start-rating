/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import {
    Disabled,
	PanelBody,
	PanelRow,
	SelectControl,
} from "@wordpress/components";
import {InspectorControls} from "@wordpress/block-editor";
import ServerSideRender from "@wordpress/server-side-render";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */

const Edit = ( props ) => {

	const { attributes, setAttributes } = props;
	const { startRatings } = attributes;

	//set startRatings
	const setStartRatings = (startRatingsVal) => {
		setAttributes({
			startRatings: startRatingsVal,
		});
	};

	return [
		<InspectorControls>
            <PanelBody title={__("Rating Settings", "")}>
				<PanelRow>
					<SelectControl
						label="Star Ratings"
						value={attributes.startRatings}
						options={[
							{ label: "0", value: "0" },
							{ label: "0.5", value: "0.5" },
							{ label: "1", value: "1" },
							{ label: "1.5", value: "1.5" },
							{ label: "2", value: "2" },
							{ label: "2.5", value: "2.5" },
							{ label: "3", value: "3" },
							{ label: "3.5", value: "3.5" },
							{ label: "4", value: "4" },
							{ label: "4.5", value: "4.5" },
							{ label: "5", value: "5" },
						]}
						onChange={setStartRatings}
					/>
				</PanelRow>
            </PanelBody>
        </InspectorControls>
		,
		<Disabled>
            <ServerSideRender block="e25m-custom/star-ratings" attributes={attributes}/>
        </Disabled>
	];
}

export default Edit;