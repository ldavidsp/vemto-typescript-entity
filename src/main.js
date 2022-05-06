module.exports = (vemto) => {
  return {
    canInstall() {
      return true
    },

    onInstall() {
      vemto.savePluginData({
        typeORM: false,
        typeClass: false,
        typeTSX: false
      })
    },

    beforeCodeGenerationEnd() {
      let pluginData = vemto.getPluginData(), models = vemto.getProjectModels()
      let typeORM = pluginData.typeORM
      let typeClass = pluginData.typeClass
      let typeTSX = pluginData.typeTSX

      vemto.log.warning(`Generate TypeScript Entity`)
      let basePath = 'app/Typescript', options = { formatAs: 'ts', data: {} }

      models.forEach(model => {
        options.data = {
          model,
          typeORM,
          typeClass,
          typeTSX
        }

        const extension = typeTSX ? 'tsx' : 'ts'
        vemto.renderTemplate('files/TypeScriptEntity.vemtl', `${basePath}/${model.name.case('pascalCase')}.entity.${extension}`, options)
      })
    },
  }
}
