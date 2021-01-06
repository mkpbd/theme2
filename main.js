const video = {
    title: 'one',
    tags:[2,3,4,5,6],
    play(){
        this.tags.forEach(function(tag){
            console.log(this.title ,tag);
        }, this)
    }
}

video.play();

function abc(){
    console.log("Regular function");
}