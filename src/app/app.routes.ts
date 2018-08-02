import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/core/guards/auth.guard';

import { ProjectListComponent } from './firebase/projectlist/projectlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'projects', component: ProjectListComponent, canActivate: [AuthGuard] },
  {
    path: 'project',
    loadChildren: './editor/editor.module#EditorModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // TODO: investigate implementing a custom preloading strategy
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}