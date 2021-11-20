//images
import Punch  from '../../assets/images/button/Punch.png';
import HeavySlash  from '../../assets/images/button/HeavySlash.png';
import HCBF  from '../../assets/images/input/HCB_F.png';
import QCFx2  from '../../assets/images/input/QCFx2.png';
import QCBx2  from '../../assets/images/input/QCBx2.png';

//videos
import Overdrive1  from '../../assets/videos/Ky/Overdrive/Overdrive1.mp4';
import Overdrive2  from '../../assets/videos/Ky/Overdrive/Overdrive2.mp4';
import Overdrive3  from '../../assets/videos/Ky/Overdrive/Overdrive3.mp4';

export const Overdrive = [
    {
    id: 0,
    name: 'Half Circle Back + Forward',
    dpad: HCBF,
    moves: [
      { id: 0, imageURL: HeavySlash, videoURL: Overdrive1}
    ]
  },
  {
    id: 1,
    name: 'Quarter Circle Forward x2',
    dpad: QCFx2,
    moves: [
      { id: 0, imageURL: Punch, videoURL: Overdrive2}
    ]
  },
  {
    id: 2,
    name: 'Quarter Circle Back x2',
    dpad: QCBx2,
    moves: [
      { id: 0, imageURL: HeavySlash, videoURL: Overdrive3}
    ]
  }
]