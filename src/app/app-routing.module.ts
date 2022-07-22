import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {MonaComponent} from "./mona/mona.component";
import {PaintersComponent} from "./painters/painters.component";
import {GeneratComponent} from "./generat/generat.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'mona',
    component: MonaComponent,
  },
  {
    path: 'Painters',
    component: PaintersComponent,
  },
  {
    path: 'Generat',
    component: GeneratComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
