function longestSubstringWithoutRepeating(s) {
        if (typeof s !== 'string') {
        throw new TypeError('Входной параметр должен быть строкой');
    }

    let leftPointer = 0;
    let maxLength = 0;
    const charIndexMap = {};

    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        const currentChar = s[rightPointer];

        if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= leftPointer) {
            leftPointer = charIndexMap[currentChar] + 1;
        }

        charIndexMap[currentChar] = rightPointer;
        maxLength = Math.max(maxLength, rightPointer - leftPointer + 1);
    }

    return maxLength;
}


function findUniqueElement(arr) {
    
    if (!Array.isArray(arr)) {
        throw new TypeError('Входной параметр должен быть массивом');
    }

    if (arr.length === 0) {
        return [];
    }

    const countMap = new Map();

    arr.forEach(item => {
        countMap.set(item, (countMap.get(item) || 0) + 1);
    });

    
    const uniqueElements = arr.filter(item => countMap.get(item) === 1);

    if (uniqueElements.length === 0) {
        throw new Error('В массиве нет уникальных элементов');
    }
    

    return uniqueElements;
}


