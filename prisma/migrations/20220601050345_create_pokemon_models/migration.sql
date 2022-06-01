/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Ability` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Type` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Ability_ability_key";

-- DropIndex
DROP INDEX "Type_type_key";

-- CreateIndex
CREATE UNIQUE INDEX "Ability_id_key" ON "Ability"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Type_id_key" ON "Type"("id");
