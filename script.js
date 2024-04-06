function openmodal() {
  $("#modal").css("display", "flex");
  $(".modal-bg").css("display", "flex");

  setTimeout(() => {
    $("#modal").css({
      opacity: "1",
      transform: "translateY(0)",
    });
  }, 300);
  setTimeout(() => {
    $(".modal-bg").css({
      opacity: "1",
      transform: "translateX(0)",
    });
  }, 10);
}
function closemodal() {
  $(".modal-bg").css({
    display: "none",
    opacity: "0",
    transform: "translateX(200px)",
  });

  $("#modal").css({
    opacity: "0",
    transform: "translateY(200px)",
  });

  setTimeout(() => {
    $("#modal").css("display", "none");
  }, 300);
}
