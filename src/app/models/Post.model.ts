
export class Post {

  constructor(public title: string, public content: string, public loveIts: number, public date: number) {
  }

  toString() {
    return 'Titre: ' + this.title + ' Content: ' + this.content + ' LoveIts: ' + this.loveIts + ' Date : ' + this.date;
  }

}
