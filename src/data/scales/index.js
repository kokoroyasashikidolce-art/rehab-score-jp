import { scimSrScale } from "./scimSr";
import { masScale } from "./mas";
import { fimScale } from "./fim";
import { biScale } from "./bi";
import { scim3Scale } from "./scim3";
import { isncsciScale } from "./isncsci";
import { jcsScale } from "./jcs";
import { gcsScale } from "./gcs";
import { rassScale } from "./rass";
import { crsrScale } from "./crsr";

export const scales = [
  rassScale,
  jcsScale,
  gcsScale,
  crsrScale,

  isncsciScale,
  scimSrScale,
  scim3Scale,

  masScale,
  fimScale,
  biScale,
];