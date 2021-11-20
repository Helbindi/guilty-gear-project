//images
import Kick  from '../../assets/images/button/Kick.png';
import Slash  from '../../assets/images/button/Slash.png';
import HeavySlash  from '../../assets/images/button/HeavySlash.png';
import QCB from '../../assets/images/input/QCB.png';
import QCF from '../../assets/images/input/QCF.png';
import Z from '../../assets/images/input/Z.png';

//videos
import QCBK from '../../assets/videos/Gio/Special/QCB-K.mp4';
import QCBS from '../../assets/videos/Gio/Special/QCB-S.mp4';
import QCFK from '../../assets/videos/Gio/Special/QCF-K.mp4';
import ZS from '../../assets/videos/Gio/Special/Z-S.mp4';

export const SpecialMoves = [
  {
    id: 0,
    name: 'Quarter Circle Back',
    dpad: QCB,
    moves: [
      { id: 0, imageURL: Kick, videoURL: QCBK},
      { id: 1, imageURL: Slash, videoURL: QCBS}
    ]
  },
  {
    id: 1,
    name: 'Quarter Circle Forward',
    dpad: QCF,
    moves: [
      { id: 0, imageURL: Kick, videoURL: QCFK}
    ]
  },
  {
    id: 2,
    name: 'Z-Motion',
    dpad: Z,
    moves: [
      { id: 0, imageURL: HeavySlash, videoURL: ZS}
    ]
  }
];