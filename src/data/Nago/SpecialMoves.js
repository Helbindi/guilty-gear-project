//images
import Punch  from '../../assets/images/button/Punch.png';
import Kick  from '../../assets/images/button/Kick.png';
import Slash  from '../../assets/images/button/Slash.png';
import HeavySlash  from '../../assets/images/button/HeavySlash.png';
import QCB  from '../../assets/images/input/QCB.png';
import QCF from '../../assets/images/input/QCF.png';
import Z from '../../assets/images/input/Z.png';

//videos
import QCBK from '../../assets/videos/Nago/Special/QCB-K.mp4';
import QCBHS from '../../assets/videos/Nago/Special/QCB-HS.mp4';

import QCFK from '../../assets/videos/Nago/Special/QCF-K.mp4';
import QCFS from '../../assets/videos/Nago/Special/QCF-S.mp4';

import ZP from '../../assets/videos/Nago/Special/Z-P.mp4';
import ZHS from '../../assets/videos/Nago/Special/Z-HS.mp4';

export const SpecialMoves = [
  {
    id: 0,
    name: 'Quarter Circle Back',
    dpad: QCB,
    moves: [
      { id: 0, imageURL: Kick, videoURL: QCBK},
      { id: 1, imageURL: HeavySlash, videoURL: QCBHS}
    ]
  },
  {
    id: 1,
    name: 'Quarter Circle Forward',
    dpad: QCF,
    moves: [
      { id: 0, imageURL: Kick, videoURL: QCFK},
      { id: 1, imageURL: Slash, videoURL: QCFS}
    ]
  },
  {
    id: 2,
    name: 'Z-Motion',
    dpad: Z,
    moves: [
      { id: 0, imageURL: Punch, videoURL: ZP},
      { id: 1, imageURL: HeavySlash, videoURL: ZHS}
    ]
  }
];