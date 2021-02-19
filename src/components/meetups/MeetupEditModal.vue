<template>
  <div class="text-center">
    <v-dialog v-model="editModal" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red primary" fab dark small v-on="on">
          <v-icon>edit</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-container>
          <v-layout row wrap>
            <v-flex x12>
              <v-card-title class="headline grey lighten-2" primary-title>
                Editar la clase
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex x12>
              <v-card-text>
                <v-text-field
                  v-model="editedTitle"
                  id="title"
                  name="title"
                  color="primary"
                  label="Título de la publicación"
                  required
                ></v-text-field>
                <v-textarea
                  v-model="editedDescription"
                  id="description"
                  name="description"
                  color="primary"
                  label="Descripción"
                  required
                ></v-textarea>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-container>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="editModal = false">
            Cerrar
          </v-btn>
          <v-btn color="primary" text @click="onSaveChanges">
            Editar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "AddEditMeetupModal",
  props: {
    meetup: {
      type: Object,
      Array,
    },
  },
  data() {
    return {
      editModal: false,
      editedTitle: this.meetup.title,
      editedDescription: this.meetup.description,
    }
  },

  methods: {
    onSaveChanges() {
      if (
        this.editedTitle.trim() === "" ||
        this.editedDescription.trim() === ""
      )
        return
      this.editModal = false
      this.$store.dispatch("updateMeetupData", {
        id: this.meetup.id,
        title: this.editedTitle,
        description: this.editedDescription,
      })
    },
  },
}
</script>
