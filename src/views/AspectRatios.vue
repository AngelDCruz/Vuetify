<template>
    <div>
        <v-card>
            <v-responsive 
            :aspect-ratio="16/9"
            height="100">
                <v-card-text class="card-title">Hola mundo</v-card-text>
            </v-responsive>
        </v-card>
    </div>
</template>

<style scope>

    .card-title{
        font-size: 5em;
        text-align: center;
        margin: 20px 0;
    }
    
</style>