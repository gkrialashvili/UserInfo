var userId;
var address;
var company;
var getUserUrl = "https://jsonplaceholder.typicode.com/users/";
$(document).ready(function () {
  userId = localStorage.getItem("userId");
  // get user information with saved userId
  $.ajax({
    type: "GET",
    url: getUserUrl + userId,
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
  //go to selected user posts page
  $(".postButton").click(function () {
    window.location.href = "posts.html";
  });
  //go back to home page
  $(".backButton").click(function () {
    window.location.href = "index.html";
  });
});
