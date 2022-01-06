import {CreateEnumBase, CreateEnumHandle, GetEnumBase} from "./enum.js";
export const Version = '0.1'

CreateEnumBase("Langs")
CreateEnumHandle("Langs", "Js")
CreateEnumHandle("Langs", "Cpp")

function readScript(rawScript) {
  let v1 = rawScript.toString()
  let v2 = v1.split('\n')
  let foundS = false

  let handles = {
    MODULE_NAME = 'NOT_FOUND',
    MODULE_LANG = 'NOT_FOUND'
  }

  for (v in v2) {
    if (v.startsWith('EXPORT_ARGS[') || v.startsWith('EXPORT_ARGS [')) {
      if (foundS != true) {
        foundS = true
      }
    }
    else if (v.includes('MODULE_NAME:')) {
      let u1 = v.split('MODULE_NAME: ')[1]
      handles.MODULE_NAME = u1
    }
    else if (v.includes('MODULE_LANG')) {
      let u1 = v.split('MODULE_LANG: ')[1]
      handles.MODULE_LANG = u1
    }
    else {
      if (foundS != true) {
        foundS = false
      }
    }
  }

  return handles
}

export function readExport(path, return_args_format, get_method) {
  fetch(window.location.href + '/assets/js/modules/export/' + path).then(function(d) {
    let v1 = readScript(d).MODULE_NAME
    let v2 =  readScript(d).MODULE_LANG

    let checks = {c1: false, c2: false}

    if (GetEnumBase(v1) != GetEnumBase()) {
      checks.c1 = true
    }

    if (v1 == "BitcoinConversionApi") {
      checks.c2 = true
    }

    if (checks.c1 && checks.c2) {
      return {v1, v2}
    }
    else {
      return {"__es", "__es"}
    }
    return {v1, v2}
    
  }).then(function (data) {return 0})
}