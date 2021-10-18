const fetch = require('node-fetch');
const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const expect = require('chai').use(require('chai-as-promised')).expect;
const url ='https://pacific-taiga-76065.herokuapp.com/messages';
const headers = {
  "Content-Type": "application/json",
  "x-authentication-token": "very-secrete-token",
}

describe('Sample API test for getting message', () => {
  it('Should return 200 status', async () => {
    let res = await fetch(url, {method: 'GET', headers: headers});
    let response = await res.status;
    expect(parseInt(response)).to.equal(200);
  });
  it('Message should be a string', async () => {
    let res = await fetch(url, {method: 'GET', headers: headers});
    let response = await res.json();
    expect(response.messages[0].message).to.be.a('string');
  });
  it('Should fail to contain the word TestingWord', async () => {
    let res = await fetch(url, {method: 'GET', headers: headers});
    let response = await res.json();
    expect(response.messages[1].message).to.not.contain('TestingWord');
  });
})
