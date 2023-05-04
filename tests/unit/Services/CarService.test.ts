import { expect } from 'chai';
import { describe } from 'mocha';
import sinon from 'sinon';

import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import {
  arrayWithcar,
  correctCar,
  correctCarWithId,
  searchId,
  updatedCar,
  updatedCarWithId,
} from '../../mocks/CarMocks';

const carService = new CarService();

describe('CarService Unitary Tests', () => {
  beforeEach(function restore() { return sinon.restore(); });
  it('Test if instance of Car can be created if body is ok', async function () {
    sinon.stub(Model, 'create').resolves(correctCarWithId);
  
    const createObj = await carService.createObj(correctCar);
    expect(createObj).to.be.a.instanceOf(Car);
    expect(createObj).to.be.deep.equal(correctCarWithId);
  });

  it('Test if can be retrieved an array of Cars using findAll method', async function () {
    sinon.stub(Model, 'find').resolves(arrayWithcar);

    const findAll = await carService.findAll();
    expect(findAll[0]).to.be.a.instanceOf(Car);
    expect(findAll).to.be.deep.equal(arrayWithcar);
  });

  it('Test if can be retrieved the correct Car using findById method', async function () {
    sinon.stub(Model, 'findById').resolves(correctCarWithId);
    
    const findById = await carService.findById(searchId);
    expect(findById).to.be.a.instanceOf(Car);
    expect(findById).to.be.deep.equal(correctCarWithId);
  });

  it('Test if a Car can be updated by it\'s id', async function () {
    sinon.stub(Model, 'findOneAndUpdate').resolves(updatedCarWithId);

    const updateObj = await carService.updateObj(searchId, updatedCar);
    expect(updateObj).to.be.a.instanceOf(Car);
    expect(updateObj).to.be.deep.equal(updatedCarWithId);
  });
});