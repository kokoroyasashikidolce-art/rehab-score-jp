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
import { fourScoreScale } from "./fourScore";
import { camIcuScale } from "./camIcu";
import { whimScale } from "./whim";
import { brunnstromScale } from "./brunnstrom";

export const scales = [
  jcsScale,
  gcsScale,
  rassScale,
  camIcuScale,
  fourScoreScale,
  crsrScale,
  whimScale,
  brunnstromScale,

  isncsciScale,
  scimSrScale,
  scim3Scale,

  masScale,
  fimScale,
  biScale,
];