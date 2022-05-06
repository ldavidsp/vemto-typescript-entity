<template>
  <div class="w-full">
    <div class="mt-4">
      <label class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" v-model="typeClass" @change="save">
        <span class="ml-2">Export entity type class ()</span>
      </label>
    </div>

    <div class="mt-4">
      <label class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" v-model="typeORM" @change="save">
        <span class="ml-2">Activate TypeORM</span>
      </label>
    </div>

    <button class="button-primary mt-5" @click="save">Save</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      typeClass: false,
      typeORM: false,
      pluginData: {},
    }
  },

  created () {
    this.pluginData = window.vemtoApi.getPluginData()
    this.typeORM = this.pluginData.typeORM
    this.typeClass = this.pluginData.typeClass
  },

  methods: {
    save () {
      window.vemtoApi.savePluginData({
        typeORM: this.typeORM,
        typeClass: this.typeClass,
      })
    }
  }
}
</script>
