// ============================================================
// SAYES — UNIVERSAL TYPE SYSTEM
// Discover • Meet • Play • Join • Create • Enjoy
// ============================================================

// ─── GEO ────────────────────────────────────────────────────
export interface GeoPoint {
  lat: number;
  lng: number;
}

export interface Location {
  id: string;
  address: string;
  city: string;
  district?: string;
  province: string;
  country: string;
  postalCode?: string;
  geo: GeoPoint;
  timezone: string;
}

// ─── CITY ENGINE ────────────────────────────────────────────
export interface City {
  id: string;
  name: string;
  slug: string;
  province: string;
  country: string;
  currency: string;
  timezone: string;
  locale: string;
  geo: GeoPoint;
  districts: District[];
  active: boolean;
}

export interface District {
  id: string;
  cityId: string;
  name: string;
  geo: GeoPoint;
}

// ─── UNIVERSAL ACTIVITY ENGINE ───────────────────────────────
export type ActivityCategory =
  | "SPORT"
  | "GAME"
  | "HOBBY"
  | "SOCIAL"
  | "FOOD_DRINK"
  | "CULTURE"
  | "NATURE"
  | "LEARNING"
  | "TRAVEL"
  | "BUSINESS"
  | "CUSTOM";

export type ActivityStatus =
  | "DRAFT"
  | "PUBLISHED"
  | "FULL"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED";

export type GenderFilter = "MIXED" | "MALE" | "FEMALE" | "NON_BINARY";
export type SkillLevel = "ANY" | "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "PRO";

export interface ActivityTemplate {
  id: string;
  slug: string;                     // e.g. "soccer", "treasure-hunt", "karaoke"
  name: string;
  emoji: string;
  category: ActivityCategory;
  subcategory?: string;
  defaultDurationMin: number;
  defaultMinParticipants: number;
  defaultMaxParticipants: number;
  supportsTeams: boolean;
  supportsTournament: boolean;
  fields: ActivityField[];           // extra dynamic fields per template
}

export interface ActivityField {
  key: string;
  label: string;
  type: "text" | "number" | "boolean" | "select" | "multiselect";
  options?: string[];
  required: boolean;
}

// The heart of SaYes — one schema for ALL activities
export interface Activity {
  id: string;
  templateSlug: string;             // links to ActivityTemplate
  category: ActivityCategory;
  subcategory?: string;

  // Identity
  title: string;
  description: string;
  emoji: string;
  coverImage?: string;
  images: string[];

  // Organiser
  organizerId: string;
  organizerType: "USER" | "BUSINESS";

  // Location
  location: Location;
  isOnline: boolean;
  meetingUrl?: string;

  // Time
  startsAt: string;                 // ISO 8601
  endsAt?: string;
  durationMin: number;
  isRecurring: boolean;
  recurrence?: RecurrenceRule;

  // Participants
  minParticipants: number;
  maxParticipants: number;
  currentCount: number;
  participantIds: string[];
  waitlistIds: string[];

  // Filters
  ageMin?: number;
  ageMax?: number;
  genderFilter: GenderFilter;
  skillLevel: SkillLevel;

  // Competition
  supportsTeams: boolean;
  teams?: Team[];
  isTournament: boolean;
  tournamentId?: string;

  // Commercial
  price: number;
  currency: string;
  isPaid: boolean;
  requiresReservation: boolean;
  placeId?: string;                 // link to Place (restaurant, bar, etc.)

  // Gamification
  pointsReward: number;
  badgeReward?: string;

  // Rules & extras (dynamic — template-defined)
  customFields: Record<string, unknown>;
  rules?: string;

  // Status
  status: ActivityStatus;
  createdAt: string;
  updatedAt: string;
}

export interface RecurrenceRule {
  frequency: "DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY";
  daysOfWeek?: number[];
  endsAt?: string;
  occurrences?: number;
}

// ─── TOURNAMENT ENGINE ───────────────────────────────────────
export interface Tournament {
  id: string;
  activityId: string;
  title: string;
  sport: string;
  organizerId: string;
  location: Location;
  startsAt: string;
  endsAt?: string;
  format: "ROUND_ROBIN" | "KNOCKOUT" | "SWISS" | "CUSTOM";
  teams: Team[];
  matches: Match[];
  standings: Standing[];
  status: "UPCOMING" | "REGISTRATION" | "IN_PROGRESS" | "COMPLETED";
  maxTeams: number;
  playersPerTeam: number;
  prizes: Prize[];
  refereeIds: string[];
  images: string[];
}

export interface Team {
  id: string;
  name: string;
  emoji?: string;
  captainId: string;
  memberIds: string[];
  maxSize: number;
  wins: number;
  losses: number;
  draws: number;
  points: number;
}

export interface Match {
  id: string;
  tournamentId: string;
  homeTeamId: string;
  awayTeamId: string;
  scheduledAt: string;
  homeScore?: number;
  awayScore?: number;
  status: "SCHEDULED" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
  refereeId?: string;
}

export interface Standing {
  teamId: string;
  rank: number;
  played: number;
  wins: number;
  losses: number;
  draws: number;
  points: number;
  goalDiff?: number;
}

export interface Prize {
  rank: number;
  description: string;
  pointValue: number;
}

