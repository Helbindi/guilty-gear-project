//images
import HeavySlash  from '../../assets/images/button/HeavySlash.png';
import QCFx2  from '../../assets/images/input/QCFx2.png';
import HCBF  from '../../assets/images/input/HCB_F.png';

//videos 
import Overdrive1 from '../../assets/videos/Gio/Overdrive/Overdrive1.mp4';
import Overdrive2 from '../../assets/videos/Gio/Overdrive/Overdrive2.mp4';

export const Overdrive = [
    {
    id: 0,
    name: 'Quarter Circle Forward x2',
    dpad: QCFx2,
    moves: [
      { id: 0, imageURL: HeavySlash, videoURL: Overdrive1}
    ]
  },
  {
    id: 1,
    name: 'Half Circle Back + Forward',
    dpad: HCBF,
    moves: [
      { id: 0, imageURL: HeavySlash, videoURL:Overdrive2}
    ]
  }
]