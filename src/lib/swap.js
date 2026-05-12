/**
 * swap: 배열 요소간 위치 교체
 * @param {any[]} arr - 원본 배열
 * @param {number} a - 첫번째 요소의 인덱스 번호
 * @param {number} b - 두번째 요소의 인덱스 번호
 */

const swap = (arr, a, b) => {
	const temp = [...arr];
	[temp[a], temp[b]] = [temp[b], temp[a]]; // 구조분해로 위치교환
	return temp;
};

export default swap;
