//images
import Punch  from '../../assets/images/button/Punch.png';
import Kick  from '../../assets/images/button/Kick.png';
import Slash  from '../../assets/images/button/Slash.png';
import HeavySlash  from '../../assets/images/button/HeavySlash.png';
import QCB  from '../../assets/images/input/QCB.png';
import QCF from '../../assets/images/input/QCF.png';
import Z from '../../assets/images/input/Z.png';

//videos
import QCBP from '../../assets/videos/Ram/Special/QCB-P.mp4';
import QCBK from '../../assets/videos/Ram/Special/QCB-K.mp4';
import QCBS from '../../assets/videos/Ram/Special/QCB-S.mp4';
import QCBHS from '../../assets/videos/Ram/Special/QCB-HS.mp4';

import QCFS from '../../assets/videos/Ram/Special/QCF-S.mp4';
import QCFHS from '../../assets/videos/Ram/Special/QCF-HS.mp4';

import ZP from '../../assets/videos/Ram/Special/Z-P.mp4';

export const SpecialMoves = [
  {
    id: 0,
    name: 'Quarter Circle Back',
    dpad: QCB,
    moves: [
      { id: 0, imageURL: Punch, videoURL: QCBP},
      { id: 1, imageURL: Kick, videoURL: QCBK},
      { id: 2, imageURL: Slash, videoURL: QCBS},
      { id: 3, imageURL: HeavySlash, videoURL: QCBHS}
    ]
  },
  {
    id: 1,
    name: 'Quarter Circle Forward',
    dpad: QCF,
    moves: [
      { id: 0, imageURL: Slash, videoURL: QCFS},
      { id: 1, imageURL: HeavySlash, videoURL: QCFHS}
    ]
  },
  {
    id: 2,
    name: 'Z-Motion',
    dpad: Z,
    moves: [
      { id: 0, imageURL: Punch, videoURL: ZP}
    ]
  }
];