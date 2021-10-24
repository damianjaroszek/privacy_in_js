var person = {
    _firstName: "Jan",
    _lastName: "Kowalski",
    _age: 32,
    getName: function() {
        return this._firstName + " " + this._lastName;
    },
    getAge: function() {
        return this._age;
    },
    setName: function(firstName, lastName) {
        this._firstName = firstName || this._firstName;
        this._lastName = lastName || this._lastName;
    },
    setAge: function(age) {
        this._age = (age > 0) ? age : this._age;
    }
};