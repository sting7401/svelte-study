export const isEmpty = (val) => {
    return val.trim().length === 0;
}

export const isValidEmail = (val) => {
    return new RegExp('/[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i').test(val);
}