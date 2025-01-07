class Media {
    constructor(info){
        this.publishData = info.publishData;
        this.name = info.name;
    }
}

class Song extends Media{
    constructor(songData){
        super(songData);
        this.artis = songData.artis;
    }
}

const mySong = new Song({
    artis: "Queen",
    name: "Bohemain Rhasody",
    publishData: 1975,
});

console.log(mySong);
