import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
//PrimeNG
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

import { Oef3PageComponent } from '../oef3-page/oef3-page.component';
import { Beeckmans3Component } from './beeckmans3/beeckmans3.component';
import { Bogaerts3Component } from './bogaerts3/bogaerts3.component';
import { Bulckens3Component } from './bulckens3/bulckens3.component';
import { Campo3Component } from './campo3/campo3.component';
import { Cramm3Component } from './cramm3/cramm3.component';
import { Dejonghe3Component } from './dejonghe3/dejonghe3.component';
import { Deoliveiraandrezo3Component } from './deoliveiraandrezo3/deoliveiraandrezo3.component';
import { Dujardin3Component } from './dujardin3/dujardin3.component';
import { Duville3Component } from './duville3/duville3.component';
import { Florus3Component } from './florus3/florus3.component';
import { Gaco3Component } from './gaco3/gaco3.component';
import { Gevers3Component } from './gevers3/gevers3.component';
import { Hattas3Component } from './hattas3/hattas3.component';
import { Humblet3Component } from './humblet3/humblet3.component';
import { Janssens3Component } from './janssens3/janssens3.component';
import { Kirat3Component } from './kirat3/kirat3.component';
import { Lagaet3Component } from './lagaet3/lagaet3.component';
import { Lanneer3Component } from './lanneer3/lanneer3.component';
import { Liessens3Component } from './liessens3/liessens3.component';
import { Peeters3Component } from './peeters3/peeters3.component';
import { Ruys3Component } from './ruys3/ruys3.component';
import { Schutyser3Component } from './schutyser3/schutyser3.component';
import { Senten3Component } from './senten3/senten3.component';
import { Snijders3Component } from './snijders3/snijders3.component';
import { Thielemans3Component } from './thielemans3/thielemans3.component';
import { Vanopdenbosch3Component } from './vanopdenbosch3/vanopdenbosch3.component';
import { Vandereycken3Component } from './vandereycken3/vandereycken3.component';
import { Verschooten3Component } from './verschooten3/verschooten3.component';
import { Wauters3Component } from './wauters3/wauters3.component';
import { Alshanawany3Component } from './alshanawany3/alshanawany3.component';
import { Baert3Component } from './baert3/baert3.component';
import { Belmans3Component } from './belmans3/belmans3.component';
import { Cranshoff3Component } from './cranshoff3/cranshoff3.component';
import { Davaloscastaneda3Component } from './davaloscastaneda3/davaloscastaneda3.component';
import { Debrouwere3Component } from './debrouwere3/debrouwere3.component';
import { Demol3Component } from './demol3/demol3.component';
import { Jongenelen3Component } from './jongenelen3/jongenelen3.component';
import { Jouhar3Component } from './jouhar3/jouhar3.component';
import { Lagassedelocht3Component } from './lagassedelocht3/lagassedelocht3.component';
import { Maene3Component } from './maene3/maene3.component';
import { Masoud3Component } from './masoud3/masoud3.component';
import { Mughal3Component } from './mughal3/mughal3.component';
import { Nalbach3Component } from './nalbach3/nalbach3.component';
import { Pauwels3Component } from './pauwels3/pauwels3.component';
import { Quie3Component } from './quie3/quie3.component';
import { Tenzin3Component } from './tenzin3/tenzin3.component';
import { Vanginderen3Component } from './vanginderen3/vanginderen3.component';
import { Verhaegen3Component } from './verhaegen3/verhaegen3.component';
import { Wats3Component } from './wats3/wats3.component';
import { Weekx3Component } from './weekx3/weekx3.component';
import { Derudderp3Component } from './derudderp3/derudderp3.component';
import { Derudderc3Component } from './derudderc3/derudderc3.component';
import { Dupontb3Component } from './dupontb3/dupontb3.component';
import { Duponts3Component } from './duponts3/duponts3.component';
import { BeeckmansChildComponent } from './beeckmans3/beeckmans-child/beeckmans-child.component';
import { BogaertsChildComponent } from './bogaerts3/bogaerts-child/bogaerts-child.component';
import { BulckensChildComponent } from './bulckens3/bulckens-child/bulckens-child.component';
import { CampoChildComponent } from './campo3/campo-child/campo-child.component';
import { CrammChildComponent } from './cramm3/cramm-child/cramm-child.component';
import { DejongheChildComponent } from './dejonghe3/dejonghe-child/dejonghe-child.component';
import { DeoliveiraandrezoChildComponent } from './deoliveiraandrezo3/deoliveiraandrezo-child/deoliveiraandrezo-child.component';
import { DerudderpChildComponent } from './derudderp3/derudderp-child/derudderp-child.component';
import { DujardinChildComponent } from './dujardin3/dujardin-child/dujardin-child.component';
import { DuvilleChildComponent } from './duville3/duville-child/duville-child.component';
import { FlorusChildComponent } from './florus3/florus-child/florus-child.component';
import { GacoChildComponent } from './gaco3/gaco-child/gaco-child.component';
import { GeversChildComponent } from './gevers3/gevers-child/gevers-child.component';
import { HattasChildComponent } from './hattas3/hattas-child/hattas-child.component';
import { HumbletChildComponent } from './humblet3/humblet-child/humblet-child.component';
import { JanssensChildComponent } from './janssens3/janssens-child/janssens-child.component';
import { KiratChildComponent } from './kirat3/kirat-child/kirat-child.component';
import { LagaetChildComponent } from './lagaet3/lagaet-child/lagaet-child.component';
import { LanneerChildComponent } from './lanneer3/lanneer-child/lanneer-child.component';
import { LiessensChildComponent } from './liessens3/liessens-child/liessens-child.component';
import { PeetersChildComponent } from './peeters3/peeters-child/peeters-child.component';
import { RuysChildComponent } from './ruys3/ruys-child/ruys-child.component';
import { SchutyserChildComponent } from './schutyser3/schutyser-child/schutyser-child.component';
import { SentenChildComponent } from './senten3/senten-child/senten-child.component';
import { SnijdersChildComponent } from './snijders3/snijders-child/snijders-child.component';
import { ThielemansChildComponent } from './thielemans3/thielemans-child/thielemans-child.component';
import { VanopdenboschChildComponent } from './vanopdenbosch3/vanopdenbosch-child/vanopdenbosch-child.component';
import { VandereyckenChildComponent } from './vandereycken3/vandereycken-child/vandereycken-child.component';
import { VerschootenChildComponent } from './verschooten3/verschooten-child/verschooten-child.component';
import { WautersChildComponent } from './wauters3/wauters-child/wauters-child.component';
import { AlshanawanyChildComponent } from './alshanawany3/alshanawany-child/alshanawany-child.component';
import { BaertChildComponent } from './baert3/baert-child/baert-child.component';
import { BelmansChildComponent } from './belmans3/belmans-child/belmans-child.component';
import { CranshoffChildComponent } from './cranshoff3/cranshoff-child/cranshoff-child.component';
import { DavaloscastanedaChildComponent } from './davaloscastaneda3/davaloscastaneda-child/davaloscastaneda-child.component';
import { DebrouwereChildComponent } from './debrouwere3/debrouwere-child/debrouwere-child.component';
import { DemolChildComponent } from './demol3/demol-child/demol-child.component';
import { DeruddercChildComponent } from './derudderc3/derudderc-child/derudderc-child.component';
import { DupontbChildComponent } from './dupontb3/dupontb-child/dupontb-child.component';
import { DupontsChildComponent } from './duponts3/duponts-child/duponts-child.component';
import { JongenelenChildComponent } from './jongenelen3/jongenelen-child/jongenelen-child.component';
import { JouharChildComponent } from './jouhar3/jouhar-child/jouhar-child.component';
import { LagassedelochtChildComponent } from './lagassedelocht3/lagassedelocht-child/lagassedelocht-child.component';
import { MaeneChildComponent } from './maene3/maene-child/maene-child.component';
import { MasoudChildComponent } from './masoud3/masoud-child/masoud-child.component';
import { MughalChildComponent } from './mughal3/mughal-child/mughal-child.component';
import { NalbachChildComponent } from './nalbach3/nalbach-child/nalbach-child.component';
import { PauwelsChildComponent } from './pauwels3/pauwels-child/pauwels-child.component';
import { QuieChildComponent } from './quie3/quie-child/quie-child.component';
import { TenzinChildComponent } from './tenzin3/tenzin-child/tenzin-child.component';
import { VanginderenChildComponent } from './vanginderen3/vanginderen-child/vanginderen-child.component';
import { VerhaegenChildComponent } from './verhaegen3/verhaegen-child/verhaegen-child.component';
import { WatsChildComponent } from './wats3/wats-child/wats-child.component';
import { WeekxChildComponent } from './weekx3/weekx-child/weekx-child.component';




