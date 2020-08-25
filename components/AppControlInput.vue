<template>
  <div class="input-control">
    <label><slot /></label>
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <textarea
      v-if="controlType === 'textarea'"
      rows="3"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <select
      v-if="controlType === 'dropdownbox'"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    >
      <option
        v-for="item in arr"
        :key="item"
        :value="item"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    },
    arr: {
      type: Array,
      default: () => ['Monthly', 'Quarterly', 'HalfYearly', 'Yearly']
    }
  }
}
</script>

<style lang="scss">
.input-control {
  margin: 10px 0;
}

.input-control label {
  display: block;
  font-weight: bold;
  float: left;
  margin: 10px;
  width: 75%;
  text-align: left;
}

.input-control input,
.input-control textarea,
.input-control select {
  display: block;
  width: 25%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  padding: 5px;
  text-align: right;
  @media only screen and (max-width: 1024px){
    width: 50%;
  }
  @media only screen and (max-width: 800px){
    width: 25%;
  }
}

.input-control input:focus,
.input-control select:focus,
.input-control textarea:focus {
  background-color: #eee;
  outline: none;
}
</style>
