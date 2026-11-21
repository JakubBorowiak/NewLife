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
    rmt: { short: "Robbins-Madanes Training", full: "Robbins-Madanes Training", status: "waiting" },
    yt: { short: "Interwencje z YouTube", full: "Transkrypcje interwencji z YouTube", status: "waiting" },
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

    /* ───────────────────────── 8. SZEŚĆ POTRZEB (RMT) ───────────────────────── */
    {
      id: "u8", title: "Sześć potrzeb człowieka", sub: "Fundament RMT", src: "rmt", ch: "Wersja wstępna", verify: true,
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
              src: "rmt", ch: "Wersja wstępna"
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
              src: "rmt", ch: "Wersja wstępna"
            },
            { id: "u8-3", type: "mc", tech: "Zmiana pojazdu", verify: true,
              q: "Odkryłeś, że wieczorne picie daje klientowi pewność (rytuał), różnorodność (rozluźnienie) i więź (kumple w barze). Co robisz?",
              opts: [
                { t: "Szukacie razem nowych sposobów, które dadzą mu te same trzy potrzeby na podobnym poziomie, np. wieczorne treningi w drużynie.", ok: true },
                { t: "Każesz mu rzucić picie i tyle.", why: "Zabierasz źródło trzech potrzeb i nic nie dajesz w zamian. Wzorzec wróci." },
                { t: "Tłumaczysz mu, jak alkohol szkodzi.", why: "Wiedza nie konkuruje z trzema zaspokojonymi potrzebami." }
              ],
              explain: "To ta sama logika co krok 4 NAC: nowa alternatywa musi dawać to, co dawał stary wzorzec. Teoria sześciu potrzeb mówi Ci dokładnie, co to jest.",
              src: "rmt", ch: "Wersja wstępna"
            }
          ]
        }
      ]
    }
  ],

  /* Ścieżki, które czekają na materiały */
  upcoming: [
    { id: "p-rmt", title: "Interwencje RMT", sub: "Prawdziwe dialogi ze szkolenia", src: "rmt", need: "Transkrypcje modułów szkolenia (pliki .txt)" },
    { id: "p-yt", title: "Interwencje z YouTube", sub: "Co zrobił Robbins w danym momencie", src: "yt", need: "5–10 pełnych transkrypcji z linkami do filmów" },
    { id: "p-giant", title: "Olbrzymie kroki", sub: "Ćwiczenie dnia", src: "giant", need: "Zdjęcia lub skany wybranych stron" }
  ],
  lifeforce: { title: "Life Force", sub: "Energia, zdrowie, stan. Osobna ścieżka", need: "W przygotowaniu" }
};
