---
title: co-writing with algorithms
nav_order: 4
has_children: true
last_modified_date: 2020-08-19 02:37
<!-- wc: wordcount -->
---

{% include glossary.md %}

{% include references.md %}

<iframe width="266" height="150" src="https://www.youtube.com/embed/SznhRaT77G8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <iframe width="266" height="150" src="https://www.youtube.com/embed/JKLh31VH5iM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

(part 2 is live, part 1 got cut off for a copyright violation in French Polynesia/Monaco for music playing in the background!)
{: .fs-3 }

# co-writing with algorithms

#### exam question

_In your description for Field I, you note your interest in “the entanglements of self/other/technology” and how these entanglements “get enacted, distributed, absorbed, and reworked.” The writers that you have included on your list have very different views regarding these entanglements, especially as they relate to code and software. As Wendy Chun writes, for example, the “relationship among code and interface, action and result is always contingent and always to some extent imagined.” She goes on to outline an argument for code as fetish, as sourcery, and as re-source by emphasizing the gap between source and execution. Choose at least three central thinkers from your list and describe their articulations of the entanglements of self/other/technology/code/software. If it’s useful, include examples from your list of artworks as well, and/or discuss the framework you created to respond to your exam questions. What does it allow you to enact in relationship to this field? What entanglement(s) are you hoping to create?_
{: .fs-2 }

#### exam response, in progress

{% assign wordcount = page.content | strip_html | split: ' ' | size %}
word count: {{ wordcount }}
{: .fs-3 }
<!-- bring this var to data page? -->

Field exam will appear here supplemented by the surrounding pages. Watch the livestream and refresh this page to read along.
{: .fs-3 }

Things I might like to talk about also within this question: 
- **a politics and poetics of coauthorship** in linguistic capitalism within my self-other-tech framework (voice, form)
- how do we make forms that reveal their cultural systems and gaps/obfuscations, how does the "suite" (or is another form better) of work do this work? historical forms that could help? suite/collection, mesh-y, kaleidoscopic can't be all-seeing, multiperspective, polyvalent
- in a new framework what are the replacement knowledge systems/between spaces/borders 
- **ephemerality of digital platforms, decomp**
- the **so what**, why this framework matters
- terms may help: queer digital insterstitial poetics, spark gap (separate connected), organic intelligence
- my work to discuss?: inner voice over, spark gap, modify the loss
- other artworks?: gertrude stein, jenny holzer, MEZ, eve language, allison parrish's compasses, sasha pohflepp's recursion, joanna moll's co2gle & the hidden life of an amazon user. additionally, corporate projects like Mozilla Common Voice or GPT-2/3 et al?
{: .fs-3 }

## 0. introduction

_Hook/question/my arg_

**Through this writing, combining approaches from the scholarship in this field... am I arguing for an approach to code language that is specific, entangled, multiply situated, emergent...? And what does that look like, do, create, and why does that matter? **

Most of the theorists across media studies, software studies, and related fields whom I'll discuss here share a common argument that 1) some distinction is to be made between code language and 'natural' or 'human' language, 2) that there are distinctions between the levels or types of code languages that constitute a more complete computational system (usually differentiated by their degree of abstraction away from binary or machinic understanding and toward human understanding or interface)

Each theorist may define their terms and draw the boundaries between them in different places, and raise different stakes on the nuanced distinctions, which I will detail further; however, a primary shared concern remains to unpack the relationships between parts of these complex systems---networked human-machine social assemblages--which their complexity obscures. While abstraction can be necessary to operate (hard to drive a car if thinking about all the ways it works at once), when abstraction contributes to mystification and loss of agency, encapsulation and individualism, or ***probably the third thing I'm forgetting, The extractive/capture of .... and the narrowing of possibilities as they are privatized (power consolidation), the belief that we cannot understand or alter systems (mystification), transfer agency to inanimate objects, etc. XXX COME BACK TO THIS XXX** 

**update for what I actually did, talked about code, then subjects, then...**
First I will discuss how **XX** authors have characterized the distinct properties of code language and its entanglements with self/other/technology, describing how they may intersect or conflict. Then I will outline my framing of a more porous relationship of languages (both coded and natural), other technological tools, selves, and others. I will draw on examples from my own body of artistic research practice as well as from historical and contemporary artists to discuss what kinds of artworks, entanglements, and **somethingsXXX** this framework potentially produces for the field---in particular by revealing how obfuscated aspects of these systems work, by finding emergent possibilities in the gaps and excesses, or **other thing GS/other/corporate**. Throughout this discussion, **I will break out/pull in code snippets** and moments of writing that produce this document(?) to help point to or begin to sketch possibilities for a ***critical-creative-code writing** that both describes and enacts this framework.[^Logs]

