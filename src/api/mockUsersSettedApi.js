import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const allSetted = [
  {
    "customer": 1,
    "event": 1,
    "participant": 6,
    "stake": 50,
    "win": 250
  },
  {
    "customer": 2,
    "event": 1,
    "participant": 3,
    "stake": 5,
    "win": 0
  },
  {
    "customer": 3,
    "event": 1,
    "participant": 3,
    "stake": 20,
    "win": 0
  },
  {
    "customer": 4,
    "event": 1,
    "participant": 6,
    "stake": 200,
    "win": 1000
  },
  {
    "customer": 1,
    "event": 2,
    "participant": 1,
    "stake": 20,
    "win": 60
  },
  {
    "customer": 2,
    "event": 2,
    "participant": 1,
    "stake": 5,
    "win": 15
  },
  {
    "customer": 3,
    "event": 2,
    "participant": 2,
    "stake": 50,
    "win": 0
  },
  {
    "customer": 4,
    "event": 2,
    "participant": 5,
    "stake": 100,
    "win": 0
  },
  {
    "customer": 5,
    "event": 2,
    "participant": 3,
    "stake": 20,
    "win": 0
  },
  {
    "customer": 1,
    "event": 3,
    "participant": 5,
    "stake": 50,
    "win": 0
  },
  {
    "customer": 2,
    "event": 3,
    "participant": 5,
    "stake": 10,
    "win": 0
  },
  {
    "customer": 3,
    "event": 3,
    "participant": 5,
    "stake": 20,
    "win": 0
  },
  {
    "customer": 4,
    "event": 3,
    "participant": 5,
    "stake": 100,
    "win": 0
  },
  {
    "customer": 5,
    "event": 3,
    "participant": 6,
    "stake": 20,
    "win": 0
  },
  {
    "customer": 6,
    "event": 3,
    "participant": 1,
    "stake": 50,
    "win": 500
  },
  {
    "customer": 1,
    "event": 4,
    "participant": 1,
    "stake": 50,
    "win": 120
  },
  {
    "customer": 2,
    "event": 4,
    "participant": 5,
    "stake": 10,
    "win": 0
  },
  {
    "customer": 3,
    "event": 4,
    "participant": 6,
    "stake": 50,
    "win": 0
  },
  {
    "customer": 1,
    "event": 5,
    "participant": 10,
    "stake": 50,
    "win": 400
  },
  {
    "customer": 2,
    "event": 5,
    "participant": 7,
    "stake": 10,
    "win": 0
  },
  {
    "customer": 3,
    "event": 5,
    "participant": 9,
    "stake": 20,
    "win": 0
  },
  {
    "customer": 4,
    "event": 5,
    "participant": 9,
    "stake": 200,
    "win": 0
  },
  {
    "customer": 4,
    "event": 5,
    "participant": 10,
    "stake": 250,
    "win": 2000
  },
  {
    "customer": 5,
    "event": 5,
    "participant": 10,
    "stake": 20,
    "win": 160
  },
  {
    "customer": 6,
    "event": 5,
    "participant": 10,
    "stake": 50,
    "win": 400
  },
  {
    "customer": 1,
    "event": 5,
    "participant": 7,
    "stake": 40,
    "win": 0
  },
  {
    "customer": 1,
    "event": 6,
    "participant": 4,
    "stake": 40,
    "win": 160
  },
  {
    "customer": 2,
    "event": 6,
    "participant": 3,
    "stake": 15,
    "win": 0
  },
  {
    "customer": 3,
    "event": 6,
    "participant": 4,
    "stake": 50,
    "win": 0
  },
  {
    "customer": 4,
    "event": 6,
    "participant": 5,
    "stake": 100,
    "win": 0
  },
  {
    "customer": 4,
    "event": 6,
    "participant": 4,
    "stake": 120,
    "win": 480
  },
  {
    "customer": 5,
    "event": 6,
    "participant": 4,
    "stake": 10,
    "win": 40
  },
  {
    "customer": 2,
    "event": 7,
    "participant": 8,
    "stake": 10,
    "win": 0
  },
  {
    "customer": 2,
    "event": 7,
    "participant": 7,
    "stake": 20,
    "win": 0
  },
  {
    "customer": 3,
    "event": 7,
    "participant": 3,
    "stake": 50,
    "win": 300
  },
  {
    "customer": 1,
    "event": 8,
    "participant": 5,
    "stake": 80,
    "win": 320
  },
  {
    "customer": 5,
    "event": 8,
    "participant": 8,
    "stake": 20,
    "win": 0
  },
  {
    "customer": 1,
    "event": 9,
    "participant": 2,
    "stake": 60,
    "win": 480
  },
  {
    "customer": 1,
    "event": 9,
    "participant": 4,
    "stake": 50,
    "win": 0
  },
  {
    "customer": 2,
    "event": 9,
    "participant": 3,
    "stake": 20,
    "win": 0
  },
  {
    "customer": 2,
    "event": 9,
    "participant": 10,
    "stake": 20,
    "win": 0
  },
  {
    "customer": 3,
    "event": 9,
    "participant": 10,
    "stake": 20,
    "win": 0
  },
  {
    "customer": 3,
    "event": 9,
    "participant": 2,
    "stake": 50,
    "win": 400
  },
  {
    "customer": 4,
    "event": 9,
    "participant": 2,
    "stake": 200,
    "win": 1600
  },
  {
    "customer": 4,
    "event": 9,
    "participant": 6,
    "stake": 300,
    "win": 0
  },
  {
    "customer": 5,
    "event": 9,
    "participant": 8,
    "stake": 30,
    "win": 0
  },
  {
    "customer": 5,
    "event": 9,
    "participant": 7,
    "stake": 25,
    "win": 0
  },
  {
    "customer": 6,
    "event": 9,
    "participant": 2,
    "stake": 50,
    "win": 400
  },
  {
    "customer": 6,
    "event": 9,
    "participant": 7,
    "stake": 40,
    "win": 0
  },
  {
    "customer": 6,
    "event": 9,
    "participant": 6,
    "stake": 50,
    "win": 0
  }
];


//This would be performed on the server in a real app. Just stubbing in.
const generateId = (author) => {
  return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

class UserAllSettedApi {
  static getAllSetteds() {
      debugger;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], allSetted));
      }, delay);
    });
  }  
}

export default UserAllSettedApi;
