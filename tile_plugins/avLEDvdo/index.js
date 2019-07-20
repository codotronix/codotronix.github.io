(function(){
    tile_plugins.avLEDvdo = tile_plugins.avLEDvdo || {};
        
    //the container
    var pluginContainer = $('#avLEDvdo .plugin');

    var h = '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/w7I0x2ntyys" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    
    pluginContainer.html(h);
})()