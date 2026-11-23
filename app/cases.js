/*
  Symulator interwencji – przypadki zmyślone (paczka 1).
  Każdy przypadek: id, tag, title, who, ctx, steps[]. Kroki to ćwiczenia mc/write/order
  (dialog: K = klient, P = partner/druga osoba, C = coach, N = narracja). Pole „say” = przykładowe sformułowanie.
*/
window.CASES = (window.CASES || []).concat([

/* ───────── ZWIĄZKI ───────── */
{ id:"c001", tag:"Związki", title:"Ania: „On się nie stara”", who:"Ania, 31 lat, 4 lata w związku",
  ctx:"Przychodzi sama. Chce „naprawić związek”, ale od pierwszej minuty mówi głównie o partnerze.",
  steps:[
  { type:"mc", tech:"Odpowiedzialność", dialog:[["K","On w ogóle się nie stara. Nie zaplanuje randki, nie kupi kwiatów, nic. Ja wszystko ciągnę."]],
    q:"Co robisz najpierw?",
    opts:[
      { t:"Uznajesz jej zmęczenie i przenosisz uwagę: „Słyszę, że jesteś wyczerpana. Na co ty masz wpływ w tej pętli?”", ok:true },
      { t:"„Rzeczywiście, to nie fair. Powinien się bardziej starać.”", why:"Stajesz po jej stronie przeciw partnerowi, którego nie ma w gabinecie. Ona zostaje bez wpływu." },
      { t:"„Może po prostu do siebie nie pasujecie?”", why:"Wyciągasz wniosek za klientkę po jednym zdaniu." }
    ],
    explain:"Pracujesz z osobą, która siedzi naprzeciwko. Partnerzy są w pętli, więc zmiana jednej osoby zmienia układ.",
    say:"„Słyszę, że dźwigasz to sama i że jesteś tym zmęczona. Zanim pomówimy o nim: co ty robisz, kiedy on się nie stara?”" },
  { type:"mc", tech:"Reguły", dialog:[["C","Co musiałoby się wydarzyć, żebyś czuła, że on się stara?"],["K","No… żeby sam z siebie planował, pamiętał, zaskakiwał. I żebym nie musiała mu przypominać."]],
    q:"Co słyszysz?",
    opts:[
      { t:"Regułę bardzo trudną do spełnienia: wszystko zależy od niego i musi wyjść „samo z siebie”.", ok:true },
      { t:"Rozsądne oczekiwania, które on łamie.", why:"Każde z osobna jest rozsądne, ale razem, jako warunek poczucia miłości, prawie gwarantują rozczarowanie." },
      { t:"Brak miłości z jego strony.", why:"Nic o tym nie wiesz. Słyszysz jej regułę, nie jego uczucia." }
    ],
    explain:"„Sam z siebie” wyklucza nawet prośbę. Następny krok: dopisać do reguły rzeczy, które ona kontroluje, i sprawdzić jego reguły miłości." }
]},

{ id:"c002", tag:"Związki", title:"Michał i Kasia: kłótnia o telefon", who:"Para, 30+, razem 7 lat",
  ctx:"Przyszli razem. Napięcie widać od wejścia. Siadają daleko od siebie.",
  steps:[
  { type:"mc", tech:"Otwarcie pracy z parą", dialog:[["P","(Kasia) On ciągle siedzi w telefonie! Nawet przy kolacji!"],["K","(Michał) Bo jak tylko coś powiem, to się czepiasz."]],
    q:"Jak ustawiasz rozmowę na starcie?",
    opts:[
      { t:"Ustalasz zasadę: każde mówi o sobie, zaczynając od „ja czuję / ja potrzebuję”, a nie od „ty zawsze”.", ok:true },
      { t:"Pozwalasz im się wykrzyczeć, żeby zobaczyć dynamikę.", why:"Dynamikę już widzisz. Każda kolejna minuta kłótni utrwala wzorzec." },
      { t:"Pytasz Michała, ile godzin dziennie spędza w telefonie.", why:"Stajesz się sędzią i jedno z nich od razu poczuje się oskarżone." }
    ],
    explain:"Para w ataku potrzebuje jasnej ramy. Zdanie zaczynające się od „ty” wywołuje obronę, a zdanie zaczynające się od „ja” daje się usłyszeć." },
  { type:"mc", tech:"Szalona ósemka i potrzeby", dialog:[["P","(Kasia) Kiedy on scrolluje, czuję się jak powietrze. Wtedy zaczynam mu wytykać różne rzeczy."]],
    q:"Co jest pod jej „czepianiem się”?",
    opts:[
      { t:"Niezaspokojone znaczenie i więź. Krytyka to nieudolna próba nawiązania kontaktu.", ok:true },
      { t:"Charakter: po prostu jest krytyczna.", why:"Etykieta, nie mechanizm. Sama właśnie powiedziała, co czuje." },
      { t:"Brak szacunku dla jego potrzeby odpoczynku.", why:"Możliwe, ale to nie jest to, co powiedziała. Mówi o poczuciu, że jest niewidzialna." }
    ],
    explain:"Krytyka często jest prośbą o uwagę podaną w złej formie. Gdy to nazwiesz, Michał może usłyszeć prośbę zamiast ataku.",
    say:"„Kasiu, czy dobrze słyszę, że kiedy mówisz »znowu siedzisz w telefonie«, tak naprawdę mówisz »brakuje mi ciebie«?”" },
  { type:"write", tech:"Sztuka prośby", ctx:"Poproś Kasię, żeby zamieniła pretensję na prośbę.",
    q:"Napisz zdanie, które Kasia mogłaby powiedzieć Michałowi.",
    hints:["Mówi o jej uczuciu, nie o jego winie","Zawiera konkretną prośbę","Daje Michałowi szansę wygrać"],
    model:["„Kiedy przy kolacji patrzysz w telefon, czuję się samotna. Bardzo bym chciała, żebyśmy jedli bez telefonów. Wtedy czuję, że jestem dla ciebie ważna.”"] }
]},

{ id:"c003", tag:"Związki", title:"Paweł: zazdrość", who:"Paweł, 27 lat, od roku w związku",
  ctx:"Sprawdza telefon dziewczyny. Wie, że to niszczy związek, ale „nie umie przestać”.",
  steps:[
  { type:"mc", tech:"Sześć potrzeb", dialog:[["K","Jak jej nie sprawdzę, to cały wieczór mnie skręca. Jak sprawdzę i nic nie ma, to mam spokój. Na chwilę."]],
    q:"Jaką potrzebę zaspokaja mu sprawdzanie telefonu?",
    opts:[
      { t:"Pewność. Chwilowa ulga daje mu poczucie kontroli.", ok:true },
      { t:"Różnorodność.", why:"Sprawdzanie daje mu raczej ulgę i przewidywalność niż ekscytację." },
      { t:"Wkład.", why:"Nie daje nic innym. To obrona przed lękiem." }
    ],
    explain:"Ulga przy sprawdzaniu wzmacnia nawyk (jak każde zachowanie, które przynosi ulgę). Potrzebna jest inna droga do pewności." },
  { type:"mc", tech:"Metamodel i przekonania", dialog:[["K","Bo wiem, jak to jest. Wszystkie w końcu zdradzają."]],
    q:"Co robisz z tym zdaniem?",
    opts:[
      { t:"Podważasz uogólnienie: „Wszystkie? Skąd to wiesz? Czy to twoje doświadczenie z nią, czy z kimś wcześniej?”", ok:true },
      { t:"„To nieprawda, moja żona nigdy mnie nie zdradziła.”", why:"Przykład z twojego życia nie podważa jego referencji, a łamie kontakt." },
      { t:"Pomijasz to i wracasz do planu: jak przestać sprawdzać telefon.", why:"Przekonanie globalne napędza zachowanie. Bez jego ruszenia plan się nie utrzyma." }
    ],
    explain:"Przekonanie „wszystkie zdradzają” to filtr z przeszłości nałożony na obecną partnerkę. Ruszysz jego nogi, a zachowanie straci paliwo.",
    say:"„Wszystkie? Kto konkretnie cię zdradził? I czy ona jest tą osobą?”" }
]},

{ id:"c004", tag:"Związki", title:"Ola: po rozstaniu", who:"Ola, 35 lat, 2 miesiące po rozstaniu",
  ctx:"Mówi, że „wszystko jest w porządku”, ale co chwilę wraca do byłego.",
  steps:[
  { type:"mc", tech:"Kalibracja", dialog:[["K","Naprawdę jestem już ponad tym. (zaciska szczękę, patrzy w podłogę) Po prostu czasem o nim myślę."]],
    q:"Co robisz?",
    opts:[
      { t:"Łagodnie oddajesz jej to, co widzisz: „Mówisz, że jesteś ponad tym, a twoja szczęka mówi co innego. Co się teraz dzieje w ciele?”", ok:true },
      { t:"Przyjmujesz to i przechodzisz do celów na przyszłość.", why:"Budujesz na zaprzeczeniu. Cele będą się rozsypywać." },
      { t:"„Na pewno nie jesteś ponad tym.”", why:"Za ostro i bez ciepła. Wywołasz obronę." }
    ],
    explain:"Gdy słowa i ciało mówią co innego, wierz ciału i powiedz to z ciepłem, jak Robbins z Eileen." },
  { type:"mc", tech:"Nadanie znaczenia", dialog:[["K","Zmarnowałam z nim pięć lat."]],
    q:"Jakie pytanie zmienia znaczenie tych lat?",
    opts:[
      { t:"„Czego te pięć lat cię nauczyło o tym, czego chcesz i czego nie zaakceptujesz?”", ok:true },
      { t:"„Ja bym tego tak nie nazywała.”", why:"Zaprzeczasz bez dania nowego znaczenia." },
      { t:"„Dlaczego tak długo z nim byłaś?”", why:"Pytanie zwiększa poczucie winy i wstydu." }
    ],
    explain:"„Zmarnowałam” to znaczenie, nie fakt. Pytanie o naukę zamienia stratę w referencję na przyszłość." }
]},

{ id:"c005", tag:"Związki", title:"Tomek: brak pożądania", who:"Tomek, 42 lata, 15 lat małżeństwa",
  ctx:"„Kocham żonę, ale iskra zgasła. Jesteśmy jak współlokatorzy.”",
  steps:[
  { type:"mc", tech:"Bilans sześciu potrzeb", q:"Co jest dobrym pierwszym narzędziem diagnozy?",
    opts:[
      { t:"Bilans sześciu potrzeb w związku od 0 do 10, z jego perspektywy i z perspektywy żony.", ok:true },
      { t:"Pytanie, czy myśli o zdradzie.", why:"Za wcześnie i zbyt konfrontacyjnie. Najpierw zobacz, czego brakuje." },
      { t:"Lista rzeczy, które żona robi źle.", why:"Kierujesz go w obwinianie." }
    ],
    explain:"„Współlokatorzy” zwykle oznacza wysoką pewność i bardzo niską różnorodność. Bilans to pokaże i da konkretny kierunek, jak u Laury." },
  { type:"mc", tech:"Różnorodność", dialog:[["K","Pewność: 10. Różnorodność: 1. Wszystko jest takie samo od lat."]],
    q:"Jakie zadanie wynika z tego bilansu?",
    opts:[
      { t:"Wprowadzić pozytywną różnorodność: niespodzianki, nowe miejsca, nowe doświadczenia razem, i to on zaczyna pierwszy.", ok:true },
      { t:"Dać sobie więcej przestrzeni osobno.", why:"Może pomóc trochę, ale nie da różnorodności w związku." },
      { t:"Pogodzić się z tym, że tak już jest w długich związkach.", why:"To przekonanie, które zabija związki. Różnorodność da się stworzyć." }
    ],
    explain:"Brak różnorodności nie znaczy, że miłość zgasła. Znaczy, że w związku nic nie jest nowe. To da się zmienić działaniem." }
]},

/* ───────── PRACA I BIZNES ───────── */
{ id:"c006", tag:"Praca i biznes", title:"Bartek: firma stoi w miejscu", who:"Bartek, 38 lat, właściciel agencji marketingowej",
  ctx:"Firma od 3 lat ma te same przychody. „Rynek jest trudny.”",
  steps:[
  { type:"mc", tech:"Psychologia lidera", dialog:[["K","Rynek się zmienił, klienci płacą mniej, konkurencja zaniża ceny."]],
    q:"Jakie pytanie zadajesz?",
    opts:[
      { t:"„Czy ktoś w twojej branży rośnie mimo tego rynku? Co robi inaczej niż ty?”", ok:true },
      { t:"„Rzeczywiście, czasy są ciężkie.”", why:"Przyjmujesz wymówkę za fakt." },
      { t:"„Może obniż ceny?”", why:"Rada przed diagnozą." }
    ],
    explain:"Jeśli ktoś rośnie na tym samym rynku, to problem nie leży w rynku. To otwiera rozmowę o psychologii i umiejętnościach lidera, jak u Pixie." },
  { type:"mc", tech:"Właściciel a operator", dialog:[["K","No… wszystko przechodzi przeze mnie. Każdą ofertę, każdą kampanię sam sprawdzam."]],
    q:"Co to oznacza?",
    opts:[
      { t:"Jest operatorem, a nie właścicielem. Firma nie może urosnąć ponad jego czas i energię.", ok:true },
      { t:"Że dba o jakość i to jego przewaga.", why:"Dbałość o jakość jest ważna, ale jeśli wszystko przechodzi przez jedną osobę, to jest wąskie gardło." },
      { t:"Że ma złych pracowników.", why:"Może, ale prawdopodobnie nie dał im szansy przejąć odpowiedzialności." }
    ],
    explain:"Następny krok: jaka potrzeba trzyma go przy kontroli (zwykle pewność i znaczenie) i co by musiało się stać, żeby oddał jedną rzecz.",
    say:"„Gdybyś jutro zniknął na miesiąc, co by się stało z firmą? I co by to dla ciebie znaczyło?”" }
]},

{ id:"c007", tag:"Praca i biznes", title:"Monika: wypalenie", who:"Monika, 36 lat, menedżerka w korporacji",
  ctx:"Pracuje po 12 godzin. „Nie mam już siły, ale nie mogę odpuścić.”",
  steps:[
  { type:"mc", tech:"Metamodel: operator modalny", dialog:[["K","Nie mogę odpuścić. Wszystko by się zawaliło."]],
    q:"Co pytasz?",
    opts:[
      { t:"„Co konkretnie by się zawaliło, gdybyś wyszła jutro o 17?”", ok:true },
      { t:"„Musisz odpuścić, bo się wykończysz.”", why:"Odpowiadasz jednym „musisz” na drugie. To tylko przepychanka." },
      { t:"„Ile masz zaległego urlopu?”", why:"Rozmowa o logistyce, zanim ruszysz przekonanie." }
    ],
    explain:"„Wszystko by się zawaliło” to katastroficzne uogólnienie. Gdy klientka nazwie konkret, zwykle okazuje się mniejszy i możliwy do zaplanowania." },
  { type:"mc", tech:"Tożsamość", dialog:[["K","Ja zawsze byłam tą, na której można polegać. Jak nie ja, to kto?"]],
    q:"Na jakim poziomie leży problem?",
    opts:[
      { t:"Tożsamości: „jestem tą, na której można polegać”. Odpuszczenie zagraża temu, kim jest.", ok:true },
      { t:"Umiejętności: nie umie delegować.", why:"Może i tak, ale nauka delegowania nie zadziała, dopóki odpuszczenie oznacza dla niej utratę siebie." },
      { t:"Otoczenia: ma złego szefa.", why:"Nic o tym nie mówi." }
    ],
    explain:"Podobnie jak u Debbie: dawanie i bycie oparciem to tożsamość. Nie zabierasz jej tego, tylko poszerzasz: można polegać na niej także dlatego, że dba o siebie.",
    say:"„Co by znaczyło być osobą, na której można polegać, również w dbaniu o siebie?”" }
]},

{ id:"c008", tag:"Praca i biznes", title:"Kuba: rozmowa o podwyżkę", who:"Kuba, 29 lat, programista",
  ctx:"Od roku zbiera się, żeby poprosić o podwyżkę. Jutro ma spotkanie z szefem.",
  steps:[
  { type:"mc", tech:"Stan przed strategią", dialog:[["K","(ściszonym głosem) Pewnie i tak odmówi. Zawsze się wycofuję w ostatniej chwili."]],
    q:"Co robisz najpierw?",
    opts:[
      { t:"Zmieniasz jego stan: przywołujesz moment, w którym był pewny siebie, i każesz mu stanąć i oddychać tak jak wtedy.", ok:true },
      { t:"Piszecie razem listę argumentów.", why:"Argumenty z przygnębienia zabrzmią jak przeprosiny. Najpierw stan." },
      { t:"Uspokajasz: „Na pewno się zgodzi”.", why:"Nie wiesz tego i nie zmieniasz jego stanu." }
    ],
    explain:"Kolejność: stan, potem strategia. W stanie pewności te same argumenty brzmią zupełnie inaczej." },
  { type:"mc", tech:"Kotwiczenie", q:"Kuba jest w pełnym stanie pewności. Jak sprawić, żeby miał do niego dostęp jutro przed spotkaniem?",
    opts:[
      { t:"Zakotwiczyć stan w szczycie unikalnym gestem (np. zaciśnięcie pięści w konkretny sposób z cichym słowem) i przetestować kotwicę.", ok:true },
      { t:"Powiedzieć mu, żeby pamiętał to uczucie.", why:"Pamięć o uczuciu to nie to samo co niezawodny dostęp do niego." },
      { t:"Napisać mu motywującego SMS-a rano.", why:"Miłe, ale zależne od ciebie, a nie od niego." }
    ],
    explain:"Cztery zasady kotwicy: intensywny stan, szczyt, unikalny bodziec, dokładne powtórzenie. Przed spotkaniem Kuba sam odpala kotwicę." },
  { type:"mc", tech:"Test", q:"Na koniec sesji chcesz sprawdzić, czy zmiana zadziała. Co robisz?",
    opts:[
      { t:"„Wyobraź sobie, że jesteś pod drzwiami szefa. Odpal kotwicę. Wchodzisz. Co czujesz?”", ok:true },
      { t:"„Jak się teraz czujesz?”", why:"Pytasz o stan na sesji, a nie o reakcję w realnej sytuacji." },
      { t:"„Daj znać jutro, jak poszło.”", why:"Testujesz po fakcie, kiedy już nie da się nic poprawić." }
    ],
    explain:"Przeniesienie w przyszłość: wywołaj bodziec w wyobraźni i sprawdź reakcję. Jeśli lęk wraca, wzmocnij kotwicę." }
]},

{ id:"c009", tag:"Praca i biznes", title:"Natalia: syndrom oszusta", who:"Natalia, 33 lata, świeżo awansowana na dyrektorkę",
  ctx:"„Wszyscy w końcu odkryją, że nie mam pojęcia, co robię.”",
  steps:[
  { type:"mc", tech:"Blat i nogi", dialog:[["K","Mam szczęście, trafiłam na dobry moment. Ale zaraz się wyda, że to był przypadek."]],
    q:"Co pytasz?",
    opts:[
      { t:"„Ile konkretnych decyzji, które podjęłaś, doprowadziło do tego awansu? Wymień trzy.”", ok:true },
      { t:"„Każdy czasem tak się czuje.”", why:"Normalizacja na chwilę pomaga, ale nie rusza jej przekonania." },
      { t:"„Skąd się bierze to poczucie?”", why:"Dostaniesz kolejne dowody na „jestem oszustką”." }
    ],
    explain:"Ona przypisuje sukces szczęściu, a nie sobie. Konkretne referencje to nogi nowego przekonania: „Zasłużyłam na to, bo zrobiłam X, Y, Z”." },
  { type:"mc", tech:"Metaprogram: odniesienie", dialog:[["K","Uwierzę, że jestem dobra, kiedy zarząd mi to powie."]],
    q:"Jaki metaprogram słyszysz i co z nim robisz?",
    opts:[
      { t:"Zewnętrzne odniesienie. Na teraz: zbierz konkretne informacje zwrotne od zarządu. Długofalowo: buduj własne kryteria oceny.", ok:true },
      { t:"Wewnętrzne odniesienie.", why:"Ocena zależy u niej od zarządu, czyli z zewnątrz." },
      { t:"Metaprogram „od”.", why:"Ten dotyczy kierunku motywacji. Tu chodzi o źródło przekonania." }
    ],
    explain:"Przy zewnętrznym odniesieniu dane i opinie z zewnątrz są dla klientki najmocniejszym dowodem. Wykorzystaj to, a potem stopniowo ucz ją oceniać się samej." }
]},

/* ───────── LĘK I STRES ───────── */
{ id:"c010", tag:"Lęk i stres", title:"Ewa: wystąpienia publiczne", who:"Ewa, 40 lat, ekspertka w firmie farmaceutycznej",
  ctx:"Za tydzień ma wystąpić na konferencji. Na samą myśl ma kołatanie serca.",
  steps:[
  { type:"mc", tech:"Submodalności", dialog:[["K","Widzę tę salę, tysiąc twarzy, wszyscy się na mnie gapią, a ja się jąkam."]],
    q:"Co robisz z tym obrazem?",
    opts:[
      { t:"Pytasz o jego cechy (duży? blisko? jasny?) i każesz go zmniejszyć, oddalić, odbarwić, a potem nałożyć nowy film: sala słucha zaciekawiona.", ok:true },
      { t:"Każesz jej przeżyć ten obraz jeszcze mocniej, żeby się odczulić.", why:"Wzmocnienie lękowego obrazu zwykle zwiększa lęk." },
      { t:"Mówisz, że przecież zna temat najlepiej na sali.", why:"Logika nie zmienia obrazu, który odpala lęk." }
    ],
    explain:"Klientka sama „robi” sobie lęk tym filmem. Gdy zmienisz jego submodalności i dasz nowy film, ciało zareaguje inaczej." },
  { type:"mc", tech:"Sygnał: strach", q:"Jaka jest wiadomość jej strachu i co z nią robisz?",
    opts:[
      { t:"„Przygotuj się”. Ustalacie konkretny plan: trzy próby na głos, jedna przed dwiema osobami.", ok:true },
      { t:"„Nie występuj.” Strach chroni ją przed porażką.", why:"Strach nie mówi „uciekaj”, tylko „przygotuj się”." },
      { t:"Ignorować go i działać na przekór.", why:"Ignorowany strach rośnie." }
    ],
    explain:"Przygotowanie zmniejsza strach szybciej niż jakakolwiek technika. Połącz pracę z obrazem z konkretnym planem prób." }
]},

{ id:"c011", tag:"Lęk i stres", title:"Rafał: lęk przed lataniem", who:"Rafał, 45 lat, nie leciał od 10 lat",
  ctx:"Od turbulencji 10 lat temu nie wsiada do samolotu. Za dwa miesiące ślub córki za granicą.",
  steps:[
  { type:"mc", tech:"Dobór techniki", q:"Pojedyncze intensywne zdarzenie, które zapoczątkowało fobię. Co wybierasz?",
    opts:[
      { t:"Technikę kina: podwójna dysocjacja, film w czarno-bieli od przed do po, potem szybkie przewinięcie od końca w kolorze z zabawną muzyką.", ok:true },
      { t:"Swish.", why:"Swish jest na nawyki z wyzwalaczem. Tu jest fobia z jednego zdarzenia." },
      { t:"Pracę z częściami.", why:"Nie ma tu wewnętrznego rozdarcia. Jest zapisana reakcja lękowa." }
    ],
    explain:"Fobia z pojedynczego zdarzenia to klasyczne wskazanie do techniki kina. Na koniec test: wyobraź sobie wejście na pokład." },
  { type:"mc", tech:"Dźwignia", dialog:[["K","Może po prostu nie pojadę na ten ślub. Pojadę autem później."]],
    q:"Klient szuka wyjścia awaryjnego. Co robisz?",
    opts:[
      { t:"Budujesz dźwignię: „Wyobraź sobie zdjęcia z tego ślubu bez ciebie. Jak twoja córka będzie to wspominać za 20 lat? Jak ty?”", ok:true },
      { t:"„Dobry pomysł, nie wszystko trzeba przezwyciężać.”", why:"Zgadzasz się na unikanie, które za chwilę będzie bolesne dla niego i córki." },
      { t:"„Musisz polecieć, nie ma dyskusji.”", why:"Presja bez emocjonalnego powodu wywoła opór." }
    ],
    explain:"Ból niezmieniania musi być większy niż ból zmiany. Ślub córki to bardzo silna dźwignia, ale tylko wtedy, gdy klient ją poczuje." }
]},

{ id:"c012", tag:"Lęk i stres", title:"Julia: myśli w nocy", who:"Julia, 26 lat, studentka",
  ctx:"Leży w łóżku do 3 w nocy i „kręci się w myślach” o wszystkim, co może pójść źle.",
  steps:[
  { type:"mc", tech:"Jakość pytań", dialog:[["K","Leżę i myślę: a co, jeśli nie zdam? A co, jeśli nie znajdę pracy? A co, jeśli…"]],
    q:"Co jest mechanizmem?",
    opts:[
      { t:"Pytania „a co, jeśli…” zakładają katastrofę i każą mózgowi szukać złych scenariuszy.", ok:true },
      { t:"Za dużo kofeiny.", why:"Możliwe, ale to nie odpowiada na pytanie o mechanizm myśli." },
      { t:"Brak dyscypliny.", why:"Etykieta, nie mechanizm." }
    ],
    explain:"Mózg zawsze odpowiada na zadane pytanie. Zmień pytanie, a zmienisz skupienie." },
  { type:"write", tech:"Jakość pytań", ctx:"Daj Julii trzy pytania na wieczór, które zastąpią „a co, jeśli…”.",
    q:"Napisz trzy pytania.",
    hints:["Zakładają, że rozwiązanie istnieje","Kierują uwagę na to, co dobre lub co ona kontroluje","Można je zadać sobie w łóżku"],
    model:["„Co dziś poszło dobrze, nawet drobnego?”","„Za co jestem dziś wdzięczna?”","„Jaki jeden mały krok zrobię jutro, żeby być bliżej celu?”"] }
]},

{ id:"c013", tag:"Lęk i stres", title:"Grzegorz: atak paniki w sklepie", who:"Grzegorz, 50 lat",
  ctx:"Po ataku paniki w markecie unika dużych sklepów. Lekarz wykluczył przyczyny fizyczne.",
  steps:[
  { type:"mc", tech:"Granica kompetencji", q:"Napady paniki trwają od roku i się nasilają. Co jest ważne na starcie?",
    opts:[
      { t:"Pracujesz coachingowo, ale proponujesz też konsultację z psychoterapeutą lub psychiatrą, bo nasilające się napady paniki to obszar zdrowia psychicznego.", ok:true },
      { t:"Zapewniasz, że jedna sesja techniką kina to rozwiąże.", why:"Nie wolno obiecywać wyleczenia. Coś, co się nasila, wymaga też specjalisty." },
      { t:"Odmawiasz pracy z nim.", why:"Nie musisz odmawiać. Możesz pracować równolegle, jasno nazywając granicę." }
    ],
    explain:"Dobry coach zna granice swoich kompetencji. Współpraca z terapeutą nie umniejsza coachingu." },
  { type:"mc", tech:"Fizjologia", dialog:[["K","Jak czuję, że to się zaczyna, łapię powietrze i robi się jeszcze gorzej."]],
    q:"Jaka prosta zmiana fizjologii może pomóc w tej chwili?",
    opts:[
      { t:"Wydłużony wydech: wdech na 4, wydech na 6–8, kilka razy. Plus nazwanie na głos 5 rzeczy, które widzi.", ok:true },
      { t:"Szybkie, głębokie wdechy.", why:"Łapanie powietrza nasila objawy. Potrzebny jest dłuższy wydech." },
      { t:"Wstrzymanie oddechu.", why:"Zwiększy napięcie i poczucie braku powietrza." }
    ],
    explain:"Dłuższy wydech uspokaja układ nerwowy, a kierowanie zmysłów na otoczenie wyciąga z wnętrza głowy, jak Robbins z Chen („rozejrzyj się”)." }
]},

/* ───────── NAWYKI ───────── */
{ id:"c014", tag:"Nawyki", title:"Agata: podjadanie wieczorem", who:"Agata, 38 lat, mama dwójki dzieci",
  ctx:"Gdy dzieci zasną, siada przed serialem z czekoladą. „To moja jedyna chwila dla siebie.”",
  steps:[
  { type:"mc", tech:"NAC krok 4", q:"Co jest kluczem do zmiany tego nawyku?",
    opts:[
      { t:"Nowa alternatywa, która da jej to samo: chwilę dla siebie, ulgę i przyjemność, ale bez czekolady.", ok:true },
      { t:"Wyrzucenie słodyczy z domu.", why:"Zabierasz źródło przyjemności i nic nie dajesz w zamian. Nawyk wróci inną drogą." },
      { t:"Liczenie kalorii.", why:"Nie dotyka powodu, dla którego je." }
    ],
    explain:"Sama powiedziała, co daje jej nawyk: „jedyna chwila dla siebie”. Bez nowego sposobu na tę potrzebę zmiana będzie tylko chwilowa." },
  { type:"mc", tech:"Szukanie alternatywy", dialog:[["C","Co innego mogłoby ci dać poczucie, że ten czas jest tylko twój?"],["K","Nie wiem… kąpiel? Ale to nie to samo."]],
    q:"Co robisz z „to nie to samo”?",
    opts:[
      { t:"Szukacie razem kilku opcji i każesz jej poczuć każdą w wyobraźni, aż jedna zrobi się atrakcyjna (np. kąpiel ze świecą i ulubioną muzyką, książka z herbatą).", ok:true },
      { t:"„Musisz po prostu spróbować.”", why:"Nowa alternatywa musi być naprawdę atrakcyjna, inaczej przegra z czekoladą." },
      { t:"„No to zostańmy przy czekoladzie, ale mniejszej.”", why:"Rezygnujesz z celu przy pierwszym oporze." }
    ],
    explain:"Alternatywa wygrywa tylko wtedy, gdy daje tyle samo przyjemności. Pomóż ją podkręcić submodalnościami (jasny, bliski, przyjemny obraz)." }
]},

{ id:"c015", tag:"Nawyki", title:"Marek: papierosy po 15 latach", who:"Marek, 41 lat",
  ctx:"Próbował rzucić 6 razy. Najdłużej wytrzymał 3 tygodnie.",
  steps:[
  { type:"mc", tech:"Diagnoza nieudanej zmiany", dialog:[["K","Za każdym razem wracam, jak jest stres w pracy."]],
    q:"Który krok NAC najprawdopodobniej kuleje?",
    opts:[
      { t:"Krok 4: nie ma nowego sposobu na rozładowanie stresu, który dawał mu papieros.", ok:true },
      { t:"Krok 1: nie wie, czego chce.", why:"Wie dokładnie. Próbował sześć razy." },
      { t:"Krok 6: test.", why:"Nie ma czego testować, skoro brakuje alternatywy." }
    ],
    explain:"Wzorzec wraca w stresie, czyli papieros był jego narzędziem na stres. Potrzebna jest nowa strategia na ten sam stan." },
  { type:"mc", tech:"Swish", q:"Wyzwalacz: ręka sięgająca po paczkę w kieszeni. Jak ustawiasz obraz docelowy w technice swish?",
    opts:[
      { t:"Obraz siebie, jakim chce być: spokojny, zdrowy, pewny siebie mężczyzna, który oddycha pełną piersią. Atrakcyjny, a nie „ja bez papierosa”.", ok:true },
      { t:"Obraz czarnych płuc.", why:"To obraz odpychający. Swish działa na przyciąganie do pożądanego „ja”." },
      { t:"Obraz pustej paczki.", why:"To brak, a nie cel. Mózg potrzebuje kierunku." }
    ],
    explain:"Swish ciągnie mózg w stronę pożądanego ja. Obraz docelowy musi być tak atrakcyjny, żeby klient chciał w nim być." }
]},

{ id:"c016", tag:"Nawyki", title:"Szymon: prokrastynacja", who:"Szymon, 24 lata, pisze pracę magisterską",
  ctx:"Termin za 6 tygodni. Napisał 3 strony z 80.",
  steps:[
  { type:"mc", tech:"Ból krótko- i długoterminowy", dialog:[["K","Siadam do pisania i od razu idę zrobić herbatę, potem sprawdzam maila, potem YouTube…"]],
    q:"Co dzieje się w jego głowie?",
    opts:[
      { t:"Pisanie łączy z bólem teraz (wysiłek, lęk, że będzie źle), a odkładanie daje natychmiastową ulgę.", ok:true },
      { t:"Ma ADHD.", why:"Nie diagnozujesz. Mechanizm odkładania działa u każdego." },
      { t:"Nie interesuje go temat.", why:"Możliwe, ale nawet przy ciekawym temacie mechanizm bólu i ulgi działa tak samo." }
    ],
    explain:"Prokrastynacja to wybór mniejszego bólu teraz. Potrzeba dwóch rzeczy: odczuwalny ból zaniechania i mniejszy ból samego zaczęcia." },
  { type:"mc", tech:"Mniejszy krok i stan", q:"Który plan najlepiej obniża ból zaczęcia?",
    opts:[
      { t:"Jedna konkretna rzecz na start: 25 minut pisania byle jakiego szkicu jednego podrozdziału, telefon w drugim pokoju, a przed startem 30 sekund ruchu i muzyka.", ok:true },
      { t:"Napisać 15 stron w weekend.", why:"Ogromne zadanie zwiększa ból zaczęcia." },
      { t:"Czekać na wenę.", why:"Wena przychodzi zwykle w trakcie pracy, a nie przed nią." }
    ],
    explain:"Mały, jasny krok, zmiana stanu przed startem i usunięcie wyzwalacza rozpraszania to razem więcej niż każdy z tych elementów osobno." }
]},

{ id:"c017", tag:"Nawyki", title:"Iza: telefon w łóżku", who:"Iza, 30 lat",
  ctx:"Scrolluje w łóżku do 1 w nocy i rano jest wykończona.",
  steps:[
  { type:"mc", tech:"Sześć potrzeb", dialog:[["K","To jedyny moment, kiedy nikt ode mnie niczego nie chce. I zawsze jest coś nowego."]],
    q:"Jakie potrzeby zaspokaja scrollowanie?",
    opts:[
      { t:"Różnorodność (zawsze coś nowego) i pewność, że ma czas tylko dla siebie.", ok:true },
      { t:"Wkład i rozwój.", why:"Ona sama mówi o odpoczynku i nowości, a nie o rozwoju." },
      { t:"Tylko znaczenie.", why:"Nie mówi o poczuciu ważności." }
    ],
    explain:"Nowy wieczorny rytuał musi dawać i różnorodność, i czas dla siebie (np. nowa książka, krótki podcast w słuchawkach bez ekranu)." }
]},

/* ───────── PEWNOŚĆ SIEBIE ───────── */
{ id:"c018", tag:"Pewność siebie", title:"Łukasz: „nie nadaję się do randek”", who:"Łukasz, 28 lat, nigdy nie był w związku",
  ctx:"Jest nieśmiały. Od lat nie zagadał do żadnej dziewczyny.",
  steps:[
  { type:"mc", tech:"Tożsamość", dialog:[["K","Ja po prostu nie jestem typem faceta, który podoba się kobietom."]],
    q:"Co robisz z tym przekonaniem?",
    opts:[
      { t:"Pytasz o nogi: „Skąd to wiesz? Ile razy naprawdę spróbowałeś?” i szukasz choć jednej sytuacji, w której ktoś okazał mu sympatię.", ok:true },
      { t:"„Jesteś przystojny, na pewno się podobasz.”", why:"Komplement nie rusza przekonania o tożsamości." },
      { t:"Uczysz go technik podrywu.", why:"Technika nie zadziała, dopóki widzi siebie jako „nie ten typ”." }
    ],
    explain:"Problem jest na poziomie tożsamości. Najpierw podważ stare nogi, potem buduj nowe referencje małymi krokami." },
  { type:"mc", tech:"Budowanie referencji", q:"Jakie zadanie domowe najlepiej buduje nowe referencje?",
    opts:[
      { t:"Przez tydzień codziennie krótka, neutralna rozmowa z obcą osobą (kasjerka, barista, sąsiadka), coraz dłuższa. Bez celu randkowego.", ok:true },
      { t:"Zaprosić na randkę dziewczynę, która mu się najbardziej podoba.", why:"Za duży skok. Porażka wzmocni stare przekonanie." },
      { t:"Przeczytać książkę o pewności siebie.", why:"Wiedza bez doświadczeń nie zbuduje nóg." }
    ],
    explain:"Jak u Andrei: konkretne, bezpieczne zadanie, które powtarza się regularnie. Każda udana rozmowa to noga nowego przekonania." }
]},

{ id:"c019", tag:"Pewność siebie", title:"Karolina: porównywanie się", who:"Karolina, 29 lat, influencerka",
  ctx:"„Inne mają więcej obserwujących, lepsze ciała, lepsze życie.”",
  steps:[
  { type:"mc", tech:"Niesprawiedliwe porównanie", dialog:[["K","Widzę jej posty i od razu czuję, że jestem do niczego."]],
    q:"Co pokazujesz Karolinie?",
    opts:[
      { t:"Że porównuje swoje kulisy z cudzą sceną. To nigdy nie jest uczciwe porównanie. Lepsze pytanie: z kim byłaś rok temu i jak bardzo się od tego czasu rozwinęłaś?", ok:true },
      { t:"Że powinna pracować ciężej, żeby je dogonić.", why:"Wzmacniasz grę, która ją unieszczęśliwia." },
      { t:"Że te inne pewnie są nieszczęśliwe.", why:"Zgadujesz o innych i nadal porównujesz." }
    ],
    explain:"Jak mówił Robbins do Andrei: porównuj się z następnym poziomem siebie. Sprawdź też, czy znaczenie nie stoi u niej na szczycie potrzeb." }
]},

{ id:"c020", tag:"Pewność siebie", title:"Adam: krytyczny głos", who:"Adam, 34 lata, grafik",
  ctx:"Przy każdym projekcie słyszy w głowie: „to słabe, wstydź się”.",
  steps:[
  { type:"mc", tech:"Submodalności dźwięku", dialog:[["K","Ten głos jest głośny, ostry, jakby mój stary szef stał mi nad uchem."]],
    q:"Co robisz z tym głosem?",
    opts:[
      { t:"Zmieniasz jego cechy: przesuwasz go dalej, ściszasz, zmieniasz na głos kaczki albo bardzo powolny, aż straci moc.", ok:true },
      { t:"Każesz mu z nim dyskutować i udowadniać, że projekt jest dobry.", why:"Kłótnia z wewnętrznym głosem daje mu jeszcze więcej uwagi." },
      { t:"Każesz go ignorować.", why:"Ignorowany głos zwykle staje się głośniejszy." }
    ],
    explain:"Głos ma submodalności tak jak obraz. Zmiana barwy i odległości odbiera mu ciężar emocjonalny, jak u kobiety z kostiumem kąpielowym (głos z kreskówki)." },
  { type:"mc", tech:"Pozytywna intencja", q:"Po osłabieniu głosu chcesz, żeby krytyk nie wrócił. Jakie pytanie zadajesz?",
    opts:[
      { t:"„Co ten głos chciał dla ciebie dobrego? Przed czym próbował cię chronić?” I szukacie zdrowszego sposobu, żeby to osiągnąć.", ok:true },
      { t:"„Jak go całkiem wyłączyć?”", why:"Części, które się zwalcza, wracają. Lepiej dać im nową rolę." },
      { t:"„Kiedy pierwszy raz go usłyszałeś?”", why:"To może być ciekawe, ale nie daje mu nowej roli." }
    ],
    explain:"Każda część ma pozytywną intencję (np. ochrona przed kompromitacją). Gdy ją znajdziesz, krytyk może stać się wewnętrznym redaktorem zamiast kata." }
]},

/* ───────── RODZINA ───────── */
{ id:"c021", tag:"Rodzina", title:"Danuta: dorosły syn nie dzwoni", who:"Danuta, 58 lat",
  ctx:"Syn (32) dzwoni raz w miesiącu. Ona czuje się zapomniana.",
  steps:[
  { type:"mc", tech:"Reguły", dialog:[["K","Gdyby mnie kochał, dzwoniłby co niedzielę. Tak jak ja do mojej mamy."]],
    q:"Co słyszysz?",
    opts:[
      { t:"Jej regułę miłości: „kocha = dzwoni co niedzielę”. Syn może mieć zupełnie inną regułę, np. „kocham = przyjeżdżam, gdy trzeba pomóc”.", ok:true },
      { t:"Że syn jej nie kocha.", why:"To jej interpretacja przez własną regułę, a nie fakt." },
      { t:"Że trzeba mu powiedzieć, żeby dzwonił częściej.", why:"Może, ale najpierw warto zobaczyć, czy w ogóle zauważa, jak on okazuje troskę." }
    ],
    explain:"Ludzie okazują miłość według swoich reguł. Gdy klientka zobaczy jego regułę, może poczuć się kochana częściej, bez zmiany jego zachowania." },
  { type:"mc", tech:"Sztuka prośby", q:"Danuta chce porozmawiać z synem. Jak powinna to sformułować?",
    opts:[
      { t:"„Bardzo się cieszę, kiedy dzwonisz. Brakuje mi ciebie. Czy mógłbyś czasem zadzwonić w niedzielę, choćby na pięć minut?”", ok:true },
      { t:"„Nigdy do mnie nie dzwonisz, chyba ci na mnie nie zależy.”", why:"Uogólnienie i oskarżenie. Syn się obroni i zadzwoni jeszcze rzadziej." },
      { t:"Nic nie mówić i czekać, aż sam się domyśli.", why:"Oczekiwanie, że ktoś się domyśli, to przepis na rozczarowanie." }
    ],
    explain:"Prośba: co czuję (bez obwiniania), czego potrzebuję i mała, konkretna rzecz, którą łatwo spełnić." }
]},

{ id:"c022", tag:"Rodzina", title:"Piotr: kłótnie z nastoletnią córką", who:"Piotr, 46 lat, córka 15 lat",
  ctx:"Każda rozmowa kończy się trzaśnięciem drzwiami.",
  steps:[
  { type:"mc", tech:"Pozycje percepcyjne", dialog:[["K","Nie rozumiem jej. Chcę dla niej dobrze, a ona traktuje mnie jak wroga."]],
    q:"Jaką technikę wybierasz?",
    opts:[
      { t:"Pozycje percepcyjne: niech usiądzie na krześle córki i powie jej słowami, jak to jest słyszeć jego uwagi.", ok:true },
      { t:"Metamodel na „traktuje mnie jak wroga”.", why:"Może się przydać później, ale on mówi wprost: nie rozumiem jej. To sygnał do zmiany perspektywy." },
      { t:"Technikę kina.", why:"Nie ma tu bolesnego wspomnienia, tylko bieżący konflikt." }
    ],
    explain:"„Nie rozumiem jej” to wskazanie do drugiej pozycji. Ojciec często dopiero wtedy słyszy, jak brzmi jego „dobra rada”." },
  { type:"mc", tech:"Potrzeby nastolatka", dialog:[["K","(jako córka) Ciągle mi mówi, co mam robić. Jakbym była małym dzieckiem."]],
    q:"Jaka potrzeba córki jest niezaspokojona?",
    opts:[
      { t:"Znaczenie i autonomia: chce być traktowana jak ktoś, kto sam myśli.", ok:true },
      { t:"Pewność.", why:"Mówi o tym, że czuje się traktowana jak dziecko, a nie o braku bezpieczeństwa." },
      { t:"Różnorodność.", why:"Nie o to tu chodzi." }
    ],
    explain:"Kontrola rodzica uderza w potrzebę znaczenia nastolatka. Rozwiązanie: pytać o jej zdanie i dawać jej wybór, zamiast dawać polecenia." }
]},

{ id:"c023", tag:"Rodzina", title:"Magda: matka, która krytykuje", who:"Magda, 37 lat",
  ctx:"Po każdej wizycie u matki płacze w samochodzie. „Nic nie jest dla niej dość dobre.”",
  steps:[
  { type:"mc", tech:"Reframing intencji", dialog:[["K","Znowu powiedziała, że źle wychowuję dzieci. Ona mnie po prostu nie akceptuje."]],
    q:"Jakie pytanie może zmienić znaczenie zachowania matki?",
    opts:[
      { t:"„Czego twoja mama się boi, kiedy tak mówi? Jak ją samą wychowano?”", ok:true },
      { t:"„Przestań do niej jeździć.”", why:"Rada, która ucina relację, zamiast zmienić to, jak klientka ją przeżywa." },
      { t:"„Masz rację, to toksyczne.”", why:"Etykieta zamyka rozmowę i utrwala ból." }
    ],
    explain:"Jak u kobiety z kostiumem kąpielowym: krytyka rodzica często wynika z jego strachu. To nie usprawiedliwia, ale zmienia znaczenie dla klientki." },
  { type:"mc", tech:"Granica", q:"Magda rozumie już strach matki, ale nie chce dalej słuchać krytyki. Co jej proponujesz?",
    opts:[
      { t:"Jedną spokojną granicę w ramie zgody: „Mamo, wiem, że martwisz się o dzieci, i proszę, żebyś mówiła mi o tym, gdy cię zapytam”.", ok:true },
      { t:"Wykrzyczeć jej wszystko, co się nazbierało.", why:"Ulga na chwilę, ale konflikt się pogłębi." },
      { t:"Nic nie mówić, przecież już rozumie mamę.", why:"Zrozumienie nie oznacza zgody na wszystko." }
    ],
    explain:"Zrozumienie intencji i postawienie granicy idą w parze. Rama zgody („wiem, że… i proszę…”) utrzymuje kontakt." }
]},

/* ───────── STRATA I ZMIANA ───────── */
{ id:"c024", tag:"Strata i zmiana", title:"Henryk: po śmierci żony", who:"Henryk, 67 lat, wdowiec od 8 miesięcy",
  ctx:"Mówi cicho, nie wychodzi z domu. Dzieci namówiły go na sesję.",
  steps:[
  { type:"mc", tech:"Kontakt przed zmianą", dialog:[["K","Po co to wszystko. Bez niej nic nie ma sensu."]],
    q:"Co robisz?",
    opts:[
      { t:"Zwalniasz, dopasowujesz tempo i ton, i po prostu słuchasz. Pytasz o nią: „Jaka była? Co w niej najbardziej kochał?”", ok:true },
      { t:"Od razu reframujesz: „Każdy koniec to nowy początek”.", why:"Bez kontaktu zabrzmi to jak lekceważenie jego żałoby." },
      { t:"Każesz mu wstać i zmienić fizjologię.", why:"W żałobie najpierw obecność i kontakt. Narzucanie energii będzie obce." }
    ],
    explain:"Żałoba to nie problem do naprawienia. Najpierw towarzyszysz. Zwróć też uwagę na „nic nie ma sensu”: przy myślach rezygnacyjnych zapytaj wprost o bezpieczeństwo i w razie potrzeby skieruj do specjalisty." },
  { type:"mc", tech:"Nowe znaczenie", dialog:[["K","Ona zawsze mówiła, że mam o siebie dbać. Pilnowała, żebym chodził na spacery."]],
    q:"Co możesz zrobić z tym wspomnieniem?",
    opts:[
      { t:"Zapytać: „Co by ci teraz powiedziała, widząc, jak żyjesz? Jak możesz uszanować to, czego dla ciebie chciała?”", ok:true },
      { t:"Pominąć je i wrócić do planu tygodnia.", why:"Tracisz najsilniejszą motywację, jaką ma: miłość do niej." },
      { t:"„Ale jej już nie ma, musisz żyć dla siebie.”", why:"Ostro i boleśnie. Odcinasz go od tego, co jest dla niego najważniejsze." }
    ],
    explain:"Jak u Debbie z ojcem: uszanuj dzisiejsze życzenie bliskiej osoby. Miłość do zmarłej żony może stać się źródłem dbania o siebie." }
]},

{ id:"c025", tag:"Strata i zmiana", title:"Kamil: zwolnienie z pracy", who:"Kamil, 44 lata, zwolniony po 18 latach",
  ctx:"Tydzień po zwolnieniu. Wstyd mu powiedzieć znajomym.",
  steps:[
  { type:"mc", tech:"Tożsamość", dialog:[["K","Byłem kierownikiem zmiany. A teraz kim jestem? Bezrobotnym."]],
    q:"Gdzie leży największy ból?",
    opts:[
      { t:"W tożsamości: utożsamiał się ze stanowiskiem. Strata pracy to dla niego strata siebie.", ok:true },
      { t:"W pieniądzach.", why:"Pieniądze są ważne, ale on mówi o tym, kim jest." },
      { t:"W relacjach ze współpracownikami.", why:"Nie mówi o nich." }
    ],
    explain:"Jak u Lesley: gdy rozpada się tożsamość, ból jest dużo większy niż sama strata. Następny krok: kim jest poza stanowiskiem (wartości, umiejętności, rola w rodzinie)." },
  { type:"mc", tech:"Pytania", dialog:[["K","Dlaczego to musiało spotkać właśnie mnie?"]],
    q:"Jakie pytanie zamiast tego?",
    opts:[
      { t:"„Co ta sytuacja umożliwia, czego wcześniej nie było? Co zawsze chciałeś zrobić, a nie miałeś czasu?”", ok:true },
      { t:"„Bo firma ma problemy finansowe.”", why:"Odpowiadasz na złe pytanie zamiast je zmienić." },
      { t:"„To nie twoja wina.”", why:"Miłe, ale pytanie „dlaczego ja?” zostaje." }
    ],
    explain:"„Dlaczego ja?” zakłada, że jest ofiarą. Pytanie o możliwości zakłada, że ta sytuacja może mu też coś dać." }
]},

{ id:"c026", tag:"Strata i zmiana", title:"Sylwia: przeprowadzka za granicę", who:"Sylwia, 32 lata, od pół roku w Holandii",
  ctx:"Przeprowadziła się za partnerem. Czuje się samotna i „nie na swoim miejscu”.",
  steps:[
  { type:"mc", tech:"Sygnał: samotność", q:"Jaka jest wiadomość jej samotności i co z nią robisz?",
    opts:[
      { t:"Potrzebuje kontaktu z ludźmi. Ustalacie jeden konkretny krok w tym tygodniu: grupa Polek w mieście, zajęcia, wolontariat.", ok:true },
      { t:"Że powinna wrócić do Polski.", why:"Samotność mówi „potrzebujesz kontaktu”, a nie „uciekaj”." },
      { t:"Że partner powinien poświęcać jej więcej czasu.", why:"Partner nie zastąpi całej sieci kontaktów, a obciążenie go wszystkim zaszkodzi związkowi." }
    ],
    explain:"Samotność to sygnał do działania: nawiąż kontakt. Konkretny, mały krok jest lepszy niż wielki plan." }
]},

/* ───────── DECYZJE ───────── */
{ id:"c027", tag:"Decyzje", title:"Dominik: etat czy własna firma", who:"Dominik, 31 lat, księgowy",
  ctx:"Od dwóch lat waha się, czy odejść z etatu i otworzyć biuro rachunkowe.",
  steps:[
  { type:"mc", tech:"Konflikt wartości", dialog:[["C","Co jest dla ciebie najważniejsze w życiu?"],["K","Wolność. …Ale też bezpieczeństwo rodziny. Nie mogę ich narazić."]],
    q:"Co widzisz?",
    opts:[
      { t:"Konflikt dwóch wysoko postawionych wartości: wolności i bezpieczeństwa. Dopóki ich nie pogodzi, będzie się wahał.", ok:true },
      { t:"Że nie chce naprawdę firmy.", why:"Chce, ale ma też inną ważną wartość." },
      { t:"Że jest tchórzem.", why:"Ocena, a nie diagnoza." }
    ],
    explain:"Wahanie latami to częsty objaw konfliktu wartości. Szukasz rozwiązania, które zaspokaja obie: np. firma po godzinach przez rok, poduszka finansowa na 6 miesięcy." },
  { type:"mc", tech:"Termin decyzji", dialog:[["K","Potrzebuję jeszcze trochę czasu, żeby to przemyśleć."]],
    q:"Klient waha się od dwóch lat. Co robisz?",
    opts:[
      { t:"Pytasz o konkretny termin: „Do kiedy podejmiesz decyzję? Jaki jest pierwszy krok, który zrobisz, zanim wyjdziesz z gabinetu?”", ok:true },
      { t:"„Jasne, nie spiesz się.”", why:"Dwa lata to dużo czasu. „Przemyślę” to wzorzec odkładania." },
      { t:"Podejmujesz decyzję za niego.", why:"Decyzja musi być jego, inaczej nie przetrwa pierwszego kryzysu." }
    ],
    explain:"Jak mówił Robbins przy Eileen: wybór potrzebuje terminu. Decyzja to moment, a nie proces." }
]},

{ id:"c028", tag:"Decyzje", title:"Weronika: zostać czy odejść", who:"Weronika, 39 lat, 12 lat małżeństwa",
  ctx:"„Nie wiem, czy go jeszcze kocham. Może powinnam odejść.”",
  steps:[
  { type:"mc", tech:"Najpierw dawanie", q:"Co proponujesz, zanim podejmie decyzję?",
    opts:[
      { t:"60–90 dni pełnego dawania: kochać go tak, jak on chce być kochany. Jeśli po tym nic się nie zmieni, odejdzie bez żalu.", ok:true },
      { t:"Wyprowadzić się na próbę.", why:"Separacja zmniejsza szansę na sprawdzenie, czy związek może ożyć." },
      { t:"Poradzić jej, żeby odeszła, skoro nie jest pewna.", why:"Decydujesz za nią na podstawie jednego zdania." }
    ],
    explain:"Tak Robbins pracował z Laurą: najpierw daj z siebie wszystko, a potem decyduj. Wtedy każda decyzja jest czysta." }
]},

/* ───────── ZŁOŚĆ I KONFLIKT ───────── */
{ id:"c029", tag:"Złość i konflikt", title:"Robert: wybuchy w pracy", who:"Robert, 48 lat, kierownik budowy",
  ctx:"Krzyczy na pracowników. Dostał ostrzeżenie od zarządu.",
  steps:[
  { type:"mc", tech:"Sygnał: złość", dialog:[["K","Jak widzę, że ktoś olewa robotę, to mnie roznosi."]],
    q:"Co pytasz?",
    opts:[
      { t:"„Jaka twoja zasada jest wtedy łamana? Co musi się dziać, żebyś czuł, że ludzie podchodzą do pracy poważnie?”", ok:true },
      { t:"„Musisz nad sobą panować.”", why:"Rada bez narzędzia. Sam to wie, dostał już ostrzeżenie." },
      { t:"„Zwolnij tych, którzy olewają.”", why:"Nie rozwiązuje jego reakcji. Złość pojawi się przy następnych." }
    ],
    explain:"Złość to sygnał złamanej reguły. Gdy nazwie regułę, można ją zakomunikować zespołowi jako standard, zamiast egzekwować krzykiem." },
  { type:"mc", tech:"Przerwanie wzorca", q:"Robert chce mieć narzędzie na chwilę, gdy czuje, że wybucha. Co mu dajesz?",
    opts:[
      { t:"Zmianę fizjologii w 10 sekund: stop, wydech dłuższy niż wdech, rozluźnienie dłoni, krok w tył, i pytanie w głowie: „Czego tu naprawdę chcę?”", ok:true },
      { t:"Liczenie do stu.", why:"Za długie w praktyce i nie zmienia stanu ani skupienia." },
      { t:"Wychodzenie z budowy.", why:"Unikanie nie zmienia reakcji." }
    ],
    explain:"Krótki rytuał łączy całą triadę: ciało (oddech, dłonie), skupienie (krok w tył) i znaczenie (pytanie o cel)." }
]},

{ id:"c030", tag:"Złość i konflikt", title:"Zofia: konflikt z sąsiadem", who:"Zofia, 62 lata",
  ctx:"Od roku kłóci się z sąsiadem o parkowanie. Myśli o tym codziennie.",
  steps:[
  { type:"mc", tech:"Problemy potrzebują energii", dialog:[["K","Codziennie patrzę przez okno, czy znowu stanął na moim miejscu."]],
    q:"Co jej pokazujesz?",
    opts:[
      { t:"Że problem żyje z jej energii: im więcej uwagi mu daje, tym większy się staje. Pytanie: ile jeszcze życia chce mu oddać?", ok:true },
      { t:"Że powinna zgłosić sprawę do administracji.", why:"Może i tak, ale to nie zmieni tego, że codziennie się tym karmi." },
      { t:"Że sąsiad na pewno robi to specjalnie.", why:"Czytanie w myślach, które podsyca konflikt." }
    ],
    explain:"Jak mówił Robbins przy Tinie Marie: problemy potrzebują energii, żeby żyć. Najpierw zmniejsza się uwaga, potem łatwiej o spokojne rozwiązanie." }
]}

]);
