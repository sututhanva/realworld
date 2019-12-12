import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SharedModule } from './module/shared/shared.module'


const routes: Routes = [
  { path: 'article', loadChildren: () => import('./module/article/article.module').then(m => m.ArticleModule) },
  { path: 'editor', loadChildren: () => import('./module/editor/editor.module').then(m => m.EditorModule) },
  { path: 'profile', loadChildren: () => import('./module/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'settings', loadChildren: () => import('./module/settings/settings.module').then(m => m.SettingsModule) }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules}),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
