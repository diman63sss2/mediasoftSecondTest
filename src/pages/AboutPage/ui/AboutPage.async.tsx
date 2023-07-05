import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {


  // @ts-ignore
  // В РЕАЛЬНОМ ПРОЕКТЕ ЭТО НУЖНО УБРАТЬ!!!!!!!!!!!!!!!!!!!!!!!
  setTimeout(()=>resolve( import ('./AboutPage')), 1500)


}));