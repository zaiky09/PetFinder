import React, {useContext,useState} from "react";

const PetContext = React.createContext()
const PetUpdateContext = React.createContext()

export function usePet(){
    return useContext(PetContext)
}

export function usePetUpdate(){
    return useContext(PetUpdateContext)
}

export function PetProvider({children}){
    const [pets, setPets] = useState([]);

    React.useEffect(() => {
    fetch(`https://zamil-petfinder.onrender.com/pet`)
      .then((response) => response.json())
      .then((data) => setPets(data.data))
      .catch((error) => console.log(error));
    }, []);
    return (
        <PetContext.Provider value={pets}>
            <PetUpdateContext.Provider value={setPets}>
                {children}
            </PetUpdateContext.Provider>
        </PetContext.Provider>
    )

}