export default class {
  constructor() {
      this.shortResponse = 'http://www.filltext.com/?rows=32&id=%7' +
  'Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7' +
  'D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7' +
  'BaddressObject%7D&description=%7Blorem%7C32%7D';

        this.longResponse = 'http://www.filltext.com/?rows=1000&id=%7' +
  'Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7' +
  'BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7' +
  'D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

      this.requestInit = {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          },
      };
      this.line = document.getElementById('test').innerHTML;
  }

static printArr(arr) {
let res = document.getElementById('test').innerHTML;
for (let i = 0; i < arr.length; i++) {
res += `<br/>${arr[i].id}: ${arr[i].t}`;
}
document.getElementById('test').innerHTML = res;
}

static print(arg) {
  this.line += arg;
  this.line += '<br/>';
document.getElementById('test').innerHTML = this.line;
}

static sortArrById(arr) {
  // eslint-disable-next-line prefer-arrow-callback
  arr.sort(function (a, b) { return a.id - b.id; });
}

static checkResponse(res) {
  return new Promise((resolve, reject) => {
    if (res.status >= 200 && res.status < 300) {
      resolve(res);
    } else {
      const err = new Error(`Server responded with: ${res.statusText}`);
      reject(err);
    }
  });
}

static getData() {
  const req = new Request(this.shortResponse, this.requestInit);
  fetch(req)
    .then(res => this.checkResponse(res))
    .then(response =>
      new Promise((resolve, reject) => {
      if (response !== undefined) {
      resolve(response);
      } else {
        const err = new Error('response is undefined');
        reject(err);
      }
    }))
    .then(response => new Promise((resolve, reject) => {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        resolve(response.json());
      } else {
        reject(new Error('content-type in response is not application/json'));
      }
    }))
    .then((res) => {
      this.sortArrById(res);
      return res;
    })
    .catch((err) => {
      // TODO return some sort of signal.
      // Then in React Component check for signal and if it not undef
      //  print some friendly message error has occured, sorry, bla-bla.
      //  For now simply print all to screen.
      if (err) {
        this.print(err.message);
      }
    });
}
} // end class
