import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: `<h1>{{title}}</h1>
                <!-- router-outlet is a directive provided by the Router module and it displays the corresponding component right below wherever it is used -->
                <nav>
                    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
                </nav>
                <router-outlet></router-outlet>
                `,
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    title = 'Tour of Heroes';

}