import {createButton} from '../button/button';
import {createComponentStage} from './component-stage';

export default {
	title: 'Component Stage',

	// More on argTypes: https://storybook.js.org/docs/html/api/argtypes
	argTypes: {
		center: { control: 'boolean' },
		content: { control: 'text' },
	},
};

const Template = (args) => {
	return createComponentStage( args );
};

export const Button = Template.bind({});
Button.args = {
	content: createButton({ label: "Button", primary: true }).trim(),
};

export const SimpleText = Template.bind({});
SimpleText.args = {
	content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`
};
