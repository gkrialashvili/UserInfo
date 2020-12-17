var userId;
var address;
var company;
$(document).ready(function () {
  userId = localStorage.getItem("userId");
  // get user information with saved userId
  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users/" + userId,
    dataType: "json",
    async: false,
    success: function (response) {
      address = response.address;
      company = response.company;
      $("#name").text(response.name);
      $("#userName").text(response.username);
      $("#email").text(response.email);
      $("#phone").text(response.phone);
      $("#website").text(response.website);
      $("#website").attr("href", response.website);
      $("#city").text(address.city);
      $("#street").text(address.street);
      $("#suite").text(address.suite);
      $("#zipcode").text(address.zipcode);
      $("#companyName").text(company.name);
      $("#catchPhrase").text(company.catchPhrase);
    },
  });
  getUserPosts();
  $(".postButton").click(function () {
    window.location.href = "posts.html";
  });
  $(".backButton").click(function () {
    window.location.href = "index.html";
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