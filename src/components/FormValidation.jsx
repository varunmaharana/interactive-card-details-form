import React from "react";

const checkCardName = (name, targetId) => {
    const target = document.getElementById(targetId);

    const regexFormat = /^[a-zA-Z][a-zA-Z\s]*$/;

    if (name === "") {
        target.classList.add("errorBorder");
        return {
            isValid : false,
            errorMsg : "Can't be blank"
        };
    } else if (name.match(regexFormat)) {
        target.classList.remove("errorBorder");
        return {
            isValid : true,
            errorMsg : false
        };
    } else {
        target.classList.add("errorBorder");
        return {
            isValid : false,
            errorMsg : "Wrong format, alphabets only"
        };
    }  
}

const checkCardNumber = (number, targetId) => {
    const target = document.getElementById(targetId);

    const regexFormatWithoutSpaces = /^([0-9]+([0-9]+)+)$/;
    const regexFormatWithSpaces = /^([0-9]+( [0-9]+)+)$/;

    if (number === "") {
        target.classList.add("errorBorder");
        return {
            isValid : false,
            errorMsg : "Can't be blank"
        };
    } else if (number.match(regexFormatWithoutSpaces) || number.match(regexFormatWithSpaces)) {
        if (number.match(regexFormatWithSpaces)) {
            if (number.length != 19) {
                target.classList.add("errorBorder");
                return {
                    isValid : false,
                    errorMsg : "Should be 16 digits"
                };
            }    
        } else if (number.length != 16) {
            target.classList.add("errorBorder");
            return {
                isValid : false,
                errorMsg : "Should be 16 digits"
            };
        }
        target.classList.remove("errorBorder");
        return {
            isValid : true,
            errorMsg : false
        };
    } else {
        target.classList.add("errorBorder");
        return {
            isValid : false,
            errorMsg : "Wrong format, numbers only"
        };
    }  
}

const checkExpMonth = (number, targetId) => {
    const target = document.getElementById(targetId);

    // console.log(target);

    const regexFormat = /^([0-9][0-9])$/;

    if (number === "") {
        target.classList.add("errorBorder");
        return {
            isValid : false,
            errorMsg : "Can't be blank"
        };
    } else if (number.match(regexFormat)) {
        if (Number(number) > 0 && Number(number) <= 12) {
            target.classList.remove("errorBorder");
            return {
                isValid : true,
                errorMsg : false
            };
        } else {
            target.classList.remove("errorBorder");
            return {
                isValid : false,
                errorMsg : "Wrong format"
            };
        }
    } else {
        target.classList.add("errorBorder");
        return {
            isValid : false,
            errorMsg : "Wrong format, numbers only"
        };
    }
}

const checkExpYear = (number, targetId) => {
    const target = document.getElementById(targetId);

    const regexFormat = /^([0-9][0-9])$/;

    if (number === "") {
        target.classList.add("errorBorder");
        return {
            isValid : false,
            errorMsg : "Can't be blank"
        };
    } else if (number.match(regexFormat)) {
        if (Number(number) > 15 && Number(number) <= 50) {
            target.classList.remove("errorBorder");
            return {
                isValid : true,
                errorMsg : false
            };
        } else {
            target.classList.add("errorBorder");
            return {
                isValid : false,
                errorMsg : "Wrong format"
            };
        }
    } else {
        target.classList.add("errorBorder");
        return {
            isValid : false,
            errorMsg : "Wrong format, numbers only"
        };
    }
}

const checkCvcNumber = (number, targetId) => {
    const target = document.getElementById(targetId);

    // console.log(target);

    const regexFormat = /^([0-9]+[0-9]+[0-9])$/;

    if (number === "") {
        target.classList.add("errorBorder");
        return {
            isValid : false,
            errorMsg : "Can't be blank"
        };
    } else if (number.match(regexFormat)) {
        if (number.length === 3) {
            target.classList.remove("errorBorder");
            return {
                isValid : true,
                errorMsg : false
            };
        } else {
            target.classList.add("errorBorder");
            return {
                isValid : false,
                errorMsg : "Wrong format"
            };
        }
    } else {
        target.classList.add("errorBorder");
        return {
            isValid : false,
            errorMsg : "Wrong format, numbers only"
        };
    }  
}

export { checkCardName, checkCardNumber, checkExpMonth, checkExpYear, checkCvcNumber };