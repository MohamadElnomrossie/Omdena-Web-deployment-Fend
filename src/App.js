import './App.css';
import React, {Component} from 'react';
import Navbar from "./components/navbar"
import {Redirect, Route,Switch } from "react-router-dom";
import Sentiment from './components/sentiment'
import NER from "./components/ner"
import POS from "./components/pos"
import Dialect from "./components/Dialect"
import LEM from "./components/lemma"
import Tokenization from "./components/tokenization"
import Similar from "./components/similarWords"
import Home from "./components/home"
import Morph from "./components/morph"

class App extends Component {
  state={sentiment:{'positive':.5,'negative':.2,'mixed':.3},
  NER:{
    "«جمهورية": "artwork",
    "أحمد": "person",
    "الأسواني،": "person",
    "توفيق": "person",
    "خالد": "person",
    "رواية": "artwork",
    "علاء": "person",
    "للروائي": "job"
},
POS:{
  ".": "Punctuation",
  "«جمهورية": "Adjective",
  "أحمد": "Proper Noun",
  "الأسواني،": "Adjective",
  "الذي": "Relative Pronoun",
  "المشروع": "Noun",
  "توفيق": "Noun",
  "خالد": "Proper Noun",
  "ذهنه": "Noun",
  "رواية": "Noun",
  "ظل": "Verb",
  "علاء": "Proper Noun",
  "في": "Preposition",
  "كأن»": "Pronoun",
  "للروائي": "Noun",
  "ولم": "Negative Particle",
  "يتحدث": "Verb",
  "يفارق": "Verb"
},
Dialect:{
  "BINARY": "MSA",
  "COUNTRY": "Egypt",
  "REGION": "MSA"
},
LEM:{
  ".": ".",
  "«جمهورية": "«جمهوريه",
  "أحمد": "أحمد",
  "الأسواني،": "أسواني،",
  "الذي": "الذي",
  "المشروع": "مشروع",
  "توفيق": "توفيق",
  "خالد": "خالد",
  "ذهنه": "ذهنه",
  "رواية": "روايه",
  "ظل": "ظل",
  "علاء": "علاء",
  "في": "في",
  "كأن»": "كأن»",
  "للروائي": "للرواءي",
  "ولم": "ولم",
  "يتحدث": "يتحدث",
  "يفارق": "يفارق"
},
token:[
  "أحمد",
  "خالد",
  "توفيق",
  "في",
  "رواية",
  "جمهورية",
  "كأن",
  "للروائي",
  "علاء",
  "الأسواني",
  "المشروع",
  "الذي",
  "ظل",
  "يتحدث",
  "ولم",
  "يفارق",
  "ذهنه"
],
// ==========================================
Similar:{
  "": [
      "word not found"
  ],
  "«جمهوريه": [
      "word not found"
  ],
  "احمد": [
      [
          "طارق",
          0.8729292154312134
      ],
      [
          "عادل",
          0.8695688247680664
      ],
      [
          "محمود",
          0.8622332215309143
      ],
      [
          "مصطفي",
          0.8559972047805786
      ],
      [
          "حامد",
          0.8538955450057983
      ],
      [
          "ابراهيم",
          0.853074312210083
      ],
      [
          "خالد",
          0.8486900329589844
      ],
      [
          "هشام",
          0.8432027101516724
      ],
      [
          "اسامه",
          0.8385535478591919
      ],
      [
          "محمد",
          0.8356383442878723
      ],
      [
          "وليد",
          0.8349573612213135
      ],
      [
          "هاني",
          0.8313067555427551
      ],
      [
          "يوسف",
          0.8286258578300476
      ],
      [
          "عصام",
          0.8250508904457092
      ],
      [
          "ايمن",
          0.8175208568572998
      ],
      [
          "انور",
          0.816001832485199
      ],
      [
          "حسام",
          0.8148841857910156
      ],
      [
          "حسين",
          0.8113662004470825
      ],
      [
          "عماد",
          0.8073979616165161
      ],
      [
          "عبد_الرحمن",
          0.8045616149902344
      ]
  ],
  "الاسواني": [
      [
          "ابراهيم_عيسي",
          0.887738049030304
      ],
      [
          "يسري_فوده",
          0.8563121557235718
      ],
      [
          "عصام_سلطان",
          0.856052577495575
      ],
      [
          "بلال_فضل",
          0.85478276014328
      ],
      [
          "وحيد_حامد",
          0.854254961013794
      ],
      [
          "مصطفي_بكري",
          0.8515531420707703
      ],
      [
          "ابو_الفتوح",
          0.8487407565116882
      ],
      [
          "شفيق",
          0.8426727652549744
      ],
      [
          "عبد_الحليم_قنديل",
          0.8416458368301392
      ],
      [
          "صبحي_صالح",
          0.8408244848251343
      ],
      [
          "العوا",
          0.8370661735534668
      ],
      [
          "وابراهيم_عيسي",
          0.836890697479248
      ],
      [
          "جورج_اسحاق",
          0.8353110551834106
      ],
      [
          "البرادعي",
          0.8351157903671265
      ],
      [
          "حمزاوي",
          0.8343045115470886
      ],
      [
          "اسامه_سرايا",
          0.8312281370162964
      ],
      [
          "وبلال_فضل",
          0.8308538794517517
      ],
      [
          "عكاشه",
          0.828673779964447
      ],
      [
          "حمدين",
          0.8280705213546753
      ]
  ],
  "الذي": [
      [
          "اللذي",
          0.8910871744155884
      ],
      [
          "كما",
          0.7381612658500671
      ],
      [
          "ذلك",
          0.7134520411491394
      ],
      [
          "وقد",
          0.7027217149734497
      ],
      [
          "التي",
          0.6933885216712952
      ],
      [
          "لذلك",
          0.6890705823898315
      ],
      [
          "ذاته",
          0.6846347451210022
      ],
      [
          "فمن",
          0.684334397315979
      ],
      [
          "فيما",
          0.6799942851066589
      ],
      [
          "ذالك",
          0.6744460463523865
      ],
      [
          "ولكنه",
          0.6709092855453491
      ],
      [
          "مما",
          0.6679437756538391
      ],
      [
          "لكنه",
          0.6619138717651367
      ],
      [
          "بل",
          0.6604886651039124
      ],
      [
          "فقد",
          0.659565806388855
      ],
      [
          "بينما",
          0.6565237641334534
      ]
  ],
  "المشروع": [
      [
          "المخطط",
          0.8203097581863403
      ],
      [
          "النموذج",
          0.7937174439430237
      ],
      [
          "الاقتراح",
          0.7924575209617615
      ],
      [
          "الملف",
          0.7675749063491821
      ],
      [
          "التمويل",
          0.7604520320892334
      ],
      [
          "الصندوق",
          0.745651125907898
      ],
      [
          "مشروع",
          0.7432756423950195
      ],
      [
          "التقرير",
          0.7414566278457642
      ],
      [
          "مشروعنا",
          0.7365482449531555
      ],
      [
          "مشروعي",
          0.7352126836776733
      ],
      [
          "المؤتمر",
          0.7315322160720825
      ],
      [
          "القرار",
          0.730952262878418
      ],
      [
          "المبني",
          0.7290464043617249
      ],
      [
          "البناء",
          0.7284755110740662
      ],
      [
          "المعرض",
          0.7223892211914062
      ],
      [
          "التامين",
          0.7219310402870178
      ],
      [
          "المسار",
          0.7206973433494568
      ],
      [
          "مشروعها",
          0.7194183468818665
      ],
      [
          "للمشروع",
          0.7180378437042236
      ],
      [
          "المفاعل_النووي",
          0.7162359356880188
      ]
  ],
  "توفيق": [
      [
          "رزق",
          0.6877498030662537
      ],
      [
          "صلاح",
          0.65481036901474
      ],
      [
          "نصر",
          0.6432704329490662
      ],
      [
          "عوض",
          0.6286988854408264
      ],
      [
          "رضا",
          0.627509593963623
      ],
      [
          "فضل",
          0.62003093957901
      ],
      [
          "هدايه",
          0.6200268268585205
      ],
      [
          "احمد",
          0.6169250011444092
      ],
      [
          "صالح",
          0.6116781234741211
      ],
      [
          "عبد",
          0.6083093881607056
      ],
      [
          "كمال",
          0.5987638831138611
      ],
      [
          "تيسير",
          0.5953813791275024
      ],
      [
          "رضوان",
          0.5914127230644226
      ],
      [
          "بركات",
          0.5834115743637085
      ],
      [
          "عادل",
          0.5738076567649841
      ],
      [
          "حسن",
          0.5701565742492676
      ],
      [
          "مراد",
          0.5694248080253601
      ]
  ],
  "خالد": [
      [
          "عبدالله",
          0.9318828582763672
      ],
      [
          "وليد",
          0.9282231330871582
      ],
      [
          "عبدالرحمن",
          0.9162126183509827
      ],
      [
          "ناصر",
          0.8917580246925354
      ],
      [
          "منصور",
          0.891434371471405
      ],
      [
          "حامد",
          0.882495105266571
      ],
      [
          "ماجد",
          0.8820562958717346
      ],
      [
          "طارق",
          0.8794779181480408
      ],
      [
          "فيصل",
          0.8776096701622009
      ],
      [
          "فهد",
          0.8758721947669983
      ],
      [
          "سعد",
          0.874977707862854
      ],
      [
          "زياد",
          0.8665482997894287
      ],
      [
          "اسامه",
          0.8602086901664734
      ],
      [
          "حسين",
          0.8576513528823853
      ],
      [
          "مازن",
          0.8535876274108887
      ],
      [
          "احمد",
          0.8486900329589844
      ],
      [
          "فواز",
          0.8453738689422607
      ],
      [
          "عادل",
          0.8443455100059509
      ],
      [
          "عبدالعزيز",
          0.8435898423194885
      ],
      [
          "مصعب",
          0.8401137590408325
      ]
  ],
  "ذهنه": [
      [
          "ذهنك",
          0.7050608992576599
      ],
      [
          "ذهن",
          0.6790424585342407
      ],
      [
          "ذهني",
          0.6486810445785522
      ],
      [
          "مخيلته",
          0.6385104656219482
      ],
      [
          "الذهن",
          0.6371253728866577
      ],
      [
          "مخيلتك",
          0.6353041529655457
      ],
      [
          "افكاره",
          0.6203707456588745
      ],
      [
          "العقل_الباطن",
          0.6002437472343445
      ],
      [
          "اذهاننا",
          0.597790539264679
      ],
      [
          "حياته",
          0.5901694297790527
      ],
      [
          "الاذهان",
          0.5897262692451477
      ],
      [
          "ذهننا",
          0.5890210866928101
      ],
      [
          "العقل_البشري",
          0.5868171453475952
      ],
      [
          "ذاكرته",
          0.5818463563919067
      ],
      [
          "الذاكره",
          0.5767468214035034
      ],
      [
          "مخيلتي",
          0.5753188729286194
      ],
      [
          "اعماقنا",
          0.5737406611442566
      ],
      [
          "اذهان",
          0.5718713402748108
      ]
  ],
  "روايه": [
      [
          "قصه",
          0.7987352609634399
      ],
      [
          "روايات",
          0.7744612693786621
      ],
      [
          "حكايه",
          0.7562726736068726
      ],
      [
          "قصص",
          0.7407217025756836
      ],
      [
          "مقاله",
          0.7245237231254578
      ],
      [
          "مجموعه_قصصيه",
          0.7111988663673401
      ],
      [
          "روايته",
          0.7037631273269653
      ],
      [
          "كتابات",
          0.6952602863311768
      ],
      [
          "مذكرات",
          0.694025456905365
      ],
      [
          "قصائد",
          0.6936684250831604
      ],
      [
          "رويات",
          0.6881832480430603
      ],
      [
          "قصيده",
          0.6783643960952759
      ],
      [
          "حكايات",
          0.6779816746711731
      ],
      [
          "الروايات",
          0.6746847629547119
      ],
      [
          "عزازيل",
          0.6541300415992737
      ],
      [
          "روايتي",
          0.6536456942558289
      ]
  ],
  "ظل": [
      [
          "بات",
          0.6119027733802795
      ],
      [
          "زال",
          0.6074565052986145
      ],
      [
          "مازال",
          0.6054959893226624
      ],
      [
          "وجود",
          0.5987039804458618
      ],
      [
          "الافق",
          0.5957770943641663
      ],
      [
          "اصبح",
          0.589767336845398
      ],
      [
          "خضم",
          0.5787975192070007
      ],
      [
          "لازال",
          0.5733820796012878
      ],
      [
          "واصبح",
          0.5711545944213867
      ],
      [
          "الوجود",
          0.5703430771827698
      ],
      [
          "يري",
          0.5690630674362183
      ],
      [
          "زمن",
          0.567460298538208
      ],
      [
          "وحل",
          0.5670409202575684
      ],
      [
          "اثر",
          0.5660005807876587
      ],
      [
          "ضوء",
          0.5651151537895203
      ],
      [
          "يترك",
          0.5650092363357544
      ],
      [
          "يلوح",
          0.5619257092475891
      ],
      [
          "يعيش",
          0.5618752241134644
      ]
  ],
  "علاء": [
      [
          "وائل",
          0.8959223031997681
      ],
      [
          "حسام",
          0.8933777809143066
      ],
      [
          "عصام",
          0.8806463479995728
      ],
      [
          "عمرو",
          0.8751022219657898
      ],
      [
          "مصطفي",
          0.8724098205566406
      ],
      [
          "محمود",
          0.8643541932106018
      ],
      [
          "هشام",
          0.8635981678962708
      ],
      [
          "ايمن",
          0.8556734919548035
      ],
      [
          "صفوت",
          0.850329577922821
      ],
      [
          "رامي",
          0.8430847525596619
      ],
      [
          "لؤي",
          0.8412022590637207
      ],
      [
          "هيثم",
          0.840549111366272
      ],
      [
          "حازم",
          0.8389367461204529
      ],
      [
          "مجدي",
          0.8350045084953308
      ],
      [
          "حماده",
          0.8340226411819458
      ],
      [
          "حمدي",
          0.8334581255912781
      ],
      [
          "شادي",
          0.8311113119125366
      ],
      [
          "طارق",
          0.8307962417602539
      ],
      [
          "اسامه",
          0.8231754899024963
      ],
      [
          "عماد",
          0.8186718821525574
      ]
  ],
  "في": [
      [
          "ف",
          0.8323596119880676
      ],
      [
          "من",
          0.7833859324455261
      ],
      [
          "علي",
          0.7612371444702148
      ],
      [
          "مع",
          0.7537623643875122
      ],
      [
          "ب",
          0.7501938939094543
      ],
      [
          "داخل",
          0.7450996041297913
      ],
      [
          ".",
          0.735132098197937
      ],
      [
          "و",
          0.7349032163619995
      ],
      [
          "خارج",
          0.7152272462844849
      ],
      [
          "بعد",
          0.7144854068756104
      ],
      [
          "!",
          0.7016661763191223
      ],
      [
          "بين",
          0.6956923007965088
      ],
      [
          "وسط",
          0.6933497190475464
      ],
      [
          "ل",
          0.6892499923706055
      ],
      [
          "الي",
          0.6824283003807068
      ],
      [
          ",",
          0.6752274036407471
      ],
      [
          "عند",
          0.67458575963974
      ]
  ],
  "كان»": [
      [
          "مهرجان_الاردن",
          0.6509888768196106
      ],
      [
          "المستقبل»",
          0.6413062810897827
      ],
      [
          "القاهره_السينمائي",
          0.6372236013412476
      ],
      [
          "دبي_السينمائي",
          0.6365551948547363
      ],
      [
          "مهرجان_الاسكندريه",
          0.633557915687561
      ],
      [
          "الانتخابات→",
          0.631682813167572
      ],
      [
          "الالعاب_الاولمبيه",
          0.6313366293907166
      ],
      [
          "اليونيسكو",
          0.6277068257331848
      ],
      [
          "نوبل»",
          0.6274343132972717
      ],
      [
          "اليونسكو",
          0.6230865120887756
      ],
      [
          "افتتاح_قناه_السويس",
          0.6191961765289307
      ],
      [
          "مهرجان_دمشق",
          0.6191582679748535
      ],
      [
          "مهرجان_قرطاج",
          0.6153987050056458
      ],
      [
          "فوربس»",
          0.6149653196334839
      ],
      [
          "سوتشي",
          0.6109389066696167
      ],
      [
          "الصحفيين»",
          0.6100733876228333
      ],
      [
          "الاتحاد»",
          0.6098619103431702
      ],
      [
          "الاخلاق»",
          0.607146143913269
      ],
      [
          "الضباط»",
          0.6061755418777466
      ],
      [
          "الفرانكفونيه",
          0.6061156988143921
      ]
  ],
  "للروائي": [
      [
          "للكاتب",
          0.8343867063522339
      ],
      [
          "للاديب",
          0.8003248572349548
      ],
      [
          "الروائي",
          0.7793247103691101
      ],
      [
          "والقاص",
          0.7644964456558228
      ],
      [
          "للمفكر",
          0.7591297626495361
      ],
      [
          "والمؤرخ",
          0.7449119687080383
      ],
      [
          "والمسرحي",
          0.7439931035041809
      ],
      [
          "والاديب",
          0.7401393055915833
      ],
      [
          "لمؤلفه",
          0.7386229634284973
      ],
      [
          "للرسام",
          0.7342005372047424
      ],
      [
          "الاديب",
          0.7308257818222046
      ],
      [
          "للمؤلف",
          0.7293298840522766
      ],
      [
          "للقاص",
          0.7266734838485718
      ],
      [
          "وفاه_الكاتب",
          0.7260429859161377
      ],
      [
          "للباحث",
          0.7254611849784851
      ],
      [
          "والكاتب",
          0.7138299345970154
      ],
      [
          "للخطاط",
          0.71247398853302
      ],
      [
          "والروائي",
          0.7117825150489807
      ],
      [
          "الفنان_التشكيلي",
          0.7093204259872437
      ],
      [
          "والصحافي",
          0.6901543140411377
      ]
  ],
  "ولم": [
      [
          "لم",
          0.8875950574874878
      ],
      [
          "ولن",
          0.8812612295150757
      ],
      [
          "فلن",
          0.8376214504241943
      ],
      [
          "لن",
          0.8334343433380127
      ],
      [
          "عندما",
          0.7921072244644165
      ],
      [
          "مالم",
          0.7908527851104736
      ],
      [
          "وقد",
          0.7858461141586304
      ],
      [
          "وعندما",
          0.7834965586662292
      ],
      [
          "فلا",
          0.7694472074508667
      ],
      [
          "لكي",
          0.7581620812416077
      ],
      [
          "حينما",
          0.7558462619781494
      ],
      [
          "سوف",
          0.7472518086433411
      ],
      [
          "وان_لم",
          0.7450815439224243
      ],
      [
          "حين",
          0.742259681224823
      ],
      [
          "فسوف",
          0.7281003594398499
      ],
      [
          "فهل",
          0.7166893482208252
      ],
      [
          "وسوف",
          0.7098088264465332
      ],
      [
          "وحينما",
          0.6994163393974304
      ],
      [
          "وربما",
          0.6985509991645813
      ],
      [
          "فكيف",
          0.6964160799980164
      ]
  ],
  "يتحدث": [
      [
          "يبحث",
          0.8166351914405823
      ],
      [
          "تتحدث",
          0.7440309524536133
      ],
      [
          "تحدث",
          0.7338361144065857
      ],
      [
          "يتكلم",
          0.7057768702507019
      ],
      [
          "يتحث",
          0.697661817073822
      ],
      [
          "يخرج",
          0.6969317197799683
      ],
      [
          "يتحدت",
          0.6897626519203186
      ],
      [
          "اتحدث",
          0.6871945858001709
      ],
      [
          "يتساءل",
          0.6844989657402039
      ],
      [
          "يتخلف",
          0.6762756109237671
      ],
      [
          "يكشف",
          0.6738599538803101
      ],
      [
          "متحدثا",
          0.6725372672080994
      ],
      [
          "يحدثني",
          0.6680862307548523
      ],
      [
          "يضع",
          0.6657195091247559
      ],
      [
          "يفصح",
          0.6654217839241028
      ],
      [
          "يتسائل",
          0.6651877164840698
      ],
      [
          "يعبر",
          0.6631612181663513
      ]
  ],
  "يفارق": [
      [
          "ينسي",
          0.6745318174362183
      ],
      [
          "يسكن",
          0.6578425168991089
      ],
      [
          "ينسئ",
          0.6375245451927185
      ],
      [
          "تفارق",
          0.6318983435630798
      ],
      [
          "يغيب",
          0.6247096061706543
      ],
      [
          "يفاارق",
          0.622314989566803
      ],
      [
          "يزل",
          0.6154685616493225
      ],
      [
          "ينساني",
          0.6117850542068481
      ],
      [
          "يملي",
          0.6116359829902649
      ],
      [
          "يخون",
          0.6084103584289551
      ],
      [
          "يطاوع",
          0.6025921106338501
      ],
      [
          "يمل",
          0.6022006869316101
      ],
      [
          "يترك",
          0.5989634394645691
      ],
      [
          "يعشق",
          0.5966169238090515
      ],
      [
          "يرتاح",
          0.5957990884780884
      ],
      [
          "يغمض",
          0.5955833196640015
      ],
      [
          "يشتاق",
          0.5949782133102417
      ],
      [
          "يستحل",
          0.5946490168571472
      ]
  ]
},
morph:{
  "أحمد": {
      "Diacritization": [
          "أَحمَدُ",
          "أَحمَدَ",
          "أَحمَد",
          "أُحمَدُ",
          "أُحمَدَ",
          "أُحمَد",
          "اِحمَد",
          "أُحَمِّدُ",
          "أُحَمِّدَ",
          "أُحَمِّد",
          "أُحَمَّدُ",
          "أُحَمَّدَ",
          "أُحَمَّد",
          "أَحمَدِ",
          "أَ",
          "حَمِدَ",
          "حُمِدَ",
          "حَمَّدَ",
          "حُمِّدَ",
          "حَمِّد"
      ],
      "Gender": "M",
      "Lemmatization": "أحمد",
      "POS": "Proper Noun",
      "Tokenization": "احمد"
  },
  "الأسواني": {
      "Diacritization": [
          "Nan"
      ],
      "Gender": "M",
      "Lemmatization": "أسواني",
      "POS": "Proper Noun",
      "Tokenization": "الاس+واني"
  },
  "الذي": {
      "Diacritization": [
          "Nan"
      ],
      "Gender": "M",
      "Lemmatization": "الذي",
      "POS": "Preposition",
      "Tokenization": "الذي"
  },
  "المشروع": {
      "Diacritization": [
          "بِ",
          "قَصرٍ",
          "قَصرِ",
          "قِصَرٍ",
          "قِصَرِ",
          "قَصَرٍ",
          "قَصَرِ",
          "قُصَّرٍ",
          "قُصَّرِ"
      ],
      "Gender": "M",
      "Lemmatization": "مشروع",
      "POS": "Noun",
      "Tokenization": "المشروع"
  },
  "توفيق": {
      "Diacritization": [
          "اَلأَجَانِبُ",
          "اَلأَجَانِبِ",
          "اَلأَجَانِبَ"
      ],
      "Gender": "M",
      "Lemmatization": "توفيق",
      "POS": "Proper Noun",
      "Tokenization": "توفيق"
  },
  "جمهورية": {
      "Diacritization": [
          "بَكُورُو",
          "نَا"
      ],
      "Gender": "F",
      "Lemmatization": "جمهوري",
      "POS": "Noun",
      "Tokenization": "جمهورية"
  },
  "خالد": {
      "Diacritization": [
          "اَلشَّيخُ",
          "اَلشَّيخِ",
          "اَلشَّيخَ"
      ],
      "Gender": "M",
      "Lemmatization": "خالد",
      "POS": "Proper Noun",
      "Tokenization": "خالد"
  },
  "ذهنه": {
      "Diacritization": [
          "Nan"
      ],
      "Gender": "M",
      "Lemmatization": "ذهن",
      "POS": "Noun",
      "Tokenization": "ذهن+ه"
  },
  "رواية": {
      "Diacritization": [
          "Nan"
      ],
      "Gender": "F",
      "Lemmatization": "رواي",
      "POS": "Noun",
      "Tokenization": "رواية"
  },
  "ظل": {
      "Diacritization": [
          "ظَلَّ",
          "ظُلَّ",
          "ظَلّ",
          "ظِلٌّ",
          "ظِلٍّ",
          "ظِلُّ",
          "ظِلِّ",
          "ظِلَّ"
      ],
      "Gender": "M",
      "Lemmatization": "ظل",
      "POS": "Noun",
      "Tokenization": "ظل"
  },
  "علاء": {
      "Diacritization": [
          "Nan"
      ],
      "Gender": "M",
      "Lemmatization": "علاء",
      "POS": "Proper Noun",
      "Tokenization": "علاء"
  },
  "في": {
      "Diacritization": [
          "فِي",
          "فُو",
          "يَ",
          "فَا"
      ],
      "Gender": "NA",
      "Lemmatization": "في",
      "POS": "Proper Noun",
      "Tokenization": "في"
  },
  "كأن": {
      "Diacritization": [
          "Nan"
      ],
      "Gender": "NA",
      "Lemmatization": "أن",
      "POS": "Quantity Noun",
      "Tokenization": "كان"
  },
  "للروائي": {
      "Diacritization": [
          "Nan"
      ],
      "Gender": "M",
      "Lemmatization": "روائي",
      "POS": "Noun",
      "Tokenization": "للر+وايي"
  },
  "ولم": {
      "Diacritization": [
          "وَ",
          "لَمَّ",
          "لُمَّ",
          "لُمّ",
          "لُم",
          "لِمَ",
          "لَم"
      ],
      "Gender": "NA",
      "Lemmatization": "لم",
      "POS": "Subordinating Conjunction",
      "Tokenization": "ولم"
  },
  "يتحدث": {
      "Diacritization": [
          "اَلشَّرقُ",
          "اَلشَّرقِ",
          "اَلشَّرقَ"
      ],
      "Gender": "M",
      "Lemmatization": "يتحدث",
      "POS": "Verb",
      "Tokenization": "يتحدث"
  },
  "يفارق": {
      "Diacritization": [
          "Nan"
      ],
      "Gender": "M",
      "Lemmatization": "يفارق",
      "POS": "Verb",
      "Tokenization": "يف+ارق"
  }
}}
// ==========================================

