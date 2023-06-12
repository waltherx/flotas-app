-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "ci" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "sexo" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
