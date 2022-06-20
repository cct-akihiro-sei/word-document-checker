export const addKaneko = async () => Word.run(async (context) => {
    const paragraph = context.document.body.insertParagraph("CEO 金子 武史", Word.InsertLocation.end);
    paragraph.font.color = "blue";

    await context.sync();
});