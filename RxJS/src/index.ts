import { Observer, fromEvent } from "rxjs";
import { displayLog } from "./utils/utlis";
import { Empleado } from "../src/interfaces/interfaces";
import { map } from "rxjs/operators";
/*****
OBSERVABLE USANDO TIMER 
******/

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]:  ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => console.warn("[Complete]"),
};

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
keyup$.subscribe(observer);
