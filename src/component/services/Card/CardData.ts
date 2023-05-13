import { desktopDevImg, mobileDevImg, webDevImg } from '../../../common/images';
import { CardInterface } from './CardType';

export const cardData: CardInterface[] = [
  {
    title: 'Web Development',
    content:
      'Web Development is the process of designing and building a website or web application. It involves designing a user interface, content, and functionality, and then developing a web server to deliver the content to the user.',
    image: webDevImg,
  },
  {
    title: 'Mobile Application Development',
    content:
      'A mobile application, most commonly referred to as an app, is a type of application software designed to run on a mobile device, such as a smartphone or tablet computer.',
    image: mobileDevImg,
  },
  {
    title: 'Desktop Application Development',
    content:
      'Desktop applications are software programs run locally on computer devices. They aren’t accessible from a browser, like web-based apps, and require deployment on a personal computer or laptop.',
    image: desktopDevImg,
  },
];
