export interface Offense {
    id: number;
    datum_vaststelling_jaar: Date;
    datum_vaststelling_maand: Date;
    datum_vaststelling: string;
    datum_vaststellingDate: Date;
    opnameplaats_straat: string;
    opnameplaats_rijrichting_gaand: string;
    opnameplaats_zone_snelheid: number;
    aantal_passanten: number;
    aantal_overtredingen_snelheid: number;
    aantal_overtredingen_roodlicht: number;
  }