@NgModule({
  declarations: [
    Oef3PageComponent,
    Beeckmans3Component,
    Bogaerts3Component,
    Bulckens3Component,
    Campo3Component,
    Cramm3Component,
    Dejonghe3Component,
    Deoliveiraandrezo3Component,
    Dujardin3Component,
    Duville3Component,
    Florus3Component,
    Gaco3Component,
    Gevers3Component,
    Hattas3Component,
    Humblet3Component,
    Janssens3Component,
    Kirat3Component,
    Lagaet3Component,
    Lanneer3Component,
    Liessens3Component,
    Peeters3Component,
    Ruys3Component,
    Schutyser3Component,
    Senten3Component,
    Snijders3Component,
    Thielemans3Component,
    Vanopdenbosch3Component,
    Vandereycken3Component,
    Verschooten3Component,
    Wauters3Component,
    Alshanawany3Component,
    Baert3Component,
    Belmans3Component,
    Cranshoff3Component,
    Davaloscastaneda3Component,
    Debrouwere3Component,
    Demol3Component,
    Jongenelen3Component,
    Jouhar3Component,
    Lagassedelocht3Component,
    Maene3Component,
    Masoud3Component,
    Mughal3Component,
    Nalbach3Component,
    Pauwels3Component,
    Quie3Component,
    Tenzin3Component,
    Vanginderen3Component,
    Verhaegen3Component,
    Wats3Component,
    Weekx3Component,
    Derudderp3Component,
    Derudderc3Component,
    Dupontb3Component,
    Duponts3Component,
    BeeckmansChildComponent,
    BogaertsChildComponent,
    BulckensChildComponent,
    CampoChildComponent,
    CrammChildComponent,
    DejongheChildComponent,
    DeoliveiraandrezoChildComponent,
    DerudderpChildComponent,
    DujardinChildComponent,
    DuvilleChildComponent,
    FlorusChildComponent,
    GacoChildComponent,
    GeversChildComponent,
    HattasChildComponent,
    HumbletChildComponent,
    JanssensChildComponent,
    KiratChildComponent,
    LagaetChildComponent,
    LanneerChildComponent,
    LiessensChildComponent,
    PeetersChildComponent,
    RuysChildComponent,
    SchutyserChildComponent,
    SentenChildComponent,
    SnijdersChildComponent,
    ThielemansChildComponent,
    VanopdenboschChildComponent,
    VandereyckenChildComponent,
    VerschootenChildComponent,
    WautersChildComponent,
    AlshanawanyChildComponent,
    BaertChildComponent,
    BelmansChildComponent,
    CranshoffChildComponent,
    DavaloscastanedaChildComponent,
    DebrouwereChildComponent,
    DemolChildComponent,
    DeruddercChildComponent,
    DupontbChildComponent,
    DupontsChildComponent,
    JongenelenChildComponent,
    JouharChildComponent,
    LagassedelochtChildComponent,
    MaeneChildComponent,
    MasoudChildComponent,
    MughalChildComponent,
    NalbachChildComponent,
    PauwelsChildComponent,
    QuieChildComponent,
    TenzinChildComponent,
    VanginderenChildComponent,
    VerhaegenChildComponent,
    WatsChildComponent,
    WeekxChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PanelModule,
    ButtonModule,
    GalleriaModule,
    CardModule,
    InputTextModule,
    DropdownModule,
  ],
  exports: [
    Oef3PageComponent
  ]
})
export class Oef3Module { }
