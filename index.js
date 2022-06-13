let cats=["Milo", "Otis", "Garfield"]

function initialValue(){
    return ["Milo", "Otis", "Garfield"]
}


beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyAppendCat(){
    return "Otis" 
  }
