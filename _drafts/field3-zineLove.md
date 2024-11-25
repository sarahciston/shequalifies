---
title: zine 2, lovenotes
parent: intersectional AI
last_modified_date: 2020-08-22 21:12
---

<!-- need to make new print styles for h1,2,3,4 headers all coming out as h1? -->


![justlikeyou](https://cdn.glitch.com/eaa18b38-3765-4c0b-8304-2af139b6b542%2FKatya-likeyou.gif?v=1598153822857)

<main class="zine" markdown="1">
<section class="zine-page page-1" markdown="1">

## a better AI is possible: love notes to intersectional AI innovators

#### future recipients, an utterly non-exhaustive list
- [Afrotechtopia](https://www.afrotectopia.org/){:target="_blank"}
- [<CTRL + SHIFT>](https://www.ctrlshift.club/)
- [Data for Black Lives](https://d4bl.org/){:target="_blank"}
- [@datahealing](https://www.are.na/neema-xx/data-healing){:target="_blank"} & [@cyberdoula](https://www.instagram.com/cyberdoula/){:target="_blank"} 
- [Deep Lab](http://www.deeplab.net){:target="_blank"}
- [Queer.AI](https://queer.ai/):target="_blank"}
- [Tiny Tech Zines](https://www.instagram.com/tinytechzines/){:target="_blank"}
- [Virtual Care Lab](https://www.instagram.com/virtualcarelab/){:target="_blank"}
- 
- 

- ~~@thenapministry~~
- ~~cultural AI design tool~~
- algorithms of late capitalism
- Romi
- eyebeam/ainow
- feminist.ai
- school for poetic computation
- p5.js
- prt_scrn_ap
- recursecenter
- feministlibraryonwheels
- the algorithmic you
- dra_ft_
- femmebit
aesthetic.resistance
- https://www.instagram.com/touchyfeelytech/
- https://www.instagram.com/computational_mama/
- school of magic machines



#### other useful toolkits
- "A Killjoy Survival Kit" by Sara Ahmed. Hers contains books, things, tools, time, life, permission notes, other killjoys, humor, feelings, bodies, your own survival kit (235--249).

This mini-field-guide is part of a series looking at ideas, approaches, and examples bringing Intersectionality to AI. 

</section>
</main>
<style>
  
/* Any styles that you want to apply **just** when the zine is printed go in here! */

@media print {

  .main-header, .menu, .site-footer { 
    display: none !important;
  }
  
  body {
    font-size: 42%; /* 69%, 33% */
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
 
  .mini-img {
    max-width: 4.4rem;
  }
  
  /* The styles below here are specifically for creating the page layout.-> DON'T CHANGE THESE <- unless you know what youre doing!
  */
  
  @page {
    size: landscape;
    margin: 0;
    bleed: 0;
  }
  
  .zine {
    width: 100vw;
    height: 100vh;
    display: grid;
    gap: 1.5px;
    background: lightgrey;
    grid-template-areas:
      "page-5 page-4 page-3 page-2"
      "page-6 page-7 page-8 page-1";
  }

  .zine-page {
    background: white;
    padding: .2rem;
    overflow: hidden;
  }

  .page-5, .page-4, .page-3, .page-2 {
    transform: rotate(180deg) translateX(-0.1px);
  }

  .page-1 {
    grid-area: page-1;

  }

  .page-2 {
    grid-area: page-2;

  }

  .page-3 {
    grid-area: page-3;
  }

  .page-4 {
    grid-area: page-4;
  }

  .page-5 {
    grid-area: page-5;
  }

  .page-6 {
    grid-area: page-6;
  }

  .page-7 {
    grid-area: page-7;
  }

  .page-8 {
    grid-area: page-8;
  }
  
}
</style>
