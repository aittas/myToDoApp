import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompletedTasksPagePage } from './completed-tasks-page.page';

describe('CompletedTasksPagePage', () => {
  let component: CompletedTasksPagePage;
  let fixture: ComponentFixture<CompletedTasksPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedTasksPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompletedTasksPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
