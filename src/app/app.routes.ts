import { Routes } from '@angular/router';
import { ROUTERS } from '@shared/constants/router.constant';
import { authCanActiveGuard } from '@shared/guard/authCanActive.guard';

export const routes: Routes = [
  {
    path: ROUTERS.HOME,
    canMatch: [authCanActiveGuard],
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
  },
  {
    path: ROUTERS.EXPLORE,
    canMatch: [authCanActiveGuard],
    loadComponent: () => import('./explore/explore.component').then(m => m.ExploreComponent),
  },
  {
    path: ROUTERS.ONBOARDING,
    loadChildren: () => import('./onboarding/onboarding.routes').then(m => m.default),
  },
  {
    path: ROUTERS.ROOT,
    redirectTo: ROUTERS.ONBOARDING,
    pathMatch: 'full',
  },
  {
    path: ROUTERS.SHELL,
    loadComponent: () => import('./shell/shell.component').then(m => m.ShellComponent),
  },
];
