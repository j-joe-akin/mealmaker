let daysOfWeek = {
  _monday: {
    mains: [],
    sides: []
  },
  _tuesday: {
    mains: [],
    sides: []
  },
  _wednesday: {
    mains: [],
    sides: []
  },
  _thursday: {
    mains: [],
    sides: []
  },
  _friday: {
    mains: [],
    sides: []
  },
  _saturday: {
    mains: [],
    sides: []
  },
  _sunday: {
    mains: [],
    sides: []
  },
  get mains() {
    return;
  },
  get sides() {
    return;
  },
  set mains(mainIn) {
    return;
  },
  set sides(sideIn) {
    return;
  },
  get monday() {
    return {
      mains: this._monday.mains,
      sides: this._monday.sides
    };
  },
  get tuesday() {
    return {
      mains: this._tuesday.mains,
      sides: this._tuesday.sides
    };
  },
  get wednesday() {
    return {
      mains: this._wednesday.mains,
      sides: this._wednesday.sides
    };
  },
  get thursday() {
    return {
      mains: this._thursday.mains,
      sides: this._thursday.sides
    };
  },
  get friday() {
    return {
      mains: this._friday.mains,
      sides: this._friday.sides
    };
  },
  get saturday() {
    return {
      mains: this._saturday.mains,
      sides: this._saturday.sides
    };
  },
  get sunday() {
    return {
      mains: this._sunday.mains,
      sides: this._sunday.sides
    };
  },
  addDishToCourses(dayOfWeek, courseName, dishName, dishPrice) {
    const dish = {
      _name: dishName,
      _price: dishPrice
    };
    
  }
}
