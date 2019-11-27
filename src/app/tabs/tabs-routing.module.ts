import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = 
[
  {
    path: 'tabs',
    component: TabsPage,

    children: 
    [
      {
        path: 'home-page',
        children: [
          {
            path:'',
            loadChildren: () => import('../home-page/home-page.module').then( m => m.HomePagePageModule )
          }
        ]
      },

      {
        path: '',
        redirectTo: '/tabs/home-page',
        pathMatch: 'full'
      }
    ]
  },

  {
    path: '',
    redirectTo: '/tabs/home-page',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
