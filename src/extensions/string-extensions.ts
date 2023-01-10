export {}

declare global {
    export interface String {
        UpperCaseFirstLetter(firstWordOnly?: boolean): string;
    }
}

const UpperCaseFirstLetter = (s: string): string => {
    let result = s.charAt(0).toUpperCase() + s.slice(1);

    return result;
}

String.prototype.UpperCaseFirstLetter = function(this: string, firstWordOnly: boolean): string {
    if (!this)
        return '';
    
    if (firstWordOnly)
        return UpperCaseFirstLetter(this);

    let strings = this.split(' ');
    let newStrings = strings.map(s => UpperCaseFirstLetter(s));
    let result = newStrings.join(' ');

    return result;
}