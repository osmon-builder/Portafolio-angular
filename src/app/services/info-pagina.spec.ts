import { TestBed } from '@angular/core/testing';

import { InfoPagina } from './info-pagina';

describe('InfoPagina', () => {
  let service: InfoPagina;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPagina);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
