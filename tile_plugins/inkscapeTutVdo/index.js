(function(){
    tile_plugins.inkscapeTutVdo = tile_plugins.inkscapeTutVdo || {};
        
    //the container
    var pluginContainer = $('#inkscapeTutVdo .plugin');

    var h = '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/osxtZzpV3W0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    
    pluginContainer.html(h);
})()