export const defaultDateFormat = 'DD/MM/YYYY';
export const defaultDateTimeFormat = 'DD/MM/YYYY HH:mm:ss';
export const fancyDateTimeFormat = 'dddd, Do MMM YYYY @ HH:mm:ss';

export const momentFormat = (momentDate, format) => {
    return !!momentDate && !!format ? momentDate.format(format) : '';
}

export const dateFormatter = (momentDate) => {
    return momentFormat(momentDate, defaultDateFormat);
}

export const dateTimeFormatter = (momentDate) => {
    return momentFormat(momentDate, defaultDateTimeFormat);
}

export const toNumber = (string) => {
    if (!string) return '';
    return string.replace(/\D/g, '');
}

export const limit = (string, max) =>  {
    if (!string) return '';
    return string.substr(0, max);
}

export const removeLeadingZero = (string) => {
    if (!string) return '';
    return string.replace(/\b0+/g, '');
}