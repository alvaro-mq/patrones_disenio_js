// Patron observador

class User {
  constructor () {
    this.on = () => {

    };
    this.trigger = () => {
      
    }
  }
}


const user = new User();

const init = () => {
  user.on('login', userLoggedIn);
};

const userLoggedIn = () => {
  // usuario inicio sesion
};

init();

const login = () => {
  // logica de inicio de sesion
  // ...
  user.trigger('login');
};

login();