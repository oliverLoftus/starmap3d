class Star {
  constructor(name, x, y, z, color, size) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.z = z;
    this.color = color;
    this.size = size;
  }
}

const stars = [
  new Star("Sol", 0, 0, 0, 0.656, 15),
  new Star("Proxima Centauri", -0.474, -0.363, -1.157, 1.807, 2),
  new Star("", -0.495, -0.414, -1.157, 0.9, 13), //Toliman moved label onto Alpha C
  new Star("Alpha Centauri AB", -0.495, -0.414, -1.157, 0.71, 18),
  new Star("Barnard's Star", -0.017, -1.822, 0.15, 1.57, 3),
  new Star("Wolf 359", -2.3, 0.654, 0.294, 2, 1),
  new Star("Lalande 21185", -1.998, 0.504, 1.495, 1.502, 5),
  new Star("Sirius", -0.494, 2.477, -0.758, 0.009, 26),
  new Star("Gl 65A", 2.351, 1.084, -0.839, 1.85, 1),
  new Star("Ross 154", 0.587, -2.658, -1.203, 1.51, 4),
  new Star("Ross 248", 2.256, -0.179, 2.199, 1.9, 1),
  new Star("Ran", 1.899, 2.541, -0.529, 0.881, 12),
  new Star("Lacaille 9352", 2.591, -0.625, -1.926, 1.483, 7),
  new Star("Ross 128", -3.37, 0.181, 0.048, 1.746, 3),
  new Star("EZ Aquarii", 3.077, -1.142, -0.898, 1.98, 3),
  new Star("", 1.986, -1.869, 2.188, 1.309, 9), //61 Cygni B moved lable to A
  new Star("61 Cygni AB", 1.985, -1.87, 2.188, 1.069, 10),
  new Star("Procyon", -1.469, 3.176, 0.32, 0.432, 31),
  new Star("Struve 2398 AB", 0.331, -1.75, 3.04, 1.504, 6),
  new Star("", 0.331, -1.751, 3.039, 1.561, 5), //Struve 2398 B moved label to A
  new Star("Groombridge 34", 2.553, 0.205, 2.476, 1.56, 6),
  new Star("GJ 1111", -1.944, 2.538, 1.613, 2.06, 2),
  new Star("Epsilon Indi", 1.74, -0.971, -3.044, 1.056, 10),
  new Star("Tau Ceti", 3.154, 1.54, -1.002, 0.727, 12),
  new Star("GJ 1061", 1.54, 2.119, -2.575, 1.9, 1),
  new Star("Gl 54.1", 3.354, 1.098, -1.079, 1.85, 2),
  new Star("HIP 82724", -0.483, -1.643, -3.276, 1.729, 9),
  new Star("Luyten's Star", -1.403, 3.499, 0.345, 1.573, 5),
  new Star("Kapteyn's Star", 0.582, 2.719, -2.783, 1.543, 7),
  new Star("Lacaille 8760", 2.344, -2.015, -2.491, 1.397, 6),
  new Star("Kruger 60", 1.968, -0.835, 3.381, 1.613, 5),
  new Star("Ross 614", -0.527, 4.088, -0.203, 1.69, 3),
  new Star("Van Maanen's Star", 4.147, 0.904, 0.4, 0, 1),
  new Star("Wolf 1061", -1.603, -3.885, -0.944, 1.604, 3),
  new Star("Gl 473A", -4.228, -0.618, 0.678, 1.83, 1),
  new Star("Gl 1", 3.449, 0.081, -2.634, 1.462, 5),
  new Star("Gl 83.1", 3.767, 2.18, 1.009, 1.8, 1),
  new Star("Gl 687", -0.172, -1.671, 4.229, 1.505, 4),
  new Star("Gl 674", -0.424, -3.082, -3.324, 1.553, 6),
  new Star("Altair", 2.355, -4.487, 0.791, 0.221, 27),
  new Star("Vega", 0.961, -5.908, 4.81, -0.001, 42),
  new Star("Fomalhaut", 6.451, -1.799, -3.808, 0.145, 28),
  new Star("Pollux", -4.055, 8.195, 4.867, 0.991, 136),
  new Star("Denebola", -10.634, 0.508, 2.768, 0.09, 26),
  new Star("Arcturus", -8.823, -5.933, 3.699, 1.239, 381),
  new Star("Capella", 1.713, 8.954, 9.44, 0.795, 180),
  new Star("Castor", -5.312, 12.13, 8.239, 0.034, 32),
  new Star("Aldebaran", 7.027, 18.288, 5.807, 1.538, 676),
  //new Star("Canopus", -5.993,	57.132, -75.396, 0.164, 11460),
];
