---
title: intersectional AI
nav_order: 8
has_children: true
last_modified_date: 2020-08-23 05:11
---

{% include glossary.md %}

{% include references.md %}

<iframe width="266" height="150" src="https://www.youtube.com/embed/gUCNY0Vqa_I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 

# intersectional artificial intelligence

#### exam question

This question invites you to sketch a toolkit, guide, or handbook for the advocacy argument made by this list. You write that, “less-biased technologies, intersectional ethics and approaches should be embedded at every level, from software and hardware development to implementation and to the audiences they serve.” How, concretely, should this be proposition be realized? How can the manifesto for intersectional AI be translated into practice? Alternately, describe a representative set of attempts to illuminate and/or redress the biases embedded in machine learning systems that you find meaningful or that do some of the work you envision.
{: .fs-2 }

#### exam response

{% assign wordcount = page.content | strip_html | split: ' ' | size %}
word count: {{ wordcount }}
{: .fs-3 }

## introduction: intersectional AI toolkit library, as a form

What follows on this and the related pages are sketches for a small library of digital-print hybrid zines about Intersectional AI. Written for a non-academic audience, they are intended as practical introductory field guides to some of the theoretical concepts but primarily offering strategies and resources as a jumping off point for readers' own practice and inspiration. They will take the rhetorical tone, style, and aesthetic approaches of zines, in that they cite, quote, remix, and reframe existing materials in (hopefully) clear, plain, concise language. This is in keeping with the multimodal and polyvocal approaches I have previously identified as intersectional.[^citar]

