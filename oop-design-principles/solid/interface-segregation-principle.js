/*******************************

This is the first principle that applies to an interfaces. It is similar to the single responsibility principle. It states that we should not force any client to implement an interface that is irrelevant to them. The main goal of this concept is to focus on avoiding fat interface and give preference to many small client-specific interfaces.

JavaScript doesn’t have interfaces, so this principle doesn’t apply directly since it doesn’t enforce the implementation of anything via interfaces.

********************************/

interface ICar {
	drive() {}
}

interface IABSCar {
	abs() {}
}

interface IEPSCar {
	eps() {}
}

class Reneau implements ICar {}
class Ferrari implements ICar, IABSCar {}
class Lambo implements ICar, IEPSCar {}
