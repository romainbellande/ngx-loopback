import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LayoutModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should create footer component', async(() => {
    const fixture = TestBed.createComponent(FooterComponent);
    const footer = fixture.debugElement.componentInstance;
    expect(footer).toBeTruthy();
  }));

  it('should create header component', async(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const header = fixture.debugElement.componentInstance;
    expect(header).toBeTruthy();
  }));
});
