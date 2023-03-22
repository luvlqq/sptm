-- CreateTable
CREATE TABLE "BookModel" (
    "Name" TEXT NOT NULL,
    "Author" TEXT NOT NULL,
    "Genre" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "BookModel_Name_key" ON "BookModel"("Name");
