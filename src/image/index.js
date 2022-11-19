const getSize = function(){
    var image = new Image();
    image.src = '../../public/static/img/map.png';
    image.onload = function () {
        console.log(image.width)
        return image.width, image.height;
    };
}

export default getSize