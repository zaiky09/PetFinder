import React,{useState} from "react";

function PopAdd({popTwo,activatePopTwo,handleAddPet,petData}){
    const [stateData,setState]= useState(petData)
    const handleChange = (e) => {
        setState({
            ...stateData,
            [e.target.id]: e.target.value,
        });}

    const handleSave = (e) => {
        e.preventDefault()
        handleAddPet(stateData);
        activatePopTwo();
      };
   return(
    <div>
          {popTwo &&(
            <div className="modal">
                <div id="overlay" onClick={activatePopTwo}></div>
                <div className="modal-content">
                    <form>
                        <center>
                        <input
                        type="text"
                        id="name"
                        placeholder="Pet Name"
                        onChange={handleChange}
                        value={stateData.name}
                        required
                        />
                         <input
                        type="text"
                        id="breed"
                        placeholder="Breed"
                        onChange={handleChange}
                        value={stateData.breed}
                        required
                        />
                          <input
                        type="text"
                        id="character"
                        placeholder="Character"
                        onChange={handleChange}
                        value={stateData.character}
                        required
                        />
                        <input
                        type="text"
                        id="image_src"
                        placeholder="link to image of site"
                        onChange={handleChange}
                        value={stateData.image_src}
                        />
                        </center>
                        <button className="close-modal" onClick={activatePopTwo}>Close</button>
                        <center><button id="save-btn" onClick={handleSave}>Save</button></center>
                    </form>
                    
                </div>
            </div>
            )}
    </div>
   )
}

export default PopAdd;