import type { MetadataRoute } from "next";
import { BUILDINGS } from "@/data/buildings";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://concrete-journal.org";

  const buildingUrls: MetadataRoute.Sitemap = BUILDINGS.map((building) => ({
    url: `${baseUrl}/buildings/${building.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/archive`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...buildingUrls,
  ];
}
