export interface TimelineDetailContent {
  context: string;
  significance: string;
  keyFigures: string[];
  outcomes: string[];
  historicalContext: string;
}

export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
  detailContent: TimelineDetailContent;
}
