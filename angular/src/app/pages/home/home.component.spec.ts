import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';
import { HomeComponent } from './home.component';
import { CoreModule } from 'app/core/core.module';
import { LoopbackModule } from 'app/loopback/loopback.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        CookieModule.forRoot(),
        CoreModule,
        LoopbackModule
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Ngx loopback starter kit !');
  });
});
