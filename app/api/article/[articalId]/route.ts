import { getSession } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {

        const { searchParams } = new URL(request.url);
        const articleId = searchParams.get('articleId');

        const article = await prisma.article.findUnique({
            where: { id: articleId }
        });

        if (!article) {
            return NextResponse.json({ error: "Article not found" }, { status: 404 });
        }

        return NextResponse.json(article);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch article" }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const articleId = searchParams.get('articleId');

        const { title, content } = await request.json();

        const user = await getSession();
        
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const article = await prisma.article.findUnique({
            where: { id: articleId, authorId: user.id }
        });

        if (!article) {
            return NextResponse.json({ error: "Article not found" }, { status: 404 });
        }

        const updatedArticle = await prisma.article.update({
            where: { id: articleId },
            data: { title, content }
        });

        return NextResponse.json(updatedArticle);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update article" }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const articleId = searchParams.get('articleId');

        const user = await getSession();
        
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const article = await prisma.article.findUnique({
            where: { id: articleId, authorId: user.id }
        });

        if (!article) {
            return NextResponse.json({ error: "Article not found" }, { status: 404 });
        }

        await prisma.article.delete({
            where: { id: articleId }
        });

        return NextResponse.json({ message: "Article deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete article" }, { status: 500 });
    }
}