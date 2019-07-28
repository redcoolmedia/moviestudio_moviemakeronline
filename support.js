chrome.runtime.onInstalled.addListener(function (){
    chrome.contextMenus.create({
        title: "Edit with MovieStudio movie maker",
        id: "MovieStudio",
        contexts: ["link"]
    });
});



chrome.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId === "MovieStudio") {
        //var var1 = info.selectionText;
        var mediaurl = info.linkUrl;
        MovieStudioEdit(mediaurl);
    }
});


function MovieStudioEdit(mediaurl) {         
  	  	
  	if (
      ( mediaurl.indexOf("docs.google.com") == -1 )
          && (mediaurl.indexOf("redcoolmedia.net") == -1)
    ) 
    {
  		gourl =  "http://www.redcoolmedia.net/PopcornEditor/moviemaker.html?mediaurl="+ mediaurl;
    	window.open(gourl,'_blank');
    }
	
}







