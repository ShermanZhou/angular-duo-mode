import { Injectable } from "@angular/core";

@Injectable()
export class CalculationService {
  add(a: number, b: number) {
    return a + b;
  }
}