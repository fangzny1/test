export type QuestionType = 'blank' | 'matching' | 'choice';

export interface Question {
  id: string;
  type: QuestionType;
  section: string;
  instructions: string;
  passage?: string;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const sectionABody = `Psychologists have long been interested in how we construct our identities and the sorts of strategies that we use to present ourselves in society. New findings suggest that the kinds of [ 26 ] and strategic self-presentation behaviour we see in adults appear at a much younger age than [ 27 ] known.
Research shows that a child's awareness of social standing comes from adults. Like grown-ups, kids want to be [ 28 ] by those they admire. Interactive experiences may provide opportunities for children to learn about what [ 29 ] a desirable reputation and the kinds of strategies that are effective for [ 30 ] a good reputation in their social environment.
Five-year-olds aren't just aware of their reputations, they also behave strategically to alter their outward image. They will [ 31 ] their behaviour in order to appear moral or socially good in the eyes of key observers. While we know that adults use a large variety of attributes to manage and create impressions, we don't yet know whether children [ 32 ] and use the fact that different attributes are valuable at different times to different [ 33 ]. It's important for us to further consider where in this process children succeed in controlling their reputation and where they [ 34 ].
A question to think about is, "What happens even earlier than age five?" Children don't just show up to the first day of kindergarten and have the idea of reputation pop [ 35 ] into existence. The logical question to ask is, "What happens even earlier?"`;

const sectionAOptions = [
  "accepted", "audiences", "building", "complex", "constitutes",
  "deputies", "previously", "revolving", "samples", "selected",
  "solemn", "struggle", "suddenly", "understand", "vary"
];

const sectionBBody = `A) Recently, a leading design federation in the UK warned that the UK could face a creative skills shortage, after the latest figures revealed a drop of almost 10 percent in students studying Design and Technology. These figures showed that the number of pupils that sat exams in Design and Technology fell 10 percent from 204,788 to 185,279 last year.
B) Chief executive John Kampfner of the Creative Industries Federation thinks that this drop in figures has worrying implications for the skills pipeline in Britain's hugely successful arts and creative industries. He said, "We already have skills shortages in many jobs such as animation and special effects." He added: "Engineering, which requires a similar mix of creative and technical skills, also has recruitment problems."
C) Many other designers and architects have expressed concern over the future supply of home-grown talent for UK firms, and industry bodies have pointed out that there has been a lack of roots-level support. However, if these designers had visited the Design Museum shop in London earlier this year their fears may have been eased. With £10 to spend, they could have bought a fascinating children's toy called "Dazzle Racer". An automotive cylinder, it included a wind-up, elastic-band-powered mechanism, minimal parts, all 100 percent recycled, and lots of stickers. It was good fun, simple, eye catching and very original.
D) Well, you'd expect the Design Museum to commission and make some interesting items, but this one was different. Designed by a group of six Year 9 and Year 10 boys from Finchley Catholic High School, the toy was the winning entry in the museum's 2015 Design Ventura competition, which brings the business of design to life for students aged 13 to 16 by challenging them to develop a new creative, sustainable and commercially feasible product for the Design Museum shop and attracts hundreds of entries nationwide.
E) "We did Design Ventura in my previous school," says Liam Hourican, Finchley Catholic High School's design technology curriculum leader. "Then when I changed schools four years ago, I introduced it here because it helps to develop so many skills."
F) The theme for last year's competition was "Move", and Hourican began with three groups working in lunch breaks and after school before selecting the group with the most innovative idea. Each participating school may submit just one proposal. "It's the taking part and doing the work which is important," he says. "And I never dreamt we'd win."
G) Catherine Ritman Smith, head of learning at the Design Museum, is expecting around 10,000 participants aged 13 to 16 to take part this year and says that the project—funded by Deutsche Bank as part of its youth engagement programme Born To Be—is the biggest event in the museum's calendar. "We started Design Ventura with around 800 young people in 2010 and it has grown steadily since," she says. "Teachers like it because the skills are all transferable and it helps to validate the value of design as a subject," she explains, telling me that nearly 600 schools have taken part so far.
H) So how does the competition work? A single-word theme is announced in the summer. This year it is "Change". Schools work with groups to produce imaginative design ideas for a product in simple materials that could sell for £10 in the Design Museum shop. Participating schools then register by November and eventually submit their design idea. Along the way there is training and support for teachers and tutoring for students from designers. An additional bonus is when the winners see their design on sale in the spring of the following year.
I) Hourican and his pupils have happy memories of spending a whole day at the museum, having been selected as one of 10 shortlisted schools to present their idea to a panel of judges, including designer Jasper Conran. Then they worked with the Kin Design Studio in Shoreditch, met designers at their school and attended a lunch with Deutsche Bank employees. The students helped to make decisions and there were plenty of discussions—they changed the product's name, for example.
J) "One of the really useful things about this competition," says Hourican, "is that there's a commercial element because the product is going on sale for real and the boys had to learn about budgeting and marketing, as well as designing their game." Profits go to charity. "The winning team chooses where it wants the profits to go," says Ritman Smith. "The Finchley Catholic High School product raised about £1,000 for Great Ormond Street Hospital." Winning entries in past years have included a make-your-own cloth kit called Dove Bunting and a threefold, wallet-sized travel game with goals at each end, called Badoiiing.
K) It costs the schools nothing to participate in Design Ventura; the professional designers provide their services for free. Among them are architect Asif Khan, a Design Museum trustee who has worked as designer-in-residence at the museum, helping emerging architects. He has recently been commissioned to design the new Museum of London building in Smithfield.
L) Another is television presenter and interior designer Naomi Cleaver, who is one of the competition's judges. "I'm very keen to encourage young people," she says, observing that design brings together other subjects such as literature, art, history, geography and science. "Now that design education is limited in the curriculum, I'm all in favour of competitions such as Design Ventura, which helps to bring the standard curriculum to life," says Cleaver. "And the judging day is terrific fun. Some of these students are very imaginative. One group presented their idea in the form of a puppet show and we see some marvelous demonstration models. I'm always impressed by the levels of confidence and the support the students get from their teachers."
M) Ritman Smith adds: "Design technology has become a tricky subject to make a case for, and we've heard of departments closing in some schools. We find that if pupils take part in Design Ventura in Year Nine it can be the trigger which leads them to opt for it at General Certificate of Secondary Education, so we are helping to keep alive something which is crucial to industry and entrepreneurship."`;

const sectionBOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];

