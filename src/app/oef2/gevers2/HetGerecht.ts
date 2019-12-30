export class Gerecht{

    Ingridient: string[];

    constructor(public Name: string, ...ingridient: string[])
    {
      this.Ingridient=ingridient;
    }
}