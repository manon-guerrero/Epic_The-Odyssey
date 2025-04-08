import React, { useState, useEffect } from "react";
import { MusicPlayer } from "./components/MusicPlayer";
import { Saga } from "./types/saga";
import "./App.css";

const sagas: Saga[] = [
  {
    id: "troy",
    title: "Troy Saga",
    image: "/images/troySaga.jpeg",
    audioTracks: [
      {
        id: "the-horse-and-the-infant",
        title: "The Horse and the Infant",
        path: "/audio/troySaga/the_horse_and_the_infant-sample.mp3",
      },
      {
        id: "just-a-man",
        title: "Just a Man",
        path: "/audio/troySaga/just_a_man-sample.mp3",
      },
      {
        id: "full-speed-ahead",
        title: "Full Speed Ahead",
        path: "/audio/troySaga/full_speed_ahead-sample.mp3",
      },
      {
        id: "open-arms",
        title: "Open Arms",
        path: "/audio/troySaga/open_arms-sample.mp3",
      },
      {
        id: "warrior-of-the-mind",
        title: "Warrior of the Mind",
        path: "/audio/troySaga/warrior_of_the_mind-sample.mp3",
      },
    ],
    description: "The beginning of Odysseus' journey.",
    information:
      "📖 Myth Version: Odysseus tried to dodge the Trojan War, faking insanity by plowing salt into fields to stay with Penelope and newborn Telemachus. But Palamedes tested him by tossing the baby in the plow’s path—Odysseus swerved, exposing his lie. The Oath of Tyndareus, his own clever trap for Helen’s suitors, forced him to war anyway.\n\n🎶 Musical Version:  EPIC dives into his defiance—war’s a fate he never chose. ‘Just a Man’ reveals a father aching to stay home, not a hero chasing glory, dragged into a fight he’ll regret.\n\n✨ Fun Fact: The Troy Saga’s TikTok demos went viral, turning a passion project into a fan-driven phenomenon!\n\n🎭 Cast: Jorge Rivera-Herrans (Odysseus), Luke Holt (Zeus), Armando Julian (Eurylochus), Steven Dookie (Polites), Teagan Earley (Athena).",
  },
  {
    id: "cyclops",
    title: "Cyclops Saga",
    image: "/images/cyclopsSaga.jpeg",
    audioTracks: [
      {
        id: "polyphemus",
        title: "Polyphemus",
        path: "/audio/cyclopsSaga/polyphemus-sample.mp3",
      },
      {
        id: "survive",
        title: "Survive",
        path: "/audio/cyclopsSaga/survive-sample.mp3",
      },
      {
        id: "remember-them",
        title: "Remember Them",
        path: "/audio/cyclopsSaga/remember_them-sample.mp3",
      },
      {
        id: "my-goodbye",
        title: "My Goodbye",
        path: "/audio/cyclopsSaga/my_goodbye-sample.mp3",
      },
    ],
    description: "The encounter with Polyphemus the Cyclops.",
    information:
      "📖 Myth Version: Polyphemus, a man-eating Cyclops and son of Poseidon and nymph Thoosa, traps Odysseus’ crew, snacking on sailors. Odysseus, slyly claiming he’s ‘Nobody,’ blinds him with a stake after getting him drunk. When Polyphemus yells for help, other Cyclopes ignore him—‘Nobody’ attacked! Escaping under sheep, Odysseus sparks Poseidon’s decade-long grudge.\n\n🎶 Musical Version: EPIC reimagines Polyphemus as a scared, lonely youth, not a mindless monster. In ‘Survive,’ his sheep are his world—Odysseus’ attack cuts deep. Blinded, he doesn’t scream to neighbors but wails for Poseidon, his father. That personal pain fuels a god’s relentless fury.\n\n✨ Fun Fact: This Saga is the only saga that doesn't mention Penelope.\n\n🎭 Cast: Jorge Rivera-Herrans (Odysseus / Polyphemus), Armando Julian (Eurylochus), Steven Dookie (Polites), Teagan Earley (Athena).",
  },
  {
    id: "ocean",
    title: "Ocean Saga",
    image: "/images/oceanSaga.jpeg",
    audioTracks: [
      {
        id: "storm",
        title: "Storm",
        path: "/audio/oceanSaga/storm-sample.mp3",
      },
      {
        id: "luck-runs-out",
        title: "Luck Runs Out",
        path: "/audio/oceanSaga/luck_runs_out-sample.mp3",
      },
      {
        id: "keep-your-friends-close",
        title: "Keep Your Friends Close",
        path: "/audio/oceanSaga/keep_your_friends_close-sample.mp3",
      },
      {
        id: "ruthlessness",
        title: "Ruthlessness",
        path: "/audio/oceanSaga/ruthlessness-sample.mp3",
      },
    ],
    description: "Adventures on the realm of Poseidon.",
    information:
      "📖 Myth Version: Aeolus, wind god, gifts Odysseus a bag of winds to sail home. His crew, suspecting treasure, opens it while he sleeps—unleashing a storm that hurls them off course. Aeolus washes his hands of them; Poseidon ramps up the torment for Polyphemus’ blinding.\n\n🎶 Musical Version: In EPIC, the bag holds a living storm. Odysseus, sleepless for nine days, guards it—Eurylochus’ doubts sowing discord. One slip, and the winds erupt, shredding the fleet. Poseidon’s wrath claims most, leaving 43 out of 600 men. From Ithaca’s shore, Anticlea watches her son vanish again—her grief pulling her under the waves.\n\n✨ Fun Fact: ‘Storm’ in the musical mirrors Odysseus’ fraying sanity—fans call it his breaking point!\n\n🎭 Cast: Jorge Rivera-Herrans (Odysseus), Armando Julian (Eurylochus), Kira Stone (Aeolus), Steven Rodriguez (Poseidon).",
  },
  {
    id: "circe",
    title: "Circe Saga",
    image: "/images/circeSaga.jpeg",
    audioTracks: [
      {
        id: "puppeteer",
        title: "Puppeteer",
        path: "/audio/circeSaga/puppeteer-sample.mp3",
      },
      {
        id: "wouldnt-you-like",
        title: "Wouldn't You Like",
        path: "/audio/circeSaga/wouldnt_you_like-sample.mp3",
      },
      {
        id: "done-for",
        title: "Done For",
        path: "/audio/circeSaga/done_for-sample.mp3",
      },
      {
        id: "there-are-other-ways",
        title: "There Are Other Ways",
        path: "/audio/circeSaga/there_are_other_ways-sample.mp3",
      },
    ],
    description: "Encounter with Circe the sorceress.",
    information:
      "📖 Myth Version: On Aeaea, sorceress Circe turns Odysseus’ crew into pigs. Hermes gives him moly to resist her spells. Uncharmed, he confronts her—she restores his men and hosts him for a year, sharing her bed but not his heart. She sends him to Tiresias in the Underworld.\n\n🎶 Musical Version: In EPIC, Circe tests Odysseus’ will. She pigs his men; Hermes evens the odds with a divine root. Her magic and seduction fail against his love for Penelope—unshakable. Respecting his resolve, Circe frees the crew and guides him to Tiresias.\n\n✨ Fun Fact: The release of this saga fell on Valentine's Day, which may be a nod to how Talya Sindel, the voice of Circe, is Jorge's girlfriend.\n\n🎭 Cast: Jorge Rivera-Herrans (Odysseus), Armando Julian (Eurylochus), Talya Sindel (Circe), Troy Doherty (Hermes).",
  },
  {
    id: "underworld",
    title: "Underworld Saga",
    image: "/images/underworldSaga.jpeg",
    audioTracks: [
      {
        id: "the-underworld",
        title: "The Underworld",
        path: "/audio/underworldSaga/the_underworld-sample.mp3",
      },
      {
        id: "no-longer-you",
        title: "No Longer You",
        path: "/audio/underworldSaga/no_longer_you-sample.mp3",
      },
      {
        id: "monster",
        title: "Monster",
        path: "/audio/underworldSaga/monster-sample.mp3",
      },
    ],
    description: "Journey to the realm of Hades.",
    information:
      '📖 Myth Version: Odysseus descends to the Underworld’s edge, guided by Circe, to consult Tiresias. He spills blood, summoning shades—his lost crew, his mother Anticlea, and the prophet. Tiresias hints at perils: a doomed journey, betrayal, and a ravaged home. Anticlea’s grief-stricken death cuts deep. He leaves, blind to the full warning.\n\n🎶 Musical Version: n EPIC, the Nyx cloaks a broken Odysseus—faceless souls of his men torment him. Polites’ voice whispers his final, crushed thoughts. Anticlea’s lament—drowned in despair—snaps his soul. Tiresias’ cryptic prophecy slips past him. ‘Monster’ emerges—guilt fuels a ruthless king, primed to claw home.\n\n✨ Fun Fact: Anticlea’s voice is Jorge Rivera-Herrans’ real mom—her grief hits extra hard!"\n\n🎭 Cast: Jorge Rivera-Herrans (Odysseus), Steven Dookie (Polites), Wanda Herrans (Anticlea) Mason Olshavsky (Tiresias).',
  },
  {
    id: "thunder",
    title: "Thunder Saga",
    image: "/images/thunderSaga.jpeg",
    audioTracks: [
      {
        id: "suffering",
        title: "Suffering",
        path: "/audio/thunderSaga/suffering-sample.mp3",
      },
      {
        id: "different-beast",
        title: "Different Beast",
        path: "/audio/thunderSaga/different_beast-sample.mp3",
      },
      {
        id: "scylla",
        title: "Scylla",
        path: "/audio/thunderSaga/scylla-sample.mp3",
      },
      {
        id: "mutiny",
        title: "Mutiny",
        path: "/audio/thunderSaga/mutiny-sample.mp3",
      },
      {
        id: "thunder-bringer",
        title: "Thunder Bringer",
        path: "/audio/thunderSaga/thunder_bringer-sample.mp3",
      },
    ],
    description: "Zeus' wrath and divine intervention.",
    information:
      "📖 Myth Version: Odysseus’ crew plugs their ears with wax to dodge the sirens—half-bird temptresses whose songs lure sailors to death. He listens, tied to the mast, and learns of Scylla’s lair—a monstrous choice ahead. Later, on Helios’ isle, his starving men slaughter sacred cattle. Zeus strikes their ship with lightning, sparing only Odysseus.\n\n🎶 Musical Version: In EPIC, sirens are half-fish, one mimicking Penelope to drag Odysseus under. Bees wax shields the crew's ears; he interrogates her instead—Scylla’s path is the toll. ‘Different Beast’ turns him savage—they hack the sirens’ tails, his men eyeing him warily. At Scylla’s lair, he orders Eurylochus to light six torches—six men sacrificed to her six heads. Mutiny brews; on Helios’ isle, hunger drives them to kill a sacred cow. Zeus thunders an ultimatum: them or him. Home trumps all—Odysseus will sail alone.\n\n✨ Fun Fact: In the myth, It is Circe who tells Odysseus about the Sirens Scylla and Charybdis. Scylla is a six-headed monster turned monster by Circe's jealousy, you need six sacrifices to please her and go through her lair.\n\n🎭 Cast: Jorge Rivera-Herrans (Odysseus), Anna Lea (Sirens/Penelope), Armando Julian (Eurylochus), KJ Burkhauser (Scylla), Luke Holt (Zeus).",
  },
  {
    id: "wisdom",
    title: "Wisdom Saga",
    image: "/images/wisdomSaga.jpeg",
    audioTracks: [
      {
        id: "legendary",
        title: "Legendary",
        path: "/audio/wisdomSaga/legendary-sample.mp3",
      },
      {
        id: "little-wolf",
        title: "Little Wolf",
        path: "/audio/wisdomSaga/little_wolf-sample.mp3",
      },
      {
        id: "we-ll-be-fine",
        title: "We'll Be Fine",
        path: "/audio/wisdomSaga/we_ll_be_fine-sample.mp3",
      },
      {
        id: "love-in-paradise",
        title: "Love in Paradise",
        path: "/audio/wisdomSaga/love_in_paradise-sample.mp3",
      },
      {
        id: "god-games",
        title: "God Games",
        path: "/audio/wisdomSaga/god_games-sample.mp3",
      },
    ],
    description: "Telemachus' meeting with Athena.",
    information:
      "📖 Myth Version: After 10 years at war and 3 roaming, Odysseus lands on Calypso’s isle. The nymph detains him 7 years, offering love and immortality—he spurns her for Penelope. Athena, his old mentor, begs Zeus; the gods debate, then free him to end his 20-year trek.\n\n🎶 Musical Version: In EPIC, Athena guides Telemachus to manhood, then tracks Odysseus—caged by Calypso. The nymph’s seduction fails against his longing for Penelope, stretching his exile 7 years. Athena faces Zeus’ council, outsmarting her siblings in a game to spring him free.\n\n✨ Fun Fact:  Hephaestus, the forge god in ‘God Games,’ is voiced by Mike Rivera—Jorge’s dad—who helped craft the booth EPIC was recorded in!\n\n🎭 Cast: Jorge Rivera-Herrans (Odysseus), Miguel Veloso (Telemachus), Ayron Alexander (Antinous), Barbara Wangui (Calypso), Sarah Botelho (Hera), Earle Gresham Jr. (Ares), Janani K. Jha (Aphrodite), Mike Rivera (Hephaestus), Brandon Mclnnis (Apollo), Luke Holt (Zeus), Teagan Earley (Athena).",
  },
  {
    id: "vengeance",
    title: "Vengeance Saga",
    image: "/images/vengeanceSaga.jpeg",
    audioTracks: [
      {
        id: "not-sorry-for-loving-you",
        title: "Not Sorry for Loving You",
        path: "/audio/vengeanceSaga/not_sorry_for_loving_you-sample.mp3",
      },
      {
        id: "dangerous",
        title: "Dangerous",
        path: "/audio/vengeanceSaga/dangerous-sample.mp3",
      },
      {
        id: "charybdis",
        title: "Charybdis",
        path: "/audio/vengeanceSaga/charybdis-sample.mp3",
      },
      {
        id: "get-in-the-water",
        title: "Get in the Water",
        path: "/audio/vengeanceSaga/get_in_the_water-sample.mp3",
      },
      {
        id: "six-hundred-strikes",
        title: "Six Hundred Strikes",
        path: "/audio/vengeanceSaga/six_hundred_strikes-sample.mp3",
      },
    ],
    description: "Odysseus' escapes from Calypso.",
    information:
      '📖 Myth Version: Odysseus navigates Charybdis’ whirlpool, clinging to a fig tree to survive. Poseidon hounds him still, but Zeus’ decree holds—the sea god can’t kill him. Exhausted, he drifts to Phaeacia, then home, his 20-year ordeal ending without a final showdown.\n\n🎶 Musical Version: In EPIC, Athena sends Hermes to nudge Odysseus past Charybdis’ jaws. Poseidon ambushes, taunting him to drown—yet his family pulls him through. Wielding Poseidon’s trident, Odysseus stabs 600 times, the god’s screams a symphony. Broken, Poseidon yields, storms fading, leaving the king to sail free.\n\n✨ Fun Fact: ‘600 Strike’ took Jorge months to perfect—Odysseus’ rage echoes in every beat!"\n\n🎭 Cast: Jorge Rivera-Herrans (Odysseus), Troy Doherty (Hermes), Steven Rodriguez (Poseidon), A Vacuum Cleaner (Charybdis).',
  },
  {
    id: "ithaca",
    title: "Ithaca Saga",
    image: "/images/ithacaSaga.jpeg",
    audioTracks: [
      {
        id: "the-challenge",
        title: "The Challenge",
        path: "/audio/ithacaSaga/the_challenge-sample.mp3",
      },
      {
        id: "hold-them-down",
        title: "Hold Them Down",
        path: "/audio/ithacaSaga/hold_them_down-sample.mp3",
      },
      {
        id: "odysseus",
        title: "Odysseus",
        path: "/audio/ithacaSaga/odysseus-sample.mp3",
      },
      {
        id: "i-cant-help-but-wonder",
        title: "I Can't Help But Wonder",
        path: "/audio/ithacaSaga/i_cant_help_but_wonder-sample.mp3",
      },
      {
        id: "would-you-fall-in-love-with-me-again",
        title: "Would You Fall in Love with Me Again",
        path: "/audio/ithacaSaga/would_you_fall_in_love_with_me_again-sample.mp3",
      },
    ],
    description: "Odysseus' final return to Ithaca.",
    information:
      '📖 Myth Version: Odysseus washes ashore in Ithaca, naked, aided by Phaeacians. Disguised, he finds suitors plaguing his home. His recurve bow—tough to string—becomes his test; he strings it, slays them all, and reclaims Penelope and Telemachus after 20 years.\n\n🎶 Musical Version: In EPIC, Odysseus storms Ithaca, rage unleashed. He massacres the suitors, saving his family. Athena returns, their bond mended. ‘Will You Fall in Love with Me Again?’ reunites him with Penelope, sealing their long-awaited homecoming.\n\n✨ Fun Fact: Penelope singing the word "waiting" seven times, is a nod to the seven sagas she waited for him to return home after the war, the moment lasts 20 seconds, for the 20 years he was away.\n\n🎭 Cast: Jorge Rivera-Herrans (Odysseus), Miguel Veloso (Telemachus), Ayron Alexander (Antinous), Anna Lea (Penelope), Dennis Diaz (Eurymachus), Tristan Caldwell (Amphinomus), Jamie Wiltshire (Melanthius),Teagan Earley (Athena).',
  },
];

