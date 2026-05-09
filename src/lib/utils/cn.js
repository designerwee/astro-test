import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @param {...import("clsx").ClassValue} inputs
 * @returns {string}
 */

const cn = (...inputs) => {
	return twMerge(clsx(inputs));
};

export default cn;
