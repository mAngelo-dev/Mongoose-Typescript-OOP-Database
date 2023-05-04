import { expect } from 'chai';
import { describe } from 'mocha';
import sinon from 'sinon';

import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import {
  arrayWithMotorcycles,
  correctMotorcycle,
  correctMotorcycleWithId,
  searchMotorcycleId,
  updatedMotorcycle,
  updatedMotorcycleWithId,
} from '../../mocks/MotorcycleMocks';

const motorcycleService = new MotorcycleService();

describe('MotorcycleService Unitary Tests', () => {
  beforeEach(function restore() { return sinon.restore(); });
  
  it('Test if instance of motorcycle can be created if body is ok', async function () {
    sinon.stub(Model, 'create').resolves(correctMotorcycleWithId);
  
    const createObj = await motorcycleService.createObj(correctMotorcycle);
    expect(createObj).to.be.a.instanceOf(Motorcycle);
    expect(createObj).to.be.deep.equal(correctMotorcycleWithId);
  });

  it('Test if can be retrieved an array of motorcycles using findAll method', async function () {
    sinon.stub(Model, 'find').resolves(arrayWithMotorcycles);

    const findAll = await motorcycleService.findAll();
    expect(findAll[0]).to.be.a.instanceOf(Motorcycle);
    expect(findAll).to.be.deep.equal(arrayWithMotorcycles);
  });

  it('Test if can be retrieved the correct motorcycle using findById method', async function () {
    sinon.stub(Model, 'findById').resolves(correctMotorcycleWithId);
    
    const findById = await motorcycleService.findById(searchMotorcycleId);
    expect(findById).to.be.a.instanceOf(Motorcycle);
    expect(findById).to.be.deep.equal(correctMotorcycleWithId);
  });

  it('Test if a motorcycle can be updated by it\'s id', async function () {
    sinon.stub(Model, 'findOneAndUpdate').resolves(updatedMotorcycleWithId);

    const updateObj = await motorcycleService.updateObj(searchMotorcycleId, updatedMotorcycle);
    expect(updateObj).to.be.a.instanceOf(Motorcycle);
    expect(updateObj).to.be.deep.equal(updatedMotorcycleWithId);
  });
});