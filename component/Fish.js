// Registering component in Fish.js

AFRAME.registerComponent("fish-moving", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        //id
        var id = `fish${i}`;
  
        //position variables     
        var posX = Math.random() * 100 + -50;      
        var posY = Math.random() * 5 + 5;
        var posZ = Math.random() * 60 + -40;
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createFish(id, position);
      }
    },
  
    createFish: function(id, position) { 
      
      var islandEl = document.querySelector("#island");
  
      var fishEL = document.createElement("a-entity");
  
      fishEL.setAttribute("id", id);
      fishEL.setAttribute("rotation", { x: 0, y: 180, z:0 });
      
      fishEL.setAttribute("scale", { x: 0.3, y: 0.3, z: 0.3 }); 
      fishEL.setAttribute("gltf-model", "./assets/models/fish/scene.gltf");

      //animated models 
      fishEl.setAttribute("animation", { property: "position", to: "100 10 -20", loop: "true", dur: 20000 });
      
      islandEl.appendChild(fishEL);
    }
  });
  
  