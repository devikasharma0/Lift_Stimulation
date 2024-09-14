document.addEventListener("DOMContentLoaded", () => {
  const simulation = document.getElementById("Simulation");
  const lift_num = document.getElementById("lift_num");
  const floor_num = document.getElementById("floor_num");
  const form = document.getElementById("form");
  const back = document.getElementById("back");
  back.style.display = "none";
  back.style.width = "60px";

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
    container.style.display = "none";
    createLifts(lift_value);
    createFloors(floor_value);
  });

  back.addEventListener("click", () => {
    form.classList.remove("hidden");
    back.style.display = "none";
    container.style.display = "flex";
    simulation.innerHTML = "";
  });
  
  function createLifts(lift_value){
    for(let i = 0; i<lift_value; i++){
      const lift = document.createElement("div");
      lift.style.height = "100px";
      lift.style.width = "70px";
      lift.style.backgroundColor = "#69b0fc";
      lift.style.position = "absolute";
      lift.style.left = `${100*(i+1)}px`;
      lift.style.bottom = "2px";
      simulation.appendChild(lift);
    }
  }
  function createFloors(floor_value) {
    for(let i = 0; i <floor_value; i++){
      const floorDiv = document.createElement("div");
      const upButton = document.createElement("button");
      const downButton = document.createElement("button");
      const textDiv = document.createElement("p")
      textDiv.innerText = `Floor ${floor_value-i-1}` //to print value of i 
      floorDiv.style.height = "150px"
      floorDiv.style.display = "grid"
      upButton.style.width = "60px"
      downButton.style.width = "60px"
      floorDiv.style.width = "100%"
      floorDiv.style.borderBottom = "2px solid black"
      floorDiv.className = "floordiv";
      upButton.className = "upbutton";
      downButton.className = "downbutton";
      upButton.innerText = "Up";
      downButton.innerText = "Down";
      floorDiv.appendChild(textDiv);
      floorDiv.appendChild(upButton);
      floorDiv.appendChild(downButton);
      simulation.appendChild(floorDiv);

    }
  }

});
