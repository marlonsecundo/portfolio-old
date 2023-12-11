export enum DevType {
  MOBILE,
  BACKEND,
  FRONTEND,
}
export interface Work {
  title: string;
  srcImg: string;
  textColor: string;
  cardColor: string;
  paddingImageBottom?: string;
  link?: string;
  srcImgWidth: string;
  technologies: Technology[];
  expText: string;
  bulletPoints: string;
  year?: string;
  enableHoverEffect?: boolean;
  description: string;
  devType: DevType;
}
