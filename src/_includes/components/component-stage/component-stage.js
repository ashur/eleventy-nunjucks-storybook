import './component-stage.css';
import renderComponentStage from './component-stage.njk'

/**
 * @param {Object} args
 * @param {boolean} [args.content]
 */
export const createComponentStage = ({ content, ...args }) =>
{
	// Setting a `storybookArgs` context variable causes the render() macro to
	// be called automatically 📕
	return renderComponentStage({
		storybookArgs: args,
		storybookCaller: () => content,
	});
};
