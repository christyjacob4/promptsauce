import type { Asset } from "./types"

// Mock data for the gallery
const mockAssets: Asset[] = [
  {
    id: "1",
    title: "Espresso Machine",
    description: "A beautiful espresso machine",
    prompt: "Minimalist 3D illustration of a cute espresso machine in soft gray plastic with rounded edges and an orange button. A white coffee cup with espresso sits on the tray below the portafilter, with visible steam. Soft lighting, muted pastel background, subtle shadows, and isometric perspective. Friendly and modern digital render in a stylized, smooth, toy-like appearance.",
    imageUrl: "/images/espresso-machine.png?height=600&width=600",
    categories: ["3d", "isometric"],
    createdAt: "April 1, 2025",
    isBookmarked: false,
  },
  {
    id: "10",
    title: "Living Room",
    description: "A 3D-rendered minimalist living room",
    prompt: "A 3D-rendered, low-poly modern living room in a floating isometric block style. The scene includes a cozy sofa, coffee table, flat-screen TV on a console, indoor potted plants, a rug, and minimalist wall art. Use soft pastel colors and simplified geometric shapes with no textures, just flat shading. Add subtle decorations like books or a lamp for warmth. Background is light and airy with soft lighting and a few floating clouds for a whimsical touch.",
    imageUrl: "/images/living-room.png?height=600&width=600",
    categories: ["3d", "isometric", "minimal"],
    createdAt: "March 23, 2025",
    isBookmarked: false,
  },
  {
    id: "4",
    title: "Airpods Max",
    description: "A pair of Airpods Max",
    prompt: "A pair of modern over-ear headphones (AirPods Max style) floating in mid-air on a soft beige background. The headphones have a sleek silver aluminum body, dark gray cushioned ear cups, and a white headband with a mesh canopy. A small orange button is visible on the right ear cup. The overall lighting is soft and minimalistic, casting a subtle shadow underneath the floating headphones. The composition is centered and clean, with a studio-like aesthetic.",
    imageUrl: "/images/airpods-max.png?height=600&width=600",
    categories: ["minimal", "3d"],
    createdAt: "March 29, 2025",
    isBookmarked: false,
  },
  {
    id: "8",
    title: "Abu Dhabi",
    description: "A cityscape of Abu Dhabi",
    prompt:
      "A 2D flat-style digital illustration of Abu Dhabi's cityscape, in the style of Kurzgesagt. The scene features a vibrant skyline with the Sheikh Zayed Grand Mosque in the foreground, a mix of modern skyscrapers including curved and sail-shaped towers, and calm waterfront reflections. The composition is clean, symmetrical, and minimalist, with no text, evoking a futuristic yet peaceful vibe." ,
    imageUrl: "/images/abu-dhabi.png?height=600&width=600",
    categories: ["illustration", "minimal"],
    createdAt: "March 25, 2025",
    isBookmarked: false,
  },
  {
    id: "7",
    title: "Typewriter",
    description: "A typewriter",
    prompt:
      "A 3D-rendered vintage typewriter floating against a soft turquoise background. The typewriter has a rounded, pastel green matte body and chocolate brown circular keys. A piece of light beige paper with minimal black lines is inserted into the roller. A single orange key stands out near the top right of the keyboard. The lighting is soft and diffused, casting a subtle shadow beneath the typewriter. The overall composition is minimalistic, modern, and slightly playful, with a clean studio aesthetic.",
    imageUrl: "/images/typewriter.png?height=600&width=600",
    categories: ["3d", "minimal"],
    createdAt: "March 26, 2025",
    isBookmarked: false,
  },
  {
    id: "11",
    title: "Bed Room",
    description: "A 3D-rendered minimalist bed room",
    prompt: "A 3D-rendered isometric pastel bedroom in a low-poly, stylized art style. The scene features a cozy bed with yellow and lavender frame, soft pillows, and a blanket in pink and blue tones. The room has curved lavender walls, warm lighting, and minimal furniture including nightstands, dressers, potted plants, a floor lamp, and two framed artworks with abstract designs. Soft shadows, smooth gradients, and a dreamy peach-to-pink background give the room a serene, whimsical feel.",
    imageUrl: "/images/bedroom.png?height=600&width=600",
    categories: ["3d", "isometric", "minimal"],
    createdAt: "March 22, 2025",
    isBookmarked: false,
  },
  {
    id: "2",
    title: "Iced Coffee",
    description: "A glass of iced coffee",
    prompt: "Minimalist 3D illustration of a glass of iced coffee with three large, smooth ice cubes floating inside. Transparent glass with realistic liquid shading, dark brown coffee, and soft reflections. Muted pastel beige background, soft lighting, gentle shadows, and isometric angle. Clean, modern, and cute toy-like style render with smooth textures.",
    imageUrl: "/images/iced-coffee.png?height=600&width=600",
    categories: ["isometric", "3d", "minimal"],
    createdAt: "April 1, 2025",
    isBookmarked: false,
  },
  {
    id: "9",
    title: "Macro Pad",
    description: "A 3D-rendered minimalist keyboard macro pad",
    prompt: "A 3D-rendered minimalist keyboard macro pad with four pastel-colored keys labeled 'cmd', 'Z', 'X', and 'C'. The 'cmd' key is a prominent purple, while the others are mint green. The keys sit inside a compact white case with a visible USB-C cable connected. The background is a smooth, monochromatic lavender-purple with soft lighting and shadows for a clean, playful aesthetic.",
    imageUrl: "/images/macro-pad.png?height=600&width=600",
    categories: ["minimal", "3d"],
    createdAt: "March 24, 2025",
    isBookmarked: false,
  },
  {
    id: "3",
    title: "iPad Pro 11",
    description: "Serene landscape in the style of Studio Ghibli",
    prompt:
      "Minimalist 3D illustration of an iPad Pro 11-inch with a beige magnetic case partially open, revealing a bright abstract screen. The Apple Pencil is magnetically attached to the side. Smooth, rounded edges with soft shadows, muted pastel beige background, soft lighting, isometric perspective. Clean, modern, toy-like aesthetic with realistic yet stylized textures.",
    imageUrl: "/images/ipad-pro-11.png?height=600&width=600",
    categories: ["3d", "minimal", "isometric"],
    createdAt: "March 30, 2025",
    isBookmarked: false,
  },
  {
    id: "5",
    title: "Alarm Clock",
    description: "A detailed fantasy character design with elaborate costume",
    prompt:
      "A 3D-rendered minimal digital clock floating against a light beige background. The clock has a soft, rounded rectangular shape with a smooth matte finish in off-white. The display screen is dark gray with large, cream-colored LED-style digits showing '07:30'. A small orange dot is positioned in the lower right corner of the screen. A rounded dark gray metallic knob protrudes from the right side of the clock. Lighting is soft, with subtle shadows for a clean, modern look.",
    imageUrl: "/images/alarm-clock.png?height=600&width=600",
    categories: ["3d", "minimal"],
    createdAt: "March 28, 2025",
    isBookmarked: false,
  },
  {
    id: "12",
    title: "Man Cave",
    description: "A 3D-rendered isometric 'man cave'",
    prompt: "A 3D-rendered isometric 'man cave' designed in a low-poly, stylized art style with pastel tones. The room features a cozy dark navy sofa, a light wood coffee table, and a large flat-screen TV on a sleek console. Include gaming accessories, shelves with books and gadgets, potted plants, a tall floor lamp, and framed poster art (e.g., a retro sports car). The room is set inside soft lavender walls with warm ambient lighting and clean, minimalist geometry. The entire scene sits on a floating isometric block with a dreamy peach-to-purple gradient background and soft shadows for a playful yet serene aesthetic. No textures—only flat shading and simplified shapes.",
    imageUrl: "/images/man-cave.png?height=600&width=600",
    categories: ["3d", "isometric", "minimal"],
    createdAt: "March 21, 2025",
    isBookmarked: false,
  },
  {
    id: "6",
    title: "Potted Plant",
    description: "A potted plant",
    prompt: "A 3D-rendered minimalistic potted plant floating on a light beige background. The plant has thick, matte green leaves arranged symmetrically in pairs. The pot is a rounded cylinder with a smooth, off-white upper half and a muted green bottom half. A small orange circular button is attached to the side of the pot. The lighting is soft and the shadows are subtle, giving a clean, modern, and slightly futuristic aesthetic.",
    imageUrl: "/images/potted-plant.png?height=600&width=600",
    categories: ["3d", "minimal"],
    createdAt: "March 27, 2025",
    isBookmarked: false,
  },
  {
    id: "13",
    title: "Book Cover",
    description: "A book cover",
    prompt: "A high-quality mockup of a hardback book titled 'A Theology of the Family' placed on a dark charcoal background. The book cover is beige with an elegant, vintage line-art illustration. The design features a large arched frame enclosing symbolic imagery: a church, mountains, a cross, people representing family and faith, and an open Bible at the center. The artwork is monochromatic, using fine brown lines for a classic, engraved effect. Lighting is soft and directional, creating a subtle shadow to the right of the book.",
    imageUrl: "/images/book-cover-1.png?height=600&width=400",
    categories: ["3d", "minimal"],
    createdAt: "March 27, 2025",
    isBookmarked: false,
  },
  {
    id: "14",
    title: "e-Book Cover",
    description: "A book cover",
    prompt: "A modern digital report/book cover design with a dark gradient background transitioning from navy blue to teal. The title 'Analyze eSignature Software' is in bold white sans-serif font, with a subtitle 'Overview of Common Modern Electronic Signature Providers' in smaller text beneath. The top half features abstract geometric shapes: a green circle, green square, and translucent white triangle, layered with soft shadows and motion lines. Bottom-left includes the year '2022', and bottom-right shows a green Boltshift logo. The overall design is sleek, tech-oriented, and minimal.",
    imageUrl: "/images/book-cover-2.png?height=600&width=400",
    categories: ["3d", "minimal"],
    createdAt: "March 27, 2025",
    isBookmarked: false,
  },
  {
    id: "15",
    title: "Ramen Bowl",
    description: "A ramen bowl",
    prompt: "A fun and vibrant cartoon-style illustration of a red ramen bowl with noodles and toppings flying out. Ingredients include shrimp, sliced boiled egg, narutomaki (fish cake with pink swirl), mushrooms, and brown broth splashes. Two wooden chopsticks are sticking into the bowl. The background is a solid light yellow, with a soft shadow beneath the bowl, giving a sense of motion. The style is clean, bold, and outlined with thick lines for a playful, modern look.",
    imageUrl: "/images/ramen-bowl.png?height=600&width=400",
    categories: ["3d", "minimal"],
    createdAt: "March 27, 2025",
    isBookmarked: false,
  },
]

