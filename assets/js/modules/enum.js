let Enums = {}
export function CreateEnumBase(name) {
  Enums[name] = {}
}

export function CreateEnumHandle(baseName, name) {
  Enums[baseName][name] = baseName + "." + name
}

export function GetEnumBase(o) {
  if (o != undefined) {
    return Enums[o];
  }
  else {return Enums;}
}