// ─── PLACES ENGINE ───────────────────────────────────────────
export type PlaceType =
  | "RESTAURANT"
  | "BAR"
  | "CAFE"
  | "CLUB"
  | "SPORTS_FIELD"
  | "POOL"
  | "GYM"
  | "GOLF"
  | "SKI_RESORT"
  | "PARK"
  | "BEACH"
  | "GAME_ROOM"
  | "CONCERT_HALL"
  | "COMMUNITY_CENTER"
  | "CUSTOM";

export interface Place {
  id: string;
  name: string;
  type: PlaceType;
  description: string;
  images: string[];
  location: Location;
  phone?: string;
  website?: string;
  email?: string;
  hours: BusinessHours[];
  rating?: number;
  reviewCount: number;
  amenities: string[];
  priceRange?: 1 | 2 | 3 | 4;
  cuisineType?: string;             // for restaurants
  musicType?: string;               // for bars/clubs
  capacity?: number;
  sports?: string[];                // for sports venues
  events: Activity[];
  businessId?: string;
  isVerified: boolean;
  createdAt: string;
}

export interface BusinessHours {
  day: number;                      // 0 = Sunday
  openTime: string;                 // "HH:mm"
  closeTime: string;
  isClosed: boolean;
}

// ─── PEOPLE / PROFILE ENGINE ─────────────────────────────────
export type UserRole = "USER" | "ORGANIZER" | "BUSINESS" | "ADMIN" | "MODERATOR";

export interface UserProfile {
  id: string;
  uid: string;
  displayName: string;
  username: string;
  avatar?: string;
  coverImage?: string;
  bio?: string;
  city: string;
  cityId: string;
  languages: string[];
  hobbies: string[];
  sports: string[];
  role: UserRole;

  // Social
  friendIds: string[];
  followerIds: string[];
  followingIds: string[];

  // Activity
  activitiesJoined: number;
  activitiesOrganized: number;
  tournamentsPlayed: number;
  tournamentsWon: number;

  // Gamification
  points: number;
  level: number;
  badges: Badge[];
  reputation: number;

  // Preferences
  lookingFor: LookingFor[];
  ageMin?: number;
  ageMax?: number;
  genderPreference?: GenderFilter;
  notificationPrefs: NotificationPrefs;

  isVerified: boolean;
  isOnline: boolean;
  lastSeenAt: string;
  createdAt: string;
}

export interface LookingFor {
  activitySlug: string;
  description?: string;
  minPeople?: number;
  preferredDate?: string;
}

export interface Badge {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  description: string;
  earnedAt: string;
}

export interface NotificationPrefs {
  newActivitiesNearby: boolean;
  friendJoins: boolean;
  tournamentUpdates: boolean;
  chatMessages: boolean;
  promotions: boolean;
}

// ─── GAMES ENGINE ────────────────────────────────────────────
export interface Game {
  id: string;
  type: "TREASURE_HUNT" | "PHOTO_HUNT" | "URBAN_QUIZ" | "SCAVENGER" | "BLIND_TEST" | "ESCAPE" | "CHALLENGE" | "CUSTOM";
  title: string;
  description: string;
  cityId: string;
  steps: GameStep[];
  maxParticipants: number;
  durationMin: number;
  difficulty: 1 | 2 | 3 | 4 | 5;
  pointsReward: number;
  createdBy: string;
  isPublic: boolean;
}

export interface GameStep {
  order: number;
  type: "CLUE" | "PHOTO" | "QUIZ" | "GPS" | "ACTION";
  title: string;
  instruction: string;
  hint?: string;
  geo?: GeoPoint;
  answer?: string;
  pointsValue: number;
  mediaUrl?: string;
}

// ─── CHAT ENGINE ─────────────────────────────────────────────
export interface ChatRoom {
  id: string;
  type: "DIRECT" | "GROUP" | "ACTIVITY" | "TOURNAMENT";
  name?: string;
  memberIds: string[];
  activityId?: string;
  tournamentId?: string;
  lastMessageAt?: string;
  createdAt: string;
}

export interface Message {
  id: string;
  roomId: string;
  senderId: string;
  text?: string;
  imageUrl?: string;
  type: "TEXT" | "IMAGE" | "SYSTEM" | "GIF";
  sentAt: string;
  readBy: string[];
}

// ─── BUSINESS ENGINE ─────────────────────────────────────────
export interface Business {
  id: string;
  ownerId: string;
  name: string;
  type: PlaceType;
  description: string;
  logo?: string;
  coverImage?: string;
  places: Place[];
  isVerified: boolean;
  subscriptionTier: "FREE" | "STARTER" | "PRO" | "ENTERPRISE";
  createdAt: string;
}

// ─── POINTS / BADGE ENGINE ───────────────────────────────────
export interface PointTransaction {
  id: string;
  userId: string;
  amount: number;
  reason: string;
  activityId?: string;
  tournamentId?: string;
  createdAt: string;
}

export interface BadgeDefinition {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  criteria: BadgeCriteria;
}

export interface BadgeCriteria {
  type: "ACTIVITY_COUNT" | "WIN_COUNT" | "CATEGORY_COUNT" | "REPUTATION" | "SPECIAL";
  category?: ActivityCategory;
  threshold?: number;
}

// ─── MAP ENGINE ──────────────────────────────────────────────
export interface MapMarker {
  id: string;
  type: "ACTIVITY" | "PLACE" | "USER" | "TOURNAMENT" | "GAME";
  geo: GeoPoint;
  label: string;
  emoji: string;
  color: string;
  referenceId: string;
}
