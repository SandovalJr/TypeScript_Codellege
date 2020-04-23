import { Observer, of, from } from "rxjs";
import { displayLog } from "./utils/utlis";

/*****
OBSERVABLE USANDO FROM
******/

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]:  ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => console.warn("[Complete]"),
};

// el from si entra a los valores que tiene ese arreglo

const obs$ = from([3, 2, 1, 4, 5, 6]);

obs$.subscribe(observer);
