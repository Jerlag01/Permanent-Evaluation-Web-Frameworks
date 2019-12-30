import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Marien2Component } from './marien2/marien2.component';
import { Oef2PageComponent } from '../oef2-page/oef2-page.component';
import { Tenzin2Component } from './tenzin2/tenzin2.component';
import { DeBrouwere2Component } from './debrouwere2/debrouwere2.component';
import { Lanneer2Component } from './lanneer2/lanneer2.component';
import { DeOliveira2Component } from './de-oliveira2/de-oliveira2.component';
import { Cranshoff2Component } from './cranshoff2/cranshoff2.component';
import { Bogaerts2Component } from './bogaerts2/bogaerts2.component';
import { Florus2Component } from './florus2/florus2.component';
import { AlShanawany2Component } from './al-shanawany2/al-shanawany2.component';
import { Humblet2Component } from './humblet2/humblet2.component';
import { Davalos2Component } from './davalos2/davalos2.component';
import { Ruys2Component } from './ruys2/ruys2.component';
import { Beeckmans2Component } from './beeckmans2/beeckmans2.component';
import { Senten2Component } from './senten2/senten2.component';
import { Peeters2Component } from './peeters2/peeters2.component';
import { Hattas2Component } from './hattas2/hattas2.component';
import { Jongenelen2Component } from './jongenelen2/jongenelen2.component';
import { Lagasse2Component } from './lagasse2/lagasse2.component';
import { Masoud2Component } from './masoud2/masoud2.component';
import { DeRudderC2Component } from './de-rudder-c2/de-rudder-c2.component';
import { DeMol2Component } from './DeMol2/de-mol2/de-mol2.component';
import { DeJonghe2Component } from './de-jonghe2/de-jonghe2.component';
import { DeRudderPhilip2Component } from './de-rudder-philip2/de-rudder-philip2.component';
import { Baert2Component } from './baert2/baert2.component';
import { Jeroenl2Component } from './jeroenl2/jeroenl2.component';
import { TimeInputComponent } from './jeroenl2/time-input/time-input.component';
import { InputToCountdownDirective } from './jeroenl2/input-to-countdown.directive';
import { TimeFormatPipe } from './jeroenl2/time-format.pipe';
import { Pauwels2Component } from './pauwels2/pauwels2.component';
import { Thielemans2Component } from './thielemans2/thielemans2.component';
import { Wats2Component } from './wats2/wats2.component';
import { KiratComponent } from './kirat/kirat.component';
import { Verschooten2Component } from './verschooten2/verschooten2.component';
import { Bulckens2Component } from './bulckens2/bulckens2.component';
import { Gevers2Component } from './gevers2/gevers2.component';
import { Janssens2Component } from './janssens2/janssens2.component';
import { Vandereycken2Component } from './vandereycken2/vandereycken2.component';
import { Gaco2Component } from './gaco2/gaco2.component';
import { QuintenSchutyser2Component } from './quinten-schutyser2/quinten-schutyser2.component';
import { Campo2Component } from './campo2/campo2.component';
import { Oef2QuintenComponent } from './oef2-quinten/oef2-quinten.component';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    Oef2PageComponent,
    Marien2Component,
    Tenzin2Component,
    DeBrouwere2Component,
    Lanneer2Component,
    DeOliveira2Component,
    Cranshoff2Component,
    Bogaerts2Component,
    Florus2Component,
    AlShanawany2Component,
    Humblet2Component,
    Davalos2Component,
    Ruys2Component,
    Beeckmans2Component,
    Senten2Component,
    Peeters2Component,
    Hattas2Component,
    Jongenelen2Component,
    Lagasse2Component,
    Masoud2Component,
    DeRudderC2Component,
    DeBrouwere2Component,
    DeMol2Component,
    DeJonghe2Component,
    DeRudderPhilip2Component,
    Baert2Component,
    Jeroenl2Component,
    TimeInputComponent,
    InputToCountdownDirective,
    TimeFormatPipe,
    Pauwels2Component,
    Thielemans2Component,
    Wats2Component,
    KiratComponent,
    Verschooten2Component,
    Bulckens2Component,
    Lagasse2Component,
    Gevers2Component,
    Janssens2Component,
    Vandereycken2Component,
    Gaco2Component,
    QuintenSchutyser2Component,
    Campo2Component,
    Oef2QuintenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    PanelModule,
    ButtonModule,
    GalleriaModule,
    CardModule,
    InputTextModule,
    DropdownModule
  ],
  exports: [
    Oef2PageComponent
  ]
})
export class Oef2Module { }
