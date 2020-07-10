import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ActivationDirective } from '@/_directives/activation.directive';

import { DashboardComponent } from "@/_components/_dashboard/dashboard.component";
import { CustomersComponent } from "@/_components/_customers/customers.component";
import { IntegrationComponent } from "@/_components/_integration/integration.component";
import { OrdersComponent } from "@/_components/_orders/orders.component";
import { ProductsComponent } from "@/_components/_products/products.component";
import { ReportsComponent } from "@/_components/_reports/reports.component";


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ActivationDirective,
    /* Child route Components */
        DashboardComponent,
        CustomersComponent,
        IntegrationComponent,
        OrdersComponent,
        ProductsComponent,
        ReportsComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        CookieService,

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
