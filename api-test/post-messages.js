const fetch = require('node-fetch');
const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const userid = '046a313ed1-54f0-54c5-a894-20c321520e4e';
const expect = require('chai').use(require('chai-as-promised')).expect;
const message = 'Test-message';
const url ='https://pacific-taiga-76065.herokuapp.com/messages/'+userid+'/'+ message;
const headers = {
  "Content-Type": "application/json",
  "x-authentication-token": "very-secrete-token",
}

describe('API Post messages testing', () => {
  it('Post should be created', async () => {
    let res = await fetch(url, {method: 'POST', headers: headers});
    let response = await res.statusText;
    let status = await res.status;
    expect(response).to.equal('Created');
    expect(status).to.equal(201);
  });
})

