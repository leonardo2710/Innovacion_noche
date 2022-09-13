import { Routes } from '@angular/router';

export const PANEL_LAYOUT: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../pages/pages.module').then((m) => m.PagesModule),
  },
];
