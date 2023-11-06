const showExercises = async () => {
    const exercisesJSON = await getExercises();
    const exercisesDiv = document.getElementById("exercises-div");
  
    if (!exercisesJSON || exercisesJSON.length === 0) {
      console.log("Invalid load of exercise data");
      return;
    }
  
    exercisesJSON.forEach((exercise) => {
      const section = document.createElement("section");
      exercisesDiv.append(section);
  
      const h3 = document.createElement("h3");
      h3.innerHTML = exercise.name;
      section.append(h3);
  
      const repetitions = document.createElement("p");
      repetitions.innerHTML = `Repetitions: ${exercise.repetitions}`;
      section.append(repetitions);
  
      const sets = document.createElement("p");
      sets.innerHTML = `Sets: ${exercise.sets}`;
      section.append(sets);
  
      if (exercise.weight) {
        const weight = document.createElement("p");
        weight.innerHTML = `Weight: ${exercise.weight}`;
        section.append(weight);
      }
  
      const totalweeklysets = document.createElement("p");
      totalweeklysets.innerHTML = `Total Weekly Sets: ${exercise.totalweeklysets}`;
      section.append(totalweeklysets);
  
      const img = document.createElement("img");
      img.src = `https://node-assignment13.onrender.com/${exercise.img}`;
      img.width = 300;
      img.height = 200;
      section.append(img);
    });
  };
  
  const getExercises = async () => {
    try {
      return (await fetch("https://node-assignment13.onrender.com/api/exercises")).json();
    } catch (error) {
      console.log("Error retrieving exercise data from the API");
      return [];
    }
  };
  
  window.onload = () => showExercises();