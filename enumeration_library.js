const EnumerationLibrary = function(array) {
  this.array = array
}

EnumerationLibrary.prototype.find = function(callback) {
  for (const element of this.array) {
    if (callback(element)) {
      return element;
    }
  }
  return null;
}

EnumerationLibrary.prototype.map = function(callback) {
  const newArray = [];
  for (const element of this.array) {
    newArray.push(callback(element));
  }
  return newArray;
};

EnumerationLibrary.prototype.filter = function(callback) {
  const newArray = [];
  for (const element of this.array) {
    if (callback(element) !== undefined) {
    newArray.push(element);
  }
}
  return newArray;
}

EnumerationLibrary.prototype.some = function(callback) {
  for (const element of this.array) {
    if (callback(element)) {
      return true;
    };
  }
  return false;
}

EnumerationLibrary.prototype.every = function(callback) {
  for (const element of this.array) {
    if (!callback(element)) {
      return false;
    };
  }
  return true;
}


module.exports = EnumerationLibrary;
