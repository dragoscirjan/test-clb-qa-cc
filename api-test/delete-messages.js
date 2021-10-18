const fetch = require('node-fetch');
const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const expect = require('chai').use(require('chai-as-promised')).expect;
const url ='https://pacific-taiga-76065.herokuapp.com/clear';
const headers = {
  "Content-Type": "application/json",
  "x-authentication-token": "very-secrete-token",
}

describe('API Delete messages testing', () => {
  it('Posts should be deleted', async () => {
    let res = await fetch(url, {method: 'POST', headers: headers});
    let response = await res.json();
    expect(response.status).to.equal('success');
  });
})