//เปิด modal
function openmodal() {
  $("#modal").css("display", "flex");
  setTimeout(() => {
    $("#modal").css({
      opacity: "1",
      transform: "translateY(0)",
    });
  }, 100);
  setTimeout(() => {
    $(".modal-bg").css({
      display: "flex",
      opacity: "1",
      transform: "translateX(0)",
    });
  }, 100);
}

//ปิด modal
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
