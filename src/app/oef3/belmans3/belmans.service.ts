import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BelmansService {
  randomDogUrl:string = 'https://dog.ceo/api/breeds/image/random';
  dogBreedUrl:string = 'https://dog.ceo/api/breeds/list/all'

  constructor(private http: HttpClient) { }

  getRandomDog(): Observable<IRandomDog>{
    return this.http.get<IRandomDog>(this.randomDogUrl)
  }
  getDogBreeds(): Observable<IDogBreeds>{
    return this.http.get<IDogBreeds>(this.dogBreedUrl)
  }
}

export interface IRandomDog {
  message: string;
  status: string;
}

export interface IDogBreeds{
message: Message;
status: string;
}  

export interface Message{
affenpinscher: any[];
african: any[];
airedale: any[];
akita: any[];
appenzeller: any[];
australian: string[];
basenji: any[];
beagle: any[];
bluetick: any[];
borzoi: any[];
bouvier: any[];
boxer: any[];
brabancon: any[];
briard: any[];
buhund: string[];
bulldog: string[];
bullterrier: string[];
cairn: any[];
cattledog: string[];
chihuahua: any[];
chow: any[];
clumber: any[];
cockapoo: any[];
collie: string[];
coonhound: any[];
corgi: string[];
cotondetulear: any[];
dachshund: any[];
dalmatian: any[];
dane: string[];
deerhound: string[];
dhole: any[];
dingo: any[];
doberman: any[];
elkhound: string[];
entlebucher: any[];
eskimo: any[];
frise: string[];
germanshepherd: any[];
greyhound: string[];
groenendael: any[];
hound: string[];
husky: any[];
keeshond: any[];
kelpie: any[];
komondor: any[];
kuvasz: any[];
labrador: any[];
leonberg: any[];
lhasa: any[];
malamute: any[];
malinois: any[];
maltese: any[];
mastiff: string[];
mexicanhairless: any[];
mix: any[];
mountain: string[];
newfoundland: any[];
otterhound: any[];
papillon: any[];
pekinese: any[];
pembroke: any[];
pinscher: string[];
pitbull: any[];
pointer: string[];
pomeranian: any[];
poodle: string[];
pug: any[];
puggle: any[];
pyrenees: any[];
redbone: any[];
retriever: string[];
ridgeback: string[];
rottweiler: any[];
saluki: any[];
samoyed: any[];
schipperke: any[];
schnauzer: string[];
setter: string[];
sheepdog: string[];
shiba: any[];
shihtzu: any[];
spaniel: string[];
springer: string[];
stbernard: any[];
terrier: string[];
vizsla: any[];
waterdog: string[];
weimaraner: any[];
whippet: any[];
wolfhound: string[];
}