const sectionC1Body = `New research suggests that pandas may be at risk of dying out because they are too comfortable. Experts say too much happiness can stop the bears from searching for new mates.
Environmentalists have long believed that building roads or homes near the bears may threaten their survival by "reducing or fragmenting their natural habitats", The Times reported. But the new research suggests that a "modest degree of discomfort and fragmentation" may actually help preserve panda populations.
The research was conducted by scientists from Michigan State University. It concluded that pandas fail to wander off in search of new mates if they find their habitat too comfortable, resulting in a lack of vital genetic diversity.
For their study—outlined in a paper in the journal Conservation Biology—the team looked at genetic diversity and spread among a Chinese panda population. The ideal level of perfectly livable habitat was found to be only 80% of an area, with the remainder either too harsh or too affected by human activity.
The experts concluded that pandas should ideally "be happy enough to thrive, but not so content that they don't want to move around and find new mates".
Their conclusions about what The Guardian described as this "sweet spot" are in line with the so-called Goldilocks principle: that there can be just the right amount of something. The concept has been applied to a wide range of disciplines, from developmental psychology to economics and engineering.
Claudio Sillero, a professor of conservation biology at Oxford University, told the newspaper that the new findings could have implications beyond panda conservation.
"Most large animals that eat meat live in increasingly fragmented landscapes," said Sillero, who was not involved in the research. "It may well be that the messy nature of their relationship with human efforts induces more animals to scatter or travel further, and might result in greater genetic connectivity and enhanced population persistence."
The most recent count of pandas found that there were more than 1,800 left in the wild, putting them on the list of vulnerable, but not endangered, species.`;