// Available categories for filtering
export const categories = ["3d", "isometric", "ghibli", "illustration", "minimal", "fantasy"]

// In a real app, this would be stored in a database
let bookmarkedAssetIds: string[] = []

export function getAssets(page = 1, limit = 12): Asset[] {
  const start = (page - 1) * limit
  const end = start + limit
  const assets = mockAssets.slice(start, end)

  // Add bookmark status to each asset
  return assets.map((asset) => ({
    ...asset,
    isBookmarked: bookmarkedAssetIds.includes(asset.id),
  }))
}

export function getAssetById(id: string): Asset | undefined {
  const asset = mockAssets.find((asset) => asset.id === id)

  if (!asset) return undefined

  return {
    ...asset,
    isBookmarked: bookmarkedAssetIds.includes(asset.id),
  }
}

export function toggleBookmark(id: string): void {
  if (bookmarkedAssetIds.includes(id)) {
    bookmarkedAssetIds = bookmarkedAssetIds.filter((assetId) => assetId !== id)
  } else {
    bookmarkedAssetIds.push(id)
  }
}

export function getBookmarkedAssets(): Asset[] {
  return mockAssets
    .filter((asset) => bookmarkedAssetIds.includes(asset.id))
    .map((asset) => ({
      ...asset,
      isBookmarked: true,
    }))
}

