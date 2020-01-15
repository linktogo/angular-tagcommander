import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: {
      tcInclude: [{
        idc: 111,
        ids: 248,
      }]
    }
  },
  {
    path: 'start',
    loadChildren: () => import('./component/start/start.module').then(m => m.StartModule),
    data: {
      tcInclude: [{
        idc: 111,
        ids: 248,
      }]
    }
  }, {
    path: 'home', loadChildren: () => import('./component/home/home.module').then(m => m.HomeModule),
    data: {
      tcInclude: [{
        idc: 111,
        ids: 248,
      }]
    }
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
