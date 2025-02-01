export type MuscleCategory = "upper" | "lower" | "core" | "full";

export type MuscleDivision = {};

export type Muscle = {
  name: string;
  divisions: string[];
  category: MuscleCategory;
  group?: string;
};

export const muscles: Muscle[] = [
  {
    name: "Biceps",
    divisions: [
      "Biceps Brachii (Long Head)",
      "Biceps Brachii (Short Head)",
      "Brachialis",
    ],
    category: "upper",
    group: "Arms",
  },
  {
    name: "Triceps",
    divisions: [
      "Triceps Brachii (Long Head)",
      "Triceps Brachii (Lateral Head)",
      "Triceps Brachii (Medial Head)",
    ],
    category: "upper",
    group: "Arms",
  },
  {
    name: "Forearms",
    divisions: ["Anterior Compartment", "Posterior Compartment"],
    category: "upper",
    group: "Arms",
  },
  {
    name: "Chest",
    divisions: [
      "Pectoralis Major (Clavicular Head)",
      "Pectoralis Major (Sternal Head)",
      "Pectoralis Minor",
    ],
    category: "upper",
    group: "Arms",
  },
  {
    name: "Shoulders",
    divisions: [
      "Anterior Deltoid",
      "Lateral Deltoid",
      "Posterior Deltoid",
      "Supraspinatus",
      "Infraspinatus",
      "Teres Minor",
      "Subscapularis",
    ],
    category: "upper",
  },
  {
    name: "Lats",
    divisions: [
      "Thoracic Fibers - Upper",
      "Lumbar Fibers - Middle",
      "Iliac Fibers - Lower",
    ],
    category: "upper",
    group: "Back",
  },
  {
    name: "Upper Back",
    divisions: [
      "Trapezius (Upper)",
      "Trapezius (Middle)",
      "Trapezius (Lower)",
      "Rhomboid Major",
      "Rhomboid Minor",
    ],
    category: "upper",
    group: "Back",
  },
  {
    name: "Lower Back",
    divisions: [
      "Erector Spinae (Iliocostalis)",
      "Erector Spinae (Longissimus)",
      "Erector Spinae (Spinalis)",
    ],
    category: "upper",
    group: "Back",
  },
  {
    name: "Abs",
    divisions: [
      "Rectus Abdominis",
      "External Obliques",
      "Internal Obliques",
      "Transverse Abdominis",
    ],
    category: "core",
    group: "Core",
  },
  {
    name: "Glutes",
    divisions: ["Gluteus Maximus", "Gluteus Medius", "Gluteus Minimus"],
    category: "lower",
    group: "Legs",
  },
  {
    name: "Hamstrings",
    divisions: ["Biceps Femoris", "Semitendinosus", "Semimembranosus"],
    category: "lower",
    group: "Legs",
  },
  {
    name: "Calves",
    divisions: ["Gastrocnemius", "Soleus"],
    category: "lower",
    group: "Legs",
  },
  {
    name: "Quads",
    divisions: [
      "Vastus Medialis",
      "Vastus Lateralis",
      "Vastus Intermedius",
      "Rectus Femoris",
    ],
    category: "lower",
    group: "Legs",
  },
  {
    name: "Hip Flexors",
    divisions: ["Psoas Major", "Iliacus"],
    category: "lower",
    group: "Legs",
  },
  {
    name: "Hip Extensors",
    divisions: ["Gluteus Maximus", "Hamstrings"],
    category: "lower",
    group: "Legs",
  },
  {
    name: "Hip Abductors",
    divisions: ["Gluteus Medius", "Gluteus Minimus", "Tensor Fasciae Latae"],
    category: "lower",
    group: "Legs",
  },
  {
    name: "Hip Rotators",
    divisions: [
      "Piriformis",
      "Obturator Internus",
      "Gemellus Superior",
      "Gemellus Inferior",
      "Quadratus Femoris",
    ],
    category: "lower",
    group: "Legs",
  },
];
