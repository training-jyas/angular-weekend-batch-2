import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServerCreateComponent } from './components/server-create/server-create.component';
import { ServerElementComponent } from './components/server-element/server-element.component';
import { ComponentsComponent } from './components/components.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerCreateComponent,
    ServerElementComponent,
    ComponentsComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
