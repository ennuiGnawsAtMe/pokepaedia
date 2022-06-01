-- CreateTable
CREATE TABLE "Pokemon" (
    "pokedex" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "evolutionURL" TEXT,
    "happiness" INTEGER,
    "evolvesFrom" TEXT,
    "blurb" TEXT,
    "shape" TEXT,
    "habitat" TEXT,
    "colour" TEXT,
    "height" INTEGER,
    "weight" INTEGER,
    "experience" INTEGER,
    "hp" INTEGER,
    "attack" INTEGER,
    "defence" INTEGER,
    "specialAttack" INTEGER,
    "specialDefence" INTEGER,
    "speed" INTEGER,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("pokedex")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ability" (
    "id" SERIAL NOT NULL,
    "ability" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Ability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PokemonToType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AbilityToPokemon" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_pokedex_key" ON "Pokemon"("pokedex");

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_name_key" ON "Pokemon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Type_type_key" ON "Type"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Ability_ability_key" ON "Ability"("ability");

-- CreateIndex
CREATE UNIQUE INDEX "_PokemonToType_AB_unique" ON "_PokemonToType"("A", "B");

-- CreateIndex
CREATE INDEX "_PokemonToType_B_index" ON "_PokemonToType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AbilityToPokemon_AB_unique" ON "_AbilityToPokemon"("A", "B");

-- CreateIndex
CREATE INDEX "_AbilityToPokemon_B_index" ON "_AbilityToPokemon"("B");

-- AddForeignKey
ALTER TABLE "_PokemonToType" ADD CONSTRAINT "_PokemonToType_A_fkey" FOREIGN KEY ("A") REFERENCES "Pokemon"("pokedex") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PokemonToType" ADD CONSTRAINT "_PokemonToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToPokemon" ADD CONSTRAINT "_AbilityToPokemon_A_fkey" FOREIGN KEY ("A") REFERENCES "Ability"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AbilityToPokemon" ADD CONSTRAINT "_AbilityToPokemon_B_fkey" FOREIGN KEY ("B") REFERENCES "Pokemon"("pokedex") ON DELETE CASCADE ON UPDATE CASCADE;
