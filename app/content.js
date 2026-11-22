/*
  Treść kursu. Wszystkie lekcje i dialogi są napisane od zera (parafraza koncepcji),
  z odnośnikiem do rozdziału źródła. Nie zawierają przepisanych fragmentów książek.

  Typy elementów:
    learn  – karta teorii (bez oceny)
    mc     – wybór jednej odpowiedzi (opcjonalnie z dialogiem)
    order  – ułóż w kolejności (items podane w poprawnej kolejności)
    write  – odpowiedź pisemna + odpowiedzi wzorcowe + samoocena

  Dialog: ["K", "..."] = klient, ["C", "..."] = coach (Ty), ["N", "..."] = narracja / obserwacja.
  verify: true = treść z wiedzy ogólnej, do sprawdzenia z materiałem źródłowym.
*/
window.COURSE = {
  sources: {
    awaken: { short: "Obudź w sobie olbrzyma", full: "Awaken the Giant Within (Obudź w sobie olbrzyma)", status: "ready" },
    rmt: { short: "RMT: wiedza ogólna", full: "Robbins-Madanes Training (wiedza ogólna)", status: "ready", label: "Wiedza ogólna" },
    yt: { short: "Interwencja z YouTube", full: "Transkrypcje interwencji z YouTube", status: "ready", label: "17 interwencji" },
    up: { short: "Nieograniczona moc", full: "Unlimited Power (Nieograniczona moc)", status: "ready" },
    nlp: { short: "NLP i Robbins: wiedza ogólna", full: "Techniki NLP i narzędzia Robbinsa (wiedza ogólna)", status: "ready" },
    giant: { short: "Olbrzymie kroki", full: "Giant Steps (Olbrzymie kroki)", status: "queued" },
    life: { short: "Life Force", full: "Life Force", status: "queued" }
  },

  units: [
    /* ───────────────────────── 1. BÓL I PRZYJEMNOŚĆ ───────────────────────── */
    {
      id: "u1", title: "Ból i przyjemność", sub: "Siła, która kieruje każdym zachowaniem", src: "awaken", ch: "Rozdz. 3",
      lessons: [
        {
          id: "u1l1", title: "Co naprawdę napędza klienta",
          items: [
            { type: "learn", title: "Zasada nadrzędna",
              body: [
                "Wszystko, co ludzie robią, robią po to, żeby uniknąć bólu albo zyskać przyjemność. Liczy się nie to, co obiektywnie boli, tylko to, co człowiek z daną rzeczą <b>kojarzy</b> w układzie nerwowym (neuroasocjacje).",
                "Większość ludzi zrobi więcej, żeby uniknąć bólu, niż żeby zdobyć przyjemność. I zwykle wybiera ulgę teraz kosztem bólu później."
              ],
              keys: ["Nawyk trwa, bo daje coś przyjemnego albo chroni przed czymś bolesnym.", "Zmiana jest blokowana, gdy z samą zmianą klient kojarzy więcej bólu niż z pozostaniem w miejscu.", "Twoje zadanie: odkryć, co klient z czym łączy, i to przestawić."]
            },
            { id: "u1-1", type: "mc", tech: "Diagnoza neuroasocjacji",
              dialog: [["K", "Od dwóch lat chcę rzucić palenie. Wiem, że to mnie wykańcza. Czytałem wszystko o raku płuc. I nic."]],
              q: "Co według modelu bólu i przyjemności utrzymuje ten nawyk?",
              opts: [
                { t: "Z paleniem wciąż kojarzy więcej przyjemności (przerwa, ulga, rytuał), a z rzuceniem więcej bólu (stres bez „wentyla”, utrata czegoś swojego).", ok: true },
                { t: "Brakuje mu wiedzy o skutkach palenia.", why: "Sam mówi, że wszystko przeczytał. Wiedza nie zmienia zachowania, jeśli nie zmieniają się skojarzenia emocjonalne." },
                { t: "Ma słabą wolę i potrzebuje dyscypliny.", why: "„Słaba wola” to etykieta, nie mechanizm. Nie daje Ci żadnego punktu zaczepienia do pracy." },
                { t: "Wybrał złą metodę rzucania.", why: "Metoda ma znaczenie dopiero wtedy, gdy zmiana stała się koniecznością. Tu problem leży wcześniej." }
              ],
              explain: "Ból związany z rakiem jest odległy i abstrakcyjny, a ulga z papierosa jest natychmiastowa. Dopóki to się nie odwróci, nic się nie zmieni.",
              src: "awaken", ch: "Rozdz. 3"
            },
            { id: "u1-2", type: "mc", tech: "Ból krótko- vs długoterminowy",
              dialog: [["K", "Zrobię ten raport, serio. Ale nie dzisiaj, dziś jestem wypompowany."]],
              q: "Dlaczego klient odkłada zadanie, choć wie, że i tak będzie musiał je zrobić?",
              opts: [
                { t: "Ból zrobienia raportu jest teraz, a ból odkładania jest „kiedyś”, więc wybiera ulgę teraz.", ok: true },
                { t: "Jest leniwy.", why: "Lenistwo to ocena. Coach szuka mechanizmu, który można zmienić." },
                { t: "Nie zależy mu na pracy.", why: "Nic w jego słowach tego nie potwierdza. Mówi przecież, że zrobi raport." },
                { t: "Raport jest za trudny.", why: "Możliwe, ale nawet łatwe zadania odkładamy, jeśli w danej chwili kojarzymy z nimi wysiłek, a z odkładaniem ulgę." }
              ],
              explain: "Prokrastynacja to wybór mniejszego bólu w krótkim terminie. Żeby to zmienić, ból zaniechania musi stać się odczuwalny teraz.",
              src: "awaken", ch: "Rozdz. 3"
            },
            { id: "u1-3", type: "mc", tech: "Budowanie dźwigni (leverage)",
              dialog: [["K", "Wiem, że powinnam zacząć o siebie dbać. Kiedyś się za to wezmę."]],
              q: "Który ruch najlepiej buduje dźwignię?",
              opts: [
                { t: "„Co już cię kosztowało to, że się za to nie bierzesz? A jak będzie wyglądało twoje życie za pięć lat, jeśli nic się nie zmieni?”", ok: true },
                { t: "„Dlaczego zawsze odkładasz siebie na koniec?”", why: "Pytanie „dlaczego” każe jej szukać uzasadnień i wzmacnia obraz siebie jako kogoś, kto odkłada." },
                { t: "„Rozpiszmy plan: trzy treningi w tygodniu.”", why: "Plan przed motywacją. Bez dźwigni plan zostanie na papierze, bo zmiana jest wciąż „powinnam”, a nie „muszę”." },
                { t: "„Zasługujesz na to, dasz radę!”", why: "Miłe, ale nie zmienia tego, co klientka kojarzy z bólem i przyjemnością." }
              ],
              explain: "Słowa „powinnam” i „kiedyś” to sygnał, że zmiana jest opcją, a nie koniecznością. Dźwignia to sprawienie, by klient poczuł koszt niezmieniania (przeszłość, teraz, przyszłość) i nagrodę za zmianę.",
              src: "awaken", ch: "Rozdz. 6, krok 2"
            },
            { id: "u1-4", type: "write", tech: "Budowanie dźwigni (leverage)",
              ctx: "Klient od lat chce odejść z pracy, której nienawidzi, ale „to nie jest dobry moment”.",
              q: "Napisz 3 pytania, które sprawią, że klient poczuje ból niezmieniania i przyjemność zmiany.",
              hints: ["Dotyka kosztów w przeszłości, teraz i w przyszłości", "Pyta o emocje i konkrety, nie o fakty", "Pokazuje koszt dla bliskich, nie tylko dla niego", "Przynajmniej jedno pytanie buduje obraz życia po zmianie"],
              model: [
                "„Ile lat już tak wytrzymujesz? Co przez ten czas straciłeś: energię, zdrowie, czas z dziećmi?”",
                "„Wyobraź sobie, że jest rok 2031 i nadal tam siedzisz. Jak się czujesz, patrząc w lustro? Co mówisz swoim dzieciom o pracy?”",
                "„A jeśli odejdziesz i zbudujesz coś swojego? Jak wygląda twój zwykły wtorek za dwa lata? Kim się stajesz?”"
              ],
              src: "awaken", ch: "Rozdz. 3 i 6"
            },
            { id: "u1-5", type: "mc", tech: "Zasada nadrzędna",
              q: "Klient chce zdobyć wymarzony awans, ale panicznie boi się wystąpień publicznych, które są do tego potrzebne. Co zwykle wygra, jeśli nic nie zmienimy?",
              opts: [
                { t: "Unikanie bólu, czyli strach przed wystąpieniami.", ok: true },
                { t: "Pragnienie awansu, bo cel jest ważniejszy.", why: "Większość ludzi zrobi więcej, by uniknąć bólu, niż by zdobyć przyjemność. Sam cel nie wystarczy." },
                { t: "To zależy wyłącznie od charakteru.", why: "Charakter nie jest tu mechanizmem. Mechanizmem są skojarzenia, które można zmienić." }
              ],
              explain: "Coach nie liczy na to, że cel przeważy strach. Zmienia to, co klient kojarzy z wystąpieniami, albo podnosi ból niezmieniania wyżej niż ból strachu.",
              src: "awaken", ch: "Rozdz. 3 i 15"
            }
          ]
        }
      ]
    },

    /* ───────────────────────── 2. PRZEKONANIA ───────────────────────── */
    {
      id: "u2", title: "Przekonania", sub: "Trzy przekonania o zmianie, blat i nogi", src: "awaken", ch: "Rozdz. 4–5",
      lessons: [
        {
          id: "u2l1", title: "Trzy przekonania o zmianie",
          items: [
            { type: "learn", title: "Bez nich zmiana nie przetrwa",
              body: ["Żeby zmiana była trwała, klient musi mieć trzy przekonania o odpowiedzialności:"],
              keys: ["<b>Coś musi się zmienić.</b> Nie „powinno”, nie „fajnie by było”, tylko musi.", "<b>Ja muszę to zmienić.</b> Źródłem zmiany jest on sam, nie szef, partner czy okoliczności.", "<b>Ja mogę to zmienić.</b> Wierzy, że to dla niego możliwe."],
              note: "Słuchaj, którego z trzech brakuje. To mówi Ci, od czego zacząć."
            },
            { id: "u2-1", type: "mc", tech: "Trzy przekonania o zmianie",
              dialog: [["K", "Gdyby mój szef w końcu przestał mnie kontrolować, wszystko by się ułożyło."]],
              q: "Którego przekonania brakuje?",
              opts: [
                { t: "„Ja muszę to zmienić”: źródło zmiany jest na zewnątrz.", ok: true },
                { t: "„Coś musi się zmienić”.", why: "Klient wyraźnie chce zmiany. Problem w tym, że oczekuje jej od kogoś innego." },
                { t: "„Ja mogę to zmienić”.", why: "Nie mówi, że nie potrafi. Mówi, że to szef powinien coś zrobić." }
              ],
              explain: "Dopóki zmiana zależy od szefa, klient będzie miał kogo obwiniać, a nie będzie miał na co wpływać. Pierwszy ruch: przenieść uwagę na to, co sam kontroluje.",
              src: "awaken", ch: "Rozdz. 5"
            },
            { id: "u2-2", type: "mc", tech: "Trzy przekonania o zmianie",
              dialog: [["K", "No, przytyłem z dziesięć kilo. Ale w sumie wszyscy po trzydziestce tyją, nie?"]],
              q: "Którego przekonania brakuje?",
              opts: [
                { t: "„Coś musi się zmienić”: klient normalizuje problem.", ok: true },
                { t: "„Ja muszę to zmienić”.", why: "Nie zrzuca odpowiedzialności na innych, tylko w ogóle nie widzi konieczności." },
                { t: "„Ja mogę to zmienić”.", why: "Nie mówi, że nie da rady. Mówi, że to normalne." }
              ],
              explain: "„Wszyscy tak mają” obniża standard. Tu potrzebna jest najpierw dźwignia, a nie plan diety.",
              src: "awaken", ch: "Rozdz. 5"
            },
            { id: "u2-3", type: "mc", tech: "Trzy przekonania o zmianie",
              dialog: [["K", "Próbowałam wszystkiego: terapii, książek, medytacji. U mnie to po prostu nie działa."]],
              q: "Którego przekonania brakuje i co robisz?",
              opts: [
                { t: "„Ja mogę to zmienić”. Szukasz referencji: kiedy zmieniła coś, co kiedyś wydawało się niemożliwe.", ok: true },
                { t: "„Coś musi się zmienić”. Budujesz dźwignię.", why: "Ona bardzo chce zmiany, skoro próbowała wszystkiego. Dźwignia bez wiary w możliwość tylko pogłębi bezradność." },
                { t: "„Ja muszę to zmienić”. Przypominasz o odpowiedzialności.", why: "Bierze odpowiedzialność, sama szukała pomocy. Brakuje jej pewności, że to możliwe." }
              ],
              explain: "Przy braku „mogę” nie dokładasz presji. Budujesz pewność: przykłady z jej życia, przykłady innych ludzi, mały szybki sukces na sesji.",
              src: "awaken", ch: "Rozdz. 4–5"
            }
          ]
        },
        {
          id: "u2l2", title: "Blat i nogi",
          items: [
            { type: "learn", title: "Jak zbudowane jest przekonanie",
              body: [
                "Pomysł to blat bez nóg: nie stoi sam. Przekonanie to blat na nogach, a nogami są <b>referencje</b>, czyli doświadczenia, które je potwierdzają (własne, zasłyszane, wyobrażone).",
                "<b>Przekonania globalne</b> to wielkie uogólnienia: „Ja jestem…”, „Ludzie są…”, „Życie jest…”. Zmiana jednego z nich zmienia wiele obszarów naraz."
              ],
              keys: ["Żeby osłabić przekonanie, podważasz nogi: budzisz wątpliwość wobec referencji.", "Pomocne pytania: czy to przekonanie nie jest absurdalne? Czy osoba, od której je przejąłeś, jest wzorem w tej dziedzinie? Ile cię będzie kosztować (emocjonalnie, w relacjach, zdrowotnie, finansowo, dla bliskich)?", "Starego wzorca nie usuwasz w próżni: od razu budujesz nowe przekonanie i zbierasz dla niego nogi."]
            },
            { id: "u2-4", type: "mc", tech: "Rozpoznanie przekonania globalnego",
              q: "Które z tych zdań klienta to przekonanie globalne?",
              opts: [
                { t: "„Ludzie zawsze w końcu cię zawodzą.”", ok: true },
                { t: "„Nie umiem robić tabel przestawnych w Excelu.”", why: "To przekonanie wąskie, dotyczy jednej umiejętności." },
                { t: "„Wczoraj pokłóciłem się z bratem.”", why: "To fakt, nie przekonanie." },
                { t: "„Jeśli dziś pójdę na siłownię, będę zmęczony.”", why: "To przekonanie typu „jeśli–to” o konkretnej sytuacji, a nie wielkie uogólnienie." }
              ],
              explain: "Przekonania globalne poznasz po formie „ludzie są”, „ja jestem”, „życie jest”, „zawsze”, „nigdy”. Wpływają na wszystkie relacje, więc warto je wyłapywać od razu.",
              src: "awaken", ch: "Rozdz. 4"
            },
            { id: "u2-5", type: "mc", tech: "Podważanie nóg przekonania",
              dialog: [["K", "Jestem typem, który nie potrafi utrzymać związku. Trzy razy mnie zostawiono."], ["N", "Klient mówi spokojnie, jak o czymś oczywistym."]],
              q: "Co mówisz?",
              opts: [
                { t: "„Trzy związki, trzy różne osoby, różne momenty życia. Co jeszcze, poza tobą, je łączyło? Znasz kogoś, kto miał trzy rozstania, a potem zbudował świetny związek?”", ok: true },
                { t: "„Dlaczego tak uważasz?”", why: "Pytanie „dlaczego” każe mu wyliczyć nogi przekonania od nowa, czyli je wzmocnić." },
                { t: "„Nie mów tak o sobie, jesteś wartościowym człowiekiem.”", why: "Zaprzeczasz blatowi, ale nogi zostają nietknięte. Klient grzecznie się zgodzi i nic się nie zmieni." },
                { t: "„Opowiedz mi szczegółowo o każdym z tych rozstań.”", why: "Analiza każdej referencji po kolei utrwala ją emocjonalnie. Najpierw wątpliwość, potem ewentualnie szczegóły." }
              ],
              explain: "Trzy rozstania to nogi przekonania „nie potrafię”. Pytania budzą wątpliwość, czy te nogi naprawdę coś dowodzą, i podsuwają kontrprzykład.",
              src: "awaken", ch: "Rozdz. 4"
            },
            { id: "u2-6", type: "write", tech: "Zamiana przekonania",
              ctx: "Klientka: „Nie nadaję się do biznesu. W mojej rodzinie nikt nigdy nie miał pieniędzy.”",
              q: "Napisz: (1) jedno pytanie podważające nogi tego przekonania, (2) nowe, wzmacniające przekonanie, (3) dwie referencje, które mogłaby dla niego zebrać.",
              hints: ["Pytanie podważa referencję (rodzina), a nie atakuje klientki", "Nowe przekonanie jest sformułowane pozytywnie i w pierwszej osobie", "Referencje są konkretne i możliwe do zebrania w tym tygodniu"],
              model: [
                "(1) „Czy twoi rodzice próbowali kiedyś prowadzić biznes? Czy na pewno to oni są dla ciebie wzorem w tej dziedzinie?”",
                "(2) „Umiem się uczyć, a biznesu można się nauczyć jak każdej innej umiejętności.”",
                "(3) Rozmowa z dwiema osobami z podobnego środowiska, które zbudowały firmę, i jedna mała sprzedaż (np. usługi dla znajomego) przed końcem miesiąca."
              ],
              src: "awaken", ch: "Rozdz. 4"
            }
          ]
        }
      ]
    },

    /* ───────────────────────── 3. NAC ───────────────────────── */
    {
      id: "u3", title: "NAC: 6 kroków zmiany", sub: "Neuro-Associative Conditioning", src: "awaken", ch: "Rozdz. 6",
      lessons: [
        {
          id: "u3l1", title: "Mapa interwencji",
          items: [
            { type: "learn", title: "Sześć kroków NAC",
              body: ["NAC to szkielet, według którego możesz poprowadzić prawie każdą zmianę wzorca: emocji lub zachowania."],
              keys: ["<b>1.</b> Ustal, czego klient naprawdę chce i co go teraz powstrzymuje.", "<b>2.</b> Zbuduj dźwignię: ogromny ból z niezmieniania, ogromna przyjemność ze zmiany. Teraz.", "<b>3.</b> Przerwij ograniczający wzorzec.", "<b>4.</b> Stwórz nową, wzmacniającą alternatywę.", "<b>5.</b> Warunkuj nowy wzorzec, aż stanie się stały.", "<b>6.</b> Przetestuj."]
            },
            { id: "u3-1", type: "order", tech: "NAC",
              q: "Ułóż kroki NAC w kolejności.",
              items: ["Ustal, czego chcesz i co cię powstrzymuje", "Zbuduj dźwignię", "Przerwij ograniczający wzorzec", "Stwórz nową alternatywę", "Warunkuj nowy wzorzec", "Przetestuj"],
              explain: "Kolejność ma znaczenie. Bez dźwigni (2) przerwanie wzorca (3) nic nie da, a bez nowej alternatywy (4) klient wróci do starego wzorca, bo nadal potrzebuje tego, co ten mu dawał.",
              src: "awaken", ch: "Rozdz. 6"
            },
            { id: "u3-2", type: "mc", tech: "NAC krok 1: czego chcesz",
              dialog: [["N", "Klientka od 10 minut opowiada, czego ma dość: kłótni, chaosu w domu, tego, że mąż nic nie robi."], ["K", "…no i po prostu już nie chcę tak żyć."]],
              q: "Co robisz teraz?",
              opts: [
                { t: "„Słyszę, czego nie chcesz. A czego chcesz zamiast tego? Jak wygląda dobry wieczór w waszym domu, konkretnie?”", ok: true },
                { t: "Dopytujesz o kolejne przykłady kłótni, żeby lepiej zrozumieć problem.", why: "Skupiasz ją jeszcze mocniej na tym, czego nie chce. Na czym się skupiamy, tego mamy więcej." },
                { t: "„A co ty robisz, kiedy mąż nic nie robi?”", why: "To pytanie może się przydać później, ale teraz brakuje celu. Bez celu nie ma kierunku zmiany." },
                { t: "Proponujesz terapię par.", why: "Rozwiązanie bez celu i bez zrozumienia, co ją powstrzymuje." }
              ],
              explain: "Ludzie często przychodzą z listą tego, czego nie chcą. Pierwszy krok NAC to przekierowanie na konkretny, pozytywny cel, do którego da się zmierzać.",
              src: "awaken", ch: "Rozdz. 6, krok 1"
            },
            { id: "u3-3", type: "mc", tech: "NAC krok 1: co powstrzymuje",
              dialog: [["K", "Chcę schudnąć 15 kilo. Naprawdę."], ["C", "Co cię powstrzymywało do tej pory?"], ["K", "Jak przestanę jeść słodycze, to nie będę miała żadnej przyjemności w ciągu dnia. Tylko praca i dzieci."]],
              q: "Co właśnie odkryłeś?",
              opts: [
                { t: "Ból, który klientka łączy ze zmianą: utratę jedynego źródła przyjemności w ciągu dnia.", ok: true },
                { t: "Brak silnej woli.", why: "Klientka powiedziała Ci dokładnie, jaki ból łączy ze zmianą. To konkretny mechanizm, nie słaba wola." },
                { t: "Że cel jest nierealny.", why: "15 kilo to realny cel. Problemem jest to, co traci na drodze do niego." }
              ],
              explain: "To bezcenna informacja na krok 4: nowa alternatywa musi dawać jej codzienną przyjemność i chwilę dla siebie, inaczej słodycze wrócą.",
              src: "awaken", ch: "Rozdz. 6, kroki 1 i 4"
            }
          ]
        },
        {
          id: "u3l2", title: "Przerwanie wzorca i nowa alternatywa",
          items: [
            { type: "learn", title: "Kroki 3–6 w praktyce",
              body: [
                "<b>Przerwanie wzorca</b> działa, gdy robisz coś nieoczekiwanego dokładnie w chwili, gdy wzorzec się uruchamia: zaskoczenie, humor, absurd, zmiana ciała, przekręcenie obrazu lub głosu w głowie.",
                "<b>Nowa alternatywa</b> musi dawać to samo, co dawał stary wzorzec (ulgę, przyjemność), tylko bez skutków ubocznych. Brak alternatywy to najczęstszy powód, dla którego zmiany są tylko chwilowe.",
                "<b>Warunkowanie:</b> powtarzaj nową reakcję z dużą intensywnością emocji i nagradzaj ją. <b>Test:</b> wyobraź sobie bodziec, który kiedyś uruchamiał stary wzorzec, i sprawdź, co czujesz teraz."
              ]
            },
            { id: "u3-4", type: "mc", tech: "Przerwanie wzorca (pattern interrupt)",
              dialog: [["N", "Klientka po raz trzeci na sesji opowiada historię zdrady byłego partnera. Głos jej drży, tempo przyspiesza, dochodzi do tych samych zdań."], ["K", "…i wtedy on spojrzał na mnie i powiedział…"]],
              q: "Co robisz?",
              opts: [
                { t: "Przerywasz w pół zdania czymś zaskakującym: „Stop. Wstań na chwilę. A teraz opowiedz to samo, ale piskliwym głosem postaci z kreskówki.”", ok: true },
                { t: "Słuchasz do końca, żeby mogła się wygadać.", why: "Trzecie opowiedzenie tej samej historii to nie odreagowanie, tylko utrwalanie wzorca. Każde powtórzenie pogłębia ścieżkę." },
                { t: "„Spokojnie, oddychaj, wszystko będzie dobrze.”", why: "To przewidywalne, więc nie przerywa wzorca. Może też zabrzmieć jak bagatelizowanie." },
                { t: "„Co dokładnie poczułaś, kiedy to powiedział?”", why: "Wpychasz ją głębiej w ten sam stan." }
              ],
              explain: "Wzorzec przerywasz w chwili, gdy się dzieje, i robisz to w sposób, którego klient się nie spodziewa. Absurd (głos z kreskówki) łamie skojarzenie historii z bólem. Na tym budujesz dalej.",
              src: "awaken", ch: "Rozdz. 6, krok 3"
            },
            { id: "u3-5", type: "mc", tech: "NAC krok 4: nowa alternatywa",
              dialog: [["K", "Przez tydzień nie jadłem nic wieczorem. Byłem z siebie dumny. A potem był ciężki dzień w pracy i zjadłem pół lodówki."]],
              q: "Który krok NAC najprawdopodobniej został pominięty?",
              opts: [
                { t: "Krok 4: nie ma nowego sposobu na ulgę po stresującym dniu, którą dawało mu jedzenie.", ok: true },
                { t: "Krok 1: nie wie, czego chce.", why: "Wie dokładnie, czego chce, i przez tydzień to robił." },
                { t: "Krok 6: nie przetestował zmiany.", why: "Test nic by nie dał. Brakuje alternatywy, którą dałoby się przetestować." }
              ],
              explain: "Jedzenie wieczorem było jego sposobem na wyjście z bólu (stresu). Zabraliśmy narzędzie i nic nie daliśmy w zamian. Następny ruch: „Co dokładnie daje ci jedzenie po takim dniu? Co innego mogłoby ci dać to samo?”",
              src: "awaken", ch: "Rozdz. 6, krok 4"
            },
            { id: "u3-6", type: "mc", tech: "NAC krok 6: test",
              dialog: [["N", "Klientka od godziny pracuje nad lękiem przed szefem. Zbudowaliście nową reakcję: pewność i ciekawość."]],
              q: "Jak testujesz zmianę na koniec sesji?",
              opts: [
                { t: "„Wyobraź sobie: poniedziałek, 9:00, szef wchodzi i mówi: »Masz chwilę?«. Co czujesz teraz?”", ok: true },
                { t: "„Jak się czujesz po sesji?”", why: "Pytasz o stan na sesji, a nie o reakcję na bodziec, który wcześniej uruchamiał lęk." },
                { t: "„Napisz mi w przyszłym tygodniu, jak poszło.”", why: "Sprawdzisz to dopiero po fakcie. Test ma pokazać już teraz, czy nowa reakcja jest automatyczna." }
              ],
              explain: "Test to przeniesienie w przyszłość (future pacing): wywołujesz w wyobraźni dokładnie ten bodziec, który kiedyś odpalał stary wzorzec, i sprawdzasz reakcję. Jeśli lęk wraca, wracasz do wcześniejszych kroków.",
              src: "awaken", ch: "Rozdz. 6, krok 6"
            },
            { id: "u3-7", type: "mc", tech: "Diagnoza nieudanej zmiany",
              q: "Klient mówi, że zmiana trzymała się tylko dwa dni, choć ma nową alternatywę i ją ćwiczył. Co sprawdzasz najpierw?",
              opts: [
                { t: "Dźwignię: czy zmiana jest dla niego „muszę”, czy wciąż „fajnie by było”.", ok: true },
                { t: "Czy wybrał dobrą metodę.", why: "Metoda to kwestia drugorzędna. Najczęstszy powód nieudanej zmiany to za mała dźwignia." },
                { t: "Czy ma depresję.", why: "Diagnoza kliniczna wykracza poza ten model. Najpierw sprawdź najprostsze wyjaśnienie, czyli motywację." }
              ],
              explain: "Zmiana to zwykle kwestia motywacji, a nie zdolności. Gdy coś nie trzyma się, przejdź kroki od początku: cel, potem dźwignia. Za mała dźwignia to najczęstsza przyczyna.",
              src: "awaken", ch: "Rozdz. 6"
            }
          ]
        }
      ]
    },

    /* ───────────────────────── 4. STAN I PYTANIA ───────────────────────── */
    {
      id: "u4", title: "Stan i pytania", sub: "Ciało, skupienie, jakość pytań", src: "awaken", ch: "Rozdz. 7–8",
      lessons: [
        {
          id: "u4l1", title: "Najpierw stan, potem strategia",
          items: [
            { type: "learn", title: "Zmień stan, zmienisz możliwości",
              body: [
                "To, co klient potrafi w danym momencie, zależy od stanu, w którym jest. Ten sam człowiek w stanie przygnębienia i w stanie pewności ma dostęp do zupełnie innych zasobów.",
                "Dwa główne sposoby zmiany stanu to <b>fizjologia</b> (postawa, oddech, ruch, głos) i <b>skupienie</b> (na czym się koncentruje, jak to sobie przedstawia)."
              ],
              keys: ["Nie planuj strategii z klientem, który jest w złym stanie. Najpierw stan.", "Ciało jest najszybszą dźwignią stanu."],
              note: "W późniejszych programach Robbins rozszerza to do „Triady”: fizjologia, skupienie i język/znaczenie. Zweryfikujemy to z materiałami RMT."
            },
            { id: "u4-1", type: "mc", tech: "Zmiana stanu przez fizjologię",
              dialog: [["N", "Klient siedzi zgarbiony, patrzy w podłogę, mówi cicho i monotonnie."], ["K", "Nie dam rady tego pociągnąć. Nie wiem nawet, od czego zacząć."]],
              q: "Co robisz najpierw?",
              opts: [
                { t: "Zmieniasz jego fizjologię: „Wstań na chwilę. Stań tak, jak stoisz, kiedy wiesz, że coś ogarniesz. Weź pełny wdech. Jak teraz brzmi to zdanie?”", ok: true },
                { t: "Rozpisujesz z nim plan na kartce: krok po kroku.", why: "W tym stanie nie ma dostępu do swoich zasobów. Plan zrobiony w przygnębieniu będzie przygnębiony." },
                { t: "Przekonujesz go argumentami, że da radę.", why: "Argumenty trafiają do kogoś, kto w tym stanie nie jest w stanie ich przyjąć." },
                { t: "„Rozumiem, to musi być bardzo trudne.”", why: "Empatia buduje kontakt, ale samo jej okazanie utrzyma go w tym samym stanie. Uznaj jego uczucia krótko, a potem zmieniaj stan." }
              ],
              explain: "Ciało i stan to jedno. Zmiana postawy, oddechu i głosu w ciągu kilkunastu sekund zmienia to, co klient czuje i co jest w stanie wymyślić.",
              src: "awaken", ch: "Rozdz. 7"
            },
            { id: "u4-2", type: "mc", tech: "Zmiana stanu przez skupienie",
              dialog: [["K", "Jak pomyślę o tej rozmowie z inwestorem, to widzę tylko, jak mnie zjada i wychodzę jak idiota."]],
              q: "Który ruch zmienia skupienie klienta?",
              opts: [
                { t: "„Ok, ten film już widziałeś. Teraz puść inny: rozmowa idzie świetnie. Co mówisz w pierwszej minucie? Jak on reaguje?”", ok: true },
                { t: "„Co najgorszego może się stać?”", why: "Czasem przydatne, ale tu jeszcze mocniej skupiasz go na porażce, w której już jest." },
                { t: "„Nie myśl o tym w ten sposób.”", why: "Polecenie „nie myśl” nie mówi mózgowi, na czym ma się skupić zamiast tego." }
              ],
              explain: "Czujesz to, na czym się skupiasz. Nie zabierasz klientowi obrazu, tylko dajesz mu konkretny nowy obraz do oglądania.",
              src: "awaken", ch: "Rozdz. 7"
            }
          ]
        },
        {
          id: "u4l2", title: "Pytania są odpowiedzią",
          items: [
            { type: "learn", title: "Myślenie to zadawanie pytań",
              body: [
                "Myślenie to w dużej mierze proces zadawania sobie pytań i odpowiadania na nie. Pytanie zmienia to, na czym się skupiamy, a więc i to, co czujemy.",
                "Pytania niosą <b>presupozycje</b>, czyli ukryte założenia. „Dlaczego zawsze mi nie wychodzi?” zakłada porażkę. „Jak mogę to obrócić na swoją korzyść?” zakłada, że się da."
              ],
              keys: ["Pytania rozwiązujące problemy (w skrócie): Co jest w tym problemie dobrego? Co nie jest jeszcze idealne? Co jestem gotów zrobić, żeby było tak, jak chcę? Czego jestem gotów przestać robić? Jak mogę się przy tym dobrze bawić?", "Pytania poranne skupiają na tym, z czego się cieszysz, co cię ekscytuje, z czego jesteś dumny, za co wdzięczny, czym się cieszysz, czemu jesteś oddany i kogo kochasz."]
            },
            { id: "u4-3", type: "mc", tech: "Presupozycje w pytaniach",
              q: "Które pytanie zawiera założenie, że sytuacja się poprawi?",
              opts: [
                { t: "„Co tu jeszcze nie jest idealne?”", ok: true },
                { t: "„Co tu jest nie tak?”", why: "Zakłada, że coś jest zepsute. Nie mówi nic o tym, że będzie lepiej." },
                { t: "„Dlaczego to się stało?”", why: "Kieruje skupienie w przeszłość i na przyczyny, a nie na możliwości." }
              ],
              explain: "Słowo „jeszcze” robi tu całą robotę: zakłada, że będzie idealnie, tylko jeszcze nie jest. Taki drobny szczegół zmienia stan.",
              src: "awaken", ch: "Rozdz. 8"
            },
            { id: "u4-4", type: "order", tech: "Pytania rozwiązujące problemy",
              q: "Ułóż pytania rozwiązujące problemy w kolejności z książki.",
              items: ["Co jest w tym problemie dobrego?", "Co nie jest jeszcze idealne?", "Co jestem gotów zrobić, żeby było tak, jak chcę?", "Czego jestem gotów przestać robić?", "Jak mogę się przy tym dobrze bawić?"],
              explain: "Kolejność prowadzi od zmiany stanu (co dobrego), przez diagnozę (co jeszcze nie idealne), do działania (co zrobię, czego przestanę) i radości z procesu.",
              src: "awaken", ch: "Rozdz. 8"
            },
            { id: "u4-5", type: "write", tech: "Przeformułowanie pytania",
              ctx: "Klient po raz kolejny nie dostał pracy po rozmowie rekrutacyjnej i pyta: „Dlaczego mi się zawsze nie udaje?”",
              q: "Przepisz jego pytanie na 2–3 pytania, które zmienią jego skupienie i stan.",
              hints: ["Zakłada, że rozwiązanie istnieje", "Kieruje uwagę na przyszłość i działanie", "Nie zawiera „zawsze” ani „nigdy”"],
              model: [
                "„Czego mogę się nauczyć z tej rozmowy, żeby następna poszła lepiej?”",
                "„Co już zrobiłem dobrze i chcę powtórzyć?”",
                "„Jak mogę przygotować się na następną rozmowę tak, żeby sprawiło mi to frajdę?”"
              ],
              src: "awaken", ch: "Rozdz. 8"
            },
            { id: "u4-6", type: "mc", tech: "Pytania a kontakt z klientem",
              dialog: [["K", "Właśnie mnie zwolnili. Po dwunastu latach. Dziś rano."], ["N", "Klient ma łzy w oczach."]],
              q: "Który ruch jest najlepszy w tym momencie?",
              opts: [
                { t: "Najpierw krótko uznajesz jego uczucia, a gdy złapie oddech: „Kiedy będziesz gotowy: co ta sytuacja może ci otworzyć, czego wcześniej nie było?”", ok: true },
                { t: "Od razu: „Co jest w tym świetnego?”", why: "Dobre pytanie, ale zadane w złym momencie, bez kontaktu, zabrzmi jak kpina i stracisz zaufanie." },
                { t: "„Dlaczego cię zwolnili?”", why: "Kieruje w analizę przeszłości i może wzmocnić poczucie winy." }
              ],
              explain: "Pytania wzmacniające działają, gdy klient czuje, że go słyszysz. Najpierw kontakt, potem zmiana skupienia. Kolejność ma znaczenie.",
              src: "awaken", ch: "Rozdz. 8"
            }
          ]
        }
      ]
    },

    /* ───────────────────────── 5. JĘZYK I METAFORY ───────────────────────── */
    {
      id: "u5", title: "Język i metafory", sub: "Słownictwo transformacyjne", src: "awaken", ch: "Rozdz. 9–10",
      lessons: [
        {
          id: "u5l1", title: "Słowa zmieniają doświadczenie",
          items: [
            { type: "learn", title: "Słownictwo transformacyjne",
              body: [
                "Słowa, którymi nazywamy swoje doświadczenie, stają się naszym doświadczeniem. „Jestem wściekły” i „jestem trochę poirytowany” to dwa różne stany, nawet przy tej samej sytuacji.",
                "<b>Obniżaj</b> intensywność słów negatywnych, <b>podnoś</b> intensywność słów pozytywnych („dobrze” → „rewelacyjnie”)."
              ],
              keys: ["Zamiana słowa często brzmi tak absurdalnie, że już samo to przerywa wzorzec.", "Słuchaj ulubionych słów klienta: ludzie mają swoje stałe, mocne słowa na złe emocje."]
            },
            { id: "u5-1", type: "mc", tech: "Słownictwo transformacyjne",
              dialog: [["K", "Jestem kompletnie zdruzgotany, że nie dostałem tego awansu."]],
              q: "Co mówisz?",
              opts: [
                { t: "„Zdruzgotany to mocne słowo. Jesteś zdruzgotany, czy raczej bardzo rozczarowany?”", ok: true },
                { t: "„Rozumiem, to musi być zdruzgotujące.”", why: "Powtarzasz i utwierdzasz najmocniejsze słowo, więc wzmacniasz stan." },
                { t: "„Nie przesadzaj, to tylko awans.”", why: "Bagatelizujesz, co niszczy kontakt. Zamiana słowa działa, gdy klient sam ją wybiera." }
              ],
              explain: "Proponujesz słowo o niższej intensywności i pozwalasz klientowi je wybrać. To jednocześnie zmienia stan i pomaga ustalić, co naprawdę czuje.",
              src: "awaken", ch: "Rozdz. 9 i 11"
            },
            { id: "u5-2", type: "write", tech: "Słownictwo transformacyjne",
              q: "Zaproponuj słowo o niższej intensywności dla każdego zwrotu: „jestem przerażony”, „nienawidzę tego”, „jestem wykończony”, „to porażka”.",
              hints: ["Nowe słowo opisuje tę samą sytuację, ale słabiej", "Brzmi trochę zabawnie lub lekko", "Klient mógłby je powiedzieć bez poczucia, że kłamie"],
              model: ["przerażony → trochę zaniepokojony", "nienawidzę tego → nie przepadam za tym", "wykończony → trochę wymagający doładowania", "porażka → lekcja / zwrot akcji"],
              src: "awaken", ch: "Rozdz. 9"
            },
            { type: "learn", title: "Metafory globalne",
              body: [
                "Metafory, którymi ludzie opisują życie („życie to walka”, „jestem pod ścianą”, „utknąłem”), niosą całe pakiety przekonań i emocji. Zmiana metafory zmienia sposób przeżywania sytuacji.",
                "Słuchaj metafory klienta, zastanów się, co ona zakłada, i zaproponuj taką, która otwiera nowe możliwości."
              ]
            },
            { id: "u5-3", type: "mc", tech: "Zmiana metafory",
              dialog: [["K", "Czuję się, jakbym był pod ścianą. Nie ma już ruchu."]],
              q: "Który ruch najlepiej pracuje z metaforą klienta?",
              opts: [
                { t: "„Pod ścianą? Ściany można przeskoczyć, obejść albo zrobić w nich drzwi. Co byłoby drzwiami w twojej sytuacji?”", ok: true },
                { t: "„Dlaczego czujesz się pod ścianą?”", why: "Wzmacniasz metaforę, zamiast ją zmieniać." },
                { t: "„Wcale nie jesteś pod ścianą, masz mnóstwo opcji.”", why: "Zaprzeczasz jego doświadczeniu. Lepiej wejść w metaforę i ją przekształcić." }
              ],
              explain: "Wchodzisz w metaforę klienta i rozbudowujesz ją tak, żeby zawierała wyjście. Klient zostaje w swoim języku, ale z nową możliwością.",
              src: "awaken", ch: "Rozdz. 10"
            }
          ]
        }
      ]
    },

    /* ───────────────────────── 6. SYGNAŁY DO DZIAŁANIA ───────────────────────── */
    {
      id: "u6", title: "Sygnały do działania", sub: "Co mówią negatywne emocje", src: "awaken", ch: "Rozdz. 11",
      lessons: [
        {
          id: "u6l1", title: "10 sygnałów do działania",
          items: [
            { type: "learn", title: "Emocje to wiadomości",
              body: ["Negatywne emocje nie są wrogami, tylko <b>sygnałami do działania</b>. Każda niesie wiadomość, co trzeba zmienić: sposób patrzenia albo sposób działania."],
              keys: ["Dyskomfort: coś jest nie tak, zmień percepcję lub działanie.", "Strach: przygotuj się na coś, co nadchodzi.", "Zranienie: niespełnione oczekiwanie, poczucie straty.", "Złość: złamano ważną dla ciebie regułę lub standard.", "Frustracja: możesz robić to lepiej, zmień podejście.", "Rozczarowanie: oczekiwanie się nie spełni, zmień je lub cel.", "Poczucie winy: złamałeś własny standard, napraw to.", "Poczucie niewystarczalności: brakuje ci teraz umiejętności.", "Przytłoczenie: za dużo naraz, ustal jedną najważniejszą rzecz.", "Samotność: potrzebujesz kontaktu z ludźmi."]
            },
            { id: "u6-1", type: "mc", tech: "Sygnał: złość",
              dialog: [["K", "Jestem wściekły na wspólnika. Znowu podpisał umowę beze mnie."]],
              q: "Który ruch korzysta z wiadomości, jaką niesie złość?",
              opts: [
                { t: "„Jaka ważna dla ciebie zasada została złamana?”", ok: true },
                { t: "„Spróbuj się uspokoić, złość nie pomaga.”", why: "Traktujesz emocję jak wroga i gubisz informację, którą niesie." },
                { t: "„Może po prostu zakończ tę współpracę.”", why: "Decyzja bez zrozumienia, co naprawdę się stało. Może wystarczy ustalić nową zasadę współpracy." }
              ],
              explain: "Złość mówi, że naruszono regułę lub standard. Gdy nazwiesz regułę („ważne decyzje podejmujemy razem”), możesz z nią pracować: zakomunikować ją albo ją zmienić.",
              src: "awaken", ch: "Rozdz. 11 i 16"
            },
            { id: "u6-2", type: "mc", tech: "Sygnał: strach",
              q: "Klientka boi się jutrzejszej prezentacji przed zarządem. Jaka jest wiadomość strachu i co z nią robisz?",
              opts: [
                { t: "Coś ważnego nadchodzi i trzeba się przygotować: ustalacie, co konkretnie przygotuje dziś wieczorem.", ok: true },
                { t: "To znak, że nie powinna występować.", why: "Strach nie mówi „uciekaj”, tylko „przygotuj się”." },
                { t: "Trzeba strach zignorować i działać mimo niego.", why: "Ignorowanie strachu sprawia, że nie odbierasz jego wiadomości i strach rośnie." }
              ],
              explain: "Strach to oczekiwanie czegoś, na co trzeba się przygotować. Przygotowanie zwykle obniża strach szybciej niż jakakolwiek technika.",
              src: "awaken", ch: "Rozdz. 11"
            },
            { id: "u6-3", type: "mc", tech: "Sygnał: frustracja vs rozczarowanie",
              dialog: [["K", "Robię wszystko, co mogę, a sprzedaż stoi w miejscu. Cały czas to samo."]],
              q: "Jaka to emocja i co mówi?",
              opts: [
                { t: "Frustracja: możesz osiągać więcej, ale trzeba zmienić podejście, a nie tylko robić więcej tego samego.", ok: true },
                { t: "Rozczarowanie: oczekiwanie się nie spełni i trzeba zmienić cel.", why: "Klient nie mówi, że stracił nadzieję. Czuje, że utknął mimo wysiłku. To frustracja." },
                { t: "Przytłoczenie: ma za dużo na głowie.", why: "Nie mówi o nadmiarze zadań, tylko o braku efektów." }
              ],
              explain: "Frustracja to dobry sygnał: mózg uważa, że możesz robić to lepiej. Pytanie do klienta: „Co możesz zrobić inaczej? Kto osiąga to, czego chcesz, i jak to robi?”",
              src: "awaken", ch: "Rozdz. 11"
            },
            { id: "u6-4", type: "mc", tech: "Sygnał: przytłoczenie",
              dialog: [["K", "Mam przeprowadzkę, nowy projekt, chore dziecko i jeszcze remont. Nie wiem, w co ręce włożyć."]],
              q: "Co robisz?",
              opts: [
                { t: "„Z tego wszystkiego: co jest teraz absolutnie najważniejsze? Zajmijmy się tylko tym.”", ok: true },
                { t: "Pomagasz jej zrobić szczegółowy plan wszystkich czterech spraw.", why: "Cztery plany naraz wzmacniają poczucie, że wszystkiego jest za dużo." },
                { t: "„To naprawdę dużo, nic dziwnego, że jesteś zmęczona.”", why: "Uznanie jest w porządku, ale samo nie zmniejsza przytłoczenia." }
              ],
              explain: "Przytłoczenie mija, gdy klient wybiera jedną najważniejszą rzecz, zaczyna działać i czuje postęp. Potem bierze się za następną.",
              src: "awaken", ch: "Rozdz. 11"
            },
            { id: "u6-5", type: "order", tech: "6 kroków opanowania emocji",
              q: "Ułóż 6 kroków pracy z emocją w kolejności.",
              items: ["Nazwij, co naprawdę czujesz", "Uznaj emocję i doceń, że cię wspiera", "Zaciekaw się wiadomością, którą niesie", "Nabierz pewności, że sobie z nią poradzisz (przypomnij sobie, kiedy już sobie poradziłeś)", "Upewnij się, że poradzisz sobie też w przyszłości", "Ciesz się i działaj"],
              explain: "Proces prowadzi od nazwania (to już obniża intensywność) przez akceptację i ciekawość (przerwanie wzorca) do pewności i działania.",
              src: "awaken", ch: "Rozdz. 11"
            },
            { id: "u6-6", type: "mc", tech: "Sygnał: zranienie",
              dialog: [["K", "Przyjaciółka nie przyszła na moje urodziny. Nawet nie napisała. Strasznie mnie to zabolało."]],
              q: "Jaką wiadomość niesie zranienie?",
              opts: [
                { t: "Oczekiwanie nie zostało spełnione i pojawiło się poczucie straty. Warto sprawdzić, czy na pewno coś straciła i czy jest możliwe nieporozumienie.", ok: true },
                { t: "Przyjaciółka jej nie szanuje.", why: "To interpretacja, nie wiadomość emocji. Może być fałszywa." },
                { t: "Złamano jej ważną regułę.", why: "To bardziej opis złości. Zranienie to przede wszystkim niespełnione oczekiwanie i poczucie straty." }
              ],
              explain: "Zranienie mija, gdy sprawdzisz, czy strata jest prawdziwa (może przyjaciółka miała powód), albo gdy otwarcie wyrazisz swoje oczekiwanie.",
              src: "awaken", ch: "Rozdz. 11"
            }
          ]
        }
      ]
    },

    /* ───────────────────────── 7. WARTOŚCI I REGUŁY ───────────────────────── */
    {
      id: "u7", title: "Wartości i reguły", sub: "Wewnętrzny kompas klienta", src: "awaken", ch: "Rozdz. 15–16",
      lessons: [
        {
          id: "u7l1", title: "Hierarchia wartości",
          items: [
            { type: "learn", title: "Wartości „do” i „od”",
              body: [
                "<b>Wartości „do”</b> to przyjemne stany, do których dążymy (miłość, wolność, sukces, bezpieczeństwo). <b>Wartości „od”</b> to bolesne stany, których za wszelką cenę unikamy (odrzucenie, porażka, upokorzenie, samotność).",
                "Liczy się <b>hierarchia</b>: kolejność wartości decyduje o tym, co klient wybierze, gdy dwie wartości wchodzą w konflikt."
              ],
              keys: ["Konflikt wartości to częste źródło autosabotażu: np. sukces na szczycie „do” i odrzucenie na szczycie „od”.", "Wyciąganie wartości: „Co jest dla ciebie najważniejsze w życiu?”, „Czego najbardziej chcesz unikać?”, a potem porównania „Co jest ważniejsze: X czy Y?”"]
            },
            { id: "u7-1", type: "mc", tech: "Konflikt wartości",
              dialog: [["K", "Chcę mieć swoją firmę, to mój cel numer jeden. Ale od trzech lat zbieram się do pierwszego kroku."], ["C", "Czego najbardziej chcesz w życiu unikać?"], ["K", "Tego, że ludzie zobaczą, że mi nie wyszło. Wstydu."]],
              q: "Co się tu dzieje?",
              opts: [
                { t: "Konflikt wartości: chce sukcesu, ale silniej unika upokorzenia, a do sukcesu nie dojdzie bez ryzyka porażki.", ok: true },
                { t: "Brakuje mu wiedzy o zakładaniu firmy.", why: "Wiedzę mógłby zdobyć w tydzień. Trzy lata zwłoki to sygnał konfliktu wartości." },
                { t: "Firma nie jest naprawdę jego celem.", why: "Może być jego celem, ale ból wstydu jest silniejszy niż przyjemność z sukcesu." }
              ],
              explain: "Ludzie zrobią więcej, by uniknąć bólu, niż by zdobyć przyjemność. Kto chce sukcesu bez ryzyka odrzucenia, będzie się sabotował. Praca: zmienić to, co oznacza dla niego porażka, albo obniżyć pozycję wartości „od”.",
              src: "awaken", ch: "Rozdz. 15"
            },
            { id: "u7-2", type: "mc", tech: "Wyciąganie hierarchii wartości",
              q: "Klient podał listę: wolność, rodzina, rozwój, bezpieczeństwo. Jak ustalasz hierarchię?",
              opts: [
                { t: "Porównujesz parami: „Co jest ważniejsze: wolność czy bezpieczeństwo?” i tak dalej, aż powstanie kolejność.", ok: true },
                { t: "Pytasz: „Która jest najważniejsza?” i przyjmujesz pierwszą odpowiedź.", why: "Pierwsza odpowiedź często jest tą, która „ładnie brzmi”. Porównania parami pokazują prawdziwą kolejność." },
                { t: "Ustalasz ją na podstawie tego, jak klient żyje.", why: "Obserwacja pomaga, ale klient musi sam zobaczyć swoją kolejność, żeby móc ją świadomie zmienić." }
              ],
              explain: "Porównania parami zmuszają do wyboru i ujawniają, co faktycznie wygrywa w konflikcie. Często klienta zaskakuje, co jest na górze.",
              src: "awaken", ch: "Rozdz. 15"
            }
          ]
        },
        {
          id: "u7l2", title: "Reguły",
          items: [
            { type: "learn", title: "Co musi się wydarzyć, żebyś czuł…",
              body: [
                "<b>Reguły</b> to przekonania o tym, co musi się wydarzyć, żeby klient poczuł, że wartość jest spełniona. Dwie osoby mogą cenić miłość, a mieć zupełnie inne reguły na to, kiedy czują się kochane.",
                "Niszczące reguły są trudne do spełnienia, zależą od innych ludzi i mają wiele warunków. Do tego do złego samopoczucia wystarczy jeden powód."
              ],
              keys: ["Kluczowe pytanie: „Co musi się wydarzyć, żebyś poczuł się…?”", "Dobre reguły: łatwo poczuć się dobrze, trudno poczuć się źle.", "Dobre reguły są w kontroli klienta i mają wiele sposobów spełnienia („gdy… albo… albo…”)."]
            },
            { id: "u7-3", type: "mc", tech: "Wyciąganie reguł",
              dialog: [["K", "Nigdy nie czuję się szanowany w pracy."]],
              q: "Jakie pytanie zadajesz?",
              opts: [
                { t: "„Co musiałoby się wydarzyć, żebyś poczuł się szanowany?”", ok: true },
                { t: "„Kto cię nie szanuje?”", why: "Szukasz winnych. Problem może leżeć w samej regule, a nie w ludziach." },
                { t: "„Dlaczego tak czujesz?”", why: "Dostaniesz listę przykładów, które wzmacniają przekonanie." }
              ],
              explain: "To pytanie ujawnia regułę. Często okazuje się, że jest niemożliwa do spełnienia („gdy wszyscy zgadzają się z moimi pomysłami i nikt mi nie przerywa”).",
              src: "awaken", ch: "Rozdz. 16"
            },
            { id: "u7-4", type: "mc", tech: "Ocena reguły",
              dialog: [["K", "Czuję się kochana, kiedy mąż sam z siebie pamięta o wszystkich ważnych datach, zabiera mnie raz w tygodniu na kolację i nigdy nie podnosi głosu."]],
              q: "Co jest problemem z tą regułą?",
              opts: [
                { t: "Jest w całości zależna od męża, ma wiele warunków naraz i jedno potknięcie odbiera jej poczucie miłości.", ok: true },
                { t: "Nic. To rozsądne oczekiwania.", why: "Każde z osobna może być rozsądne, ale razem jako warunek poczucia miłości to przepis na to, żeby czuła się niekochana." },
                { t: "Mąż powinien się bardziej starać.", why: "Może i tak, ale coach pracuje z tym, na co klientka ma wpływ, czyli z jej regułą." }
              ],
              explain: "Spełnić muszą się wszystkie warunki, a złamać wystarczy jeden, więc częściej czuje się niekochana niż kochana. Następny krok to wspólne napisanie nowej reguły.",
              src: "awaken", ch: "Rozdz. 16"
            },
            { id: "u7-5", type: "write", tech: "Przebudowa reguły",
              ctx: "Reguła klientki: „Czuję się kochana, kiedy mąż sam z siebie pamięta o wszystkich datach, zabiera mnie na kolację co tydzień i nigdy nie podnosi głosu.”",
              q: "Napisz nową regułę, dzięki której łatwo jej będzie czuć się kochaną.",
              hints: ["Zależy przynajmniej częściowo od niej samej", "Ma kilka sposobów spełnienia („albo… albo…”)", "Da się ją spełnić codziennie"],
              model: ["„Czuję się kochana zawsze, kiedy okazuję miłość, kiedy widzę jakikolwiek gest troski od bliskich albo kiedy przypominam sobie, ile razem przeszliśmy.”"],
              src: "awaken", ch: "Rozdz. 16"
            }
          ]
        }
      ]
    },

    /* ───────────────────────── NIEOGRANICZONA MOC: KONTAKT I OPÓR ───────────────────────── */
    {
      id: "u9", title: "Kontakt i opór", sub: "Odzwierciedlanie, rama zgody, aikido w rozmowie", src: "up", ch: "Rozdz. XIII i XV",
      lessons: [
        {
          id: "u9l1", title: "Jak budować kontakt",
          items: [
            { type: "learn", title: "Kontakt przez podobieństwo",
              body: [
                "Ludzie ufają tym, którzy są do nich podobni. Kontakt (rapport) budujesz, <b>odzwierciedlając</b> drugą osobę: postawę, gesty, mimikę, oddech i głos.",
                "W głosie możesz dopasować cztery rzeczy: <b>głośność</b>, <b>tempo</b>, <b>wysokość</b> i <b>barwę</b>. Dwa klucze do odzwierciedlania to uważna obserwacja i własna elastyczność."
              ],
              keys: ["Odzwierciedlanie to nie przedrzeźnianie. Robisz to subtelnie, żeby wejść w świat klienta.", "Najpierw podążasz za klientem, dopiero potem możesz go prowadzić w inny stan."]
            },
            { id: "u9-1", type: "mc", tech: "Odzwierciedlanie głosu",
              dialog: [["N", "Nowa klientka mówi bardzo cicho i powoli, robi długie pauzy, siedzi skulona."]],
              q: "Ty z natury mówisz szybko i głośno. Jak zaczynasz sesję?",
              opts: [
                { t: "Zwalniasz, ściszasz głos i dopasowujesz rytm do jej pauz. Dopiero gdy złapiesz kontakt, stopniowo podnosisz energię.", ok: true },
                { t: "Mówisz energicznie, żeby od razu podnieść jej stan.", why: "Bez kontaktu Twoja energia będzie dla niej obca i przytłaczająca. Najpierw podążasz, potem prowadzisz." },
                { t: "Mówisz tak jak zawsze. Autentyczność jest najważniejsza.", why: "Elastyczność to klucz do kontaktu. Dopasowanie się do klienta nie odbiera Ci autentyczności." }
              ],
              explain: "Odzwierciedlenie tempa i głośności sprawia, że klientka czuje się zrozumiana bez słów. Kiedy podąża za Tobą (np. przyspiesza razem z Tobą), wiesz, że możesz ją prowadzić.",
              src: "up", ch: "Rozdz. XIII"
            },
            { id: "u9-2", type: "mc", tech: "Rama zgody",
              dialog: [["K", "To wszystko bzdury. Coaching to wyciąganie pieniędzy od ludzi."]],
              q: "Jak odpowiadasz, nie tracąc kontaktu?",
              opts: [
                { t: "„Szanuję to, że mówisz wprost, i dlatego proponuję: sprawdźmy przez jedną sesję, czy to coś zmieni. Jeśli nie, nic nie tracisz.”", ok: true },
                { t: "„Rozumiem, ale to nieprawda. Coaching ma badania.”", why: "„Ale” kasuje wszystko, co było przed nim. Klient słyszy kłótnię i broni się mocniej." },
                { t: "„Skoro tak uważasz, to po co przyszedłeś?”", why: "Atakujesz. Przegrywasz kontakt i rozmowę." },
                { t: "Przytakujesz: „Masz rację, wiele osób tak robi.”", why: "Zgadzasz się z treścią, z którą się nie zgadzasz. Rama zgody dotyczy uczuć i intencji klienta, nie treści." }
              ],
              explain: "Rama zgody to trzy zwroty: „Doceniam… i…”, „Szanuję… i…”, „Zgadzam się… i…”. Słowo „i” zamiast „ale” pozwala uznać człowieka i jednocześnie poprowadzić rozmowę w nową stronę.",
              src: "up", ch: "Rozdz. XV"
            },
            { id: "u9-3", type: "mc", tech: "Aikido w rozmowie",
              q: "Według Robbinsa skąd bierze się opór klienta?",
              opts: [
                { t: "Oporu nie ma. Są tylko mało elastyczni rozmówcy, którzy naciskają w złym momencie i w złym kierunku.", ok: true },
                { t: "Z tego, że klient nie jest gotowy na zmianę.", why: "To wygodne wytłumaczenie dla coacha. Robbins przenosi odpowiedzialność na sposób komunikacji." },
                { t: "Z ukrytych korzyści, których klient nie chce stracić.", why: "Mogą istnieć, ale tu chodzi o to, że opór często tworzy sam naciskający coach." }
              ],
              explain: "Model z aikido: nie przeciwstawiasz siły sile, tylko wyczuwasz opór, znajdujesz punkt zgody, łączysz się z nim i przekierowujesz rozmowę.",
              src: "up", ch: "Rozdz. XV"
            },
            { id: "u9-4", type: "write", tech: "Rama zgody",
              ctx: "Klient: „Nie będę rozmawiał o swoim dzieciństwie. To nie ma nic do rzeczy.”",
              q: "Odpowiedz w ramie zgody (doceniam / szanuję / zgadzam się + „i”), tak żeby utrzymać kontakt i nadal prowadzić sesję.",
              hints: ["Zaczyna od uznania uczucia lub intencji klienta", "Używa „i”, a nie „ale”", "Proponuje kierunek, który klient może przyjąć"],
              model: ["„Szanuję to, że chcesz się skupić na tym, co jest teraz, i właśnie od tego zacznijmy: co dziś najbardziej cię blokuje?”", "„Zgadzam się, że nie musimy grzebać w przeszłości, i jeśli w trakcie coś z niej samo się pojawi, sam zdecydujesz, czy chcesz na to spojrzeć.”"],
              src: "up", ch: "Rozdz. XV"
            }
          ]
        }
      ]
    },

    /* ───────────────────────── NIEOGRANICZONA MOC: REFRAMING, KOTWICE, METAPROGRAMY ───────────────────────── */
    {
      id: "u10", title: "Reframing, kotwice, metaprogramy", sub: "Narzędzia zmiany znaczenia i stanu", src: "up", ch: "Rozdz. XIV, XVI, XVII",
      lessons: [
        {
          id: "u10l1", title: "Reframing",
          items: [
            { type: "learn", title: "Dwa rodzaje reframingu",
              body: [
                "<b>Reframing kontekstu:</b> pokazujesz, że zachowanie, które w jednej sytuacji przeszkadza, w innej jest zaletą. Przykład z bajki: czerwony nos, z którego się śmiano, stał się atutem w mglistą noc.",
                "<b>Reframing treści:</b> ta sama sytuacja, inne znaczenie. „Syn nigdy nie przestaje gadać” może znaczyć „ma mnóstwo do powiedzenia, jest bystry”."
              ]
            },
            { id: "u10-1", type: "mc", tech: "Reframing kontekstu",
              dialog: [["K", "Jestem strasznie uparty. Przez to ciągle kłócę się z szefem."]],
              q: "Który ruch to reframing kontekstu?",
              opts: [
                { t: "„Gdzie ten upór ci służy? W jakich sytuacjach to właśnie dzięki niemu dowiozłeś coś, czego inni nie dali rady?”", ok: true },
                { t: "„To nie upór, tylko pewność siebie.”", why: "To reframing treści (nowe znaczenie tej samej rzeczy) i to dość nachalny, bo klient może go nie przyjąć." },
                { t: "„Spróbuj być mniej uparty przy szefie.”", why: "To rada, nie reframing." }
              ],
              explain: "Reframing kontekstu nie neguje cechy, tylko szuka miejsca, w którym jest zasobem. Potem możesz pracować nad tym, kiedy jej używać.",
              src: "up", ch: "Rozdz. XVI"
            },
            { id: "u10-2", type: "mc", tech: "Reframing treści",
              dialog: [["K", "Mąż w ogóle nie okazuje emocji. Jak coś się sypie, on po prostu siada i liczy."]],
              q: "Który ruch to reframing treści?",
              opts: [
                { t: "„Czyli kiedy wszystko się sypie, ktoś w waszym domu zachowuje zimną krew i szuka rozwiązania?”", ok: true },
                { t: "„Gdzie ten jego spokój się przydaje?”", why: "To pytanie o kontekst. Też dobre, ale to reframing kontekstu." },
                { t: "„Może powinien pójść na terapię?”", why: "Nie zmieniasz znaczenia, tylko oceniasz." }
              ],
              explain: "Ta sama obserwacja („siada i liczy”) dostaje nowe znaczenie („zachowuje zimną krew”). Znaczenie zmienia emocję, a emocja zmienia reakcję klientki na męża.",
              src: "up", ch: "Rozdz. XVI"
            }
          ]
        },
        {
          id: "u10l2", title: "Kotwiczenie",
          items: [
            { type: "learn", title: "Cztery zasady skutecznej kotwicy",
              body: ["Kotwica to bodziec połączony ze stanem emocjonalnym, np. dotyk w konkretnym miejscu albo gest. Żeby działała:"],
              keys: ["<b>1.</b> Osoba musi być w pełnym, intensywnym stanie, przeżywając go od środka (zasocjowana, a nie oglądająca siebie z boku).", "<b>2.</b> Bodziec dajesz w szczycie stanu, nie za wcześnie i nie za późno.", "<b>3.</b> Bodziec musi być unikalny, najlepiej łączący kilka zmysłów (np. dotyk i ton głosu).", "<b>4.</b> Bodziec trzeba powtarzać dokładnie tak samo."]
            },
            { id: "u10-3", type: "order", tech: "Kotwiczenie",
              q: "Ułóż kroki zakotwiczenia stanu pewności u klienta.",
              items: ["Prosisz klienta, żeby przypomniał sobie moment pełnej pewności i wszedł w niego całym ciałem", "Obserwujesz, jak stan narasta, i wyczuwasz jego szczyt", "W szczycie dajesz unikalny bodziec, np. dotyk w konkretnym miejscu z określonym słowem", "Przerywasz stan i testujesz kotwicę, powtarzając dokładnie ten sam bodziec"],
              explain: "Jeśli po odpaleniu kotwicy stan wraca, to działa. Jeśli nie, najczęściej stan był za słaby albo bodziec przyszedł po szczycie.",
              src: "up", ch: "Rozdz. XVII"
            },
            { id: "u10-4", type: "mc", tech: "Kotwiczenie",
              q: "Zakotwiczyłeś klientowi stan pewności uściskiem dłoni. Kotwica nie działa. Co jest najbardziej prawdopodobną przyczyną?",
              opts: [
                { t: "Uścisk dłoni nie jest unikalny, bo robimy go ciągle, więc mózg nie dostaje jasnego sygnału.", ok: true },
                { t: "Klient nie wierzy w kotwice.", why: "Kotwice działają niezależnie od wiary, jeśli są dobrze zrobione." },
                { t: "Kotwice działają dopiero po kilku tygodniach.", why: "Dobrze założona kotwica działa od razu." }
              ],
              explain: "Unikalność bodźca to jedna z czterech zasad. Uścisk dłoni zadziała tylko wtedy, gdy jest wyjątkowy (np. inny nacisk, inne miejsce).",
              src: "up", ch: "Rozdz. XVII"
            }
          ]
        },
        {
          id: "u10l3", title: "Metaprogramy",
          items: [
            { type: "learn", title: "Jak ludzie sortują świat",
              body: ["Metaprogramy to wewnętrzne wzorce, które decydują, na co człowiek zwraca uwagę i co go motywuje. Zależą od kontekstu, ale u każdego jakieś dominują."],
              keys: ["<b>Do / od:</b> dążenie do czegoś albo uciekanie od czegoś.", "<b>Wewnętrzne / zewnętrzne odniesienie:</b> „sam wiem, że dobrze zrobiłem” albo „wiem, bo inni mi powiedzieli”.", "<b>Ja / inni:</b> patrzenie przez pryzmat własnych potrzeb albo potrzeb innych.", "<b>Możliwość / konieczność:</b> robię, bo chcę i widzę opcje, albo robię, bo muszę.", "<b>Strategia przekonywania:</b> co i ile razy musi zobaczyć lub usłyszeć, żeby uwierzyć."]
            },
            { id: "u10-5", type: "mc", tech: "Metaprogram do/od",
              dialog: [["C", "Czego chcesz od nowej pracy?"], ["K", "Żeby nie było nadgodzin, żeby szef się nie czepiał i żeby nie trzeba było dojeżdżać godzinę."]],
              q: "Jaki metaprogram dominuje i jak go wykorzystać?",
              opts: [
                { t: "„Od”: motywuje go unikanie. Mówiąc o zmianie, pokazuj, czego dzięki niej uniknie, a potem stopniowo dodawaj, do czego dąży.", ok: true },
                { t: "„Do”: wie, czego chce.", why: "Mówi wyłącznie o tym, czego nie chce. To klasyczny wzorzec „od”." },
                { t: "Zewnętrzne odniesienie.", why: "Ten metaprogram dotyczy tego, skąd czerpie przekonanie, że coś jest dobre. Tu widać kierunek motywacji." }
              ],
              explain: "Gdy mówisz „do” do kogoś, kto działa „od”, nie trafiasz. Pamiętaj też o kroku 1 NAC: docelowo pomagasz mu sformułować, czego chce.",
              src: "up", ch: "Rozdz. XIV"
            },
            { id: "u10-6", type: "mc", tech: "Odniesienie wewnętrzne/zewnętrzne",
              dialog: [["C", "Skąd wiesz, że dobrze wykonałaś projekt?"], ["K", "No… szef powiedział, że jest okej. I klient się nie skarżył."]],
              q: "Co to mówi o klientce?",
              opts: [
                { t: "Ma zewnętrzne odniesienie: o jakości swojej pracy wnioskuje z opinii innych. Twoje pochwały i informacje zwrotne mają dla niej dużą wagę.", ok: true },
                { t: "Ma wewnętrzne odniesienie.", why: "Osoba z wewnętrznym odniesieniem powiedziałaby „po prostu wiem” albo „czuję, że to było dobre”." },
                { t: "Działa z konieczności.", why: "To inny metaprogram, dotyczy powodów działania, a nie oceny efektów." }
              ],
              explain: "Przy zewnętrznym odniesieniu wnioski z sesji warto potwierdzać z zewnątrz (dane, opinie). Przy wewnętrznym pytaj: „Jak sam to oceniasz?”.",
              src: "up", ch: "Rozdz. XIV"
            }
          ]
        }
      ]
    },

    /* ───────────────────────── NLP: PRECYZJA JĘZYKA ───────────────────────── */
    {
      id: "n1", title: "Precyzja języka", sub: "Metamodel: usunięcia, zniekształcenia, uogólnienia", src: "nlp", ch: "Metamodel NLP · Nieograniczona moc, rozdz. XII",
      lessons: [
        {
          id: "n1l1", title: "Co się kryje za słowami",
          items: [
            { type: "learn", title: "Metamodel w pigułce",
              body: [
                "Ludzie mówią skrótami. Coś <b>usuwają</b> („jest źle”), coś <b>zniekształcają</b> („on mnie lekceważy”, czyli czytanie w myślach) i coś <b>uogólniają</b> („nigdy mi nie wychodzi”). Pytania metamodelu przywracają brakujące informacje i odsłaniają przekonanie.",
                "<b>Kiedy używać:</b> gdy klient mówi mgliście, gdy nie wiesz, nad czym właściwie pracujecie, gdy w zdaniu siedzi ograniczające przekonanie. <b>Kiedy nie:</b> w silnych emocjach przed zbudowaniem kontaktu. Seria pytań brzmi wtedy jak przesłuchanie."
              ],
              keys: [
                "Usunięcie → „Co konkretnie? Kto konkretnie? W porównaniu z czym?”",
                "Uogólnienie („zawsze”, „nikt”, „wszyscy”) → „Zawsze? Był choć jeden raz, kiedy było inaczej?”",
                "Konieczność lub niemożność („muszę”, „nie mogę”) → „Co by się stało, gdybyś tego nie zrobił? Co cię powstrzymuje?”",
                "Czytanie w myślach → „Skąd wiesz, że on tak myśli?”",
                "Przyczyna i skutek („on mnie wkurza”) → „Jak dokładnie to, co robi, sprawia, że ty czujesz złość?”",
                "Nominalizacja („nasza komunikacja się psuje”) → zamień rzeczownik w czasownik: „Jak się teraz ze sobą komunikujecie?”"
              ]
            },
            { id: "n1-1", type: "mc", tech: "Metamodel: czytanie w myślach",
              dialog: [["K", "Szef mnie nie szanuje. Widzę to po nim."]],
              q: "Jaki to wzorzec i jakie pytanie zadajesz?",
              opts: [
                { t: "Czytanie w myślach: „Po czym konkretnie to widzisz? Co on robi, że dochodzisz do takiego wniosku?”", ok: true },
                { t: "Uogólnienie: „Czy nikt w pracy cię nie szanuje?”", why: "W zdaniu nie ma słowa „nikt” ani „zawsze”. Klient zakłada, że wie, co szef myśli." },
                { t: "Nominalizacja: „Czym dla ciebie jest szacunek?”", why: "To ciekawe pytanie na później, ale najpierw sprawdź, na czym opiera się jego „wiem”." }
              ],
              explain: "Czytanie w myślach to przekonanie bez dowodów. Pytanie o konkretne zachowanie oddziela fakt (szef nie odpowiedział na maila) od interpretacji (nie szanuje mnie).",
              src: "nlp", ch: "Metamodel"
            },
            { id: "n1-2", type: "mc", tech: "Metamodel: uogólnienie",
              dialog: [["K", "Nikt mnie nigdy nie słucha."]],
              q: "Które pytanie najlepiej rozluźnia to uogólnienie, nie łamiąc kontaktu?",
              opts: [
                { t: "„Nikt? Nigdy? Przypomnij sobie choć jedną osobę, która cię kiedyś naprawdę wysłuchała.”", ok: true },
                { t: "„Przecież to niemożliwe, żeby nikt.”", why: "Zaprzeczasz klientowi wprost. Wywołasz obronę zamiast wątpliwości." },
                { t: "„Dlaczego nikt cię nie słucha?”", why: "Pytanie przyjmuje uogólnienie za fakt i każe szukać dowodów, czyli wzmacnia przekonanie." }
              ],
              explain: "Powtórzenie słowa kwantyfikatora z lekkim zdziwieniem („Nikt? Nigdy?”) plus prośba o kontrprzykład to najprostszy sposób na nadkruszenie nogi przekonania.",
              src: "nlp", ch: "Metamodel"
            },
            { id: "n1-3", type: "mc", tech: "Metamodel: operator modalny",
              dialog: [["K", "Nie mogę powiedzieć mamie, że nie przyjadę na święta."]],
              q: "Jakie pytanie zadajesz?",
              opts: [
                { t: "„Co by się stało, gdybyś jej to powiedziała?”", ok: true },
                { t: "„Oczywiście, że możesz.”", why: "Przekonywanie nie działa. Klient musi sam zobaczyć, czego się boi." },
                { t: "„Dlaczego nie możesz?”", why: "Dostaniesz listę powodów, które wzmocnią „nie mogę”." }
              ],
              explain: "„Nie mogę” zwykle znaczy „boję się konsekwencji”. Pytanie „co by się stało, gdybyś…?” wyciąga te konsekwencje na światło, a wtedy można z nimi pracować.",
              src: "nlp", ch: "Metamodel"
            },
            { id: "n1-4", type: "mc", tech: "Metamodel: przyczyna i skutek",
              dialog: [["K", "Żona mnie doprowadza do szału, jak tak wzdycha."]],
              q: "Który ruch oddaje klientowi wpływ na jego reakcję?",
              opts: [
                { t: "„Jak dokładnie to jej westchnienie sprawia, że ty się wściekasz? Co sobie wtedy mówisz w głowie?”", ok: true },
                { t: "„Może poproś ją, żeby przestała wzdychać.”", why: "Zostawiasz przekonanie, że jego emocje zależą od niej." },
                { t: "„Ja też bym się wkurzał.”", why: "Zgadzasz się z modelem „ona sprawia, że czuję”. Klient zostaje bez wpływu." }
              ],
              explain: "Między bodźcem (westchnienie) a emocją (szał) jest znaczenie, które klient nadaje. To ta sama zasada, której uczy Robbins: nikt nie sprawia, że czujesz, robisz to sam.",
              src: "nlp", ch: "Metamodel"
            },
            { id: "n1-5", type: "mc", tech: "Metamodel: nominalizacja",
              dialog: [["K", "Brakuje mi w życiu stabilizacji."]],
              q: "Jak odpakowujesz to słowo?",
              opts: [
                { t: "„Gdybyś była ustabilizowana, co konkretnie by się działo? Po czym byś poznała, że już jesteś?”", ok: true },
                { t: "„Stabilizacja jest bardzo ważna, rozumiem.”", why: "Akceptujesz mgłę. Nadal nie wiesz, nad czym pracujecie." },
                { t: "„Może potrzebujesz stałej pracy?”", why: "Zgadujesz za klientkę. Dla niej „stabilizacja” może znaczyć coś zupełnie innego." }
              ],
              explain: "Nominalizacja to proces zamrożony w rzeczowniku. Zamieniasz go z powrotem w konkretne zachowania i dowody, i wtedy masz cel, z którym można pracować.",
              src: "nlp", ch: "Metamodel"
            }
          ]
        }
      ]
    },

    /* ───────────────────────── NLP: WSPOMNIENIA I STANY ───────────────────────── */
    {
      id: "n2", title: "Wspomnienia i stany", sub: "Submodalności, swish, dysocjacja, kotwice", src: "nlp", ch: "Techniki NLP",
      lessons: [
        {
          id: "n2l1", title: "Jak zmienić to, jak coś pamiętasz",
          items: [
            { type: "learn", title: "Submodalności",
              body: [
                "To samo wspomnienie można przedstawić sobie na różne sposoby: duże albo małe, jasne albo ciemne, blisko albo daleko, w kolorze albo czarno-białe, w ruchu albo jako stop-klatka, z dźwiękiem albo bez. Te cechy to <b>submodalności</b>. Zmiana kilku z nich zmienia intensywność emocji.",
                "<b>Zasocjowanie</b> (widzisz własnymi oczami) wzmacnia emocję. <b>Zdysocjowanie</b> (widzisz siebie z boku, jak na ekranie) ją osłabia."
              ],
              keys: [
                "Przyjemne wspomnienia i nowe zachowania: zasocjuj, powiększ, rozjaśnij, przybliż.",
                "Bolesne wspomnienia: zdysocjuj, zmniejsz, oddal, odbarw, dodaj zabawny dźwięk (głos z kreskówki).",
                "Najpierw sprawdź, które submodalności „robią różnicę” u tego klienta. U jednych działa obraz, u innych dźwięk."
              ]
            },
            { id: "n2-1", type: "mc", tech: "Zasocjowanie a zdysocjowanie",
              dialog: [["K", "Kiedy przypominam sobie ten wypadek, znowu siedzę w samochodzie i widzę, jak tamto auto na mnie leci."]],
              q: "Klient przeżywa wspomnienie od środka. Co robisz?",
              opts: [
                { t: "Prosisz, żeby wyszedł z obrazu: „Zobacz to z daleka, jak film na małym ekranie w kinie, z siebie siedzącego w ostatnim rzędzie”.", ok: true },
                { t: "Prosisz, żeby opisał wszystkie szczegóły po kolei.", why: "Zasocjowane, szczegółowe przeżywanie wzmacnia emocję." },
                { t: "Prosisz, żeby zrobił obraz jaśniejszy i większy.", why: "To wzmacnia, nie osłabia. Tak robi się z przyjemnymi wspomnieniami." }
              ],
              explain: "Bolesne wspomnienie zasocjowane = pełna emocja. Dysocjacja daje dystans, w którym można się nim zająć bez ponownego przeżywania. Przy ciężkiej traumie odeślij do specjalisty.",
              src: "nlp", ch: "Submodalności"
            },
            { type: "learn", title: "Swish i szybka technika „kina”",
              body: [
                "<b>Swish</b> łączy wyzwalacz starego nawyku z obrazem siebie, jakim chcesz być. Klient widzi wyzwalacz (np. rękę sięgającą po papierosa) jako duży, jasny obraz, a w rogu mały, ciemny obraz pożądanego siebie. Na „swish” obrazy błyskawicznie się zamieniają. Powtarzasz 5–7 razy, czyszcząc ekran między powtórzeniami.",
                "<b>Kiedy:</b> nawyk lub reakcja z wyraźnym wyzwalaczem (obgryzanie paznokci, sięganie po telefon, nerwowa reakcja na konkretny widok).",
                "<b>Technika kina</b> (podwójna dysocjacja): klient ogląda siebie na ekranie, siedząc w kabinie projekcyjnej i patrząc na siebie na widowni. Puszcza film zdarzenia w czarno-bieli od chwili „przed” do „po”, a potem szybko przewija od końca do początku w kolorze, z zabawną muzyką. <b>Kiedy:</b> pojedyncza fobia albo jedno intensywne wspomnienie."
              ],
              note: "Przy złożonej traumie (przemoc, wiele zdarzeń) techniki te nie zastąpią terapii. Polecaj specjalistę."
            },
            { id: "n2-2", type: "mc", tech: "Dobór techniki: swish",
              dialog: [["K", "Za każdym razem, jak widzę telefon na biurku, biorę go i przewijam. Tracę na tym dwie godziny dziennie."]],
              q: "Która technika najlepiej pasuje?",
              opts: [
                { t: "Swish: wyzwalacz (widok telefonu na biurku) zamieniony na obraz siebie skupionego i spokojnego.", ok: true },
                { t: "Technika kina.", why: "Kino jest na fobie i jedno intensywne wspomnienie. Tu jest nawyk z wyzwalaczem." },
                { t: "Praca z linią czasu.", why: "Nie ma tu ciążącej przeszłości. Jest automatyczny wzorzec tu i teraz." }
              ],
              explain: "Swish jest stworzony do nawyków z wyraźnym wyzwalaczem. Najważniejsze: obraz docelowy to nie „ja bez telefonu”, tylko ja, jakim chcę być (atrakcyjny, motywujący).",
              src: "nlp", ch: "Swish"
            },
            { id: "n2-3", type: "mc", tech: "Dobór techniki: fobia",
              dialog: [["K", "Od kiedy pies mnie ugryzł w dzieciństwie, na widok każdego psa robi mi się słabo."]],
              q: "Co wybierasz?",
              opts: [
                { t: "Technikę kina: podwójna dysocjacja, film od „przed” do „po”, potem szybkie przewinięcie od końca w kolorze i z zabawnym dźwiękiem.", ok: true },
                { t: "Głęboką rozmowę o tym, jak to było, żeby się wygadała.", why: "Ponowne przeżywanie zdarzenia zasocjowane może wzmocnić lęk." },
                { t: "Afirmację „nie boję się psów”.", why: "Słowa nie zmieniają zapisanej reakcji układu nerwowego." }
              ],
              explain: "Pojedyncze zdarzenie, które stworzyło fobię, to klasyczne wskazanie do techniki kina. Na koniec przetestuj: wyobraź sobie psa za płotem, co czujesz teraz?",
              src: "nlp", ch: "Technika kina"
            },
            { id: "n2-4", type: "mc", tech: "Zapadanie kotwic",
              q: "Klientka za każdym razem, gdy słyszy dzwonek telefonu od szefa, czuje ścisk w żołądku. Chcesz zneutralizować tę reakcję kotwicami. Co robisz?",
              opts: [
                { t: "Zakotwiczasz mocny stan zasobu na jednym kolanie, stan „ścisku” na drugim, a potem odpalasz obie kotwice naraz, aż stan zasobu przeważy. To zapadanie kotwic.", ok: true },
                { t: "Zakotwiczasz tylko stan ścisku, żeby lepiej go poznać.", why: "Wzmocnisz go, zamiast zneutralizować." },
                { t: "Każesz jej wyłączyć dźwięk telefonu.", why: "Unikanie wyzwalacza nie zmienia reakcji, tylko ją odkłada." }
              ],
              explain: "Zapadanie kotwic: zasób musi być mocniejszy niż problem. Często łączy się kilka zasobów na jednej kotwicy (kotwice nakładane), zanim odpali się obie naraz.",
              src: "nlp", ch: "Kotwice"
            }
          ]
        },
        {
          id: "n2l2", title: "Swish kinestetyczny",
          items: [
            { type: "learn", title: "Swish na uczucie, nie na obraz",
              body: [
                "Klasyczny swish pracuje z obrazami. <b>Swish kinestetyczny</b> pracuje z uczuciem w ciele: klient lokalizuje uczucie problemu, opisuje jego cechy, potem lokalizuje uczucie zasobu i jego cechy, a na koniec „przelewa” zasób na problem, aż problem się rozpuści.",
                "<b>Kiedy:</b> klient nie ma wyraźnego obrazu ani wyzwalacza, tylko ciężar, ucisk albo „gulę” w ciele (złość, smutek, poczucie winy). <b>Kiedy nie:</b> nawyk z wyraźnym wyzwalaczem wzrokowym, bo wtedy lepszy jest klasyczny swish."
              ],
              keys: [
                "<b>Cechy uczucia:</b> miejsce w ciele, rozmiar, kształt, faktura, temperatura, kierunek ruchu (wciska się, płynie do przodu).",
                "<b>Nakładanie zmysłów:</b> pytasz też o kolor i dźwięk uczucia. Dzięki temu masz kilka „uchwytów”, którymi możesz zmieniać to uczucie.",
                "<b>Test zasobu przed zmianą:</b> zasób musi mieć 9–10 na 10, inaczej nie przeważy problemu.",
                "<b>Skalowanie po zmianie:</b> „Ile teraz od 0 do 10? Co by to podniosło o jeden?”"
              ],
              note: "Ten opis to synteza znanej techniki NLP i omówienia interwencji Robbinsa z Tammy (patrz: Prawdziwe interwencje)."
            },
            { id: "n2-5", type: "order", tech: "Swish kinestetyczny",
              q: "Ułóż kroki swisha kinestetycznego.",
              items: ["Zlokalizuj uczucie problemu w ciele i opisz jego cechy (kolor, rozmiar, faktura, dźwięk, co mówi)", "Przerwij stan: wstrząśnij ciałem", "Przywołaj moment pełnej siły i zlokalizuj to uczucie w ciele z jego cechami", "Sprawdź siłę zasobu od 0 do 10 (musi być 9–10)", "Przenieś zasób na miejsce problemu: otocz problem, zmniejsz go do kropki, wypchnij i wypełnij to miejsce zasobem", "Zmierz od 0 do 10 i dokładaj, aż dojdzie do 10"],
              explain: "Kolejność ma znaczenie: stan problemu, przerwanie, stan zasobu, test siły zasobu, połączenie, test. Bez przerwania stanu oba uczucia się zmieszają, zanim zbudujesz zasób.",
              src: "nlp", ch: "Swish kinestetyczny"
            },
            { id: "n2-6", type: "mc", tech: "Dobór techniki: swish kinestetyczny",
              dialog: [["K", "Nie mam żadnego obrazu. Po prostu jak myślę o rozmowie z bratem, czuję taki ciężar w żołądku."]],
              q: "Którą wersję swisha wybierasz?",
              opts: [
                { t: "Kinestetyczną: klient opisuje ciężar w żołądku i jego cechy, a potem przenosisz na to miejsce uczucie zasobu.", ok: true },
                { t: "Klasyczną, wzrokową: każesz mu wymyślić obraz wyzwalacza.", why: "Klient sam mówi, że nie ma obrazu. Pracuj w systemie, w którym przeżywa problem." },
                { t: "Żadną. Najpierw musi zobaczyć obraz.", why: "Nie trzeba. Uczucie w ciele to pełnoprawny punkt wejścia." }
              ],
              explain: "Dopasuj technikę do tego, jak klient przeżywa problem. Ciężar w żołądku to wejście kinestetyczne.",
              src: "nlp", ch: "Swish kinestetyczny"
            },
            { id: "n2-7", type: "mc", tech: "Nakładanie zmysłów",
              q: "Klientka mówi, że złość czuje w klatce piersiowej. Po co pytać ją, jaki ta złość ma kolor?",
              opts: [
                { t: "Żeby dać uczuciu drugi kanał (obraz). Obraz łatwiej zmienić (zmniejszyć, rozjaśnić, oddalić), a razem z nim zmienia się uczucie.", ok: true },
                { t: "Żeby sprawdzić, czy jest wzrokowcem.", why: "Chodzi o to, żeby mieć więcej uchwytów do zmiany uczucia, a nie o diagnozę typu." },
                { t: "Bez powodu, to taki rytuał.", why: "To konkretne narzędzie: nakładanie zmysłów." }
              ],
              explain: "Każdy dodany zmysł (kolor, dźwięk, słowa) to kolejny uchwyt. Słowa, które pojawią się przy zasobie (np. „lekkość”, „tak”), stają się też kotwicami, których używasz w trakcie zmiany.",
              src: "nlp", ch: "Swish kinestetyczny"
            },
            { id: "n2-8", type: "mc", tech: "Przygotowanie gruntu",
              dialog: [["K", "Nie wiem, czego chcę w związku z mamą."]],
              q: "Robbins w takiej sytuacji czasem prosi: „Opisz mi pracę z piekła”, a potem „pracę z nieba”. Po co?",
              opts: [
                { t: "Złość na „piekło” wyzwala energię i jasność. Potem przy tej podniesionej energii przechodzisz do przeciwieństwa i klient łatwiej mówi, czego chce. Do tego przenosi to z bolesnego tematu na równoległy (metafora).", ok: true },
                { t: "Żeby odwrócić jego uwagę od mamy na zawsze.", why: "To przygotowanie, a nie zmiana tematu. Potem wracasz do relacji z mamą." },
                { t: "Żeby sprawdzić, czy lubi swoją pracę.", why: "Praca jest tu tylko metaforą relacji." }
              ],
              explain: "Ten wstęp już zapowiada zmianę: od piekła do nieba, czyli kontrast stanu problemu i stanu pożądanego, tak jak w samym swishu.",
              src: "nlp", ch: "Swish kinestetyczny"
            }
          ]
        }
      ]
    },

    /* ───────────────────────── NLP: PERSPEKTYWY, CZĘŚCI, POZIOMY ───────────────────────── */
    {
      id: "n3", title: "Perspektywy, części, poziomy", sub: "Pozycje percepcyjne, praca z częściami, poziomy logiczne, linia czasu", src: "nlp", ch: "Techniki NLP",
      lessons: [
        {
          id: "n3l1", title: "Kiedy co wybrać",
          items: [
            { type: "learn", title: "Mapa narzędzi",
              keys: [
                "<b>Pozycje percepcyjne</b> (ja · druga osoba · obserwator z boku). Kiedy: konflikt z konkretną osobą, brak zrozumienia drugiej strony.",
                "<b>Praca z częściami</b> (integracja w dłoniach). Kiedy: „część mnie chce, a część nie”, wewnętrzne rozdarcie, sabotaż.",
                "<b>Poziomy logiczne</b> (otoczenie · zachowanie · umiejętności · przekonania i wartości · tożsamość · misja). Kiedy: diagnozujesz, na jakim poziomie leży problem. Zmiana na wyższym poziomie przenosi się na niższe.",
                "<b>Linia czasu</b>. Kiedy: przeszłość ciąży („to mnie wciąż prześladuje”) albo przyszłość jest mglista. Klient patrzy na zdarzenie z góry, sprzed niego, i zabiera z niego naukę.",
                "<b>Zmiana poziomu ogólności</b>. Klient utknął w szczegółach: pytaj „po co? co ci to da?” (w górę). Klient jest we mgle: pytaj „co konkretnie? jak konkretnie?” (w dół)."
              ]
            },
            { id: "n3-1", type: "mc", tech: "Dobór techniki: pozycje percepcyjne",
              dialog: [["K", "Mój wspólnik jest nieznośny. Zupełnie nie rozumiem, czemu tak się upiera przy tej inwestycji."]],
              q: "Co wybierasz?",
              opts: [
                { t: "Pozycje percepcyjne: klient opisuje sytuację ze swojej perspektywy, potem siada na miejscu wspólnika i mówi jak on, a potem patrzy na obu z boku jako obserwator.", ok: true },
                { t: "Pracę z częściami.", why: "Konflikt jest między dwiema osobami, nie wewnątrz klienta." },
                { t: "Technikę kina.", why: "To technika na fobie i bolesne wspomnienia, a nie na nieporozumienie z kimś." }
              ],
              explain: "„Nie rozumiem, czemu on…” to sygnał do zmiany perspektywy. Druga pozycja daje zrozumienie, a trzecia spokój i widok całego układu.",
              src: "nlp", ch: "Pozycje percepcyjne"
            },
            { id: "n3-2", type: "mc", tech: "Dobór techniki: części",
              dialog: [["K", "Jedna część mnie chce rzucić etat i jechać w świat, a druga mówi, że to szaleństwo i że mam kredyt."]],
              q: "Co wybierasz?",
              opts: [
                { t: "Pracę z częściami: rozmawiasz z każdą osobno, pytasz o pozytywną intencję, szukasz wspólnej wartości, a potem integrujesz je w dłoniach.", ok: true },
                { t: "Listę plusów i minusów.", why: "To rozmowa z głowy. Każda część wygra swój argument i konflikt zostanie." },
                { t: "Pozycje percepcyjne.", why: "Tu konflikt jest wewnętrzny, a nie z inną osobą." }
              ],
              explain: "„Część mnie… a część mnie…” to klasyczny sygnał. Tak pracował Robbins z Joshem (hipis i przedsiębiorca): żadnej części nie zwalczał, tylko szukał mostu.",
              src: "nlp", ch: "Praca z częściami"
            },
            { id: "n3-3", type: "mc", tech: "Poziomy logiczne",
              dialog: [["K", "Ja po prostu nie jestem typem osoby, która umie sprzedawać."]],
              q: "Na jakim poziomie jest ten problem?",
              opts: [
                { t: "Tożsamości („nie jestem typem osoby”). Sam trening technik sprzedaży nie wystarczy, dopóki klient tak siebie widzi.", ok: true },
                { t: "Umiejętności, bo chodzi o sprzedaż.", why: "Mówi o tym, kim jest, a nie o tym, czego nie umie." },
                { t: "Otoczenia, bo pewnie ma trudny rynek.", why: "Nic o rynku nie mówi. Słowo „typem osoby” wskazuje na tożsamość." }
              ],
              explain: "Problemy tożsamości rozwiązuje się na poziomie tożsamości i przekonań (np. „uczę się sprzedawać jak każdej umiejętności”, nowe referencje). Dopiero potem umiejętności zaczną się przyjmować.",
              src: "nlp", ch: "Poziomy logiczne"
            },
            { id: "n3-4", type: "mc", tech: "Zmiana poziomu ogólności",
              dialog: [["K", "Muszę wybrać między tymi dwoma ofertami pracy. Jedna ma lepszy pakiet medyczny, druga bliżej dojazd, w jednej jest 26 dni urlopu, w drugiej 28…"]],
              q: "Klient tonie w szczegółach. Co pytasz?",
              opts: [
                { t: "„Co jest dla ciebie najważniejsze w pracy w ogóle? Po co ci ta zmiana?” (pytanie w górę, o wartości).", ok: true },
                { t: "„A jakie są jeszcze różnice?”", why: "Wciągasz go głębiej w szczegóły." },
                { t: "„Wybierz tę z wyższą pensją.”", why: "Decydujesz za klienta." }
              ],
              explain: "Gdy klient utknął w detalach, idź w górę, do wartości i celów. Gdy jest we mgle („chcę czegoś więcej”), idź w dół, do konkretów.",
              src: "nlp", ch: "Poziomy ogólności"
            },
            { id: "n3-5", type: "mc", tech: "Dobór techniki: linia czasu",
              dialog: [["K", "Ta zdrada sprzed pięciu lat ciągle za mną chodzi. Niby to przeszłość, a codziennie o tym myślę."]],
              q: "Co może pomóc?",
              opts: [
                { t: "Praca z linią czasu: klient unosi się nad linią swojego życia, wraca nad zdarzenie, patrzy na nie z góry i sprzed niego, i zabiera z niego naukę, którą zostawia sobie na przyszłość.", ok: true },
                { t: "Swish.", why: "Swish jest na nawyki z wyzwalaczem, a nie na ciężar przeszłości." },
                { t: "Analiza, dlaczego partner zdradził.", why: "Analiza przyczyn utrzymuje klienta w tym samym miejscu na linii czasu." }
              ],
              explain: "Gdy przeszłość „chodzi za klientem”, zmieniasz jego relację z czasem: zdarzenie zostaje tam, gdzie było, a z klientem zostaje tylko nauka.",
              src: "nlp", ch: "Linia czasu"
            }
          ]
        }
      ]
    },

    /* ───────────────────────── ROBBINS: NARZĘDZIA ───────────────────────── */
    {
      id: "n4", title: "Narzędzia Robbinsa", sub: "Triada, wzorzec Dickensa, inkantacje, priming", src: "nlp", ch: "Wiedza ogólna o metodzie Robbinsa",
      lessons: [
        {
          id: "n4l1", title: "Triada i dźwignia",
          items: [
            { type: "learn", title: "Triada",
              body: ["Każdy stan emocjonalny powstaje z trzech elementów: <b>fizjologii</b> (ciało, oddech, ruch), <b>skupienia</b> (na czym się koncentrujesz) i <b>języka i znaczenia</b> (jakimi słowami to nazywasz, co to dla ciebie znaczy). Zmień jeden element, a zmienisz stan. Zmień wszystkie trzy, a zmienisz go natychmiast."],
              keys: ["Kiedy: klient jest w ograniczającym stanie na sesji, zanim cokolwiek zaplanujecie.", "Najszybsza jest fizjologia. Najtrwalsze jest znaczenie."]
            },
            { id: "n4-1", type: "mc", tech: "Triada",
              dialog: [["K", "(zgarbiona, cicho) Wszystko się wali, nie mam siły na nic."]],
              q: "Co zmieniasz najpierw i dlaczego?",
              opts: [
                { t: "Fizjologię: wstań, oddychaj pełniej, podnieś głowę. To najszybszy z trzech elementów, a w lepszym stanie łatwiej zmienić skupienie i znaczenie.", ok: true },
                { t: "Znaczenie: tłumaczysz, że to okazja do rozwoju.", why: "Reframing trafi do kogoś w lepszym stanie. Zgarbiony i bez energii klient go odrzuci." },
                { t: "Nic. Najpierw musi się wygadać.", why: "Krótkie uznanie tak, ale wygadanie się w tym samym stanie go pogłębia." }
              ],
              explain: "Kolejność: fizjologia (sekundy), potem skupienie (pytanie, obraz), potem znaczenie (reframing). Wtedy reframing trafia na podatny grunt.",
              src: "nlp", ch: "Triada"
            },
            { type: "learn", title: "Wzorzec Dickensa",
              body: [
                "Technika budowania dźwigni na przekonaniu (nazwana od „Opowieści wigilijnej”). Klient bierze ograniczające przekonanie i przechodzi przez trzy czasy: co już go kosztowało w przeszłości, co kosztuje go teraz, co będzie go kosztować za 5, 10, 20 lat (siebie i bliskich). Mocno zasocjowany, z pełnym bólem.",
                "Potem robi to samo z nowym, wzmacniającym przekonaniem, tylko z przyjemnością: co da mu dziś, za 5, 10 lat.",
                "<b>Kiedy:</b> klient wie, że przekonanie mu szkodzi, ale nie ma motywacji, żeby je puścić."
              ]
            },
            { id: "n4-2", type: "order", tech: "Wzorzec Dickensa",
              q: "Ułóż kroki wzorca Dickensa.",
              items: ["Nazwij ograniczające przekonanie", "Poczuj, co już kosztowało w przeszłości", "Poczuj, co kosztuje teraz", "Zobacz i poczuj koszt za 5, 10, 20 lat, także dla bliskich", "Przerwij stan", "Nazwij nowe przekonanie i przejdź przez przyszłość z nim, z pełną przyjemnością"],
              explain: "Ból musi być zasocjowany i obejmować bliskich. Przerwanie stanu przed częścią z przyjemnością jest ważne, żeby nie zmieszać obu stanów.",
              src: "nlp", ch: "Wzorzec Dickensa"
            },
            { id: "n4-3", type: "mc", tech: "Inkantacje a afirmacje",
              q: "Czym według Robbinsa inkantacja różni się od afirmacji?",
              opts: [
                { t: "Inkantację mówisz na głos całym ciałem: z intensywną fizjologią, głosem i emocją, aż poczujesz pewność. Afirmacja to często tylko powtarzanie słów w głowie.", ok: true },
                { t: "Inkantacja jest dłuższa.", why: "Długość nie gra roli. Liczy się zaangażowanie ciała i emocji." },
                { t: "Niczym, to to samo.", why: "Robbins mocno je odróżnia. Afirmacja bez emocji to tylko słowa." }
              ],
              explain: "Zasada kongruencji (jak u Tiny Marie): słowa bez ciała i tonu są puste. Inkantacja łączy język z fizjologią i skupieniem, czyli z całą triadą.",
              src: "nlp", ch: "Inkantacje"
            },
            { id: "n4-4", type: "mc", tech: "Priming",
              q: "Klient pyta o codzienną praktykę, która utrzyma efekt sesji. Co proponujesz w duchu Robbinsa?",
              opts: [
                { t: "Krótki poranny priming (ok. 10 minut): rytmiczny oddech, kilka minut wdzięczności za konkretne chwile, potem wyobrażenie sobie celów jako już osiągniętych.", ok: true },
                { t: "Godzinę analizy dziennika z całego tygodnia.", why: "Może mieć sens, ale nie przestawia stanu na start dnia i rzadko jest robione regularnie." },
                { t: "Nic. Efekt sesji powinien wystarczyć.", why: "Bez warunkowania nowy stan zanika. To krok 5 NAC." }
              ],
              explain: "Priming to codzienne warunkowanie stanu. Krótki i regularny bije długi i okazjonalny.",
              src: "nlp", ch: "Priming"
            }
          ]
        }
      ]
    },

    /* ───────────────────────── DOBÓR TECHNIKI ───────────────────────── */
    {
      id: "n5", title: "Kiedy której techniki użyć", sub: "Sygnał klienta → narzędzie", src: "nlp", ch: "Synteza",
      lessons: [
        {
          id: "n5l1", title: "Ściągawka i szybkie decyzje",
          items: [
            { type: "learn", title: "Sygnał → narzędzie",
              keys: [
                "Mówi tylko, czego nie chce → <b>krok 1 NAC</b>: „Czego chcesz zamiast tego?”",
                "„Powinienem”, „kiedyś” → <b>dźwignia</b> (koszty, wzorzec Dickensa).",
                "Powtarza tę samą historię, nakręca się → <b>przerwanie wzorca</b>.",
                "Zgarbiony, cichy, bez energii → <b>fizjologia</b> (triada).",
                "Mgliste słowa, „wszyscy”, „nigdy” → <b>metamodel</b>.",
                "„Nie jestem typem…” → <b>tożsamość</b> (poziomy logiczne, nowe referencje).",
                "Bolesne wspomnienie wraca → <b>submodalności, dysocjacja, technika kina</b>.",
                "Nawyk z wyzwalaczem → <b>swish</b>.",
                "„Część mnie chce, część nie” → <b>praca z częściami</b>.",
                "Nie rozumie drugiej osoby → <b>pozycje percepcyjne</b>.",
                "Zachowanie destrukcyjne, a jednak trwa → <b>sześć potrzeb</b>: co mu to daje?",
                "Złości się na kogoś → <b>reguły</b>: jaka zasada została złamana?",
                "Zmiana na sesji gotowa → <b>test i przeniesienie w przyszłość</b>."
              ]
            },
            { id: "n5-1", type: "mc", tech: "Dobór techniki",
              dialog: [["K", "Wiem, że powinienem ograniczyć alkohol. Kiedyś się za to zabiorę."]],
              q: "Od czego zaczynasz?",
              opts: [{ t: "Dźwignia", ok: true }, { t: "Swish", why: "Swish przyda się później, na wyzwalacz. Najpierw zmiana musi stać się „muszę”." }, { t: "Pozycje percepcyjne", why: "Nie ma tu konfliktu z drugą osobą." }],
              explain: "„Powinienem” i „kiedyś” to sygnał, że zmiana nie jest koniecznością. Bez dźwigni każda technika będzie tylko ciekawostką.",
              src: "nlp", ch: "Dobór techniki"
            },
            { id: "n5-2", type: "mc", tech: "Dobór techniki",
              dialog: [["K", "Ilekroć mijam tamto skrzyżowanie, widzę ten wypadek jak na nowo."]],
              q: "Co wybierasz?",
              opts: [{ t: "Dysocjacja i technika kina", ok: true }, { t: "Metamodel", why: "Język nie jest tu problemem. Problemem jest zapis wspomnienia." }, { t: "Bilans sześciu potrzeb", why: "To nie zachowanie, które coś daje, tylko reakcja lękowa na wspomnienie." }],
              explain: "Intensywne wspomnienie, które wraca przy bodźcu, to wskazanie do pracy z submodalnościami i dysocjacją. Przy ciężkiej traumie odeślij do specjalisty.",
              src: "nlp", ch: "Dobór techniki"
            },
            { id: "n5-3", type: "mc", tech: "Dobór techniki",
              dialog: [["K", "Nie wiem, dlaczego to robię. Wiem, że objadanie się w nocy mnie niszczy, a robię to od lat."]],
              q: "Jakie pytanie diagnostyczne zadajesz najpierw?",
              opts: [{ t: "„Co ci to daje? Jakie potrzeby zaspokaja?”", ok: true }, { t: "„Kiedy to się zaczęło?”", why: "Historia może się przydać, ale nie powie ci, co podtrzymuje wzorzec dziś." }, { t: "„Czy próbowałeś diety?”", why: "Strategia bez zrozumienia, co daje stary wzorzec." }],
              explain: "Zachowanie destrukcyjne, które trwa latami, zaspokaja potrzeby (najczęściej pewność i ulgę). Bez tej wiedzy nie zbudujesz alternatywy (krok 4 NAC).",
              src: "nlp", ch: "Dobór techniki", verify: true
            },
            { id: "n5-4", type: "mc", tech: "Dobór techniki",
              dialog: [["K", "Jestem wściekła na siostrę. Znowu nie zadzwoniła w moje urodziny."]],
              q: "Co pytasz?",
              opts: [{ t: "„Jaka twoja zasada została złamana? Co musi się wydarzyć, żebyś czuła, że jesteś dla niej ważna?”", ok: true }, { t: "„Dlaczego ona tak robi?”", why: "Czytanie w myślach siostry. Klientka nie ma na to wpływu." }, { t: "„Może ma dużo na głowie.”", why: "Usprawiedliwiasz siostrę, zamiast pracować z regułą klientki." }],
              explain: "Złość to sygnał złamanej reguły. Nazwanie reguły pozwala ją zakomunikować albo zmienić na łatwiejszą do spełnienia.",
              src: "nlp", ch: "Dobór techniki"
            },
            { id: "n5-5", type: "mc", tech: "Dobór techniki",
              dialog: [["K", "Jestem po prostu leniwa. Taka się urodziłam."]],
              q: "Na co zwracasz uwagę?",
              opts: [{ t: "Na tożsamość: „jestem leniwa” to etykieta, nie zachowanie. Pytasz o kontrprzykłady i budujesz nową referencję.", ok: true }, { t: "Na plan dnia: trzeba lepiej zorganizować czas.", why: "Plan nie zadziała, dopóki klientka widzi siebie jako „leniwą z natury”." }, { t: "Na zmęczenie: może za mało śpi.", why: "Warto sprawdzić później, ale klientka mówi o tym, kim jest." }],
              explain: "„Jestem…” to poziom tożsamości. Szukaj sytuacji, w których była zaangażowana i pracowita, bo to nogi nowego przekonania.",
              src: "nlp", ch: "Dobór techniki"
            },
            { id: "n5-6", type: "mc", tech: "Dobór techniki",
              q: "Pod koniec sesji klient mówi: „Czuję, że coś się zmieniło”. Co robisz?",
              opts: [{ t: "Testujesz: wyobraź sobie sytuację, która wcześniej uruchamiała stary wzorzec. Co czujesz teraz?", ok: true }, { t: "Kończysz, skoro czuje zmianę.", why: "Bez testu nie wiesz, czy zmiana zadziała w realnej sytuacji." }, { t: "Dajesz mu kolejną technikę na wszelki wypadek.", why: "Najpierw sprawdź, czy ta zadziałała." }],
              explain: "Krok 6 NAC: test. Wywołaj bodziec w wyobraźni i sprawdź reakcję. Dopiero gdy jest nowa, kończysz.",
              src: "nlp", ch: "Dobór techniki"
            }
          ]
        }
      ]
    },

    /* ───────────────────────── 8. SZEŚĆ POTRZEB (RMT) ───────────────────────── */
    {
      id: "u8", title: "Sześć potrzeb człowieka", sub: "Fundament RMT", src: "rmt", ch: "Wiedza ogólna", verify: true,
      lessons: [
        {
          id: "u8l1", title: "Jakie potrzeby to zaspokaja?",
          items: [
            { type: "learn", title: "Sześć potrzeb",
              body: [
                "Każde zachowanie, także destrukcyjne, zaspokaja jakieś ludzkie potrzeby. Cztery potrzeby osobowości: <b>pewność</b>, <b>różnorodność</b> (niepewność), <b>znaczenie</b>, <b>miłość i więź</b>. Dwie potrzeby ducha: <b>rozwój</b> i <b>wkład</b> (dawanie innym).",
                "Jeśli zachowanie zaspokaja trzy lub więcej potrzeb na wysokim poziomie, staje się bardzo silnym nawykiem, a nawet uzależnieniem."
              ],
              keys: ["Kluczowe pytanie diagnostyczne: „Jakie potrzeby zaspokaja to zachowanie?”", "Strategia: znaleźć zdrowszy sposób (pojazd), który zaspokaja te same potrzeby na podobnym poziomie.", "Dwie najwyżej postawione potrzeby wyznaczają kierunek życia klienta."],
              note: "Ta lekcja powstała z mojej ogólnej wiedzy o RMT. Sprawdzimy ją i rozbudujemy na podstawie Twoich materiałów ze szkolenia."
            },
            { id: "u8-1", type: "mc", tech: "Diagnoza potrzeb", verify: true,
              dialog: [["N", "Klientka opowiada o swojej mamie."], ["K", "Mama ciągle choruje. Zawsze coś: serce, plecy, ciśnienie. Lekarze nic nie znajdują, ale cała rodzina się wokół niej kręci."]],
              q: "Jakie potrzeby najprawdopodobniej zaspokaja mamie „chorowanie”?",
              opts: [
                { t: "Więź (uwaga rodziny), znaczenie (jest w centrum) i pewność (wie, że ktoś przyjdzie).", ok: true },
                { t: "Rozwój i wkład.", why: "Choroba rzadko zaspokaja potrzeby ducha. Tu chodzi o potrzeby osobowości." },
                { t: "Tylko różnorodność.", why: "Różnorodność może się pojawiać, ale mocniej działają więź, znaczenie i pewność." }
              ],
              explain: "Trzy potrzeby naraz to silny wzorzec. Nie chodzi o świadomą manipulację, tylko o to, że ten sposób działa. Zmiana wymaga innego sposobu na uwagę i znaczenie.",
              src: "rmt", ch: "Wiedza ogólna"
            },
            { id: "u8-2", type: "mc", tech: "Diagnoza potrzeb", verify: true,
              dialog: [["K", "My się z żoną ciągle kłócimy. A potem jest godzenie się i jest super. I znowu od nowa."]],
              q: "Jakie potrzeby może zaspokajać ten cykl?",
              opts: [
                { t: "Różnorodność (emocje, dramat), więź (intensywne godzenie się) i znaczenie (ktoś się mną przejmuje).", ok: true },
                { t: "Pewność i rozwój.", why: "Pewność częściowo tak (przewidywalny cykl), ale rozwoju tu nie ma. Główne paliwo to różnorodność i więź." },
                { t: "Żadnych, to po prostu niedopasowanie charakterów.", why: "W tym modelu każde powtarzane zachowanie zaspokaja jakieś potrzeby. Inaczej by się nie powtarzało." }
              ],
              explain: "Gdy związek daje mało różnorodności i więzi na co dzień, kłótnia i godzenie dają obie na wysokim poziomie. Coach szuka zdrowszych źródeł intensywności i bliskości.",
              src: "rmt", ch: "Wiedza ogólna"
            },
            { id: "u8-3", type: "mc", tech: "Zmiana pojazdu", verify: true,
              q: "Odkryłeś, że wieczorne picie daje klientowi pewność (rytuał), różnorodność (rozluźnienie) i więź (kumple w barze). Co robisz?",
              opts: [
                { t: "Szukacie razem nowych sposobów, które dadzą mu te same trzy potrzeby na podobnym poziomie, np. wieczorne treningi w drużynie.", ok: true },
                { t: "Każesz mu rzucić picie i tyle.", why: "Zabierasz źródło trzech potrzeb i nic nie dajesz w zamian. Wzorzec wróci." },
                { t: "Tłumaczysz mu, jak alkohol szkodzi.", why: "Wiedza nie konkuruje z trzema zaspokojonymi potrzebami." }
              ],
              explain: "To ta sama logika co krok 4 NAC: nowa alternatywa musi dawać to, co dawał stary wzorzec. Teoria sześciu potrzeb mówi Ci dokładnie, co to jest.",
              src: "rmt", ch: "Wiedza ogólna"
            }
          ]
        }
      ]
    }
  ],

  /* Prawdziwe interwencje (YouTube). Dialogi to krótkie tłumaczenia kwestii z transkrypcji,
     „tony” opisuje, co faktycznie zrobił Robbins w tym miejscu. */
  interventions: [
    {
      id: "yt01", title: "Callum: zostać czy odejść", sub: "Związek · odpowiedzialność · działanie teraz",
      video: "https://www.youtube.com/watch?v=XpagYNyYYrk", videoTitle: "He Was Ready to Leave His Wife. Then He Called Her in Front of Thousands", len: "28 min",
      lessons: [
        {
          id: "yt01l1", title: "Decyzja to dopiero początek",
          items: [
            { type: "learn", title: "Kontekst interwencji",
              body: [
                "Seminarium na żywo. Callum ze Szkocji od dawna waha się, czy odejść od żony. Wcześniej na sali było ćwiczenie z przywoływaniem wspomnień. Callum zgłasza się, żeby podzielić się przełomem: zostaje.",
                "W tej lekcji przejdziesz przez interwencję krok po kroku. W każdym momencie decyzji najpierw wybierasz swój ruch, a potem zobaczysz, co zrobił Robbins."
              ],
              note: "Robbins pracuje tu na scenie, przy tysiącach ludzi, i często wciąga salę („zróbcie hałas, jeśli…”). W gabinecie 1:1 tę rolę gra Twoje uznanie i pytania."
            },
            { id: "yt01-1", type: "mc", tech: "Decyzja to nie zmiana",
              dialog: [["K", "Zanim tu przyjechałem, miałem w głowie mętlik: zostać w małżeństwie czy odejść. Po tym ćwiczeniu werdykt jest jasny: zostaję."], ["N", "Sala bije brawo."]],
              q: "Uznałeś jego decyzję. Co mówisz dalej?",
              opts: [
                { t: "„Pięknie. Ale nie chcesz zostać w tym samym stanie i z tymi samymi znaczeniami. Sama niepewność, czy zostaniesz, sprawia, że druga osoba czuje się niepewnie, a wtedy bliskości jest coraz mniej.”", ok: true },
                { t: "„Gratuluję, to wielka decyzja. Jak się z nią czujesz?”", why: "Zamykasz temat na decyzji. Klient wyjdzie z poczuciem, że sprawa załatwiona, a wzorce w związku zostaną te same." },
                { t: "„Jesteś pewien? Przejdźmy przez plusy i minusy.”", why: "Podważasz świeżą decyzję i wracasz go do tej samej niepewności, z którą przyszedł." },
                { t: "„Świetnie, to teraz poszukajmy dobrego terapeuty par.”", why: "Rozwiązanie, zanim wiesz, co trzeba zmienić i co go do tej decyzji doprowadziło." }
              ],
              tony: "Najpierw dał mu brawa, a od razu potem podniósł poprzeczkę: zostać to za mało, jeśli zostaniesz w tym samym stanie. Znaczenia nadajemy my, więc możemy je zmienić. Do tego wyjaśnił, że niepewność „zostanę czy odejdę” odbiera partnerce poczucie bezpieczeństwa, mniej bezpieczeństwa to mniej bliskości, a to sprawia, że niepewność się sama spełnia.",
              explain: "To ta sama logika co „coś musi się zmienić”: decyzja o zostaniu bez zmiany stanu i wzorców to tylko odłożenie problemu.",
              src: "yt", ch: "Interwencja 01, cz. 1"
            },
            { id: "yt01-2", type: "mc", tech: "Wydobycie zasobu",
              q: "Zanim zaczniesz z nim pracować nad tym, co zmienić, jakie pytanie zadajesz?",
              opts: [
                { t: "„Dlaczego podjąłeś tę decyzję? Co się w tobie przesunęło?”", ok: true },
                { t: "„Co jest nie tak w waszym małżeństwie?”", why: "Od razu skupiasz go na problemach. Bez zasobu (powodu, żeby walczyć) konfrontacja go przytłoczy." },
                { t: "„Co robi żona, że chciałeś odejść?”", why: "Kierujesz uwagę na winę partnerki, a przecież pracujesz z nim, nie z nią." },
                { t: "„Jaki masz plan na najbliższy miesiąc?”", why: "Plan bez emocjonalnego paliwa nie przetrwa pierwszej kłótni." }
              ],
              tony: "Zapytał właśnie o to. Callum opisał wspomnienie: żona na szczycie gór Cairngorms w ciepłej kurtce i czapce, kobieca, piękna. Nie potrafił wyobrazić sobie życia bez tego obrazu. To jego zasób: emocjonalny powód, na którym Robbins potem oparł całą pracę.",
              explain: "Najpierw połącz klienta z tym, dlaczego mu zależy, a dopiero potem pokazuj, co musi zmienić. Wtedy konfrontacja trafia w kogoś zmotywowanego, a nie w kogoś, kto się broni.",
              src: "yt", ch: "Interwencja 01, cz. 1"
            },
            { id: "yt01-3", type: "mc", tech: "100% odpowiedzialności",
              dialog: [["N", "Wcześniej na seminarium była mowa o tym, że w związku żona coraz częściej przejmuje „męską” rolę i to ona wszystko ciągnie."]],
              q: "Jak przenosisz uwagę Calluma na jego własną część, nie wywołując wstydu?",
              opts: [
                { t: "„Jaką rolę ty odegrałeś w tym, że ona musi tak działać? Nie chodzi o to, żebyś się obwiniał. Jesteście w pętli, a jeśli wiemy, co robisz, możesz to zmienić.”", ok: true },
                { t: "„Czy uważasz, że to twoja wina?”", why: "Pytanie o winę uruchamia obronę albo wstyd. Ani jedno, ani drugie nie prowadzi do zmiany." },
                { t: "„Co ona powinna zmienić, żeby było lepiej?”", why: "Przenosisz odpowiedzialność na nią, a ona nawet nie siedzi na sali." },
                { t: "„Wiesz, że faceci często zaniedbują swoje żony?”", why: "Uogólnienie, które łatwo zbyć. Brak w nim konkretu o nim." }
              ],
              tony: "Zapytał wprost, jaką rolę Callum odegrał w tym, że żona jest bardziej „męska”. Od razu dodał, że nie chodzi o robienie z siebie winnego, tylko o branie 100% odpowiedzialności, bo partnerzy są w pętli i wzajemnie na siebie wpływają. Każdą szczerą odpowiedź nagradzał brawami. Callum: „Jest długa lista”. Robbins: to świetnie, bo skoro wie, co to jest, może to zmienić.",
              explain: "„Nie robimy z ciebie winnego, bierzemy odpowiedzialność” to rozróżnienie, które pozwala klientowi przyznać się do rzeczy bez zamykania się. Odpowiedzialność daje mu wpływ.",
              src: "yt", ch: "Interwencja 01, cz. 2"
            }
          ]
        },
        {
          id: "yt01l2", title: "Konkret zamiast wymówek",
          items: [
            { type: "learn", title: "Co Robbins uczy przy okazji",
              body: [
                "Przy pierwszym przyznaniu się Calluma Robbins robi krótki wykład dla sali. Mówi, że partnerka potrzebuje trzech rzeczy: czuć się <b>bezpiecznie</b>, czuć się <b>widziana</b> i czuć się <b>zrozumiana</b> lub doceniona.",
                "Przywołuje też badania małżeństw Johna i Julie Gottmanów i ich „czterech jeźdźców”, czyli zachowania, które zapowiadają rozpad związku:"
              ],
              keys: ["<b>Krytyka</b>: atak na osobę, a nie na zachowanie.", "<b>Pogarda</b>: przewracanie oczami, sarkazm wobec partnera.", "<b>Defensywność</b>: „Wcale tak nie robię!” – „Robisz!”.", "<b>Mur milczenia</b> (stonewalling): zamknięcie się, wyjście, brak reakcji."],
              note: "Robbins mówi też o różnicach w mózgach kobiet i mężczyzn. Traktuj to jako jego ramę do rozmowy, a nie ustaloną naukę."
            },
            { id: "yt01-4", type: "mc", tech: "Rozpoznanie wzorca",
              dialog: [["K", "Jedna rzecz: kiedy ona próbuje coś mi powiedzieć, wychodzę. Myślę sobie: a, pal to licho, idę do pracy."]],
              q: "Którego z „czterech jeźdźców” Gottmanów to przykład?",
              opts: [
                { t: "Muru milczenia: wycofania się i wyjścia z rozmowy.", ok: true },
                { t: "Krytyki.", why: "Callum jej nie atakuje. On znika z rozmowy." },
                { t: "Defensywności.", why: "Nie broni się słowami. Całkiem przerywa kontakt." },
                { t: "Pogardy.", why: "Blisko, bo Robbins mówi, że wyjście jest odbierane jako brak szacunku. Ale sam mechanizm to wycofanie się." }
              ],
              tony: "Najpierw rozbroił napięcie ironią („No, to naprawdę buduje głęboką relację”). Potem wytłumaczył, że wyjście w trakcie rozmowy partnerka odbiera jako brak szacunku i pogardę, i że według Gottmanów większość osób, które się tak zamykają, to mężczyźni. Na koniec dał prostą regułę: postaw granicę i powiedz sobie: „Już tego nie robię”.",
              explain: "Nazwanie wzorca konkretną kategorią pomaga klientowi zobaczyć, że to nie drobiazg, tylko jeden z najmocniejszych sygnałów rozpadu.",
              src: "yt", ch: "Interwencja 01, cz. 2"
            },
            { id: "yt01-5", type: "mc", tech: "Granica (line in the sand)",
              q: "Robbins opowiada o swoim pierwszym związku i o różnych zasadach wyniesionych z domu. Jaką jedną granicę, której nie wolno przekraczać, poleca każdej parze?",
              opts: [
                { t: "Nigdy nie grozić odejściem ani rozstaniem.", ok: true },
                { t: "Nigdy nie podnosić głosu.", why: "Sam mówi, że w jego domu krzyczano, a różne pary mają różne zasady. Uniwersalną granicą jest coś innego." },
                { t: "Nigdy nie kłócić się przy dzieciach.", why: "Rozsądne, ale nie o tym mówi w tej interwencji." },
                { t: "Zawsze rozwiązywać kłótnię przed snem.", why: "To była zasada z jego rodzinnego domu, którą podał jako przykład, a nie uniwersalna granica." }
              ],
              tony: "Wyjaśnił to na demonstracji z popychaniem: gdy jedna osoba grozi rozstaniem, druga zaczyna się chronić i też kładzie rękę na „przycisku”, a związek zbliża się do katastrofy. Dlatego: możesz powiedzieć wszystko inne, ale nie grozisz związkiem.",
              explain: "Różnimy się modelami świata wyniesionymi z domu. Zamiast spierać się, czyj model jest dobry, para ustala kilka granic, których nikt nie przekracza.",
              src: "yt", ch: "Interwencja 01, cz. 3"
            },
            { id: "yt01-6", type: "mc", tech: "Przecięcie racjonalizacji",
              dialog: [["C", "Daj mi jeszcze dwie rzeczy, które mógłbyś zmienić."], ["K", "No… za dużo pracuję."]],
              q: "Co mówisz?",
              opts: [
                { t: "„Chodzi o pracę czy o brak obecności?”", ok: true },
                { t: "„Ile godzin tygodniowo pracujesz?”", why: "Bierzesz wymówkę dosłownie i zaczynasz rozmawiać o grafiku zamiast o tym, czego brakuje żonie." },
                { t: "„Praca jest ważna, nie obwiniaj się za to.”", why: "Zdejmujesz z niego odpowiedzialność, którą przed chwilą zaczął brać." },
                { t: "„Może czas zmienić pracę?”", why: "Rozwiązujesz nie ten problem." }
              ],
              tony: "Od razu zapytał: praca czy brak obecności? I zapytał kobiety na sali, co tak naprawdę znaczy „za dużo pracujesz”. Odpowiedź: za mało uwagi. Dorzucił historię rozmowy z Anthonym Hopkinsem o tym, że zamiast traktować potrzebę uwagi jako ciężar, można się cieszyć, że partnerka jej chce, i dawać ją z pełną obecnością.",
              explain: "„Za dużo pracuję” to bezpieczna, społecznie akceptowana odpowiedź. Twoja rola to przetłumaczyć ją na prawdziwą potrzebę, której nie zaspokaja.",
              src: "yt", ch: "Interwencja 01, cz. 4"
            }
          ]
        },
        {
          id: "yt01l3", title: "Działanie teraz i test",
          items: [
            { id: "yt01-7", type: "mc", tech: "Działanie w szczytowym stanie",
              dialog: [["N", "Robbins każe Callumowi zamknąć oczy i pomyśleć o tym, co najbardziej kocha w żonie, poza wszystkimi ocenami i oczekiwaniami."]],
              q: "Callum jest teraz w stanie miłości i jasności. Co robisz?",
              opts: [
                { t: "„Wyjmij telefon i zadzwoń do niej teraz. Liderzy idą pierwsi. Nie czekasz na dobry moment.”", ok: true },
                { t: "„Zapisz sobie, co jej powiesz po powrocie do domu.”", why: "Za kilka dni stan opadnie, a stare wzorce wrócą. Notatka to nie to samo co działanie." },
                { t: "„Zastanów się, kiedy będzie najlepszy moment na tę rozmowę.”", why: "Szukanie dobrego momentu to wzorzec odkładania, z którym właśnie pracujesz." },
                { t: "„Porozmawiajmy jeszcze, jak ona może zareagować.”", why: "Wpychasz go w analizę i obawy, kiedy jest w najlepszym możliwym stanie do działania." }
              ],
              tony: "Kazał mu od razu wyjąć telefon i zadzwonić. Zasada dla całej sali: idziesz pierwszy, bo tak robią liderzy, i nie czekasz na później. Przy okazji opowiedział, jak sam nauczył się robić odwrotnie, niż podpowiada mu głowa w złości: zamiast wyjść, poszedł za żoną i znalazł ją płaczącą w garderobie.",
              explain: "Decyzja bez natychmiastowego działania szybko słabnie. Pierwszy krok zrobiony w szczytowym stanie staje się referencją: „zrobiłem to”.",
              src: "yt", ch: "Interwencja 01, cz. 6–7"
            },
            { id: "yt01-8", type: "mc", tech: "Korekta w trakcie działania",
              dialog: [["N", "Żona śpi (w Szkocji jest 3:15), więc Callum nagrywa jej wiadomość. Przeprasza krótko, a potem długo i pięknie opowiada o wspólnych wspomnieniach: Cairngorms, studia, pierwszy pocałunek, Disneyland."]],
              q: "Wiadomość jest wzruszająca. Co robisz?",
              opts: [
                { t: "Wchodzisz w trakcie: „Powiedz jej to, co powiedziałeś nam: konkretnie, w czym zawiodłeś i co od teraz zmienisz.”", ok: true },
                { t: "Pozwalasz mu skończyć. Ważne, że w ogóle zadzwonił.", why: "Wspomnienia są piękne, ale bez wzięcia odpowiedzialności i deklaracji zmiany żona usłyszy nostalgię, a nie zmianę." },
                { t: "Po skończeniu mówisz: „Świetnie, następnym razem bądź bardziej konkretny”.", why: "Następnego razu może nie być. Korekta działa najlepiej, póki on jeszcze mówi." }
              ],
              tony: "Przerwał mu w trakcie i poprosił, żeby powiedział jej konkretnie, w czym był „dupkiem” i czego już nie będzie robił. Callum zmienił kurs: obiecał być bardziej obecny, skupiać się tylko na niej, nie patrzeć na inne kobiety i stać mocno, nawet gdy ona przyjdzie z całą siłą. Później Sage dodała: przeprosiny działają, kiedy są za coś konkretnego.",
              explain: "Klienci w emocjach często uciekają w bezpieczną część, czyli w to, co miłe. Coach pilnuje, żeby w działaniu znalazło się to, co trudne: konkretne przyznanie i konkretna zmiana.",
              src: "yt", ch: "Interwencja 01, cz. 8"
            },
            { id: "yt01-9", type: "mc", tech: "Przygotowanie na test (future pacing)",
              q: "Callum nagrał wiadomość. Sala bije brawo. Jak zabezpieczasz zmianę na koniec?",
              opts: [
                { t: "Uprzedzasz: „Zostaniesz przetestowany. To nie będzie złośliwość, tylko sprawdzenie, czy to nie była historia z seminarium. Kiedy przyjdzie test, rób to, co teraz: spokojna obecność i »nigdzie się nie wybieram«”.", ok: true },
                { t: "Kończysz na brawach, bo stan jest świetny.", why: "Pierwszy konflikt w domu zderzy się z euforią z sali i Callum może uznać, że „nie działa”." },
                { t: "„Jeśli ona nie odpowie dobrze, wróć do mnie.”", why: "Przygotowujesz go na porażkę, zamiast dać mu sposób zachowania w trudnym momencie." }
              ],
              tony: "Powiedział mu wprost, że teraz, kiedy stanął na wysokości zadania, zostanie przetestowany. Jeśli uzna test za złośliwość, przegapi jego sens. Spójność sprawi, że zmiana stanie się prawdziwa. Kiedy żona go sprawdzi, ma zrobić to, co na scenie: „Kocham cię, nigdzie się nie wybieram, idziemy tylko głębiej”, z obecnością, czyli w połączeniu i spokoju.",
              explain: "To test przyszłości z kroku 6 NAC połączony ze szczepionką: klient wie z góry, że trudny moment nadejdzie, i ma gotową reakcję.",
              src: "yt", ch: "Interwencja 01, cz. 9"
            },
            { id: "yt01-10", type: "order", tech: "Struktura interwencji",
              q: "Ułóż ruchy Robbinsa z tej interwencji w kolejności.",
              items: ["Uznaje decyzję i podnosi poprzeczkę: sama decyzja to za mało", "Wydobywa zasób: co sprawiło, że zostajesz", "Przenosi odpowiedzialność: jaka jest twoja rola w pętli", "Wyciąga konkretne zachowania do zmiany", "Każe działać od razu: telefon teraz", "Koryguje działanie w trakcie: konkret przewinień i zmiany", "Przygotowuje na test w przyszłości"],
              explain: "Ten szkielet możesz przenieść do sesji 1:1 o związku: zasób, odpowiedzialność, konkret, działanie, korekta, test.",
              src: "yt", ch: "Interwencja 01"
            },
            { id: "yt01-11", type: "write", tech: "Przeprosiny, które budują bezpieczeństwo",
              ctx: "Korzystając ze wskazówek Robbinsa i Sage, napisz wiadomość, którą Callum mógłby powiedzieć żonie po powrocie, twarzą w twarz.",
              q: "Napisz 4–6 zdań.",
              hints: ["Nazywa konkretne zachowania (wychodzenie z rozmowy, brak obecności, patrzenie na inne)", "Przeprasza za konkret, a nie ogólnie „za wszystko”", "Mówi, co od teraz będzie robił inaczej", "Nie obwinia jej i nie tłumaczy się", "Daje poczucie bezpieczeństwa: nigdzie się nie wybiera"],
              model: ["„Kochanie, chcę ci powiedzieć coś wprost. Kiedy próbowałaś ze mną rozmawiać, wychodziłem do pracy. Uciekałem w pracę zamiast być z tobą. I patrzyłem na inne kobiety. Przepraszam cię za to, wiem, jak bardzo musiało cię to ranić. Od teraz zostaję w rozmowie, nawet kiedy jest trudno, i moja uwaga jest przy tobie. Nigdzie się nie wybieram.”"],
              src: "yt", ch: "Interwencja 01, cz. 5 i 9"
            }
          ]
        }
      ]
    }
    ,
    /* ───────── Lesley ───────── */
    {
      id: "yt02", title: "Lesley: kryzys, który tworzy na nowo", sub: "Pytania · tożsamość · nadawanie sensu",
      video: "https://www.youtube.com/watch?v=hewG8a7FoHs", videoTitle: "She Lost $300 Million, Then Got Cancer. 2 Years Later She Had $1 Billion to Invest", len: "10 min",
      lessons: [
        {
          id: "yt02l1", title: "Złe pytanie, nowa rama",
          items: [
            { type: "learn", title: "Kontekst",
              body: ["Lesley przez 20 lat inwestowała i nigdy nie straciła pieniędzy. W pół roku straciła 300 mln dolarów, musiała zwolnić 1500 osób, a pod koniec roku usłyszała diagnozę: zaawansowany rak piersi. Na scenie opowiada, jak z tego wyszła. To krótka wymiana, ale widać w niej kilka precyzyjnych ruchów."]
            },
            { id: "yt02-1", type: "mc", tech: "Słuchanie tożsamości",
              dialog: [["K", "Przez 20 lat zarabiałam na każdej inwestycji. Nigdy nie straciłam pieniędzy. Moja tożsamość…"], ["K", "…polegała na tym, że jestem dobrą inwestorką."]],
              q: "Na co zwracasz uwagę w tym fragmencie?",
              opts: [
                { t: "Na słowo „tożsamość”: strata uderzyła nie tylko w pieniądze, ale w to, kim ona jest. Tam leży największy ból.", ok: true },
                { t: "Na kwotę 300 mln: trzeba ocenić skalę straty.", why: "Kwota robi wrażenie, ale ból nie wynika z liczby, tylko z tego, co strata oznacza dla jej obrazu siebie." },
                { t: "Na to, że przez 20 lat nie straciła, więc ma świetne umiejętności.", why: "To prawda, ale na razie kluczowe jest to, co się rozpadło: jej tożsamość." }
              ],
              tony: "Zareagował wyraźnym „Wow” dokładnie w chwili, gdy padło słowo „tożsamość”, i zaakcentował je dla sali. Wszystko, co działo się potem (zwolnienia, poczucie winy), wynikało z tego, że rozpadło się to, kim była.",
              explain: "Ludzie zrobią wszystko, żeby zachować spójność z tożsamością. Gdy tożsamość się rozpada, ból jest dużo większy niż sama strata.",
              src: "yt", ch: "Interwencja 02"
            },
            { id: "yt02-2", type: "mc", tech: "Przerwanie pytania",
              dialog: [["K", "Wygrałam z rakiem, wróciłam do pracy, a potem mnie zwolnili. Ile razy można dostać w twarz w ciągu 18 miesięcy?"]],
              q: "Co robisz z tym pytaniem?",
              opts: [
                { t: "Przerywasz od razu, lekko: „To nie jest dobre pytanie. Bo możesz dostać jeszcze jeden.”", ok: true },
                { t: "„Rzeczywiście, to dużo jak na jedną osobę.”", why: "Potwierdzasz założenie pytania, że jest ofiarą ciosów. Wzmacniasz jej stan." },
                { t: "Ignorujesz je i słuchasz dalej.", why: "Pytania kierują skupieniem. Zostawione bez reakcji utrwalają się u niej i u słuchaczy." }
              ],
              tony: "Uciął w pół sekundy: to nie jest dobre pytanie, bo możesz dostać kolejny. Lesley od razu się zaśmiała, przyznała, że to złe pytanie, i opowiedziała dalej z innego miejsca: zainwestowała w siebie i dwa miesiące później dostała propozycję prowadzenia funduszu z miliardem dolarów.",
              explain: "Pytanie „ile razy można dostać w twarz?” zakłada, że będzie dostawać dalej. Szybkie, lekkie przerwanie nie zawstydza, a zmienia kierunek.",
              src: "yt", ch: "Interwencja 02"
            },
            { id: "yt02-3", type: "mc", tech: "Nadanie sensu",
              q: "Jak Robbins podsumowuje historię Lesley, żeby nadała się dla całej sali?",
              opts: [
                { t: "Ubiera ją w podróż bohatera: było dobrze, wszystko się rozbiło, przyszło wezwanie, które wcale nie wyglądało jak wezwanie, i nastąpił wzrost. Kryzys albo cię niszczy, albo tworzy na nowo.", ok: true },
                { t: "Mówi, że miała szczęście, że trafiła na dobrych ludzi.", why: "Docenia mentorów, ale głównym przesłaniem jest jej wybór: przebić się przez kryzys." },
                { t: "Analizuje błędy inwestycyjne, które popełniła.", why: "Na scenie nie chodzi o techniczną analizę, tylko o znaczenie, które nadaje się kryzysowi." }
              ],
              tony: "Nazwał to podróżą bohatera i dodał zasadę: kiedy myślisz, że dzieje się najgorsze, kryzys jest po to, żebyś miał przełom. Ale jeśli tego nie wiesz, nie szukasz i nie przebijesz się, kryzys cię zniszczy. Potem dołożył metaforę pór roku: niektórzy zamarzają zimą, a inni jeżdżą na nartach i budują firmę.",
              explain: "Ta sama sytuacja z innym znaczeniem daje inne emocje i inne działania. Metafora zimy i nart to reframing: bodziec się nie zmienia, zmienia się reakcja.",
              src: "yt", ch: "Interwencja 02"
            }
          ]
        }
      ]
    },

    /* ───────── Chen ───────── */
    {
      id: "yt-chen", title: "Chen: rozwód z historią", sub: "Trauma · wzorzec w związkach · nowa tożsamość", len: "film do ustalenia",
      lessons: [
        {
          id: "chen-l1", title: "Strategia i teraźniejszość",
          items: [
            { type: "learn", title: "Kontekst i granica kompetencji",
              body: [
                "Chen, 49 lat, z Malezji. W dzieciństwie wielokrotnie się przeprowadzała, jako nastolatka doświadczyła wykorzystania seksualnego przez mężczyznę z domu, w którym mieszkała, a matka kazała jej „wytrzymać”. W związkach zawsze odchodzi pierwsza.",
                "Robbins mówi w tej interwencji, że wielokrotne opowiadanie traumy u terapeuty tylko ją wzmacnia. To jego pogląd. Współczesne terapie traumy pracują z takimi wspomnieniami w kontrolowany sposób i bywają bardzo skuteczne."
              ],
              note: "Jako coach: przy przemocy seksualnej, myślach samobójczych czy ciężkiej traumie Twoją rolą jest też polecić specjalistę od traumy. Ta lekcja uczy ruchów Robbinsa, a nie zastępuje terapii."
            },
            { id: "chen-1", type: "mc", tech: "Wydobycie strategii",
              dialog: [["K", "Pokażę dziś swoją bliznę, swój ból, żeby mieć przełom."]],
              q: "Zanim Chen zacznie opowiadać, co warto sprawdzić?",
              opts: [
                { t: "Jej strategię odpuszczania: „Czy po drugiej stronie bólu jest przyjemność?”", ok: true },
                { t: "Od kiedy ma ten problem.", why: "Daty niewiele dadzą. Ważniejsze jest, jak jej układ nerwowy przechodzi od bólu do ulgi." },
                { t: "Czy jest gotowa o tym mówić przy wszystkich.", why: "Sama powiedziała, że jest. Pytanie o gotowość mogłoby ją wręcz zawahać." }
              ],
              tony: "Zapytał właśnie o to. Chen od razu go poprawiła: najpierw ból, potem ulga, potem przyjemność. Robbins wyjaśnił sali, że każdy ma strategię odpuszczania, ale mało kto ją zna. U niej: ból wstrząsa, prawda daje ulgę, a potem pojawia się radość. Nie trzeba zostawać w bólu, ale trzeba się przez niego przebić.",
              explain: "Znając strategię klienta, możesz prowadzić go jego własną ścieżką, zamiast narzucać swoją.",
              src: "yt", ch: "Chen, cz. 1"
            },
            { id: "chen-2", type: "mc", tech: "Reframing intencji",
              dialog: [["K", "Zadzwoniłam do mamy i powiedziałam, co ten człowiek mi robi. A ona: „Wytrzymaj jeszcze pół roku”."]],
              q: "Jak Robbins pracuje z tym, co zrobiła matka?",
              opts: [
                { t: "Pyta, czy „wytrzymać” było częścią kultury, w której matka sama dorastała. Nie usprawiedliwia, tylko pokazuje, że matka mogła tak widzieć świat. I od razu mówi: „Tak mi przykro, że przez to przeszłaś”.", ok: true },
                { t: "Mówi, że matka zawiodła i ma prawo jej nie wybaczyć.", why: "To może być prawda, ale utrwala ranę, która filtruje dziś wszystkie jej związki." },
                { t: "Przechodzi do tematu, bo matka to nie jest główny problem.", why: "Matka okaże się kluczem do jej obecnego wzorca w związkach." }
              ],
              tony: "Powiedział, że to, co zrobiła matka, wydaje się nieludzkie, a jego przypuszczenie, „tylko przypuszczenie”, jest takie, że matka uważała to za normalny bieg świata. Potem przeprosił Chen w imieniu wszystkich mężczyzn za to, co zrobił ten człowiek.",
              explain: "Reframing intencji nie zmienia faktów i nie bagatelizuje krzywdy. Zmienia znaczenie, które klientka nosi w sobie („nie byłam ważna”).",
              src: "yt", ch: "Chen, cz. 2"
            },
            { id: "chen-3", type: "mc", tech: "Oddzielenie przeszłości od teraźniejszości",
              q: "Robbins mówi Chen, że skóra wymienia się co miesiąc, a każda komórka ciała w ciągu kilku lat, i że „mówi do wersji Chen z 2024 roku”. Po co?",
              opts: [
                { t: "Żeby oddzielić obecną Chen od tamtego doświadczenia: w jej ciele nie ma już nic, czego tamten człowiek dotknął. Zostało tylko wspomnienie, któremu ona „wynajmuje miejsce” w głowie.", ok: true },
                { t: "Żeby przekazać wiedzę o biologii.", why: "Biologia to tylko nośnik. Chodzi o nowe znaczenie: to już nie jest jej ciało z tamtego czasu." },
                { t: "Żeby zmienić temat na coś lżejszego.", why: "Nie zmienia tematu, tylko zmienia znaczenie tego tematu." }
              ],
              tony: "Dodał: czemu wynajmować miejsce w głowie komuś, kto nie miał w sobie człowieczeństwa? I pokazał, jak ta historia stała się filtrem na wszystkich mężczyzn, choć większość mężczyzn taka nie jest.",
              explain: "To potężny reframing tożsamości: krzywda dotyczy dawnej wersji, a klientka dzisiaj jest kimś innym, z innym ciałem i innymi zasobami.",
              src: "yt", ch: "Chen, cz. 2"
            },
            { id: "chen-4", type: "mc", tech: "Przerwanie transu przeszłości",
              dialog: [["K", "(płacząc) I wtedy miałam tylko 18 lat…"]],
              q: "Chen znów wchodzi w historię. Co robisz?",
              opts: [
                { t: "„Ile masz teraz lat?” – „49.” – „To weź tę 49-latkę i rozejrzyj się. Co widzisz? Co czujesz od tych ludzi?”", ok: true },
                { t: "„Opowiedz, co było dalej.”", why: "Pozwalasz jej wejść głębiej w stan 18-latki. Opowiadanie historii po raz kolejny ją wzmacnia." },
                { t: "„Weź głęboki oddech i uspokój się.”", why: "Lepsze niż nic, ale nie przenosi jej w teraźniejszość ani nie łączy z tym, co ją otacza." }
              ],
              tony: "Zatrzymał ją kilka razy: „Pauza. Wyjdź na chwilę z historii. Rozejrzyj się.” Kazał jej poczuć miłość tysięcy ludzi z ponad 80 krajów. Potem zapytał o wiek i kazał patrzeć oczami 49-latki, nie 18-latki. Zgodził się, żeby dokończyła historię, ale co jakiś czas przerywał, żeby znów poczuła ten moment.",
              explain: "Przerwanie wzorca połączone z kierowaniem zmysłów na teraźniejszość. Pytanie o wiek wyciąga ją z tożsamości skrzywdzonej dziewczyny.",
              src: "yt", ch: "Chen, cz. 3"
            }
          ]
        },
        {
          id: "chen-l2", title: "Wzorzec i nowa historia",
          items: [
            { id: "chen-5", type: "mc", tech: "Podważenie przekonania",
              dialog: [["K", "W związkach zawsze sobie mówię, że on mnie nie kocha. A on kocha. Ale mówię, że nie, i mam wymówkę, żeby odejść. Chcę odejść, zanim on mnie porzuci."]],
              q: "Co mówisz?",
              opts: [
                { t: "„Wyprzedzasz cios. Odchodzisz, zanim on odejdzie. A co, jeśli on nigdy by nie odszedł? Co, jeśli naprawdę cię kochał?”", ok: true },
                { t: "„Dlaczego nie potrafisz zaufać?”", why: "Pytanie „dlaczego” każe jej znów wyliczać rany z przeszłości." },
                { t: "„Następnym razem po prostu zostań.”", why: "Rada bez zmiany przekonania. Wzorzec uruchomi się szybciej niż postanowienie." }
              ],
              tony: "Nazwał strategię („wyprzedzasz cios, jesteś szybsza od nich”) i zadał pytania, na które Chen nie miała odpowiedzi: „Nie wiem”. Wyjaśnił, że po bolesnych doświadczeniach widzimy nowego partnera przez filtr przeszłości i reagujemy, jakby to było to samo.",
              explain: "Pytania „a co, jeśli…” budzą wątpliwość wobec przekonania „i tak mnie porzuci”, czyli podważają jego nogi.",
              src: "yt", ch: "Chen, cz. 4"
            },
            { id: "chen-6", type: "mc", tech: "Sześć potrzeb",
              q: "Robbins mówi Chen, że jej ból stał się nałogiem. Które potrzeby według niego zaspokaja trzymanie się historii?",
              opts: [
                { t: "Więź (z samą sobą), pewność (to znane), różnorodność (przytłoczenie) i znaczenie (bo to tak bolesne).", ok: true },
                { t: "Rozwój i wkład.", why: "Te potrzeby ducha są zaspokajane przez coś zupełnie innego. Ból karmi potrzeby osobowości." },
                { t: "Tylko pewność.", why: "Pewność tak, ale nałóg powstaje, bo zaspokojone są cztery potrzeby naraz." }
              ],
              tony: "Dodał ważną obserwację: Chen jest osobą, która daje. Pozwala sobie zadbać o siebie tylko wtedy, gdy wystarczająco boli. Opowiedział, że sam kiedyś żył według reguły „poświęcenie to miłość”. Wniosek: trzeba zastąpić tę historię czymś, co zaspokoi te same potrzeby.",
              explain: "Ta sama logika co krok 4 NAC: nie zabierasz starego wzorca, dopóki nie ma nowego, który da te same potrzeby.",
              src: "yt", ch: "Chen, cz. 5", verify: true
            },
            { id: "chen-7", type: "mc", tech: "Spalić łodzie",
              q: "Chen podzieliła się historią przed tysiącami ludzi. Co robi Robbins, żeby ta historia nie wróciła?",
              opts: [
                { t: "Prosi o decyzję: to był ostatni raz, kiedy opowiedziała tę historię. Potem pyta: „Jaka jest nowa historia?” Chen: „Jestem warta miłości. I potrafię kochać.”", ok: true },
                { t: "Zaleca, żeby opowiadała ją jeszcze kilka razy, aż przestanie boleć.", why: "Robbins uważa, że każde powtórzenie wzmacnia historię. Proponuje odcięcie." },
                { t: "Mówi, że to wystarczy, bo już się wygadała.", why: "Bez nowej historii pustka szybko wypełni się starą." }
              ],
              tony: "Użył metafory: żeby zdobyć wyspę, trzeba spalić łodzie. „Rozwiedź się ze swoją historią i poślub prawdę o tym, kim jesteś dziś.” I dodał: nie odwiedzasz swojej historii rozwodowej. Potem dał regułę na strach: biegnij w stronę tego, czego się boisz, jak przy chodzeniu po ogniu.",
              explain: "Odcięcie starego wzorca plus natychmiastowe zainstalowanie nowej historii tożsamości. Bez kroku 4 (nowej alternatywy) cięcie nie wystarczy.",
              src: "yt", ch: "Chen, cz. 5–6"
            },
            { id: "chen-8", type: "mc", tech: "Referencja z teraźniejszości",
              dialog: [["C", "Odblokowałaś już te zamki na sercu, czy chcesz to zrobić teraz?"], ["K", "To będzie trwało, powoli, stopniowo."]],
              q: "Jak wzmacniasz jej przekonanie, że może to zrobić?",
              opts: [
                { t: "„Na sali jest 6 tysięcy osób, a wywołałem dziś trzy. Ty jesteś jedną z nich. Sama to sprawiłaś. Więc tak samo możesz sprawić, że pojawi się związek.”", ok: true },
                { t: "„Dobrze, nie spiesz się.”", why: "Akceptujesz przekonanie „to musi trwać”, które może być kolejną formą odkładania." },
                { t: "„Nie, musisz to zrobić teraz.”", why: "Nacisk bez nowej referencji wywoła opór." }
              ],
              tony: "Użył świeżego dowodu: Chen czekała pięć lat na ten moment i została wybrana. Skoro sprawiła to, może sprawić związek: przez jasną wizję tego, czego chce, a nie czego nie chce, i zobowiązanie do zrobienia, co trzeba.",
              explain: "Najlepsza noga nowego przekonania to referencja, którą klient właśnie przeżył. Wykorzystaj to, co dzieje się na sesji.",
              src: "yt", ch: "Chen, cz. 7"
            },
            { id: "chen-9", type: "mc", tech: "100% odpowiedzialności w związku",
              q: "Robbins mówi, że 80% sukcesu w związku to wybór. Co ma na myśli jako najważniejszy wybór?",
              opts: [
                { t: "To, którą część siebie wnosisz do związku: dawną, zranioną, czy obecną, silną i kochającą. To, którą część siebie wnosisz, wydobywa określoną część partnera.", ok: true },
                { t: "Wybór właściwego partnera.", why: "Mówi, że to drugi wybór. Pierwszy i ważniejszy dotyczy ciebie." },
                { t: "Wybór odpowiedniego momentu na związek.", why: "Nie o tym mówi." }
              ],
              tony: "Dodał: jeśli myślisz, że to koniec związku, zachowuj się jak na jego początku, a końca nie będzie. Na koniec zapytał Chen, którą wersję siebie wybiera. Odpowiedziała: obecną.",
              explain: "To samo co w interwencji z Callumem: zmiana zaczyna się od siebie, bo jesteśmy w pętli z partnerem.",
              src: "yt", ch: "Chen, cz. 7"
            }
          ]
        }
      ]
    },

    /* ───────── Trzy krótkie interwencje ───────── */
    {
      id: "yt-three", title: "Trzy krótkie przełomy", sub: "Kongruencja · głos z kreskówki · język, który więzi", len: "film do ustalenia",
      lessons: [
        {
          id: "three-l1", title: "Tina Marie i 93-letni ojciec",
          items: [
            { id: "tm-1", type: "mc", tech: "Kongruencja",
              dialog: [["K", "Ojciec oskarża mnie, że ukradłam mu dom. Zrobiłam to ćwiczenie: „Kocham cię, wybacz mi, dziękuję”. Nie zadziałało."]],
              q: "Co sprawdzasz?",
              opts: [
                { t: "„Jakim tonem i z jaką intensywnością to mówiłaś?”", ok: true },
                { t: "„Może to ćwiczenie nie jest dla ciebie.”", why: "Zakładasz, że problem jest w narzędziu, a nie w wykonaniu." },
                { t: "„Ile razy to powtórzyłaś?”", why: "Liczba powtórzeń nie pomoże, jeśli słowa nie zgadzają się z ciałem i głosem." }
              ],
              tony: "Od razu zapytał o ton i intensywność. Wyjaśnił sali: ludzie mówią „to nie działa”, a tak naprawdę zrobili to słowami, ale nie ciałem i nie głosem.",
              explain: "Słowa bez zgodnej fizjologii i tonu są puste. Kiedy technika „nie działa”, najpierw sprawdź wykonanie.",
              src: "yt", ch: "Tina Marie"
            },
            { id: "tm-2", type: "mc", tech: "Zmiana znaczenia przez kontekst",
              q: "Robbins pyta krótko: „Ile lat ma teraz ojciec?” (93). Co ta informacja zmienia?",
              opts: [
                { t: "Znaczenie jego zachowania: w tym wieku jest ogromna niepewność, a niepewność to strach. Wystraszeni ludzie często zachowują się jak wściekli i wymyślają najgorsze znaczenia.", ok: true },
                { t: "Nic. Wiek nie usprawiedliwia oskarżeń.", why: "Nie chodzi o usprawiedliwienie, tylko o inne odczytanie: to nie nienawiść, tylko strach." },
                { t: "To, że trzeba sprawdzić jego zdrowie psychiczne.", why: "Może to też ma sens, ale Robbins zmienia znaczenie dla Tiny, a nie diagnozuje ojca." }
              ],
              tony: "Wyjaśnił: ludzie w niepewności wymyślają znaczenia, nawet o tych, których kochają. Gdy ktoś jest przestraszony, zachowuje się agresywnie, a my reagujemy na złość, choć tak naprawdę to strach.",
              explain: "Pytanie o fakt kontekstowy potrafi w sekundę zmienić znaczenie i zdjąć z klientki poczucie, że jest znienawidzona.",
              src: "yt", ch: "Tina Marie"
            },
            { id: "tm-3", type: "mc", tech: "Opór i spokój",
              dialog: [["K", "Przestałam walczyć. Pomyślałam: nie kontrolujesz tego, odpuść. Poczułam spokój."]],
              q: "Dlaczego według Robbinsa to zadziałało?",
              opts: [
                { t: "Problemy potrzebują energii, żeby żyć. Im bardziej walczyła z rzeczywistością, tym dłużej problem trwał. Napięcie nikogo nie przekonuje, a spokój i brak osądzania mają wpływ długoterminowy.", ok: true },
                { t: "Bo ojciec się uspokoił.", why: "Nawet z nim jeszcze nie rozmawiała. Zmiana zaszła w niej." },
                { t: "Bo zrezygnowała z domu.", why: "Rezygnacja z kontroli to nie to samo, co rezygnacja z wartości. Chodzi o stan, z którego działa." }
              ],
              tony: "Zauważył: „Ona jeszcze mu nic nie powiedziała, a już jest wolna”. Ojciec poczuje jej spokój tak samo mocno jak to, czy dostał dom. Dodał narzędzie: oddychaj do serca przez 2–3 minuty, pomyśl o kilku rzeczach, za które jesteś wdzięczny, i zapytaj serce, co zrobić.",
              explain: "Zmiana stanu klientki przychodzi przed zmianą sytuacji. Sprawdzaj stan, a nie tylko plan działania.",
              src: "yt", ch: "Tina Marie"
            }
          ]
        },
        {
          id: "three-l2", title: "Kostium kąpielowy i głos z kreskówki",
          items: [
            { id: "sw-1", type: "mc", tech: "Przemieszanie submodalności",
              dialog: [["K", "Weszłam do domu w nowym kostiumie, a mama powiedziała, że wyglądam jak…"], ["N", "Głos zaczyna jej się łamać."]],
              q: "Co robisz, zanim wejdzie w ból?",
              opts: [
                { t: "„Zrób mi przysługę: opowiedz, co powiedziała mama, ale głosem Myszki Miki.” A potem: „Teraz jak Kaczor Donald.”", ok: true },
                { t: "Słuchasz, żeby mogła to z siebie wyrzucić.", why: "Przeżycie tego po raz kolejny w tym samym stanie wzmacnia ścieżkę neuronową." },
                { t: "„To musiało być straszne. Jak się wtedy czułaś?”", why: "Kierujesz ją prosto w stary stan." }
              ],
              tony: "Zrobił dokładnie to. Napięcie od razu pękło, kobieta zaczęła się śmiać i powiedziała, że już nie chce tego pamiętać. Robbins wyjaśnił: za każdym razem, gdy przywołujesz wspomnienie, trochę je zmieniasz, a stan, w którym to robisz, albo je pogarsza, albo przerywa wzorzec. Porównał to do zarysowania płyty CD.",
              explain: "To ten sam ruch, który ćwiczyłeś w dziale NAC (przerwanie wzorca). Tu widzisz, jak wygląda na żywo.",
              src: "yt", ch: "Kobieta, 54 lata"
            },
            { id: "sw-2", type: "mc", tech: "Od znaczenia do decyzji",
              dialog: [["K", "Teraz rozumiem. To był strach mamy. Bała się, że stanę się kimś, kim nie chciała, żebym była. Chroniła mnie."]],
              q: "Klientka ma nowe znaczenie. Jaki jest następny ruch?",
              opts: [
                { t: "„Jakie jest nowe znaczenie? Jaką decyzję teraz podejmujesz, która cię uwalnia?”", ok: true },
                { t: "„Świetnie, to by było na tyle.”", why: "Wgląd bez decyzji szybko blednie." },
                { t: "„Porozmawiaj o tym z mamą.”", why: "Być może kiedyś tak, ale najpierw zamień wgląd w jej własną decyzję." }
              ],
              tony: "Zapytał o nowe znaczenie i nową decyzję. Odpowiedź: „Pozwalam sobie być sobą i pozwalam innym być sobą”. Po drodze rozbroił problem porównywania się: zapytał salę, ile kobiet zastanawia się, co inne kobiety myślą o ich ubraniu (las rąk), a ilu mężczyzn (prawie nikt).",
              explain: "Każdy wgląd zamieniaj w decyzję. To ona zmienia zachowanie.",
              src: "yt", ch: "Kobieta, 54 lata"
            }
          ]
        },
        {
          id: "three-l3", title: "Andrea: język, który więzi",
          items: [
            { id: "an-1", type: "mc", tech: "Język i ślepa plamka",
              dialog: [["K", "Próbowałam wejść w taniec, ale nie mogłam. Chcę być bardziej kobieca, ale nie wiem jak."]],
              q: "Co mówisz?",
              opts: [
                { t: "„Twój język cię więzi. To nie tak, że nie mogłaś. Nie zrobiłaś tego, bo to niewygodne.”", ok: true },
                { t: "„Pokażę ci kilka kroków.”", why: "Problemem nie są umiejętności, tylko to, co mówi sobie w głowie." },
                { t: "„To normalne, wiele kobiet tak ma.”", why: "Normalizujesz i zostawiasz jej słowa nietknięte." }
              ],
              tony: "Opowiedział historię o soli: dziecko mówi „nie wiem, gdzie jest sól”, powtarza to sobie, otwiera szafkę i soli nie widzi, choć stoi na wprost. Oczy widzą, ale umysł nie dopuszcza, bo powtarzanie stworzyło ślepą plamkę. Potem: „Zrób to, co łatwe, a życie będzie trudne. Zrób to, co trudne, a życie będzie łatwe.”",
              explain: "„Próbowałam”, „nie mogłam”, „nie wiem jak” to hipnoza, którą klient sam sobie robi. Wyłapuj te słowa.",
              src: "yt", ch: "Andrea"
            },
            { id: "an-2", type: "mc", tech: "Zadanie domowe",
              q: "Jakie zadanie daje Andrei Robbins i dlaczego działa?",
              opts: [
                { t: "Tańczyć nago w domu, sama, z muzyką, raz do trzech razy w tygodniu przez 6 tygodni. Bez publiczności nie ma oceny, a regularność buduje nowe referencje i wyciąga ją z głowy do ciała.", ok: true },
                { t: "Chodzić na zajęcia taneczne z grupą.", why: "W grupie wróci porównywanie się i ocena. Zadanie ma ją od tego odciąć." },
                { t: "Codziennie pisać afirmacje „Jestem kobieca”.", why: "Robbins mówi, że ruch jest sekretem wyjścia z głowy. Afirmacje zostają w głowie." }
              ],
              tony: "Dał bardzo konkretną częstotliwość i czas: co najmniej raz w tygodniu, najlepiej dwa–trzy, przez 6 tygodni. „I nie będziesz już miała ze mną tej rozmowy.” Dodał, że ruch, śpiew i śmiech to sposoby na wyłączenie przegrzanego umysłu.",
              explain: "Dobre zadanie domowe jest konkretne (co, gdzie, ile razy, jak długo), bezpieczne i buduje referencje dla nowego przekonania.",
              src: "yt", ch: "Andrea"
            },
            { id: "an-3", type: "mc", tech: "Porównywanie się",
              q: "Robbins opowiada, jak na jachcie usłyszał, że jego przyjaciel zarobił 25 mln na filmie, i nagle poczuł się przybity. Jaki płynie z tego wniosek dla Andrei?",
              opts: [
                { t: "Nigdy nie porównujemy się uczciwie, zwłaszcza gdy znaczenie jest naszą główną wartością. Porównuj się z następnym poziomem siebie, a nie z innymi.", ok: true },
                { t: "Trzeba porównywać się z najlepszymi, żeby się motywować.", why: "Robbins mówi wprost: jeśli chcesz radości, przestań się porównywać z innymi." },
                { t: "Pieniądze nie dają szczęścia.", why: "To nie jest jego punkt. Chodzi o niesprawiedliwe porównania, które odbierają radość." }
              ],
              tony: "Dodał, że pracuje z najbardziej znanymi ludźmi świata i ich główny problem jest ten sam: gonili za znaczeniem, myśląc, że da im miłość, a to nie działa.",
              explain: "Przy kliencie, który ciągle się porównuje, sprawdź, czy znaczenie nie stoi na szczycie jego potrzeb.",
              src: "yt", ch: "Andrea"
            }
          ]
        }
      ]
    },

    /* ───────── Eileen ───────── */
    {
      id: "yt-eileen", title: "Eileen: od pchania do przyciągania", sub: "Opór · paradoks · kalibracja ciała", len: "film do ustalenia",
      lessons: [
        {
          id: "ei-l1", title: "Paliwo z bólu",
          items: [
            { type: "learn", title: "Kontekst",
              body: ["Eileen jako dziecko była sparaliżowana od pasa w dół. Od dekad walczy o obecność dzieci z niepełnosprawnościami w przemyśle rozrywkowym. Mówi, że utknęła pod „sufitem”. Jej ból napędza jej misję i nie chce go oddać."]
            },
            { id: "ei-1", type: "mc", tech: "Nie kłócić się z oporem",
              dialog: [["C", "Nie musisz przeżywać tego wspomnienia na nowo. Zmień ton, obraz…"], ["K", "Nie mogę tego zmienić, bo to napędza mój cel."]],
              q: "Co robisz?",
              opts: [
                { t: "„Myślisz, że to napędza twój cel. Opowiadaj dalej, a odkryjemy głębszą prawdę.”", ok: true },
                { t: "„Mylisz się, ból nie jest potrzebny do celu.”", why: "Wchodzisz w spór o przekonanie, które ona broni całym życiem. Przegrasz." },
                { t: "„W porządku, zostawmy to.”", why: "Odpuszczasz akurat tam, gdzie leży jej blokada." }
              ],
              tony: "Nie podjął kłótni. Jednym słowem („myślisz”) zasiał wątpliwość, a potem zaprosił ją, żeby mówiła dalej. Wiedział, że jej własne słowa pokażą mu mechanizm.",
              explain: "Aikido z rozdziału o oporze w praktyce: nie walczysz, tylko podążasz i zbierasz informacje, a przekierowanie przyjdzie później.",
              src: "yt", ch: "Eileen, cz. 2"
            },
            { id: "ei-2", type: "mc", tech: "Słuchanie metafor",
              dialog: [["K", "To dzięki mojemu twardemu łbowi walącemu w betonową ścianę, walce, walce i walce, widać dziś więcej osób z niepełnosprawnościami na ekranie."]],
              q: "Co mówi Ci jej język?",
              opts: [
                { t: "Jej strategia to pchanie z bólu i siłowanie się. To przyniosło efekty, ale to też jest jej sufit.", ok: true },
                { t: "Że jest bardzo skuteczna i powinna robić to dalej.", why: "Była skuteczna, ale sama mówi, że utknęła. Ta sama strategia nie zaprowadzi jej dalej." },
                { t: "Że ma problem ze złością.", why: "To zbyt szybka diagnoza. Jej metafora mówi o sposobie działania, nie o konkretnej emocji." }
              ],
              tony: "Zauważył to i wrócił do tego później: to, co cię tu doprowadziło, nie zaprowadzi cię tam, dokąd chcesz. Teraz czas na przyciąganie zamiast pchania, na elegancję i mniej wysiłku, na przyjemność z poprawiania świata zamiast bólu.",
              explain: "Metafory klienta (ściana, walka, łeb) to mapa jego strategii. Słuchaj ich dosłownie.",
              src: "yt", ch: "Eileen, cz. 2–3"
            },
            { id: "ei-3", type: "mc", tech: "Wydobycie przekonania-zasobu",
              q: "Eileen mówi o dzieciach, które po wygraniu walki o życie trafiają do świata, który je odrzuca. Jakie pytanie zadał Robbins?",
              opts: [
                { t: "„Jak to się stało, że ty tak nie skończyłaś? Jakie przekonanie cię przeprowadziło?”", ok: true },
                { t: "„Ile jest takich dzieci?”", why: "Statystyki utrzymują ją w trybie walki." },
                { t: "„Co możemy zrobić dla tych dzieci?”", why: "Strategia zanim zobaczysz, z jakiego stanu działa klientka." }
              ],
              tony: "Odpowiedź: mama mówiła jej, że to spotkało ją, bo była najsilniejsza z ośmiorga dzieci. Robbins: „Jaką masz wspaniałą mamę”. To przekonanie było zasobem, a nie ból.",
              explain: "Pytanie „jak to się stało, że ty nie…?” odwraca uwagę od problemu do zasobu, który klient już ma.",
              src: "yt", ch: "Eileen, cz. 2"
            }
          ]
        },
        {
          id: "ei-l2", title: "Paradoks, ciało i „może”",
          items: [
            { id: "ei-4", type: "mc", tech: "Paradoksalna intencja",
              q: "Robbins proponuje Eileen myśl: „Może nie potrzebuję już bólu, żeby się napędzać”. Wie, że ona ją odrzuci. Jak to podaje?",
              opts: [
                { t: "„Nie proszę cię, żebyś w to uwierzyła. Myślę, że nie powinnaś. Opieraj się tej myśli, ile możesz. Ale zastanawiam się, czy możesz rozważyć możliwość, że…”", ok: true },
                { t: "„Musisz w to uwierzyć, inaczej nie ruszysz.”", why: "Nacisk na kogoś, kto broni przekonania, wywoła odruchowy sprzeciw." },
                { t: "Przedstawia badania naukowe na ten temat.", why: "Argumenty logiczne nie przebijają się przez obronę tożsamości." }
              ],
              tony: "Zrobił dokładnie to: sam kazał jej się opierać, więc nie było czemu się opierać. Eileen po chwili przyznała, że jej intensywność odpycha ludzi, którzy czują się oskarżeni. Potem pokazała swoją tablicę marzeń z napisem „Mądrość z lekkością”. Robbins kazał jej przyłożyć tablicę do ciała, żeby połączyła przyjemność z tym, co robi.",
              explain: "Paradoks rozbraja opór: jeśli coach sam mówi „nie wierz w to”, klient nie musi się bronić i może po prostu rozważyć myśl.",
              src: "yt", ch: "Eileen, cz. 3"
            },
            { id: "ei-5", type: "mc", tech: "Kalibracja ciała",
              dialog: [["C", "Czy ten powód daje ci w ciele lekkość, czy napięcie?"], ["K", "Lekkość. (I zaczyna mówić coraz szybciej i ostrzej o chorobach, odrzuceniu, przetrwaniu…)"]],
              q: "Komu wierzysz: słowom czy ciału?",
              opts: [
                { t: "Ciału. Mówisz jej spokojnie: „Uśmiechasz się, ale napięcie wciąż tu jest. Twoje ciało pokazuje coś innego.”", ok: true },
                { t: "Słowom. Skoro mówi, że lekkość, to lekkość.", why: "Kalibracja polega na tym, żeby widzieć, co się dzieje, a nie słuchać tylko deklaracji." },
                { t: "Nie komentujesz, żeby nie podważać jej słów.", why: "Robbins mówi: łatwiej byłoby dać brawa i iść dalej. Ale wtedy nic się nie zmieni." }
              ],
              tony: "Powiedział, że jej mowa ciała pokazuje wszystkim, że to nieprawda. Eileen przyznała: „Wymuszam uśmiech”. Robbins: „Jestem po twojej stronie. Łatwo byłoby powiedzieć: świetnie, brawa, idziemy dalej”.",
              explain: "Słowa mogą być wyuczone, a ciało rzadko kłamie. Gdy słowa i ciało się rozjeżdżają, zaufaj ciału i powiedz to z ciepłem.",
              src: "yt", ch: "Eileen, cz. 5"
            },
            { id: "ei-6", type: "mc", tech: "Rozbijanie uogólnień",
              q: "Eileen mówi o „wszystkich dzieciach”, które czeka bolesne życie. Co robi Robbins?",
              opts: [
                { t: "Każe jej zrobić krok w tył (dosłownie) i za każdym krokiem rozluźnić jedno uogólnienie: nie wszystkie dzieci muszą być w show-biznesie, może nie wszystkie będą miały bolesne życie, niektóre zaznają więcej miłości niż przeciętny człowiek.", ok: true },
                { t: "Zgadza się, że problem dotyczy wszystkich.", why: "Pewność co do „wszystkich” utrzymuje jej napięcie i ból." },
                { t: "Zmienia temat na jej osobiste życie.", why: "Zostaje przy temacie, ale rozluźnia uogólnienia." }
              ],
              tony: "Na koniec kroku w tył: „Muszę przestać być taka pewna, jak jest, bo tworzę tylko więcej bólu”. Potem opowiedział przypowieść o rolniku, który na każdą „wspaniałą” i „straszną” wiadomość odpowiadał jednym słowem: „Może”.",
              explain: "Uogólnienia („wszyscy”, „zawsze”) to nogi przekonania. Pytaniami i ruchem ciała możesz je podważyć jedna po drugiej.",
              src: "yt", ch: "Eileen, cz. 5–6"
            },
            { id: "ei-7", type: "mc", tech: "Wybór z terminem",
              q: "Jak Robbins zamyka interwencję z Eileen?",
              opts: [
                { t: "Prosi o wybór teraz: „Ile osób chce więcej »może« i więcej elegancji w życiu? To wybierz to teraz”. Jak kelnerka czekająca na zamówienie, wybór potrzebuje terminu.", ok: true },
                { t: "Zostawia ją, żeby to sobie przemyślała.", why: "Bez terminu decyzja się rozmywa." },
                { t: "Mówi jej, żeby przestała walczyć.", why: "Nie zabiera jej wojowniczki. Mówi: używaj wszystkich biegów, a nie jednego." }
              ],
              tony: "Dodał, że celem nie jest etykieta (wojowniczka, mag, kochanek, władca), tylko zauważenie obecnego wzorca i poszerzenie wyboru. Więcej opcji to lepsze wybory, ale z terminem.",
              explain: "Decyzja to moment, a nie proces. Daj klientowi wybór tu i teraz.",
              src: "yt", ch: "Eileen, cz. 7"
            }
          ]
        }
      ]
    },

    /* ───────── Pixie ───────── */
    {
      id: "yt-pixie", title: "Pixie: to nie jest problem biznesowy", sub: "Biznes · kontrola vs wpływ · język męczennicy", len: "film do ustalenia",
      lessons: [
        {
          id: "px-l1", title: "Pod przykrywką kapitału",
          items: [
            { type: "learn", title: "Kontekst",
              body: ["Pixie, księgowa z wykształcenia, matka dziewięciorga dzieci, prowadzi rodzinną firmę z destylarniami. Firma urosła z 10 tys. do ponad 3 mln dolarów sprzedaży rocznie. Mąż odszedł 9 miesięcy temu. Mówi, że wzrost blokuje jej brak kapitału obrotowego."],
              note: "Robbins jest tu bardzo konfrontacyjny i na koniec ucina rozmowę. To działa na scenie, przy wieloletnim autorytecie. W gabinecie zostaw sobie tę ostrość na moment, gdy kontakt jest naprawdę mocny."
            },
            { id: "px-1", type: "mc", tech: "Pytanie precyzujące",
              dialog: [["K", "Wzrost blokuje kapitał obrotowy."], ["C", "Opowiedz mi o tym."], ["K", "Mam problem z pozyskaniem kapitału. Dostaję oferty. Tylko że nie takie, które mi odpowiadają."]],
              q: "Co mówisz?",
              opts: [
                { t: "„Czyli problemem nie jest kapitał, tylko kapitał po wycenie, której chcesz?”", ok: true },
                { t: "„Jakich kwot potrzebujesz?”", why: "Przyjmujesz jej diagnozę i rozmawiasz o liczbach, a ona sama właśnie ją podważyła." },
                { t: "„Pokażę ci, gdzie szukać inwestorów.”", why: "Dajesz rozwiązanie problemu, który nie istnieje." }
              ],
              tony: "Doprecyzował dokładnie tak. Potem zapytał, dlaczego inwestorzy nie widzą jej wartości. Wyszło, że ona przez nawyk z finansów tak mocno mówi im o ryzyku, że sama ich zniechęca, i że jej biznes jest zbyt skomplikowany, żeby go skalować.",
              explain: "Pierwsza diagnoza klienta to często zasłona dymna. Precyzujące pytanie pokazuje, że problem leży gdzie indziej.",
              src: "yt", ch: "Pixie, cz. 1"
            },
            { id: "px-2", type: "mc", tech: "Umiejętności czy psychologia",
              q: "Robbins pyta salę: czy to problem z kapitałem? Nie. A więc problem z umiejętnościami czy z psychologią?",
              opts: [
                { t: "Z psychologią (według Robbinsa w co najmniej 80%). Wzrost firmy blokuje psychologia i umiejętności lidera.", ok: true },
                { t: "Z umiejętnościami: nie umie rozmawiać z inwestorami.", why: "Umiejętności też grają rolę, ale ona umie budować biznes. Blokuje ją potrzeba ochrony i kontroli." },
                { t: "Z rynkiem: branża jest trudna.", why: "Inwestorzy się zgłaszają, więc rynek nie jest przeszkodą." }
              ],
              tony: "Dodał zasadę, którą warto zapamiętać: nie ma czegoś takiego jak problem biznesowy, zawsze jest to problem osobisty lidera. I jeszcze jedno: firma, której nie da się powielić i od której nie możesz odejść, to nie biznes, tylko praca.",
              explain: "W coachingu biznesowym zawsze sprawdzaj, co w liderze blokuje następny poziom.",
              src: "yt", ch: "Pixie, cz. 1–2"
            },
            { id: "px-3", type: "mc", tech: "Kalibracja pierwszej reakcji",
              dialog: [["C", "Od czyich decyzji głównie zależy teraz ta firma?"], ["K", "Nie od moich."], ["C", "Pytam, od czyich?"], ["K", "No… w dużej mierze od moich, ale…"]],
              q: "Co robi Robbins z tym „nie”?",
              opts: [
                { t: "Pokazuje sali: „Widzieliście tę pierwszą reakcję? »Nie, nie ode mnie«”. Odruch obronny mówi więcej niż późniejsze wyjaśnienia.", ok: true },
                { t: "Ignoruje je, bo sama się poprawiła.", why: "Pierwsza reakcja to cenna informacja o tym, czego klientka broni." },
                { t: "Przeprasza, że zadał trudne pytanie.", why: "Pytanie było trafne, a reakcja to potwierdza." }
              ],
              tony: "Zwrócił uwagę na odruch. Gdy chwilę później powiedziała „utknęłam”, użył metafory Zapory Hoovera: przy budowie kilku robotników wpadło w beton i oni naprawdę utknęli. Jeśli nie jesteś w zaporze, nie utknąłeś. Utknęła twoja psychologia.",
              explain: "Odruch obronny na proste pytanie wskazuje, gdzie leży temat. Słowo „utknęłam” to z kolei język, który odbiera sprawczość.",
              src: "yt", ch: "Pixie, cz. 2"
            },
            { id: "px-4", type: "mc", tech: "Przerwanie historii-ofiary",
              dialog: [["C", "Czego się boisz? Jaka jest prawda?"], ["K", "(ze łzami) A co, jeśli nie dam rady? Jestem sama."]],
              q: "Robbins słyszy „jestem sama” po raz czwarty. Co robi?",
              opts: [
                { t: "Mówi z ciepłem, ale wprost: „Słyszeliśmy tę historię cztery razy. Opowiadasz ją, łzy przychodzą i tak łączysz się sama ze sobą. Nie jesteś sama, masz dziewięcioro dzieci, sześcioro prowadzi z tobą firmę”.", ok: true },
                { t: "Daje jej chwilę na łzy i wspiera.", why: "Na chwilę tak, ale ta historia to nawyk, który ją blokuje. Wsparcie samo go wzmocni." },
                { t: "„Rozumiem, samotność jest trudna.”", why: "Potwierdzasz fałszywe przekonanie: ona nie jest sama." }
              ],
              tony: "Dodał: „Nie oceniam cię. Wlewam w ciebie miłość, nawet jeśli w tej chwili tak tego nie czujesz”. Potem zapytał o mężczyznę w jej życiu. Okazało się, że tego najbardziej jej brakuje, a jej prawdziwy strach to utrata kontroli.",
              explain: "Gdy klient powtarza tę samą historię, nazwij wzorzec. Wcześniej daj jasny sygnał, że jesteś po jego stronie.",
              src: "yt", ch: "Pixie, cz. 3–4"
            }
          ]
        },
        {
          id: "px-l2", title: "Kontrola, męczennica i otwarcie",
          items: [
            { id: "px-5", type: "mc", tech: "Konflikt potrzeb",
              dialog: [["K", "Chcę być ogromna."]],
              q: "Jakie potrzeby według Robbinsa stoją za tym i dlaczego się blokują?",
              opts: [
                { t: "Pewność i znaczenie. Chce obu naraz, a to się nie łączy: żeby zrobić coś ogromnego, trzeba puścić pewność i podjąć znaczące ryzyko.", ok: true },
                { t: "Rozwój i wkład.", why: "Według Robbinsa robi to, żeby poczuć się ważna, a nie żeby mieć wpływ. Rozwój i wkład byłyby zdrowszym motorem." },
                { t: "Miłość i więź.", why: "To jej najgłębsza potrzeba, ale nie to stoi za „chcę być ogromna”." }
              ],
              tony: "Powiedział: chce trzymać jedną stopę na pierwszej bazie, biegnąc na trzecią. Gdy mówiła, że przy 100 mln poczuje się dość ważna, żeby dzielić się przesłaniem, odpowiedział: „Nie, nie poczujesz. Będziesz ogromna i samotna”. I przypomniał: od 10 tys. do 3 mln to już ogromny wzrost.",
              explain: "Gdy cel jest „żeby poczuć się kimś”, osiągnięcie go nic nie zmienia. Sprawdź, jaka potrzeba stoi za celem.",
              src: "yt", ch: "Pixie, cz. 6", verify: true
            },
            { id: "px-6", type: "mc", tech: "Odpowiedzialność zamiast martyrologii",
              dialog: [["K", "Jestem wściekła. Harowałam całe życie. Zbudowałam mu wielki biznes, urodziłam wszystkie dzieci, nic nie brałam. A na szczycie on po prostu wyszedł."]],
              q: "Jak Robbins pracuje z tą historią?",
              opts: [
                { t: "Najpierw docenia szczerość, potem mówi: „Robiłaś to wszystko, bo to cię wtedy spełniało. Teraz nie jesteś spełniona, bo nie skończyło się tak, jak chciałaś. Ale masz firmę i dzieci, które z tobą pracują”.", ok: true },
                { t: "Potwierdza, że mąż zachował się okropnie.", why: "To nie zmieni jej życia. Robbins: „Jego tu nie ma. Zmienić twoje życie mogą tylko twoje decyzje”." },
                { t: "Pyta o szczegóły rozwodu.", why: "Odciąga od jej odpowiedzialności i wpycha w przeszłość." }
              ],
              tony: "Nazwał to opowieścią z perspektywy „po fakcie”: każdy tak mówi, kiedy coś się skończyło. Potem wyjaśnił różnicę: kontrola to iluzja, mamy tylko wpływ. Kto chce kontrolować partnera, nie ma do niego szacunku, bo skoro ona może go kontrolować, inna też może.",
              explain: "Historia „poświęciłam wszystko” daje znaczenie i pewność, ale odbiera sprawczość. Przywrócenie odpowiedzialności oddaje klientce władzę.",
              src: "yt", ch: "Pixie, cz. 4–5"
            },
            { id: "px-7", type: "order", tech: "Chemia transformacji",
              q: "Robbins uczy salę pięciu etapów przemiany. Ułóż je w kolejności.",
              items: ["Nasycenie: jest dobrze, ale życie wzywa do wzrostu", "Niezadowolenie: zaczyna boleć, „muszę to rozwiązać”", "Próg emocjonalny: zmiana staje się koniecznością", "Wgląd: widzisz prawdę, „to nie on, to ja”", "Skok przez otwarcie: działasz, choć nie wiesz, co jest po drugiej stronie"],
              explain: "Pixie doszła do wglądu, ale nie skoczyła. Robbins mówi, że kiedyś przepychał ludzi przez to otwarcie, ale efekt trwał tylko kilka miesięcy, bo to on wykonywał pracę. Teraz klient musi skoczyć sam.",
              src: "yt", ch: "Pixie, cz. 6"
            },
            { id: "px-8", type: "mc", tech: "Język męczennicy",
              dialog: [["C", "Ile czasu poświęcasz na to, żeby znaleźć partnera, któremu ufasz?"], ["K", "Właśnie oddałam rok, żeby tu przyjechać."]],
              q: "Co robisz z „oddałam”?",
              opts: [
                { t: "Zatrzymujesz się na tym słowie: „Co znaczy, że oddałaś rok? Niczego nie oddałaś, zainwestowałaś w siebie”. I pokazujesz wzorzec: wszystko w jej modelu świata to „oddałam”.", ok: true },
                { t: "Puszczasz to, bo to tylko sposób mówienia.", why: "Sama tak próbowała to zbyć („źle dobrałam słowa”). Robbins: „Zawsze dobierasz takie słowa”." },
                { t: "Dziękujesz jej za ogromne poświęcenie.", why: "Wzmacniasz dokładnie ten wzorzec, który ją izoluje." }
              ],
              tony: "Powiedział, że ten wzorzec to męczennictwo i powód jej samotności. Ciągłe „ja oddaję wszystko” daje poczucie kontroli i znaczenia, ale nie jest miłością, i nikt nie chce być z kimś, kto stale wylicza, co poświęcił. Cierpienie bierze się ze skupienia na sobie: na tym, czego się nie dostaje.",
              explain: "Jedno słowo, powtarzane konsekwentnie, odsłania cały model świata. Wyłapuj słowa, które klient używa ciągle.",
              src: "yt", ch: "Pixie, cz. 7"
            },
            { id: "px-9", type: "mc", tech: "Potrzeby drugiej strony",
              dialog: [["K", "Chcę mnożnika co najmniej 10."]],
              q: "Robbins mówi, że za mała, nierosnąca firma nikt rozsądny nie da 10x. Jaki jest głębszy wniosek, który łączy biznes i związki?",
              opts: [
                { t: "Skupia się tylko na swoich potrzebach, a nie na potrzebach inwestorów czy mężczyzn. Nie powiedziała ani słowa o tym, czego potrzebują oni.", ok: true },
                { t: "Powinna obniżyć oczekiwania we wszystkim.", why: "Nie chodzi o niższe oczekiwania, tylko o zmianę skupienia z siebie na drugą stronę." },
                { t: "Potrzebuje lepszego doradcy finansowego.", why: "To znów techniczna odpowiedź na problem psychologiczny." }
              ],
              tony: "Zapytał: wzięłabyś 6,5x od kogoś mądrego, kto pomoże ci urosnąć? Odpowiedziała, że od partnera strategicznego wzięłaby nawet 2x. „No to to rób”. Na koniec: gdy na szczycie są znaczenie i pewność, działamy samolubnie, nawet będąc dobrym człowiekiem, i to blokuje miłość i rozwój.",
              explain: "Wpływ zaczyna się od zrozumienia potrzeb drugiej strony. To dotyczy negocjacji, sprzedaży i związków.",
              src: "yt", ch: "Pixie, cz. 8"
            }
          ]
        }
      ]
    },

    /* ───────── Terry i O'Neal ───────── */
    {
      id: "yt-terry", title: "Terry i O'Neal: miłość bez bliskości", sub: "Para · szalona ósemka · obecność", len: "film do ustalenia",
      lessons: [
        {
          id: "te-l1", title: "Zacznij od siebie",
          items: [
            { id: "te-1", type: "mc", tech: "Otwarcie pracy z parą",
              dialog: [["C", "Co się naprawdę dzieje?"], ["K", "Utknęliśmy. …Boję się."]],
              q: "Terry zaczęła od „boję się”, a nie od tego, co robi partner. Co z tym robisz?",
              opts: [
                { t: "Wyraźnie to nagradzasz: „Właśnie tak się zaczyna. Od siebie, nie od partnera”.", ok: true },
                { t: "Pytasz od razu: „Czego się boisz w jego zachowaniu?”", why: "Kierujesz ją z powrotem na partnera i otwierasz drogę do obwiniania." },
                { t: "Pytasz partnera, czy wiedział, że ona się boi.", why: "Za wcześnie. Najpierw utrwal sposób rozmowy, który zadziała." }
              ],
              tony: "Poprosił salę o brawa i wyjaśnił: nigdy nie zadziała „czuję się tak przez ciebie”, bo nikt nie sprawia, że czujemy się w określony sposób. Uczciwie brzmi: „Kiedy mówisz takie rzeczy, ja sprawiam, że czuję się…”. Sage dodała: strach często wygląda na zewnątrz jak złość.",
              explain: "W pracy z parą ustaw zasadę od pierwszej minuty: każde z was mówi o sobie. Obwinianie gwarantuje porażkę.",
              src: "yt", ch: "Terry i O'Neal, cz. 1"
            },
            { id: "te-2", type: "mc", tech: "Szalona ósemka",
              dialog: [["K", "Kiedy boję się braku więzi, mam lęk, zamykam się i wpadam w depresję. On widzi wycofanie i zołzowatość."]],
              q: "Jak Robbins tłumaczy jej wzorzec?",
              opts: [
                { t: "Jako „szaloną ósemkę”: z lęku przeskakuje w złość, bo złość daje pewność, znaczenie i jakąś więź. Gdy złości jest za dużo, wraca do lęku. Po wielu takich pętlach przychodzi depresja.", ok: true },
                { t: "Jako zaburzenie lękowe, które trzeba leczyć.", why: "Robbins opisuje mechanizm potrzeb, a nie stawia diagnozy." },
                { t: "Jako reakcję na złe zachowanie partnera.", why: "Sama mówi, że żyła tak, zanim go poznała." }
              ],
              tony: "Najpierw z humorem poprosił ją, żeby pokazała swoją „zołzowatość” (skrzyżowane ręce, wytrzeszczone oczy). Sala się śmiała i napięcie zeszło. Gdy wyjaśnił ósemkę, Terry powiedziała: „W tysiącu procent. I żyłam tak, zanim się poznaliśmy”.",
              explain: "Pokazanie zachowania w przesadzony sposób przerywa wzorzec i pozwala klientowi zobaczyć go z zewnątrz.",
              src: "yt", ch: "Terry i O'Neal, cz. 2", verify: true
            },
            { id: "te-3", type: "mc", tech: "Słowo „próbuję”",
              dialog: [["C", "Jaka jest twoja strategia wyjścia z tego?"], ["K", "Próbuję sprawić, żeby to działało."]],
              q: "Co robi Robbins z „próbuję”?",
              opts: [
                { t: "Każe jej „spróbować podnieść krzesło”. Kiedy podnosi, mówi: „Nie kazałem podnieść, kazałem spróbować”. Albo robisz, albo nie. „Próbuję” uspokaja ego, ale nie oznacza zaangażowania.", ok: true },
                { t: "Chwali ją za starania.", why: "Wzmacniasz słowo, które pozwala nie działać w pełni." },
                { t: "Pyta, co konkretnie próbowała.", why: "Lepsze niż pochwała, ale nie odsłania pułapki w samym słowie." }
              ],
              tony: "Po demonstracji zapytał jeszcze raz. Prawdziwa odpowiedź: „Idę do pracy”. W pracy ma więcej pewności, różnorodności i znaczenia, i ma iluzję, że ma tam więcej kontroli, bo nie ma tam bliskości.",
              explain: "Fizyczna demonstracja zostaje w pamięci na dłużej niż wyjaśnienie. „Próbuję” to jedno z najważniejszych słów do wyłapania.",
              src: "yt", ch: "Terry i O'Neal, cz. 3"
            }
          ]
        },
        {
          id: "te-l2", title: "Bilans potrzeb i obecność",
          items: [
            { id: "te-4", type: "mc", tech: "Bilans potrzeb partnera",
              q: "Robbins prosi Terry, żeby oceniła od −10 do +10, jak bardzo zaspokaja potrzeby O'Neala. Pewność, że może ją uszczęśliwić: −10. Jak Robbins to komentuje dla kobiet na sali?",
              opts: [
                { t: "Dla mężczyzny poczucie, że nie potrafi uszczęśliwić kobiety, to jak rak. Mężczyźni chcą sprawiać radość, a gdy kobieta się rozświetla, rozświetla się i on.", ok: true },
                { t: "Że to nie ma znaczenia, liczy się miłość.", why: "Właśnie dlatego, że miłość jest, a pewności brak, para cierpi." },
                { t: "Że O'Neal powinien się bardziej starać.", why: "Bilans pokazuje, jak Terry zaspokaja jego potrzeby, nie odwrotnie." }
              ],
              tony: "Gdy Terry próbowała uciec od liczb („powiedzmy, że wszystkie są niskie”), nie odpuścił. Gdy zareagowała obronnie na westchnienie sali, nazwał defensywność jednym z czterech jeźdźców. Terry: „Mam to na liście do pracy”. Robbins: „A kiedy byłby dobry moment?”. Terry: „Zróbmy to”.",
              explain: "Liczby zmuszają do konkretu. Ocena z perspektywy partnera uczy klienta patrzeć oczami drugiej strony.",
              src: "yt", ch: "Terry i O'Neal, cz. 4"
            },
            { id: "te-5", type: "mc", tech: "Obecność bez słów",
              dialog: [["C", "Co musi się wydarzyć, żebyś czuła więź z tym mężczyzną?"], ["K", "Czuć się energetycznie połączona. Nie wiem, jak to uchwycić."]],
              q: "Co robi Robbins?",
              opts: [
                { t: "Robi eksperyment: rozstawia ich w przejściu, szepcze O'Nealowi do ucha i każe mu tylko patrzeć jej w oczy. Po kilku sekundach Terry sama do niego podchodzi.", ok: true },
                { t: "Pomaga jej zdefiniować więź słowami.", why: "Ona nie wie, jak to nazwać. Doświadczenie da jej odpowiedź szybciej niż definicja." },
                { t: "Daje im zadanie domowe na randkę.", why: "Może później, ale teraz można jej pokazać odpowiedź na żywo." }
              ],
              tony: "Zdradził, co szepnął: „Patrz w jej oczy, nie myśl o sobie ani przez chwilę i powtarzaj w głowie: kocham cię, czczę cię, zawsze się tobą zaopiekuję”. Terry powiedziała, że przyciągnęło ją to, że był nieruchomy i skupiony na niej, i że zobaczyła w jego oczach ból. Potem odwrócił ćwiczenie: ona wysłała mu radość i miłość bez słów, a O'Neal poczuł, że ona go potrzebuje.",
              explain: "Gdy reguła klienta jest mglista („energetyczne połączenie”), stwórz doświadczenie na sesji. Obecność to brak myślenia o sobie.",
              src: "yt", ch: "Terry i O'Neal, cz. 6"
            },
            { id: "te-6", type: "mc", tech: "Język: „moje”",
              dialog: [["K", "Czuję to, co mówi. Ale mam w sobie dużo winy. I to jest moja wina, moje poczucie winy."]],
              q: "Co robi Robbins z „moje poczucie winy”?",
              opts: [
                { t: "Przerywa ostro i z humorem: „Myślisz, że to twoje poczucie winy? Że ty je wymyśliłaś? Miliony ludzi je czują”. Słowo „moje” przykleja emocję do tożsamości.", ok: true },
                { t: "Pyta, skąd się wzięło to poczucie winy.", why: "Grzebanie w źródle wzmacnia emocję, zamiast ją odkleić." },
                { t: "Mówi, że poczucie winy jest zdrowe, jeśli coś zrobiła.", why: "Według Robbinsa emocja jest sygnałem, ale nie powinna stać się jej tożsamością." }
              ],
              tony: "Wcześniej O'Neal sam wziął na siebie decyzję o braku dzieci: „Wybrałem ciebie”. Na koniec Robbins zapytał oboje, czy chcą zostać w małżeństwie, i zdjął ze stołu opcję odejścia: „Dalej zastanawiamy się nad odejściem, czy zobowiązujemy się, że to zadziała?”. Oboje się zobowiązali.",
              explain: "Słowa, którymi opisujemy doświadczenie, stają się doświadczeniem. Dopóki jedno z partnerów rozważa odejście, żadna praca nie zadziała, więc zdejmij tę opcję ze stołu.",
              src: "yt", ch: "Terry i O'Neal, cz. 9"
            }
          ]
        }
      ]
    },

    /* ───────── Jackie i Fabio ───────── */
    {
      id: "yt-fabio", title: "Jackie i Fabio: mężczyzna w tunelu", sub: "Para · lusterko wsteczne · praca z dłońmi", len: "film do ustalenia",
      lessons: [
        {
          id: "fa-l1", title: "Tunel i lusterko wsteczne",
          items: [
            { id: "fa-1", type: "mc", tech: "Kalibracja gestu",
              dialog: [["K", "Chciałam mieć pewność, że nie tracę czasu. I on się zgodził…"], ["N", "Jackie mówi z ręką na biodrze i wskazuje palcem."]],
              q: "Co robi Robbins?",
              opts: [
                { t: "Przerywa i pokazuje jej gest: „Ręka na biodrze. Czy to głowa, czy serce? I w którą stronę wskazujesz: obwiniasz czy bierzesz odpowiedzialność?”", ok: true },
                { t: "Słucha do końca, bo każda strona ma swoją wersję.", why: "Jej ciało mówi więcej niż słowa. Bez zatrzymania dalsza rozmowa będzie oskarżeniem." },
                { t: "Pyta partnera, co o tym myśli.", why: "Partnera jeszcze nawet nie ma na miejscu (poszedł do łazienki)." }
              ],
              tony: "Od razu dodał: „Nie robię z ciebie winnej. Chcę, żebyś zobaczyła prawdę, bo prawda cię uwolni. Masz prawo do wszystkiego, co czujesz. Tylko że to wszystko jest o tobie”.",
              explain: "Gest często zdradza stan szybciej niż słowa. Nazwij go łagodnie i od razu zdejmij poczucie winy.",
              src: "yt", ch: "Jackie i Fabio, cz. 1"
            },
            { id: "fa-2", type: "mc", tech: "Lusterko wsteczne",
              dialog: [["K", "(Fabio) W pierwszym małżeństwie żona chciała dziecka, a ja zarabiałem 9 dolarów na godzinę. Widziałem, jak mój ojciec imigrant z każdym dzieckiem miał więcej prac i coraz mniej go widziałem. Zawsze wolę iść powoli."]],
              q: "Jaką diagnozę stawia Robbins?",
              opts: [
                { t: "„Wszystko, co mi powiedziałeś, nie ma nic wspólnego z nią”. Fabio filtruje Jackie przez swoją przeszłość, a Jackie robi to samo. Jadą w przyszłość, patrząc w lusterko wsteczne.", ok: true },
                { t: "Że Fabio ma rację i trzeba iść powoli.", why: "Tempo może mieć znaczenie, ale problem leży w filtrze z przeszłości." },
                { t: "Że Fabio nie kocha Jackie.", why: "Wszystko wskazuje na coś przeciwnego." }
              ],
              tony: "Potem nazwał stan Fabio „tunelem”: mężczyzna, który nie jest tam, gdzie uważa, że powinien być, czuje się w środku jak martwy. Do tego bije się z myślami, że zawodzi też partnerkę, więc ma mniej energii i jest mniej obecny, a ona widzi tylko brak zaangażowania.",
              explain: "Reframing dla partnerki: to nie brak miłości, tylko mężczyzna w tunelu. Zmienia to, jak ona interpretuje jego wycofanie.",
              src: "yt", ch: "Jackie i Fabio, cz. 2–3"
            },
            { id: "fa-3", type: "mc", tech: "Strach to egoizm (bez oceny)",
              dialog: [["K", "(Fabio) Ona daje mi więcej, niż ja jej. Byłem tchórzem. Dlaczego? Bo jestem samolubny."]],
              q: "Jak Robbins odpowiada na tę samokrytykę?",
              opts: [
                { t: "„Strach to egoizm, przyjacielu. Więc się nie osądzaj. Wszyscy jesteśmy samolubni, kiedy się boimy.”", ok: true },
                { t: "„Masz rację, musisz to zmienić.”", why: "Dokładasz wstydu. Wstyd odbiera energię potrzebną do zmiany." },
                { t: "„Nie, wcale nie jesteś samolubny.”", why: "Zaprzeczasz jego szczeremu wglądowi. Lepiej go przeformułować." }
              ],
              tony: "Zdjął z niego wstyd i od razu kazał mu spojrzeć w oczy Jackie. Fabio się uśmiechnął i powiedział: „Ona jest kulą miłości. Chcę jej to oddać”.",
              explain: "Przyznanie się do błędu to moment kruchości. Nazwij mechanizm (strach) bez oceny osoby, a klient może iść dalej.",
              src: "yt", ch: "Jackie i Fabio, cz. 3"
            }
          ]
        },
        {
          id: "fa-l2", title: "Odgrywanie ról i dwie dłonie",
          items: [
            { id: "fa-4", type: "mc", tech: "Odgrywanie ról",
              dialog: [["K", "(Fabio) Nasza siedmioletnia córka od trzech lat pyta: „Kiedy kupisz mamie pierścionek?”. Presja rośnie."]],
              q: "Jak Robbins pokazuje mu, co mówić?",
              opts: [
                { t: "Zamienia role: Fabio gra córkę, a Robbins gra Fabio. Modeluje odpowiedź, która nie obiecuje daty, ale daje pełne bezpieczeństwo: „Kocham twoją mamę i chcę z nią spędzić życie. Nie wiem jeszcze, kiedy, ale nie ma miejsca, w którym wolałbym być”.", ok: true },
                { t: "Mówi mu, żeby po prostu się oświadczył.", why: "Narzucasz decyzję. Lepiej pokazać, jak rozmawiać z prawdy." },
                { t: "Radzi, żeby zmienił temat, gdy córka pyta.", why: "Unikanie to właśnie problem. Dzieci czują unikanie." }
              ],
              tony: "Gdy Fabio, grając córkę, dalej się droczył, Robbins pokazał, jak przyjąć to z miłością: „Słyszę cię. Kocham twoją ciekawość. Nigdzie się nie wybieram”. Dodał: nie rozmawia się z siedmiolatką o śmierci brata i rozwodach dorosłych.",
              explain: "Odgrywanie ról pozwala klientowi usłyszeć wzór odpowiedzi i poczuć, jak to jest być po drugiej stronie.",
              src: "yt", ch: "Jackie i Fabio, cz. 5"
            },
            { id: "fa-5", type: "order", tech: "Integracja dwóch dłoni",
              q: "Ułóż kroki techniki, którą Robbins zrobił z Fabio (ból w jednej dłoni, siła w drugiej).",
              items: ["Ściska cały ból (brat, porażki, rozczarowania) w jednej dłoni", "Opisuje ból zmysłami: kolor, kształt, faktura, dźwięk i co mu mówi", "W drugiej dłoni ściska najpiękniejsze doświadczenia, zwycięstwa i miłość", "Opisuje je tymi samymi zmysłami i wypowiada ich przesłanie na głos", "Przelewa kolor siły do dłoni z bólem i miażdży kształt bólu", "Testuje: co jest teraz w każdej dłoni i co mówią"],
              explain: "Po integracji obie dłonie były niebieskie i w kształcie serca. Dłoń z bólem mówiła „mogę”. Kluczowe jest dokładne zakodowanie obu stanów zmysłami i test na końcu.",
              src: "yt", ch: "Jackie i Fabio, cz. 6"
            }
          ]
        }
      ]
    },

    /* ───────── Laura ───────── */
    {
      id: "yt-laura", title: "Laura: zostać czy odejść", sub: "Sztuka prośby · bilans sześciu potrzeb · 60 dni", len: "film do ustalenia",
      lessons: [
        {
          id: "la-l1", title: "Prośba zamiast pretensji",
          items: [
            { type: "learn", title: "Kontekst",
              body: ["Laura poznała męża w wieku 18 lat, jest dużo starszy, są razem 18 lat. Od kilku lat się oddalają. Mówi: „Boję się stracić wspaniałego mężczyznę, ale boję się też stracić siebie”. Najpierw prowadzi Sage, potem Robbins."]
            },
            { id: "la-1", type: "mc", tech: "Sztuka prośby",
              q: "Sage proponuje Laurze, żeby powiedziała mężowi (Sage go gra), co czuje. Czego uczy?",
              opts: [
                { t: "Pod każdą pretensją jest prośba. Mów bez obwiniania i bez historii: „Czuję się samotna, nawet gdy jesteś w domu. Kiedy cię przytulam, nie odpychaj mnie, bo czuję się odrzucona”.", ok: true },
                { t: "Że trzeba wyliczyć mu wszystkie błędy, żeby zrozumiał.", why: "Wyliczanie brzmi jak oskarżenie i wywołuje obronę." },
                { t: "Że trzeba czekać, aż on sam się domyśli.", why: "Oczekiwanie, że partner się domyśli, to przepis na rozczarowanie." }
              ],
              tony: "Sage jako mąż odpowiedziała: przeprosiła, wyjaśniła, że to nie była jej intencja, i zapytała, co konkretnie by pomogło. Laura: wspólny czas z pełną obecnością, bez telefonu. Sage zaproponowała randkę w piątek, a potem odwróciła pytanie: czego ona mogłaby nie widzieć u niego? Na koniec: daj sobie 90 dni na zakochanie się na nowo, zanim zdecydujesz.",
              explain: "Prośba ma trzy części: co czuję (bez obwiniania), czego potrzebuję i konkretne zachowanie. A potem pytanie do drugiej strony.",
              src: "yt", ch: "Laura, cz. 1"
            },
            { id: "la-2", type: "mc", tech: "Bilans sześciu potrzeb",
              q: "Laura ocenia związek od 0 do 10: pewność 9, różnorodność 0, znaczenie 4, miłość 2, rozwój 2, wkład 5. Co Robbins z tego wyciąga?",
              opts: [
                { t: "Silna jest tylko pewność i dlatego Laura wciąż jest w związku. Ale sama pewność sprawia, że związek staje się przewidywalny i martwy. Ból leży w różnorodności (0).", ok: true },
                { t: "Że powinna odejść, bo większość ocen jest niska.", why: "Robbins mówi, że nie chodzi o „zostań lub odejdź”, tylko o zobaczenie, gdzie jest ból." },
                { t: "Że mąż jest winny niskich ocen.", why: "Za chwilę każe jej ocenić to samo z perspektywy męża. Okaże się, że oboje dają sobie mało." }
              ],
              tony: "Potem kazał jej „założyć kapelusz męża” i ocenić, ile ona mu daje. Wyniki wyszły bardzo podobne. Złapał też, że zawyżyła jedną ocenę, żeby było mu milej, a jej śmiech to potwierdził.",
              explain: "Bilans w dwie strony to jedno z najmocniejszych narzędzi w pracy z parą. Pokazuje, że oboje przestali dawać, a nie tylko jedno.",
              src: "yt", ch: "Laura, cz. 2"
            },
            { id: "la-3", type: "mc", tech: "Reguły miłości partnera",
              dialog: [["C", "Co sprawia, że on czuje się najbardziej kochany?"], ["K", "Chyba docenienie za to, jak ciężko pracuje."]],
              q: "Jaki wniosek wyciąga Robbins?",
              opts: [
                { t: "To, co daje mu poczucie miłości, ona właśnie przestała robić, a wręcz irytuje ją jego praca. Wyzwanie: przez minimum 60 dni kochać go tak, jak on chce być kochany, czyli doceniać jego pracę, a nie prosić, żeby pracował mniej.", ok: true },
                { t: "Że powinien pracować mniej, żeby mieć dla niej czas.", why: "To jej reguła miłości (bliskość, dotyk), a nie jego." },
                { t: "Że jego reguła jest niezdrowa.", why: "Reguły się nie ocenia. Trzeba je znać, żeby trafiać w nie." }
              ],
              tony: "Dał też zasadę: jeśli po 60 dniach pełnego dawania on nie zareaguje, będziesz wiedziała bez żalu. Dodał regułę swoją i Sage: kiedy się kłócą, oboje walczą o to, kto pierwszy przeprosi. „Idziesz pierwszy. To jest przywództwo, to jest miłość.”",
              explain: "Ludzie mają różne reguły na to, co znaczy „jestem kochany”. Klient często daje partnerowi to, czego sam chce, a nie to, czego partner potrzebuje.",
              src: "yt", ch: "Laura, cz. 3"
            }
          ]
        }
      ]
    },

    /* ───────── Josh ───────── */
    {
      id: "yt-josh", title: "Josh: hipis i przedsiębiorca", sub: "Praca z częściami · pozytywna intencja · integracja", len: "film do ustalenia",
      lessons: [
        {
          id: "jo-l1", title: "Dwie części, jeden człowiek",
          items: [
            { id: "jo-1", type: "mc", tech: "Praca z częściami",
              dialog: [["K", "Mam dwie dusze. Jedna to hipis, druga to przedsiębiorca. Walczą ze sobą całe moje życie."]],
              q: "Jak zaczynasz pracę z konfliktem części?",
              opts: [
                { t: "Rozmawiasz z każdą częścią osobno, każąc mu stanąć w innym miejscu na sali (kotwica przestrzenna), i pytasz każdą o jej pozytywną intencję: co dobrego próbuje mu dać.", ok: true },
                { t: "Pytasz, która część jest ważniejsza.", why: "Wybór jednej oznacza walkę z drugą. Konflikt wróci." },
                { t: "Analizujesz z nim plusy i minusy obu stylów życia.", why: "To rozmowa z głowy. Części najlepiej słyszeć bezpośrednio, z ciała i emocji." }
              ],
              tony: "Hipis powiedział: „Chcę mu pokazać, co naprawdę się liczy: rodzina, miłość, natura. Bylibyśmy szczęśliwi w przyczepie na pustyni”. Robbins w pełni to docenił, a potem zapytał hipisa: „Gdyby mógł być bardziej hojny, bardziej współczujący, bardziej zamożny i dzielić się tym, czy powinien?”. Hipis: „Tak”. To był most do drugiej części.",
              explain: "Pierwsza zasada pracy z częściami: nie zwalczaj żadnej. Każda ma pozytywną intencję. Szukasz wartości, które obie podzielają.",
              src: "yt", ch: "Josh, cz. 1–2"
            },
            { id: "jo-2", type: "mc", tech: "Reframing metafory",
              dialog: [["K", "(jako przedsiębiorca) Był tak blisko wygranej. Ale jest zdruzgotany. Jego ogień zgasł."]],
              q: "Co robi Robbins z „ogień zgasł”?",
              opts: [
                { t: "Wchodzi w metaforę: „W ogniu zawsze zostaje iskra, a wystarczy iskra, żeby rozpalił się na nowo”. A potem nazywa, co ogień przykryło: strach, że porażki oznaczają „nie jestem wystarczający”.", ok: true },
                { t: "Mówi, że czas odpuścić biznes.", why: "To byłoby opowiedzenie się po stronie hipisa i dalsze dzielenie Josha." },
                { t: "Motywuje go do kolejnej firmy.", why: "To byłoby opowiedzenie się po stronie przedsiębiorcy." }
              ],
              tony: "Wyjaśnił, że hipis pojawił się z dwóch powodów: jako wyjście, żeby nie mierzyć się ze strachem, i żeby Josh nie zapomniał, że już wygrał. Nazwał obie części braćmi: kochankiem i wojownikiem, którego też napędza miłość.",
              explain: "Wejście w metaforę klienta i rozbudowanie jej o wyjście działa lepiej niż zaprzeczenie.",
              src: "yt", ch: "Josh, cz. 3"
            },
            { id: "jo-3", type: "mc", tech: "Integracja części",
              q: "Po zakodowaniu obu części w dłoniach (przedsiębiorca: czerwony, okrąg, gładki, mówi „wygraj”; hipis: biały, trójkąt, miękki, mówi „idź dalej”) i połączeniu ich, Robbins pyta: „Kim jesteś?”. Po co to pytanie?",
              opts: [
                { t: "Żeby integracja zakończyła się nową, wspólną tożsamością, a nie tylko przyjemnym uczuciem. Josh odpowiedział: „Twórcą”.", ok: true },
                { t: "Żeby sprawdzić, czy Josh go słucha.", why: "To pytanie ma utrwalić zmianę na poziomie tożsamości." },
                { t: "Żeby zakończyć ćwiczenie.", why: "Robbins jeszcze nie kończy: potem każe obu częściom zamieszkać razem w sercu." }
              ],
              tony: "Potem dał obu częściom zabawne przezwiska (Jerry Garcia i Maestro), żeby miały lekki sygnał, gdy któraś przesadzi, i zaprosił przedsiębiorcę, który mieszkał w brzuchu, do serca, gdzie mieszka hipis. Josh: „Tu jest ciepło. Jest ogień. Czuję się jak w domu”.",
              explain: "Zmiana na poziomie tożsamości jest najtrwalsza. Kończ integrację pytaniem „kim jesteś teraz?”.",
              src: "yt", ch: "Josh, cz. 4–5"
            }
          ]
        }
      ]
    },

    /* ───────── Tammy: swish kinestetyczny ───────── */
    {
      id: "yt-tammy", title: "Tammy: swish kinestetyczny", sub: "Relacja z mamą · uczucie w ciele · zasób", len: "omówienie NLP",
      lessons: [
        {
          id: "ta-l1", title: "Uczucie problemu",
          items: [
            { type: "learn", title: "Kontekst",
              body: ["Tammy mówi o złości i bierno-agresywnych zachowaniach w relacji z mamą. Robbins prowadzi ją przez swish kinestetyczny. Ta lekcja opiera się na transkrypcji z komentarzem trenera NLP, który rozkłada interwencję na kroki."]
            },
            { id: "ta-1", type: "mc", tech: "Lokalizacja uczucia",
              q: "Jak Robbins zaczyna pracę ze złością Tammy?",
              opts: [
                { t: "Pyta, gdzie w ciele najmocniej siedzi to uczucie, i prosi, żeby dotknęła tego miejsca.", ok: true },
                { t: "Pyta, co konkretnie zrobiła mama.", why: "Historia wpędziłaby ją w opowieść o mamie. Robbins od razu przechodzi do uczucia w ciele." },
                { t: "Każe jej wyobrazić sobie mamę.", why: "To wejście wzrokowe. Tu pracuje z uczuciem." }
              ],
              tony: "Tammy wskazała klatkę piersiową. Potem Robbins zbierał cechy: kolor (czarny), rozmiar (duży), faktura (gumowata, dusząca). Na koniec poprosił o dźwięk: „Nie myśl, dźwięk przychodzi z nieświadomości”. Kazał jej wydać ten dźwięk na głos, tak głośno, jak jest w środku, i zrobił to razem z nią i z całą salą.",
              explain: "Każda cecha to uchwyt do zmiany. Wydanie dźwięku na głos wyprowadza emocję z ciała i jednocześnie pokazuje skalę stanu.",
              src: "yt", ch: "Tammy, krok 1"
            },
            { id: "ta-2", type: "mc", tech: "Bycie przyczyną",
              dialog: [["C", "Gdyby to uczucie coś mówiło, co by mówiło?"], ["K", "„Mylisz się.” Wrednym tonem."], ["C", "Do kogo to mówi?"], ["K", "Do mnie."]],
              q: "Co Robbins robi z tą odpowiedzią?",
              opts: [
                { t: "Pokazuje, że problem nie leży głównie w mamie, tylko w tym, jak Tammy mówi do siebie. Przenosi ją ze skutku na przyczynę, bo tam ma wpływ.", ok: true },
                { t: "Mówi, że to mama ją tego nauczyła.", why: "To prawdopodobnie prawda, ale zostawia ją w roli skutku, bez wpływu." },
                { t: "Pomija to i przechodzi dalej.", why: "To jeden z najważniejszych momentów: zmiana z „mama mi to robi” na „ja to sobie robię”." }
              ],
              tony: "Powiedział: „Czyli tam jest problem. Nie tyle w mamie, co w tobie, bo oczekujesz od siebie, że nie będziesz mieć tych uczuć”. Gdy wewnętrzny głos dodał „możesz lepiej”, Robbins się zgodził („To prawda, i możemy to robić łagodnie dla ciebie”). Uznał pozytywną intencję głosu i zmienił jego ton.",
              explain: "Jeśli przyczyna jest na zewnątrz, klient nie ma wyboru. Gdy przenosisz ją do środka, klient może coś zmienić. Uznanie pozytywnej intencji krytyka rozbraja go bez walki.",
              src: "yt", ch: "Tammy, krok 3"
            }
          ]
        },
        {
          id: "ta-l2", title: "Zasób i swish",
          items: [
            { id: "ta-3", type: "mc", tech: "Przerwanie i zasób",
              q: "Robbins ma już pełny opis uczucia problemu. Co robi dalej?",
              opts: [
                { t: "Przerywa stan („wstrząśnij ciałem!”) i prosi o moment, w którym czuła się silna i gotowa na wyzwanie.", ok: true },
                { t: "Od razu zaczyna zmniejszać czarną plamę.", why: "Bez zasobu nie ma czym jej zastąpić." },
                { t: "Prosi, żeby głębiej poczuła złość.", why: "Problem już jest dobrze opisany. Wzmacnianie go nic nie da." }
              ],
              tony: "Tammy przypomniała sobie moment założenia firmy internetowej: „Byłam pewna”. Robbins znów zbierał cechy: miejsce (ramiona), kierunek ruchu (w górę i do przodu, a problem „wciska się do środka”), waga (lekkie), faktura (miękki materiał), dźwięk i słowo („tak!”, które powtórzyła głośno kilka razy). Na koniec sprawdził: ile od 0 do 10? Dziesięć.",
              explain: "Kierunek ruchu to bardzo mocna cecha uczucia. Kontrast „wciska się do środka” i „płynie do przodu” to dokładnie to, co zmienia swish.",
              src: "yt", ch: "Tammy, krok 4"
            },
            { id: "ta-4", type: "mc", tech: "Test siły zasobu",
              q: "Dlaczego Robbins pyta o siłę zasobu od 0 do 10 przed zrobieniem swisha?",
              opts: [
                { t: "Bo zasób musi być mocniejszy od problemu, żeby go przeważyć. Przy 5–6 na 10 problem może wygrać.", ok: true },
                { t: "Żeby Tammy poczuła się doceniona.", why: "To kontrola jakości przed zmianą, a nie komplement." },
                { t: "Bo zawsze trzeba coś zmierzyć.", why: "Chodzi o konkretny powód: siła zasobu decyduje o skuteczności." }
              ],
              explain: "Ta sama zasada co przy zapadaniu kotwic: zasób musi być silniejszy niż problem.",
              src: "yt", ch: "Tammy, krok 4"
            },
            { id: "ta-5", type: "mc", tech: "Swish kinestetyczny",
              q: "Jak Robbins łączy oba stany?",
              opts: [
                { t: "Każe jej wziąć lekkość z ramion w dłonie, otoczyć nią czarną plamę przy sercu, zmniejszyć ją do kropki i wypchnąć w słońce. Miejsce wypełnia światło i rytmiczne „tak, tak, tak”, aż w klatce jest to samo uczucie co w ramionach.", ok: true },
                { t: "Mówi jej, żeby pomyślała pozytywnie o mamie.", why: "To nie zmienia zapisu uczucia w ciele." },
                { t: "Prosi, żeby na zmianę czuła złość i lekkość, aż się wyrówna.", why: "Przeskakiwanie między stanami to nie swish. Zasób musi pochłonąć problem." }
              ],
              tony: "Używał słów z zasobu jako kotwic: „lekkie”, „światło”, „tak”, „do przodu”, „znajdę drogę”. Kazał jej przelewać zasób dłońmi, aż stare uczucie zniknie. Komentator zwraca uwagę, że słowo „lekkie” działa jednocześnie jako odczucie i jako obraz (jasność), dlatego jest tak skuteczne.",
              explain: "Swish kinestetyczny łączy oba uczucia jednocześnie, tak żeby zasób przejął miejsce problemu. Słowa klienta z fazy zasobu są tu najlepszym językiem.",
              src: "yt", ch: "Tammy, krok 5"
            },
            { id: "ta-6", type: "mc", tech: "Skalowanie i tożsamość",
              dialog: [["C", "Kiedy teraz myślisz o tej sytuacji, ile od 0 do 10?"], ["K", "Osiem."]],
              q: "Co robisz?",
              opts: [
                { t: "„Co by to podniosło do dziewięciu? Jaka myśl, uczucie albo słowo?” A potem: „Co z dziewięciu robi dziesięć?”", ok: true },
                { t: "„Osiem to świetny wynik, kończymy.”", why: "Robbins nie kończy na ośmiu. Każdy punkt wyżej to trwalsza zmiana." },
                { t: "Robisz cały swish od nowa.", why: "Nie trzeba. Wystarczy dołożyć brakujący element." }
              ],
              tony: "Tammy: „Jest łagodniej. To nie »możesz lepiej«, tylko łagodność”. To dało dziewięć. Na dziesięć: „Ta złość to nie jestem ja”. Robbins od razu zapytał: „A kim jesteś naprawdę? Zapytaj serce”. Tammy: „Na poziomie duszy jestem dzieckiem Boga”.",
              explain: "Skalowanie pokazuje, czego brakuje do pełnej zmiany. Ostatni punkt często przychodzi na poziomie tożsamości („to nie jestem ja”), a pytanie „kim jesteś naprawdę?” ją utrwala.",
              src: "yt", ch: "Tammy, krok 5"
            }
          ]
        }
      ]
    },

    /* ───────── Debbie ───────── */
    {
      id: "yt-debbie", title: "Debbie: życie nie swoim życiem", sub: "Termostat tożsamości · czyjej miłości pragnęłaś · ojciec", len: "film do ustalenia",
      lessons: [
        {
          id: "de-l1", title: "Kim musiałaś być?",
          items: [
            { id: "de-1", type: "mc", tech: "Termostat tożsamości",
              dialog: [["K", "Daję dużo miłości wszystkim wokół. Jestem silna, wszyscy to widzą. Ale ciągle tylko wylewam to z siebie."]],
              q: "Robbins mówi, że to nie jest coś, co Debbie robi, tylko jej tożsamość. Jak to wyjaśnia?",
              opts: [
                { t: "Tożsamość działa jak termostat: gdy życie wychodzi poza ustawioną temperaturę (np. ktoś daje jej, a nie ona komuś), system ją cofa albo zaczyna się sabotaż. „To nie jest miejsce, w którym chcesz być. To dom.”", ok: true },
                { t: "Że ludzie mają po prostu stałe cechy charakteru.", why: "Termostat można przestawić. Tożsamość da się poszerzyć." },
                { t: "Że dawanie jest zawsze dobre.", why: "Dawanie jest piękne, ale jako jedyna tożsamość przyciąga biorców i kończy się wyczerpaniem." }
              ],
              tony: "Opowiedział o sobie: gdy nie miał pieniędzy, zapraszał ludzi na lunch, sam zamawiał sałatkę i mówił, że już jadł. Jego model brzmiał: poświęcenie oznacza, że jestem wart miłości. Dodał: kto stale jest dającym, ten zaprasza do życia biorców, a oni nie są złymi ludźmi.",
              explain: "Gdy klient opisuje zachowanie jako „to jestem ja”, pracujesz na poziomie tożsamości, nie zachowania.",
              src: "yt", ch: "Debbie, cz. 1"
            },
            { id: "de-2", type: "mc", tech: "Słuchanie strategii",
              dialog: [["C", "Jak wychodzisz z poczucia winy, kiedy już wychodzisz?"], ["K", "Muszę iść na spacer, pobiegać, odejść od ludzi, wejść w swoją głowę i się zresetować."]],
              q: "Co zauważa Robbins?",
              opts: [
                { t: "Mówi, że wchodzi w głowę, ale wszystko, co wymieniła, jest fizyczne. Działa radykalna zmiana fizjologii, a dopiero w lepszym stanie radzi sobie z głową.", ok: true },
                { t: "Że ucieka od ludzi i to trzeba zmienić.", why: "To akurat jej zdrowa strategia. Ważne, żeby zobaczyła, co w niej naprawdę działa." },
                { t: "Że potrzebuje terapii.", why: "Robbins pokazuje jej zasób, który już ma." }
              ],
              tony: "Powiedział: „Wejdziesz w głowę, jesteś martwa. Zapiszcie to”. Potem poprosił, żeby pokazała ciałem poczucie winy (spięta, wzrok w bok, brak oddechu), a następnie prawdziwą wdzięczność. Sala zobaczyła zmianę, zanim Debbie cokolwiek powiedziała.",
              explain: "Klient często błędnie nazywa swoją skuteczną strategię. Twoja rola: pokazać mu, co faktycznie działa, żeby mógł to robić świadomie.",
              src: "yt", ch: "Debbie, cz. 2"
            },
            { id: "de-3", type: "mc", tech: "Źródło warunkowania",
              q: "Robbins dociera do źródła wzorca Debbie w minutę. Jakimi pytaniami?",
              opts: [
                { t: "„Czyjej miłości najbardziej pragnęłaś: mamy czy taty?” Potem: „Kim musiałaś być dla ojca, żeby mieć jego uwagę i szacunek?” (silna, odporna, bez wymówek) i „Kim nigdy nie mogłaś być?” (słaba).", ok: true },
                { t: "„Opowiedz mi o swoim dzieciństwie.”", why: "Zbyt szerokie. Dostaniesz długą historię zamiast mechanizmu." },
                { t: "„Dlaczego czujesz się winna?”", why: "Dostaniesz racjonalizacje, a nie źródło." }
              ],
              tony: "Prosił o pierwszą odpowiedź, bez myślenia. Na pytanie, ile z tych cech ma dziś, Debbie odpowiedziała: wszystkie. Ojciec zmarł, gdy miała 17 lat. Robbins wyjaśnił: ojciec z miłości dał jej to, co jemu pomogło przetrwać, ale ona jest kobieca w środku i żyje życiem ojca, a nie swoim.",
              explain: "Te trzy pytania (czyjej miłości, kim musiałeś być, kim nie mogłeś być) szybko odsłaniają, skąd wzięła się tożsamość klienta.",
              src: "yt", ch: "Debbie, cz. 3"
            },
            { id: "de-4", type: "mc", tech: "Reframing intencji rodzica",
              dialog: [["N", "Debbie ma zamknięte oczy i wyobraża sobie obecność zmarłego ojca."]],
              q: "Jakie pytanie zadaje Robbins, żeby rozbić jej dziecięcą interpretację?",
              opts: [
                { t: "„Czy kochał cię, bo byłaś silna, czy uczył cię siły, bo cię kochał?”", ok: true },
                { t: "„Co byś mu dziś powiedziała?”", why: "Może się przydać, ale nie zmienia znaczenia, na którym stoi jej wzorzec." },
                { t: "„Czy był dobrym ojcem?”", why: "Ocena ojca nie jest tu celem. Chodzi o znaczenie jego miłości." }
              ],
              tony: "Potem poprosił, żeby usłyszała, co ojciec mówi jej teraz. Debbie: „Mam zaufać sobie. Nauczył mnie wszystkiego. To teraz moje życie. Nie muszę już niczego udowadniać”. Robbins zaproponował: uszanuj dzisiejsze życzenia ojca, a nie te dawne. Sage dała jej trzy praktyki kobiecości: kąpiel ze świecami, ruch i taniec, modlitwa i wdzięczność.",
              explain: "Odwrócenie przyczyny i skutku („kochał, więc uczył”, a nie „uczył, bo musiałam zasłużyć”) zdejmuje warunek z miłości.",
              src: "yt", ch: "Debbie, cz. 5–6"
            }
          ]
        }
      ]
    },

    /* ───────── David i Anna ───────── */
    {
      id: "yt-short", title: "David i Anna: ból i porażka", sub: "Duchowy ból · presupozycje · porażka jako nauka", len: "film do ustalenia",
      lessons: [
        {
          id: "sh-l1", title: "Z bólu w siłę, z porażki w naukę",
          items: [
            { type: "learn", title: "Kontekst",
              body: ["David przeszedł bardzo dużo (molestowanie przez brata w dzieciństwie, PTSD, śmierć brata na białaczkę). Anna pyta, jak radzić sobie z porażkami i z poczuciem, że traci czas."],
              note: "Przy takiej historii jak Davida pamiętaj o swojej granicy: coaching nie zastępuje terapii traumy."
            },
            { id: "sh-1", type: "mc", tech: "Presupozycje",
              q: "Robbins mówi: zamiast „jak mogę być wdzięczny?” pytaj „jak mogę być jeszcze bardziej wdzięczny?”. Dlaczego?",
              opts: [
                { t: "„Jeszcze bardziej” zakłada, że już jesteś wdzięczny. Każde pytanie buduje na czymś, co już jest, zamiast na braku.", ok: true },
                { t: "Bo brzmi bardziej pozytywnie.", why: "Chodzi o konkretny mechanizm: założenie ukryte w pytaniu." },
                { t: "Bo dłuższe pytania lepiej działają.", why: "Długość nie ma znaczenia. Liczy się presupozycja." }
              ],
              tony: "Porównał to do różnicy między „będę zdeterminowany” a „jestem zdeterminowany”, powiedzianym z pełną fizjologią.",
              explain: "To ta sama zasada co „co nie jest jeszcze idealne?” z działu o pytaniach.",
              src: "yt", ch: "David"
            },
            { id: "sh-2", type: "mc", tech: "Znaczenie bólu",
              dialog: [["K", "Mam każdą diagnozę: ADHD, chorobę dwubiegunową, PTSD. Byłem molestowany. Nigdy nie będę tak dobry jak inni."]],
              q: "Jak Robbins odpowiada na ten stos doświadczeń?",
              opts: [
                { t: "Najpierw szczerze: „Bardzo mi przykro, nikt nie powinien przez to przechodzić”. Potem nazywa to bólem duchowym i daje nowe znaczenie: ludzie, którzy przeszli niesprawiedliwy ból, rozwijają siłę i wrażliwość, jakiej nie ma nikt inny. „To zrobiło z ciebie kochającego człowieka, jakim jesteś.”", ok: true },
                { t: "Mówi, że diagnozy to tylko etykiety i trzeba o nich zapomnieć.", why: "Bagatelizujesz realny ból. Najpierw uznanie, potem nowe znaczenie." },
                { t: "Prosi o szczegóły każdego zdarzenia.", why: "Wpychasz go w przeżywanie wszystkiego na nowo." }
              ],
              tony: "Dodał perspektywę czasu: gdyby policzyć godziny tych zdarzeń w ciągu 43 lat, to mała część życia, tylko tak intensywna, że wystaje. David sam opowiedział potem, że przez lata spał z dziećmi w ramionach, żeby nigdy nie spotkało ich to, co jego, i stał się „ojcem twardzielem”. Robbins zatrzymał salę, żeby David to poczuł.",
              explain: "Nowe znaczenie bólu nie zaprzecza krzywdzie. Pokazuje, co z niej wyrosło, i często klient sam to potem odkrywa.",
              src: "yt", ch: "David"
            },
            { id: "sh-3", type: "order", tech: "RPM",
              q: "Annie przeszkadza, że lista zadań nigdy się nie kończy. Ułóż trzy pytania RPM, którymi Robbins zastępuje listę zadań.",
              items: ["Czego naprawdę chcę? Jaki jest rezultat (3–5 najważniejszych na ten tydzień lub dzień)?", "Dlaczego tego chcę? Jaki jest cel i emocja?", "Co muszę zrobić? Plan masowego działania, z którego wybieram 20% działań dających 80% efektu"],
              explain: "Pytanie „co mam zrobić?” bez rezultatu i celu daje stres i reagowanie na to, co przychodzi. Najpierw rezultat i powód, potem działania. Gdy coś przerwie dzień, wracasz do pytania o rezultat.",
              src: "yt", ch: "Anna"
            },
            { id: "sh-4", type: "mc", tech: "Porażka jako nauka",
              q: "Robbins opowiada Annie historię Petera Gubera, który jako chłopiec patrzył, jak ojciec niepełnosprawnego sąsiada każdego dnia zostawiał syna z rowerem. Jaki jest morał?",
              opts: [
                { t: "Ojciec kochał syna, dlatego pozwolił mu się zmagać. Porażka nie zabija, zabija poddanie się. Porażki i odrzucenia to progi zwalniające na drodze do sukcesu.", ok: true },
                { t: "Że trzeba być twardym dla innych.", why: "Morał nie dotyczy surowości, tylko znaczenia porażki." },
                { t: "Że niektórym przychodzi to łatwiej.", why: "Historia mówi coś przeciwnego: chłopiec przebił się przez trzy tygodnie upadków." }
              ],
              tony: "Dodał: przeceniamy, ile zrobimy w rok, a nie doceniamy, ile zrobimy w dekadę. Najbardziej skuteczni ludzie ponieśli 10 razy więcej porażek niż inni, tylko nie zapisali ich jako porażek. Zamień słowo „porażka” na „nauka” i poczuj różnicę w ciele.",
              explain: "Porażka to oczekiwanie, że wszystko zadziała za pierwszym razem. Zmiana znaczenia (porażka → nauka) zmienia stan, a stan zmienia działanie.",
              src: "yt", ch: "Anna"
            }
          ]
        }
      ]
    }
  ],

  /* Ścieżki, które czekają na materiały */
  upcoming: [
    { id: "p-yt", title: "Kolejne interwencje z YouTube", sub: "12 filmów z Twojej playlisty", src: "yt", need: "transkrypcje filmów 02–13, najlepiej ze znacznikami czasu" },
    { id: "p-giant", title: "Olbrzymie kroki", sub: "Ćwiczenie dnia", src: "giant", need: "Zdjęcia lub skany wybranych stron" }
  ],
  lifeforce: { title: "Life Force", sub: "Energia, zdrowie, stan. Osobna ścieżka", need: "W przygotowaniu" }
};
