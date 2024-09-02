import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';
import { CriarContaComponent } from './components/criar-conta/criar-conta.component';
import { FeedComponent } from './components/feed/feed.component';
import { CriarPostComponent } from './components/criar-post/criar-post.component';
import { AuthGuard } from './services/auth/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'perfil',
        component: UsuarioComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'criar-conta',
        component: CriarContaComponent
    },
    {
        path: 'feed',
        component: FeedComponent/* ,
        canActivate: [AuthGuard] */
    },
    {
        path: 'criar-post',
        component: CriarPostComponent,
        canActivate: [AuthGuard]
    }
];
