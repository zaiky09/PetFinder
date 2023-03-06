import React,{useState} from "react";

function PopUpdate({pop,activatePop,handleUpdatePet,petData,pet}){
    const [stateData,setState]= useState(petData)
    const handleChange = (e) => {
        setState({
            ...stateData,
            [e.target.id]: e.target.value,
        });}

    const handleSave = (e) => {
        e.preventDefault()
        handleUpdatePet(pet.id,stateData);
        activatePop(pet);
      };
   return(
    <div>
          {pop &&(
            <div className="modal">
                <div id="overlay" onClick={activatePop}></div>
                <div className="modal-content">
                    <form>
                        <center>
                        <input
                        type="text"
                        id="name"
                        placeholder="Name of pet"
                        onChange={handleChange}
                        value={stateData.name}
                        required
                        />
                         <input
                        type="text"
                        id="description"
                        placeholder="Breed"
                        onChange={handleChange}
                        value={stateData.description}
                        required
                        />
                          <input
                        type="text"
                        id="personality"
                        placeholder="Pet's Personality"
                        onChange={handleChange}
                        value={stateData.site_link}
                        required
                        />
                        <input
                        type="text"
                        id="image_src"
                        placeholder="image url of the site"
                        onChange={handleChange}
                        value={stateData.image_src}
                        />
                        </center>
                        <button className="close-modal" onClick={activatePop}>Close</button>
                        <center><button id="save-btn" onClick={handleSave}>Save</button></center>
                    </form>
                    
                </div>
            </div>
            )}
    </div>
   )
}

export default PopUpdate;