import { Injectable } from '@angular/core';
import { Global } from '../providers/global';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  public mierda: any;
  public page: number;
  public perPage:number;
  public orderBy: string;

  constructor(private global: Global) { }

  getlist(page, perPage, orderBy){
   return this.global.UNSPLASH_API.photos.listPhotos(page, perPage, orderBy).then(response => response.json()).then(json => json.results);
  } 

  getstats(id: string){
   return this.global.UNSPLASH_API.photos.getPhotoStats(id).then(response => response.json()).then(json => json.results);
  } 

  ///////////////

  searchImages(userInput: String, pageIndex:number = 1, elementsPerPage:number = 30): Promise<any> {
  return this.global.UNSPLASH_API.search.photos(userInput, pageIndex, elementsPerPage).then(response => response.json()).then(json => json.results);
    
  }

  getcollection(userInput: String, pageIndex:number = 1, elementsPerPage:number = 30){
   return this.global.UNSPLASH_API.search.collections(userInput, pageIndex, elementsPerPage).then(response => response.json()).then(json => json.results);
  }

  getuser(userInput: String, pageIndex:number = 1, elementsPerPage:number = 30){
   return this.global.UNSPLASH_API.search.users(userInput, pageIndex, elementsPerPage).then(response => response.json()).then(json => json.results);
  }

  //////////////////////

  getImageById(id: String, width: number, height:number, rectangle:number) : Promise<any>{
    return this.global.UNSPLASH_API.photos.getPhoto(id, width, height, rectangle).then(response => response.json()).then(json => json.results);;
  }

  getRandomImage() : Promise<any>{
   return this.global.UNSPLASH_API.photos.getRandomPhoto()
    .then(response => response.json());
  }
}
