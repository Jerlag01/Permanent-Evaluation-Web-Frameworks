import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarienComponent } from './marien/marien.component';
import { DupontComponent } from './dupont/dupont.component';
import { VerschootenComponent } from './verschooten/verschooten.component';
import { BogaertsComponent } from './bogaerts/bogaerts.component';
import { BulckensComponent } from './bulckens/bulckens.component';
import { MasoudComponent } from './masoud/masoud.component';
import { TenzinComponent } from './tenzin/tenzin.component';
import { FlorusComponent } from './florus/florus.component';
import { PeetersComponent } from './peeters/peeters.component';
import { CampoComponent } from './campo/campo.component';
import { BaertComponent } from './baert/baert.component';
import { DeRudderCComponent } from './de-rudder-c/de-rudder-c.component';
import { DeJongheComponent } from './de-jonghe/de-jonghe.component';
import { DeMolComponent } from './de-mol/de-mol.component';
import { DuvilleComponent } from './duville/duville.component';
import { VerhaegenComponent } from './verhaegen/verhaegen.component';
import { HumbletComponent } from './humblet/humblet.component';
import { DuJardinComponent } from './du-jardin/du-jardin.component';
import { JouharComponent } from './jouhar/jouhar.component';
import { SentenComponent } from './senten/senten.component';
import { MaeneComponent } from './maene/maene.component';
import { ThielemansComponent } from './thielemans/thielemans.component';
import { BelmansComponent } from './belmans/belmans.component';
import { DeOliveiraComponent } from './de-oliveira/de-oliveira.component';
import { GeversComponent } from './gevers/gevers.component';
import { VandereyckenComponent } from './vandereycken/vandereycken.component';
import { RuysComponent } from './ruys/ruys.component';
import { CranshoffComponent } from './cranshoff/cranshoff.component';
import { SaraBeeckmansComponent } from './sara-beeckmans/sara-beeckmans.component';
import { DavalosComponent } from './davalos/davalos.component';
import { LanneerComponent } from './lanneer/lanneer.component';
import { QuintenSchutyserComponent } from './quinten-schutyser/quinten-schutyser.component';
import { HattasComponent } from './hattas/hattas.component';
import { RotateStringPipe } from './hattas/Pipes/rotate-string.pipe';
import { GacoComponent } from './gaco/gaco.component';
import { LiessensComponent } from './liessens/liessens.component';
import { WautersComponent } from './wauters/wauters.component';
import { WatsComponent } from './wats/wats.component';
import { DeRudderPComponent } from './de-rudder-p/de-rudder-p.component';
import { PauwelsComponent } from './pauwels/pauwels.component';
import { CrammComponent } from './cramm/cramm.component';
import { JanssensComponent } from './janssens/janssens.component';
import { LagasseComponent } from './lagasse/lagasse.component';
import { MughalComponent } from './mughal/mughal.component';
import { NalbachComponent } from './nalbach/nalbach.component';
import { VanGinderenComponent } from './van-ginderen/van-ginderen.component';
import { JeroenlComponent } from './jeroenl/jeroenL.component';
import { AlShanawanyComponent } from './al-shanawany/al-shanawany.component';
import { CountdownModule } from 'ngx-countdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Oef1PageComponent } from '../oef1-page/oef1-page.component';
import { JongenelenComponent } from './jongenelen/jongenelen.component';


@NgModule({
  declarations: [
    Oef1PageComponent,
    MarienComponent,
    DupontComponent,
    VerschootenComponent,
    BogaertsComponent,
    BulckensComponent,
    MasoudComponent,
    TenzinComponent,
    FlorusComponent,
    PeetersComponent,
    CampoComponent,
    BaertComponent,
    DeRudderCComponent,
    DeJongheComponent,
    DeMolComponent,
    DuvilleComponent,
    VerhaegenComponent,
    HumbletComponent,
    DuJardinComponent,
    JouharComponent,
    SentenComponent,
    MaeneComponent,
    ThielemansComponent,
    BelmansComponent,
    DeOliveiraComponent,
    GeversComponent,
    VandereyckenComponent,
    RuysComponent,
    CranshoffComponent,
    SaraBeeckmansComponent,
    DavalosComponent,
    LanneerComponent,
    QuintenSchutyserComponent,
    HattasComponent, RotateStringPipe,
    GacoComponent,
    LiessensComponent,
    WautersComponent,
    WatsComponent,
    DeRudderPComponent,
    PauwelsComponent,
    CrammComponent,
    JanssensComponent,
    MasoudComponent,
    LagasseComponent,
    MughalComponent,
    NalbachComponent,
    VanGinderenComponent,
    JeroenlComponent,
    AlShanawanyComponent,
    JongenelenComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    FontAwesomeModule,
    CountdownModule
  ]
})
export class Oef1Module { }
