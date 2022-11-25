import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingAddProductComponent } from './shoping-add-product.component';

describe('ShopingAddProductComponent', () => {
  let component: ShopingAddProductComponent;
  let fixture: ComponentFixture<ShopingAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingAddProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopingAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
