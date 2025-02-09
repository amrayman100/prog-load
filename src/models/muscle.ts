export type MuscleCategory = "upper" | "lower" | "core";

export type MuscleDivision = {
  longName: string;
  shortName: string;
};

export type Muscle = {
  name: string;
  divisions: MuscleDivision[];
  category: MuscleCategory;
  group?: string;
};

export type ExerciseTarget = {
  name: string;
  divisions: MuscleDivision[];
};

export type ExerciseMode = "unilateral" | "bilateral";
export type ExceriseLoading =
  | "selectorized"
  | "plate-loaded"
  | "body-weight"
  | "band-loaded"
  | "dumbell-loaded";

export type LoadingScale = "plate-weight" | "plate-number" | "band-weight";

// planes, loading pattern,

// pronated grip, supinated grip, neutral grip
// sagittal, frontal, transverse

export type Exercise = {
  name: string;
  excerciseCode: string;
  brand: string;
  type: "upper" | "lower" | "core";
  modes: ExerciseMode[];
  loading: ExceriseLoading;
  loadingScale: LoadingScale;
};

export type ExerciseRep = {
  excerciseCode: string;
  mode: ExerciseMode;
  setNumber: number;
  reps: number;
  weight: number;
  weightScale: LoadingScale;
};

export type LoadingPattern = {
  plane: "sagittal" | "frontal" | "transverse" | "default";
  grip: "pronated" | "supinated" | "neutral" | "default";
  majorTargets: ExerciseTarget[];
  minorTargets: ExerciseTarget[];
};

export type UpperBodyExercise = Exercise & {
  type: "upper";
  loadingPatterns: Array<LoadingPattern>;
};

