/**
 * mapRange: 특정 범위(inMin ~ inMax)에 속한 숫자를 다른 범위(outMin ~ outMax)의 숫자로 비례하게 변환
 * @param {number} value
 * @param {number} inMin
 * @param {number} inMax
 * @param {number} outMin
 * @param {number} outMax
 * @returns
 */

const mapRange = (value, inMin, inMax, outMin, outMax) => {
	return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
};

export default mapRange;
