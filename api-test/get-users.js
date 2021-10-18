const fetch = require('node-fetch');
const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const expect = require('chai').use(require('chai-as-promised')).expect;
const url ='https://pacific-taiga-76065.herokuapp.com/users';
const headers = {
  "Content-Type": "application/json",
  "x-authentication-token": "very-secrete-token",
}

describe('API users testing', () => {
  it('Age should be a number', async () => {
    let res = await fetch(url, {method: 'GET', headers: headers});
    let response = await res.json();
    expect(response.users[0].age).to.be.a('number');
  });
  it('Name should be a string', async () => {
    let res = await fetch(url, {method: 'GET', headers: headers});
    let response = await res.json();
    expect(response.users[1].name).to.be.a('string');
  });
})