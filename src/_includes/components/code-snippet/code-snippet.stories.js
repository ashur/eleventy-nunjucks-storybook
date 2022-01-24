import {createCodeSnippet} from './code-snippet';

export default {
	title: 'Code Snippet',

	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {
		content: { control: 'text' },
		convertToSpaces: { control: 'boolean' },
	},
};

const Template = (args) => {
	return createCodeSnippet( args );
};

export const SingleLine = Template.bind({});
SingleLine.args = {
	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
};

export const MultiLine = Template.bind({});
MultiLine.args = {
	content: `{%- from "components/component.njk" import component -%}

{{ component( "button", {
	label: "Primary",
	primary: true,
	size: "large"
}) }}`
};

export const ConvertToSpaces = Template.bind({});
ConvertToSpaces.args = {
	convertToSpaces: true,
	content: `{%- from "components/component.njk" import component -%}

{{ component( "button", {
	label: "Primary",
	primary: true,
	size: "large"
}) }}`
};
