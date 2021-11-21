//images
import Slash  from '../../assets/images/button/Slash.png';
import HeavySlash  from '../../assets/images/button/HeavySlash.png';
import HCBF  from '../../assets/images/input/HCB_F.png';

//videos
import Overdrive1  from '../../assets/videos/Nago/Overdrive/Overdrive1.mp4';
import Overdrive2  from '../../assets/videos/Nago/Overdrive/Overdrive2.mp4';

export const Overdrive = [
    {
    id: 0,
    name: 'Half Circle Back + Forward',
    dpad: HCBF,
    moves: [
      { id: 0, imageURL: Slash, videoURL: Overdrive1},
      { id: 1, imageURL: HeavySlash, videoURL: Overdrive2}
    ]
  }
]