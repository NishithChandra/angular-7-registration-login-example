import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import {DashboardComponent} from "@/_components/_dashboard/dashboard.component";
import {OrdersComponent} from "@/_components/_orders/orders.component";
import {ProductsComponent} from "@/_components/_products/products.component";
import {CustomersComponent} from "@/_components/_customers/customers.component";
import {ReportsComponent} from "@/_components/_reports/reports.component";
import {IntegrationComponent} from "@/_components/_integration/integration.component";

const appRoutes: Routes = [
    { path: 'home',
        component: HomeComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent},
            { path: 'orders', component: OrdersComponent},
            { path: 'products', component: ProductsComponent},
            { path: 'customers', component: CustomersComponent},
            { path: 'reports', component: ReportsComponent},
            { path: 'integration', component: IntegrationComponent}

        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home and this is a wildcard route
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
