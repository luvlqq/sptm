-- CreateTable
CREATE TABLE "BookModel" (
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genre" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "BookModel_title_key" ON "BookModel"("title");
