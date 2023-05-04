import { expect } from 'chai';
import { describe } from 'mocha';
import supertest from 'supertest';
import app from '../../src/app';
import { incorrectCar } from '../mocks/CarMocks';

describe('Integration test for /cars', () => {
  describe(':POST/cars', () => {
    it('Test if a car without correct proprieties cannot be created', async function () {
      const httpRes = await supertest(app).post('/cars').send(incorrectCar);
      expect(httpRes.statusCode).to.be.equal(422);
    });
  });
});