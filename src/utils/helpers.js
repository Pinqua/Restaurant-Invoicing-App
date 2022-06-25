export const calculatePriceIncludingGST = (percentage, price) => {
    return {
        priceIncludingGST: price + Math.floor((price * percentage) / 100),
        tax: Math.floor((price * percentage) / 100),
    };
};
