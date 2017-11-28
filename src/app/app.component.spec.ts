import { Location } from "@angular/common";

import { TestBed, async, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { OverviewComponent } from './overview/overview.component';
import { HistoryComponent } from './history/history.component';
import { ReportsComponent } from './reports/reports.component';
import { routes } from './app-routing.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        OverviewComponent,
        HistoryComponent, 
        ReportsComponent, 
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Seu controle de gastos');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Seu controle de gastos');
  }));

  describe('Router: App', () => {
    
      let location: Location;
      let router: Router;
      let fixture;
    
      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [RouterTestingModule.withRoutes(routes)], 
          declarations: [
            OverviewComponent,
            HistoryComponent,
            ReportsComponent, 
            AppComponent
          ]
        });
    
        router = TestBed.get(Router); 
        location = TestBed.get(Location); 
    
        fixture = TestBed.createComponent(AppComponent); 
        router.initialNavigation(); 


        it('navigate to "" redirects you to /overview', async(() => { 
          router.navigate(['']); 
          tick(); 
          expect(location.path()).toBe('/overview'); 
        }));

        it('navigate to "history" redirects you to /history', async(() => { 
          router.navigate(['history']); 
          tick(); 
          expect(location.path()).toBe('/history'); 
        }));

        it('navigate to "reports" redirects you to /reports', async(() => { 
          router.navigate(['reports']); 
          tick(); 
          expect(location.path()).toBe('/reports'); 
        }));

      });
    });


});
