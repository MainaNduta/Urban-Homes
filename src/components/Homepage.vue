
<template>
<!-- Carousel -->
<v-card
 class="mx-auto"
 width="950"
>
 <v-carousel>
 <v-carousel-item
 src="../public/images/Dreamhomepiggybank.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../public/images/Architecture.jpg"
 cover
 ></v-carousel-item>
 <v-carousel-item
 src="../public/images/Modelhome.jpg"
 cover
 ></v-carousel-item>
 </v-carousel>
</v-card>
  <v-card
    class="mx-auto"
    max-width="744"
  >
    <v-card-text>
      <div>Welcome to UrbanHomes</div>

      <p class="text-h4 font-weight-black">where·your·realty·dreams·come·true</p>

      <p>Welcome aboard</p>

      <div class="text-medium-emphasis">
        Did you know? owning a home not only provides shelter.<br>
        "But also positively impacts your credit rating."
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="teal-accent-4"
        text="Learn More"
        variant="text"
        @click="reveal = true"
      ></v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
   export default {
    
   }
</script>