export interface Avatar {
  id: number;
  mime_type: string;
  path: string;
  type: string;
  url: string;
  bio: string | null;
  coordinates: string;
}

export interface UserData {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    avatar: Avatar;
    active: number;
    active_job: string | null;
    last_login: string;
    room_id: number | null;
    hours: string;
    minutes: number;
    screenshare_coordinates: unknown | null;
    screenshare_size: unknown | null;
    status: string;
    video_coordinates: unknown | null;
    video_size: unknown | null;
    video_status: unknown | null;
    voice_status: unknown | null;
    schedule_hours_in_week: {
      minutes: number;
      hours: string;
    };
  };
  accessToken: string;
  error: unknown | null;
  isLoading: boolean;
}
