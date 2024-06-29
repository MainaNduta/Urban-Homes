<template>
    <div>
    <h2>About·Us·</h2>
    <p>At UrbanHomes, we're passionate about guiding you through your real estate journey,
         whether you're a first-time buyer seeking your dream home or a seasoned investor looking for the perfect property.
          Our team of experienced agents leverages their local market expertise and personalized approach to help you achieve your goals..</p>
          <br> <br> <br> 

<h2>Customer Reviews</h2>

  <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Tom Henry"
        text="Their team of professional and highly skilled agents,
        worked tirelessly to ensure I have secured my dream home"
        title="EXCELLENT SERVICES"
      ></v-card>

    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          SUPERB INTERIOR DECO
        </template>

        <template v-slot:subtitle>
          Maria Carie
        </template>

        <template v-slot:text>
          "I fell in love with the larvish deco and amazing views ,
         I would highly recommend Urban Homes!"
        </template>
      </v-card>


    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>MET MY EXPECTATIONS</v-card-title>

          <v-card-subtitle>Ella Furaha</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          UrbanHomes offer budgetfriendly yet unique modern homes.
        </v-card-text>
      </v-card>

  
    </v-col>
  </v-row>
</div>
</template>
<script>
   export default {
    
   }
</script>