-- CreateTable
CREATE TABLE "UserModel" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserModel_id_key" ON "UserModel"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserModel_login_key" ON "UserModel"("login");
