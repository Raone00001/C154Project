//Diver Rotation
  AFRAME.registerComponent("diver-rotation-reader",{
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscend: {type: "number", default: 0}   
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        this.data.speedOfRotation = this.el.getAttribute("rotation")
        this.data.speedOfAscend = this.el.getAttribute("position")
  
        var diver_rotation = this.data.speedOfRotation
        var diver_position = this.data.speedOfAscend
  
        if (e.key === "ArrowRight"){
          if (diver_rotation.x < 10) {
            diver_rotation.x += 0.5
            this.el.setAttribute("rotation", diver_rotation)
          };
        }
  
        if (e.key === "ArrowLeft"){
          if (diver_rotation.x > -10) {
            diver_rotation.x -= 0.5
            this.el.setAttribute("rotation", diver_rotation)
          };
        }
  
        if (e.key === "ArrowUp"){
          //This is for z rotation
          if (diver_rotation.z < 20) {
            diver_rotation.z += 0.5
            this.el.setAttribute("rotation", diver_rotation)
          };
  
          //This is for y position
          if (diver_position.y < 2) {
            diver_position.y += 0.01
            this.el.setAttribute("position", diver_position)
          };
        }
  
        if (e.key === "ArrowDown"){
          //This is for z rotation
          if (diver_rotation.z > -10) {
            diver_rotation.z -= 0.5
            this.el.setAttribute("rotation", diver_rotation)
          };
  
          //This is for y position
          if (diver_position.y > -2) {
            diver_position.y -= 0.01
            this.el.setAttribute("position", diver_position)
          };
        }
  
      })
    }
  })
  
  
  