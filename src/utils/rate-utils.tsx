const rateIconFull: JSX.Element = <i className="bi bi-circle-fill ps-1"></i>;
const rateIconEmpty: JSX.Element = <i className="bi bi-circle ps-1"></i>;

const adjustRateItemKey = (rate: JSX.Element[]): JSX.Element[] => {
    for (let i = 0; i < rate.length; i++)
        rate[i] = {...rate[i], key: i};

    return rate;
}

const writeRateWithIcons = (rateValue: number) => {
    let rate: JSX.Element[] = [rateIconEmpty, rateIconEmpty, rateIconEmpty, rateIconEmpty, rateIconEmpty];

    for (let i = 0; i < rateValue; i++) {
        rate[i] = rateIconFull;
    }

    return adjustRateItemKey(rate);
};

const getRateText = (rateValue: number): string => {
    let rateDesc = new Map<number, string>();
    rateDesc.set(0, "no-knowledge");
    rateDesc.set(1, "not-good");
    rateDesc.set(2, "now-a-bit");
    rateDesc.set(3, "good");
    rateDesc.set(4, "very-good");
    rateDesc.set(5, "excellent");

    let result = rateDesc.get(rateValue);

    return result || "";
}

export { adjustRateItemKey, writeRateWithIcons, getRateText };