const sectionC2Body = `With those born with natural talents, it feels as if they excel without really trying. But what about those of us who don't have a natural talent? We've been told all our lives that if you work hard, you too can succeed. But with the release of Angela Duckworth's Grit, we are given a new key to success.
"As much as talent counts, effort counts twice," says Duckworth in Grit. She introduces a new concept that talent may be overrated, and if you want real success, what you need is grit, the perfect combination of passion and persistence. Even if you have natural talent, it's nothing without grit.
Duckworth says grit is the difference between success and failure. A person who has grit is more likely to succeed than a person who does not. When we think about attaining success—whether it's landing that job or learning that new skill—our thoughts are immediately burdened by all the things we must first learn. If you want that new job, you have to learn the job skills, then the interview skills, then the dress part—and you must be perfect at all of them. Grit is different because it tells us that perfection isn't the goal.
Grit lifts the unreasonable expectations off our shoulders. Grit tells us that the door is open wider than we first thought possible. Grit allows us to redefine our goals. Think about it: what's something you've always wanted to do, but gave up because you "don't have the skills for it"? What's something you love but aren't good at?
The real workings of grit are to have sustainable passion and continue to try. Effort means more than your natural ability. Even if you haven't mastered a skill, grit tells you that you can still succeed if you can transform your passion into action. In a way, Duckworth is giving new hope to people who have shut the doors on their dreams. She is saying it is possible that you can accomplish anything. If at first you fail, then try one more time with grit.`;

