/**
 * Lightweight mock geocoder for the report flow's demo experience — no
 * external geocoding API/key. Matches known keywords against the address
 * text and returns a fixed mock coordinate, most specific keyword first.
 */
const MOCK_GEOCODE_ENTRIES: { keyword: string; position: [number, number] }[] = [
  { keyword: "鼓波街", position: [22.6415, 120.2825] },
  { keyword: "中和街", position: [22.638, 120.2805] },
  { keyword: "鼓山", position: [22.64, 120.283] },
  { keyword: "高雄", position: [22.635, 120.284] },
];

export function mockGeocode(address: string): [number, number] | null {
  const trimmed = address.trim();
  if (!trimmed) return null;
  const match = MOCK_GEOCODE_ENTRIES.find((entry) => trimmed.includes(entry.keyword));
  return match ? match.position : null;
}
