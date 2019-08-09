import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PreziListComponent } from './prezi/app.prezi.list.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {CapitalizePipe} from './capitalize.pipe';
import { HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,
        NgxPaginationModule,
        HttpClientModule
      ],
      declarations: [
        PreziListComponent,
        AppComponent,
        CapitalizePipe
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'PreziPicker'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PreziPicker');
  }));
});
