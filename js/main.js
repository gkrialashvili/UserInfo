var getUserUrl = "https://jsonplaceholder.typicode.com/users";
//get users information data on ducument ready
$(document).ready(function () {
  getUserInfo();
  $(".userButton").click(function () {
    localStorage.setItem("userId", this.id);
    window.location.href = "userdetail.html";
  });
});

//get users information call
getUserInfo = function () {
  $.ajax({
    type: "GET",
    url: getUserUrl,
    dataType: "json",
    async: false,
    success: function (data) {
      $.each(data, function (i) {
        self.data = data[i];
        $("#user-info-cont").append(
          "<button class= 'userButton action-button shadow animate blue' id ='" +
            self.data.id +
            "' >" +
            self.data.name +
            "</button>"
        );
      });
    },
  });
};