export const questions: Question[] = [
  // Section A
  {
    id: "26",
    type: "blank",
    section: "Section A — Cloze (26-35)",
    instructions: "Fill in the blanks (26-35) from the list of choices (A-O).",
    passage: sectionABody,
    text: "New findings suggest that the kinds of [ 26 ] and strategic self-presentation...",
    options: sectionAOptions,
    correctAnswer: "complex",
    explanation: "空格前是 the kinds of，空格后是 and strategic self-presentation behaviour。and连接并列成分，strategic为形容词，故空格处需填入形容词，与strategic共同修饰behaviour。语义判断：一般而言，人越长大行为越复杂，此处填入 complex（复杂的）。"
  },
  {
    id: "27",
    type: "blank",
    section: "Section A — Cloze (26-35)",
    instructions: "Fill in the blanks (26-35) from the list of choices (A-O).",
    passage: sectionABody,
    text: "...appear at a much younger age than [ 27 ] known.",
    options: sectionAOptions,
    correctAnswer: "previously",
    explanation: "该句为比较结构，than引导比较状语从句，从句中省略了主语和be动词，完整形式为 than it was previously known。known为过去分词，此处需填入副词 previously (以前，先前) 修饰 known。"
  },
  {
    id: "28",
    type: "blank",
    section: "Section A — Cloze (26-35)",
    instructions: "Fill in the blanks (26-35) from the list of choices (A-O).",
    passage: sectionABody,
    text: "Like grown-ups, kids want to be [ 28 ] by those they admire.",
    options: sectionAOptions,
    correctAnswer: "accepted",
    explanation: "空格前为 want to be，空格后是动作执行者 by those...，空格处需填入动词的过去分词形式。填入 accepted （被认可、被接纳），语义连贯。"
  },
  {
    id: "29",
    type: "blank",
    section: "Section A — Cloze (26-35)",
    instructions: "Fill in the blanks (26-35) from the list of choices (A-O).",
    passage: sectionABody,
    text: "...learn about what [ 29 ] a desirable reputation...",
    options: sectionAOptions,
    correctAnswer: "constitutes",
    explanation: "what在从句中作主语，空格后是宾语 a desirable reputation。需填入谓语动词 constitutes（构成、组成），意为“了解到是什么构成了理想的声誉”。"
  },
  {
    id: "30",
    type: "blank",
    section: "Section A — Cloze (26-35)",
    instructions: "Fill in the blanks (26-35) from the list of choices (A-O).",
    passage: sectionABody,
    text: "...the kinds of strategies that are effective for [ 30 ] a good reputation...",
    options: sectionAOptions,
    correctAnswer: "building",
    explanation: "空格前为介词 for，其后需接动名词，填入 building（建立、构建），构成 for building a good reputation（用于建立良好声誉）。"
  },
  {
    id: "31",
    type: "blank",
    section: "Section A — Cloze (26-35)",
    instructions: "Fill in the blanks (26-35) from the list of choices (A-O).",
    passage: sectionABody,
    text: "They will [ 31 ] their behaviour in order to appear moral...",
    options: sectionAOptions,
    correctAnswer: "vary",
    explanation: "空格前是情态动词 will，后接原形动词。填入 vary（改变、变化），他们会主动改变自己的行为以显得有道德。"
  },
  {
    id: "32",
    type: "blank",
    section: "Section A — Cloze (26-35)",
    instructions: "Fill in the blanks (26-35) from the list of choices (A-O).",
    passage: sectionABody,
    text: "...we don't yet know whether children [ 32 ] and use the fact...",
    options: sectionAOptions,
    correctAnswer: "understand",
    explanation: "and 将空格处的动词与 use 并列在 whether 引导的从句中，需填入动词原形 understand（理解、明白），意为“理解并连用这个事实”。"
  },
  {
    id: "33",
    type: "blank",
    section: "Section A — Cloze (26-35)",
    instructions: "Fill in the blanks (26-35) from the list of choices (A-O).",
    passage: sectionABody,
    text: "...valuable at different times to different [ 33 ].",
    options: sectionAOptions,
    correctAnswer: "audiences",
    explanation: "different后应接可数名词复数。填入 audiences（观众、受众）指代社会场景中的观察者。"
  },
  {
    id: "34",
    type: "blank",
    section: "Section A — Cloze (26-35)",
    instructions: "Fill in the blanks (26-35) from the list of choices (A-O).",
    passage: sectionABody,
    text: "...where in this process children succeed in controlling their reputation and where they [ 34 ].",
    options: sectionAOptions,
    correctAnswer: "struggle",
    explanation: "与前文的 succeed 形成对比，讨论孩子们成功管理声誉的地方和他们觉得挣扎/困难（struggle）的地方。填入动词 struggle。"
  },
  {
    id: "35",
    type: "blank",
    section: "Section A — Cloze (26-35)",
    instructions: "Fill in the blanks (26-35) from the list of choices (A-O).",
    passage: sectionABody,
    text: "...have the idea of reputation pop [ 35 ] into existence.",
    options: sectionAOptions,
    correctAnswer: "suddenly",
    explanation: "pop fixed expression，修饰 pop 的副词。填入 suddenly，也就是 pop suddenly into existence（突然跳出来/突然产生）。"
  },

  // Section B
  {
    id: "36",
    type: "matching",
    section: "Section B — Matching (36-45)",
    instructions: "Match the statement to the correct paragraph (A-M).",
    passage: sectionBBody,
    text: "36. During the course of preparing for Design Ventura, teachers receive training and support while students get tutoring from designers.",
    options: sectionBOptions,
    correctAnswer: "H",
    explanation: "对应H段：Along the way there is training and support for teachers and tutoring for students from designers."
  },
  {
    id: "37",
    type: "matching",
    section: "Section B — Matching (36-45)",
    instructions: "Match the statement to the correct paragraph (A-M).",
    passage: sectionBBody,
    text: "37. A visit to the Design Museum shop in London can reduce the designers' fears about the future supply of talents educated in Britain.",
    options: sectionBOptions,
    correctAnswer: "C",
    explanation: "对应C段：However, if these designers had visited the Design Museum shop in London earlier this year their fears may have been eased."
  },
  {
    id: "38",
    type: "matching",
    section: "Section B — Matching (36-45)",
    instructions: "Match the statement to the correct paragraph (A-M).",
    passage: sectionBBody,
    text: "38. One of Design Ventura's judges says the competition adds vigour to the standard curriculum in schools.",
    options: sectionBOptions,
    correctAnswer: "L",
    explanation: "对应L段评委Naomi Cleaver提及：helps to bring the standard curriculum to life."
  },
  {
    id: "39",
    type: "matching",
    section: "Section B — Matching (36-45)",
    instructions: "Match the statement to the correct paragraph (A-M).",
    passage: sectionBBody,
    text: "39. Enrollment in Design and Technology decreased by nearly ten percent last year in the UK.",
    options: sectionBOptions,
    correctAnswer: "A",
    explanation: "对应A段：after the latest figures revealed a drop of almost 10 percent in students studying Design and Technology."
  },
  {
    id: "40",
    type: "matching",
    section: "Section B — Matching (36-45)",
    instructions: "Match the statement to the correct paragraph (A-M).",
    passage: sectionBBody,
    text: "40. Participation of ninth graders in Design Ventura can motivate them to choose design technology as their subject.",
    options: sectionBOptions,
    correctAnswer: "M",
    explanation: "对应M段：if pupils take part in Design Ventura in Year Nine it can be the trigger which leads them to opt for it at General Certificate of Secondary Education."
  },
  {
    id: "41",
    type: "matching",
    section: "Section B — Matching (36-45)",
    instructions: "Match the statement to the correct paragraph (A-M).",
    passage: sectionBBody,
    text: "41. Design Ventura is welcomed by teachers because it helps to prove the worth of design as a school subject.",
    options: sectionBOptions,
    correctAnswer: "G",
    explanation: "对应G段：Teachers like it because the skills are all transferable and it helps to validate the value of design as a subject."
  },
  {
    id: "42",
    type: "matching",
    section: "Section B — Matching (36-45)",
    instructions: "Match the statement to the correct paragraph (A-M).",
    passage: sectionBBody,
    text: "42. The schools don't have to pay anything to take part in the Design Ventura competition.",
    options: sectionBOptions,
    correctAnswer: "K",
    explanation: "对应K段：It costs the schools nothing to participate in Design Ventura."
  },
  {
    id: "43",
    type: "matching",
    section: "Section B — Matching (36-45)",
    instructions: "Match the statement to the correct paragraph (A-M).",
    passage: sectionBBody,
    text: "43. Participants in Design Ventura are challenged to create sustainable and marketable products.",
    options: sectionBOptions,
    correctAnswer: "D",
    explanation: "对应D段：challenging them to develop a new creative, sustainable and commercially feasible product..."
  },
  {
    id: "44",
    type: "matching",
    section: "Section B — Matching (36-45)",
    instructions: "Match the statement to the correct paragraph (A-M).",
    passage: sectionBBody,
    text: "44. Students benefit from Design Ventura because they can learn about budgeting and marketing in addition to game design.",
    options: sectionBOptions,
    correctAnswer: "J",
    explanation: "对应J段：the boys had to learn about budgeting and marketing, as well as designing their game."
  },
  {
    id: "45",
    type: "matching",
    section: "Section B — Matching (36-45)",
    instructions: "Match the statement to the correct paragraph (A-M).",
    passage: sectionBBody,
    text: "45. According to an officer of the Creative Industries Federation, there is difficulty now in recruiting engineers in the UK.",
    options: sectionBOptions,
    correctAnswer: "B",
    explanation: "对应B段：John Kampfner... added: 'Engineering... also has recruitment problems.'"
  },

  // Section C - Passage 1
  {
    id: "46",
    type: "choice",
    section: "Section C — Passage One (46-50)",
    instructions: "Choose the correct answer according to Passage One.",
    passage: sectionC1Body,
    text: "46. What do we learn from new research about pandas?",
    options: [
      "A) They are losing habitat due to the building of roads and houses.",
      "B) They have stopped seeking new mates for reproduction.",
      "C) They may not adapt to the fragmentation of their habitat.",
      "D) They may cease to exist as a result of enjoying too good a life."
    ],
    correctAnswer: "D) They may cease to exist as a result of enjoying too good a life.",
    explanation: "对应文章第一段。新研究表明，熊猫过于安逸可能失去寻觅新配偶的动力，可能导致灭绝（at risk of dying out because they are too comfortable）。故选D。"
  },
  {
    id: "47",
    type: "choice",
    section: "Section C — Passage One (46-50)",
    instructions: "Choose the correct answer according to Passage One.",
    passage: sectionC1Body,
    text: "47. What can we conclude from the new research by scientists at Michigan State University?",
    options: [
      "A) Environmentalists' long-time belief regarding panda conservation may be misleading.",
      "B) Housing development near pandas' homes may threaten their survival.",
      "C) Pandas' natural habitats are becoming less suitable for reproduction.",
      "D) The increased panda population is attributed to the fragmentation of their habitat."
    ],
    correctAnswer: "A) Environmentalists' long-time belief regarding panda conservation may be misleading.",
    explanation: "对应第二段。新研究指出环保主义者长期以来的观点（认为碎片化威胁生存）可能是不对的，适度碎片化实际上有助于保护熊猫（may actually help preserve）。故选A。"
  },
  {
    id: "48",
    type: "choice",
    section: "Section C — Passage One (46-50)",
    instructions: "Choose the correct answer according to Passage One.",
    passage: sectionC1Body,
    text: "48. What is the experts' conclusion regarding pandas?",
    options: [
      "A) It is urgent to provide an ideal habitat for them to thrive.",
      "B) It is very important to preserve their genetic diversity.",
      "C) Their chances of finding new mates have a lot to do with their habitat.",
      "D) Their environment for survival has been continuously worsening."
    ],
    correctAnswer: "C) Their chances of finding new mates have a lot to do with their habitat.",
    explanation: "研究结论得出，熊猫是否离开领地去寻觅新配偶跟栖息地的安逸程度息息相关，即与 habitat 相关密切。故选C。"
  },
  {
    id: "49",
    type: "choice",
    section: "Section C — Passage One (46-50)",
    instructions: "Choose the correct answer according to Passage One.",
    passage: sectionC1Body,
    text: "49. What can we infer from the passage about the Goldilocks principle?",
    options: [
      "A) It needs to be confirmed by more studies on pandas.",
      "B) It applies to the preservation of pandas too.",
      "C) It has implications for future panda research.",
      "D) It can be used to locate the right spot for pandas."
    ],
    correctAnswer: "B) It applies to the preservation of pandas too.",
    explanation: "金发姑娘原则意为“凡事都有个恰到好处的程度”。文中指出新发现跟该原则不谋而合，说明该原则也适用于熊猫的保护。故选B。"
  },
  {
    id: "50",
    type: "choice",
    section: "Section C — Passage One (46-50)",
    instructions: "Choose the correct answer according to Passage One.",
    passage: sectionC1Body,
    text: "50. What can the new findings do according to Professor Sillero?",
    options: [
      "A) Help discover new ways for the conservation of pandas.",
      "B) Help remove pandas from the list of endangered species.",
      "C) Shed light on the conservation of most large meat-eating animals.",
      "D) Show the complexity of interactions between humans and animals."
    ],
    correctAnswer: "A) Help discover new ways for the conservation of pandas.",
    explanation: "Sillero认为，这一新发现的影响将不仅限于熊猫，可能会对多数居住在碎片化景观中的大型食肉动物（most large animals that eat meat）带来保护启示。哎呀等一下，题目说的是“could have implications beyond panda conservation”以及后面的“Most large animals that eat meat...”。所以其实是给多数大型食肉动物的保护提供启发。所以我上面选错了，应该是C。让我修改一下代码里的 correctAnswer 解释。根据解析，应该是 A 还是 C？\n解析里说：Sillero教授提出“这项新发现的影响范围不止在熊猫保护领域，大多数大型肉食动物……”，因此正确答案是 C (Shed light on the conservation of most large meat-eating animals)。"
  },

  // Section C - Passage 2
  {
    id: "51",
    type: "choice",
    section: "Section C — Passage Two (51-55)",
    instructions: "Choose the correct answer according to Passage Two.",
    passage: sectionC2Body,
    text: "51. What does the passage say about people born with natural talents?",
    options: [
      "A) They seem to outdo others without hard work.",
      "B) They appear to know all the secrets to success.",
      "C) They feel it only too logical to succeed.",
      "D) They are bound to excel effortlessly."
    ],
    correctAnswer: "A) They seem to outdo others without hard work.",
    explanation: "对应第一段第一句：With those born with natural talents, it feels as if they excel without really trying. 意为有天赋的人似乎无需太多努力就能出类拔萃，故选A。"
  },
  {
    id: "52",
    type: "choice",
    section: "Section C — Passage Two (51-55)",
    instructions: "Choose the correct answer according to Passage Two.",
    passage: sectionC2Body,
    text: "52. What does Duckworth say about talent?",
    options: [
      "A) It is a new concept much too overrated.",
      "B) It proves necessary for big achievements.",
      "C) It plays a lesser role in one's success.",
      "D) It is a guarantee for real success in life."
    ],
    correctAnswer: "C) It plays a lesser role in one's success.",
    explanation: "对应第二段 Duckworth 的观点：天赋的作用可能被高估（talent may be overrated），真正的成功更需要坚毅（grit）。说明天赋在成功中的作用较小（a lesser role），故选C。"
  },
  {
    id: "53",
    type: "choice",
    section: "Section C — Passage Two (51-55)",
    instructions: "Choose the correct answer according to Passage Two.",
    passage: sectionC2Body,
    text: "53. What does the passage say about people thinking of attaining success?",
    options: [
      "A) They are puzzled how to present their best to the employer.",
      "B) They are burdened by their expectation of perfection.",
      "C) They will try hard to land a job that fits their skills best.",
      "D) They will find themselves lacking in all the skills they need."
    ],
    correctAnswer: "B) They are burdened by their expectation of perfection.",
    explanation: "对应第三段第三句：当思考如何获得成功时，我们的思想总会被“必须先掌握所有的东西（完美）”压得喘不过气来。故选B。"
  },
  {
    id: "54",
    type: "choice",
    section: "Section C — Passage Two (51-55)",
    instructions: "Choose the correct answer according to Passage Two.",
    passage: sectionC2Body,
    text: "54. How does the author think grit can be helpful to us?",
    options: [
      "A) It allows us to know what we are good at.",
      "B) It opens our eyes to new opportunities.",
      "C) It focuses our attention on what we do.",
      "D) It lets us reconsider the goals to achieve."
    ],
    correctAnswer: "D) It lets us reconsider the goals to achieve.",
    explanation: "对应第四段第二、三句：Grit allows us to redefine our goals. 也就是帮助我们重新审视要实现的目标，故选D。"
  },
  {
    id: "55",
    type: "choice",
    section: "Section C — Passage Two (51-55)",
    instructions: "Choose the correct answer according to Passage Two.",
    passage: sectionC2Body,
    text: "55. What message does Duckworth try to convey in her book Grit?",
    options: [
      "A) We should perfect ourselves to ensure success.",
      "B) We should stay persistent even in face of failures.",
      "C) We can never master a skill without constant practice.",
      "D) We can never expect to reach our goals without passion."
    ],
    correctAnswer: "B) We should stay persistent even in face of failures.",
    explanation: "对应最后一段最后两句：如果初次失败，那就带着坚毅再试一次。坚毅的核心也是激情与持续尝试，面对失败仍要坚持，故选B。"
  }
];

// Fix Question 50 correct answer explicitly
questions.find(q => q.id === "50")!.correctAnswer = "C) Shed light on the conservation of most large meat-eating animals.";
