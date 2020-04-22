import { Observable, Subscriber } from "rxjs";

/*****
 * Crear un obserbal
1 y no se utliza
******/

// const obs$ = Observable.create();

/*****
2- Manera de crear un observable
******/

const obs$ = new Observable((subscriber) => {
  subscriber.next("Hola mundo");
  subscriber.next("Hola JC");
  subscriber.next("Hola sandoval");
  subscriber.next({ a: 2, b: 5 });

  //   causando un error
  // const a: any = undefined;
  // a.nombre = "sandovaljr";

  // const b: any = undefined;
  // b.apellid = "Escobedo";

  //   subscriber.next("paso error");

  // complete no se puede enviar ningun parametro por lo cual no recibe nada
  subscriber.complete();
});

obs$.subscribe(
  // INFORMACION
  (value) => console.log("[Next] ", value),
  // ERROR
  (err) => console.error("[Error Observable] ", err.name),
  // Finalizado
  () => console.warn("[Complete]")
);
