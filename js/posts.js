var userId;
$(document).ready(function () {
  userId = localStorage.getItem("userId");
  getUserPosts();
  $(".backToDetails").click(function () {
    window.location.href = "userdetail.html";
  });
});

var arr = [];
//get all users posts
getUserPosts = function () {
  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    dataType: "json",
    async: false,
    success: function (data) {
      var posts = data.filter(function (posts) {
        //filter which user post to show with user id
        return posts.userId == userId;
      });

      $.each(posts, function (i) {
        self.post = posts[i];
        $(".userPostContainer").append(
          "<div class='d-flex flex-column user-post-container " +
            self.post.userId +
            "'> <h4 class='postTitle' id='postTitle'>" +
            self.post.title +
            "</h4> <span id='postBody'>" +
            self.post.body +
            "</span> </div>"
        );
      });
    },
  });
};
