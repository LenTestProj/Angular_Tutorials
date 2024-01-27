import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

//runs code before the request leaves the application
export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedUrl=req.clone({headers:req.headers.append('Auth','xyz')})
        return next.handle(modifiedUrl);
    }

}