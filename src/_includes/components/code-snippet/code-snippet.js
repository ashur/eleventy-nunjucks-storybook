import './code-snippet.css';
import renderCodeSnippet from './code-snippet.njk'

/**
 * @param {Object} args
 * @param {boolean} [args.content]
 * @param {boolean} [args.convertToSpaces=false]
 */
export const createCodeSnippet = ({ content, ...args}) =>
{
	// Setting a `storybookArgs` context variable causes the render() macro to
	// be called automatically 📕
	return renderCodeSnippet({
		storybookArgs: args,
		storybookCaller: () => content,
	});
};
