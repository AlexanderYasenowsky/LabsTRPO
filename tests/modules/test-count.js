var countProcessor = require('../../src/modules/countProcessor');
var expect  = require('chai').expect;


describe('Count processor module test', () => {
  describe('Test text length count', () => {
    it('testing empty string', () => {
      expect(countProcessor.getSymbolsCount('')).equal(0);
    });
    it('testing string: "Hello world!"', () => {
      expect(countProcessor.getSymbolsCount('Hello world!')).equal(12);
    });
    it('testing string: "12345678"', () => {
      expect(countProcessor.getSymbolsCount('12345678')).equal(8);
    });
  });
  describe('Test word count', () => {
    it('testing single word string: "dsgasdgahahasdhsadhdsh"', () => {
      expect(countProcessor.getParamsCount('dsgasdgahahasdhsadhdsh').w).equal(1);
    });
    it('testing multiple word string: "1 2 3 4 5 6 7 8 9 0"', () => {
      expect(countProcessor.getParamsCount('1 2 3 4 5 6 7 8 9 0').w).equal(10);
    });
    it('testing multiple word string: "Hello, world!"', () => {
      expect(countProcessor.getParamsCount('Hello, world!').w).equal(2);
    });
  });

  describe('Test sentences count', () => {
    it('testing single sentence string :"dsgasdgahahasdhsadhdsh"', () => {
      expect(countProcessor.getParamsCount('dsgasdgahahasdhsadhdsh').s).equal(1);
    });
    it('testing multiple sentence string: "Hello. I. Am. Nikitka."', () => {
      expect(countProcessor.getParamsCount('Hello. I. Am. Nikitka.').s).equal(4);
    });
    it('testing multiple sentence string: "Hello, world! Please help! I need help! Leave me alone!"', () => {
      expect(countProcessor.getParamsCount('Hello, world! Please help! I need help! Leave me alone!').s).equal(4);
    });
  });
});
