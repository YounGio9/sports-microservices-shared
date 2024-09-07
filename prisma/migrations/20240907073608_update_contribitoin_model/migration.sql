-- DropForeignKey
ALTER TABLE "MemberContribution" DROP CONSTRAINT "MemberContribution_contributionId_fkey";

-- AddForeignKey
ALTER TABLE "MemberContribution" ADD CONSTRAINT "MemberContribution_contributionId_fkey" FOREIGN KEY ("contributionId") REFERENCES "Contribution"("id") ON DELETE CASCADE ON UPDATE CASCADE;
