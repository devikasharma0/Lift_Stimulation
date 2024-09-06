document.addEventListener("DOMContentLoaded", () => {
  const lift_num = document.getElementById("lift_num");
  const floor_num = document.getElementById("floor_num");
  const form = document.getElementById("form");
  const back = document.getElementById("back");
  back.style.display = "none";
  form.addEventListener("submit", (e) => {
    e.preventDefault(); //removing default refresh behaviour of form so the vlaue does not get lost
    const lift_value = lift_num.value;
    const floor_value = floor_num.value;
    if (lift_value === "" || floor_value === "") {
      alert("Both lift number and floor number must be filled out.");
      return;
    }
    form.classList.add("hidden");
    back.style.display = "block";
  });

  back.addEventListener("click", () => {
    form.classList.remove("hidden");
  });
});
