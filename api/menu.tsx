import { MenuItem } from '@/interface/menu.interface';
import { TopLevelCategory } from '@/interface/page.interface';

export async function getMenu(
  firstCategory: TopLevelCategory,
): Promise<MenuItem[]> {
  const domain = process.env.API_URL?.trim();

  if (!domain) {
    return [];
  }

  try {
    const response = await fetch(`${domain}/api/top-page/find`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstCategory }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return [];
    }

    return response.json();
  } catch {
    return [];
  }
}
