function createUser(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

function getFullName(user) {
    if (!user) {
        return "";
    }else{
        return `${user.firstName} ${user.lastName}`;
    }
}

function getWidth(params) {
    if (Object.keys(params).length === 0 || Object.keys(params.styling).length === 0){
        return null;
    }else{
        return params.styling.sizes.width;
    }
}

function extendObject(obj, isValid) {
    const newObj = { ...obj, isValid: isValid};
    return newObj;
}

function sumPrices(prices) {
    let sum = 0;
    for (let value of Object.values(prices)) {
        if (typeof value === "number" && Number.isFinite(value)){
            sum += value;
        }
    }
    return sum;
}

function createUserWithFullName(firstName, lastName) {
    const newObj = {
        firstName: firstName,
        lastName: lastName,
        setFirstName(newFirstName) {
            this.firstName = newFirstName;
        },
        setLastName(newLastName) {
            this.lastName = newLastName;
        },
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        },
    };
    return newObj;
}

