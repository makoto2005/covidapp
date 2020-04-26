import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { What2doPage } from './what2do.page';

describe('What2doPage', () => {
  let component: What2doPage;
  let fixture: ComponentFixture<What2doPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ What2doPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(What2doPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
