import * as assert from 'assert';
import * as httpMocks from 'node-mocks-http';
import { saveFile, loadFile, listFiles } from './routes';


describe('routes', function() {
  /*
  // After you know what to do, feel free to delete this Dummy test
  it('Dummy', function() {
    // Feel free to copy this test structure to start your own tests, but look at these
    // comments first to understand what's going on.

    // httpMocks lets us create mock Request and Response params to pass into our route functions
    const req1 = httpMocks.createRequest(
        // query: is how we add query params. body: {} can be used to test a POST request
        {method: 'GET', url: '/api/dummy', query: {name: 'Kevin'}}); 
    const res1 = httpMocks.createResponse();

    // call our function to execute the request and fill in the response
    Dummy(req1, res1);

    // check that the request was successful
    assert.strictEqual(res1._getStatusCode(), 200);
    // and the response data is as expected
    assert.deepEqual(res1._getJSONData(), 'Hi, Kevin');
  });
  */


  // TODO: add tests for your routes
  it('saveFile', function() {
    // httpMocks lets us create mock Request and Response params to pass into our route functions
    const req1 = httpMocks.createRequest(
        // query: is how we add query params. body: {} can be used to test a POST request
        {method: 'POST', url: '/api/save', query: {name: 'Hello'}, body: {contents: 'World'}}); 
    const res1 = httpMocks.createResponse();

    // call our function to execute the request and fill in the response
    saveFile(req1, res1);

    // check that the request was successful
    assert.strictEqual(res1._getStatusCode(), 200);
    // and the response data is as expected
    assert.deepEqual(res1._getData(), {name: 'Hello', contents: 'World'});
  });

  it('loadFile', function() {
    // httpMocks lets us create mock Request and Response params to pass into our route functions
    const req1 = httpMocks.createRequest(
        // query: is how we add query params. body: {} can be used to test a POST request
        {method: 'GET', url: '/api/load', query: {name: 'Hello'}}); 
    const res1 = httpMocks.createResponse();

    // call our function to execute the request and fill in the response
    saveFile(req1, httpMocks.createResponse());
    loadFile(req1, res1);

    // check that the request was successful
    assert.strictEqual(res1._getStatusCode(), 200);
    // and the response data is as expected
    assert.deepEqual(res1._getData(), {contents: 'World'});
  });

  it('listFiles', function() {
    // httpMocks lets us create mock Request and Response params to pass into our route functions
    const req1 = httpMocks.createRequest(
        // query: is how we add query params. body: {} can be used to test a POST request
        {method: 'GET', url: '/api/list'}); 
    const res1 = httpMocks.createResponse();

    // call our function to execute the request and fill in the response
    listFiles(req1, res1);

    // check that the request was successful
    assert.strictEqual(res1._getStatusCode(), 200);
    // and the response data is as expected
    assert.deepEqual(res1._getData(), ['Hello']);
  });
});