[^Logs]: Example, check the logs of this live code by visiting the link in the upper right corner of the site, then when the source code is shown, click tools at the bottom left, then Logs. You'll see a running thread of the server-side processes printed out as the site builds and rebuilds each time changes are made or data is updated.

## 1. specificity

### 1.1 layers & gaps, abstraction & obfuscation

When someone says 'code' they might be referring to any number of kinds of writing intended for machines, and possibly people, to interpret: 

>Within the field of networked and programmable media, at the very least, we can acknowledge: machine codes, tokenized codes, low-level languages, high-level languages, scripting languages, macro languages, markup languages, operating systems and their scripting language, the human–computer interface (HCI), the procedural descriptions of software manuals, and a very large number of texts addressed to entirely human concerns. (Cayley 2018, 56)

Many of these types of code may be running in the same system, most types have a variety of languages and even dialects to choose from, and may be used for different purposes or genres, and written in different styles---which means that, at each juncture of design and implementation, their human designers must make choices, informed by culture, context, training, and understood goals. To say, "it's just code" or "it's hard-coded" or "the computer decided" erases both the hundreds of human decisions and the likely millions of binary decisions involved. 

Just as the humanities has strong close-reading practices to analyze text and paratext for many other forms of media, these types of code should be read for all their stylistic and contextualized choices. The Critical Code Studies approach, established by Mark Marino (2006), views code "as already having meaning beyond its functionality since it is a form of symbolic expression and interaction.” He argues, further, "there are implications in the way a code tries to perform a function that bear the imprint of epistemologies, cultural assumptions about gender, race and sexuality; economic philosophies; and political paradigms. This brief litany does not begin to get at the more computer-specific issues." This view of code(s) begins to demonstrate a) the distinctions between types of codes, b) the paratextual and social/cultural aspects that code also carries, and c) some ways code may have more in common with other forms of writing than it is generally assumed. Marino says, "code is not merely instrumental but rather a performative, transformative, mediating process."

So, while I may say "code" or "software" or "computation" and sometimes I may say it to avoid saying exactly what I mean... the things that code is include _many_ layers. And there are _many, many_ layers of conflation happening in the cultural conceptions of code, which at their extreme tend to mystify any specific computational media object one could otherwise  engaged: “interfaces stand in, more often than not, for the computer itself, erasing the medium” (Chun 2008, 318). 

The mystery and power associated with technology (or tools, and perhaps in particular with language tools) precedes computation, of course. Florian Cramer (2005), tracing the history of executable language, says at the outset, “technology is semantic, ecstatic and magic” (18). This religious (or at least inexplicably powerful) quality is the focus of Wendy H. K. Chun's (2008) critique: “The reduction of computer to source code, combined with the belief that users run our computers, makes us vulnerable to fantastic tales of the power of computing. To break free of this sourcery, we need to interrogate, rather than venerate or even accept, the grounding or logic of software” (300). She begins to interrogate this logic by distinguishing the language of code from the additional processes required to put it into action and from the results of those actions, plus explaining in part why these distinctions matter: 

>The goal of software is to conflate an event with a written command. Software blurs the difference among human-readable code (readable because of another program), its machine-readable interpretation, and its execution by turning the word "program" from a verb to a noun, [...] by turning execution into inscription---or at least attempting to do so. [...T]his conflation of instruction or command with its product is also linked to software’s gendered, military history: in the military, there is supposed to be no difference between a command given and a command completed, especially to a "girl." (303–304)

By flattening the software--hardware infrastructure and shifting from verb to noun, Chun seems to argue that a static inevitability or obscure magic replaces or simplifies the agency, or transfers it to the black box and away from potential interventions. It would be fascinating to expand on this linguistic interpretation by contrasting it with Nathaniel Mackey's (1992) "Other: From Noun to Verb," which in part discusses Amiri Baraka's "poetics of process": "The sense he advances that 'this verb value'" is an impulse to 'make words surprise themselves'" (60). While that is perhaps outside the scope here, I recognize and value the attention to word choice and tracing such slippages, which often go unnoted but carry material and epistemological repercussions. 

