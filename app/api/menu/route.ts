import { getMenu } from '@/api/menu';
import { TopLevelCategory } from '@/interface/page.interface';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const firstCategoryParam = request.nextUrl.searchParams.get('firstCategory');
  const firstCategory = Number(firstCategoryParam);

  if (!Number.isInteger(firstCategory) || !(firstCategory in TopLevelCategory)) {
    return NextResponse.json([], { status: 400 });
  }

  const menu = await getMenu(firstCategory as TopLevelCategory);

  return NextResponse.json(menu);
}
