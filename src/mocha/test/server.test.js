var expect = require('chai').expect;
var request = require('request');

describe('Color code converter API', function(){
    describe('RGB to Hex convertion API', function(){
        var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";
        it('returns status 200', function(){
            request(url, function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    done();
                });
        });
        it('returns the color in hex', function(){
            request(url, function(error, response, body) {
                expect(body).to.equal("ffffff");
                done();
            });
        });
    });

    describe('Hex to RGB conversion API', function(){
        var url = "http://localhost:3000/hexToRgb?hex=00ff00";
        it('returns status 200', function(){
            request(url, function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    done();
                });
        });
        it('returns the color in RGB', function(){
            request(url, function(error, response, body) {
                expect(body).to.equal("[0,255,0]");
                done();
            });
        });
    });
});