  handleTasks=(name,input,model='alkholi')=>{
    const sentimentModels=['alkholi','lstm','arabert']
    const similarityModels=['aravec','word2vec']
    if (name==='sent' & sentimentModels.includes(model) ){
     
      this.get_sentiment(input,model)
    }
    else if (name==='ner'){
      this.get_ner(input)
    }
    else if (name==='pos'){
      this.pos(input)
    }
    else if(name==='dialect'){
      this.dialect(input)
    }
    else if(name==='lem'){
      this.lem(input)
    }
    else if(name==='tok'){
      this.tokenize(input)
    }
    else if(name==='sim'&& similarityModels.includes(model)){
      this.sim(input,model)
    }
    else if(name==='morph'){
      this.get_morph(input)
    }
    else{
      return
    }
  }
  sim=async(text,model)=>{
    try{
      // this.setState({Similar:{}})
     
      // const url=process.env.REACT_APP_URL+'/'+model+'/similar'
      // const output=await fetch(url,{method:"POST",mode: 'cors',headers: {'Content-Type': 'application/json'},body: JSON.stringify({ 'text':text })})//,this.requestOptions(text))
      // var data = await output.json();
      // this.setState({Similar:data.result['output']})
    }
    catch(e){
      console.log(e)
    }
  }
 
