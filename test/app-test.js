import { foundMissingNumbers, findTarget} from '../app.js';
import {expect } from 'chai'

describe('Tests', function () {
    describe('foundMissingNumbers', function () {
      it('should return array [4,7]', function () {
        let result = foundMissingNumbers([1,2,3,3,5,6,8])
        expect(result).to.deep.equal([4,7]);
      });
    });

    describe('findTarget', function () {
        it('should return array [1,2]', function () {
          let result = findTarget([2,7,11,15],18)
          expect(result).to.deep.equal([1,2]);
        });
      });
  });