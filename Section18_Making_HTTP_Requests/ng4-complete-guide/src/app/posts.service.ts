import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./posts.model";
import { Subject, map, catchError, throwError, tap } from "rxjs";

@Injectable({providedIn:'root'})
export class PostsService{

    error=new Subject<string>();

    constructor(private http:HttpClient){}

    createAndStorePost(title:string,content:string){
        const postData:Post={title,content};

        this.http.post('https://ng-complete-guide-48faa-default-rtdb.firebaseio.com/posts.json',postData,{
            observe:'response' //get full response object
        }).subscribe({next:responseData=>{
            console.log(responseData);
        },
    error:error=>{
        this.error.next(error);  
    }})
    }

    fetchPosts(){
        let searchParams=new HttpParams();
        searchParams=searchParams.append('print','pretty')
        searchParams=searchParams.append('custom','key');

        return this.http.get<{[key:string]:Post}>('https://ng-complete-guide-48faa-default-rtdb.firebaseio.com/posts.json',{
            headers:new HttpHeaders({
                'Custom-Header':'hello'
            }),
            params:searchParams,
        }).pipe(map((responseData)=>{
        const postsArray:Post[]=[];
        for(const key in responseData){
            if(responseData.hasOwnProperty(key))
            {
                postsArray.push({...responseData[key],id:key})
            }
        }
        return postsArray;
    }),
    catchError(errorRes=>{
        return throwError(errorRes)
    }))   
    }

    deletePosts(){
        return this.http.delete('https://ng-complete-guide-48faa-default-rtdb.firebaseio.com/posts.json',{
            observe:'events',
            responseType:'text'
        }).pipe(tap(event=>{
           console.log(event);
           if(event.type===HttpEventType.Sent){
                //..some logic
           }
           if(event.type===HttpEventType.Response){
            console.log(event.body)
           } 
        }))
    }
}