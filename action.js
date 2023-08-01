document.getElementById('button').addEventListener('click',function(){
    var intValue = document.getElementById('apivalue').value;
    chrome.tabs.executeScript({
        code : `var value = ${intValue};`
    },function(){
        chrome.tabs.executeScript({
            file : 'injector.js'
        });
    });
});