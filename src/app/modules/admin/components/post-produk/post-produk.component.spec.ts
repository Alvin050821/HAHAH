import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProdukComponent } from './post-produk.component';

describe('PostProdukComponent', () => {
  let component: PostProdukComponent;
  let fixture: ComponentFixture<PostProdukComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostProdukComponent]
    });
    fixture = TestBed.createComponent(PostProdukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
