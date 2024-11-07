-- CreateTable
CREATE TABLE "MemberAvailability" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "MemberAvailability_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MemberAvailability" ADD CONSTRAINT "MemberAvailability_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberAvailability" ADD CONSTRAINT "MemberAvailability_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
