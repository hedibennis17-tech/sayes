import {
  collection, doc, addDoc, updateDoc, getDoc, getDocs,
  query, where, orderBy, serverTimestamp,
} from "firebase/firestore";
import { db, COLLECTIONS } from "@/lib/firebase";
import type { Tournament, Team, Match } from "@/types";

export async function createTournament(
  data: Omit<Tournament, "id">
): Promise<string> {
  const ref = await addDoc(collection(db, COLLECTIONS.tournaments), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function getTournament(id: string): Promise<Tournament | null> {
  const snap = await getDoc(doc(db, COLLECTIONS.tournaments, id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as Tournament;
}

export async function getTournamentsByCity(cityId: string): Promise<Tournament[]> {
  const q = query(
    collection(db, COLLECTIONS.tournaments),
    where("location.city", "==", cityId),
    orderBy("startsAt", "asc")
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Tournament));
}

export async function addTeamToTournament(
  tournamentId: string,
  team: Team
): Promise<void> {
  const tournament = await getTournament(tournamentId);
  if (!tournament) throw new Error("Tournament not found");

  await updateDoc(doc(db, COLLECTIONS.tournaments, tournamentId), {
    teams: [...tournament.teams, team],
    updatedAt: serverTimestamp(),
  });
}

export async function updateMatchScore(
  tournamentId: string,
  matchId: string,
  homeScore: number,
  awayScore: number
): Promise<void> {
  const tournament = await getTournament(tournamentId);
  if (!tournament) throw new Error("Tournament not found");

  const matches = tournament.matches.map((m) =>
    m.id === matchId
      ? { ...m, homeScore, awayScore, status: "COMPLETED" as const }
      : m
  );

  await updateDoc(doc(db, COLLECTIONS.tournaments, tournamentId), {
    matches,
    updatedAt: serverTimestamp(),
  });
}

// Auto-detect missing players and return message
export function getMissingPlayersMessage(tournament: Tournament): string[] {
  return tournament.teams
    .filter((t) => t.memberIds.length < tournament.playersPerTeam)
    .map(
      (t) =>
        `Il manque ${tournament.playersPerTeam - t.memberIds.length} joueur(s) à l'équipe ${t.name}`
    );
}
