import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({ providedIn: "root" })
export class PostsService {
  constructor(private http: HttpClient) {}
  error = new Subject<string>();

  createAndStorePosts(title: string, content: string) {
    const postData: Post = { title, content };
    console.log(postData);
    this.http
      .post<{ name: string }>(
        "https://angurla-http-resquest-default-rtdb.firebaseio.com/posts.json",
        postData
      )
      .subscribe(
        (res) => console.log(res),
        (error) => this.error.next(error)
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append("print", "pretty");
    searchParams = searchParams.append("key", "value");
    return (
      this.http
        // .get("https://angurla-http-resquest-default-rtdb.firebaseio.com/posts.json")//1th way
        .get<{ [key: string]: Post }>(
          "https://angurla-http-resquest-default-rtdb.firebaseio.com/posts.json",
          {
            headers: new HttpHeaders({ "Custom-header": "hello" }),
            // params: new HttpParams().set("print", "pretty"),//single params
            params: searchParams,
          }
        ) //2th way (generic method)

        .pipe(
          // map((response: { [key: string]: Post }) => {// 1th way
          map((response) => {
            let posts: Post[] = [];
            for (const key in response) {
              if (response.hasOwnProperty(key)) posts.push({ ...response[key], id: key });
            }
            return posts;
          }),
          catchError((responseError) => throwError(responseError))
        )
    );
  }

  clearPosts() {
    return this.http.delete(
      "https://angurla-http-resquest-default-rtdb.firebaseio.com/posts.json"
    );
  }
}
