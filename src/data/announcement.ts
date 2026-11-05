export type Announcement = {
  id: string
  title: string
  publishedDate: string
  recipient: string
  author: string
  subject: string
  notice: string
  eventDate: string
  assemblyHours: string
  votingHours: string
  venue: string
  purpose: string
}

export const featuredAnnouncement: Announcement = {
  id: 'afpovai-2026-board-election',
  title: 'AFPOVAI 2026 Board of Directors Election',
  publishedDate: 'November 03, 2026',
  recipient: 'All AFPOVAI Members',
  author: 'Election Committee (ELECOM)',
  subject: 'Notice of 2026 Election for the AFPOVAI Board of Directors',
  notice:
    'Notice is hereby given to all members of the Armed Forces of the Philippines Officers Village Association, Inc. (AFPOVAI) that the Annual Election of the Board of Directors will take place during the General Assembly, in accordance with the Association’s By-Laws and Election Code.',
  eventDate: 'December 05, 2026',
  assemblyHours: '8:00 AM to 4:00 PM',
  votingHours: '9:00 AM to 3:00 PM',
  venue:
    "Phase 3 AFPOVAI Multi-purpose Hall",
  purpose: 'Annual General Assembly and Annual Election of the Board of Directors',
}
