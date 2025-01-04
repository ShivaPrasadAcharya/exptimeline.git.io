// Data structure for multiple timelines
export const timelineGroups = {
  publicService: {
    id: 'publicService',
    title: {
      en: 'Public Service Reforms in Nepal',
      ne: 'नेपालमा सार्वजनिक सेवा सुधार'
    },
    index: {
      en: [
        "1. Introduction",
        "2. Early Reforms",
        "3. Modern Period Reforms",
        "4. Digital Transformation"
      ],
      ne: [
        "१. परिचय",
        "२. प्रारम्भिक सुधारहरू",
        "३. आधुनिक कालका सुधारहरू",
        "४. डिजिटल रूपान्तरण"
      ]
    },
    data: [
       {
    year: "Rana Period | राणा काल",
    title: {
      en: "Introduction of Public Complaint Boxes",
      ne: "सार्वजनिक उजुरी पेटिकाको सुरुवात"
    },
    description: {
      en: "Dev Shamsher introduced complaint boxes in public places to hear public grievances directly.",
      ne: "देव शम्शेरले सार्वजनिक स्थलहरूमा उजुरी पेटिका राखी जनगुनासा आफैले सुनुवाइ गर्न थालेका थिए।"
    },
    category: "complaint"
  },
  {
    year: "1957 | २०१४",
    title: {
      en: "Work Efficiency Committee",
      ne: "कार्य शीघ्र कारक समिति"
    },
    description: {
      en: "King Mahendra established 'Quick Action Committee Act 2014' under Major General Yog Bikram Rana.",
      ne: "राजा महेन्द्रले 'कार्य शीघ्र कारक समिति ऐन, २०१४' जारी गरी मेजर जनरल योग विक्रम राणाको अध्यक्षतामा एक समिति गठन।"
    },
    category: "administration"
  },
  {
    year: "1961 | २०१८",
    title: {
      en: "Monitoring Teams",
      ne: "दौडाहा टोली"
    },
    description: {
      en: "King Mahendra deployed inspection teams and established 'Investigation Center' under Crown Prince.",
      ne: "राजा महेन्द्रले दौडाहा टोली खटाई सेवा वितरणको निगरानी र दरबारमा 'जाँचबुझ केन्द्र' खडा।"
    },
    category: "monitoring"
  },
  {
    year: "1975 | २०३२",
    title: {
      en: "District Administration Plan",
      ne: "जिल्ला प्रशासन योजना"
    },
    description: {
      en: "Implementation of 'District Administration Plan 2031' introducing Single Clearing House concept.",
      ne: "'जिल्ला प्रशासन योजना, २०३१' लागू गरेर Single Clearing House को अवधारणाको थालनी।"
    },
    category: "administration"
  },
  {
    year: "1999 | २०५६",
    title: {
      en: "Citizen Charter Initiative",
      ne: "नागरिक बडापत्रको सुरुवात"
    },
    description: {
      en: "Introduction of 'Income for Poor, Justice for Helpless' directive and first Citizen Charter.",
      ne: "'गरिबलाई आय निमुखालाई न्याय' नाम दिएर सार्वजनिक सेवा सुधारको निर्देशिका र पहिलो नागरिक बडापत्र।"
    },
    category: "governance"
  },
  {
    year: "2002 | २०५९",
    title: {
      en: "Mobile Service Implementation",
      ne: "घुम्ती सेवाको सुरुवात"
    },
    description: {
      en: "Introduction of 'Mobile Service' during Maoist conflict to deliver services in remote areas.",
      ne: "माओवादी द्वन्द्वको समयमा 'घुम्ती सेवा' सञ्चालन गरी सेवा वितरणको पहुँच विस्तार।"
    },
    category: "service"
  },
  {
    year: "2007 | २०६४",
    title: {
      en: "Good Governance Act",
      ne: "सुशासन ऐन"
    },
    description: {
      en: "Implementation of Good Governance Act 2064 institutionalizing Citizen Charter and public hearings.",
      ne: "सुशासन ऐन, २०६४ जारी गरी नागरिक बडापत्र, सार्वजनिक सुनुवाइ र क्षतिपूर्तिको प्रावधान।"
    },
    category: "governance"
  },
  {
    year: "Present | वर्तमान",
    title: {
      en: "Digital Governance",
      ne: "डिजिटल शासन"
    },
    description: {
      en: "Implementation of e-governance through Nagarik Apps, Mero Kitta, and PSC Mobile App.",
      ne: "नागरिक एप्स, मेरो कित्ता, लोक सेवा आयोगको मोबाइल एप्स र अनलाइन सेवाहरूको कार्यान्वयन।"
    },
    category: "digital"
  }
    ]
  },
  administrativeReform: {
    id: 'administrativeReform',
    title: {
      en: 'Administrative Reforms in Nepal',
      ne: 'नेपालमा प्रशासन सुधार'
    },
    data: [
      {
year: "2009 BS | २००९",
title: {
en: "Administrative Reorganization Committee (Buch Commission)",
ne: "प्रशासनिक पुनर्गठन समिति (बुच कमिशन)"
},
description: {
en: "• Known as 'Buch Commission'\n• Led by N.M. Buch (sent by Indian Government)\n <span style=\"text-decoration: underline;\">मुख्य सिफारिसहरू</span> Key recommendations: <*/span>\n   • New appointments only through Public Service Commission consultation\n   • Review of staff benefits through Public Service Commission\n   • Implementation of decentralization system\n   • Formulation of civil service and financial administration laws\n   • Reorganization of ministries and departments, limiting ministries to 11\n   • Conduct examinations for staff management\n   • Provision of staff training\n   • Investigation measures for corruption\n   • Replacement of Cabinet Secretary system with Chief Secretary\n   • Gradual improvement of law and legal procedures\n   • Recruitment of high-ranking officers from India",
ne: "• बुच कमिशनको नामले चिनिन्छ\n• एन.एम. बुचको नेतृत्वमा गठित (भारत सरकारद्वारा पठाइएको)\n <span style=\"text-decoration: underline;\">मुख्य सिफारिसहरू</span> मुख्य सिफारिसहरू:</span>\n   • लोक सेवा आयोगको परामर्शबाट मात्र नयाँ कर्मचारीको नियुक्ति हुनुपर्ने\n   • कर्मचारीहरूको तलब सुविधाको पुनरावलोकन लोक सेवा आयोगबाट गर्ने\n   • विकेन्द्रीकरणको व्यवस्था अवलम्बन गर्नुपर्ने\n   • निजामती प्रशासन र आर्थिक प्रशासनसम्बन्धी कानूनको तर्जुमा गर्नुपर्ने\n   • मन्त्रालय र विभागको पुनर्गठन गर्ने मन्त्रालयको संख्या ११ वटामा सीमित गर्ने\n   • कर्मचारीको व्यवस्थापन गर्न परीक्षा संचालन गरिनुपर्ने\n   • कर्मचारीलाई तालिमको व्यवस्था गर्ने\n   • भ्रष्टाचारको जाँच गर्ने उपायहरू खोज्नुपर्ने\n   • प्रमुख सचिवको व्यवस्था गरी क्याबिनेट सेक्रेटरीको प्रणाली हटाउनुपर्ने\n   • कानून र कानूनी प्रक्रियाको सुधार क्रमिक रूपमा गरिनुपर्ने\n   • उच्चपदस्थ अधिकृतहरू भारतबाट ल्याउनुपर्ने"
},
category: "complaint"
},
 {
year: "2013 BS | २०१३",
title: {
en: "Administrative Reorganization Planning Commission (Tanka Prasad Acharya)",
ne: "प्रशासन पुनर्गठन योजना आयोग (टंकप्रसाद आचार्य)"
},
description: {
en: "• Chairman: Prime Minister Tank Prasad Acharya\n• Key recommendations:\n   • Establish district, village and block systems for administrative decentralization\n   • Form various subject-specific services in civil service\n   • Establish Ministry of Planning Development for plan formulation\n   • Classify current and development budgets\n   • Implement new salary scale\n   • Formulate new laws regarding employee service conditions\n   • Establish administrative training center\n   • Formulate district administration reorganization plan\n   • Initiate five-year planning\n   • Form technical committees in ministries\n   • Emphasize rural development\n   • Reorganize and reduce number of employees\n   • Reorganize ministries",
ne: "• अध्यक्ष: प्रधानमन्त्री टंक प्रसाद आचार्य\n• मुख्य सिफारिसहरू:\n   • प्रशासनिक विकेन्द्रीकरणको लागि जिल्ला, ग्राम र ब्लकहरूको व्यवस्था गर्ने\n   • निजामती सेवामा विभिन्न विषयगत सेवाहरूको गठन गर्ने\n   • योजना तर्जुमाका लागि योजना विकास मन्त्रालयको स्थापना गर्ने\n   • चालु र विकास बजेटको वर्गीकरण गर्ने\n   • नयाँ तलबमान लागू गर्ने\n   • कर्मचारी सेवा शर्तसम्बन्धी नयाँ कानूनको तर्जुमा गर्ने\n   • प्रशासनिक प्रशिक्षण केन्द्रको स्थापना गर्ने\n   • जिल्ला प्रशासन पुनर्गठन योजना तर्जुमा गर्ने\n   • पञ्चवर्षीय योजनाको शुरुवात गर्ने\n   • मन्त्रालयहरूमा टेक्निकल समिति गठन गर्ने\n   • ग्रामीण विकासमा जोड दिने\n   • कर्मचारीहरूको पुनर्गठन गरी कर्मचारीहरूको संख्या घटाउने\n   • मन्त्रालयहरूको पुनर्गठन गर्ने"
},
category: "monitoring"
},
 {
year: "2025 BS | २०२५",
title: {
en: "Administrative Reform Commission (Vedananda Jha)",
ne: "प्रशासन सुधार आयोग (वेदानन्द झा)"
},
description: {
en: "• Chairman: Vedanand Jha\n• Main Objective: To make administration efficient, fast, streamlined and effective\n• Key recommendations:\n   • Merge institutions with similar nature of work, duties and objectives or operate under single management committee\n   • Make civil servants officer-oriented at central level\n   • Appoint civil service positions only through Public Service Commission recommendation and end political appointments\n   • Reorganize ministries reducing number from 18 to 12\n   • Accept zonal and district administration as local administration to embrace decentralization\n   • Implement position classification system in civil service\n   • Keep personnel administration separate from daily politics\n   • Establish central administration agency to manage civil service\n   • Make administration system hierarchical",
ne: "• अध्यक्ष: वेदानन्द झा\n• मुख्य उद्देश्य: दक्ष प्रशासन र छिटो, छरितो र कार्यदक्ष बनाउने\n <u> मुख्य सिफारिसहरू: </u>\n   • एकै प्रकृतिको काम, कर्तव्य र उद्देश्य भएका संस्थानहरूलाई एक अर्कामा गाभ्ने वा एउटै संचालक समिति द्वारा संचालन गराउने\n   • केन्द्रीय तहमा निजामती कर्मचारीलाई अधिकृतमूलक बनाउने\n   • निजामती सेवाका पदमा लोक सेवा आयोगको सिफारिसमा मात्र नियुक्ति गर्ने र राजनीतिक नियुक्ति प्रथा बन्द गर्ने\n   • मन्त्रालयको पुनर्गठन गरी मन्त्रालयको संख्या १८ बाट १२ कायम गर्ने\n   • विकेन्द्रीकरणको सिद्धान्तलाई आत्मसात गर्न अञ्चल र जिल्ला प्रशासनलाई स्थानीय प्रशासनको रूपमा लिने\n   • निजामती सेवामा पद वर्गीकरण व्यवस्था लागू गर्ने\n   • कर्मचारी प्रशासनलाई दैनिक राजनीतिबाट अलग राख्ने\n   • निजामती सेवाको प्रशासन संचालन गर्न केन्द्रीय प्रशासन एजेन्सीको व्यवस्था गर्ने\n   • प्रशासनयन्त्रलाई श्रृंखलाबद्ध बनाउने"
},
category: "service"
},

{
year: "2032 BS | २०३२",
title: {
en: "Administrative Reform Commission",
ne: "प्रशासन सुधार आयोग"
},
description: {
en: "• Chairman: Bhesh Bahadur Thapa\n• Key recommendations:\n   • Make administration officer-oriented\n   • Initiate and institutionalize program budget\n   • Define duties, responsibilities, accountability and authority of civil service positions\n   • No political appointments except for Zonal Commissioner position\n   • Implement arrangement through Public Service Commission consultation in civil service\n   • Decentralize decision-making process by delegating authority and reducing decision levels\n   • Prioritize establishment of local bodies over central expectations\n   • Reduce number of ministries",
ne: "• अध्यक्ष: भेष बहादुर थापा\n• मुख्य सिफारिसहरू:\n   • प्रशासनलाई अधिकृतमूलक बनाउने\n   • कार्यक्रम बजेटको थालनी गरी संस्थागत गर्ने\n   • निजामती पदको काम, कर्तव्य, जवाफदेही र अधिकार निश्चित गर्ने\n   • अञ्चलाधीश पद बाहेक अन्य कुनै पदमा राजनीतिक नियुक्ति नगर्ने\n   • लोक सेवा आयोगको परामर्शमा निजामती सेवामा जकेश भएको व्यवस्था गर्ने\n   • अधिकार प्रत्यायोजन गरी निर्णयका तह घटाउँदै निर्णय प्रक्रियामा पनि विकेन्द्रीकरण गर्ने\n   • केन्द्रको अपेक्षा स्थानीय निकायहरूको स्थापनामा बढी प्राथमिकता दिने\n   • मन्त्रालयको संख्या कम गर्ने"
},
category: "governance"
},

{
year: "2048 BS | २०४८",
title: {
en: "Administrative Reform Commission",
ne: "प्रशासन सुधार आयोग"
},
description: {
en: "• Chairman: Prime Minister Girija Prasad Koirala\n• Main Objective: Make administration capable and effective to fulfill demands of democracy and development\n• Key recommendations:\n   • Reduce number of ministries from 21 to 18\n   • Make Citizen's Digest mandatory\n   • Focus National Planning Commission on resource allocation and monitoring/evaluation of development policies\n   • Change civil service structure with position classification and implement unified civil service system\n   • Implement arrangement in civil service\n   • Abolish Assistant Secretary position",
ne: "• अध्यक्ष: प्रधानमन्त्री गिरिजा प्रसाद कोइराला\n• मुख्य उद्देश्य: प्रशासनलाई प्रजातन्त्र र विकासका मागहरू पूरा गर्न सक्षम र प्रभावकारी बनाउने\n• मुख्य सिफारिसहरू:\n   • मन्त्रालयको संख्या २१ बाट १८ कायम गर्ने\n   • नागरिक डाइजेस्ट अनिवार्य राख्ने\n   • राष्ट्रिय योजना आयोगलाई स्रोत साधनको बाँडफाँड तथा विकाससम्बन्धी नीतिहरूको कार्यान्वयनको अनुगमन र मूल्यांकन गर्ने कार्यमा केन्द्रित गर्ने\n   • निजामती सेवाको संरचनामा परिवर्तन गरी पद वर्गीकरण गर्दै एकीकृत निजामती सेवाको व्यवस्था गर्ने\n   • निजामती सेवामा जकेश भएको व्यवस्था गर्ने\n   • सहायक सचिवको पद खारेज गर्ने"
},
category: "administration"
},
 {
year: "2056 BS | २०५६",
title: {
en: "Anti-Corruption Reform Committee",
ne: "भ्रष्टाचार निवारण सुधार समिति"
},
description: {
en: "• Chairman: Supreme Court Justice Mahadev Yadav\n• Key recommendations:\n   • Broaden definition of corruption and increase punishment severity\n   • Expand administrative court jurisdiction to handle appointments, transfers, promotions and departmental actions\n   • Make promotion criteria transparent\n   • Stop transfer as punishment practice\n   • Provide social security for government employees in basic areas like housing, education, health\n   • Define employees' work, rights and responsibilities\n   • Implement token system in offices with daily public contact\n   • Make tax administration efficient and effective\n   • Implement citizen charter\n   • Launch campaign to publicly name corrupt officials and socially boycott them",
ne: "• अध्यक्ष: सर्वोच्च अदालतका न्यायाधीश महादेव यादव\n• मुख्य सिफारिसहरू:\n   • भ्रष्टाचारको परिभाषाको दायरा फराकिलो बनाई कसूरमा दण्ड सजायको मात्रा बढाइनुपर्ने\n   • प्रशासकीय अदालतको कार्यक्षेत्रलाई विस्तार गरी प्रशासकीय पदहरूको नियुक्ति, सरुवा, बढुवा र विभागीय कारवाहीसम्बन्धी मुद्दा यस अदालतबाट हेर्ने व्यवस्था गर्ने\n   • बढुवासम्बन्धी आधारहरू पारदर्शी हुनुपर्ने\n   • सजायको रूपमा सरुवा गर्ने प्रवृत्तिलाई रोक्नुपर्ने\n   • सरकारी कर्मचारीहरूलाई आवास, शिक्षा, स्वास्थ्य जस्ता आधारभूत विषयमा सामाजिक सुरक्षा प्रदान गर्ने\n   • कर्मचारीहरूको काम, अधिकार र जिम्मेवारी तोकिनुपर्ने\n   • सर्वसाधारण जनतासँग दैनिक सम्पर्कमा आउने कार्यालयहरूमा टोकन प्रणाली लागू गर्ने\n   • कर प्रशासनलाई चुस्त र प्रभावकारी बनाउने\n   • नागरिक वडापत्र लागू गर्ने\n   • भ्रष्टहरूको नाम सार्वजनिक गर्दै उनीहरूलाई सामाजिक बहिष्कार गर्ने अभियान थालनी गर्ने"
},
category: "governance"
},
{
year: "2056 BS | २०५६",
title: {
en: "Report on Organizational Structure, Training and Anti-Corruption",
ne: "संगठनात्मक स्वरुप, तालिम र भ्रष्टाचार निवारण सम्बन्धी प्रतिवेदन"
},
description: {
en: "• Coordinated by Secretary of Ministry of General Administration\n• Key recommendations:\n   • Define government's scope of work\n   • Establish, merge or dissolve ministries, departments, directorates, offices, district units and village-level offices as per relevance\n   • Implement flat organization concept in civil service\n   • Integrate offices with similar functions in the valley\n   • Reduce decision-making levels\n   • Set standards and services for offices",
ne: "• सामान्य प्रशासन मन्त्रालयका सचिवको संयोजकत्वमा गठित\n• मुख्य सिफारिसहरू:\n   • सरकारको कार्यक्षेत्र निर्धारण गर्ने\n   • मन्त्रालय, विभाग, निर्देशनालय, कार्यालय, जिल्ला, इकाई र गाउँस्तरीय कार्यालयहरू औचित्य अनुसार कायम गर्ने, गाभ्ने वा खारेज गर्ने\n   • निजामती सेवामा समतल संगठनको अवधारणा लागू गर्ने\n   • उपत्यकाका एउटै प्रकृतिका काम गर्ने कार्यालयहरू एकीकरण गर्ने\n   • निर्णयका तह घटाउने\n   • कार्यालयहरूले उपलब्ध गराउने सेवा र मापदण्ड तोक्ने"
},
category: "administration"
},
{
year: "2057 BS | २०५७",
title: {
en: "Public Expenditure Review Commission",
ne: "सार्वजनिक खर्च पुनरावलोकन आयोग"
},
description: {
en: "• Chairman: Bishnu Raj Dhakal\n• Key recommendations:\n   • Establish pension fund and deposit funds into it\n   • Develop future audit system\n   • Adopt policy of no new civil service recruitment for next 5 years\n   • Implement zero-based budgeting system\n   • Make allocation system performance-based\n   • Review internal control system to reduce expenses",
ne: "• अध्यक्ष: विष्णुराज ढकाल\n• मुख्य सिफारिसहरू:\n   • निवृत्तिभरण कोष स्थापना गरी उक्त कोषमा रकम जम्मा गरिदिनुपर्ने\n   • भविष्य लेखा परीक्षण पद्धतिको विकास गर्ने\n   • आगामी ५ वर्ष भित्र निजामती कर्मचारीहरूको नयाँ पदपूर्ति नगर्ने नीति लिने\n   • बजेट तर्जुमा गर्दा शून्यमा आधारित बजेट प्रणाली अवलम्बन गर्ने\n   • विनियोजन प्रणालीलाई कार्यसम्पादनमा आधारित बनाउने\n   • खर्च कम गर्न आन्तरिक नियन्त्रण प्रणालीमा पुनरावलोकन गर्ने"
},
category: "complaint"
},
 {
year: "2062 BS | २०६२",
title: {
en: "Human Resources Ministry Formation Task Force Report",
ne: "मानव सम्बन्धन मन्त्रालयको गठनसम्बन्धी कार्यदलको प्रतिवेदन"
},
description: {
en: "• Coordinator: Then Secretary of Ministry of General Administration (5-member task force)\n• Key recommendations:\n   • Create integrated Public Administration Act for public sector employee management guidelines\n   • Improve Public Service Commission's educational qualifications, recruitment process, testing methods and curriculum\n   • Formulate National Human Resource Policy with policy reforms\n   • Implement comprehensive sectoral reforms in public administration\n   • Establish employment information centers",
ne: "• सामान्य प्रशासन मन्त्रालयका तत्कालीन सचिवको संयोजकत्वमा ५ सदस्यीय कार्यदल गठन मुख्य सिफारिसहरू:\n• सार्वजनिक क्षेत्रका कर्मचारीको व्यवस्थापनसम्बन्धी मार्गदर्शक एकीकृत सार्वजनिक प्रशासन ऐन निर्माण गर्ने\n• लोक सेवा आयोगको हाल कायम रहेको शैक्षिक योग्यता, भर्नाट प्रक्रिया, परीक्षण विधि एवं पाठ्यक्रममा सुधार गर्ने\n• नीतिगत पक्षमा सुधार गरी राष्ट्रिय मानव संसाधन नीति तर्जुमा गर्ने\n• सार्वजनिक प्रशासनलाई क्षेत्रगतरूपमा बृहत्तर सुधार गर्ने\n• रोजगार सूचना केन्द्रहरू स्थापना गर्ने"
},
category: "service"
},

 {
year: "2063 BS | २०६३",
title: {
en: "Public Enterprise Reform Suggestion Committee Report",
ne: "संस्थान सुधार सुझाव समितिको प्रतिवेदन"
},
description: {
en: "• Coordinator: Former Secretary Dr. Bholanath Chalise\n• Key recommendations:\n   • Privatize both loss-making and profit-making enterprises\n   • Sell enterprises requiring privatization to private sector\n   • Liquidate continuous loss-making enterprises that cannot be privatized\n   • Strengthen enterprises not immediately suitable for privatization\n   • Transform government organization structure from pyramid to flat\n   • Abolish departments and empower regional offices with regional administrators\n   • Establish telework system\n   • Provide drivers only for positions above secretary level\n   • Adopt preventive and corrective measures for corruption control\n   • Maintain mandatory property details of public service employees",
ne: "• संयोजक: पूर्व सचिव डा. भोलानाथ चालिसे\n• मुख्य सिफारिसहरू:\n   • घाटामा गएका मात्र होइन मुनाफामा चलेका संस्थानहरू पनि निजीकरण गर्ने\n   • निजीकरण गर्नुपर्ने संस्थानहरू निजी क्षेत्रलाई बिक्री गर्ने\n   • निरन्तर घाटामा जाने तर निजीकरण गर्न नसकिने संस्थानहरूलाई लिक्विडेशनमा लैजाने\n   • तत्काल निजीकरण गर्न उपयुक्त नहुने संस्थानहरूको सुदृढीकरण गर्ने\n   • सरकारी संगठनको संरचनालाई पिरामिड आकारबाट समतल बनाउनुपर्ने\n   • विभाग खारेज गरी क्षेत्रीय कार्यालयहरूलाई अधिकार सम्पन्न बनाउने एवं प्रत्येक क्षेत्रमा क्षेत्रपालको व्यवस्था गर्ने\n   • टेलिवर्क व्यवस्थालाई स्थापना गर्ने\n   • सचिवभन्दा माथिको पदको लागि मात्र सवारी चालकको व्यवस्था गर्ने\n   • भ्रष्टाचार निवारणको लागि अन्य निरोधात्मक एवं उपचारात्मक उपायहरूको अवलम्बन गर्ने\n   • सार्वजनिक सेवामा कार्यरत कर्मचारीहरूको सम्पत्ति विवरण अनिवार्यिक गराई राख्ने"
},
category: "governance"
},
 {
year: "2064 BS | २०६४",
title: {
en: "Study Report on Implementation of Level System in Civil Service",
ne: "निजामती सेवामा तहगत प्रणाली लागू गर्नेसम्बन्धी अध्ययन प्रतिवेदन"
},
description: {
en: "• Coordinator: Dr. Madan Tiwari\n• Key recommendations:\n   • Adopt performance-based management system\n   • Take positive attraction strategy to attract talented individuals\n   • Make performance evaluation transparent and based on employee performance plans\n   • Arrange entry service and in-service training for every employee",
ne: "• संयोजक: डा. मदन तिवारी मुख्य सिफारिसहरू:\n• कार्यसम्पादनमा आधारित व्यवस्थापन प्रणाली अवलम्बन गर्ने\n• प्रतिभावान व्यक्तिलाई आकर्षित गर्न सकारात्मक आकर्षण रणनीति लिने\n• कार्यसम्पादन मूल्यांकनलाई पारदर्शी बनाई कर्मचारीको कार्यसम्पादन योजनामा आधारित बनाउने\n• प्रत्येक कर्मचारीलाई सेवा प्रवेश, सेवाकालीन तालिमको व्यवस्था गर्ने"
},
category: "administration"
},

{
year: "2065 BS | २०६५",
title: {
en: "Administrative Restructuring Commission Report",
ne: "प्रशासन पुनर्संरचना आयोगको प्रतिवेदन"
},
description: {
en: "• Chairman: Minister of General Administration\n• Key recommendations:\n   • Establish independent Police Service Commission to end political interference in police recruitment, posting and transfers\n   • Bring uniformity in security personnel's facility scale\n   • Computerize driving license and vehicle information\n   • Provide necessary resources to monitoring committee\n   • Make health services effective and deliver door-to-door health services\n   • Create educational calendar to make educational activities predictable\n   • Implement and use machine-readable passport\n   • No creation of new positions or posts, no filling of vacant non-gazetted positions\n   • End impunity",
ne: "• अध्यक्ष: सामान्य प्रशासन मन्त्री\n• मुख्य सिफारिसहरू:\n   • प्रहरी प्रशासनमा भर्ना, पदस्थापन र सरुवा समेतमा रहेको राजनीतिक हस्तक्षेप अन्त्यको लागि छुट्टै स्वतन्त्र प्रहरी सेवा आयोगको गठन गर्नुपर्ने\n   • सुरक्षाकर्मीको याना स्केलमा एकरूपता ल्याउने\n   • सवारी चालक अनुमति पत्र र सवारी साधनको विवरण कम्प्युटरीकृत गर्ने\n   • अनुगमन समितिलाई आवश्यक स्रोत र साधन उपलब्ध गराउन\n   • स्वास्थ्य सेवालाई प्रभावकारी बनाई घरदैलोमा स्वास्थ्य सेवा पुर्‍याउने\n   • शैक्षिक क्यालेन्डर निर्धारण गरी शैक्षिक क्षेत्रका कार्यलाई अनुमानयोग्य बनाउने\n   • मेशिन रिडेवल पासपोर्ट बनाई प्रयोगमा ल्याउने\n   • नयाँ पद वा दरबन्दी सिर्जना नगर्ने, राजपत्र अनंकित कुनै पनि रिक्त पदहरू पूर्ति नगर्ने\n   • दण्डहीनताको अन्त्य गर्ने"
},
category: "complaint"
},
{
year: "2070 BS | २०७०",
title: {
en: "Administrative Reform Suggestion Committee",
ne: "प्रशासन सुधार सुझाव समिति"
},
description: {
en: "• Chairman: Administrative Expert and Administrative Court Chairman Mr. Kashi Raj Dahal\n• Submitted approximately 700-page report to Nepal Government",
ne: "• प्रशासन ज्ञ एवं प्रशासकीय अदालतका माननीय अध्यक्ष श्री काशीराज दाहालको अध्यक्षतामा गठित\n• करिब ७०० पृष्ठको प्रतिवेदन नेपाल सरकार समक्ष प्रस्तुत"
},
category: "service"
},
{
year: "2074 BS | २०७४",
title: {
en: "High-Powered Federal Administrative Restructuring Committee",
ne: "अधिकारसम्पन्न संघीय प्रशासनिक पुनःसंरचना समिति"
},
description: {
en: "• Formed by Nepal Government Cabinet as per directive of the Management Committee for administrative restructuring in accordance with Constitution of Nepal",
ne: "• नेपालको संविधान बमोजिम प्रशासनिक पुनःसंरचनाको निमित्त व्यवस्था समितिको निर्देशन बमोजिम नेपाल सरकार मन्त्रिपरिषदबाट गठन"
},
category: "governance"
},

{
year: "2061 BS | २०६१",
title: {
en: "Voluntary Retirement Method Study Report",
ne: "स्वेच्छिक अवकाश विधि अध्ययन प्रतिवेदन"
},
description: {
en: "• Chairman: Former Secretary Mukunda Sharma Poudyal\n• Key recommendations:\n   • Implement voluntary retirement only for target groups when no other options exist to reduce civil service positions\n   • Abolish positions that become vacant after retirement and restrict new appointments\n   • Adopt policy of not filling non-gazetted and classless positions including peon or equivalent\n   • Implement voluntary retirement policy only in coordination with other administrative reform perspectives",
ne: "• अध्यक्ष: पूर्व सचिव मुकुन्द शर्मा पौड्याल\n• मुख्य सिफारिसहरू:\n   • निजामती दरबन्दी घटाउने सम्बन्धमा अन्य विकल्प नभएमा मात्र स्वेच्छिक अवकाश लक्षित समूहको लागि मात्र लागू गर्ने\n   • अवकाश पछि स्वतः खाली हुने दरबन्दी खारेज र पदपूर्तिमा बन्देज गर्ने\n   • राजपत्र अनंकित र श्रेणीविहीन तथा पिउन वा सो सरहको पदको पदपूर्ति नगर्ने नीति लिने\n   • स्वेच्छिक अवकाशलाई प्रशासकीय सुधारको अन्य दृष्टिकोणहरूसँग समन्वय गरेर मात्र लागू गर्ने नीति लिने"
},
category: "administration"
},
 
  {
    year: "2061 BS | २०६१",
    title: {
      en: "Governance Reform Roadmap",
      ne: "शासकीय सुधारको मार्गचित्र"
    },
    description: {
      en: "• Internal capacity building\n• Civil service efficiency enhancement\n• Anti-corruption measures\n• Performance improvement process\n• Inclusive civil service concept",
      ne: "• आन्तरिक क्षमता अभिबृद्धि\n• निजामती सेवाको दक्षता अभिबृद्धि\n• भ्रष्टाचार घटाउने कार्यक्रम\n• कार्य सम्पादन सुधार\n• समावेशी निजामती सेवा"
    },
    category: "governance"
  },
 {
    year: "यहाँबाट पे कमिसनहरूः\n• पे कमिसन 2009 BS | २००९",
    title: {
      en: "Pay Commission",
      ne: "तलब आयोग"
    },
    description: {
en: "• Chairman: PSC Member Sri Dev Nath Varma\n• Recommended implementation of new salary scale and allowances",
ne: "• अध्यक्ष: लोक सेवा आयोगका सदस्य श्री देवनाथ वर्मा\n• तलबमान र भत्ताको नयाँ स्केल लागू गर्नुपर्ने सिफारिश"
},
category: "service"
},
{
year: "2016 BS | २०१६",
title: {
en: "Pay Commission",
ne: "पे कमिशन"
},
description: {
en: "• Chairman: Secretary of Council of Ministers Secretariat\n• Division of civil servants into two categories: administrative and staff\n• Fixed salary scale with ratio of 1:15.55 between lowest and highest levels",
ne: "• अध्यक्ष: मन्त्रिपरिषद् सचिवालयका सचिव\n• निजामती कर्मचारीहरुलाई प्रशासनिक र कर्मचारीहरु गरी दुई वर्गमा विभाजन\n• कर्मचारीहरुको तल्लो र माथिल्लो तहको बीचको फरक १:१५.५५ हुने गरी तलबमान निर्धारण"
},
category: "administration"
},
{
year: "2038 BS | २०३८",
title: {
en: "Pay Commission",
ne: "तलब आयोग"
},
description: {
en: "• Chairman: Bhim Lal Rajbhandari\n• Key recommendations:\n   • 2300 calories of food required per person per day\n   • Calculate required amount for 3 consumer units based on four-member family per employee\n   • Maintain 1:8.5 ratio between minimum and maximum salary",
ne: "• अध्यक्ष: भीमलाल राजभण्डारी\n• मुख्य सिफारिसहरू:\n   • प्रति व्यक्ति प्रति दिन २३०० क्यालोरी खाद्य पदार्थ आवश्यक पर्ने\n   • एक कर्मचारीको चार सदस्यीय परिवारलाई ३ उपभोक्ता इकाई मानी प्रत्येक उपभोक्ता इकाईलाई क्यालोरी प्राप्त गर्न आवश्यक रकम\n   • न्यूनतम र अधिकतम तलबबीचको अन्तर १:८.५ कायम गर्ने"
},
category: "service"
}, 
{
year: "2047 BS | २०४७",
title: {
en: "Salary and Benefits Reform Commission",
ne: "तलब सुविधा सुधार आयोग"
},
description: {
en: "• Chairman: Nanda Lal Joshi\n• Key recommendations:\n   • Maintain 1:5 ratio between minimum and maximum salary\n   • Benefits like medical treatment, educational allowance, transportation allowance",
ne: "• अध्यक्ष: नन्दलाल जोशी\n• मुख्य सिफारिसहरू:\n   • न्यूनतम र अधिकतम तलब बीचको अन्तर १:५ हुनुपर्ने\n   • औषधी उपचार सुविधा, शैक्षिक भत्ता, परिवहन भत्ता जस्ता सुविधाहरू"
},
category: "governance"
},
{
year: "2048 BS | २०४८",
title: {
en: "Salary Commission",
ne: "तलब आयोग"
},
description: {
en: "• Chairman: Nyakanta Adhikari\n• Key recommendations:\n   • Minimum salary of employees should be comparable to marginal farmers' income\n   • Provide up to 90% compensation for annual consumer price index increase\n   • Pension not to exceed 67% of last drawn salary\n   • Provide one month's salary as Dashain allowance to retired employees",
ne: "• अध्यक्ष: न्यकान्त अधिकारी\n• मुख्य सिफारिसहरू:\n   • कर्मचारीको न्यूनतम तलब सीमान्त कृषकहरुको आयको हाराहारीमा पर्ने\n   • प्रत्येक वर्ष उपभोक्ता मूल्यसूचीमा आउने वृद्धिको ९० प्रतिशतसम्म क्षतिपूर्ति दिने\n   • सेवा निवृत्त कर्मचारीले खाईपाई आएको तलबको ६७ प्रतिशतभन्दा बढी निवृत्तिभरण नहुने\n   • सेवा निवृत्त कर्मचारीहरुलाई १ महिनाको रकम दशैं खर्च वापत दिनुपर्ने"
},
category: "administration"
},
{
year: "2053 BS | २०५३",
title: {
en: "Salary Determination Task Force",
ne: "तलब निर्धारण कार्यदल"
},
description: {
en: "• Coordinator: Finance Secretary Arjun Mani Acharya\n• Key recommendations:\n   • Maintain 1:6 ratio between entry and final level salary\n   • Set annual salary increment approximately equal to one day's salary\n   • Reduce salary by 10% for employees receiving rations compared to those not receiving",
ne: "• संयोजक: अर्थ सचिव अर्जुनमणि आचार्य\n• मुख्य सिफारिसहरू:\n   • र स्तरका र अन्तिम स्तरका पदको तलबमानको अन्तर १:६ अनुपात कायम गर्ने\n   • वार्षिक तलब वृद्धिको रकम करिब एक दिनको तलब बराबर गर्ने\n   • राशन पाउने कर्मचारीको तलबमान राशन नपाउने कर्मचारीको भन्दा १०% कम गर्ने"
},
category: "governance"
}, 
 {
year: "2055 BS | २०५५",
title: {
en: "Salary Commission",
ne: "तलब आयोग"
},
description: {
en: "• Chairman: Lok Bahadur Shrestha\n• Key recommendations:\n   • Link employee salaries to consumer price index\n   • Maintain 1:5 ratio between minimum and maximum salary\n   • Implement salary compression in both general and technical categories\n   • Set salaries close to those of SAARC country employees",
ne: "• अध्यक्ष: लोकबहादुर श्रेष्ठ\n• मुख्य सिफारिसहरू:\n   • कर्मचारीको तलबलाई उपभोक्ता मूल्यसूचीसँग आबद्ध गर्नुपर्ने\n   • न्यूनतम र उच्चतम तलबबीचको अन्तर १:५ कायम गर्ने\n   • साधारण र प्राविधिक दुवै श्रेणीहरुमा तलबमान खुम्च्याउने व्यवस्था गर्ने\n   • तलबको निर्धारण सार्क मुलुकका कर्मचारीहरुको तलबको निकट रहने गरी गर्ने"
},
category: "service"
},
{
year: "2061 BS | २०६१",
title: {
en: "High-Level Salary Commission",
ne: "उच्चस्तरीय तलब आयोग"
},
description: {
en: "• Chairman: Former Chief Secretary Dr. Bharat Bahadur Pradhan\n• Key recommendations:\n   • Rotate annual grade increment between junior and senior levels\n   • Provide 2-4 level provisions for positions with no promotion prospects\n   • Benefits including educational allowance, transportation allowance, life insurance\n   • Consider four family members per employee with 4 consumer units when determining salary\n   • Maintain existing 1:5 ratio in employee salary differences",
ne: "• अध्यक्ष: पूर्व मुख्य सचिव डा. भरत बहादुर प्रधान\n• मुख्य सिफारिसहरू:\n   • वार्षिक ग्रेड वृद्धिलाई कनिष्ठ-ज्येष्ठ बीचको फरक घुमाउने\n   • बढुवाको कुनै गुञ्जाइस नभएका पदहरुमा २ देखि ४ तहसम्मको व्यवस्था\n   • शैक्षिक भत्ता, परिवहन भत्ता, जीवन बीमा आदि सुविधाहरू\n   • कर्मचारी तथा राष्ट्रसेवकको तलबमान निर्धारण गर्दा प्रति परिवार चार सदस्य मान्ने र ४ सदस्यको उपभोक्ता इकाई हुनुपर्ने\n   • कर्मचारीको तलब अन्तर अनुपात १:५ लाई यथावत राख्नुपर्ने"
},
category: "complaint"
}
    ]
  },
 attorneyGeneral: {
    id: 'attorneyGeneral',
    title: {
      en: 'Historical Development of Attorney General in Nepal',
      ne: 'नेपालमा सार्वजनिक सेवा सुधार'
    },
    data: [
  {
    "year": "1947 | २००४",
    "title": {
      "en": "First Constitutional Provision",
      "ne": "पहिलो संवैधानिक व्यवस्था"
    },
    "description": {
      "en": "Nepal Government Act 2004 BS, under Article 12, made first provision for appointment of Chief Legal Advisors (Pradhan Kanuni Sallahakar). However, the Act was never implemented.",
      "ne": "नेपाल सरकार वैधानिक कानुन, २००४ को धारा १२ मा प्रधान कानुनी सल्लाहकारहरुको नियुक्ति गर्ने व्यवस्था गरियो। तर यो कानुन कार्यान्वयनमा नआएकोले कुनै नियुक्ति भएन।"
    },
    "category": "complaint"
  },
  {
    "year": "1951 | २००८",
    "title": {
      "en": "First Attorney General Provision",
      "ne": "पहिलो महान्यायाधिवक्ता व्यवस्था"
    },
    "description": {
      "en": "Nepal Pradhan Nyayalaya Act 2008 BS (First Amendment 2009) made first provision for Attorney General position, defining roles including legal advice to government and court representation.",
      "ne": "नेपाल प्रधान न्यायालय ऐन, २००८ को पहिलो संशोधन २००९ ले पहिलो पटक एटर्नी जनरल (महान्यायाधिवक्ता) को व्यवस्था गरी सरकारलाई कानुनी राय दिने र अदालतमा बहस पैरवी गर्ने जिम्मेवारी तोक्यो।"
    },
    "category": "governance"
  },
  {
    "year": "1955 | २०१२",
    "title": {
      "en": "Prosecution System Reform",
      "ne": "अभियोजन प्रणाली सुधार"
    },
    "description": {
      "en": "Justice Administration (Reorganization) Act 2012 BS introduced the system of Pleader and Prosecutor for government cases investigation and prosecution. This was the first acceptance of prosecution system, though not implemented.",
      "ne": "न्याय प्रशासन (पुनर्गठन) ऐन २०१२ ले प्लिडर तथा प्रोसिक्युटर (अभियोक्ता) को व्यवस्था गरी सरकारी मुद्दाको तहकिकात र अभियोजनको आधुनिक प्रणालीको शुरुवात गर्यो। तर यो व्यवस्था कार्यान्वयन हुन सकेन।"
    },
    "category": "administration"
  },
  {
    "year": "1956 | २०१३",
    "title": {
      "en": "Government Advocate Appointment",
      "ne": "सरकारी अधिवक्ताको नियुक्ति"
    },
    "description": {
      "en": "Supreme Court Act 2013 BS was enacted. Government Advocate was appointed in Shrawan 2013 BS under this Act to represent government in constitutional cases.",
      "ne": "सर्वोच्च अदालत ऐन, २०१३ जारी भई सोही अन्तर्गत २०१३ साल श्रावण महिनामा संवैधानिक विवादमा सरकारको प्रतिनिधित्व गर्न गभर्मेन्ट एड्भोकेटको नियुक्ति गरियो।"
    },
    "category": "service"
  },
  {
    "year": "1959 | २०१६",
    "title": {
      "en": "Executive Attorney General",
      "ne": "कार्यकारी महान्यायाधिवक्ता"
    },
    "description": {
      "en": "Attorney General was appointed through executive decision in Bhadra 2016 BS, establishing Attorney General's Office as central body for government attorneys.",
      "ne": "२०१६ साल भाद्र महिनामा कार्यकारिणी निर्णयबाट एटर्नी जनरलको नियुक्ति भई महान्यायाधिवक्ताको कार्यालय सरकारी वकीलको केन्द्रीय निकायको रूपमा स्थापना भयो।"
    },
    "category": "complaint"
  },
  {
    "year": "1960 | २०१७",
    "title": {
      "en": "Government Cases Act",
      "ne": "सरकारी मुद्दा ऐन"
    },
    "description": {
      "en": "Government Cases Act 2017 BS defined government attorney for first time. Established investigation and prosecution procedures for government cases as per Schedule 1 and 2. Government Attorney Rules 2018 BS detailed the roles and responsibilities.",
      "ne": "सरकारी मुद्दा सम्बन्धी ऐन, २०१७ ले पहिलो पटक सरकारी वकीलको परिभाषा गर्यो। ऐनको अनुसूची १ र २ का मुद्दाहरूको अनुसन्धान र अभियोजन प्रक्रिया निर्धारण गर्यो। सरकारी वकील सम्बन्धी नियमावली, २०१८ ले विस्तृत काम, कर्तव्य र अधिकार तोक्यो।"
    },
    "category": "administration"
  },
  {
    "year": "1971 | २०२८",
    "title": {
      "en": "New Government Attorney Rules",
      "ne": "नयाँ सरकारी वकील नियमावली"
    },
    "description": {
      "en": "New Government Attorney Rules 2028 BS replaced old rules of 2018 BS. Defined government concern cases and established institutional structure of government attorney offices.",
      "ne": "सरकारी वकील सम्बन्धी नियमावली, २०२८ जारी भई २०१८ को नियमावली खारेज गर्यो। सरकारी सरोकारका मुद्दाको परिभाषा र सरकारी वकील कार्यालयको संस्थागत संरचना स्थापना गर्यो।"
    },
    "category": "governance"
  },
  {
    "year": "1990 | २०४७",
    "title": {
      "en": "Constitutional Enhancement",
      "ne": "संवैधानिक सुदृढीकरण"
    },
    "description": {
      "en": "Constitution of Nepal 2047 BS, Article 110 enhanced Attorney General's role. Made final authority in government cases and chief legal advisor to government. Granted right to appear in any court.",
      "ne": "नेपाल अधिराज्यको संविधान, २०४७ को धारा ११० ले महान्यायाधिवक्तालाई सरकारको मुख्य कानूनी सल्लाहकार बनायो। सरकारी मुद्दा चलाउने नचलाउने अन्तिम अधिकार र जुनसुकै अदालतमा उपस्थित हुन पाउने अधिकार प्रदान गर्यो।"
    },
    "category": "service"
  },
  {
    "year": "2007 | २०६३",
    "title": {
      "en": "Interim Constitution Provisions",
      "ne": "अन्तरिम संविधान व्यवस्था"
    },
    "description": {
      "en": "Interim Constitution 2063 BS, Article 135 added new responsibilities including monitoring implementation of Supreme Court interpretations and protecting human rights of detainees.",
      "ne": "नेपालको अन्तरिम संविधान, २०६३ को धारा १३५ ले सर्वोच्च अदालतको व्याख्याको कार्यान्वयन अनुगमन र थुनुवाको मानव अधिकार संरक्षण जस्ता नयाँ जिम्मेवारी थप्यो।"
    },
    "category": "complaint"
  },
  {
    "year": "2015 | २०७२",
    "title": {
      "en": "Current Constitutional Framework",
      "ne": "वर्तमान संवैधानिक संरचना"
    },
    "description": {
      "en": "Constitution of Nepal, Articles 157-159 established current framework. Attorney General appointed by President on PM's recommendation. Given status equal to Supreme Court Justice with comprehensive authority over public prosecution.",
      "ne": "नेपालको संविधानको धारा १५७-१५९ ले वर्तमान व्यवस्था गर्यो। प्रधानमन्त्रीको सिफारिसमा राष्ट्रपतिबाट महान्यायाधिवक्ताको नियुक्ति हुने, सर्वोच्च अदालतको न्यायाधीश सरहको सुविधा र सार्वजनिक अभियोजनमा व्यापक अधिकार प्रदान गर्यो।"
    },
    "category": "service"
  }
]
 }
};