These repercussions do not stop at readable code or at the digital, but are felt across all the computational layers described by the scholars discussed here. While Chun disentangles the specificity of each layer from another, her argument suggests that this more nuanced understanding supports reckoning with the complexly entangled relationships between these layers and cultural systems/individuals they affect: 

>This erasure of the vicissitudes of execution coincides with the conflation of data with information, information with knowledge---the assumption that what’s most difficult is the capture, rather than the analysis, of data. This erasure of execution through source code as source creates an intentional authorial subject: the computer, the program, or the user, and this source is treated as the source of meaning. (316)

With the loss of the "vicissitudes of execution," she claims, the archetype of the user and of the computer are embued with undue meaning and agency, without the context of the operations that support---and more importantly influence, shape, and limit---that agency. 

### 1.2 material & ephemeral, entanglement and estrangement

This problem is not exclusively digital, computational, or contemporary. Sadie Plant (1998), in her cyberfeminist history of computing, describes how the material of weaving became estranged from the practice of weaving: 

>whereas the weave was once both the process and the product, the woven stuff, images are now separated out from matrices to which they had been immanent. The artist sees only the surface of a web which is covered as he works; the paper on which authors now look down has no say in the writing it supports. <span class="purple-inline">_The processes themselves become dematerialized as myths, legends, and metaphors_.</span> (68, emphasis added)

Dennis Tenen (2017) draws attention to a not-dissimilar gap created by the presentation of texts in digital formats: "A substantial gap separates visible text from its storage medium. The two sites of inscription, screen and electromagnetic storage, are physically incongruent. One must be translated, transformed into the other" (9). Later builds on the implications of this estrangement by suggesting that this is what contributes to digital texts seeming ephemeral: "The inscription passes from view. The sign reappears again on-screen, already processed, that is, altered by the intervention of control units. Reading no longer identiﬁes solitary, self-directed activity. Machine operators far removed from the site of interpretation intervene between readers, writers, and texts” (102).

These gaps between inscription and execution, between representation layer and storage medium, text and paper, do not mean however that these works are merely immaterial information, as is often assumed about digital objects or about language in general. N. Katherine Hayles (2005) argues that in fact the materiality of such works is produced _through_ their unique combination of physical properties and linguistic strategies---pointing to a richer relationship between materiality and meaning: "materiality [...] cannot simply be collapsed into physicality but is an emergent property generated by interactions between a work's signifying strategies and the physical characteristics it mobilizes as resources for its operations" (9). She builds on this expanded definition of materiality as a call for other kinds of entanglements as well. She suggests not only "complex transactions between bodies and texts as well as between different forms of media" (7), but also "different models of subjectivity than those usually assumed in textual editing, as well as changed concepts of how embodied texts relate to one another" (9). **for whom, how? does she say? specifics available?** Hayles traces certain continuities across analog and digital media, and lays out many of the primary concerns for scholars for the next decades. While the entanglements she outlines more broadly across media are useful, when discussing code the specifics tend to tangle. 

### 1.3 citational is relational

Where Chun aims to disentangle the specifics of code as noun and verb, object and action, Hayles wants to re-emphasize the entanglement of physical object and signification in their co-roles for materiality, and the entanglement of texts with each other. Both are interested code as performative or as "speech act" or more broadly as performative. In contrast to Chun's specificity, Hayles perhaps **overentangles, conflates, or overemphasizes** the executable aspect of code language (as performative) at the expense of the other processes involved. 

Hayles portrays code as distinct type of language because it enacts itself, and she details further differences between code languages and other human languages, including, "Nor does code allow the infinite iterability and citation that Derrida associates with inscriptions, whereby any phrase, sentence, or paragraph can be lifted from one context and embedded in another" (48). While I argue examples like Git versioning, StackExchange, object-oriented programming, the Free Libre Open Source Software (FLOSS) ethos, and maybe even the concept of variables could be counterpoints to this, as each allows for lifing, embedding, reiterating, and citing practices. Meanwhile Chun points directly to the citational nature of code, rather than just its executability, that makes it performative:  

