/****************************

This principle allows for decoupling. This means entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.

The beauty of this design principle is that any class which is injected by DI framework is easy to test with the mock object and easier to maintain because object creation code is centralized in the framework and client code is not littered with that.

*****************************/

// Low-level module
class MySQLConnection {
  connect() {
    // handle the database connection
    return 'Database connection';
  }
}

// High level module
class PasswordReminder {
  constructor(dbConnection /* dependency of type MySQLConnection */) {
    this.dbConnection = dbConnection
  }
}

/*********************************

This snippet above violates this principle as the PasswordReminder class is being forced to depend on the MySQLConnection class.

Later, if you were to change the database engine, you would also have to edit the PasswordReminder class, and this would violate the open-close principle.

The PasswordReminder class should not care what database your application uses. To address these issues, you can code to an interface since high-level and low-level modules should depend on abstraction and no matter the type of database your application uses, the PasswordReminder class can connect to the database without any problems and open-close principle is not violated.

***********************************/

interface DBConnectionInterface {
  public function connect();
}

class MySQLConnection implements DBConnectionInterface {
	connect() {
    // handle the database connection
    return 'Database connection';
  }
}

class PasswordReminder {
	constructor(dbConnection /* dependency of type DBConnectionInterface */) {
    this.dbConnection = dbConnection
  }
}
