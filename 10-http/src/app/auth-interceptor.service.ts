import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("request on its way");
    // req.url = ""// not allowed to overwrite the url, but modify it
    const modifiedRequest = req.clone({
      headers: req.headers.append("Auth", "someToken"),
    });
    return next.handle(modifiedRequest);
    // .pipe(
    //   // modify the response
    //   tap((event) => {
    //     console.log(event);
    //     if (event.type === HttpEventType.Response) {
    //       console.log("response arrived, body data");
    //       console.log(event.body);
    //     }
    //   })
    // );
  }
}