>understanding code as re-source links its effectiveness to history and context. <span class="purple-inline">_If code is performative, it is because of the community (human and otherwise) that enables such utterances to be repeated and executed, that one joins through such citation._</span> [...] what is crucial to a performative utterance’s success or failure is its iterability, [...] What is crucial here is: first, code that succeeds must be citations---and extremely exact citations at that. <span class="purple-inline">_There is no room for syntax errors_;</span> second, that <span class="purple-inline">_this iterability precedes the so-called subject (or machine) that is supposedly the source of the code_;</span> and third, and most importantly, <span class="purple-inline">_an entire structure must be in place in order for a command to be executed. This structure is as institutional and political as it is machinic._</span> (322, emphasis added)

While I will discuss later where I think error may emerge as a useful component, I support the citational, iterable view of code that situates it in context of its human creators and audiences, as well as within technological infrastructures. This view also connects it to other writing practices, community practices, and subjects; and it connects the iterable, recursive properties of code to its perforative, interpellating properties. 

I would maintain the need for some specificity that can parse differences between digital and analog, between coding languages and other human languages, but not so much that insists upon ignoring their commonalities or granting those differences too much power or magic, erasing our human roles and agency in the process. Rather, I am interested in how these living languages may operate across a spectrum and influence each other as they evolve together.

## 2. entanglement

### 2.1 self--other--technology systems

The work of clarifying code and its position(s) in computational and cultural systems also helps clarify its entangled relationships with individuals, as Chun and Hayles began to touch on above. Viewing self--others--tech as a messy interrelated set of systems is important as the frequency of digital encounters nears continuous and as the impact and influence of digital languages and other technological objects grows:

>This may seem strange at ﬁrst: to recover the subject in the physical minutiae of the encounter between text and machine. The point of contact between human, text, and device is signiﬁcant because it is in the liminal zone of semiotic exchange where subjects disappear into machines and where machines step forth as animated and seemingly intelligent actors. Our ability to apprehend the politics of smart objects depends on the formulation of their poetics: how they are made. (Tenen 2017, 10)

Again, and as Tenen (2017) argues here, allowing the 'subject' to disavow agency as we imagine the 'machine' acquires it is a dangerous obfuscation of the how and what of computing. Here, in this "liminal zone of semiotic exchange" where human, text, and device make contact, I would argue that subjects do not disappear but are produced or reconstituted as yet-again individuated, performative, digital.[^reader-writer]

[^reader-writer]: As I have written about elsewhere, they are also produced as reader-as-writer (citation ELO 2018 TK).

### 2.2 embodyment from analog continuum to digital discrete

Although almost no one would call writing a digital technology, Anne Carson (1998) traces the emergence of written language through the transition from oral epic poetry to written lyric poetry. Through this process she connects the boundaries drawn between sounds in order to create letters with the boundaries drawn between people and their environments, tools, and each other in order to create their sense of self:

>A written text separates words from one another, separates words from the environment, separates words from the reader (or writer) and separates the reader (or writer) from his environment. Separation is painful. [...] As separable, controllable units of meaning, each with its own visible boundary, each with its own fixed and independent use, written words project their user into isolation. [...] Heard words may have no edges, or varying edges; oral traditions may have no concept of 'word' as a fixed and bounded vocable, or may employ a flexible concept. Homer's word for 'word' (_epos_) includes the meanings 'speech,' 'tale,' 'song,' 'line of verse' or 'epic poetry as a whole.' All are breathable. The edges are irrelevant. (50)

In this breathable, expandable definition of oral language, it seems a more porous sense of self prevailed. It was not until exposure to "a written alphabet and the demands of literacy" that focus shifted to "deliberate meditation upon the self" and "a heightened awareness of personal physical boundaries and a sense of those boundaries as the vessel of one's self. To control the boundaries is to possess oneself” (44). The paradigm shift from speech to writing is evident in the move from the epic to the lyric. Carson marks fragmentation, disjointed rhythm and flow: 

>we see people struck by new ways of thinking about edges---the edges of sounds, letters, words, emotions, events in time, selves. This is apparent in the way they use the materials of poetry, as well as in the things they say. Contraction and focus are the mechanism of lyric procedure. [...] Epic formulas of phrase and rhythm pervade lyric poetry, but they are broken apart and differently assembled in irregular shapes and joins. (51)

With the historical perspective of thousands of years, Carson is able to detail how the technological shift adopting written language as a widespread tool created shifts in content and form of media, but also in conceptions of identity itself. If written language was a harbinger of Western individualism, of course it would be an important counterpoint to examine how non-European traditions processed similar transitions perhaps differently. Would another thousand years show contemporary shifts to digital culture as paradigm changing or progressing along the same continuum? My answer is yes. Including written language as one of the forms of technology discussed here expands the context for any 'precident-setting' change, while also showing the comprehensive imbrication of subjects and tools. 

