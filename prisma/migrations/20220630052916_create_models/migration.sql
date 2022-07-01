-- CreateTable
CREATE TABLE "Pokemon" (
    "pokedex" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "rating_overall" DOUBLE PRECISION,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("pokedex")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "pokedex" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_pokedex_key" ON "Pokemon"("pokedex");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_id_key" ON "Rating"("id");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_pokedex_fkey" FOREIGN KEY ("pokedex") REFERENCES "Pokemon"("pokedex") ON DELETE RESTRICT ON UPDATE CASCADE;
