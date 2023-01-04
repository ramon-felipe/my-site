const rateIconFull: JSX.Element = <i className="bi bi-circle-fill ps-1"></i>;
const rateIconEmpty: JSX.Element = <i className="bi bi-circle ps-1"></i>;

const adjustRateItemKey = (rate: JSX.Element[]): JSX.Element[] => {
    for (let i = 0; i < rate.length; i++)
        rate[i] = {...rate[i], key: i};

    return rate;
}

const writeRate = (rateValue: number) => {
    let rate: JSX.Element[] = [rateIconEmpty, rateIconEmpty, rateIconEmpty, rateIconEmpty, rateIconEmpty];

    for (let i = 0; i < rateValue; i++) {
        rate[i] = rateIconFull;
    }

    return adjustRateItemKey(rate);
};

export { adjustRateItemKey, writeRate };