>To anyone trained in this way [learning writing by copying letterforms] the edges of letters are memorable, emotional places, and remain so. (Carson 1998, 57)

### 2.3 self is a (relational) technology 

Above, Hayles and Tenen suggest a new understanding of subjectivity through the lens of computation, and Geoff Cox emphasizes the code-like reciprocal nature of the relationship between code and self. His book _Speaking Code_ (2012) does view code as speech act, but also goes further to situate it in relation to political[^pessimistic] and relational subjects: "both subjectivity and code recursively write their own instrumentation. Yet the subject is not simply preprogrammed like a machine but more like code in actively combining internal and external factors, standing between what is possible and what actually exists" (109). This is reminescent of Roland Barthes' (1989) open approach to text, and (while the "death of the author" helped a decade of scholars erase the importance of subjectivity and subject position by pejoratively labeling it "just identity politics") his focus on the interconnectedness and instability of the sign, even and especially with non-digital text, remains useful:

[^pessimistic]: Interestingly, while subscribing to the code-as-speech-act approach, Cox uses its performative qualities to make a pessimistic argument about on how code limits the possibilities for political and collective action (while making those possibilities appear enacted). **talk about in relation to IVO if time?** "scale-free networks like the Internet naturalize the fantasy of global unity, foreclose wider discussions of the underlying command and control structures. Participatory and collective forms of communication and political expression may become part of the very mechanism of guaranteeing their nullification—in the production of empty speech acts." (Cox 2012, 91)

>"The text, only the text," we are told, but "only the text" does not exist: [...] every reading derives from trans-individual forms: the associations engendered by the letter (but where is that letter?) [...] are always caught up (sampled and inserted) by certain codes, certain languages, certain lists of stereotypes. [...] Where do these rules come from? Certainly not from the author, who does nothing but apply them in his own way [...]; visible apart from him, these rules come from an age-old logic of narrative, from a symbolic form which constitutes us even before we are born---in a word, from that vast cultural space through which our person (whether author or reader) is only one passage. [...T]o read is to make our body work [...] at the invitation of the text's signs, of all the languages which traverse it and form something like the shimmering depth of the sentence. (31)

<span class="purple-inline">_To read is to make our body work [...] at the invitation [...] of all the languages which traverse it and form something like the shimmering depth of the sentence._</span> Depending on how we read the phrase, it is our body which forms the sentence, or something like its depth. <span class="purple-inline">_trans-individual forms [...] always caught up_</span> 

The database is one of the most associative forms we have, certainly computationally, and Mark Poster (1995) argues that databases consitute a shift in power and linguistic structure that I would liken to Anne Carson's account of the transition to written language. The catch of being "caught up" here by "certain codes" (Barthes 1989, 31), though, takes on new stakes when amplified digitally. Poster says, “The cultural function of databases is not so much the institution of dominant power structures against the individual but in restructuring the nature of the individual” (93). Poster uses Althusser and Foucault to detail how the subject is hailed differently by a database than by the author of a linear text, in that the writer is often known and the reader chooses to be interpellated; whereas "Interpellation by database is a complicated configuration of unconsciousness, indirection, automation, and absent-mindedness both on the part of the producer of the database and on the part of the individual subject being constituted by it" (90). This shifts the process of identify formation and subjectification within a Foucauldian reading of biopower. In particular he points to the affordances of the relational database that allow data from different databases to be indexed against each other, combined, and redistributed:  

>The process of subject constitution was [once] one of "subjectification," of producing individuals with a (false) sense of their own interiority. With the super-panopticon, on the contrary, subject constitution takes an opposing course of "objectification," of producing individuals with dispersed identities, identities of which the individuals might not even be aware. (93)

This distributed sense of identity is a far cry from the self-contained individualism of rational modernism (and that any of these 20th century authors talk even then of "the subject" as singular and unified with a straight face is beyond me), and Poster suggests its fragmentation by database calls for different politics than for autonomous individuals: "we need to understand the forms of agency appropriate to a dispersed, multiple subject and to generate strategies of resistance appropriate to that 'identity formation'" (93). 

The epistemological shifts that coincide with technological shifts,
each points to the tenuous nature of self, that self itself is (can be thought of as?) a conceptual tool/epistemological (Foucault, this is field 2)**