export const upperBodyExercises: UpperBodyExercise[] = [
  {
    name: "Preacher Curl Machine",
    brand: "Hoist",
    modes: ["unilateral", "bilateral"],
    loading: "plate-loaded",
    loadingScale: "plate-weight",
    type: "upper",
    excerciseCode: "HOIST_PREACHER_CURL",
    loadingPatterns: [
      {
        plane: "sagittal",
        grip: "neutral",
        majorTargets: [
          {
            name: "Biceps",
            divisions: [
              {
                longName: "Biceps Brachii - Long Head",
                shortName: "Long Head",
              },
              {
                longName: "Biceps Brachii - Short Head",
                shortName: "Short Head",
              },
              { longName: "Brachialis", shortName: "Brachialis" },
            ],
          },
        ],
        minorTargets: [],
      },
    ],
  },
  {
    name: "Seated Dip",
    brand: "Hoist",
    modes: ["unilateral", "bilateral"],
    loading: "plate-loaded",
    loadingScale: "plate-weight",
    type: "upper",
    excerciseCode: "HOIST_SEATED_DIP",
    loadingPatterns: [
      {
        plane: "sagittal",
        grip: "neutral",
        majorTargets: [
          {
            name: "Triceps",
            divisions: [
              // { longName: "Triceps Brachii - Long Head", shortName: "Long Head" },
              {
                longName: "Triceps Brachii - Lateral Head",
                shortName: "Lateral Head",
              },
              {
                longName: "Triceps Brachii - Medial Head",
                shortName: "Medial Head",
              },
            ],
          },
        ],
        minorTargets: [
          {
            name: "Chest",
            divisions: [
              {
                longName: "Pectoralis Major - Clavicular Head",
                shortName: "Clavicular Head",
              },
              {
                longName: "Pectoralis Major - Sternal Head",
                shortName: "Sternal Head",
              },
              { longName: "Pectoralis Minor", shortName: "Minor" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "T-Bar Row Chest Supported",
    brand: "Flex Fitness",
    modes: ["bilateral"],
    loading: "plate-loaded",
    loadingScale: "plate-weight",
    type: "upper",
    excerciseCode: "FLEX_T_BAR_ROW_CHEST_SUPPORTED",
    loadingPatterns: [
      {
        plane: "frontal",
        grip: "neutral",
        majorTargets: [
          {
            name: "Upper Back",
            divisions: [
              { longName: "Trapezius - Upper", shortName: "Upper" },
              { longName: "Trapezius - Middle", shortName: "Middle" },
              { longName: "Trapezius - Lower", shortName: "Lower" },
            ],
          },
          {
            name: "Shoulders",
            divisions: [{ longName: "Rear Deltoid", shortName: "Rear" }],
          },
        ],
        minorTargets: [
          {
            name: "Lats",
            divisions: [
              { longName: "Thoracic Fibers - Upper", shortName: "Upper" },
              { longName: "Lumbar Fibers - Middle", shortName: "Middle" },
              { longName: "Iliac Fibers - Lower", shortName: "Lower" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Seated Shoulder Press Machine",
    brand: "Panatta",
    modes: ["bilateral"],
    loading: "plate-loaded",
    loadingScale: "plate-weight",
    type: "upper",
    excerciseCode: "PANATTA_SEATED_SHOULDER_PRESS",
    loadingPatterns: [
      {
        plane: "frontal",
        grip: "neutral",
        majorTargets: [
          {
            name: "Shoulders",
            divisions: [
              { longName: "Anterior Deltoid", shortName: "Anterior" },
              { longName: "Lateral Deltoid", shortName: "Lateral" },
            ],
          },
        ],
        minorTargets: [
          {
            name: "Chest",
            divisions: [
              {
                longName: "Pectoralis Major - Clavicular Head",
                shortName: "Upper Chest",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const muscles: Muscle[] = [
  {
    name: "Biceps",
    divisions: [
      {
        longName: "Biceps Brachii - Long Head",
        shortName: "Long Head",
      },
      {
        longName: "Biceps Brachii - Short Head",
        shortName: "Short Head",
      },
      { longName: "Brachialis", shortName: "Brachialis" },
    ],
    category: "upper",
    group: "Arms",
  },
  {
    name: "Triceps",
    divisions: [
      { longName: "Triceps Brachii - Long Head", shortName: "Long Head" },
      { longName: "Triceps Brachii - Lateral Head", shortName: "Lateral Head" },
      { longName: "Triceps Brachii - Medial Head", shortName: "Medial Head" },
    ],
    category: "upper",
    group: "Arms",
  },
  {
    name: "Forearms",
    divisions: [
      { longName: "Anterior Compartment", shortName: "Anterior" },
      { longName: "Posterior Compartment", shortName: "Posterior" },
    ],
    category: "upper",
    group: "Arms",
  },
  {
    name: "Chest",
    divisions: [
      {
        longName: "Pectoralis Major - Clavicular Head",
        shortName: "Upper Chest",
      },
      {
        longName: "Pectoralis Major - Sternal Head",
        shortName: "Middle Chest",
      },
      { longName: "Pectoralis Minor", shortName: "Lower Chest" },
    ],
    category: "upper",
    group: "Arms",
  },
  {
    name: "Shoulders",
    divisions: [
      { longName: "Anterior Deltoid", shortName: "Anterior Deltoid" },
      { longName: "Lateral Deltoid", shortName: "Lateral Deltoid" },
      { longName: "Rear Deltoid", shortName: "Rear Deltoid" },
      { longName: "Supraspinatus", shortName: "Supraspinatus" },
      { longName: "Infraspinatus", shortName: "Infraspinatus" },
      { longName: "Teres Minor", shortName: "Minor" },
      { longName: "Subscapularis", shortName: "Subscapularis" },
    ],
    category: "upper",
  },
  {
    name: "Lats",
    divisions: [
      { longName: "Thoracic Fibers - Upper", shortName: "Upper" },
      { longName: "Lumbar Fibers - Middle", shortName: "Middle" },
      { longName: "Iliac Fibers - Lower", shortName: "Lower" },
    ],
    category: "upper",
    group: "Back",
  },
  {
    name: "Upper Back",
    divisions: [
      { longName: "Trapezius - Upper", shortName: "Upper" },
      { longName: "Trapezius - Middle", shortName: "Middle" },
      { longName: "Trapezius - Lower", shortName: "Lower" },
      { longName: "Rhomboid Major", shortName: "Rhomboid Major" },
      { longName: "Rhomboid Minor", shortName: "Rhomboid Minor" },
    ],
    category: "upper",
    group: "Back",
  },
  {
    name: "Lower Back",
    divisions: [
      { longName: "Erector Spinae - Iliocostalis", shortName: "Iliocostalis" },
      { longName: "Erector Spinae - Longissimus", shortName: "Longissimus" },
      { longName: "Erector Spinae - Spinalis", shortName: "Spinalis" },
    ],
    category: "upper",
    group: "Back",
  },
  {
    name: "Abs",
    divisions: [
      { longName: "Rectus Abdominis", shortName: "Rectus" },
      { longName: "External Obliques", shortName: "External" },
      { longName: "Internal Obliques", shortName: "Internal" },
      { longName: "Transverse Abdominis", shortName: "Transverse" },
    ],
    category: "core",
    group: "Core",
  },
  {
    name: "Glutes",
    divisions: [
      { longName: "Gluteus Maximus", shortName: "Maximus" },
      { longName: "Gluteus Medius", shortName: "Medius" },
      { longName: "Gluteus Minimus", shortName: "Minimus" },
    ],
    category: "lower",
    group: "Legs",
  },
  {
    name: "Hamstrings",
    divisions: [
      { longName: "Biceps Femoris", shortName: "Femoris" },
      { longName: "Semitendinosus", shortName: "Semitendinosus" },
      { longName: "Semimembranosus", shortName: "Semimembranosus" },
    ],
    category: "lower",
    group: "Legs",
  },
  {
    name: "Calves",
    divisions: [
      { longName: "Gastrocnemius", shortName: "Gastrocnemius" },
      { longName: "Soleus", shortName: "Soleus" },
    ],
    category: "lower",
    group: "Legs",
  },
  {
    name: "Quads",
    divisions: [
      { longName: "Vastus Medialis", shortName: "Medialis" },
      { longName: "Vastus Lateralis", shortName: "Lateralis" },
      { longName: "Vastus Intermedius", shortName: "Intermedius" },
      { longName: "Rectus Femoris", shortName: "Rec Fem" },
    ],
    category: "lower",
    group: "Legs",
  },
  {
    name: "Hip Flexors",
    divisions: [
      { longName: "Psoas Major", shortName: "Psoas" },
      { longName: "Iliacus", shortName: "Iliacus" },
    ],
    category: "lower",
    group: "Legs",
  },
  {
    name: "Hip Extensors",
    divisions: [
      { longName: "Gluteus Maximus", shortName: "Maximus" },
      { longName: "Hamstrings", shortName: "Hamstrings" },
    ],
    category: "lower",
    group: "Legs",
  },
  {
    name: "Hip Abductors",
    divisions: [
      { longName: "Gluteus Medius", shortName: "Medius" },
      { longName: "Gluteus Minimus", shortName: "Minimus" },
      { longName: "Tensor Fasciae Latae", shortName: "Tensor" },
    ],
    category: "lower",
    group: "Legs",
  },
  {
    name: "Hip Rotators",
    divisions: [
      { longName: "Piriformis", shortName: "Piriformis" },
      { longName: "Obturator Internus", shortName: "Obturator" },
      { longName: "Gemellus Superior", shortName: "Gemellus" },
      { longName: "Gemellus Inferior", shortName: "Gemellus" },
      { longName: "Quadratus Femoris", shortName: "Quadratus" },
    ],
    category: "lower",
    group: "Legs",
  },
];
