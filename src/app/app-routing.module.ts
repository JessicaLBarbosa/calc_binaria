import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DesenvolvedoresComponent } from "./desenvolvedores/desenvolvedores.component";
import { TecladoComponent } from "./teclado/teclado.component";
import { HistoricoComponent } from "./historico/historico.component";

const routes: Routes = [
  { path: "desenvolvedores", component: DesenvolvedoresComponent },
  { path: "teclado", component: TecladoComponent },
  { path: "historico", component: HistoricoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
