import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  selectedItem: string = '';
  isDesktop: boolean = false;
  opened: boolean = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isDesktop = this.onDesktop();
      this.screenSize();
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedItem = this.menuItems.find(
          (item) => item.route === this.router.url
        )?.label;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenSize();
    }
  }

  screenSize(): void {
    if (isPlatformBrowser(this.platformId)) {
      const screenWidth = window.innerWidth;
      this.isDesktop = screenWidth > 768;
      this.opened = this.isDesktop;
    }
  }

  onDesktop() {
    if (isPlatformBrowser(this.platformId)) {
      const regex_mobile = new RegExp(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/,
        'i'
      );
      return !regex_mobile.test(window.navigator.userAgent);
    }
    return false;
  }

  menuItems = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Staff', icon: 'people', route: '/staff' },
    { label: 'Payment Voucher', icon: 'receipt', route: '/payment-voucher' },
    { label: 'Payroll', icon: 'payment', route: '/payroll' },
    { label: 'Memo', icon: 'note', route: '/memo' },
    { label: 'Circulars', icon: 'mail_outline', route: '/circulars' },
    { label: 'Maintenance', icon: 'build', route: '/maintenance' },
    { label: 'Logistics', icon: 'local_shipping', route: '/logistics' },
    { label: 'Office Budget', icon: 'account_balance', route: '/budget' },
    { label: 'Stocks and Inventory', icon: 'inventory', route: '/inventory' },
    { label: 'Notifications', icon: 'notifications', route: '/notifications' },
    { label: 'Capacity Building', icon: 'school', route: '/capacity' },
    { label: 'Procurements', icon: 'shopping_cart', route: '/procurements' },
  ];

  navigateToComp(item: any) {
    console.log(item);
    this.selectedItem = item.label;
    this.router.navigate([item.route]);
  }
}
