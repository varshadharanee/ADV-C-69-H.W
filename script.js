var canvas = new fabric.canvas("myCanvas");
var x ;
var y ;
var height = 30 ; 
var width = 30 ;
var character_object ;
var blockImg_object ; 

function playerUpdate(){
    fabric.Image.fromURL("https://p1.hiclipart.com/preview/485/903/752/captain-marvel-png-clipart.jpg",function(Img){
        character_object = Img;
        character_object.scaleToWidth(150);
        character_object.scaleToHeight(140);
        character_object.set({
            top : y,
            left : x
        })
    })
    canvas.add(player_object);
}

function new_img(getImg){
    fabric.Image.fromURL(getImg , function(Img){
        blockImg_object = Img;
        blockImg_object.scaleToWidth(width);   
        blockImg_object.scaleToHeight(height);
        blockImg_object.set({
            top : y , 
            left : x
        })
        canvas.add(blockImg_object);
    })
}