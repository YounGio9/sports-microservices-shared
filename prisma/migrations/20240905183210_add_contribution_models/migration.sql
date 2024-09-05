-- CreateTable
CREATE TABLE "Contribution" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MemberContribution" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "contributionId" TEXT NOT NULL,

    CONSTRAINT "MemberContribution_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MemberContribution" ADD CONSTRAINT "MemberContribution_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberContribution" ADD CONSTRAINT "MemberContribution_contributionId_fkey" FOREIGN KEY ("contributionId") REFERENCES "Contribution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
