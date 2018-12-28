<template>
  <div>
    <div>{{ $t("common.locality") }} : {{addressDetails.locality}}</div>
    <div>{{ $t("common.postal_code") }} : {{addressDetails.postal_code}}</div>
    <div>{{ $t("common.route") }} : {{addressDetails.route}}</div>
    <div>{{ $t("common.street_number") }} : {{addressDetails.street_number}}</div>
  </div>
</template>

<script>
export default {
  name: "Address",
  props: ["address"],
  data: function() {
    return {
      addressDetails: this.address
    };
  }
};
</script>