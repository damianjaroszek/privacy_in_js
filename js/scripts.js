var person = (function(){
    var _firstName= "Jan",
    _lastName= "Kowalski",
    _age=32;

    return{
    getName: function() {
        return _firstName + " " + _lastName;
    },
    getAge: function() {
        return _age;
    },
    setName: function(firstName, lastName) {
        _firstName = firstName || _firstName; // znak || to OR jeżeli pierwszy parametr zostanie pominięty to podstawiany jest ten istniejący
        _lastName = lastName || _lastName;
    },
    setAge: function(age) {
        _age = (age > 0) ? age : _age; // age > 0 w przeciwym razie jest podstawiony istniejącu
    }
    
    };

})();

console.log(person.getAge()); // dzięki domknięciu możemy dostać się do metody getAge i przez nią skorzystać z pola _age, 
                              // bezpośredni dostęp jest niemożliwy (całość to funkcja ograniczająca zakres)

//-----------------------------------------------------------------------

function Person(firstName, lastName){
    var _firstName = firstName,
    _lastName = lastName;

    this.getName = function(){
        return _firstName+ " " +_lastName;
    };
}


/*Person.prototype.getName = function(){
        return _firstName+ " " +_lastName;
    };
*/

person2 = new Person("Anna", "Kowalska"); // klasa Person ma dwa pola ale nie są obsługiwane przez THIS więc dostęp do nich jest możlowy tylko z poziomu funkcji getName
person3 = new Person("Damian", "Jaroszek");
console.log(person2._firstName);

// w poprzednich przykładach było wspomniane, że nieefektywnie jest wrzucać metodę w ciało klasy gdyż każda instancja nowego obiektu będzie przechowywała metodę getName
// nawet jeżeli z niej nie skorzysta. Stworzenie 1000 obiektów jest równoznaczne z utworzeniem w pamieci 1000 razy tej samej funkcji
// niestety w tym przypadku wyniesienie getName do prototypu nie pomoże, ponieważ będąc poza ciałem klasy a będąc w prototypie funkcja utraci dostęp do pól _firstName i _lastName
// aby przywrócić dostęp z poziomu prototypu klasa Person powinna mieć pola z THIS a przez to pola bedą widoczne poza klasą - niszczymy enkapsulację
// wyniesienie pól do prototypu sprawi, że każda instancja obiektu będzie posiadała te same wartrości