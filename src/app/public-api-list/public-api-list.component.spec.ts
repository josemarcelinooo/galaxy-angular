import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicApiListComponent } from './public-api-list.component';

describe('PublicApiListComponent', () => {
  let component: PublicApiListComponent;
  let fixture: ComponentFixture<PublicApiListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicApiListComponent]
    });
    fixture = TestBed.createComponent(PublicApiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
