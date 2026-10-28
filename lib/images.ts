// =============================================================
// PLACEHOLDER PHOTOS
// To use real photos: drop files in /public/images and change the
// value to a local path, e.g. hero: "/images/hero.jpg"
// Every photo sits on a pink/purple gradient, so if a URL ever
// fails the layout still looks finished.
// =============================================================

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const images = {
  hero: u("1562259949-e8e7689d7828", 2000),
  houseExterior: u("1570129477492-45c003edd2be"),
  modernExterior: u("1600585154340-be6161a56a0c"),
  exterior2: u("1600596542815-ffad4c1539a9"),
  livingRoom: u("1586023492125-27b2c045efd7"),
  livingRoom2: u("1513694203232-719a280e022f"),
  kitchen: u("1556909114-f6e7ad7d3136"),
  kitchen2: u("1484154218962-a197022b5858"),
  painter: u("1589939705384-5185137a7f0f"),
  office: u("1497366216548-37526070297c"),
  deck: u("1600566753190-17f0baa2a6c3"),
  wall: u("1595428774223-ef52624120d2"),
  family: u("1511895426328-dc8714191300"),
};
