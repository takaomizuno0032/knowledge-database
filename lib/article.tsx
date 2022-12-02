import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';


const postsDirectory = path.join(process.cwd(), 'articles');


export function getArticlesData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allArticles = fileNames.map((fileName) => {
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf8');

        const { data, content } = matter(fileContent);

        return { data, content };
        // Use gray-matter to parse the post metadata section
        // const matterResult = matter(fileContents);

        // Combine the data with the id
        // return {
        //     id,
        //     ...matterResult.data,
        // };
    });
    return {
        allArticles
    };

}

export async function getArticleData(id: number) {
    const { allArticles } = getArticlesData();
    const article = allArticles.find((_: any) => _.data.id == id);
    if (article == undefined) {
        console.log("article is undefined");
        return;
    }
    const processedContent = await remark()
        .use(html)
        .process(article.content);
    const contentHtml = processedContent.toString();
    const data = article.data;

    return {
        data, contentHtml
    };
}

export function getAllArticleIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContent);

        return {
            params: {
                id: data.id.toString()
            },
        };
    })
}