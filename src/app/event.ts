export class Event {
    id: number;
    name: string;
    details: string;
    date: Date;
    image: string;

    constructor(id: number,
                name: string,
                details: string,
                date: Date,
                image: string,
                ){
      this.id = id;
      this.name = name;
      this.details = details;
      this.date = date;
      this.image = image;
    }
}
