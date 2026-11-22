/* Symulator interwencji – przypadki zmyślone (paczka 2): więcej rozpoznawania wzorców. */
window.CASES = (window.CASES || []).concat([

{ id:"c031", tag:"Rozpoznaj wzorzec", title:"Bogdan: „wszyscy mnie wykorzystują”", who:"Bogdan, 55 lat, przedsiębiorca",
  ctx:"Trzech wspólników z rzędu go „oszukało”.",
  steps:[
  { type:"mc", tech:"Rozpoznanie wzorca", dialog:[["K","Wszyscy w końcu mnie wykorzystują. Dajesz ludziom palec, a biorą całą rękę."]],
    q:"Jaki wzorzec rozpoznajesz?",
    opts:[
      { t:"Przekonanie globalne (o ludziach), zbudowane z kilku bolesnych referencji, które filtruje każdą nową relację.", ok:true },
      { t:"Metaprogram „do”.", why:"Nie mówi o dążeniu do celu, tylko o tym, jacy są ludzie." },
      { t:"Konflikt części.", why:"Nie mówi o wewnętrznym rozdarciu." }
    ],
    explain:"„Wszyscy…”, „ludzie są…” to przekonanie globalne. Następne pytania: co łączy tych trzech wspólników poza nim? Jak ich wybierał? To przenosi uwagę z „ludzi” na jego wzorzec wyboru." }
]},

{ id:"c032", tag:"Rozpoznaj wzorzec", title:"Lena: „jeszcze nie jestem gotowa”", who:"Lena, 34 lata, chce otworzyć pracownię ceramiki",
  ctx:"Od 3 lat robi kolejne kursy. Pracowni dalej nie ma.",
  steps:[
  { type:"mc", tech:"Rozpoznanie wzorca", dialog:[["K","Najpierw muszę skończyć jeszcze jeden kurs, żeby być naprawdę gotowa."]],
    q:"Jaki wzorzec widzisz?",
    opts:[
      { t:"Perfekcjonizm jako unikanie: nauka daje jej pewność i poczucie postępu bez ryzyka porażki.", ok:true },
      { t:"Brak umiejętności.", why:"Po trzech latach kursów umiejętności raczej ma. Brakuje gotowości na ryzyko." },
      { t:"Brak pieniędzy.", why:"Nie wspomina o pieniądzach, a na kursy je ma." }
    ],
    explain:"„Muszę być gotowa” to często strach przed oceną w przebraniu. Pytanie: co by się stało, gdybyś zaczęła teraz, nie będąc idealna?",
    say:"„Ile kursów zrobi z ciebie osobę gotową? Po czym poznasz, że to już?”" }
]},

{ id:"c033", tag:"Rozpoznaj wzorzec", title:"Igor: „to przez szefa”", who:"Igor, 36 lat",
  ctx:"Narzeka na stres, brak awansu i zmęczenie.",
  steps:[
  { type:"mc", tech:"Rozpoznanie wzorca", dialog:[["K","Gdyby szef był normalny, wszystko by się układało. To on mnie tak wykańcza."]],
    q:"Którego z trzech przekonań o zmianie brakuje?",
    opts:[
      { t:"„Ja muszę to zmienić”: źródło zmiany jest na zewnątrz, u szefa.", ok:true },
      { t:"„Coś musi się zmienić”.", why:"Wyraźnie chce zmiany. Tylko oczekuje jej od kogoś innego." },
      { t:"„Ja mogę to zmienić”.", why:"Nie mówi, że nie da rady. Mówi, że to szef musi się zmienić." }
    ],
    explain:"Zanim przejdziesz do technik, przenieś uwagę na to, co klient kontroluje: swoją reakcję, swoje granice, swoje decyzje." }
]},

{ id:"c034", tag:"Rozpoznaj wzorzec", title:"Marta: „muszę wszystkim pomóc”", who:"Marta, 44 lata, pielęgniarka",
  ctx:"Pomaga rodzinie, sąsiadom, koleżankom. Sama jest na granicy wyczerpania.",
  steps:[
  { type:"mc", tech:"Rozpoznanie wzorca", dialog:[["K","Jak komuś nie pomogę, to czuję się jak zły człowiek."]],
    q:"Co rozpoznajesz?",
    opts:[
      { t:"Regułę: „jestem dobrym człowiekiem tylko wtedy, gdy pomagam”. Jej poczucie wartości zależy od dawania.", ok:true },
      { t:"Zespół wypalenia, który trzeba zdiagnozować.", why:"Nie diagnozujesz. Widzisz regułę, która napędza zachowanie." },
      { t:"Metaprogram „ja”.", why:"Wręcz przeciwnie, ona patrzy przez pryzmat innych." }
    ],
    explain:"Jak u Chen i Debbie: osoba, która daje, często pozwala sobie zadbać o siebie tylko wtedy, gdy już bardzo boli. Praca: poszerzyć regułę, tak żeby dbanie o siebie też było „dobre”." },
  { type:"write", tech:"Przebudowa reguły", ctx:"Reguła Marty: „Jestem dobrym człowiekiem, tylko gdy pomagam innym”.",
    q:"Napisz nową regułę, która pozwoli jej czuć się dobrym człowiekiem częściej i bez wyczerpania.",
    hints:["Ma kilka sposobów spełnienia","Zawiera też dbanie o siebie","Jest w jej kontroli"],
    model:["„Jestem dobrym człowiekiem, gdy działam z serca: kiedy pomagam, kiedy mówię prawdę, kiedy odpoczywam, żeby móc dawać dalej, i kiedy uczę innych radzić sobie samodzielnie.”"] }
]},

{ id:"c035", tag:"Rozpoznaj wzorzec", title:"Tadeusz: same fakty", who:"Tadeusz, 60 lat, inżynier",
  ctx:"Przyszedł, bo „żona kazała”. Mówi krótko i rzeczowo.",
  steps:[
  { type:"mc", tech:"Dopasowanie do klienta", dialog:[["K","Proszę konkretnie. Jaki jest plan, ile sesji i jakie są wyniki badań na skuteczność?"]],
    q:"Jak budujesz z nim kontakt?",
    opts:[
      { t:"Dopasowujesz się do jego stylu: mówisz konkretnie, podajesz strukturę („trzy sesje, cel, sposób pomiaru”) i nie zaczynasz od emocji.", ok:true },
      { t:"Zaczynasz od ćwiczenia z wizualizacją i oddechem.", why:"Dla kogoś tak rzeczowego to szybki sposób na utratę kontaktu." },
      { t:"Mówisz mu, że musi się otworzyć emocjonalnie.", why:"Wymagasz od niego wejścia w twój świat, zamiast wejść w jego." }
    ],
    explain:"Kontakt buduje się przez podobieństwo: tempo, styl, poziom szczegółu. Do emocji dojdziesz później, gdy klient poczuje, że mówisz jego językiem." }
]},

{ id:"c036", tag:"Rozpoznaj wzorzec", title:"Nina: wizualistka", who:"Nina, 27 lat, projektantka",
  ctx:"Chce więcej motywacji do treningów.",
  steps:[
  { type:"mc", tech:"Systemy reprezentacji", dialog:[["K","Nie widzę siebie na siłowni. To nie wygląda jak moje życie. Nie mam obrazu, jak to miałoby wyglądać."]],
    q:"Co zauważasz w jej języku i jak to wykorzystać?",
    opts:[
      { t:"Mówi obrazami („nie widzę”, „wygląda”, „obraz”). Pracuj wizualnie: niech zobaczy jasny, wyraźny obraz siebie za pół roku, w konkretnej scenie.", ok:true },
      { t:"Mówi o uczuciach, więc pracuj z ciałem.", why:"Jej słowa są wzrokowe: widzieć, wyglądać, obraz." },
      { t:"Nic. Słowa nie mają znaczenia.", why:"Słowa, których używa klient, pokazują, jak przetwarza informacje." }
    ],
    explain:"Ludzie mają preferowany system reprezentacji (wzrok, słuch, ciało). Mówiąc w jego systemie, szybciej docierasz do klienta." }
]},

{ id:"c037", tag:"Rozpoznaj wzorzec", title:"Wojtek: metaprogram „od”", who:"Wojtek, 33 lata, handlowiec",
  ctx:"Szef chce go motywować wizją awansu, ale to nie działa.",
  steps:[
  { type:"mc", tech:"Metaprogramy", dialog:[["C","Co cię motywuje do pracy?"],["K","Żeby nie wylecieć. Żeby nie skończyć jak mój ojciec, bez grosza. Żeby nie mieć długów."]],
    q:"Jaki metaprogram słyszysz?",
    opts:[
      { t:"„Od”: motywuje go unikanie bólu. Wizja awansu do niego nie trafia.", ok:true },
      { t:"„Do”.", why:"Każde zdanie zaczyna się od „żeby nie”." },
      { t:"Zewnętrzne odniesienie.", why:"Ten metaprogram dotyczy źródła oceny, a nie kierunku motywacji." }
    ],
    explain:"Ludzi „od” mocniej rusza perspektywa straty. Dla trwałej satysfakcji warto stopniowo dodać też cele „do”." }
]},

{ id:"c038", tag:"Rozpoznaj wzorzec", title:"Ula: konieczność czy możliwość", who:"Ula, 41 lat",
  ctx:"Pytasz, dlaczego wybrała obecną pracę.",
  steps:[
  { type:"mc", tech:"Metaprogramy", dialog:[["K","Bo musiałam coś mieć po studiach, a tam akurat przyjmowali. I tak zostałam."]],
    q:"Jaki metaprogram słyszysz?",
    opts:[
      { t:"Konieczność: robi rzeczy, bo musi, a nie dlatego, że widzi możliwości.", ok:true },
      { t:"Możliwość.", why:"Nie wspomina o opcjach ani o tym, czego chciała." },
      { t:"Metaprogram „ja”.", why:"Ten dotyczy tego, czy patrzy przez pryzmat siebie czy innych." }
    ],
    explain:"Ludzie „konieczności” potrzebują więcej wsparcia przy szukaniu opcji. Pytaj: „Gdybyś mogła wybrać cokolwiek, co by to było?”" }
]},

{ id:"c039", tag:"Rozpoznaj wzorzec", title:"Krzysiek: porównanie bez punktu", who:"Krzysiek, 30 lat",
  ctx:"Chce zmienić pracę.",
  steps:[
  { type:"mc", tech:"Metamodel: usunięcie", dialog:[["K","Chcę lepszej pracy."]],
    q:"Co pytasz?",
    opts:[
      { t:"„Lepszej niż obecna pod jakim względem? Po czym poznasz, że jest lepsza?”", ok:true },
      { t:"„Jakiej branży szukasz?”", why:"Pomijasz to, że nie wiesz, co dla niego znaczy „lepsza”." },
      { t:"„Każdy chce lepszej pracy.”", why:"Akceptujesz mgłę." }
    ],
    explain:"„Lepszy” bez punktu odniesienia to porównanie z usuniętym elementem. Dopóki go nie nazwie, nie ma celu (krok 1 NAC)." }
]},

{ id:"c040", tag:"Rozpoznaj wzorzec", title:"Edyta: osąd bez sędziego", who:"Edyta, 36 lat",
  ctx:"Czuje presję na macierzyństwo.",
  steps:[
  { type:"mc", tech:"Metamodel: utracony autor", dialog:[["K","Po trzydziestce to już wypada mieć dzieci."]],
    q:"Co pytasz?",
    opts:[
      { t:"„Komu wypada? Kto tak mówi? I czy ty tak uważasz?”", ok:true },
      { t:"„Czy chcesz mieć dzieci?”", why:"Dobre pytanie, ale najpierw oddziel jej zdanie od cudzego." },
      { t:"„Teraz to już nie jest takie ważne.”", why:"Zastępujesz jedną cudzą normę drugą." }
    ],
    explain:"„Wypada”, „tak się nie robi” to sądy bez autora. Pytanie „kto tak mówi?” pozwala klientce sprawdzić, czy to jej wartość." }
]},

/* ───────── więcej sesji ───────── */
{ id:"c041", tag:"Praca i biznes", title:"Filip: zespół go nie słucha", who:"Filip, 35 lat, nowy kierownik",
  ctx:"Przejął zespół po lubianym szefie. Ludzie ignorują jego polecenia.",
  steps:[
  { type:"mc", tech:"Pozycje percepcyjne", dialog:[["K","Mówię jasno, co trzeba zrobić, a oni robią po swojemu."]],
    q:"Co proponujesz?",
    opts:[
      { t:"Ćwiczenie pozycji: niech opowie o swoim pierwszym tygodniu jako członek zespołu, który kochał poprzedniego szefa.", ok:true },
      { t:"Wprowadzenie kar za niewykonanie poleceń.", why:"Siła wzmocni opór. Najpierw zrozum, skąd się bierze." },
      { t:"Przeczytanie książki o przywództwie.", why:"Wiedza nie da mu perspektywy zespołu." }
    ],
    explain:"Opór zespołu to często żal po poprzednim szefie i brak kontaktu z nowym. Druga pozycja pomoże mu zobaczyć, czego potrzebują." },
  { type:"mc", tech:"Brak oporu, sztywny rozmówca", q:"Robbins mówi, że nie ma oporu, są tylko mało elastyczni rozmówcy. Co to znaczy dla Filipa?",
    opts:[
      { t:"Zamiast mocniej naciskać, powinien zmienić sposób: najpierw rozmowy jeden na jeden, uznanie tego, co działało u poprzednika, i dopiero potem nowe zasady.", ok:true },
      { t:"Że zespół jest leniwy.", why:"Ta zasada przenosi odpowiedzialność na rozmówcę, a nie na zespół." },
      { t:"Że trzeba wymienić zespół.", why:"Za szybko i za drogo, zanim spróbuje innej komunikacji." }
    ],
    explain:"Aikido w praktyce: znajdź punkt zgody (szacunek dla poprzednika), połącz się z nim i dopiero potem przekieruj." }
]},

{ id:"c042", tag:"Praca i biznes", title:"Renata: ceny za niskie", who:"Renata, 39 lat, fotografka",
  ctx:"Ma dużo zleceń, ale ledwo wiąże koniec z końcem. Boi się podnieść ceny.",
  steps:[
  { type:"mc", tech:"Przekonania o wartości", dialog:[["K","Jak podniosę ceny, wszyscy klienci odejdą."]],
    q:"Jak to sprawdzasz?",
    opts:[
      { t:"Metamodelem i małym eksperymentem: „Wszyscy? Skąd wiesz?”, a potem nowa cena tylko dla nowych klientów przez miesiąc.", ok:true },
      { t:"„Na pewno nie odejdą.”", why:"Nie wiesz tego, a ona ci nie uwierzy." },
      { t:"„To zostań przy tych cenach.”", why:"Zostawiasz ją w sytuacji, która ją wykańcza." }
    ],
    explain:"Przekonanie oparte na lęku najłatwiej podważyć bezpiecznym eksperymentem. Wynik staje się referencją." },
  { type:"mc", tech:"Dźwignia", q:"Renata wciąż się waha. Co budujesz?",
    opts:[
      { t:"Dźwignię: „Ile cię kosztuje rok pracy po 60 godzin tygodniowo za te pieniądze? Co z twoim zdrowiem i rodziną za 5 lat?”", ok:true },
      { t:"Listę cen konkurencji.", why:"Fakty pomagają, ale nie poruszą jej emocjonalnie tak jak koszt dla niej samej." },
      { t:"Pozwolenie, żeby się zastanowiła jeszcze rok.", why:"Każdy rok kosztuje ją zdrowie i pieniądze." }
    ],
    explain:"Ból niezmieniania musi być większy niż strach przed stratą klientów." }
]},

{ id:"c043", tag:"Praca i biznes", title:"Artur: sprzedaż bez przekonania", who:"Artur, 26 lat, sprzedawca fotowoltaiki",
  ctx:"Zna produkt, ale ma najsłabsze wyniki w zespole.",
  steps:[
  { type:"mc", tech:"Kongruencja", dialog:[["K","Mówię dokładnie to, co jest w skrypcie. Słowo w słowo."]],
    q:"Co sprawdzasz?",
    opts:[
      { t:"Kongruencję: czy sam wierzy w produkt i czy jego ton i ciało mówią to samo co słowa.", ok:true },
      { t:"Czy skrypt jest dobry.", why:"Inni z tym samym skryptem sprzedają. Różnica jest w nim." },
      { t:"Czy klienci mają pieniądze.", why:"To samo dotyczy całego zespołu." }
    ],
    explain:"Jak przy Tinie Marie: słowa bez zgodnego tonu i ciała są puste. Klient czuje brak przekonania szybciej, niż słyszy argumenty." },
  { type:"mc", tech:"Potrzeby klienta", q:"Artur mówi głównie o parametrach paneli. Czego mu brakuje według zasad z interwencji z Pixie?",
    opts:[
      { t:"Skupienia na potrzebach klienta: pewność (gwarancje, oszczędności), znaczenie (mądra decyzja), wkład (ekologia dla dzieci).", ok:true },
      { t:"Większej liczby parametrów technicznych.", why:"Fakty bez związku z potrzebami klienta nie sprzedają." },
      { t:"Agresywniejszego zamykania sprzedaży.", why:"Nacisk tworzy opór." }
    ],
    explain:"Wpływ zaczyna się od potrzeb drugiej strony. Te same panele można opowiedzieć przez potrzeby konkretnego klienta." }
]},

{ id:"c044", tag:"Lęk i stres", title:"Patrycja: egzamin na prawo jazdy", who:"Patrycja, 22 lata, oblała 4 razy",
  ctx:"Na jazdach z instruktorem jeździ dobrze. Na egzaminie się sypie.",
  steps:[
  { type:"mc", tech:"Stan", q:"Skoro umie jeździć, gdzie leży problem?",
    opts:[
      { t:"W stanie na egzaminie: umiejętności ma, ale w stanie lęku nie ma do nich dostępu.", ok:true },
      { t:"W umiejętnościach. Potrzebuje więcej jazd.", why:"Na jazdach jeździ dobrze. Brakuje jej stanu, a nie umiejętności." },
      { t:"W egzaminatorze.", why:"Czterech różnych egzaminatorów to raczej nie przypadek." }
    ],
    explain:"Zmień stan, zmienisz możliwości. To lekcja z rozdziału o stanie: ten sam człowiek w innym stanie ma dostęp do innych zasobów." },
  { type:"mc", tech:"Kotwiczenie i przeniesienie w przyszłość", q:"Jak przygotowujesz ją na egzamin?",
    opts:[
      { t:"Kotwiczysz stan spokoju i pewności z udanej jazdy, a potem w wyobraźni przechodzi cały egzamin z odpaloną kotwicą, aż obraz egzaminu przestanie budzić lęk.", ok:true },
      { t:"Mówisz, żeby się nie stresowała.", why:"Polecenie „nie stresuj się” nie daje żadnego narzędzia." },
      { t:"Radzisz wziąć coś na uspokojenie.", why:"To nie twoja kompetencja i nie buduje zasobu." }
    ],
    explain:"Połączenie kotwicy z przeniesieniem w przyszłość buduje nowy zapis: egzamin = spokój." }
]},

{ id:"c045", tag:"Lęk i stres", title:"Daniel: lęk o zdrowie", who:"Daniel, 38 lat",
  ctx:"Po śmierci kolegi na zawał co chwilę mierzy ciśnienie i szuka objawów w internecie.",
  steps:[
  { type:"mc", tech:"Sześć potrzeb", q:"Jaką potrzebę zaspokaja mu ciągłe mierzenie ciśnienia?",
    opts:[
      { t:"Pewność: chwilowa ulga, że wszystko w porządku.", ok:true },
      { t:"Różnorodność.", why:"Mierzenie daje mu raczej ulgę niż ekscytację." },
      { t:"Wkład.", why:"Nie daje nic innym." }
    ],
    explain:"Ulga po sprawdzeniu wzmacnia nawyk sprawdzania, a lęk rośnie. Potrzebna jest zdrowsza droga do pewności (np. badania raz na pół roku i plan zdrowotny)." },
  { type:"mc", tech:"Granica kompetencji", q:"Lęk nasila się od pół roku i utrudnia mu pracę. Co jest ważne?",
    opts:[
      { t:"Zaproponowanie konsultacji z psychologiem lub psychiatrą równolegle do coachingu.", ok:true },
      { t:"Obiecanie, że po trzech sesjach przejdzie.", why:"Nie wolno obiecywać efektów terapeutycznych." },
      { t:"Zignorowanie tego, bo to tylko lęk.", why:"Nasilający się lęk wymaga uwagi specjalisty." }
    ],
    explain:"Znajomość granic to część profesjonalizmu coacha." }
]},

{ id:"c046", tag:"Nawyki", title:"Olga: zakupy pod wpływem emocji", who:"Olga, 33 lata",
  ctx:"Kupuje ubrania, gdy jest smutna. Ma długi na karcie.",
  steps:[
  { type:"mc", tech:"Rozpoznanie wzorca", dialog:[["K","Jak kupuję, przez chwilę czuję się świetnie. Potem przychodzi rachunek i wstyd."]],
    q:"Jaki wzorzec widzisz?",
    opts:[
      { t:"Szaloną ósemkę: smutek → zakupy (ulga, różnorodność) → wstyd → smutek → znowu zakupy.", ok:true },
      { t:"Brak wiedzy o finansach.", why:"Wie, że ma długi. Problem jest emocjonalny." },
      { t:"Uzależnienie, które wymaga leczenia.", why:"Może być potrzebna pomoc specjalisty, ale najpierw zobacz mechanizm." }
    ],
    explain:"Ulga z zakupów i wstyd po nich napędzają się nawzajem. Wyjście: przerwać pętlę w miejscu smutku i dać inną drogę do ulgi." },
  { type:"mc", tech:"Przerwanie wzorca", q:"Co Olga może zrobić w chwili, gdy ma koszyk pełen ubrań?",
    opts:[
      { t:"Zasada 24 godzin plus zmiana stanu: zostaw koszyk, wyjdź na 10 minut ruchu i zadaj sobie pytanie: „Co ja teraz naprawdę czuję i czego potrzebuję?”", ok:true },
      { t:"Usunąć aplikację sklepu.", why:"Pomaga trochę, ale nie dotyka emocji, które ją napędzają." },
      { t:"Kupić tylko połowę.", why:"To nadal ten sam wzorzec." }
    ],
    explain:"Przerwanie w chwili wyzwalacza, zmiana fizjologii i dobre pytanie łączą całą triadę." }
]},

{ id:"c047", tag:"Nawyki", title:"Jacek: gry do rana", who:"Jacek, 19 lat",
  ctx:"Gra po 8 godzin dziennie. Rodzice przyprowadzili go na sesję.",
  steps:[
  { type:"mc", tech:"Sześć potrzeb", dialog:[["K","W grze jestem kimś. Mam swoją drużynę, ludzie na mnie liczą."]],
    q:"Jakie potrzeby zaspokaja mu gra?",
    opts:[
      { t:"Znaczenie (jestem kimś), więź (drużyna), różnorodność i rozwój (nowe poziomy). Trzy lub więcej potrzeb naraz, dlatego to takie silne.", ok:true },
      { t:"Tylko różnorodność.", why:"Sam mówi o byciu kimś i o drużynie." },
      { t:"Żadnych, to strata czasu.", why:"Gdyby niczego nie dawała, nie grałby 8 godzin." }
    ],
    explain:"Zamiast zakazywać, szukaj pojazdu w realnym świecie, który da mu znaczenie i drużynę (sport drużynowy, projekt, wolontariat, praca w zespole)." },
  { type:"mc", tech:"Kontakt", q:"Jacek przyszedł na sesję z przymusu. Jak zaczynasz?",
    opts:[
      { t:"Wchodzisz w jego świat: pytasz o grę, w co gra, jaka jest jego rola w drużynie. Bez oceny.", ok:true },
      { t:"Mówisz mu, ile czasu traci.", why:"Brzmisz jak rodzice. Kontakt zniknie." },
      { t:"Pytasz, czy wie, że gry uzależniają.", why:"To od razu ustawia cię po stronie przeciwnika." }
    ],
    explain:"Najpierw podążasz, potem prowadzisz. Z kimś, kto przyszedł z przymusu, kontakt jest warunkiem czegokolwiek." }
]},

{ id:"c048", tag:"Związki", title:"Basia i Leszek: emerytura", who:"Para, 65+",
  ctx:"Od roku oboje na emeryturze. Ciągle się kłócą.",
  steps:[
  { type:"mc", tech:"Bilans potrzeb", dialog:[["P","(Basia) Kiedyś on był w pracy, ja miałam swój świat. Teraz jest cały dzień w domu i wszystko komentuje."]],
    q:"Co się zmieniło w ich potrzebach?",
    opts:[
      { t:"Oboje stracili źródła znaczenia i różnorodności, które dawała praca i osobny czas. Teraz próbują je zaspokajać kosztem siebie nawzajem.", ok:true },
      { t:"Przestali się kochać.", why:"Nic na to nie wskazuje. Zmieniła się sytuacja, nie uczucie." },
      { t:"Leszek ma trudny charakter.", why:"Etykieta zamiast mechanizmu." }
    ],
    explain:"Duża zmiana życiowa zabiera stare pojazdy potrzeb. Każde z nich potrzebuje nowych źródeł znaczenia i różnorodności, także osobnych." }
]},

{ id:"c049", tag:"Związki", title:"Kinga: przyciąga złych facetów", who:"Kinga, 29 lat",
  ctx:"Trzeci związek z rzędu z mężczyzną, który ją zdradził.",
  steps:[
  { type:"mc", tech:"Rozpoznanie wzorca", dialog:[["K","Zawsze trafiam na takich samych. Na początku są czarujący, a potem…"]],
    q:"Co sprawdzasz?",
    opts:[
      { t:"Jej wzorzec wyboru: co ją przyciąga na początku i jakie sygnały ostrzegawcze przeoczyła. Wspólnym mianownikiem jest ona.", ok:true },
      { t:"Że ma pecha.", why:"Trzy razy to wzorzec, a nie pech." },
      { t:"Że wszyscy mężczyźni zdradzają.", why:"Wzmacniasz uogólnienie, które ją krzywdzi." }
    ],
    explain:"Jak mówi Robbins: 80% sukcesu w związku to wybór, i to też wybór, którą część siebie wnosisz. Badaj, co ją przyciąga i dlaczego." }
]},

{ id:"c050", tag:"Pewność siebie", title:"Hubert: jąkanie przy szefie", who:"Hubert, 31 lat",
  ctx:"Ze znajomymi mówi płynnie. Przy szefie zaczyna się jąkać.",
  steps:[
  { type:"mc", tech:"Kontekst", q:"Co mówi ci ta różnica?",
    opts:[
      { t:"Umiejętność płynnego mówienia już ma. Problemem jest stan, który odpala się w kontekście szefa.", ok:true },
      { t:"Że potrzebuje logopedy.", why:"Skoro ze znajomymi mówi płynnie, to raczej sprawa stanu." },
      { t:"Że szef jest straszny.", why:"Może, ale to Hubert ma wpływ tylko na swoją reakcję." }
    ],
    explain:"Gdy umiejętność działa w jednym kontekście, a w innym nie, pracujesz ze stanem i znaczeniem kontekstu, a nie z umiejętnością." },
  { type:"mc", tech:"Submodalności", dialog:[["K","Jak wyobrażam sobie szefa, jest wielki, stoi nade mną, mówi głośno."]],
    q:"Co robisz z tym obrazem?",
    opts:[
      { t:"Zmniejszasz szefa do normalnych rozmiarów, sadzasz go na wysokości oczu Huberta i ściszasz mu głos.", ok:true },
      { t:"Każesz Hubertowi wyobrazić sobie siebie jeszcze mniejszego.", why:"Wzmacniasz proporcję, która odpala lęk." },
      { t:"Pomijasz to.", why:"Obraz jest kluczem do jego reakcji." }
    ],
    explain:"Proporcje w obrazie wewnętrznym (szef wielki, ja mały) dają ciału informację o zagrożeniu. Zmiana proporcji zmienia reakcję." }
]},

{ id:"c051", tag:"Pewność siebie", title:"Gosia: „za stara na zmianę”", who:"Gosia, 52 lata, chce zostać programistką",
  ctx:"Zrobiła kurs online, ale nie wysyła CV.",
  steps:[
  { type:"mc", tech:"Wzorzec Dickensa", dialog:[["K","W moim wieku nikt mnie nie zatrudni. To przekonanie siedzi mi w głowie od lat."]],
    q:"Klientka wie, że przekonanie jej szkodzi, ale nie potrafi go puścić. Co wybierasz?",
    opts:[
      { t:"Wzorzec Dickensa: co to przekonanie już ją kosztowało, co kosztuje teraz, co będzie kosztować za 5 i 10 lat. Potem nowe przekonanie i jego przyszłość.", ok:true },
      { t:"Swish.", why:"Swish jest na nawyki z wyzwalaczem, a nie na przekonania." },
      { t:"Technikę kina.", why:"Nie ma tu bolesnego wspomnienia." }
    ],
    explain:"Dickens buduje dźwignię właśnie wtedy, gdy klient wie, że przekonanie szkodzi, ale brakuje mu motywacji do zmiany." },
  { type:"mc", tech:"Referencje", q:"Jakie nogi zbudujesz dla nowego przekonania „mój wiek to atut”?",
    opts:[
      { t:"Przykłady ludzi, którzy przebranżowili się po 50, jej atuty (doświadczenie, dojrzałość, rzetelność) i jedno małe zadanie: wysłać 5 CV w tym tygodniu.", ok:true },
      { t:"Afirmacja „wiek nie ma znaczenia” codziennie rano.", why:"Bez referencji afirmacja to blat bez nóg." },
      { t:"Jeszcze jeden kurs.", why:"To odkładanie, nie referencja." }
    ],
    explain:"Przekonanie potrzebuje nóg: cudzych przykładów, własnych atutów i własnego działania." }
]},

{ id:"c052", tag:"Rodzina", title:"Oskar: ojciec, który nie chwalił", who:"Oskar, 40 lat, odnosi sukcesy, a czuje pustkę",
  ctx:"Ojciec nigdy go nie pochwalił. Zmarł 5 lat temu.",
  steps:[
  { type:"mc", tech:"Źródło warunkowania", q:"Jakie pytania zadajesz, żeby dojść do źródła wzorca (jak Robbins z Debbie)?",
    opts:[
      { t:"„Czyjej miłości najbardziej pragnąłeś? Kim musiałeś być, żeby ją dostać? Kim nigdy nie mogłeś być?”", ok:true },
      { t:"„Dlaczego ojciec cię nie chwalił?”", why:"To czytanie w myślach zmarłego. Klient nie ma na to wpływu." },
      { t:"„Ile zarabiasz?”", why:"Sukces zewnętrzny nie jest tu problemem." }
    ],
    explain:"Te trzy pytania odsłaniają, z jakiej tożsamości klient działa. Często odkrywa, że wciąż gra dla publiczności, której już nie ma." },
  { type:"mc", tech:"Reframing intencji rodzica", dialog:[["K","Musiałem być najlepszy. Nigdy nie mogłem być słaby."]],
    q:"Jakie pytanie zadajesz?",
    opts:[
      { t:"„Czy ojciec kochał cię za to, że byłeś najlepszy, czy wymagał od ciebie, bo cię kochał i chciał, żebyś sobie poradził?”", ok:true },
      { t:"„To okrutne z jego strony.”", why:"Ocena ojca utrwala ból i nie zmienia znaczenia." },
      { t:"„Teraz już nie musisz być najlepszy.”", why:"Zbyt szybko. Najpierw zmień znaczenie przeszłości." }
    ],
    explain:"Odwrócenie przyczyny i skutku zdejmuje warunek z miłości, jak u Debbie." }
]},

{ id:"c053", tag:"Strata i zmiana", title:"Iwona: rozwód po 20 latach", who:"Iwona, 47 lat",
  ctx:"Mąż odszedł do innej. Ona czuje, że „życie się skończyło”.",
  steps:[
  { type:"mc", tech:"Metafora", dialog:[["K","Jakby ktoś zgasił światło. Siedzę w ciemnym pokoju."]],
    q:"Jak pracujesz z jej metaforą?",
    opts:[
      { t:"Wchodzisz w nią: „Gdzie w tym pokoju jest choćby szpara światła? Gdzie są drzwi? Kto mógłby je otworzyć?”", ok:true },
      { t:"„To nie jest koniec świata.”", why:"Zaprzeczasz jej doświadczeniu i tracisz kontakt." },
      { t:"„Dlaczego czujesz się w ciemności?”", why:"Wzmacniasz metaforę, zamiast ją rozbudować." }
    ],
    explain:"Rozbudowanie metafory o wyjście pozwala klientce zostać w jej języku i zobaczyć nową możliwość." },
  { type:"mc", tech:"Odpowiedzialność bez winy", dialog:[["K","Dałam mu najlepsze lata, a on mnie tak potraktował."]],
    q:"Jak pracujesz z tym zdaniem (jak Robbins z Pixie, ale łagodniej)?",
    opts:[
      { t:"Najpierw pełne uznanie bólu. Potem: „Te lata coś ci też dały. Co z nich jest twoje i zostaje z tobą?”", ok:true },
      { t:"„Sama to wybrałaś, więc nie narzekaj.”", why:"Za ostro, bez kontaktu i w złym momencie." },
      { t:"„On jest okropny.”", why:"Utrwalasz historię ofiary." }
    ],
    explain:"Odpowiedzialność zwraca jej wpływ, ale w żałobie trzeba ją podać z ciepłem. Pytanie o to, co zostaje, buduje tożsamość poza związkiem." }
]},

{ id:"c054", tag:"Decyzje", title:"Paulina: studia czy praca", who:"Paulina, 19 lat",
  ctx:"Rodzice chcą, żeby studiowała prawo. Ona chce zostać fryzjerką.",
  steps:[
  { type:"mc", tech:"Praca z częściami", dialog:[["K","Część mnie chce zrobić to, co kocham. A druga część nie chce zawieść rodziców."]],
    q:"Co wybierasz?",
    opts:[
      { t:"Pracę z częściami: pozytywna intencja każdej (wolność i pasja; miłość i lojalność wobec rodziców) i szukanie mostu.", ok:true },
      { t:"Mówisz jej, żeby słuchała serca.", why:"Stajesz po jednej stronie. Druga część będzie się buntować." },
      { t:"Mówisz, że rodzice wiedzą lepiej.", why:"Stajesz po drugiej stronie." }
    ],
    explain:"Obie części chcą dla niej dobrze. Most może wyglądać np. tak: rozmowa z rodzicami o jej planie biznesowym (własny salon), który da im spokój." }
]},

{ id:"c055", tag:"Złość i konflikt", title:"Sebastian: wściekły na ojca", who:"Sebastian, 34 lata",
  ctx:"Ojciec obiecał mu pomóc przy budowie domu i się wycofał.",
  steps:[
  { type:"mc", tech:"Sygnały do działania", dialog:[["K","Jestem wściekły. …Właściwie to chyba bardziej mi przykro. Liczyłem na niego."]],
    q:"Co się właśnie stało?",
    opts:[
      { t:"Klient sam nazwał głębszą emocję: pod złością jest zranienie, czyli niespełnione oczekiwanie. To pierwszy krok opanowania emocji.", ok:true },
      { t:"Klient się waha, więc trzeba go wesprzeć w złości.", why:"Złość to warstwa wierzchnia. Zranienie jest bliższe prawdy." },
      { t:"Nic istotnego.", why:"Nazwanie prawdziwej emocji obniża jej intensywność i otwiera rozmowę." }
    ],
    explain:"Krok 1 z sześciu kroków pracy z emocją: nazwij, co naprawdę czujesz. Zranienie łatwiej wyrazić ojcu niż złość." },
  { type:"write", tech:"Sztuka prośby", ctx:"Sebastian chce porozmawiać z ojcem bez kłótni.",
    q:"Napisz, co mógłby powiedzieć ojcu.",
    hints:["Nazywa zranienie, a nie atakuje","Pyta o powód, zamiast zakładać złą wolę","Zawiera konkretną prośbę lub pytanie"],
    model:["„Tato, było mi naprawdę przykro, kiedy się wycofałeś. Liczyłem na ciebie. Powiesz mi, co się stało? Może jest coś, w czym jednak mógłbyś pomóc?”"] }
]},

{ id:"c056", tag:"Złość i konflikt", title:"Alicja: „kolega mnie upokorzył”", who:"Alicja, 28 lat",
  ctx:"Kolega skrytykował jej projekt przy całym zespole.",
  steps:[
  { type:"mc", tech:"Słownictwo transformacyjne", dialog:[["K","Byłam totalnie upokorzona! Najgorszy dzień w moim życiu!"]],
    q:"Co mówisz?",
    opts:[
      { t:"„Upokorzona to mocne słowo. Czy byłaś upokorzona, czy raczej bardzo zaskoczona i rozdrażniona?”", ok:true },
      { t:"„Rozumiem, to musiało być upokarzające.”", why:"Powtarzasz i utrwalasz najmocniejsze słowo." },
      { t:"„Najgorszy dzień? Chyba przesadzasz.”", why:"Bagatelizujesz. Zmiana słowa działa, gdy klientka wybiera ją sama." }
    ],
    explain:"Słowa, którymi nazywamy doświadczenie, stają się doświadczeniem. Proponujesz słowo o niższej intensywności i pozwalasz jej wybrać." }
]},

{ id:"c057", tag:"Lęk i stres", title:"Kacper: perfekcjonizm w pracy", who:"Kacper, 32 lata, analityk",
  ctx:"Sprawdza każdy raport pięć razy. Nie wyrabia się w terminach.",
  steps:[
  { type:"mc", tech:"Zmiana poziomu ogólności", dialog:[["K","Bo jak będzie choć jeden błąd, to…"],["C","To co?"],["K","To… że nie jestem dobry. Że mnie zwolnią."]],
    q:"Jaką technikę zastosowałeś przez proste „to co?”",
    opts:[
      { t:"Schodzenie w głąb konsekwencji: pytanie „i co wtedy?” doprowadziło do lęku na poziomie tożsamości („nie jestem dobry”).", ok:true },
      { t:"Reframing treści.", why:"Nie zmieniłeś znaczenia. Odsłoniłeś, co klient zakłada." },
      { t:"Kotwiczenie.", why:"Nie było tu bodźca łączonego ze stanem." }
    ],
    explain:"Proste „i co wtedy?” często w 2–3 krokach prowadzi do głównego lęku. Dopiero z nim warto pracować." }
]},

{ id:"c058", tag:"Rozpoznaj wzorzec", title:"Mariusz: zawsze ostatni dzień", who:"Mariusz, 35 lat, freelancer",
  ctx:"Wszystko robi w nocy przed terminem. „Działam najlepiej pod presją.”",
  steps:[
  { type:"mc", tech:"Rozpoznanie wzorca", q:"Co może dawać mu ten styl pracy?",
    opts:[
      { t:"Różnorodność i znaczenie (adrenalina, bohaterskie zdążenie), a przy okazji wymówkę, gdy wynik nie jest idealny („robiłem to w jedną noc”).", ok:true },
      { t:"Nic. To po prostu zła organizacja.", why:"Gdyby nic mu nie dawał, nie powtarzałby go latami." },
      { t:"Pewność.", why:"Raczej przeciwnie: to dużo niepewności." }
    ],
    explain:"Wzorzec, który klient sam chwali („działam najlepiej pod presją”), często chroni go przed oceną. Pytanie: jak dostać tę samą adrenalinę bez ryzyka?" }
]},

{ id:"c059", tag:"Rozpoznaj wzorzec", title:"Elżbieta: „jestem już spokojna”", who:"Elżbieta, 50 lat",
  ctx:"Po ćwiczeniu z dysocjacją mówi, że wspomnienie już nie boli.",
  steps:[
  { type:"mc", tech:"Test zmiany", q:"Jak sprawdzasz, czy zmiana jest prawdziwa?",
    opts:[
      { t:"Prosisz ją, żeby przywołała wspomnienie tak jak wcześniej, i obserwujesz ciało: oddech, kolor twarzy, napięcie, nie tylko słowa.", ok:true },
      { t:"Wierzysz jej na słowo.", why:"Słowa bywają grzecznością. Ciało pokaże prawdę." },
      { t:"Przechodzicie od razu do kolejnego tematu.", why:"Bez testu nie wiesz, czy zmiana nastąpiła." }
    ],
    explain:"Test to krok 6 NAC. Kalibracja ciała jest dokładniejsza niż deklaracja klienta, co dobrze widać u Eileen." }
]},

{ id:"c060", tag:"Rozpoznaj wzorzec", title:"Konrad: dwie odpowiedzi", who:"Konrad, 37 lat",
  ctx:"Pytasz, czy chce zmienić pracę.",
  steps:[
  { type:"mc", tech:"Kalibracja niespójności", dialog:[["K","Tak, chcę zmienić pracę. (kręci przy tym lekko głową)"]],
    q:"Co zauważasz i co robisz?",
    opts:[
      { t:"Niespójność: słowa mówią „tak”, głowa mówi „nie”. Pytasz łagodnie: „Słyszę tak, a widzę, że kręcisz głową. Która część ciebie nie chce?”", ok:true },
      { t:"Przyjmujesz „tak” i robicie plan.", why:"Plan rozbije się o część, która mówi „nie”." },
      { t:"Mówisz mu, że kłamie.", why:"Za ostro. To nie kłamstwo, tylko wewnętrzny konflikt." }
    ],
    explain:"Niespójność między słowami a ciałem to sygnał konfliktu części. To zaproszenie do pracy z częściami, a nie przeszkoda." }
]}

]);
