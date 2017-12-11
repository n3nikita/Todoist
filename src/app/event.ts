export class Event {
    id: number;
    name: string;
    details: string;
    date: Date;
    image: string;
    done: boolean;

    constructor(id: number,
                name: string,
                details: string,
                date: Date,
                image: string,
                done: boolean
                ){
      this.id = id;
      this.name = name;
      this.details = details;
      this.date = date;
      this.image = image;
      this.done = done;
    }
}
