import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const allUnSetted = [
  {
    "customer": 1,
    "event": 11,
    "participant": 4,
    "stake": 50,
    "toWin": 500
  },
  {
    "customer": 3,
    "event": 11,
    "participant": 6,
    "stake": 50,
    "toWin": 400
  },
  {
    "customer": 4,
    "event": 11,
    "participant": 7,
    "stake": 300,
    "toWin": 1200
  },
  {
    "customer": 5,
    "event": 11,
    "participant": 2,
    "stake": 20,
    "toWin": 80
  },
  {
    "customer": 1,
    "event": 12,
    "participant": 4,
    "stake": 500,
    "toWin": 5000
  },
  {
    "customer": 2,
    "event": 12,
    "participant": 4,
    "stake": 20,
    "toWin": 200
  },
  {
    "customer": 3,
    "event": 12,
    "participant": 1,
    "stake": 50,
    "toWin": 400
  },
  {
    "customer": 4,
    "event": 12,
    "participant": 1,
    "stake": 250,
    "toWin": 1000
  },
  {
    "customer": 5,
    "event": 12,
    "participant": 5,
    "stake": 100,
    "toWin": 800
  },
  {
    "customer": 6,
    "event": 12,
    "participant": 3,
    "stake": 50,
    "toWin": 400
  },
  {
    "customer": 6,
    "event": 12,
    "participant": 2,
    "stake": 50,
    "toWin": 200
  },
  {
    "customer": 1,
    "event": 13,
    "participant": 3,
    "stake": 50,
    "toWin": 200
  },
  {
    "customer": 2,
    "event": 13,
    "participant": 1,
    "stake": 10,
    "toWin": 50
  },
  {
    "customer": 3,
    "event": 13,
    "participant": 9,
    "stake": 40,
    "toWin": 400
  },
  {
    "customer": 4,
    "event": 13,
    "participant": 6,
    "stake": 200,
    "toWin": 1000
  },
  {
    "customer": 6,
    "event": 13,
    "participant": 4,
    "stake": 500,
    "toWin": 4000
  },
  {
    "customer": 1,
    "event": 14,
    "participant": 2,
    "stake": 1000,
    "toWin": 8000
  },
  {
    "customer": 2,
    "event": 14,
    "participant": 5,
    "stake": 15,
    "toWin": 60
  },
  {
    "customer": 3,
    "event": 14,
    "participant": 8,
    "stake": 300,
    "toWin": 900
  },
  {
    "customer": 4,
    "event": 14,
    "participant": 5,
    "stake": 200,
    "toWin": 800
  },
  {
    "customer": 5,
    "event": 14,
    "participant": 6,
    "stake": 100,
    "toWin": 600
  },
  {
    "customer": 6,
    "event": 14,
    "participant": 6,
    "stake": 50,
    "toWin": 400
  }
];

class UserAllUnSettedApi {
  static getAllUnSetteds() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], allUnSetted));
      }, delay);
    });
  }  
}

export default UserAllUnSettedApi;
