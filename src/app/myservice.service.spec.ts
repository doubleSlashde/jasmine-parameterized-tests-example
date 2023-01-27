import {TestBed} from '@angular/core/testing';

import {MyserviceService} from './myservice.service';

describe('MyserviceService', () => {
  let service: MyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('shorten', () => {
    const parameters = [
      {value: null, limit: 10, expectedResult: ''},
      {value: '', limit: 10, expectedResult: ''},
      {value: 'Testing with Jasmine', limit: 20, expectedResult: 'Testing with Jasmine'},
      {value: 'Testing with Jasmine', limit: 19, expectedResult: 'Testing with Jas...'}
    ];
    parameters.forEach(parameter => {
      it(`with a character limit of ${parameter.limit} should convert '${parameter.value}' into '${parameter.expectedResult}'`,
        () => {
          const result = service.shorten(parameter.value, parameter.limit);
          expect(result).toBe(parameter.expectedResult);
        });
    });
  });

});