[^citar]: [Ciston, Sarah. 2019. "Intersectional AI Is Essential](http://artes.ucp.pt/citarj/article/view/665){:target="_blank"}

Ideally, in keeping with the approaches they will describe, in future drafts this zine collection would be developed collaboratively by multiple authors. Such work could be an ongoing project for Creative Code Collective, both as a learning tool for students who research, code, and compose the digital zines and as also as a resource for later student who read or adapt them. The concept is inspired by and adapts CSS from [zine-machine.glitch.me](https://zine-machine.glitch.me/){:target="_blank"}  and is also inspired by the [Tiny Tech Zines](https://www.instagram.com/tinytechzines/){:target="_blank"} festival and two fantastic zines I acquired there ["Bite-Size Networking"](https://wizardzines.com/){:target="_blank"} by Julia Evans and ["How to Cite Like a Badass Feminist Tech Scholar of Color"](https://points.datasociety.net/how-to-cite-like-a-badass-tech-feminist-scholar-of-color-ebc839a3619c){:target="_blank"} by Data and Society's Rigoberto Lara Guzmán and Sareeta Amrute. Another great zine is ["Characteristics of White Supremacy Culture"](https://www.dismantlingracism.org/uploads/4/3/5/7/43579015/zine_02.pdf){:target="_blank"} by [Tema Okun](https://www.dismantlingracism.org/white-supremacy-culture.html){:target="_blank"} and ["The Techno-Galactic Guide to Software Observation."](https://monoskop.org/images/e/e3/The_Techno-Galactic_Guide_to_Software_Observation_2018.pdf){:target="_blank"} 

Christina Dunbar-Hester, in _Hacking Diversity_ (2020), notes that the perhaps surprising appearance of zines and crafting in feminist technology circles makes sense: "In feminist zine making, forms of knowledge like folk medicine  can be filtered through the riot grrrl practice of zine-making, which is itself connected to long traditions of feminine papercraft and journaling. They are identity practices in addition to circulations of knowledge" (111). As digital-print hybrids, they can utilize the liveliest aspects of both: GIFS and images, the expandability and nonlinearity of hyperlinks, and other dynamic content online; but also the accessible, 'handmade', distributable, low-power novelty of paper at a moment of maximum screen fatigue. The print versions of these zines are formatted to print double-sided on a single 8.5x11" landscape page, making reversible two-part mini-zines (in multiple combinations as the library grows). 

In _Living a Feminist Life_, Sara Ahmed outlines "A Killjoy Survival Kit," which she says should contain books, things, tools, time, life, permission notes, other killjoys, humor, feelings, bodies, and your own survival kit (235--249). A "Toolkit for Intersectional AI" is both inspired by the kind of cooperative survival she calls for--"Protest can be a form of self-care as well as care for others: a refusal not to matter. Self-care can also be those ordinary ways we look out for each other [...] in queer, feminist, and antiracist work, self-care is about the creation of community, fragile communities [...] assembled out of the experiences of being shattered. We reassemble ourselves through the ordinary, everyday, and often painstaking work of looking after ourselves; looking after each other." (240)--and the toolkit I begin to imagine here is something I would want in my own survival kit, and something I hope others would want in theirs, too.  

#### table of contents for individual printable zines (also readable in full below)

- [zine 1: why intersectional AI?](/posts/field3-zineIntersectional) 
    - [printable version](https://cdn.glitch.com/eaa18b38-3765-4c0b-8304-2af139b6b542%2FCiston-Exam3-Zine1.pdf?v=1598184135754){:target="_blank"} 
- [zine 2: so you want to make better AI: a toolkit](/posts/field3-zineKit) 
    - [printable version](https://cdn.glitch.com/eaa18b38-3765-4c0b-8304-2af139b6b542%2FCiston-Exam3-Zine2.pdf?v=1598184135837){:target="_blank"} 
- zine 3: a better AI is possible: love notes to intersectional AI innovators 
    - (coming soon)
- zine 4: creative code collective: values & approaches 
    - (coming soon)
- zine 5: I know NO code: where would I even start? help! 
    - (possible future volume)


![insurmountable](https://cdn.glitch.com/eaa18b38-3765-4c0b-8304-2af139b6b542%2Fexternal-content.duckduckgo-49.gif?v=1598153303268)

<main class="zine" markdown="1">
<section class="zine-page page-1" markdown="1">
## why intersectional AI?

This mini-field-guide is part of a series looking at ideas, approaches, and examples bringing Intersectionality to AI. 

#### ["How is AI shifting power?"](nature.com/articles/d41586-020-02003-2){:target="_blank"} 

This is the most important question to ask, rather than is this technology biased, fair, or good, says [Pratyusha Ria Kalluri](http://riakalluri.com/){:target="_blank"}. They are a founder of the Radical AI Network and an AI researcher working on "ai and art that antioppressive and queerly beautiful." 

#### what intersectionality isn't 

Intersectionality is often misunderstood: In its original formulation by Kimberlé Crenshaw in 1989, says Brittney Cooper (2016), it was not merely shorthand for discussing individual identity representation. Critics point out how this has allowed for even more granular marketing to these categories as they become visible to and targeted by capitalism (Chun 2018, 85). Rather, intersectionality is about power. It examines and critiques systems of power and how those systems structure themselves to impact groups and individuals unequally. 

</section>

<section class="zine-page page-2" markdown="1">
#### what intersectionality is, what it can offer tech
Catherine D'Ignazio and Lauren Klein (2019) agree that intersectionality not only describes different aspects of an individual's position, but also "intersecting forces of privilege and oppression at work in a given society. Oppression involves the systematic mistreatment of certain groups of people by other groups. It happens when power is not distributed equally” (7–-8). Intersectional feminism insists on not just meeting the needs of the most priviledged (white) women when arguing for feminism, or the needs of only Black men when combating anti-Blackness, but instead suggests that those with overlapping oppressions such as Black women face unique additional oppression; by addressing their circumstances, for example, life improves for everyone. 

Jacqueline Wernimont (2018) uses the metaphor of a matrix, as in, "the media in which something is generated or developed. As a generative form, the matrix is a powerful way of understanding and critiquing binary logics and simple, progressive narratives" (11). Citing Vivian M. May, she says it also grounds intersectional practice and thought, "intersectional work focuses on 'enmeshed multiplicities,' including but not limited to those of race and gender. It also entails a commitment to 'resistant forms of knowing' [...]. The matrix logic of intersectional feminism 'considers how inequalities intermingle,' and stresses linkages between 'the structural and experiential, and the material and the discursive'" (11). This suggests how intersectionality could offer a different lens through which to approach AI and technology in general. Intersectional AI as sketched out here is indebted to Crenshaw's original definition, as well as the concept's long lineages within Black and indigenous thought, for its critical lens to analyze technology and for its creative approach to redesigning it.[^more]

<!-- [A matrix material can be the support for intersecting fibers...] moire, mesh net sifts sorts what stays and goes, could be the matrix what supports the new thing that emerges out of it-->

[^more]: Amelia Jones (2013) suggests a switch from thinking of fixed "identity" to instead "identification" that allows for the slippery, time-based, contingent nature of these concepts: "we must continue to acknowledge the ways in which bodies are identified and positioned in the world (including our own), while refusing to allow our assumptions about identity to congeal into fixed binaries" (6). This also resonates with Tara McPherson's (2018) idea of the "intersectional cut," which reclaims intersectionality as "a fuzzy edge and a point" (98), that is, acknowledging after Karen Barad the role of the lens in looking (and the ability to shift that lens to shift the view).  

</section>

<section class="zine-page page-3" markdown="1">
#### against inclusion, decentering instead
Guillermo Gómez-Peña says the high-tech world does not question itself as central, nor where it draws its borders: "We are no longer trying to persuade anyone that we are worthy of inclusion (we are de facto insiders/outsiders at the same time, or temporary insiders perhaps, and we know it). [...] What we wish is to remap the hegemonic cartography of cyberspace; to "politicize" the debate; to develop a multi centric theoretical understanding of the cultural, political and aesthetic possibilities of new technologies; to exchange a different sort of information (mytho poetical, activist, per formative, imagistic) [...]."[^continues]

Importantly, Christina Dunbar-Hester (2020) argues that "diversity and inclusion" fixes completely miss the problem---not only because it ignores the workers of the Global South[^workers] but also because it reverses the problem's cause and effect: "to frame social inequality as a question of diversity in technological production, and to expect to change wider inequities by adding 'diverse' individuals to technical cultures, is to misunderstand how the distribution of various social identities in a given sector are _outgrowths of differential social power_, not the other way around" (16).
 
By a similar logic, removing bias from algorithmic systems---even if that were possible (which, no.)---does not remove bias from culture, nor does it replace it with anything. Often, even well-meaning efforts to "remove" bias from systems fall back on quantitative / computational methods or resort to representation, which mirror the problems they claim to address, potentially even making tools to be misused in the future: "Representation as a goal may also result in accepting (and reproducing) notions of fixity in terms of social identity. This should raise skepticism" (236). These approaches do not examine the structure of the system itself, the logic upon which it is founded, both materially and intellectually. They do not ask who is creating, contributing, or benefitting from its operation. "Diversity [and, I argue, bias examination] is necessary, but not sufficient; it represents a shortcut in what should be a deeper conversation about values and justice" (Dunbar-Hester 2020, 241).
</section>

[^continues]: He continues: "and to hopefully do all this with humor and intelligence. Chicano artists in particular wish to "brownify" virtual space; to "spanglishize the net", and "infect" the lingua franca; [...] to find innovative grassroots applications to new technologies; to help the Latino youth literally exchange their guns for computers and video cameras, and to link all community centers through the net."

[^workers]: Lisa Nakamura, Sarah T. Roberts, and others have pointed to the many female and BIPOC tech workers who go unrecognized because their work is not the glamor work of tech, from the physically-taxing work of chip manufacturing on New Mexico reservations to the emotionally-taxing work of content moderation at sites just-off big tech campuses. Christina Dunbar-Hester (2020) argues that even "hacking has never been centered exclusively around white men in the Global North. Furthermore, some of what is required here is to simply shift the frame of what counts as hacking: to redraw boundaries to _place social and historical analysis and infrastructural care work within the purview of hacking._ In combination, these analytical adjustments can illuminate the 'others' of hacking---who are already here" (242). 


<section class="zine-page page-4" markdown="1">
#### algorithmic histories predict our futures

"Codes are both reflective and predictive. They have a past and a future," (3) says Ruja Benjamin (2019), author of _Race After Technology_. Benjamin uses <span class="purple-inline">**race critical code studies** (see p7)</span> to show how race itself is a technology that has been used to discriminate, even in decision-making processes that appear "neutral" or outside the scope of algorithms: "even just deciding what problem needs solving requires a host of judgments" (5).

"Data for Black Lives co-founder Yeshimabeit Milner reminds us that “[t]he decision to make every Black life count as three-fifths of a person was embedded in the electoral college, an algorithm that continues to be the basis of our current democracy." (5) 
{: .purple-inline}

#### What does it mean to say "race is a technology"?
Benjamin says, "this is an invitation to consider racism in relation to other forms of domination as not just an ideology or history, but as a set of technologies that generate patterns of social relations, and these become Black-boxed as natural, inevitable, automatic. As such, this is also an invitation to refuse the illusion of inevitability in which technologies of race come wrapped" (23).
</section>

<section class="zine-page page-5" markdown="1">
#### alternate histories, alternative approaches? 

The algorithm itself is an ancient, not exclusive to high-tech startups. "[C]laiming that abstract techniques of knowledge and artificial metalanguages belong uniquely to the modern industrial West is not only historically inaccurate but also an act and one of implicit _epistemic colonialism_ towards cultures of other places and other times. [...A]lgorithms are among the most ancient and material practices, predating many human tools and all modern machines" (Pasquinelli 2019). Instead of assuming AI must be how it is, it's worth asking what other cultural values might come with algorithms _from_ other cultures (not to appropriate those, but rather to decenter the supremacy of white neoliberal ways of knowing).

#### whiteness and AI
Benjamin argues that, "what appears to be an absence in terms of being 'cultureless' works more like a superpower. Invisibility, with regard to Whiteness, offers immunity. To be unmarked by race allows you to reap the benefits but escape responsibility for your role in an unjust system" (2). Although invisible, whiteness is a determining factor shaping AI, "structuring whose literal voice gets embodied in AI. In celebrating diversity, tokenistic approaches to tech development fail to acknowledge how the White aesthetic colors AI. The 'blandness' of Whiteness [...] is treated by programmers as normal, universal, and appealing" (15).
</section>

<section class="zine-page page-6" markdown="1">
#### the reach of AI requires intersectionality at every level

In "Anatomy of an AI System," Kate Crawford and Vladan Joler (2018) map out the vast tangible effects of convenient, immaterial-seeming AI that require: "a vast planetary network, fueled by the extraction of non-renewable materials, labor, and data. [...] it is hard to ‘see’ any of these processes individually, let alone collectively." And understanding isn't enough, they argue, "without forms of real choice, and corporate accountability, mere transparency won’t shift the weight of the current power asymmetries."

"To the casual observer, it looks like it has never been easier to build AI [creating] a false idea of the ‘democratization’ of AI. While ‘off the shelf’ machine learning tools, like TensorFlow, are becoming more accessible from the point of view of setting up your own system, the underlying logics of those systems, and the datasets for training them are accessible to and controlled by very few entities. In the dynamic of dataset collection through platforms like Facebook, users are feeding and training the neural networks with behavioral data, voice, tagged pictures and videos or medical data. In an era of extractivism, the real value of that data is controlled and exploited by the very few at the top of the pyramid." (Crawford/Joler 2018)[^crawford]
{: .purple-inline }

[^crawford]: Without an intersectional approach, including but not limited to more diverse participation in the design of, implementation of, and audience for AI systems, technological power and tangible resources will continue to be consolidated to benefit very few. The stakes are high and wide: "At every level contemporary technology is deeply rooted in and running on the exploitation of human bodies" (Crawford/Joler 2018). 

</section>

<section class="zine-page page-7" markdown="1">
#### race critical code studies
Critical code studies is an approach that suggests reading the code itself for its style, the influences of its authors and the choices they make, just like any other kind of writing: "lines of code are not value-neutral and can be analyzed using the theoretical approaches applied to other [texts] in addition to particular interpretive methods developed particularly for the discussions of programs" (Marino 2006). Because so much of coding originates not from a blank screen but adapts existing scripts and examples, being able to parse code both technically and critically is essential. Ruja Benjamin (2019) combines this approach with critical race theory for her "race critical code studies" methodology, which looks "at how race and racism impact who has access to new devices, as well as how technologies are produced in the first place" (22). 

#### restorative processing, infrastructures of care
Intersectional AI must be not just about remedying bias but more broadly about instituting infrastructures of care. For what and for whom do we truly care? And how do we demonstrate those values by reorienting (after Sara Ahmed) ourselves, our attention, our resources? Along with all of the harm caused by technological and cultural bias, framing these issues in the positive rather than the negative makes this a question, not just of what to remove, but of what to build in its place. 
</section>

<section class="zine-page page-8" markdown="1">

![justlikeyou](https://cdn.glitch.com/eaa18b38-3765-4c0b-8304-2af139b6b542%2FKatya-likeyou.gif?v=1598153822857)

#### a better AI is possible: love notes to intersectional innovators

Besides activism like protest or critical writing, another way to make change is "argument by technology"---aka making stuff---or even "hacks of open-technology communities themselves, which directly flow from practitioners' habit of reflective technical engagement" (Dunbar-Hester 2020, 50).

_So how do I make intersectional AI?_ For more info, see the other zines in this library, and for inspiration check out these makers and organizations helping envision different computational futures (an utterly non-exhaustive list):

- [Afrotechtopia](https://www.afrotectopia.org/){:target="_blank"}
- [<CTRL + SHIFT>](https://www.ctrlshift.club/)
- [Data for Black Lives](https://d4bl.org/){:target="_blank"}
- [@datahealing](https://www.are.na/neema-xx/data-healing){:target="_blank"} & [@cyberdoula](https://www.instagram.com/cyberdoula/){:target="_blank"} 
- [Deep Lab](http://www.deeplab.net){:target="_blank"}
- [Queer.AI](https://queer.ai/){:target="_blank"}
- [Tiny Tech Zines](https://www.instagram.com/tinytechzines/){:target="_blank"}
- [Virtual Care Lab](https://www.instagram.com/virtualcarelab/){:target="_blank"}

</section>
</main>


<main class="zine" markdown="1">
<section class="zine-page page-1" markdown="1">
## so you want to make better AI: a toolkit

This mini-field-guide is part of a series looking at ideas, approaches, and examples bringing Intersectionality to AI. 

#### no coding required 

#### bring your friends

</section>

![dontfuckitup](https://cdn.glitch.com/eaa18b38-3765-4c0b-8304-2af139b6b542%2FRu-dontfuckitup.gif?v=1598153546957)

<section class="zine-page page-2" markdown="1">
#### AI TO-DO LIST 

Keep in mind the following goals:
  - know it's about power
  - stay self-reflexive, polyvocal, multimodal
  - add back error, uncertainty, entanglement
  - combine tech & dialogue
  - entwine data, design, & community
  - embrace a meta ethics of multiplicity & relation
  - decenter European values & knowledge (and its own origin stories)
  - dedigitize sometimes
  - focus on infrastructures of care: mutual aid, start low & go slow
  - apply to every level in the stack, every step in the process
  - let intersectionality guide aesthetics, tactics, and ethics

_What is intersectional AI?_ For more info, see the other zines in this library.

</section>

<section class="zine-page page-3" markdown="1">
#### Black feminist ethics & tactics
The work by women of color is at the core of an intersectional critical practice. Safyia U. Noble, Brendesha Tynes, and Joshua Schuschke (2016) argue that founders of Black Lives Matter, three queer Black women, demonstrate community coalition-building skills applicable to digital spaces: "the movement’s reﬂexivity, the ability to counter hegemonic narratives, and self-care are key components of digital intersectionality. By modeling the standard of reﬂexivity, the movement is able to critique and correct its own narrative and practices” (28). This self-reflexivity is key to be able to adapt to changing circumstances as well as to the needs of the people your technologies are hoping to serve. 

_since this isn't my subject position or expertise area, here would be a great place to let other voices shine!_

#### embodying anti-white-supremacist values
The zine ["Characteristics of White Supremacy Culture"](https://www.dismantlingracism.org/uploads/4/3/5/7/43579015/zine_02.pdf){:target="_blank"} by [Tema Okun](https://www.dismantlingracism.org/white-supremacy-culture.html){:target="_blank"} details traits that permate the broader culture (and tech culture). They don't feel good, and avoiding them in life and when designing and implementing intersectional technology sounds like such a great idea:

~~perfectionism~~, ~~urgency~~, ~~defensiveness~~, ~~quantity before quality~~, ~~worship of the written word~~, ~~only one right way~~, ~~paternalism~~, ~~either/or thinking~~, ~~power hoarding~~, ~~fear of conflict~~, ~~individualism~~, ~~progress as bigger/more~~, ~~objectivity~~, ~~right to comfort~~
{: .purple-inline }

_Do you see these values in the digital objects and services you use now? How can you imagine them operating differently? What values would you replace them with? 

</section>

<section class="zine-page page-4" markdown="1">
<!-- ### feminist tactics -->
#### 7 Tenants of Data Feminism 
from Catherine D'Ignazio and Lauren Klein's (2019) book of the same name:
  - examine power
  - challenge power
  - elevate emotion and embodiment, valuing multiple forms of knowledge
  - rethink binaries and hierarchies
  - embrace multiple perspectives, prioritizing local, indigenous, and experiential knowing
  - consider context: "data are not neutral or objective. They are the products of unequal social relations, and this context is essential for conducting accurate, ethical analysis"
  - make labor visible so it can be valued
  
#### hosting a feminist server
Because it offers material access and control, running a "feminist server" can be a form of activism (anarchoserver.org via Dunbar-Hester 2020, 113--114). "For example, on the radical left, the group Riseup devotes server space to mirroring content for social justice organizations on at least three continents" (113). Some of the "principles for design and operation" include:
<!--   - is a situated technology, in context, part of an ecology of practice -->
<!--   - run by and for a caring community -->
<!--   - builds on the materiality of software, hardware, and the bodies gathered around it -->
<!--   - exposes processes, tools, sources, habits, patterns -->
<!--   - does not strive for seamlessness (not transparent as in invisible) -->
  - avoids efficiency, ease-of-use, scaleability, and immediacy because they can be traps
  - knows that networking is actually an awkward, promiscuous, paracitic practice
<!--   - decides her own dependencies -->
<!--   - questions the conditions for servicing and service, experiments with changing client-server relations -->
<!--   - wants mutable, read-write accessible networks -->
  - does not confuse safety with security, risks exposing her insecurity
  - tries not to apologize when she is unavailable
</section>

<section class="zine-page page-5" markdown="1">
#### queer reverb, queer refusal
<!-- #### NULL, break, reverb: queer affects find connection in refusal  -->
<!-- passing flagging? Choosing when passing/flagging (not an option for everyone) -->

Rather than assuming the goal for all systems is more visibility and more access, different approaches to AI could incorporate queer, feminist, anti-racist theories that understand some folks have other goals, even answering Gaboury's question: "how can we enact disappearance in such a way that does not erase difference?" (147). Citing black data,[^blackdata] alongsie "queer opacity [and] queer darkness as not only an aesthetic but an ethos" and calls for "forms of life that account for refusal as a situated practice---one that is explicitly raced and embodied, even as it would prefer not to articulate the situatedness of any single identity form" (148). This is not just resistence "but a refusal of the very terms of engagement" (149).

Gaboury offers a concrete example of how code can undermine the binaries it constructs: "The use of NULL [in place of a valid answer in a database] marks an indeterminate mode of being that is at once within and outside, part of and illegible to a discrete system of relations, a 'middle' that explicitly marks an indeterminate, incalculable, unknown state of being" (153). NULL is not zero or blank, nor is it quite an answer (like, say, male/female) that conforms to the field. It marks the inability to be known---"an excessive illegibility [...] within an otherwise normative system of relations" (153) and "a tactic of negotiated visibility that removes itself from the productive logic of the system that would seek to identify it" (154). 

If not indeterminate, then in looping, reverberating, proliferating refrain: Alexander Cho (2015) says, "if queer temporality is the condition, then refrain is the mechanics" (52). Cho points to Tumblr's "nonlinear, atemporal rhizomal exchange of affect and sensation, a 'queer reverb' of repeat and repeat; and there may be a possibility for this sort of transmission to buoy an antinormative or resistant politics" (47).[^Sunden]

</section>

[^blackdata]: Gaboury cites Shaka McGlotten's concept of 'black data', and the dehumanization of black and queer life to construct and stabilize the white political techno subject,  which I want to read up on next. "Centering black and queer life [...] offers a radical reformulation of the subtractive mode offered by the NULL marker as a technological form, that is, as a tactic of negotiated visibility that removes itself from the productive logic of the system that would seek to identify it." (Gaboury 2018, 154)

[^Sunden]: Another thread to this, space not permitting, is Jenny Sundén's "queer disconnection," which I have written on elsewhere: "If constant connectivity provides us with a relational norm of sorts, then disconnection could function as a queer orientation device with the potential of creating openings for other ways of coming together, and other ways of staying together" (Sundén 64). "Once we conceptualise or otherwise sense how the break, or the possibility of a break, is that which makes the signal, something happens to how relations can be conceived, and how they might feel. [...] the vulnerability and disruptive quality of digital media can help us envision modes of being together in ways that challenge the norm of uninterrupted connectivity and relatedness." (Sundén 73)
{: .purple-inline }

<section class="zine-page page-6" markdown="1">
### more strategies from makers in the field 

#### ai as a craft 
Could contemporary AI work draw on the work of feminist handmade media makers and the long histories of feminine and indigenous handcraft practices? Three qualities these works often share, which 
- embodied, often literally using the body or investigating the situated/particular self in concrete ways
- continually iterative, slow and explorative, rather than strictly goal-oriented
- community-focused, often in domestic or caretaking spaces, work that is functioning or proving as well as expressing

#### how to write nonviolent creative code
"honor the land, honor the body, honor the small, honor the exchange" [p5.js Contributors Conference](https://docs.google.com/presentation/d/19xxc2zWWdFMAQjT6tRdN5ZU13vAKSwM7jojaC2U4F6Q/edit#slide=id.g5fc8f78ea6_1_99){:target="_blank"} 

#### creative code collective
MA+P's Creative Code Collective values include (and we continue to develop these in community): 
- cooperation not competition
- scrappy artistic strategies not perfect code
- creativity as collective wayfinding
- project-based and process-oriented
- growth not perfection
</section>

<section class="zine-page page-7" markdown="1">
#### how ~~not~~ to structure your organization

Tips from _Hacking Diversity_ by Christina Dunbar-Hester:

_But I want everyone to feel good, so no one should be in charge, right?_

Rather than "shelving hierarchy entirely," many BIPOC and LGBTQ/feminist hackerspaces prefer "an accountable, transparent hierarchy" that is "as horizontal and distributed as possible, instead of having unofficial leaders "who govern through "charisma, reputational capital or technical prowess. [...] A culture of valorizing technology itself, and especially granting certain people star status through their technical prowess and willingness to claim credit for technical accomplishments, [is] part of the problem" (89).
{: .purple-inline }

_Should I work within existing structures or create my own?_ 

"Many advocates pursue both mainstream intervention and separate spaces simultaneously, recognizing that each has utility and that it is not an either/or situation" (70).
{: .purple-inline }

_What's important to know in working with others?_

Prioritize clear documentation (and other skills valued besides just 'hard coding') and "collectivized communicability" as part of your politics (82--83).
{: .purple-inline }

_Isn't the barrier to entry to high to even try?_

"[It's] 'not patronizing to meet people where they're at. [...] Find a device you already use, take out the proprietary crap that controls it, and control it yourself'" (108).
{: .purple-inline }

For more ideas for community guidelines, like "no well-actuallys, no feigning surprise, no backseat driving, no subtle -isms," check out [Recurse](https://www.recurse.com/social-rules){:target="_blank"}.

</section>

<section class="zine-page page-8" markdown="1">
#### Types of Creative-Critical-Code Interventions: What can you imagine? What will you make?

- **Inform:** provide or reveal information that already exists or is hidden
- **Challenge:** disrupt, troll, converse, intervene, activate, ask questions
- **Reimagine:** redesign, reframe, recontextualize, sketch out
- **Reflect:** aesthetic, artistic, affective, contemplative, essayistic
- **Resource:** convene, make space, provide access, provide goods or services, teach or share, ask (someone else might need the same thing)

"Database design, in that way, is “an exercise in worldbuilding,” a normative process in which programmers are in a position to project their world views---a process that all too often reproduces the technology of race." --Ruja Benjamin, _Race After Technology_ (54)
{: .purple-inline }

"a project may be feminist in content, in that it challenges power by choice of subject matter; in form, in that it challenges power by shifting the aesthetic and/or sensory registers of data communication; and/or in process, in that it challenges power by building participatory, inclusive processes of knowledge production. What unites this broad scope of data-based work is a commitment to action and a desire to remake the world." --Catherine D'Ignazio & Lauren Klein, _Data Feminism_ (18)
{: .purple-inline }

_Thanks and credit to Creative Code Collective, students of MA+P, and Feminist.AI for care & feeding of these ideas._ 

</section>
</main>

<!-- closing remarks/gifs outside the zines, instructions? -->