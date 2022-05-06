<template>
  <div class="w-full">
    <h1 class="mt-4 mb-4">TypeScript Entity</h1>
    <hr/>

    <div class="mt-4">
      <label class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" v-model="typeClass" @change="save">
        <span class="ml-2">Export entity type class (default is interface)</span>
      </label>
    </div>

    <div class="mt-4">
      <label class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" v-model="typeTSX" @change="save">
        <span class="ml-2">Export entity for React .tsx</span>
      </label>
    </div>

    <div class="mt-4">
      <label class="inline-flex items-center">
        <input type="checkbox" class="form-checkbox" v-model="typeORM" @change="save">
        <span class="ml-2">Enable TypeORM entities</span>
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
      typeTSX: false,
      pluginData: {},
    }
  },

  created () {
    this.pluginData = window.vemtoApi.getPluginData()
    this.typeORM = this.pluginData.typeORM
    this.typeTSX = this.pluginData.typeORM
    this.typeClass = this.pluginData.typeClass
  },

  methods: {
    save () {
      window.vemtoApi.savePluginData({
        typeORM: this.typeORM,
        typeClass: this.typeClass,
        typeTSX: this.typeTSX,
      })
    }
  }
}
</script>
