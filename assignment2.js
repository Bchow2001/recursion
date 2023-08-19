function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let left = [];
	let right = [];
	arr.forEach((item, i) => {
		if (i < arr.length / 2) {
			left.push(item);
		} else {
			right.push(item);
		}
	});
	left = mergeSort(left);
	right = mergeSort(right);
	return merge(left, right);
}

function merge(left, right) {
	let result = [];
	while (left.length != 0 && right.length != 0) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	while (left.length != 0) {
		result.push(left.shift());
	}
	while (right.length != 0) {
		result.push(right.shift());
	}
	return result;
}
