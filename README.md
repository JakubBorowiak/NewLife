# Trening Interwencji

Aplikacja do ćwiczenia coachingu w stylu Duolingo: krótkie lekcje, realistyczne dialogi z klientem, decyzja „co robisz teraz”, wyjaśnienie techniki i źródło przy każdym ćwiczeniu. Do tego powtórki rozłożone w czasie, passa i cel dzienny.

## Uruchomienie

Otwórz `app/index.html` w przeglądarce. Nie wymaga instalacji ani serwera.

## Struktura

- `app/index.html`: aplikacja (widoki, logika lekcji, powtórki, postęp w `localStorage`)
- `app/content.js`: cała treść kursu (działy, lekcje, ćwiczenia)

## Treść

| Źródło | Status |
|---|---|
| Awaken the Giant Within (Obudź w sobie olbrzyma) | Działy 1–7 |
| Robbins-Madanes Training | Dział 8 (sześć potrzeb) w wersji wstępnej, reszta czeka na transkrypcje |
| Interwencje z YouTube | Czeka na transkrypcje |
| Giant Steps (Olbrzymie kroki) | W kolejce |
| Life Force | Osobna ścieżka, w kolejce |

Ćwiczenia są napisane własnymi słowami jako parafraza koncepcji, z numerem rozdziału źródła. Repozytorium nie zawiera tekstów książek ani materiałów szkoleniowych. Surowe materiały trzymaj w folderze `materialy/`, który jest wykluczony z gita.
