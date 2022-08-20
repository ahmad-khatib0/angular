export class DataService {
  getDetails() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Data'), 2000);
    });

    return promise;
  }
}
