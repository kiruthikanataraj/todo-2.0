import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GoodReadComponent } from './good-read.component';
import { GoodReadService, Book } from './good-read.service';
import { Mock } from 'protractor/built/driverProviders';

describe('AppComponent', () => {
  let component: GoodReadComponent;
  let fixture: ComponentFixture<GoodReadComponent>;
  let service: GoodReadService;


  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        providers: [
          { provide: GoodReadService }
        ],
        declarations: [GoodReadComponent]
      }
    );


    service.bookList = [
      { id: 1, name: 'The Ambassadors' },
      { id: 2, name: 'An American Tragedy' },
      { id: 3, name: 'Brave New World' },
      { id: 4, name: 'Catch-22' }];
    // the gymnastics of the next three lines because ngcli webpack tries to resolve
    // the templateUrl 'undefined' - with no luck.  And the old tests need it to be
    // undefined
    const set = { template: `<div>Overridden template here</div>` } as any;
    set.templateUrl = undefined;
    TestBed.overrideComponent(GoodReadComponent, { set: set });

    fixture = TestBed.createComponent(GoodReadComponent);
    component = fixture.componentInstance;

  });

  beforeEach(inject([GoodReadService], (injectedService: GoodReadService) => {
    service = injectedService;
  }));
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


  it('should return zero', () => {
    component.bookList = [
      { id: 1, name: 'The Ambassadors' },
      { id: 2, name: 'An American Tragedy' },
      { id: 3, name: 'Brave New World' },
      { id: 4, name: 'Catch-22' }];
    component.searchItem = 'Brave';
    component.search();
    expect(component.searchResult.length).toBe(1);


  });
});
