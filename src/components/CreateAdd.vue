<template>
  <div>
    <form @submit.prevent="processForm">
      <vue-google-autocomplete
        id="map"
        class="form-control"
        placeholder="Start typing"
        v-on:placechanged="getAddressData"
      ></vue-google-autocomplete>
      <Address v-bind:address="address"></Address>
      <label>
        {{$t("common.monthlyRent")}}
        <input
          v-model="monthlyRent"
          type="number"
          v-validate="'required|decimal:2|min_value:1'"
        >
      </label>
      <label>
        {{$t("common.extra")}}
        <input v-model="extra" type="number">
      </label>
      <span>{{$t("common.total")}} :{{parseFloat(monthlyRent)+parseFloat(extra)}}</span>
      <label>
        {{$t("common.roomatesNumber")}}
        <input v-model="roomatesNumber" type="number">
      </label>
      <label>
        {{$t("common.description")}}
        <textarea v-model="description"></textarea>
      </label>
      <label>
        {{$t("common.description")}}
        <input
          ref="myPics"
          class="custom-file-input"
          @change="previewPics"
          multiple
          type="file"
          accept=".jpg, .png"
          size="1000"
        >
      </label>
      <div v-for="(pic, index) in pics" v-bind:key="index">
        <img v-bind:src="pic">
      </div>
      <button>submit</button>
    </form>
  </div>
</template>
<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import Address from "@/components/Address.vue";
import axios from "axios";

export default {
  components: { VueGoogleAutocomplete, Address },
  data: () => ({
    address: "",
    monthlyRent: 0,
    extra: 0,
    roomatesNumber: 0,
    description: "",
    pics: []
  }),

  mounted() {
    // To demonstrate functionality of exposed component functions
    // Here we make focus on the user input
    // this.$refs.address.focus();
  },

  methods: {
    /**
     * When the location found
     * @param {Object} addressData Data of the found location
     * @param {Object} placeResultData PlaceResult object
     * @param {String} id Input container ID
     */
    getAddressData: function(addressData, placeResultData, id) {
      this.address = addressData;
    },
    previewPics(input) {
      const file = input.target.files[0];
      const filesize = (file.size / 1024 / 1024).toFixed(4);
      if (filesize < 2) {
        const reader = new FileReader();
        reader.onload = e => this.pics.push(e.target.result);
        reader.readAsDataURL(input.target.files[0]);
      }
    },
    processForm(e) {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          alert("Form Submitted!");
          return;
        }

        alert("Correct them errors!");
      });

      if (this.errors.any()) {
        console.log("nope");
      } else {
        axios
          .post("http://localhost:3000/save", {
            address: this.address,
            monthlyRent: this.monthlyRent,
            extra: this.extra,
            roomatesNumber: this.roomatesNumber,
            description: this.description,
            pics: this.pics
          })
          .then(console.log)
          .catch(console.log);
      }
    }
  }
};
</script>
