export function throwIfAlreadyLoaded(parentModule: any, moduleName: String) {
  if (parentModule) {
    throw new Error(`Module ${moduleName} has already been loaded. Import core modules in AppModule only.`);
  }
}
