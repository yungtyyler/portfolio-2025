declare module "vanta/dist/vanta.dots.min.js" {
  import * as THREE from "three";

  interface VantaBaseConfig {
    el: HTMLElement;
    THREE?: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
  }

  interface VantaDotsConfig extends VantaBaseConfig {
    color?: number;
    color2?: number;
    size?: number;
    spacing?: number;
    showLines?: boolean;
  }

  interface VantaEffect {
    destroy: () => void;
  }

  export default function DOTS(config: VantaDotsConfig): VantaEffect;
}
