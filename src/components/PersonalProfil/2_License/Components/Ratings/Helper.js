export const hasValue = (object, key) => object !== undefined && object[key] !== undefined && object[key].length > 0;

export const hasErrors = (errors, index, key) => {
    if (errors.RatingList !== undefined && errors.RatingList[index] !== undefined) {
        return errors.RatingList[index][key];
    }
    return false;
};

export const isValid = ({ index, Rating, key, errors }) => {
    if (hasValue(Rating, key) && !hasErrors(errors, index, key)) {
        return true;
    }
    return false;
};

export const isInvalid = ({ index, errors, key }) => {
    if (hasErrors(errors, index, key)) {
        return true;
    }
    return false;
};