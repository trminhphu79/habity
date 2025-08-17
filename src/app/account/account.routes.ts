import { Routes } from "@angular/router";
import { ROUTERS } from "@shared/constants/router.constant";
import { authCanActiveGuard } from "@shared/guard/authCanActive.guard";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ROUTERS.LOGIN,
    },
    {
        path: ROUTERS.LOGIN,
        loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent),
    },
    {
        path: ROUTERS.SIGNUP,
        loadComponent: () => import('./features/sign-up/sign-up.component').then(m => m.SignUpComponent),
    },
    {
        path: ROUTERS.CREATION_FLOW,
        canMatch: [authCanActiveGuard],
        loadComponent: () => import('./features/creation-flow/creation-flow.component').then(m => m.CreationFlowComponent),
    },
]

export default routes;