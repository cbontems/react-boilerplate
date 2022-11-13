chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.bookmarks.onCreated.addListener(() => {
    console.log("Bookmarked this page");
});
