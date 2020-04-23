import { Observable, Subscriber, Observer, interval } from "rxjs";
import { displayLog } from "./utils/utlis";

/*****
 * Crear un obserbal
1 y no se utliza
******/

// const obs$ = Observable.create();

/*****
2- Manera de crear un observable
******/

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]:  ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => console.warn("[Complete]"),
};

const intervalo$ = new Observable((subscriber) => {
  let count = 0;
  const interval = setInterval(() => {
    count++;
    subscriber.next(count);
  }, 1000);
});


intervalo$.subscribe(observer)