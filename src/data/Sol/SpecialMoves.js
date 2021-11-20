//images
import Punch  from '../../assets/images/button/Punch.png';
import Kick  from '../../assets/images/button/Kick.png';
import Slash  from '../../assets/images/button/Slash.png';
import HeavySlash  from '../../assets/images/button/HeavySlash.png';
import QCB  from '../../assets/images/input/QCB.png';
import QCF  from '../../assets/images/input/QCF.png';
import Z from '../../assets/images/input/Z.png';
import HCF from '../../assets/images/input/HCF.png';

//videos
import QCBP from '../../assets/videos/Sol/Special/QCB-P.mp4';
import QCBK from '../../assets/videos/Sol/Special/QCB-K.mp4';
import QCBS from '../../assets/videos/Sol/Special/QCB-S.mp4';

import QCFP from '../../assets/videos/Sol/Special/QCF-P.mp4';
import QCFK from '../../assets/videos/Sol/Special/QCF-K.mp4';

import ZK from '../../assets/videos/Sol/Special/Z-K.mp4';
import ZS from '../../assets/videos/Sol/Special/Z-S.mp4';
import ZHS from '../../assets/videos/Sol/Special/Z-HS.mp4';

import HCFHS from '../../assets/videos/Sol/Special/HCF-HS.mp4';

export const SpecialMoves = [
  {
    id: 0,
    name: 'Quarter Circle Back',
    dpad: QCB,
    moves: [
      { id: 0, imageURL: Punch, videoURL: QCBP},
      { id: 1, imageURL: Kick, videoURL: QCBK},
      { id: 2, imageURL: Slash, videoURL: QCBS}
    ]
  },
  {
    id: 1,
    name: 'Quarter Circle Forward',
    dpad: QCF,
    moves: [
      { id: 0, imageURL: Punch, videoURL: QCFP},
      { id: 1, imageURL: Kick, videoURL: QCFK}
    ]
  },
  {
    id: 2,
    name: 'Z-Motion',
    dpad: Z,
    moves: [
      { id: 0, imageURL: Kick, videoURL: ZK},
      { id: 1, imageURL: Slash, videoURL: ZS},
      { id: 2, imageURL: HeavySlash, videoURL: ZHS}
    ]
  },
  {
    id: 3,
    name: 'Half Circle Forward',
    dpad: HCF,
    moves: [
      { id: 0, imageURL: HeavySlash, videoURL: HCFHS}
    ]
  }
];