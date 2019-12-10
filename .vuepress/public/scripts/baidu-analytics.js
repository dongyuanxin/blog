(() => {
  var _hmt = _hmt || [];

  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?d0e7f39d671748aaf903f2f2878da387";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);

  _hmt.push("_requirePlugin", "UrlChangeTracker", {
    shouldTrackUrlChange: function(newPath, oldPath) {
      return newPath && oldPath;
    }
  });
})();
