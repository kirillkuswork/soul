export const handleCalculateImageStyles = (arr, width, height, orientation) => {
    const result = [];
    arr.forEach((imageUrl) => {
        const img = new Image();
        img.src = imageUrl;
        const isLaptop = width > 768 && orientation === 'landscape';
        const hightPaddings = !isLaptop ? 250 : 0;
        const widthPaddings = isLaptop ? 300 : 0;
        img.onload = () => {
            const imgWidth = img.width || 1;
            const imgHeight = img.height || 1;
            const imgSizesIndex = imgWidth / imgHeight;
            const heightIndex = height / imgHeight;
            const widthIndex = width / imgWidth;
            let w;
            imgWidth * heightIndex > width - widthPaddings ? (w = width - widthPaddings) : (w = imgWidth * heightIndex);
            let h;
            imgHeight * widthIndex > height - hightPaddings ? (h = height - hightPaddings) : (h = imgHeight * widthIndex);

            if (imgSizesIndex >= 0.8 && imgSizesIndex < 1.2) {
                if (orientation === 'landscape') {
                    result.push({ height: height, width: w });
                } else {
                    result.push({ width: w, height: h });
                }
            } else if (imgSizesIndex < 0.8) {
                if (heightIndex <= widthIndex) {
                    result.push({ width: width, height: imgHeight * widthIndex });
                } else {
                    result.push({ height: height - hightPaddings, width: imgWidth * heightIndex });
                }
            } else if (imgSizesIndex >= 1.2) {
                if (heightIndex >= widthIndex) {
                    result.push({ width: w, height: h });
                } else {
                    result.push({ height: height, width: w });
                }
            }
        };
    });
    return result;
};
