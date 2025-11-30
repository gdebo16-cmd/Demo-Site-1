const container = document.getElementById("photolog");

  container.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      container.scrollLeft += 100;
      e.preventDefault();
    }
    else {
      container.scrollLeft -= 100;
      e.preventDefault();
    }
  });