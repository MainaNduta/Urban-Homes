<template>
    <h1>Purchase</h1>

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
</template>
<script>
   export default {
    
   }
</script>