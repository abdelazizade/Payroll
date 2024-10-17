import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RoutingRoutingModule } from './routing-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaffComponent } from './components/staff/staff.component';
import { PaymentVoucherComponent } from './components/payment-voucher/payment-voucher.component';
import { MemoComponent } from './components/memo/memo.component';
import { CircularsComponent } from './components/circulars/circulars.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { LogisticsComponent } from './components/logistics/logistics.component';
import { BudgetComponent } from './components/budget/budget.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { CapacityComponent } from './components/capacity/capacity.component';
import { ProcurementsComponent } from './components/procurements/procurements.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PayrollComponent,
    FooterComponent,
    DashboardComponent,
    StaffComponent,
    PaymentVoucherComponent,
    MemoComponent,
    CircularsComponent,
    MaintenanceComponent,
    LogisticsComponent,
    BudgetComponent,
    InventoryComponent,
    NotificationsComponent,
    CapacityComponent,
    ProcurementsComponent,
  ],
  imports: [
    RoutingRoutingModule,
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
