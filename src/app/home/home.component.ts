import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '@/_models';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService, AuthenticationService } from '@/_services';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    dashboardList = ['Dashboard', 'Orders', 'Products', 'Customers', 'Reports', 'Integration'];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    dashboardRoute() {
        this.router.navigate(['./dashboard'], {relativeTo: this.route});
    }

    ordersRoute() {
        this.router.navigate(['./orders'], {relativeTo: this.route});
    }

    productsRoute() {
        this.router.navigate(['./products'], {relativeTo: this.route});
    }

    customersRoute() {
        this.router.navigate(['./customers'], {relativeTo: this.route});
    }

    reportsRoute() {
        this.router.navigate(['./reports'], {relativeTo: this.route});
    }

    integrationRoute() {
        this.router.navigate(['./integration'], {relativeTo: this.route});
    }


    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    myFocusIn(event) {
        let element = document.getElementById("search-container");
        if(event.target || event.target.value) {
            element.classList.remove('form-control-dark');
        }
    }

    myFocusOut(event) {
        let element = document.getElementById("search-container");
        if(event) {
            element.classList.add('form-control-dark');
        }
    }


    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

}
