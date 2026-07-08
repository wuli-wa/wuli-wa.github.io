var posts=["2026/04/10/hello-world/","2026/07/07/芝士甚么-WIFI密码/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };