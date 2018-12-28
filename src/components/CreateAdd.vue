<template>
  <div>
    <form>
      <vue-google-autocomplete
        id="map"
        class="form-control"
        placeholder="Start typing"
        v-on:placechanged="getAddressData"
      ></vue-google-autocomplete>
      <Address v-bind:address="address"></Address>
      <label>
        {{$t("common.monthlyRent")}}
        <input v-model="monthlyRent" type="number">
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
      <div v-for="(pic, index) in pics" v-bind:key="index">tada {{pic}}</div>
    </form>
  </div>
</template>
<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import Address from "@/components/Address.vue";

export default {
  components: { VueGoogleAutocomplete, Address },
  data: () => ({
    address: "",
    monthlyRent: 0,
    extra: 0,
    roomatesNumber: 0,
    descripton: "",
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
    previewPics() {
      this.pics = this.pics.concat(this.$refs.myPics.files);
    }
  }
};
</script>
