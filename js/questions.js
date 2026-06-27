const questionBank = [
    {
        q: "The country known as Nigeria today was the product of the merger of both the Northern and Southern protectorates in?",
        options: ["1914", "1804", "1960", "1884"],
        answer: 0,
        explanation: "The amalgamation of the Northern and Southern protectorates occurred in 1914, primarily for administrative convenience by the colonial masters."
    },
    {
        q: "Who defined culture as 'the complex whole which includes knowledge, belief, art, morals, custom and any other capabilities and habits acquired by man as a member of society'?",
        options: ["Abiodun and Asaolu", "Edward Taylor", "Robert Lowie", "Malinowski"],
        answer: 1,
        explanation: "Edward Taylor, an early writer in social anthropology, provided this comprehensive definition of culture."
    },
    {
        q: "Which of the following is NOT a characteristic of culture?",
        options: ["Culture is dynamic", "Culture is universal", "Culture is genetic", "Culture is shared"],
        answer: 2,
        explanation: "Culture is socially induced and transmitted, not genetically transmitted. Therefore, it is not genetic."
    },
    {
        q: "Kinship through blood relation is known as?",
        options: ["Affinity", "Consanguinea", "Fraternal", "Endogamy"],
        answer: 1,
        explanation: "Kinship through blood relation is known as 'consanguinea'. Kinship through marriage is referred to as 'affinity'."
    },
    {
        q: "A type of marriage where a woman marries more than one man at the same time is called?",
        options: ["Monogamy", "Polygamy", "Polyandry", "Levirate"],
        answer: 2,
        explanation: "Polyandry is a form of marriage where a woman marries more than one man at the same time. Fraternal polyandry involves brothers sharing the same wife."
    },
    {
        q: "The rule of marriage that prohibits individuals from marrying within their group or blood relatives is?",
        options: ["Endogamy", "Exogamy", "Monogamy", "Sororate"],
        answer: 1,
        explanation: "Exogamy requires individuals to marry outside their own social group, family, clan, or tribe."
    },
    {
        q: "Tracing one's kinship through both the mother’s and father’s ancestors is known as?",
        options: ["Agnatic descent", "Cognatic descent", "Matrilineal descent", "Patrilineal descent"],
        answer: 1,
        explanation: "Cognatic (or non-unilineal) descent traces kinship through both the mother’s and father’s ancestors to some degree."
    },
    {
        q: "According to Rev. Samuel Johnson, the Yoruba originally came from?",
        options: ["Mecca", "Egypt", "Ile-Ife", "Israel"],
        answer: 1,
        explanation: "Johnson traces the origin of the Yoruba to the 'East', specifically Egypt, citing similarities in religious observances and works of art."
    },
    {
        q: "Who led the party to the world to form earth according to the Oke Oramfe version of Yoruba origin?",
        options: ["Obatala", "Oduduwa", "Oranmiyan", "Olua"],
        answer: 1,
        explanation: "Although Obatala was the initial leader, he got drunk. Oduduwa seized the symbol of authority and led the party to form the earth at Ile-Ife."
    },
    {
        q: "In the Oyo Empire, who acted as the prime minister and head of the Oyomesi?",
        options: ["Alaafin", "Bashorun", "Are-Ona-Kankanfo", "Ogboni"],
        answer: 1,
        explanation: "The Oyomesi was a council of seven members headed by the Bashorun, who acted as the prime minister."
    },
    {
        q: "The head of the Army in traditional Yoruba society was conferred with the title of?",
        options: ["Bashorun", "Ilari", "Are-Ona-Kankanfo", "Ooni"],
        answer: 2,
        explanation: "The Are-Ona-Kankanfo was the head of the Army and was expected to live outside the capital."
    },
    {
        q: "Which ethnic group was the first to be visited by the Europeans as early as 1472 A.D.?",
        options: ["The Yoruba", "The Igbo", "The Bini", "The Hausa"],
        answer: 2,
        explanation: "The Bini were the first to be visited by Europeans (Portuguese) in 1472 A.D. during Ewuare's reign."
    },
    {
        q: "The first period of pre-colonial Bini history is known as the?",
        options: ["Eweka era", "Ogiso era", "Evian era", "Oranmiyan era"],
        answer: 1,
        explanation: "The first period is known as the Ogiso era because their rulers were the Ogisos, meaning 'kings of the sky'."
    },
    {
        q: "Who established the present Bini dynasty after the Ogiso era?",
        options: ["Ekaladeran", "Oranmiyan", "Eweka I", "Evian"],
        answer: 2,
        explanation: "Eweka I, the son of Oranmiyan and a Bini woman, was credited with establishing the present Bini dynasty."
    },
    {
        q: "The Igbo people are best known for their?",
        options: ["Centralized states", "Acephalous way of life", "Monarchical systems", "Caliphate system"],
        answer: 1,
        explanation: "The Igbo are known for their segmentary or acephalous (headless) way of life, operating a government without kings."
    },
    {
        q: "In traditional Igbo society, the general assembly of male adults that performed legislative functions was called?",
        options: ["Oyomesi", "Ogboni", "Amala Oha", "Uzama"],
        answer: 2,
        explanation: "Amala Oha was a form of general assembly where all male adult members met to perform legislative functions in the open village square."
    },
    {
        q: "Who is known as the man through whom the kingdom of Itsekiri was established?",
        options: ["Iginuwa", "Oranmiyan", "Eweka", "Olu"],
        answer: 0,
        explanation: "Iginuwa, the son of Oba Olua of Benin, was sent to an area by the sea where he established the Itsekiri Kingdom."
    },
    {
        q: "The ruler of the Itsekiri Kingdom is known as?",
        options: ["Alaafin", "Oba", "Olu", "Ovie"],
        answer: 2,
        explanation: "The Itsekiri Kingdom was ruled by the Olu, who presided over a council known as Ojoye."
    },
    {
        q: "Unlike the Itsekiri, the Urhobo people are fragmented and are ruled at the village level by a ruler called?",
        options: ["Ovie", "Sarki", "Mai", "Attah"],
        answer: 0,
        explanation: "Each Urhobo Village had its own traditional institution headed by a ruler known as the Ovie."
    },
    {
        q: "Which traditional Ijaw states were major trading hubs?",
        options: ["Ife and Oyo", "Bonny, Kalabari, Opobo and Brass-Nembe", "Kano and Sokoto", "Aguleri and Nri"],
        answer: 1,
        explanation: "The traditional major Ijaw states were Bonny, Kalabari, Ibrika, Opobo and Brass-Nembe. They were characterized by the 'House System'."
    },
    {
        q: "According to legend, who is believed to be the founder/hero of the Hausa states?",
        options: ["Bayajida", "Saif b. Dhiyazan", "Abutu Eje", "Oduduwa"],
        answer: 0,
        explanation: "Bayajida is believed to have come from Baghdad to Kanem-Bornu and then Hausaland. He killed a snake in Daura and married the queen, leading to the founding of the seven Hausa states (Hausa Bokwoi)."
    },
    {
        q: "The head of a typical Hausa state is known as?",
        options: ["Oba", "Alaafin", "Sarki", "Olu"],
        answer: 2,
        explanation: "The Sarki is the head of a typical Hausa state. Sarkin Kasar means 'ruler of the land'."
    },
    {
        q: "Who is credited with establishing the Saifawa dynasty in Kanem-Bornu?",
        options: ["Bayajida", "Mai", "Saif b. Dhiyazan", "Abutu Eje"],
        answer: 2,
        explanation: "Saif b. Dhiyazan, an Arab hero, is credited with establishing the Saifawa dynasty between the 9th and 10th centuries A.D."
    },
    {
        q: "In Kanem-Bornu, the chief judge of the State who was also the Mai's legal adviser was called?",
        options: ["Nokena", "Maini Kanendi", "Galadima", "Magira"],
        answer: 1,
        explanation: "The Maini Kanendi was the chief judge and legal adviser to the Mai (king)."
    },
    {
        q: "Who is best known as the ancestor to all the Attahs and founder of the present Igala dynasty?",
        options: ["Abutu Eje", "Achadu", "Ayagba (Idoko)", "Ekaladeran"],
        answer: 2,
        explanation: "Ayagba or Idoko is credited with founding the present Igala dynasty and helping the Igala people break away from Jukun rule."
    },
    {
        q: "The Sokoto Caliphate was established in 1804 by?",
        options: ["Lord Lugard", "Usman Dan Fodio", "Sir Hugh Clifford", "George Goldie"],
        answer: 1,
        explanation: "The North was dominated by the Sokoto Caliphate, established in 1804 by Usman Dan Fodio, a theocratic Islamic state."
    },
    {
        q: "Which company played a pivotal role in securing British trade monopolies before the formal colonization of Nigeria?",
        options: ["Royal African Company", "Royal Niger Company (RNC)", "British East India Company", "Lever Brothers"],
        answer: 1,
        explanation: "The Royal Niger Company, founded by George Taubman Goldie, signed treaties with chiefs to claim land and trade monopolies until 1900."
    },
    {
        q: "The Benin expedition of 1897 resulted in?",
        options: ["The destruction of the Benin Kingdom and looting of its bronzes", "The signing of the Berlin Conference", "The establishment of the Sokoto Caliphate", "The abolition of the slave trade"],
        answer: 0,
        explanation: "The British launched the Benin expedition in 1897, which destroyed the Benin Kingdom and looted its famous bronze artworks."
    },
    {
        q: "Who introduced the system of 'Indirect Rule' in Nigeria?",
        options: ["Lord Lugard", "Sir Hugh Clifford", "Sir Arthur Richards", "Sir John Macpherson"],
        answer: 0,
        explanation: "Lord Frederick Lugard conceptualized and implemented Indirect Rule, governing indigenous populations through their pre-existing traditional authorities."
    },
    {
        q: "Indirect Rule was highly successful in Northern Nigeria because?",
        options: ["The Igbo were decentralized", "The Hausa-Fulani Emirate system was hierarchical and centralized", "There were no traditional rulers", "The Yoruba Oba shared power with the Oyomesi"],
        answer: 1,
        explanation: "The pre-colonial Hausa-Fulani Emirate system perfectly aligned with the British preference for hierarchical, centralized control."
    },
    {
        q: "The collapse of Indirect Rule was most catastrophic in Eastern Nigeria because?",
        options: ["The Igbo society was highly centralized", "The Yoruba Oba had too much power", "The Igbo socio-political system was decentralized and acephalous", "The Emirs rejected the British"],
        answer: 2,
        explanation: "The Igbo were egalitarian and acephalous (headless). Finding no centralized authorities, the British invented 'Warrant Chiefs', which failed."
    },
    {
        q: "The amalgamation of Nigeria in 1914 refers to?",
        options: ["The merging of Northern and Southern protectorates with Lagos Colony", "The independence of Nigeria", "The creation of the 36 states", "The establishment of the Sokoto Caliphate"],
        answer: 0,
        explanation: "Effected on January 1, 1914, it merged the Northern Nigeria Protectorate, Southern Nigeria Protectorate, and Lagos Colony into a single entity."
    },
    {
        q: "What was the primary motivation for the 1914 Amalgamation?",
        options: ["Cultural integration", "Economic survival and administrative convenience", "Military conquest of the North", "Religious unification"],
        answer: 1,
        explanation: "The South generated significant revenue and the North was economically underdeveloped. Amalgamation allowed the South to subsidize the North and streamline governance."
    },
    {
        q: "Which constitution introduced the Elective Principle for the first time in Nigeria?",
        options: ["Lugard Constitution (1914)", "Clifford Constitution (1922)", "Richards Constitution (1946)", "Macpherson Constitution (1951)"],
        answer: 1,
        explanation: "Sir Hugh Clifford's 1922 constitution allowed Nigerians to vote for representatives to the Legislative Council (4 seats: 3 for Lagos, 1 for Calabar)."
    },
    {
        q: "Which constitution formally divided Nigeria into three distinct regions (North, West, East)?",
        options: ["Clifford Constitution (1922)", "Richards Constitution (1946)", "Lyttelton Constitution (1954)", "Independence Constitution (1960)"],
        answer: 1,
        explanation: "Sir Arthur Richards' 1946 constitution entrenched regionalism, giving each region a Regional Council to handle local matters."
    },
    {
        q: "Who founded the Nigerian National Democratic Party (NNDP) in 1922?",
        options: ["Nnamdi Azikiwe", "Herbert Macaulay", "Obafemi Awolowo", "Ahmadu Bello"],
        answer: 1,
        explanation: "Herbert Macaulay founded the NNDP in response to the Clifford Constitution. It dominated Lagos politics for over a decade."
    },
    {
        q: "Which political party evolved from the Egbe Omo Oduduwa and dominated Western Nigeria?",
        options: ["NPC", "NCNC", "Action Group (AG)", "NNDP"],
        answer: 2,
        explanation: "The Action Group was formed in 1951, evolving from Egbe Omo Oduduwa. Its leader was Chief Obafemi Awolowo."
    },
    {
        q: "The Northern People's Congress (NPC) evolved from which cultural association?",
        options: ["Egbe Omo Oduduwa", "Jamiyyar Mutanen Arewa", "Igbo State Union", "Ijaw Progressive Union"],
        answer: 1,
        explanation: "The NPC evolved from Jamiyyar Mutanen Arewa and was heavily backed by Northern traditional rulers like Sir Ahmadu Bello."
    },
    {
        q: "The Lyttelton Constitution of 1954 is significant because it?",
        options: ["Introduced regionalism", "Established Nigeria as a true Federation", "Introduced the elective principle", "Granted total independence"],
        answer: 1,
        explanation: "The Lyttelton Constitution of 1954 formally established Nigeria as a true Federation, clearly dividing legislative powers into Exclusive, Concurrent, and Residual lists."
    },
    {
        q: "Who was the first ceremonial President of Nigeria under the 1963 Republican Constitution?",
        options: ["Sir Abubakar Tafawa Balewa", "Dr. Nnamdi Azikiwe", "Chief Obafemi Awolowo", "General Yakubu Gowon"],
        answer: 1,
        explanation: "Under the 1963 Republican Constitution, the British Monarch was replaced by Dr. Nnamdi Azikiwe as the ceremonial Head of State."
    },
    {
        q: "Which of the following is an element of non-material culture?",
        options: ["Tools", "Architecture", "Beliefs and Values", "Food"],
        answer: 2,
        explanation: "Non-material culture includes beliefs, values, customs, language, symbols, rituals, norms, and laws. Tools and architecture are material culture."
    },
    {
        q: "A custom where a widow marries the brother or a close male relative of her deceased husband is called?",
        options: ["Sororate marriage", "Levirate marriage", "Group marriage", "Common marriage"],
        answer: 1,
        explanation: "Levirate marriage is the custom where a widow marries the brother or close male relative of her deceased husband."
    },
    {
        q: "Which descent system traces lineage to a famous distant ancestor, consisting of both male and female relatives?",
        options: ["Bilineal descent", "Parallel descent", "Ambilineal descent", "Matrilineal descent"],
        answer: 2,
        explanation: "Ambilineal descent traces one's lineage to a famous distant ancestor and consists of both male and female relatives."
    },
    {
        q: "In traditional Yoruba society, who had the power to remove an Alaafin if he appeared dictatorial?",
        options: ["The Ogboni Cult", "The Oyomesi", "The Are-Ona-Kankanfo", "The Bashorun only"],
        answer: 1,
        explanation: "The Oyomesi had the power to remove an Alaafin. Usually, the deposed Alaafin was expected to commit suicide."
    },
    {
        q: "The 'Nokena' in the Kanem-Bornu political structure was?",
        options: ["The army", "An imperial state council of twelve", "The servile institution", "The queen mother"],
        answer: 1,
        explanation: "The Nokena was an imperial state council known as the 'council of the twelve' whose principal duty was to offer the king useful advice."
    },
    {
        q: "The 1953 political crisis in Nigeria was triggered by a motion demanding self-government by 1956. Who moved this motion?",
        options: ["Nnamdi Azikiwe", "Obafemi Awolowo", "Ahmadu Bello", "Herbert Macaulay"],
        answer: 1,
        explanation: "Obafemi Awolowo of the Action Group moved the motion. The Northern delegation rejected it, leading to riots in Kano and the breakdown of the Macpherson Constitution."
    },
    {
        q: "Which political party represented the 'talakawa' (commoners) and opposed the NPC in the North?",
        options: ["UMBC", "NEPU", "DPN", "NNDP"],
        answer: 1,
        explanation: "The Northern Elements Progressive Union (NEPU), founded in 1950 by Aminu Kano, represented the talakawa marginalized by the emirate system."
    },
    {
        q: "Nigeria was formed through the merger of which two protectorates?",
        options: ["Eastern and Western Protectorates", "Northern and Southern Protectorates", "Lagos and Abuja Protectorates", "Atlantic and Inland Protectorates"],
        answer: 1,
        explanation: "Nigeria was formed through the amalgamation of the Northern and Southern Protectorates in 1914. The major factor responsible was administrative convenience by the colonial masters."
    },
    {
        q: "Who defined culture as 'the complex whole which includes knowledge, belief, art, morals, custom and any other capabilities and habits acquired by man as a member of society'?",
        options: ["Emile Durkheim", "Max Weber", "Edward Taylor", "Karl Marx"],
        answer: 2,
        explanation: "Edward Taylor, one of the early writers in social anthropology, defined culture as the complex whole which includes knowledge, belief, art, morals, custom and other capabilities and habits acquired by man as a member of society."
    },
    {
        q: "Which of the following best describes 'Material Culture'?",
        options: ["Beliefs, values, and norms", "Language, symbols, and rituals", "Art, tools, technology, architecture, and food", "Laws, customs, and roles"],
        answer: 2,
        explanation: "Material culture refers to physical, tangible things like art, tools/technology, architecture, and food. Non-material culture includes beliefs, values, customs, language, symbols, rituals, norms, roles, and laws."
    },
    {
        q: "Which component of culture refers to standards of human behaviour that are socially accepted and that people are expected to follow?",
        options: ["Folkways", "Mores", "Norms", "Laws"],
        answer: 2,
        explanation: "Norms are standards of human behaviours which are socially accepted and which people are expected by others to follow. They are based on the ways of behaving common to practically all members of society."
    },
    {
        q: "The component of culture that defines what is right or wrong in society and provides moral standards is called?",
        options: ["Norms", "Folkways", "Ideas", "Mores"],
        answer: 3,
        explanation: "Mores define what is right and/or wrong in the society, providing the moral standards. They may be written or unwritten but are usually known to all members of the society for strict adherence."
    },
    {
        q: "What is the term for customs or practices that a group of people follow but which, when violated, do not call for strong sanctions?",
        options: ["Laws", "Mores", "Norms", "Folkways"],
        answer: 3,
        explanation: "Folkways refer to customs or practices that a group of people follow in their various conducts. When violated, they do not call for strong sanctions but people merely frown at them lightly."
    },
    {
        q: "Which of the following is NOT a characteristic/feature of culture?",
        options: ["Culture is transmittable", "Culture is static", "Culture is symbolic", "Culture is shared"],
        answer: 1,
        explanation: "Culture is NOT static. One of the key features of culture is that it is dynamic — it changes over time. The listed features of culture include: transmittable, universal, diverse, dynamic, shared, learned, symbolic, and patterned."
    },
    {
        q: "Culture is said to be 'learned' because it is?",
        options: ["Genetically inherited from parents", "Transmitted consciously or unconsciously from one generation to another", "Unique to only one group of people", "Based on biological instincts"],
        answer: 1,
        explanation: "Culture is learned because it is transmitted consciously or unconsciously from one generation to another. It shapes human identity, behaviour and social relationships."
    },
    {
        q: "In a sociological context, which statement about culture is most accurate?",
        options: ["Only educated people have culture", "Every society and every group has its own culture", "Culture is exclusive to African societies", "Culture only refers to art and music"],
        answer: 1,
        explanation: "Sociologically, every society and every group has its own culture. Anyone living in a social group has a culture which is absolutely essential for the working of the social system."
    },
    {
        q: "Which of the following is an example of 'Ideas' as a component of culture?",
        options: ["Building a bridge", "Believing in witchcraft", "Wearing traditional attire", "Speaking a dialect"],
        answer: 1,
        explanation: "Ideas as a component of culture refers to all our values, superstitions, myths, religious beliefs and science. Beliefs in witchcraft, modes of worship, and food taboos all fall under this component."
    },

    // ---- KINSHIP ----
    {
        q: "The study of kinship belongs to which academic field?",
        options: ["Sociology", "Psychology", "Anthropology", "Political Science"],
        answer: 2,
        explanation: "Kinship, according to the field of anthropology, refers to a model of relationship which occurs in human society. It is a core subject in anthropological study."
    },
    {
        q: "Kinship that emerges through marriage is specifically referred to as?",
        options: ["Consanguinea", "Affinity", "Bilateral", "Agnatic"],
        answer: 1,
        explanation: "Kinship that emerges through marriage is referred to as 'affinity'. Kinship through blood relation is known as 'consanguinea'."
    },
    {
        q: "A connection between people based on genetic ties — such as the relationship between parents and children or among siblings — is called?",
        options: ["Affinity kinship", "Consanguineous kinship", "Tertiary kinship", "Cognatic kinship"],
        answer: 1,
        explanation: "Consanguineous kinship refers to connections between people based on genetic ties — the relationship between parents and children, among siblings (son, daughter, brother, sister) who are related by blood."
    },
    {
        q: "The relationship between a person and their uncle, aunt, nephew, niece, or grandparents is an example of which type of kinship?",
        options: ["Primary kinship", "Secondary kinship", "Tertiary kinship", "Bilateral kinship"],
        answer: 1,
        explanation: "Secondary kinship involves the relationship between an individual and the primary kin of their primary kin — one step removed from direct relations. Examples include uncles, aunts, nephews, nieces, and grandparents."
    },
    {
        q: "Tertiary kinship refers to?",
        options: ["Direct ties between parents and children", "Relationship with uncles and aunts", "Relationship between a person and their cousin's spouse", "Husband and wife relationship"],
        answer: 2,
        explanation: "Tertiary kinship refers to the relationship between the primary kin of two individuals — more distant relations such as a cousin's spouse or between two cousins-in-law, reflecting broader extended family connections."
    },
    {
        q: "According to Olalogun (2010), kinship is defined as?",
        options: ["A legal bond between husband and wife", "Ties connecting individuals through marriage, blood relations or line of descent", "The political system of a clan or tribe", "The inheritance pattern of a community"],
        answer: 1,
        explanation: "Olalogun (2010) described kinship as ties connecting individuals either through marriage, blood relations or line of descent, making kinship and marriage inseparable."
    },

    // ---- MARRIAGE ----
    {
        q: "According to Malinowski (1964), marriage is defined as?",
        options: ["A spiritual bond between two souls", "A contract for the production and maintenance of children", "A union of hearts and minds", "A permanent sexual bond between mates"],
        answer: 1,
        explanation: "Malinowski (1964) defined marriage as a contract for the production and maintenance of children. This definition emphasizes the reproductive and social welfare functions of marriage."
    },
    {
        q: "The rule of marriage that requires life partners to be selected WITHIN the social group, family, clan, or tribe is called?",
        options: ["Exogamy", "Polyandry", "Endogamy", "Sororate"],
        answer: 2,
        explanation: "Endogamy is a rule of marriage in which the life partners are to be selected within the social group, family, clan, or tribe. The group may be a caste, class, tribe, race, village, or religious group."
    },
    {
        q: "Exogamy as a rule of marriage means that individuals must?",
        options: ["Marry within their own clan", "Marry more than one spouse", "Marry outside their own social group or family", "Marry only for economic reasons"],
        answer: 2,
        explanation: "Exogamy is a rule that prohibits individuals from marrying from within their group and blood relatives. It only approves of individuals marrying outside their own social group, family, clan, or tribe to avoid sexual contracts among themselves."
    },
    {
        q: "A type of polygamy in which the wives of a man are already related by blood or other means BEFORE the marriage is called?",
        options: ["Non-sororal polygamy", "Fraternal polyandry", "Sororal polygamy", "Serial monogamy"],
        answer: 2,
        explanation: "Sororal polygamy is a type of marriage in which the wives to a man are always related by blood or other means before the marriage, as opposed to non-sororal polygamy where the wives are not previously related."
    },
    {
        q: "In 'straight monogamy', what distinguishes it from 'serial monogamy'?",
        options: ["More than one wife is allowed", "Remarriage after divorce or death is NOT allowed", "The couple must be of the same religion", "The husband must be older than the wife"],
        answer: 1,
        explanation: "In straight monogamy, remarriage is not allowed at all. Serial monogamy, on the other hand, allows individuals to marry another partner after the demise or divorce of an earlier spouse, but cannot have more than one spouse at a time."
    },
    {
        q: "Which form of marriage allows a woman to marry more than one man at the same time?",
        options: ["Polygamy", "Monogamy", "Polyandry", "Group Marriage"],
        answer: 2,
        explanation: "Polyandry is a form of marriage where a woman marries more than one man at the same time. Though less common than polygamy in Nigeria, it has two forms: fraternal (brothers sharing a wife) and non-fraternal polyandry."
    },
    {
        q: "Which type of marriage involves brothers sharing the same woman as their wife?",
        options: ["Sororate marriage", "Group marriage", "Non-fraternal polyandry", "Fraternal polyandry"],
        answer: 3,
        explanation: "Fraternal polyandry involves brothers sharing the same woman as their wife. Non-fraternal polyandry is where the husbands to a woman are not related in any form before the marriage."
    },
    {
        q: "A 'Group Marriage' is best described as?",
        options: ["A man marrying two sisters simultaneously", "Two or more men marrying two or more women simultaneously, all considered married to one another", "A woman marrying two brothers", "A marriage sanctioned only by the community"],
        answer: 1,
        explanation: "Group Marriage is a rare form of marriage where two or more men marry two or more women simultaneously, with all members of the group considered married to one another."
    },
    {
        q: "Sororate marriage is a practice where?",
        options: ["A widow marries the brother of her deceased husband", "A widower marries the sister or close female relative of his deceased wife", "Two sisters share one husband", "A man marries outside his tribe"],
        answer: 1,
        explanation: "Sororate marriage is a practice where a widower marries the sister or close female relative of his deceased wife. This is different from Levirate marriage, which involves a widow marrying the brother of her deceased husband."
    },
    {
        q: "According to Giddens (1995), marriage is defined as?",
        options: ["A permanent bond between mates for procreation", "A socially recognized and approved sexual union between two adult individuals", "An economic arrangement between two families", "A cultural ceremony celebrating two people"],
        answer: 1,
        explanation: "According to Giddens (1995), marriage is a socially recognized and approved sexual union between two adult individuals. He also notes that when two people are in marital union, they become kin to one another."
    },
    {
        q: "Which of the following is described as an important role of marriage in society?",
        options: ["Political governance", "Procreation and regulation of sexual behavior", "Economic taxation", "Military recruitment"],
        answer: 1,
        explanation: "Marriage performs important roles in society including procreation, regulation of sexual behavior, care of children and their education, socialization, regulation of lines of descent, and division of labour between the sexes."
    },

    // ---- DESCENT ----
    {
        q: "What is 'Agnatic descent'?",
        options: ["Tracing descent through both parents equally", "Tracing peoples' descent through male ancestors only", "Tracing descent through the mother's line", "Tracing descent to a famous distant ancestor"],
        answer: 1,
        explanation: "Agnatic or unilineal descent is established by tracing peoples' descent through male ancestors. When traced through the female line, it is called matrilineal descent."
    },
    {
        q: "In 'Matrilineal descent', membership is defined by?",
        options: ["Links through the father's descent group", "Links through both mother and father equally", "Links through the mother's descent group and children of their daughters but not sons", "Links to a famous distant ancestor"],
        answer: 2,
        explanation: "Matrilineal descent emphasizes the female line. Membership is defined by link through the mother's descent group, and includes children of their daughters but not their sons."
    },
    {
        q: "Which type of descent traces lineage through BOTH the mother's and father's ancestors but to some degree?",
        options: ["Agnatic descent", "Unilineal descent", "Cognatic or non-unilineal descent", "Parallel descent"],
        answer: 2,
        explanation: "Cognatic or non-unilineal descent is the tracing of one's kinship through both the mother's and father's ancestors to some degree. It is grouped into four types: bilineal, bilateral, parallel, and ambilineal."
    },
    {
        q: "Which type of descent separates inheritance by gender, making male children inherit from their father and female children from their mother?",
        options: ["Bilineal descent", "Bilateral descent", "Ambilineal descent", "Parallel descent"],
        answer: 3,
        explanation: "Parallel descent separates inheritance by gender, which makes male children inherit from their father while female children inherit from their mother."
    },
    {
        q: "Bilateral descent is characterized by?",
        options: ["Only tracing the male line", "Emphasis on both male and female lines with recognition of both father and mother's relatives", "Tracing to a single famous ancestor", "Separating inheritance by gender"],
        answer: 1,
        explanation: "Bilateral descent emphasizes both male and female lines with recognition of both father and mother's relatives. It traces descent from all biological ancestors regardless of their gender, meaning all children are members of both their father's and mother's families."
    },

    // ---- YORUBA ----
    {
        q: "The Yoruba ethnic group is believed to have come into existence between which years?",
        options: ["1000 BC – 500 BC", "2000 BC – 1000 BC", "500 AD – 1000 AD", "1500 AD – 1800 AD"],
        answer: 1,
        explanation: "The Yoruba ethnic group is believed to have come into existence between 2000-1000 BC. They are predominantly found in Western and Central States of Nigeria, including Oyo, Osun, Ogun, Ondo, Lagos, Kwara, and Kogi."
    },
    {
        q: "According to Rev. Samuel Johnson's version, the Yoruba people originally came from?",
        options: ["The Middle East", "The North-Eastern area of Africa (Egypt)", "West Sudan", "The Nile Valley"],
        answer: 1,
        explanation: "According to Rev. Samuel Johnson's book 'History of the Yoruba' (1950), the Yoruba originally came from the North-Eastern area of Africa (Egypt). He cited similarities between Yoruba and Egyptian cultures in religious observances, art, and burial practices as evidence."
    },
    {
        q: "According to the Oke Oramfe's version of Yoruba origin, who led the messengers to the world after seizing the symbol of authority?",
        options: ["Obatala", "Oranmiyan", "Oduduwa", "Oranfe"],
        answer: 2,
        explanation: "According to the Oke Oramfe legend, Obatala (the leader) got drunk with palm wine. Oduduwa then seized the symbol of authority from him and led the party to the world. The site where they landed is traditionally known as Oke Oramfe in Ile-Ife."
    },
    {
        q: "The Oyo Empire was founded by which person?",
        options: ["Oduduwa", "Oranmiyan", "The Alaafin", "Bashorun"],
        answer: 1,
        explanation: "Various traditions believe that Oyo was founded by Oranmiyan, the son of Oduduwa, who is also credited with establishing the present Benin monarchy. The Oyo Empire was founded in the middle of the fifteenth century."
    },
    {
        q: "The Alaafin of Oyo was assisted by the Oyomesi, which was a council of how many members?",
        options: ["Five", "Seven", "Nine", "Twelve"],
        answer: 1,
        explanation: "The Alaafin's powers were limited and regulated by the Oyomesi, a council of seven members headed by the Bashorun who acted as the prime minister. The Oyomesi were also kingmakers who selected a new Alaafin upon the death of the existing one."
    },
    {
        q: "What was the role of the Bashorun in the Oyo Empire?",
        options: ["Commander of the army", "Prime minister and head of the Oyomesi council", "Head of the Ogboni cult", "Religious high priest"],
        answer: 1,
        explanation: "The Bashorun acted as the prime minister of the Oyo Empire and was the head of the seven-member Oyomesi council. The Oyomesi had the power to remove the Alaafin if he appeared dictatorial."
    },
    {
        q: "What was the function of the Ogboni cult in Yoruba political structure?",
        options: ["It commanded the army", "It played a mediatory role in conflicts between the Oyomesi and the Alaafin", "It collected taxes from provinces", "It appointed provincial governors"],
        answer: 1,
        explanation: "The Ogboni cult played a mediatory role in any conflict between the Oyomesi and the Alaafin. It was a kind of counter power to the Oyomesi and was composed of free and prominent members of society."
    },
    {
        q: "The title given to the head of the Oyo army was?",
        options: ["Bashorun", "Alaafin", "Are-Ona-Kankanfo", "Ilari"],
        answer: 2,
        explanation: "The head of the Oyo army was conferred with the coveted title of Are-Ona-Kankanfo. The army was made up of infantry and cavalry, and the Are-Ona-Kankanfo was expected to live outside the capital."
    },
    {
        q: "Personal agents of the Alaafin who were placed all over the provinces were called?",
        options: ["Baales", "Ilari", "Bashorun", "Ogboni"],
        answer: 1,
        explanation: "The Alaafin had personal agents called Ilari placed all over the provinces. Provincial governors renewed their allegiance to the Alaafin during the annual Bere festival."
    },

    // ---- BINI / BENIN KINGDOM ----
    {
        q: "The Bini people were the first ethnic group in Nigeria to be visited by Europeans. When did this occur?",
        options: ["1472 AD", "1500 AD", "1600 AD", "1800 AD"],
        answer: 0,
        explanation: "The Bini were the first to be visited by Europeans as early as 1472 AD. A Portuguese, Ruy de Sequeira, arrived during Ewuare's reign in 1472, while Alfonso de Aviero arrived during Ozolua's reign in 1484."
    },
    {
        q: "The Benin Kingdom was the first in West Africa to exchange ambassadors with which European power?",
        options: ["Britain", "France", "The Netherlands", "Portugal"],
        answer: 3,
        explanation: "The Benin Kingdom was the first in the West Coast of Africa to exchange ambassadors with a major European power — the Portuguese. This was between 1481 and 1504."
    },
    {
        q: "According to Egharevba's version, the Bini people first settled at which place before arriving at their present location?",
        options: ["Sudan", "Ile-Ife", "Oyo", "Nri"],
        answer: 1,
        explanation: "Egharevba (1968) claims that the Bini people emigrated from Egypt and, in the course of their journey southward, settled at Ile-Ife before finally arriving at their present location in Benin."
    },
    {
        q: "The first period of pre-colonial Bini history is known as the Ogiso era. What does 'Ogiso' mean?",
        options: ["Lords of the Earth", "Kings of the Sky", "Rulers of the River", "Chiefs of the Forest"],
        answer: 1,
        explanation: "The first period of pre-colonial Bini history is known as the Ogiso era because their rulers were called the Ogisos, which means 'kings of the sky'. The first Ogiso was known as Igbodo."
    },
    {
        q: "Who was the last Ogiso of Benin, and what happened to him?",
        options: ["Igbodo; he was killed in battle", "Erewho; he died of illness", "Owodo; he was banished due to a clash with nobles", "Ekaladeran; he fled to Ife"],
        answer: 2,
        explanation: "The last Ogiso was Owodo. He clashed with the nobles and became a victim of intrigues, leading to the banishment of his only son and heir apparent, Ekaladeran. Ekaladeran founded Ughoton before later moving to Ife."
    },
    {
        q: "Eweka I, the first Oba of Benin, was the son of which Ife prince?",
        options: ["Oduduwa", "Oranmiyan", "Igbodo", "Ekaladeran"],
        answer: 1,
        explanation: "Eweka I was the son of Oranmiyan (who came from Ife) born by a Bini woman, the daughter of the Enogie of Ego-Erinmwinda. Eweka I ascended the throne and is credited with establishing the present Bini dynasty, which still reigns in Benin today."
    },
    {
        q: "Succession to the throne of the Oba of Benin was by which principle?",
        options: ["Election by the council of nobles", "Appointment by the Ogiso", "Primogeniture — the first surviving son succeeds his father", "Selection by the Uzama"],
        answer: 2,
        explanation: "Succession to the throne in the Bini Kingdom was by primogeniture — that is, the first surviving son succeeded his father. The Oba was considered not only the civil head of state but also the religious head."
    },
    {
        q: "The Bini society was organized into two distinct classes. What were they?",
        options: ["Warriors and Priests", "Nobility (Adesotu) and Commoners (Ighiotu)", "Farmers and Traders", "Ogisos and Evians"],
        answer: 1,
        explanation: "The Bini society was classified into two distinct classes: 1) the nobility (Adesotu) and 2) the commoner (Ighiotu). The nobility was organized into three groups of title holders: the Uzama, the Eghaevbo n'Ogbe (palace chiefs), and the Eghaevbo n'ore (town chiefs)."
    },
    {
        q: "In Benin Kingdom, the common people were organized into professional groups called?",
        options: ["Age grades", "Guilds", "Confederacies", "Lineages"],
        answer: 1,
        explanation: "The ordinary people in Benin, especially those within the city, were organized into professional groups called guilds. There were guilds of carvers, brass-workers, blacksmiths, doctors, and butchers."
    },

    // ---- IGBO ----
    {
        q: "The Igbo people are best known for their 'acephalous' way of life. What does acephalous mean?",
        options: ["Having a strong central king", "Having no centralized state or king", "Having a military-based government", "Having a theocratic system of government"],
        answer: 1,
        explanation: "Acephalous means 'headless' — the Igbo people are known for their acephalous (or segmentary) way of life because from ancient times they had no centralized states, operating a kind of government without kings."
    },
    {
        q: "The Igbo people share political authority through which instrument, the staff of authority called?",
        options: ["Ozo", "Oha", "Ofo", "Amala"],
        answer: 2,
        explanation: "The Igbo share a common political system based on decentralization of power and delegation of authority exercised by the holders of the staff of authority called the Ofo."
    },
    {
        q: "According to the Nri version of Igbo origin, the ancestor of the Igbo, Eri, descended from the sky and sailed down which river?",
        options: ["River Niger", "River Benue", "River Anambra", "River Cross"],
        answer: 2,
        explanation: "According to the Nri version by Professor M.A. Onwuejeogwu (2000), the ancestor of the Igbo, Eri, descended from the sky and sailed down the River Anambra. He arrived at Aguleri and settled with an autochthonous group of people."
    },
    {
        q: "What was the 'Amala Oha' in traditional Igbo society?",
        options: ["A title given to the village head", "A form of general assembly where all adult male members met to perform legislative functions", "A secret cult for elders only", "A religious festival for the Igbo people"],
        answer: 1,
        explanation: "Amala Oha was a form of general assembly in traditional Igbo society. All male adult members met in this assembly to perform legislative functions. Decisions taken during those meetings were absolute and final."
    },
    {
        q: "In traditional Igbo society, the recognition of an individual was based on?",
        options: ["Family background and royal blood", "Individual capability and age rather than family background", "Wealth alone", "Religious position in the community"],
        answer: 1,
        explanation: "As a democratic society, the recognition of an individual in traditional Igbo society was based on individual capability and age rather than family background. Hardworking and wealthy individuals were respected and given important responsibilities."
    },
    {
        q: "Which version of Igbo origin links their ancestors to the lost tribes of the ancient Hebrews?",
        options: ["The Nri Version", "The Benin Version", "The Israeli Version", "The Idah Version"],
        answer: 2,
        explanation: "The Israeli version is one of the most popular migratory stories of origin of the Igbo people. It is based on supposed similarities between Igbo and ancient Hebrew cultures. Some Igbo scholars consider themselves offshoots of the lost tribes of the Hebrews who migrated southward."
    },

    // ---- ITSEKIRI, URHOBO, IJAW ----
    {
        q: "The kingdom of Itsekiri was established by Iginuwa, who was the son of which Oba of Benin?",
        options: ["Oba Ewuare", "Oba Ozolua", "Oba Olua", "Oba Oranmiyan"],
        answer: 2,
        explanation: "Iginuwa is known as the man through whom the kingdom of Itsekiri was established. He was the son and heir apparent of Oba Olua of Benin in about 1473."
    },
    {
        q: "The capital of Itsekiri Kingdom is called?",
        options: ["Warri", "Ode Itsekiri", "Forcados", "Escravos"],
        answer: 1,
        explanation: "Ode Itsekiri is the capital of the Itsekiri Kingdom. Other settlements such as Forcados, Escravos, and Benin Rivers surround the capital."
    },
    {
        q: "The ruler of the Itsekiri Kingdom was known as the?",
        options: ["Oba", "Attah", "Olu", "Ovie"],
        answer: 2,
        explanation: "The Itsekiri Kingdom was ruled by the Olu. He alone presided over a council known as Ojoye, which was made up of seven nobles or title holders. The Olu combined in himself both spiritual and temporal powers."
    },
    {
        q: "Unlike the Itsekiri, the Urhobo people have never established a single kingdom because they are?",
        options: ["Too small in population", "Fragmented and live in different places in the Niger Delta area", "Predominantly nomadic", "Ruled by a foreign dynasty"],
        answer: 1,
        explanation: "Unlike the Itsekiri and Benin, the Urhobo people have never established a single kingdom. Each Urhobo village has its own traditional institution headed by a ruler (Ovie), because the Urhobo are fragmented and live in different places in the Niger Delta."
    },
    {
        q: "The ruler of a traditional Urhobo village was called?",
        options: ["Olu", "Attah", "Ovie", "Sarki"],
        answer: 2,
        explanation: "Each Urhobo village had its own traditional institution headed by a ruler called the Ovie. The socio-political organization of the Urhobo people was modeled after that of Benin Kingdom."
    },
    {
        q: "What type of political system did the traditional Ijaw people practice?",
        options: ["A strong centralized monarchy", "No centralized system of government", "A theocratic state", "A military dictatorship"],
        answer: 1,
        explanation: "The traditional Ijaw did not develop any centralized system of government. This may have been because they were scattered in small fishing settlements in the creeks of the River Niger. Their societies were characterized by the 'House System'."
    },
    {
        q: "What were the traditional major Ijaw states?",
        options: ["Oyo, Ife, and Ijebu", "Bonny, Kalabari, Ibrika, Opobo, and Brass-Nembe", "Daura, Kano, and Zaria", "Nri, Awka, and Onitsha"],
        answer: 1,
        explanation: "The traditional major Ijaw states were Bonny, Kalabari, Ibrika, Opobo, and Brass-Nembe. The Ijaw people were traders and especially fishermen."
    },

    // ---- HAUSA / KANEM-BORNU / IGALA ----
    {
        q: "According to the Bayajida legend, what heroic act did Bayajida perform in Daura that led to him marrying the queen?",
        options: ["He defeated an enemy army", "He built a great mosque", "He killed a snake that had prevented people from taking water from a well", "He established a new trade route"],
        answer: 2,
        explanation: "According to the Bayajida legend, while in Daura, Bayajida helped kill a snake which had for a long time prevented the people from taking water from a well. The queen of Daura was impressed and decided to marry him. Their son Bawo's six children are believed to have founded the original seven Hausa states."
    },
    {
        q: "The original seven Hausa states founded by the descendants of Bayajida are referred to as?",
        options: ["Hausa Confederacy", "Hausa Bokwoi", "Hausa Caliphate", "Hausa Emirates"],
        answer: 1,
        explanation: "Bawo (son of Bayajida and the queen of Daura) had six children who, together with Bayajida's other son at Biran, are believed to have founded the original seven Hausa states referred to as the 'Hausa Bokwoi'."
    },
    {
        q: "The full title given to the head of a Hausa State was?",
        options: ["Sarki Kano", "Sarkin Kasar", "Galadima", "Alkali"],
        answer: 1,
        explanation: "Sarkin Kasar, meaning 'ruler of the land', was the full title given to any effective and efficient head of a Hausa State. The Sarkin Kasar combined both political and religious/spiritual functions and was also the chief executive and judge of the State."
    },
    {
        q: "The Islamization of Hausaland led to which new law system taking shape?",
        options: ["Common Law", "Customary Law", "Sharia Law", "Constitutional Law"],
        answer: 2,
        explanation: "The Islamization of Hausaland influenced its judicial system. Sharia law started taking shape, and new titles such as Alkali and Qadi's (judges) became commonplace in the administration of justice."
    },
    {
        q: "The 'Saifawa dynasty' in Kanem-Bornu is attributed to which founder?",
        options: ["The So people", "Saif b. Dhiyazan (Yazan)", "Bayajida", "The Mai"],
        answer: 1,
        explanation: "The tradition of Kanem-Bornu attributes the foundation of Kanem-Bornu and the establishment of the Saifawa dynasty to the great Arab hero, Saif b. Dhiyazan (Yazan). This happened between the 9th and 10th centuries AD. The Saifawa dynasty was one of the longest ruling dynasties in pre-colonial West African history."
    },
    {
        q: "In the Kanem-Bornu political structure, the highest authority was the Mai (king). Who was an equally important and highly respected personage in this structure?",
        options: ["The Nokena", "The Maini Kanendi", "The Queen Mother or Magira", "The Galadima"],
        answer: 2,
        explanation: "Alongside the Mai, his mother — the Queen Mother or Magira — was a very important and respected personage in the Kanem political structure. The King's sister also assisted in the day-to-day administration."
    },
    {
        q: "The chief judge of the Kanem-Bornu State who also served as the Mai's legal adviser was called?",
        options: ["Nokena", "Maini Kanendi", "Kaigama", "Mushemu"],
        answer: 1,
        explanation: "The Maini Kanendi was the chief judge of the Kanem-Bornu State. He played a major role in the Kanem political structure and by his position was the Mai's legal adviser."
    },
    {
        q: "The most important titled nobles in the Kanem-Bornu political structure included all EXCEPT?",
        options: ["Galadima", "Kaigama", "Yerima", "Bashorun"],
        answer: 3,
        explanation: "The most important titled nobles in Kanem-Bornu were the Galadima, Kaigama, Yerima, and Meshema. Bashorun was a title in the Oyo (Yoruba) political structure, not in Kanem-Bornu."
    },
    {
        q: "The capital state of the Igala people has always been known as?",
        options: ["Lokoja", "Idah", "Ankpa", "Igbedo"],
        answer: 1,
        explanation: "Idah has always been known as the capital state of the Igala people. The Igala political dynasty was founded by Ayagba or Idoko, who is credited as the ancestor of all the Attahs."
    },
    {
        q: "Ayagba is credited with helping the Igala people break away from the rule of which group?",
        options: ["The Yoruba", "The Bini", "The Jukun", "The Hausa"],
        answer: 2,
        explanation: "Ayagba (or Idoko) is best known as the ancestor of all the Attahs and the founder of the present Igala dynasty. He is credited with helping the Igala people break away from the Jukun rule."
    },

    // ---- COLONIAL RULE ----
    {
        q: "Before European intrusion, the area now known as Nigeria was?",
        options: ["A unified nation under one king", "A single Islamic caliphate", "A dynamic patchwork of kingdoms, empires, city-states, and autonomous communities", "An empty uninhabited land"],
        answer: 2,
        explanation: "Before European intrusion, the area now known as Nigeria was not a single political entity but a dynamic patchwork of kingdoms, empires, city-states, and autonomous communities, each with distinct political, economic, and cultural systems."
    },
    {
        q: "The Sokoto Caliphate was established in which year by Usman Dan Fodio?",
        options: ["1776", "1804", "1860", "1914"],
        answer: 1,
        explanation: "The Sokoto Caliphate was established in 1804 by Usman Dan Fodio. It was a theocratic Islamic state governed through a network of emirates, with a centralized administration and an active trans-Saharan trade system."
    },
    {
        q: "Britain officially abolished the slave trade in which year?",
        options: ["1776", "1800", "1807", "1884"],
        answer: 2,
        explanation: "Britain abolished the slave trade in 1807. After abolition, palm oil became the dominant export, earning Southern Nigeria the name 'Oil Rivers Protectorate' by 1884."
    },
    {
        q: "The Berlin Conference of 1884-1885 formalized European colonization by requiring?",
        options: ["All African chiefs to sign peace treaties", "'Effective occupation' of territory to claim it", "European powers to pay Africans for their land", "All African kingdoms to pay tribute to Europe"],
        answer: 1,
        explanation: "The Berlin Conference of 1884-1885 formalized European colonization by requiring 'effective occupation' to claim territory. Britain, already economically present through private firms, moved quickly to secure the Niger basin."
    },
    {
        q: "The Royal Niger Company (RNC) was founded by which individual?",
        options: ["Lord Lugard", "Sir Hugh Clifford", "George Taubman Goldie", "Sir Ralph Moor"],
        answer: 2,
        explanation: "The Royal Niger Company (RNC) was founded by George Taubman Goldie in 1879 and was chartered in 1886. It signed hundreds of treaties with chiefs and maintained its own armed forces, acting as a quasi-government until 1900."
    },
    {
        q: "The Royal Niger Company's charter was revoked in which year?",
        options: ["1884", "1886", "1899", "1914"],
        answer: 2,
        explanation: "The British government revoked the Royal Niger Company's charter on December 31, 1899, because the company was primarily profit-driven, failed to protect British interests against French and German encroachment, and alienated the local population."
    },
    {
        q: "The British defeated the Sokoto Caliphate in the North in which year?",
        options: ["1892", "1897", "1901", "1903"],
        answer: 3,
        explanation: "In the north, British forces defeated the Sokoto Caliphate in 1903 after capturing Kano and Sokoto. Sultan Attahiru I fled and was killed at Burmi."
    },
    {
        q: "The 'Benin Expedition' of 1897 is historically significant because the British?",
        options: ["Signed a peace treaty with the Oba", "Established a trading post in Benin", "Destroyed the Benin Kingdom and looted its famous bronze artworks", "Introduced Christianity to Benin"],
        answer: 2,
        explanation: "The Benin Expedition of 1897 destroyed the Benin Kingdom and looted its famous bronze artworks, which are now displayed in museums around the world, particularly the British Museum."
    },
    {
        q: "The Anglo-Aro War of 1901-1902 was aimed at?",
        options: ["Conquering the Oyo Empire", "Dismantling the Aro Confederacy's economic and spiritual influence", "Capturing the Bini King", "Establishing a trade route through the Niger Delta"],
        answer: 1,
        explanation: "The Anglo-Aro War (1901-1902) was fought in South-Eastern Nigeria and dismantled the Aro Confederacy's economic and spiritual influence. The Aro Confederacy had controlled the Long Juju oracle, which was central to Igbo trade and society."
    },
    {
        q: "The British system of 'Indirect Rule' was conceptualized and implemented by?",
        options: ["Sir Hugh Clifford", "Sir Arthur Richards", "Lord Frederick Lugard", "Sir John Macpherson"],
        answer: 2,
        explanation: "Indirect Rule was a policy conceptualized and implemented by Lord Frederick Lugard during his tenure as High Commissioner of Northern Nigeria and later as Governor-General of the amalgamated colony."
    },
    {
        q: "Indirect Rule was primarily born out of which practical reason?",
        options: ["Respect for African culture", "The British desire to spread Christianity faster", "Pragmatic necessity — the British were underfunded and lacked personnel to govern directly", "A genuine desire to integrate Nigeria"],
        answer: 2,
        explanation: "While justified by Lugard as preserving African cultural institutions, Indirect Rule was primarily born out of pragmatic necessity. The British colonial administration was severely underfunded and lacked the personnel to directly govern the vast and populous territory."
    },
    {
        q: "The three institutional pillars Lugard established to operationalize Indirect Rule were?",
        options: ["Native Schools, Native Markets, and Native Banks", "Native Administration, Native Courts, and Native Treasuries", "Regional Councils, Provincial Offices, and District Courts", "Chiefs' Councils, Police Forces, and Tax Offices"],
        answer: 1,
        explanation: "Lugard established a tripartite institutional machinery comprising the Native Administration (local executives), Native Courts (to adjudicate local disputes using customary law), and Native Treasuries (to manage local finances and tax collection)."
    },
    {
        q: "Why was Indirect Rule most successful in Northern Nigeria?",
        options: ["Because the North had no traditional rulers to deal with", "Because the Hausa-Fulani Emirate system perfectly aligned with the British preference for hierarchical, centralized control", "Because Northern Nigerians welcomed British rule enthusiastically", "Because Northern Nigeria was economically more developed"],
        answer: 1,
        explanation: "Indirect Rule was a resounding success in Northern Nigeria because the pre-colonial Hausa-Fulani Emirate system perfectly aligned with the British preference for hierarchical, centralized control. The British Resident would 'advise' the Emir while the centralized bureaucracy for taxation and justice already existed."
    },
    {
        q: "Indirect Rule failed among the Igbo because the British invented 'Warrant Chiefs'. What was wrong with this system?",
        options: ["The Warrant Chiefs were too expensive to pay", "The Warrant Chiefs had no traditional legitimacy and were often appointed based on willingness to collaborate rather than lineage or community standing", "The Warrant Chiefs refused to collect taxes", "The Warrant Chiefs were not Igbo people"],
        answer: 1,
        explanation: "The Warrant Chiefs had absolutely no traditional legitimacy. They were often appointed based on willingness to collaborate with the British rather than lineage or community standing. This led to massive resentment and ultimately a coordinated rebellion against the system."
    },
    {
        q: "The 1914 Amalgamation of Nigeria officially merged which three entities?",
        options: ["Eastern, Western, and Northern Protectorates", "Northern Nigeria Protectorate, Southern Nigeria Protectorate, and Lagos Colony", "Lagos Colony, Calabar Province, and Sokoto Caliphate", "Oil Rivers Protectorate, Benin Kingdom, and Northern Nigeria"],
        answer: 1,
        explanation: "The 1914 Amalgamation officially merged the Northern Nigeria Protectorate, the Southern Nigeria Protectorate, and the Lagos Colony into a single entity known as the Colony and Protectorate of Nigeria."
    },
    {
        q: "The Lagos Colony was first annexed by Britain in which year?",
        options: ["1807", "1861", "1884", "1900"],
        answer: 1,
        explanation: "The Lagos Colony was annexed in 1861, earlier than the formal protectorates. It served as a separate crown colony and the economic headquarters of the South for several decades before the 1914 Amalgamation."
    },
    {
        q: "What advisory body did Lugard create in 1914 to give an 'illusion of local participation' in the newly amalgamated Nigeria?",
        options: ["The Executive Council", "The Legislative Assembly", "The Nigerian Council", "The House of Chiefs"],
        answer: 2,
        explanation: "Lugard established the Nigerian Council in 1914. It comprised British officials and a few nominated traditional chiefs. However, it had no legislative or executive powers and was merely consultative. It was dissolved in 1915 when Northern Emirs objected to sitting with Southern chiefs."
    },
    {
        q: "The primary motivation behind the 1914 Amalgamation of Nigeria was?",
        options: ["To promote cultural unity among Nigerians", "Economic survival — specifically to use the South's revenue to fund the North's deficit", "To spread Christianity across the North", "To create a military superpower in West Africa"],
        answer: 1,
        explanation: "The primary motivation for the amalgamation was economic survival. The Northern Nigeria Protectorate was heavily in deficit and relied on British treasury grants, while the Southern Protectorate generated significant revenue. Amalgamation allowed the South's revenue to subsidize the North."
    },
    {
        q: "Who was the first Governor-General of the amalgamated Nigeria after 1914?",
        options: ["Sir Ralph Moor", "Sir Hugh Clifford", "Lord Frederick Lugard", "Sir Arthur Richards"],
        answer: 2,
        explanation: "Lord Frederick Lugard became the first Governor-General of the amalgamated Nigeria, headquartered in Lagos. He appointed two Lieutenant-Governors to administer the Northern and Southern provinces separately."
    },

    // ---- CONSTITUTIONAL EVOLUTION ----
    {
        q: "The Clifford Constitution of 1922 introduced the Elective Principle. How many elective seats did it provide?",
        options: ["Two (2)", "Four (4)", "Six (6)", "Ten (10)"],
        answer: 1,
        explanation: "The Clifford Constitution provided for four elective seats: three for Lagos and one for Calabar. For the first time, Nigerians could vote to elect representatives to the Legislative Council rather than having all members appointed by the Governor."
    },
    {
        q: "The Richards Constitution of 1946 divided Nigeria into how many distinct regions?",
        options: ["Two", "Three", "Four", "Six"],
        answer: 1,
        explanation: "The Richards Constitution of 1946 divided Nigeria into three distinct regions: the Northern Region, the Western Region, and the Eastern Region. Each region was given a Regional Council while a central Legislative Council in Lagos handled national issues."
    },
    {
        q: "Nigerian nationalists, particularly Nnamdi Azikiwe and the NCNC, condemned the Richards Constitution because they argued it was designed to?",
        options: ["Grant independence too quickly", "Divide and rule, keeping Nigerians focused on regional issues rather than national independence", "Give too much power to traditional rulers", "Impose Sharia law in the North"],
        answer: 1,
        explanation: "Nigerian nationalists condemned the Richards Constitution as being designed to divide and rule, keeping Nigerians focused on regional issues rather than demanding national independence. The fact that it was drafted entirely in London without consulting Nigerians added to the resentment."
    },
    {
        q: "The Macpherson Constitution of 1951 was unique because it involved Nigerians in its drafting through a process that started at the?",
        options: ["Federal level and moved down to village level", "Village level, moved to district and provincial councils, then to regional houses, and culminated in a general conference in Ibadan", "British Parliament first, then Nigerian representatives", "Only in regional capital cities"],
        answer: 1,
        explanation: "The Macpherson Constitution attempted to correct flaws of the Richards Constitution by involving Nigerians in the drafting process through a grassroots consultation that started at the village level, moved to district and provincial councils, then to regional houses, and culminated in a general conference in Ibadan in 1950."
    },
    {
        q: "The Lyttelton Constitution of 1954 divided legislative powers into three lists. Which list covered matters only the Federal Government could handle, like defense and currency?",
        options: ["Concurrent List", "Residual List", "Exclusive List", "Reserved List"],
        answer: 2,
        explanation: "The Lyttelton Constitution divided legislative powers into three lists: the Exclusive List (matters only the Federal Government could handle, like defense and currency), the Concurrent List (matters both Federal and Regional governments could handle), and the Residual List (matters left entirely to the Regions)."
    },
    {
        q: "Nigeria gained independence in which year?",
        options: ["1954", "1957", "1960", "1963"],
        answer: 2,
        explanation: "Nigeria gained independence in 1960 under the Independence Constitution, which established a parliamentary system based on the British Westminster model. Sir Abubakar Tafawa Balewa became the Prime Minister while Dr. Nnamdi Azikiwe was the ceremonial Governor-General."
    },
    {
        q: "Nigeria became a fully independent republic (breaking all ties with the British Crown) in which year?",
        options: ["1960", "1961", "1963", "1966"],
        answer: 2,
        explanation: "Nigeria became a fully republic on October 1, 1963 under the Republican Constitution. The British Monarch was replaced by a Nigerian President (Dr. Nnamdi Azikiwe) as the ceremonial Head of State, and the Supreme Court replaced the Privy Council in London as the highest judicial authority."
    },
    {
        q: "The 1963 Republican Constitution also formalized the creation of which new region?",
        options: ["The North-Central Region", "The Mid-Western Region", "The Benue-Plateau Region", "The Rivers State Region"],
        answer: 1,
        explanation: "The 1963 Republican Constitution formalized the creation of the Mid-Western Region, reflecting the growing demands of minority groups who felt underrepresented in the three original regions."
    },

    // ---- POLITICAL PARTIES ----
    {
        q: "The Nigerian National Democratic Party (NNDP) was founded in which year?",
        options: ["1914", "1919", "1922", "1934"],
        answer: 2,
        explanation: "The Nigerian National Democratic Party (NNDP) was founded by Herbert Macaulay in 1922, in response to the Clifford Constitution which introduced the elective principle. It dominated Lagos politics for over a decade."
    },
    {
        q: "The Nigerian Youth Movement (NYM) was formed in which year as an attempt at a truly national, non-ethnic political movement?",
        options: ["1922", "1934", "1944", "1951"],
        answer: 1,
        explanation: "The Nigerian Youth Movement (NYM) was formed in 1934 as an attempt to create a truly national, non-ethnic political movement. It initially succeeded but eventually fractured along ethnic lines in the early 1940s."
    },
    {
        q: "The National Council of Nigeria and the Cameroons (NCNC) was founded in which year?",
        options: ["1934", "1944", "1951", "1953"],
        answer: 1,
        explanation: "The NCNC was formed in 1944. It was founded as a nationalist pressure group by Herbert Macaulay. After his death, Nnamdi Azikiwe took over. Initially national in outlook, it eventually became the dominant party in the Eastern Region."
    },
    {
        q: "The Action Group (AG) evolved from which cultural organization?",
        options: ["Jamiyyar Mutanen Arewa", "The Igbo State Union", "Egbe Omo Oduduwa", "The Ekine Society"],
        answer: 2,
        explanation: "The Action Group (AG) was formed in 1951 and evolved from the Egbe Omo Oduduwa, a Yoruba cultural organization. Its leader was Chief Obafemi Awolowo, and it dominated Western Nigeria with a progressive, social democratic ideology."
    },
    {
        q: "The Northern People's Congress (NPC) was formed in which year?",
        options: ["1944", "1950", "1951", "1953"],
        answer: 2,
        explanation: "The Northern People's Congress (NPC) was formed in 1951. It evolved from the Jamiyyar Mutanen Arewa and was heavily backed by Northern traditional rulers. Its leaders included Sir Ahmadu Bello and Sir Abubakar Tafawa Balewa."
    },
    {
        q: "The Northern Elements Progressive Union (NEPU) was founded in which year and by whom?",
        options: ["1950, by Ahmadu Bello", "1950, by Aminu Kano", "1952, by Nnamdi Azikiwe", "1951, by Herbert Macaulay"],
        answer: 1,
        explanation: "The Northern Elements Progressive Union (NEPU) was founded in 1950 by Aminu Kano. It represented the talakawa (commoners) who were marginalized by the emirate system and opposed the conservative NPC."
    },
    {
        q: "The United Middle Belt Congress (UMBC) was formed in 1952 primarily to?",
        options: ["Support the NPC and spread Islam", "Represent ethnic and religious minority groups in the Middle Belt opposing the NPC", "Support Igbo political interests in the North", "Demand immediate independence from Britain"],
        answer: 1,
        explanation: "The United Middle Belt Congress (UMBC) was formed in 1952 to represent ethnic and religious minority groups in the Middle Belt who opposed the NPC and the spread of Islam in their regions."
    },
    {
        q: "Which of the following best explains why political parties in Nigeria became largely regional after 1946?",
        options: ["Nigerian politicians preferred regional politics to national unity", "The Richards Constitution of 1946 entrenched regionalism, incentivizing politicians to focus on regional interests and ethnic mobilization", "British colonial authorities banned national political parties", "Nigerian ethnic groups had always been rivals before colonialism"],
        answer: 1,
        explanation: "The Richards Constitution of 1946 entrenched regionalism by dividing Nigeria into three distinct regions. This political structure incentivized politicians to focus on regional interests and to mobilize support along ethnic lines, making truly national parties very difficult to build."
    },
    {
        q: "The collapse of the Nigerian First Republic and the subsequent Civil War were primarily results of?",
        options: ["A military coup from an external country", "Failure to build national identity, failure to manage power-sharing, and failure to address economic disparities", "Natural disasters destroying the economy", "British interference after independence"],
        answer: 1,
        explanation: "The collapse of the First Republic and the Civil War resulted from the failure to build a sense of national identity, the failure to manage power-sharing arrangements, and the failure to address economic disparities — all rooted in the structural flaws of the colonial political system."
    },
    {
        q: "The 1953 political crisis involving a motion for self-government by 1956 exposed the weakness of which constitution?",
        options: ["The Clifford Constitution of 1922", "The Richards Constitution of 1946", "The Macpherson Constitution of 1951", "The Lyttelton Constitution of 1954"],
        answer: 2,
        explanation: "The 1953 crisis tested the Macpherson Constitution almost immediately. When Obafemi Awolowo moved a motion demanding self-government by 1956 and the Northern delegation rejected it, it led to riots in Kano and revealed that the quasi-federal system was unworkable."
    },
    {
        q: "The Nigerian Civil War lasted from?",
        options: ["1960 to 1963", "1967 to 1970", "1964 to 1966", "1970 to 1975"],
        answer: 1,
        explanation: "The Nigerian Civil War lasted from 1967 to 1970. The persistent ethnic mistrust and feelings of marginalization inherent in the colonial setup, combined with post-independence political crises, ultimately culminated in this tragic conflict."
    },

    // ---- MIXED / TRICKY QUESTIONS ----
    {
        q: "Which of the following statements about the 1914 Amalgamation is INCORRECT?",
        options: ["It was effected on January 1, 1914", "It was motivated primarily by a desire for genuine social integration of Nigerians", "Lord Lugard was its principal architect", "It created the Colony and Protectorate of Nigeria"],
        answer: 1,
        explanation: "The 1914 Amalgamation was NOT motivated by a genuine desire for social integration. Historical analysis reveals it was fundamentally an administrative and economic convenience orchestrated by the British, rather than a genuine political or social integration of the diverse indigenous populations."
    },
    {
        q: "Before the formal protectorates were declared on January 1, 1900, what administrative entity governed the Niger territories on behalf of Britain?",
        options: ["The British Army", "The Royal Niger Company", "The East India Company", "The Lagos Colonial Office"],
        answer: 1,
        explanation: "Before the formal protectorates were declared on January 1, 1900, the Royal Niger Company (led by George Taubman Goldie) administered the territories on behalf of Britain. The company was granted a royal charter in 1886 but its charter was revoked in 1899."
    },
    {
        q: "The concept of culture as 'totality of human life' includes which of the following?",
        options: ["Only religious belief and language", "Only food and dressing", "Religious belief, language, food, dresses, tools, technology, tradition, mores, custom, values, art, music, literature, and social norms", "Only art, music, and literature"],
        answer: 2,
        explanation: "Culture in its broadest sense is described as the totality of human life, comprising religious belief, language, food, dresses, tools/technology, tradition, mores, custom, values, art, music, literature, and social norms."
    },
    {
        q: "The Ijebu War of 1892 was fought because the British wanted to?",
        options: ["Convert the Ijebu people to Christianity", "Crush Ijebu opposition to trade access", "Establish a railway through Ijebu territory", "Punish the Ijebu for harboring fugitives"],
        answer: 1,
        explanation: "The British launched the Ijebu War in 1892 to crush Ijebu opposition to trade access. The Ijebu had been blocking British merchants from accessing trade routes through their territory."
    },
    {
        q: "Which of the following is a POSITIVE impact of the 1914 Amalgamation of Nigeria?",
        options: ["It forced ethnic groups to abandon their cultures", "It created a large, unified market and facilitated a unified transport and communication network", "It eliminated all ethnic tensions permanently", "It gave Northern Nigeria equal access to Western education as the South"],
        answer: 1,
        explanation: "On the positive side, the 1914 Amalgamation created a large, unified market for exchange of goods and services. It also facilitated the development of a unified transport and communication network, particularly the railway system connecting Northern hinterlands to Southern seaports."
    },
    {
        q: "The structural gap between Northern and Southern Nigeria that the 1914 Amalgamation inadvertently widened was mainly in the area of?",
        options: ["Agriculture and food production", "Military strength", "Western education and modern economic activities", "Traditional religious practices"],
        answer: 2,
        explanation: "The amalgamation widened the structural and educational gap between North and South. The South advanced rapidly in Western education and modern economic activities, while the North was deliberately kept isolated to protect its traditional Islamic feudal system."
    },
];