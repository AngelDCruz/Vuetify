<template>
    <div>
        <v-row class="mt-10">
            <v-banner>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatum nemo eum nihil inventore quas! Ipsam nemo at tempora sit molestias quam reprehenderit maiores magnam omnis atque placeat, eum quidem tenetur doloremque voluptatibus consequatur officiis! Corporis enim cupiditate doloremque eligendi dolorem reprehenderit doloribus ullam maxime voluptatum mollitia dignissimos quod ad quos ut, voluptate explicabo, nobis modi veniam assumenda? Inventore perferendis quos cupiditate provident sit illum, quae eveniet sunt recusandae, aliquid obcaecati veniam explicabo eligendi. Consequuntur deserunt similique ex porro dicta veniam, labore sapiente iusto nesciunt molestias totam expedita fugiat, suscipit minima omnis, ratione sed vitae repudiandae quo? Magni, optio rem.
            </v-banner>
        </v-row>
        <v-row class="mt-10">
            <v-banner
                single-line
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam eius delectus unde vitae et aliquid corporis deserunt accusantium cumque cum fugiat soluta ex ducimus quod quaerat commodi magnam, eos laudantium obcaecati asperiores atque quos consequuntur? Dolor deleniti, non commodi excepturi exercitationem impedit aliquam eligendi veritatis ipsam nulla a nam, rem voluptates nesciunt at error molestiae alias veniam quibusdam pariatur modi delectus ut sapiente? Odit cumque aliquid porro voluptas architecto labore quos rerum commodi quas beatae distinctio fugit, harum, nulla, deserunt eius accusantium a rem necessitatibus magni error? Autem libero laborum praesentium animi quibusdam doloribus eum, suscipit labore deserunt expedita dolores.
            </v-banner>
        </v-row>
        <v-row class="mt-10">
            <v-banner
                icon="mdi-format-indent-increase"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim dolorem veniam ipsa voluptates quibusdam cum. Maiores porro suscipit perspiciatis, voluptatem, voluptas aperiam saepe tempora facere eligendi magnam libero odio fugit cumque, corrupti optio voluptate veritatis quam error eum fuga est perferendis illum? Assumenda ratione provident harum quaerat mollitia. Maxime delectus aut aspernatur quo nisi. Voluptatibus animi facilis eveniet iste id architecto sequi maiores consequuntur dicta provident atque quam officia laudantium saepe vero vitae beatae, inventore similique accusamus. Quisquam voluptatem ex doloremque voluptatibus. Fugit earum ab dolor tenetur maxime facere dignissimos. Voluptatibus aliquam deleniti ipsa laborum et, debitis molestias dolores?
            </v-banner>
        </v-row>
        <v-row class="mt-10">
            <v-btn
                v-on:click="mostrar_banner"
            >
                Mostrar banner
            </v-btn>
            <v-banner
                icon="mdi-format-indent-increase"
                action
                v-bind:value="ocultarBanner"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim dolorem veniam ipsa voluptates quibusdam cum. Maiores porro suscipit perspiciatis, voluptatem, voluptas aperiam saepe tempora facere eligendi magnam libero odio fugit cumque, corrupti optio voluptate veritatis quam error eum fuga est perferendis illum? Assumenda ratione provident harum quaerat mollitia. Maxime delectus aut aspernatur quo nisi. Voluptatibus animi facilis eveniet iste id architecto sequi maiores consequuntur dicta provident atque quam officia laudantium saepe vero vitae beatae, inventore similique accusamus. Quisquam voluptatem ex doloremque voluptatibus. Fugit earum ab dolor tenetur maxime facere dignissimos. Voluptatibus aliquam deleniti ipsa laborum et, debitis molestias dolores?

                <template v-slot:actions>
                    <v-btn
                        color="accent-4"
                        v-on:click="ocultar_banner"
                    >Cambiar Texto</v-btn>
                </template>
            </v-banner>
        </v-row>

        <v-row class="mt-10">
            <input type="checkbox" v-model="ocultarBannerDismiss" id="mostrarOcultar"><label for="mostrarOcultar">Mostrar/Ocultar</label>
            <v-banner v-model="ocultarBannerDismiss">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora illum iusto provident, sequi quasi reiciendis veniam temporibus quo praesentium ipsam dignissimos, accusantium iste itaque a tempore. In quidem perferendis temporibus.
                <template v-slot:actions="{ dismiss }">
                    <v-btn v-on:click="dismiss">
                        ocultar banner
                    </v-btn>
                </template>
            </v-banner>
        </v-row>
    </div>
</template>


<script>
export default {
    data: function(){
        return {
            ocultarBanner: false,
            ocultarBannerDismiss: true
        }
    },
    methods:{
        mostrar_banner: function() {
            this.ocultarBanner = true;
        },
        ocultar_banner: function() {
            this.ocultarBanner = false;
        }
    }
}
</script>