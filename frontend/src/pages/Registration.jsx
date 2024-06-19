

function Registration() {
  return (
    <>
        <div className="relative grid h-screen min-h-screen place-content-center place-items-center overflow-hidden bg-gray-950 px-4 py-24 pt-40 text-gray-200">
            {/* <div className="absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
            draggable ? 'cursor-grab active:cursor-grabbing"></div> */}
            
            {/* <div>
              <input type="radio" id="css" name="Fat loss" value="CSS"/>
              <input type="radio" id="css" name="Muscle Growth" value="CSS"/>
              <input type="radio" id="css" name="Push Stamina" value="CSS"/>
              <input type="radio" id="css" name="Improve Cardio" value="CSS"/>
            </div> */}

            <label for="dino-select">Choose your fitness aim</label>
              <select id="training-select">
                <optgroup label="Theropods">
                  <option>Fat loss</option>
                  <option>Muscle Growth</option>
                  <option>Improve Stamina</option>
                  <option>Improve Cardio</option>
                </optgroup>
                {/* <optgroup label="Sauropods">
                  <option>Diplodocus</option>
                  <option>Saltasaurus</option>
                  <option>Apatosaurus</option>
                </optgroup> */}
              </select>
        </div>

    </>
  );
}

export default Registration;


