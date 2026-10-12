/** High-resolution Unsplash CDN photo URLs used as contextual illustrations.
 * Images are loaded from Unsplash's image CDN and cropped responsively by the UI.
 */
const photo = (id: string, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const photos = {
  homeHero: photo("photo-1529156069898-49953e39b3ac", 2000),
  aboutHero: photo("photo-1521737711867-e3b97375f902", 1800),
  membershipHero: photo("photo-1556761175-b413da4baf72", 1800),
  programsHero: photo("photo-1531482615713-2afd69097998", 1800),
  contactHero: photo("photo-1521791136064-7986c2920216", 1800),
  rights: photo("photo-1589829085413-56de8ae18c73"),
  guidance: photo("photo-1556761175-b413da4baf72"),
  womenSafety: photo("photo-1573496359142-b8d87734a5a2"),
  childProtection: photo("photo-1488521787991-ed7bbaae773c"),
  cyberSafety: photo("photo-1550751827-4bd374c3f58b"),
  trafficSafety: photo("photo-1449965408869-eaa3f722e40d"),
  outreach: photo("photo-1511632765486-a01980e01a18"),
  awarenessMeeting: photo("photo-1531482615713-2afd69097998"),
  communitySupport: photo("photo-1529156069898-49953e39b3ac"),
  education: photo("photo-1453738773917-9c3eff1db985"),
  teamwork: photo("photo-1521737711867-e3b97375f902"),
  donation: photo("photo-1469571486292-0ba58a3f068b"),
  legalAid: photo("photo-1450101499163-c8848c66ca85"),
  community: photo("photo-1517486808906-6ca8b3f04846"),
};
