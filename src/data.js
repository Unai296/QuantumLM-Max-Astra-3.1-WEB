export const EYES=["................","...###....###...","...#.#....#.#...","...#.#....#.#...","...###....###..."];
export const MOODS={
  feliz:{n:"Feliz",rows:[...EYES,"................","......#..#......",".......##......."]},
  curioso:{n:"Curioso",rows:["................","...###....###...","...###....###...","...###....###...","...###....###...","................",".......##.......",".......##......."]},
  escuchando:{n:"Escuchando",pulse:1,rows:[...EYES,"................","....#.#.#.#.#...",".....#.#.#.#...."]},
  dormido:{n:"Dormido",rows:["................","................","................","...###....###...","................","................","................",".......##......."]}
};

export const CHAT=[
  {q:"Buenos días, Max",a:"¡Buenos días! Hoy hay sol. ¿Te preparo el resumen del día?",m:"feliz"},
  {q:"Apaga las luces del salón",a:"Hecho. Luces del salón apagadas.",m:"dormido"},
  {q:"¿Qué es QuantumLM?",a:"Es el equipo que me está construyendo. Aún estoy en desarrollo.",m:"curioso"},
  {q:"Pon música tranquila",a:"Te escucho. Pongo una lista suave para concentrarte.",m:"escuchando"}
];

export const STEPS=["core_system","ai_model","user_interface","optimization","finalizing"];

export const FEATS=[
  ["◐","Habla y escucha","Responde por voz en tu idioma, sin que tengas que pulsar nada.","Pensado para usarse a un metro del sofá o desde la otra punta de la cocina."],
  ["▦","Expresa con píxeles","Una pantalla con cara que cambia según lo que pasa en casa.","Se alegra al saludarte, te escucha atento y se duerme cuando te vas."],
  ["⌂","Controla tu casa","Luces, enchufes y escenas desde una sola voz.","Cada rutina se puede crear con una frase, sin menús ni apps."],
  ["◆","Cabe en tu mesa","Un cubo compacto con esquinas blancas y acabado negro mate.","Se coloca sobre el escritorio y no necesita instalación."]
];
