
export const isLogbookOwner = (index) => index === 0;

export const hasValue = (object, key) => object !== undefined && object[key] !== undefined && object[key].length > 0;

export const hasErrors = (errors, index, key) => {
    if (errors.Crew !== undefined && errors.Crew[index] !== undefined) {
        return errors.Crew[index][key];
    }
    return false;
};

export const isValid = ({ index, CrewMember, key, errors }) => {
    if (!isLogbookOwner(index) && hasValue(CrewMember, key) && !hasErrors(errors, index, key)) {
        return true;
    }
    return false;
};

export const isInvalid = ({ index, errors, key }) => {
    if (!isLogbookOwner(index) && hasErrors(errors, index, key)) {
        return true;
    }
    return false;
};

export const hasPIC = (PIC) => PIC !== '';

