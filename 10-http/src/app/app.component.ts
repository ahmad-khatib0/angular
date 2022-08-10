import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "./post.model";
import { PostsService } from "./posts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;
  error = null;
  subscription: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.subscription = this.postsService.error.subscribe(
      (error) => (this.error = error)
    );
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.loadedPosts = posts;
        this.isFetching = false;
      },
      (error) => {
        this.error = error.message;
        this.isFetching = false;
      }
    );
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePosts(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        this.loadedPosts = posts;
        this.isFetching = false;
      },
      (error) => {
        this.error = error.message;
        this.isFetching = false;
      }
    );
  }

  onClearPosts() {
    this.postsService.clearPosts().subscribe(() => (this.loadedPosts = []));
  }
  onHandleError() {
    this.error = null;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
