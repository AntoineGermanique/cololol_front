<template>
  <div>
    <div>{{ $t("common.locality") }} : {{address.locality}}</div>
    <div>{{ $t("common.postal_code") }} : {{address.postal_code}}</div>
    <div>{{ $t("common.route") }} : {{address.route}}</div>
    <div>{{ $t("common.street_number") }} : {{address.street_number}}</div>
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