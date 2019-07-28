(function(){
  var apps_urls = {
    creapp: "http://www.redcoolmedia.net/PopcornEditor/moviemaker.html"
  };

  var filenamex = Math.random().toString(36).substr(2, 9);
  for (var link_id in apps_urls){
        var url = apps_urls[link_id] + "";
        document.getElementById(link_id).firstElementChild.href = url;
  }
  
  document.getElementById('situation').innerText = `Using MovieStudio movie maker`;
    

  for (var link_id in apps_urls) {
    var localLabel = chrome.i18n.getMessage("new_" + link_id);
    document.querySelector(`#${link_id} .label`).innerText = localLabel;
  }
})();
