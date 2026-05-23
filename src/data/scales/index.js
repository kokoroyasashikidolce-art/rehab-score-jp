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
import { siasScale } from "./sias";
import { fmaScale } from "./fma";
import { mmtScale } from "./mmt";
import { nihssScale } from "./nihss";
import { aratScale } from "./arat";
import { stefScale } from "./stef";
import { boxBlockTestScale } from "./boxBlockTest";
import { nineHolePegTestScale } from "./nineHolePegTest";
import { wmftScale } from "./wmft";
import { malScale } from "./mal";
import { mftScale } from "./mft";

export const scales = [
  jcsScale,
  gcsScale,
  rassScale,
  camIcuScale,
  fourScoreScale,
  crsrScale,
  whimScale,
  
  brunnstromScale,
  siasScale,
  fmaScale,
  mmtScale,
  nihssScale,

  aratScale,
  stefScale,
  boxBlockTestScale,
  nineHolePegTestScale,
  wmftScale,
 
  mftScale,

  isncsciScale,
  scimSrScale,
  scim3Scale,

  masScale,
  fimScale,
  biScale,
];