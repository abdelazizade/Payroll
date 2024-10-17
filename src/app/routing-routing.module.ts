import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { StaffComponent } from './components/staff/staff.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { MemoComponent } from './components/memo/memo.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { LogisticsComponent } from './components/logistics/logistics.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { CircularsComponent } from './components/circulars/circulars.component';
import { CapacityComponent } from './components/capacity/capacity.component';
import { BudgetComponent } from './components/budget/budget.component';
import { PaymentVoucherComponent } from './components/payment-voucher/payment-voucher.component';
import { ProcurementsComponent } from './components/procurements/procurements.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/payroll',
    pathMatch: 'full',
  },
  {
    path: 'payroll',
    component: PayrollComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'staff',
    component: StaffComponent,
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
  },
  {
    path: 'memo',
    component: MemoComponent,
  },
  //   {
  //     path: 'payment',
  //     component: PaymentVoucherComponent,
  //   },
  {
    path: 'procurements',
    component: ProcurementsComponent,
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent,
  },
  {
    path: 'logistics',
    component: LogisticsComponent,
  },
  {
    path: 'inventory',
    component: InventoryComponent,
  },
  {
    path: 'circulars',
    component: CircularsComponent,
  },
  {
    path: 'capacity',
    component: CapacityComponent,
  },
  {
    path: 'budget',
    component: BudgetComponent,
  },
  { path: '**', redirectTo: '/payroll' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingRoutingModule {}
