module.exports = (vemto) => {
  return {
    canInstall() {
      return true
    },

    onInstall() {
      vemto.savePluginData({
        typeORM: false,
        typeClass: false
      })
    },

    beforeCodeGenerationEnd() {
      let pluginData = vemto.getPluginData(), models = vemto.getProjectModels()
      let typeORM = pluginData.typeORM
      let typeClass = pluginData.typeClass

      vemto.log.warning(`Vemto TypeScript Entity`)
      let basePath = 'app/Typescript', options = { formatAs: 'ts', data: {} }

      models.forEach(model => {
        options.data = {
          model,
          typeORM,
          typeClass
        }
        vemto.renderTemplate('files/TypeScriptEntity.vemtl', `${basePath}/${model.name.case('pascalCase')}.entity.ts`, options)
      })
    },
  }
}