function App() {
  const [activeSagaId, setActiveSagaId] = useState(sagas[0].id);
  const [selectedSaga, setSelectedSaga] = useState<Saga | null>(null);
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(true);

  const handleCardClick = (saga: Saga) => {
    if (flippedCardId === saga.id) {
      setFlippedCardId(null);
      setSelectedSaga(null);
    } else {
      setFlippedCardId(saga.id);
      setSelectedSaga(saga);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".container");
      if (container) {
        const scrollPosition = container.scrollTop;
        const viewportHeight = window.innerHeight;
        const currentIndex = Math.round(scrollPosition / viewportHeight);
        const boundedIndex = Math.min(
          Math.max(0, currentIndex),
          sagas.length - 1
        );
        setActiveSagaId(sagas[boundedIndex].id);
      }
    };

    const container = document.querySelector(".container");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToSaga = (sagaId: string) => {
    const sagaIndex = sagas.findIndex((saga) => saga.id === sagaId);
    const container = document.querySelector(".container");
    if (container) {
      setActiveSagaId(sagaId);
      container.scrollTo({
        top: sagaIndex * window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="app-layout">
      <nav className="side-menu">
        <div className="menu-items">
          {sagas.map((saga) => (
            <button
              key={saga.id}
              className={`menu-item ${
                saga.id === activeSagaId ? "active" : ""
              }`}
              onClick={() => scrollToSaga(saga.id)}
            >
              {saga.title}
            </button>
          ))}
        </div>
      </nav>

      <div className="container">
        {sagas.map((saga) => (
          <div
            key={saga.id}
            className={`saga-card ${
              flippedCardId === saga.id ? "flipped" : ""
            }`}
          >
            <div
              className={`saga-card-inner ${
                flippedCardId === saga.id ? "flipped" : ""
              }`}
              onClick={() => handleCardClick(saga)}
            >
              <div className="saga-card-front">
                <img src={saga.image} alt={saga.title} className="saga-image" />
              </div>
              <div className="saga-card-back">
                <h2>{saga.title}</h2>
                <p>{saga.description}</p>
                {selectedSaga?.id === saga.id && (
                  <MusicPlayer selectedSaga={saga} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="toggle-info"
        onClick={() => setShowInfo(!showInfo)}
        aria-label={showInfo ? "Hide Information" : "Show Information"}
      >
        {showInfo ? "❯" : "❮"}
      </button>

      <div className={`info-panel ${!showInfo ? "hidden" : ''}`}>
        <div className="info-content">
          <div className="info-section">
            <h3>Informations</h3>
            <p>{sagas.find((saga) => saga.id === activeSagaId)?.information}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
