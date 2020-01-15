import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './app/home/welcome.component';
import { PageNotFoundComponent } from './app/page-not-found.component';
import { AuthGuard } from './app/user/auth.guard';
import { SelectiveStrategy } from './app/selective-strategy.service';



@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent },
      {path: 'products',
      canActivate: [AuthGuard],
      data: { preload: true },
      loadChildren: () =>
      import('./app/products/product.module').then(m => m.ProductModule)
    },
      {path: '', redirectTo: 'welcome', pathMatch: 'full' },
      {path: '**', component: PageNotFoundComponent }
    ], { preloadingStrategy: SelectiveStrategy}),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
