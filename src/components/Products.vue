<template>
    <h1>Products</h1>

    
    <v-card
        class="mx-auto"
        width="800"
        >
        <v-card-text class="bg-surface-light pt-4">
        <v-card-title>Purchase
             {{ total }}
             <v-btn
             color="deep-purple-lighten-2"
             text="Checkout"
            ></v-btn>
            </v-card-title>
            <v-row>
        <v-col cols="12" md="4" v-for="product in purchaseItems" :key=product.purchaseItems> 
        <v-card
    class="mx-auto my-12"
    max-width="374"
   >
    <v-img
      height="250"
      :src="product.propertyImage"
    cover
    ></v-img>
    <v-card-item>
       <v-card-title>{{product.propertyName}}</v-card-title>
    </v-card-item>
    <v-card-text>
      <div class="my-4 text-subtitle-1">
        {{product.propertyPrice}}</div>
    </v-card-text>
    <v-divider class="mx-4 mb-1"></v-divider>
    <v-card-actions>
      <v-btn
         color="deep-purple-lighten-2"
        text="Remove"
        block
        border
        @click="removeFromPurchase(product)"
       ></v-btn>
      </v-card-actions>
    </v-card>
   </v-col>
  </v-row>
 </v-card-text>
</v-card>


        <v-row>
            <v-col cols="12" md="4" v-for="product in propertyDetails" :key="product.propertyNumber">

  <v-card

    class="mx-auto my-12"
    max-width="374"
  >

    <v-img
      height="250"
      :src="product.propertyImage"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>{{ product.propertyName }}</v-card-title>
    </v-card-item>

    <v-card-text>
        <div class="my-4 text-subtitle-1">{{ product.propertyPrice }}</div>
        <div>{{ product.description }}</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        text="Add to Purchase"
        block
        border
        @click="addtoPurchase(product)"
      ></v-btn>
    </v-card-actions>
  </v-card>
</v-col>
</v-row>
<v-row>
            <v-col cols="12" md="4">

  <v-card

    class="mx-auto my-12" v-for="product in propertyDetails" :key="product.propertyNumber"
    max-width="374"
  >

    <v-img
      height="250"
      src="product.propertyImage"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>{{ product.propertyName }}</v-card-title>
    </v-card-item>

    <v-card-text>
        <div class="my-4 text-subtitle-1">{{ product.propertyPrice }}</div>
        <div>{{ product.description }}</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        text="Add to Purchase"
        block
        border
        @click="addtoPurchase(product)"
      ></v-btn>
    </v-card-actions>
  </v-card>
</v-col>
</v-row>

</template>    

<script>


export default {
    data () {
        return{
            propertyDetails : [
                {
                  propertyNumber: 1,
                  propertyName: "Amberwood Haven",
                  propertyPrice: "$1000",
                  propertyImage: "../images/Vintagehome.jpg",
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
                  propertyImage: "../public/images/Architecture.jpg",
                  description: " Where modern living meets urban vibrancy. Welcome home!"  
                },
                {
                  propertyNumber: 7,
                  propertyName: "Bayside",
                  propertyPrice: "$7000",
                  propertyImage: "../public/images/Bayside.jpg",
                  description: " Where modern living meets urban vibrancy. Welcome home!"  
                },
                {
                  propertyNumber: 8,
                  propertyName: "Cherry Blossom Villa",
                  propertyPrice: "$8000",
                  propertyImage: "../public/images/CherryBlossom.jpg",
                  description: " Where modern living meets urban vibrancy. Welcome home!"  
                },
            ],
            purchaseItems: [],
            total: 0,

        };
    },
    methods:{
        calculateTotal(propertyPrice){
            this.total+=(propertyPrice)
        },
        addtoPurchase(product){
            this.purchaseItems.push(product)
            this.calculateTotal(product.itemPrice)
        },
        removeFromPurchase(product){
            this.purchaseItems.pop(product)
            this.total -= product.itemPrice
        }
    }
};
</script>