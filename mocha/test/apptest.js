const assert = require('chai').assert;
//const add  = require('../app').add;
const app  = require('../app');

describe('app',function(){
    it('app should return hello', function(){
        assert.equal(app.add(3,2), '5');
    });
    it('app should return hello', function(){
        assert.equal(app.sub(3,2), '1');
    });
    it('app should return hello', function(){
        assert.equal(app.mul(3,2), '6');
    });
});