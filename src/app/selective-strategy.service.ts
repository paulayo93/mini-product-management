import { Observable, of } from "rxjs";
import { PreloadingStrategy, Route } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SelectiveStrategy implements PreloadingStrategy {


  preload(route: Route, load: Function): Observable<any> {
    if (route.data && route.data["preload"]) {
      return load();
    }
    return of(null);
  }
}
