var userId;
var PostsUrl = "https://jsonplaceholder.typicode.com/posts";
$(document).ready(function () {
  userId = localStorage.getItem("userId");
  getUserPosts();
  //go back to details page
  $(".backToDetails").click(function () {
    window.location.href = "userdetail.html";
  });
});

var arr = [];
//get all users posts
getUserPosts = function () {
  $.ajax({
    type: "GET",
    url: PostsUrl + "?userId=" + userId,
    dataType: "json",
    async: false,
    success: function (data) {
      $.each(data, function (i) {
        self.post = data[i];
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
