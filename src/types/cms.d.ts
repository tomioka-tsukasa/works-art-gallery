namespace Cms {
  export interface ArtModel {
    visual: Visual,
    title: string,
    enTitle?: string,
    slug: string,
    author: string,
  }

  export interface Visual extends StaticImageData {
    altText: string,
  }

  export interface StaticImageData {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
    blurWidth?: number;
    blurHeight?: number;
  }
}
