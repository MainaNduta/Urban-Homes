const state = {

}
            propertyDetails : [
                {
                  propertyNumber: 1,
                  propertyName: "Amberwood Haven",
                  propertyPrice: "$1000",
                  propertyImage: "../public/images/Vintagehome.jpg",
                  description: " Where modern living meets urban vibrancy. Welcome home!"  
                },
                {
                  propertyNumber: 2,
                  propertyName: "Azure Retreat",
                  propertyPrice: "$2000",
                  propertyImage: "../public/images/Luxuryhome.jpg",
                  description: " Where modern living meets urban vibrancy. Welcome home!"  
                },
                {
                  propertyNumber: 3,
                  propertyName: "Bluebell Hideaway",
                  propertyPrice: "$3000",
                  propertyImage: "../public/images/Lavishhome.jpg",
                  description: " Where modern living meets urban vibrancy. Welcome home!"  
                },
                {
                  propertyNumber: 4,
                  propertyName: "Briarwood",
                  propertyPrice: "$4000",
                  propertyImage: "../public/images/Flatroofhome.jpg",
                  description: " Where modern living meets urban vibrancy. Welcome home!"  
                },
                {
                  propertyNumber: 5,
                  propertyName: "Cedarwood",
                  propertyPrice: "$5000",
                  propertyImage: "../public/images/Capetownhome.jpg",
                  description: " Where modern living meets urban vibrancy. Welcome home!"  
                },
                {
                  propertyNumber: 6,
                  propertyName: "Crystal Lake",
                  propertyPrice: "$6000",
                  propertyImage: "",
                  description: " Where modern living meets urban vibrancy. Welcome home!"  
                },
                {
                  propertyNumber: 7,
                  propertyName: "Bayside",
                  propertyPrice: "$7000",
                  propertyImage: "",
                  description: " Where modern living meets urban vibrancy. Welcome home!"  
                },
                {
                  propertyNumber: 8,
                  propertyName: "Cherry Blossom Villa",
                  propertyPrice: "$8000",
                  propertyImage: "",
                  description: " Where modern living meets urban vibrancy. Welcome home!"  
                },
            ]
        
        
        const getters = {
            property: (state) => state.propertyDetails,
        
        }
        const actions = {
        
        }
        const mutations = {
        
        }
        export default {
            state,
            getters,
            actions,
            mutations,
        }
