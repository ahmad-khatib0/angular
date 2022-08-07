import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortBe",
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: {}[], sortBe: string) {
    return value.sort((a, b) => {
      if (a[sortBe] > b[sortBe]) return 1;
      else return -1;
    });
  }
}