  lem=async(text)=>{
    const url=process.env.REACT_APP_URL+"/lemma"
    this.setState({LEM:{}})
    try{
      //  const output=await fetch(url,{method:"POST",mode: 'cors',headers: {'Content-Type': 'application/json'},body: JSON.stringify({ 'text':text })})//,this.requestOptions(text))
      //  var data = await output.json();
      //  this.setState({LEM:data.result['output']})
    }
    catch(e){
      console.log(e)
    }
  }
  dialect=async(text)=>{
    const url=process.env.REACT_APP_URL+"/dialect"

    try{
      // this.setState({Dialect:{}})
      // const output=await fetch(url,{method:"POST",mode: 'cors',headers: {'Content-Type': 'application/json'},body: JSON.stringify({ 'text':text })})//,this.requestOptions(text))
      // var data = await output.json();
      // console.log(data)
      // this.setState({Dialect:data.result['output']})
    }
    catch(e){
      console.log(e)
    }
  }

  pos=async(text)=>{
    const url=process.env.REACT_APP_URL+"/pos"
    try{
      // this.setState({POS:{}})
      // const output=await fetch(url,{method:"POST",mode: 'cors',headers: {'Content-Type': 'application/json'},body: JSON.stringify({ 'text':text })})//,this.requestOptions(text))
      // var data = await output.json();
      // this.setState({POS:data.result['output']})
    }
    catch(e){
      console.log(e)
    }
  }
  tokenize=async(text)=>{
    this.setState({token:{}})
    const url=process.env.REACT_APP_URL+'/tokenize'
    try{
      // const output=await fetch(url,{method:"POST",mode: 'cors',headers: {'Content-Type': 'application/json'},body: JSON.stringify({ 'text':text })})//,this.requestOptions(text))
      // var data = await output.json();
      // console.log(data.result['output'])
      // this.setState({token:data.result['output']})
    }
    catch(e){
      console.log(e)
    }
  }
   get_sentiment=async(text,model)=>{
     const url=process.env.REACT_APP_URL+'/sentiment/'+model
     try{
      //  this.setState({sentiment:{}})
       
      //  const output=await fetch(url,{method:"POST",mode: 'cors',headers: {'Content-Type': 'application/json'},body: JSON.stringify({ 'text':text })})//,this.requestOptions(text))
      //  var data = await output.json();
      //  var scores={}
      //  console.log(data.result['output'])
      // scores['LABEL_0']=data.result['output'][0][0]['score']
      // scores['LABEL_1']=data.result['output'][0][1]['score']
      // scores['LABEL_2']=data.result['output'][0][2]['score']
      
      
        // scores[Object.keys(data.result['output'][0][x])[0]]=scores[Object.keys(data.result['output'][0][x])[1]]
        
    
        // this.setState({sentiment:{
        //   "positive":scores['LABEL_2'],
        //   "negative":scores['LABEL_1'],
        //   "mixed":scores['LABEL_0'],
        // }})
       
       //this.setState({Sentiment:data.result['output']})
     }
     catch(e){
       console.log(e)
     }
     //  const output=await fetch()
  }
  get_ner=async(text)=>{
    try{
      // this.setState({NER:{}})
      // const url=process.env.REACT_APP_URL+'/ner'
      // const output=await fetch(url,{method:"POST",mode: 'cors',headers: {'Content-Type': 'application/json'},body: JSON.stringify({ 'text':text })})//,this.requestOptions(text))
      // var data = await output.json();
      // this.setState({NER:data.result['output']})

    }
   catch(e){
     console.log(e)
   }
  }

get_morph=async(text)=>{
  try{
    // this.setState({morph:{}})
    // const url=process.env.REACT_APP_URL+'/morpho'
    // const output=await fetch(url,{method:"POST",mode: 'cors',headers: {'Content-Type': 'application/json'},body: JSON.stringify({ 'text':text })})//,this.requestOptions(text))
    // var data = await output.json();
    //   this.setState({morph:data.result['output']})
  }
  catch(e){
    console.log(e)
  }
}
  render(){

    return (
      <div className="App main-background">
        <header className='container-fluid px-0'>
          <img className="col-12 mx-0" src="images/header.png" alt=""></img>
        </header>
        <Navbar />
        <Switch>
        <Route  path="/lemmatization" render={()=>(<LEM 
        name={'Lemmatization'}
         task={'lem'}
         output={this.state.LEM}
         handleTasks={this.handleTasks}/>)}/>
         {/* ======================================= */}
        <Route  path="/sentiment"  render={()=>(<Sentiment
         name={'Sentiment Analysis'} 
         output={this.state.sentiment}
         handleTasks={this.handleTasks}/>)}/>
         {/* ======================================= */}
        <Route  path="/ner"  render={()=>(<NER
         name={'Named Entity Recognition'}
         task={'ner'}
         handleTasks={this.handleTasks}
         output={this.state.NER}/>)}/>
         {/* ==================================== */}
         <Route  path="/tokenization"  render={()=>(<Tokenization 
        name={'Tokenization'} 
        task={'tok'}
        output={this.state.token}
        handleTasks={this.handleTasks}/>)}/>
         {/* ==================================== */}
        <Route  path="/pos"  render={()=>(<POS 
        name={'Parts Of Speech Tagging'} 
        task={'pos'}
        output={this.state.POS}
        handleTasks={this.handleTasks}/>)}/>
         {/* ==================================== */}
         <Route  path="/dialect"  render={()=>(<Dialect 
        name={'Dialect Identification'} 
        task={'dialect'}
        output={this.state.Dialect}
        handleTasks={this.handleTasks}/>)}/>
        {/* ====================================== */}
        <Route  path="/similar"  render={()=>(<Similar
         name={'Similar Words'}
          task={'sim'}
          output={this.state.Similar}
        handleTasks={this.handleTasks}/>)}/>
        {/* ====================================== */}
        <Route  path="/morph"  render={()=>(<Morph
         name={'Morphological Analysis'}
          task={'morph'}
          output={this.state.morph}
        handleTasks={this.handleTasks}/>)}/>
        {/* ====================================== */}
        <Route path="/" exact render={()=>(<Home/>)}/>
        <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
  
}

export default App;