Point to a process-oriented self! Not just interconnected, spacially, but temporally. Constituted by its operations, acting and acted upon, in tandem... this is all field 2 though... lean more on the tech part? 

### what is a self in this system? 

Calvino author is writing machine, in the writing process: 
>“And in these operations [of my own writing] the person "I," whether explicit or implicit, splits into a number of different figures: into an "I" who is writing and an "I" who is written, into an empirical "I" who looks over the shoulder of the "I" who is writing and into a mythical "I" who serves as a model for the "I" who is written. The "I" of the author is dissolved in the writing . The so-called personality of the writer exists within the very act of writing: it is the product and the instrument of the writing process. [...] Writers, as they have always been up to now, are already writing machines; or at least they are when things are going well” (Calvino 1987, 15). 


Both Chun and Hayles argue that code precedes subjectivity... because it's citational, because it's happening at spacial and temporal scales outside the scope of human sensorium (but not because they are without human influence). 

~~“Because it is a frequent point of confusion, I emphasize that these dynamics happen before (or after) any human interpretation of these messages. Whatever messages on screen may say or imply, they are themselves generated through a machine dynamics that has little tolerance for ambiguity, floating signifiers, or signifiers without corresponding signifieds.” (Hayles 2005, 47)~~
_It's a complex question but it's untrue, humans wrote them somewhere, but true that they happen on different scales, affect us other humans before we realize (relate to parisi, et al, scale_


## 3. multiply situated & emergent

>“the possibility of machine phenomenology in relationship to humanism. “Computational poetics, I maintain, encourages users to become active thinkers, tinkerers, and makers of technology” (Tenen 2017, 12).
_w/parisi?_

#### Parisi
>"“digital machines are now embedded with a seamful environment of data, in which each level of computation extends into another: not through seamless compatibility but through the incorporation of incomputable data within systems. [...] the pervasive extension of algorithmic logic has now become attuned to alien regions of perception and cognition. These are zones occupied by abstract yet real incomputable states that interfere with computational calculus by **anticipating new conditions of spatiotemporal experience**” (Parisi 2013, 26) …”important to [...] distinguish this architecture from, the notions of interaction and responsiveness that have been developed in the context of ubiquitous computing” (Parisi 2013, 26) _Vagus, trauma, sensory, unconscious, pre, wander._
>“the effects of the unknown have become the causal motor by which control is unconditionally exercised and driven by immanent decisions about what has not yet happened” (Parisi 2013, xvii) _her "soft thought_"
>"programming culture is infected by incomputable thoughts that are yet to be accounted for. (Parisi 2013, xviii)

While careful to remove mysticism, perhaps room for the alien or non human comprehensible components, kinds of thinking that are not... contrast these with Chun's critique of sourcery


### 3.1. artists & aliens

What can an artistic research practice do to a) reveal the workings of these relational systems and b) reveal the potential in their gaps and glitches, errors and excesses? [Joanna Moll]http://www.janavirgin.com/'s [CO2GLE](http://www.janavirgin.com/CO2/CO2GLE_about.html) and [The Hidden Life of an Amazon User](https://www.janavirgin.com/AMZ/) speak to the former and [Allison Parrish](http://www.decontextualize.com/)'s _[Compasses]_ speaks to the latter. 

A) In Moll's [CO2GLE](http://www.janavirgin.com/CO2/CO2GLE_about.html) and [The Hidden Life of an Amazon User](https://www.janavirgin.com/AMZ/) their backend becomes frontend as the works themselves are about the use of the systems that enable their use ***rephrase**

