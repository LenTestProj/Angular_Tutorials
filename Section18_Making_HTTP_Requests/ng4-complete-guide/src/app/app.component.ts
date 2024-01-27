import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber, Subscription, map } from 'rxjs';
import { Post } from './posts.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts:Post[] = [];
  isFetching=false;
  error:(string|null)=null;
  private errorSub:Subscription=new Subscription();

  constructor(private http: HttpClient, private postsService:PostsService) {}

  ngOnInit() {
    this.errorSub=this.postsService.error.subscribe(errorMessage=>{
        this.error=errorMessage;
    })

    this.isFetching=true;
    this.postsService.fetchPosts().subscribe({next:posts=>{
        this.isFetching=false;
        this.loadedPosts=posts
    },error:error=>{
        console.log(error)
        this.isFetching=false;
        this.error=error.message
    }})
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStorePost(postData.title,postData.content)
    }

  onFetchPosts() {
    this.isFetching=true;
    this.postsService.fetchPosts().subscribe({next:(posts)=>{
        this.isFetching=false;
        this.loadedPosts=posts;
        console.log("respons earrived in the component")
    },error:(error)=>{
        console.log(error)
        this.isFetching=false
        this.error=error.message
    }})
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(()=>{
        this.loadedPosts=[];
    })
  }

  ngOnDestroy(){
    this.errorSub.unsubscribe()
  }

  onHandleError(){
    this.error=null;
  }

}
