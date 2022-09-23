import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';

import { NavGeneralComponent } from './nav-general.component';

describe('NavGeneralComponent', () => {
  let component: NavGeneralComponent;
  let fixture: ComponentFixture<NavGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
