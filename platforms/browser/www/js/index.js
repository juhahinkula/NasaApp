
var app = {
    // Application Constructor
    initialize: function() {
    
        var url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
        
        $("#loadImage").click(function(){
            $.ajax({
                url: url,
                success: handleResult
            }); // use promises
            
            // add cordova progress indicator https://www.npmjs.com/package/cordova-plugin-progress-indicator

            function handleResult(result){
                $("#spaceimage").attr("src", result.url);
                
                //http://responsiveimg.com/
                $("#spaceimage").responsiveImg();
                
                $("#copyright").text("Copyright: " + result.copyright) ;
                $("#desc").text(result.explanation);
            }
        });
        
        $("#randomImage").click(function(){
            $.ajax({
                url: url + "&date=" + randomDate(new Date(2015, 0, 1), new Date()),
                success: handleResult
            }); // use promises
            
            // add cordova progress indicator https://www.npmjs.com/package/cordova-plugin-progress-indicator

            function handleResult(result){
                $("#spaceimage").attr("src", result.url);
                
                //http://responsiveimg.com/
                $("#spaceimage").responsiveImg();
                
                $("#copyright").text("Copyright: " + result.copyright) ;
                $("#desc").text(result.explanation);
            }
        });        
    },
};

app.initialize();

// based on https://gist.github.com/miguelmota/5b67e03845d840c949c4
function randomDate(start, end) {
    var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    
    var dat = date.getDate();
    var month = date.getMonth() + 1;
    var yr = date.getFullYear();
    
    return yr + "-" + month + "-" + dat;
}