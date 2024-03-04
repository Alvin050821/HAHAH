import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProdukComponent } from './update-produk.component';

describe('UpdateProdukComponent', () => {
  let component: UpdateProdukComponent;
  let fixture: ComponentFixture<UpdateProdukComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProdukComponent]
    });
    fixture = TestBed.createComponent(UpdateProdukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
