import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';
import { CriarContaComponent } from './components/criar-conta/criar-conta.component';
import { FeedComponent } from './components/feed/feed.component';
import { CriarPostComponent } from './components/criar-post/criar-post.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'perfil',
        component: UsuarioComponent
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
        component: FeedComponent
    },
    {
        path: 'criar-post',
        component: CriarPostComponent
    }
];
