import { getSession } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;
    const id = searchParams.get('id');

    const whereClause = id ? { authorId: id } : undefined;

    const [articles, total] = await Promise.all([
      prisma.article.findMany({
        where: whereClause,
        skip,
        take: limit,
        orderBy: {
          createdAt: 'desc'
        },
        include: {
            author: true,
            comments: true,
            likes: true
        }
      }),
      prisma.article.count({
        where: whereClause
      })
    ]);

    return NextResponse.json({
      articles,
      metadata: {
        currentPage: page,
        pageSize: limit,
        totalPages: Math.ceil(total / limit),
        totalItems: total
      }
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch articles" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
    try {
        const user = await getSession();

        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        
        const { title, content } = await request.json();

        const article = await prisma.article.create({
            data: { title, content, authorId: user.id as string, thumbnail: '', excerpt: '' }
        });

        return NextResponse.json(article);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create article" }, { status: 500 });
    }
}