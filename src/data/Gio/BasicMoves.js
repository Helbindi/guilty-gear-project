//images
import Punch  from '../../assets/images/button/Punch.png';
import Kick  from '../../assets/images/button/Kick.png';
import Slash  from '../../assets/images/button/Slash.png';
import HeavySlash  from '../../assets/images/button/HeavySlash.png';
import Dust  from '../../assets/images/button/Dust.png';
import Stand  from '../../assets/images/input/Stand.png';
import Forward from '../../assets/images/input/Forward.png'
import Down from '../../assets/images/input/Down.png'
import Up from '../../assets/images/input/Up.png'

//videos
import P2 from '../../assets/videos/Gio/Basic/P2.mp4';
import P5 from '../../assets/videos/Gio/Basic/P5.mp4';
import P6 from '../../assets/videos/Gio/Basic/P6.mp4';
import P8 from '../../assets/videos/Gio/Basic/P8.mp4';

import K2 from '../../assets/videos/Gio/Basic/K2.mp4';
import K5 from '../../assets/videos/Gio/Basic/K5.mp4';
import K8 from '../../assets/videos/Gio/Basic/K8.mp4';

import S2 from '../../assets/videos/Gio/Basic/S2.mp4';
import S5 from '../../assets/videos/Gio/Basic/S5.mp4';
import S8 from '../../assets/videos/Gio/Basic/S8.mp4';

import HS2 from '../../assets/videos/Gio/Basic/HS2.mp4';
import HS5 from '../../assets/videos/Gio/Basic/HS5.mp4';
import HS6 from '../../assets/videos/Gio/Basic/HS6.mp4';
import HS8 from '../../assets/videos/Gio/Basic/HS8.mp4';

import D2 from '../../assets/videos/Gio/Basic/D2.mp4';
import D5 from '../../assets/videos/Gio/Basic/D5.mp4';
import D6 from '../../assets/videos/Gio/Basic/D6.mp4';
import D8 from '../../assets/videos/Gio/Basic/D8.mp4';

export const BasicMoves = [
  {
    id: 0,
    name: 'Standing',
    dpad: Stand,
    moves: [
      { id: 0, imageURL: Punch, videoURL: P5},
      { id: 1, imageURL: Kick, videoURL: K5},
      { id: 2, imageURL: Slash, videoURL: S5},
      { id: 3, imageURL: HeavySlash, videoURL: HS5},
      { id: 4, imageURL: Dust, videoURL: D5}
    ]
  },
  {
    id: 1,
    name: 'Forward',
    dpad: Forward,
    moves: [
      { id: 0, imageURL: Punch, videoURL: P6},
      { id: 1, imageURL: HeavySlash, videoURL: HS6},
      { id: 2, imageURL: Dust, videoURL: D6}
    ]
  },
  {
    id: 2,
    name: 'Crouching',
    dpad: Down,
    moves: [
      { id: 0, imageURL: Punch, videoURL: P2},
      { id: 1, imageURL: Kick, videoURL: K2},
      { id: 2, imageURL: Slash, videoURL: S2},
      { id: 3, imageURL: HeavySlash, videoURL: HS2},
      { id: 4, imageURL: Dust, videoURL: D2}
    ]
  },
  {
    id: 3,
    name: 'Jumping',
    dpad: Up,
    moves: [
      { id: 0, imageURL: Punch, videoURL: P8},
      { id: 1, imageURL: Kick, videoURL: K8},
      { id: 2, imageURL: Slash, videoURL: S8},
      { id: 3, imageURL: HeavySlash, videoURL: HS8},
      { id: 4, imageURL: Dust, videoURL: D8}
    ]
  } 
];