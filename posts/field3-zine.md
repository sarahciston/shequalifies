---
title: zine
parent: intersectional AI
last_modified_date: 2020-08-22 10:46
---

<!-- need to make new print styles for h1,2,3,4 headers all coming out as h1? -->

<main class="zine" markdown="1">

{: .zine-page .page-1 }
## toolkit for IAI

{: .zine-page .page-2 }

{: .zine-page .page-3 }

{: .zine-page .page-4 }
Here's some sample text.

{: .zine-page .page-5 }

{: .zine-page .page-6 }
### other title

<section class="zine-page page-7" markdown="1">
### how ~~not~~ to structure your organization

Tips from _Hacking Diversity_ by Christina Dunbar-Hester:

_But I want everyone to feel good, so no one should be in charge, right?_

>Rather than "shelving hierarchy entirely," many BIPOC and LGBTQ/feminist hackerspaces prefer "an accountable, transparent hierarchy" that is "as horizontal and distributed as possible, instead of having unofficial leaders "who govern through "charisma, reputational capital or technical prowess. [...] A culture of valorizing technology itself, and especially granting certain people star status through their technical prowess and willingness to claim credit for technical accomplishments, [is] part of the problem" (89).

_Should I work within existing systems, structures, organizations, or create your own?_ 

>"Many advocates pursue both mainstream intervention and separate spaces simultaneously, recognizing that each has utility and that it is not an either/or situation" (70).

_What's important to know in working with others?_

>Prioritize clear documentation (and other skills valued besides just 'hard coding') and "collectivized communicability" as part of your politics (82--83).

_Isn't the barrier to entry to high to even try?_

>"[It's] 'not patronizing to meet people where they're at. [...] Find a device you already use, take out the proprietary crap that controls it, and control it yourself'" (108).

  </section>

{: .zine-page .page-8 }
### Types of Creative-Critical-Code Interventions: What can you imagine?
- **Inform:** provide or reveal information that already exists or is hidden
- **Challenge:** disrupt, troll, converse, intervene, activate, ask questions
- **Reimagine:** redesign, reframe, recontextualize, sketch out
- **Reflect:** aesthetic, artistic, affective, contemplative, essayistic
- **Resource:** convene, make space, provide access, provide goods or services, teach or share, ask (someone else might need the same thing)

<!-- 
>"But how can we define a ritual as ancient as the Agnicayana as algorithmic? To many, it may appear an act of cultural appropriation to read ancient cultures through the paradigm of the latest technologies. Nevertheless, claiming that abstract techniques of knowledge and artificial metalanguages belong uniquely to the modern industrial West is not only historically inaccurate but also an act and one of implicit _epistemic colonialism_ towards cultures of other places and other times. The French mathematician Jean-Luc Chabert has noted that “algorithms have been around since the beginning of time and existed well before a special word had been coined to describe them. Algorithms are simply a set of step by step instructions, to be carried out quite mechanically, so as to achieve some desired result.” Today some may see algorithms as a recent technological innovation implementing abstract mathematical principles. On the contrary, algorithms are among the most ancient and material practices, predating many human tools and all modern machines" (Pasquinelli 2019)
_maybe for field3_
 -->
{: .zine-page .page-8 }
Wernimont uses the metaphor of the matrices as “the media in which something is generated or developed. As a generative form, the matrix is a powerful way of understanding and critiquing binary logics and simple, progressive narratives” (11). Citing Vivian M. May, she says it also grounds intersectional practice and thought, “intersectional work focuses on 'enmeshed multiplicities,' including but not limited to those of race and gender. It also entails a commitment to ‘resistant forms of knowing’ [...]. The matrix logic of intersectional feminism ‘considers how inequalities intermingle,’ and stresses linkages between ‘the structural and experiential, and the material and the discursive’” (Wernimont 2018, 11). 


{: .zine-page .page-8 }
**For all references please view the online version of this zine**

</main>

<style>
  
/* Any styles that you want to apply **just** when the zine is printed go in here! */

@media print {

  .main-header, .menu, .site-footer { 
    display: none !important;
  }
  
  body {
    font-size: 33%; /* 69% */
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
