//this is for when the icon is clicked
chrome.action.onClicked.addListener(function(tab){
    shareMessage(tab.index, tab.url, tab.id);
});

//Main function to share to native Telegram client (URL only, no title, no trailing slash)
function shareMessage(index, url, tabid) {
    url = url.replace(/\/+$/, "");
    var openurl = "https://t.me/share/url?url=" + encodeURIComponent(url);
    chrome.tabs.create({'url': openurl, 'index': index + 1}, function(tab){
        setTimeout(function(){
            chrome.tabs.remove(tab.id);
            chrome.tabs.update(tabid, {active: true});
        }, 2000);
    });
}

//Since the page is non persistent, add a listener at install time to create the context menu
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({title: 'Share Page via Telegram', id: 'share-page', contexts: ["page", "frame"]});
    chrome.contextMenus.create({title: 'Share Link via Telegram', id: 'share-link', contexts: ["link"]});
    chrome.contextMenus.create({title: 'Share Image via Telegram', id: 'share-media', contexts: ["image"]});
});

//onClick listener for each type of context menu
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    var data = {"share-page": info.pageUrl, "share-link": info.linkUrl, "share-media": info.srcUrl}[info.menuItemId];
    shareMessage(tab.index, data, tab.id);
});
