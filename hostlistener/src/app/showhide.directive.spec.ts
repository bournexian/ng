import { ShowhideDirective } from './showhide.directive';
import { Renderer2, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ShowhideDirective', () => {
  let component: ShowhideDirective;
  let fixture: ComponentFixture<ShowhideDirective>;

  TestBed.configureTestingModule({
    declarations: [ShowhideDirective]
  })

  beforeEach(()=>{
    fixture = TestBed.createComponent(ShowhideDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
