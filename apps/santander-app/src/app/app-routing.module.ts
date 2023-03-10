import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from './components/layout/layout.component'
import { NotFoundComponent } from './components/not-found/not-found.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@santander/records').then((m) => m.RecordsModule),
      },
    ],
  },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
