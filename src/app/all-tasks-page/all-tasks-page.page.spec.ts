import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllTasksPagePage } from './all-tasks-page.page';

describe('AllTasksPagePage', () => {
  let component: AllTasksPagePage;
  let fixture: ComponentFixture<AllTasksPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTasksPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllTasksPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
