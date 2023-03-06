import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit,faTrash,faAdd } from "@fortawesome/free-solid-svg-icons";
import PopAdd from "../pop_ups/PopAdd";
import PopUpdate from "../pop_ups/PopUpdate";
import '../petlist/petlist.css';

function Petlist({userId}) {
  const [pets, setPets] = React.useState([]);
  const [pop,setPop]=useState(false)
  const [popTwo,setPopTwo]=useState(false)
  const [selectedPetId,setSelectedPetId]=useState(null)
  const [petData,setPetData]=useState({
        name: "",
        image_src: "",
        breed:"",
        character: "",
    })

  React.useEffect(() => {
    fetch(`https://zamil-petfinder.onrender.com/pet`)
      .then((response) => response.json())
      .then((data) => setPets(data.data))
      .catch((error) => console.log(error));
  }, []);

  function activatePopTwo() {
    setPopTwo(!popTwo)
        }

    const activatePop = (pet) => {
        setPetData({...pet, id:pet.id})
        setSelectedPetId(pet.id)
        setPop(!pop);
      };
      
        function handleChange(e) {
            setPetData({
            ...petData,
            [e.target.name]: e.target.value
        });
      }

      // Add pet

      function handleAddPet(newData) {
        //e.preventDefault();
        console.log(JSON.stringify({
          name: newData.name,
          image_src: newData.image_src,
          breed: newData.breed,
          character: newData.character,
        
        }));
        fetch(`https://zamil-petfinder.onrender.com/pets/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: newData.name,
            image_src: newData.image_src,
            breed: newData.breed,
            character: newData.character,
            
          })
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to add project, are you logged in");
            }
            return response.json();
          })
          .then((data) => {
            fetch(`https://zamil-petfinder.onrender.com/pet`)
            .then(res => res.json())
            .then(data => setPets(data.data));
            activatePopTwo()
          })
          .catch((error) => {
            alert(error);
            // handle error
          })
        }
      //Update Pet

      function handleUpdatePet(id,newData) {
      
         console.log(JSON.stringify({
          name: newData.name,
          image_src: newData.image_src,
          breed: newData.breed,
          character: newData.character,

        }))

        fetch(`https://zamil-petfinder.onrender.com/pets/update/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: newData.name,
              image_src: newData.image_src,
              breed: newData.breed,
              character: newData.character,
              
            })
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to update project, are you logged in?');
            }
            // handle successful response
            setPets(pets.map(pet => { // update pets list 
              if (pet.id === selectedPetId) {
                return {
                  ...pet,
                  name: newData.name,
                  image_src: newData.image_src,
                  breed: newData.breed,
                  character: newData.character,

                
                }
              } else {
                return pet;
              }
            }));
            setSelectedPetId(null)
          })
          .catch(error => {
            alert(error);
            // handle error
          })
      }

      //Delete Pet

      function handleDeletePet(id) {
        fetch(`https://zamil-petfinder.onrender.com/pets/destroy/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete project, are you logged in?');
          }
          // handle successful response
          setPets(pets.filter(project => project.id !== id));
        })
        .catch(error => {
          alert(error);
          // handle error
        })
    } 

  return (
    <div>
      <div className="album py-5 bg-light" id="list">
        <div className="container">
        <h1 className='text-start mb-5'>Browse Pets</h1>
        <button onClick={()=>activatePopTwo()} className="text-start" id="add"><FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>Add a Pet</button>
          <div className="row">
            {pets.map((pet, index) => (
              <div className="col-md-4" key={index}>
                <div className="card mb-4 shadow-sm">
                  <img src={pet.image_src} className="card-img-top" alt="Pet" />
                  <h3 className="card-header">{pet.name}</h3>
                  <h5 className="card-header">{pet.breed}</h5>
                  <p className="card-text">{pet.character}</p>
                  
                  {/* <div className="card-body"> */}
                    {/* <div className="d-flex justify-content-between align-items-center"> */}
                      {/* <div className="btn-group"> */}
                        
                        {/* <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleView(pet)}
                        >
                          View
                        </button> */}
                        {/* <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => handleDelete(pet)}
                        >
                          Delete
                        </button> */}
                        {/* <button
                          type="button"
                          className={`btn btn-sm btn-outline-secondary like-button ${
                            likedPets.includes(pet) ? 'liked' : ''
                          }`}
                          onClick={() => handleLike(pet)}
                        >
                          <span role="img" aria-label="heart">
                            ❤️
                          </span>
                        </button> */}
                      {/* </div> */}
                    {/* </div> */}
                  {/* </div> */}
                  <div>
                      <button onClick={()=>activatePop(pet)} id="editable"><FontAwesomeIcon icon={faEdit} />Edit</button>
                      <button onClick={()=>handleDeletePet(pet.id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>Delete</button>
                    </div>
                </div>
                {pop?(<PopUpdate
                      pop={pop}
                      petData={petData}
                      handleUpdatePet={handleUpdatePet}
                      activatePop={activatePop}
                      handleChange={handleChange}
                      pet={pet}/>):null}
              </div>
            ))}
          </div>
        </div>
      </div>
      {popTwo?(<PopAdd
            popTwo={popTwo}
            petData={petData}
            handleAddPet={handleAddPet}
            activatePopTwo={activatePopTwo}
            handleChange={handleChange}/>):(null)}
    </div>
  );
}

export default Petlist;
