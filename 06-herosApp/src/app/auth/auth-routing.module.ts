import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthPageComponent } from './pages/layout-page/layout-auth-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { Error404PageComponent } from '../shared/pages/error404-page/error404-page.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutAuthPageComponent,
        children: [
            { path: 'login', component: LoginPageComponent },
            { path: 'register', component: RegisterPageComponent },
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: '**', component: Error404PageComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