B) The excess beyond linguistic capitalism, exemplified in recent work by [Allison Parrish](http://www.decontextualize.com/): "In "[Compasses]," I used this model to generate new imaginary words that exist in the negative phonetic spaces between the phonetic hidden states corresponding to names of members of well-known quartets."

>Kaplan? _linguistic capitalism, the space between words_ **maybe use this in the excess/artist section?**
>“Autocompletion services can transform linguistic material without value (not much bidding on misspelled words) into a potentially proﬁtable economic resource” (Kaplan 2014, 60)
>“human readers can tell the difference based on a feeling of oddity induced by texts produced by algorithms. These oddities are due to speciﬁc lexical or syntactic biases of these algorithms that often produce syntactically correct sentences—that no natural speaker would ever write.” (61)
“natural languages could progressively evolve to seamlessly integrate the linguistic biases of algorithms and the economical constraints of the global linguistic economy.” (61)


[Compasses]: http://sync.abue.io/issues/190705ap_sync2_27_compasses.pdf
![compasses1](https://cdn.glitch.com/eaa18b38-3765-4c0b-8304-2af139b6b542%2FParrish-Compasses1.png?v=1597783585780)

Gertrude Stein (2014, 1914): accretion, writing that works like machine writing before machine writing, other kinds of thinking/knowledge/processing, reads like im2txt caption/computer vision ID, process of accretion toward meaning that happens in the reader/recipient is pattern finding whether machine/human (this distinction is sketchy but important to some theorists?) But there are patterns and recombinatorics even in instinctive processes: "Act so that there is no use in a center. A wide action is not a width" (Stein 2014, 1914, 63). And then later, "A willow and no window, a wide place stranger, a wideness makes an active center" (Stein 2014, 1914, 75). As Calvino (1987) argues, the author 'I' is a writing machine, constructed with the writing; she is "the product and the instrument of the writing process" (15). _read some of my screens re-written by gpt-2 into it?_

**additionally, corporate projects like Mozilla Common Voice or GPT-2/3 et al?**



### 3.2 to enact, or entanglements, or emergent --- conclusion?
writing with/against (Raley/Hupaniemi)

>Hayles on Saussure: “The syntagmatic vector points horizontally, for example, along the syntax of a sentence. By contrast, the paradigmatic vector operates vertically, for example, in the synonyms that might be used in place of a given word in an utterance” (52)
This is the NLP interpretive error moment of the leap, where the paradigmatic interrupts the syntagmatic.
Hayles on Derrida right after: “Derrida's deconstruction of this hierarchical arrangement is typical of his treatment of hierarchical dichotomies in general, for he shows that the privileged term must in fact contain and depend on what it tries to exclude. "The exteriority of the signifier is the exteriority of writing in general,’” (53). 
“In digital media using dynamic databases, this relationship is reversed. The paradigmatic alternatives are encoded into the database and in this sense actually exist, whereas the syntagmatic is dynamically generated on the fly as choices are made that determine which items in the database will be used. In this sense, the syntagmatic is virtual rather than actual. This insight opens onto further explorations of how databases and narratives interface together, especially in electronic literature and the more general question of literariness” (Hayles 2005, 53).
...“This richness is possible, of course, only because all these possibilities are stored in the computer, available to be rearranged, interpolated, followed or not. Somewhat paradoxically, then, the more data that are stored in computer memory, all of which are ordered according to specified addresses and called by executable commands, the more ambiguities are possible. Flexibility and the resulting mobilization of narrative ambiguities at a high level depend upon rigidity and precision at a low level. The lower the level, the closer the language comes to the reductive simplicity of ones and zeros, and yet it is precisely the ability to build up from this reductive base that enables high-level literariness to be achieved” (Hayles 2005, 53-54).


### conclusion: specific, entangled, situated, emergent

**close this section with this quote?**
#### tenen pt 1
> “Despite its formative effect on practices of comprehension, code, the programmatic sign, does not often ﬁgure in our theories of meaning making. Instead, we consign it to the ornamental formatting layer of document structure. We do so at our peril. [...] Code is an exercise of power, not its representation. The difference between representation and control is one of brute force. It lies in the distinction between a restraining order and physical restraint” (Tenen 2017, 47–48) 

_is it both, what do we mean when we say code, do we mean the word, or the whole system enacting it? have to call for a reading that actually reads the text but also looks at its context. no algorithm studies that doesn't scale, requires different readings at different levels working together to comprise a system...this is why a suite or a better metaphor for this matters?_


---

### Quotes I'm Not Using

#### others

>Sobchack?

>"signifiers of voltage differences" (Kittler 150)

> “The representation of codes, whether binary, assembly, or high-level, can therefore only ever be that: a representation of what is happening at the machine level.” (Raley, "Code Surface")

### error/excess potential (bring back?)
>“‘this assertion does not hold true literally for code, where the contexts are precisely determined by the level and nature of the code. Code may be rendered unintelligible if transported into a different context-for example, into a different programming language or a different syntactic structure within the same language. Only at the high level of object-oriented languages such as C++ does code recuperate the advantages of citability and iterability (i.e., inheritance and polymorphism, in the discourse of programming language) and in this sense become “grammatological:’ “ (Hayles 2005, 48) _ok sure but isn’t that what we’re also talking about, Also true with natural language, her argument is stretched and unclear here._

**Both say no room for error, yet error creates space, break, poetics, the very paradigmatic possibility outside the interpellated DB Hayles describes**
>“changes on one level of programming code must be exactly correlated with what is happening at all the other levels. [...] For the machine, obsolete code is no longer a competent utterance.” (Hayles 2005, 47) _Errors don’t break the computer completely, something else does occur, in ML other emergent systems other things happen. In abstraction, nothing is exactly correlated?_

And N. Katherine Hayles **, using both print books and digital text, makes an argument for additional kinds of entanglement but unfortunately [lacks/loses] some of the specificity of Chun**


>“Enmeshed within this ﬂow of data, human behavior is increasingly integrated with the technological nonconscious through somatic responses, haptic feedback, gestural interactions, and a wide variety of other cognitive activities that are habitual and repetitive and that therefore fall below the threshold of conscious awareness. Mediating between these habits and the intelligent machines that entrain them are layers of code. Code, then, affects both linguistic and nonlinguistic human behavior. Just as code is at once a language system and an ~~agent commanding~~ the computer’s performances, so it interacts with and inﬂuences human agency expressed somatically, implemented for example through habits and postures." (Hayles "Trauma" 2006, 140)
~~>“Along with the hierarchical nature of code goes a dynamic of concealing and revealing that operates in ways that have no parallels in speech and writing. Because computer languages become more English-like as they move higher in the "tower of languages" (Rita Raley's phrase), concealing the "brute" lower levels carries considerable advantage. Knowing how to conceal code with which one is not immediately concerned is an essential practice in computer programming” (Hayles 2005, 54) **Hemingway/iceberg writing & object-oriented programming lol**~~

>(also include ullman quote re code has one meaning what it does, vs Critical Code studies?)

### surfaces / medium (format for transmission)

>“The screen should not simply be cast as the bearer, for example, of multiple (flat) surfaces or successive “states” of text; it must be viewed as a monitor for complex processes, processes which, if they are linguistic, will be textual and symbolic, with a specific materiality as such. We must be able to see and read what the screen presents rather than recasting what passes before our eyes as the emulation of a “transparent” medium” (Cayley 2018, 81)

>“As writing and other visual arts became the privileged bearers of memory and messages, weaving withdrew into its own screens. Both canvases and paper reduce the complexities of weaving to raw materials on which images and signs are imposed: the cloths from which woven patterns once emerged now become backcloths, passive matrices on which images are imposed and interpreted as if from on high. Images are no longer carried in the weave, but imprinted on its surface” (Plant 1998, 67)

~~Hayles suggests that this requires different subjectivity but does not outline for whom and how it would be different: **does she?**~~

needed? 
For Adrian MacKenzie (2005) also  code's performativity is not in its conflation with speech acts alone, but rather related to its sociality: 
>“In production, circulation and consumption of information, in the ways that things like Linux mediate informatic sociality, and in the ways they articulate new intersections between the different sets of practices and conventions, code objects demonstrate that operationality depends on the constitution of collective agency. [...] locates operationality within a speciﬁc culture of circulation of code.” (MacKenzie 88) 

#### Carson
>“The _aporrhoai_ are mediators of perception which allow everything in the universe to be potentially 'in touch' with everything else (cf. Arist., Sens. 4.442a29). Empedokles and his contemporaries posit a universe where the spaces between things are ignored and the interactions constant. Breath is everywhere. There are no edges.” (Carson 1998, 49)

>"Archilochos understands the law differentiating self from not-self, for Eros cuts into him just at the point where that difference lies. To know desire, to know words, is for Archilochos a matter of perceiving the edge between one entity and another" (Carson 1998, 51)

#### Cox
>"programs no longer encode pure logic but human social behavior too. [...] systems are embedded in larger language systems where meanings are produced through social practices. In other words, computer programs have bodies in the sense that other materialities and meanings are deeply interwoven, and these necessarily exist as part of wider social relations." (Cox 2012, 26--27)

Cox points to the tools themselves as a possible source for 
>[...C]ollective and networked intelligence open up the conditions of possibility for reinvention by embracing broader contingencies, to challenge overpowering forces that wish to close them down, encapsulate and subsume them. (Cox 2012, 109)


