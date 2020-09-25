import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesenvolvedoresComponent } from './desenvolvedores/desenvolvedores.component';
import { TecladoComponent } from './teclado/teclado.component';
import { HistoricoComponent } from './historico/historico.component';

@NgModule({
  declarations: [
    AppComponent,
    DesenvolvedoresComponent,
    TecladoComponent,
    HistoricoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
